import Head from "next/head";
import { useEffect, useState } from "react";
import {
  HeaderCard,
  TeamCard,
  VideoCard,
  ResearchCard,
  ProjectsCard,
  NewsCard,
  SoftwareCard,
} from "@/components/sections";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Shakeri Lab",
  url: "https://shakeri-lab.github.io/",
  logo: "https://shakeri-lab.github.io/logo-square.jpeg",
  email: "hs9hd@virginia.edu",
  description:
    "University of Virginia research lab studying machine learning, control systems, dynamical systems, and biomedical applications.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1919 Ivy Road",
    addressLocality: "Charlottesville",
    addressRegion: "VA",
    postalCode: "22903",
    addressCountry: "US",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "University of Virginia",
    url: "https://www.virginia.edu/",
  },
  sameAs: [
    "https://github.com/Shakeri-Lab",
    "https://scholar.google.com/citations?user=zFIIhGMAAAAJ",
    "https://shakeri-lab.github.io/dl-course-site/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shakeri Lab",
  url: "https://shakeri-lab.github.io/",
  description:
    "Machine learning, control systems, dynamical systems, and biomedical research at the University of Virginia.",
  publisher: {
    "@type": "ResearchOrganization",
    name: "Shakeri Lab",
  },
};

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <Head>
        <title>Shakeri Lab - Machine Learning & Control Systems Research</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--surface-elevated)] focus:text-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background text-foreground">
        <main id="main-content" className="mx-auto w-full max-w-[90rem] px-3 py-6 sm:px-6 sm:py-8">
          <div className="lab-layout">
            <div className="lab-intro min-w-0">
              <HeaderCard theme={theme} onToggleTheme={toggleTheme} />
            </div>

            <div className="lab-research min-w-0 space-y-6">
              <ResearchCard />
              <ProjectsCard />
              <SoftwareCard />
            </div>

            <div className="lab-team min-w-0 space-y-6">
              <TeamCard />
              <VideoCard />
            </div>

            <div className="lab-news min-w-0">
              <NewsCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
