import { expect, test } from "@playwright/test";

const widths = [320, 360, 390, 640, 768, 895, 896, 900, 1023, 1024, 1279, 1280, 1440, 1920];

test.beforeEach(async ({ page }) => {
  // Third-party video loading is unrelated to layout and can be nondeterministic.
  await page.route("https://www.youtube.com/**", route => route.abort());
});

test("news hydrates in the same order on the server and browser", async ({ page, request }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  const response = await request.get("/");
  const html = await response.text();
  const serverDates = [...html.matchAll(/<p class="text-xs[^\"]*">([^<]+)<\/p>/g)].map(match => match[1]);
  expect(serverDates.length).toBeGreaterThan(0);
  await page.addInitScript(() => {
    if (window === window.top) localStorage.setItem("theme", "dark");
  });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Switch to light mode" })).toBeVisible();
  const browserDates = await page.locator('[aria-label="Lab news"] p.text-xs').allTextContents();
  expect(browserDates).toEqual(serverDates);
  expect(errors).toEqual([]);
});

for (const theme of ["light", "dark"] as const) {
  test(`layout remains readable while resizing in ${theme} mode`, async ({ page }, testInfo) => {
    await page.addInitScript(value => {
      if (window === window.top) localStorage.setItem("theme", value);
    }, theme);
    await page.goto("/");
    await expect(page.getByRole("button", { name: `Switch to ${theme === "light" ? "dark" : "light"} mode` })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);

    // Resize in both directions without reloading, including both sides of each breakpoint.
    for (const width of [...widths, 1279, 896, 895, 390]) {
      await page.setViewportSize({ width, height: 900 });
      const layout = await page.evaluate(() => {
        const rect = (selector: string) => {
          const { x, y, width, height, right, bottom } = document.querySelector(selector)!.getBoundingClientRect();
          return { x, y, width, height, right, bottom };
        };
        const link = document.querySelector('[title="Deep Learning Course Website"]')!;
        const title = link.querySelector("span")!;
        const titleStyle = getComputedStyle(title);
        const news = document.querySelector('[aria-label="Lab news"]')!;
        const overflow = [...document.querySelectorAll("main *")].filter(element => {
          const box = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return box.width > 1 && style.visibility !== "hidden" && style.clip === "auto"
            && (box.x < -1 || box.right > innerWidth + 1);
        }).map(element => `${element.tagName}.${element.className}`);
        return {
          intro: rect(".lab-intro"), research: rect(".lab-research"),
          team: rect(".lab-team"), news: rect(".lab-news"),
          courseLines: title.getBoundingClientRect().height / parseFloat(titleStyle.lineHeight),
          newsScrolls: ["auto", "scroll"].includes(getComputedStyle(news).overflowY),
          scrollWidth: document.documentElement.scrollWidth, overflow,
        };
      });

      expect(layout.scrollWidth, `${width}px document overflow`).toBeLessThanOrEqual(width);
      expect(layout.overflow, `${width}px clipped content`).toEqual([]);
      expect(layout.courseLines, `${width}px featured course wrapping`).toBeLessThanOrEqual(2.1);
      expect(layout.research.width, `${width}px research width`).toBeGreaterThanOrEqual(width < 896 ? width - 50 : 500);
      if (width < 896) {
        expect(layout.research.y).toBeGreaterThanOrEqual(layout.intro.bottom);
        expect(layout.research.y).toBeLessThan(layout.team.y);
        expect(layout.research.y - layout.intro.bottom).toBeLessThanOrEqual(25);
      } else {
        expect(Math.abs(layout.intro.y - layout.research.y)).toBeLessThan(1);
        expect(layout.intro.width).toBeGreaterThanOrEqual(272);
        expect(layout.team.y - layout.intro.bottom).toBeLessThanOrEqual(25);
      }
      if (width < 1280) {
        expect(layout.newsScrolls).toBe(false);
        expect(layout.news.y).toBeGreaterThanOrEqual(Math.max(layout.team.bottom, layout.research.bottom));
      } else {
        expect(layout.newsScrolls).toBe(true);
        expect(layout.news.width).toBeGreaterThanOrEqual(272);
        expect(layout.news.x).toBeGreaterThan(layout.research.right);
        expect(Math.abs(layout.news.y - layout.research.y)).toBeLessThan(1);
      }

      if ([390, 900, 1024, 1280, 1440].includes(width)) {
        await page.screenshot({ path: testInfo.outputPath(`${theme}-${width}.png`) });
      }
    }
  });
}

test("news expansion survives desktop-to-phone resizing", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const news = page.getByRole("region", { name: "Lab news" });
  const entry = news.locator(":scope > div").first();
  const toggle = entry.getByRole("button");
  await expect(toggle).toHaveText("See more");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(toggle).toHaveText("See less");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await page.setViewportSize({ width: 1280, height: 900 });
  await news.focus();
  await page.keyboard.press("End");
  await expect.poll(() => news.evaluate(el => el.scrollTop)).toBeGreaterThan(0);
  const lastLink = news.getByRole("link").last();
  await lastLink.focus();
  await expect(lastLink).toBeInViewport();
});

test.describe("touch browsers", () => {
  test.use({ isMobile: true, hasTouch: true, viewport: { width: 390, height: 844 } });

  test("theme, news and video work in portrait and landscape", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Switch to dark mode" }).tap();
    await expect(page.locator("html")).toHaveClass(/dark/);
    const news = page.getByRole("region", { name: "Lab news" });
    const toggle = news.getByRole("button", { name: "See more" }).first();
    await toggle.tap();
    await expect(news.getByRole("button", { name: "See less" }).first()).toBeVisible();
    await page.setViewportSize({ width: 844, height: 390 });
    const video = await page.locator("iframe").boundingBox();
    expect(video).not.toBeNull();
    expect(video!.width / video!.height).toBeCloseTo(16 / 9, 1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(844);
  });
});
