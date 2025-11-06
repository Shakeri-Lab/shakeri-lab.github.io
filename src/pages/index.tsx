import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Sun,
  Book,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { news } from "@/data/news";
import { team } from "@/data/team";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "News", href: "#news" },
];

const contactLinks = [
  {
    icon: Mail,
    href: "mailto:hs9hd@virginia.edu",
    label: "Email Shakeri Lab",
  },
  {
    icon: MapPin,
    href: "https://www.google.com/maps/place/1919+Ivy+Rd,+Charlottesville,+VA+22903",
    label: "Charlottesville, VA",
  },
  {
    icon: Book,
    href: "https://shakeri-lab.github.io/dl-course-site/",
    label: "Deep Learning Course Website",
  },
  {
    icon: GraduationCap,
    href: "https://scholar.google.com/citations?user=zFIIhGMAAAAJ&hl=en&oi=ao",
    label: "Google Scholar",
  },
  {
    icon: Github,
    href: "https://github.com/Shakeri-Lab",
    label: "GitHub",
  },
];

const projectSpectrum = [
  {
    title: "Smart Artificial Pancreas Systems",
    description:
      "In collaboration with the UVA Center of Diabetes, we design fully automated, trainable pancreas systems that leverage reinforcement learning to personalize insulin delivery for individuals with Type 1 Diabetes.",
    gradient: "from-[#F9C27A] to-[#F09062]",
    tagBackground: "rgba(255,241,226,0.78)",
    tags: ["Type 1 Diabetes", "Reinforcement Learning", "CGM Analytics"],
  },
  {
    title: "Single-Cell Signaling Dynamics",
    description:
      "We build learning frameworks that pair high-dimensional snapshot assays with live-cell trajectories using stochastic flow matching and spectral operator analysis to uncover how cells respond to perturbations.",
    gradient: "from-[#F09062] to-[#EA6C77]",
    tagBackground: "rgba(255,227,232,0.78)",
    tags: ["Single-Cell", "Flow Matching", "Precision Medicine"],
  },
  {
    title: "Explainable AI for Glaucoma Risk",
    description:
      "GUIDE integrates clinical data, imaging, electronic health records, and social determinants via hierarchical fusion models to provide transparent glaucoma risk assessments and reduce health disparities.",
    gradient: "from-[#EA6C77] to-[#C26D9F]",
    tagBackground: "rgba(244,221,236,0.8)",
    tags: ["Explainable AI", "Multimodal Fusion", "Healthcare Equity"],
  },
  {
    title: "Operator-Theoretic Control",
    description:
      "Leveraging the Koopman framework, we analyze spectral characteristics to improve reduced-order modeling, model predictive control, and reinforcement learning for high-dimensional nonlinear systems.",
    gradient: "from-[#C26D9F] to-[#7F7DD6]",
    tagBackground: "rgba(229,225,245,0.82)",
    tags: ["Koopman Operators", "MPC", "Operator Learning"],
  },
  {
    title: "Complex Networks and Graph Dynamics",
    description:
      "We study how topology drives phenomena like information spread or robustness, pairing reinforcement learning with graph neural networks to engineer resilient infrastructure and communication networks.",
    gradient: "from-[#7F7DD6] to-[#546FE1]",
    tagBackground: "rgba(223,231,255,0.82)",
    tags: ["Graph Neural Networks", "Network Design", "Robustness"],
  },
];

const accentGlowClass = "shadow-[0_0_24px_rgba(255,186,105,0.45)]";

export default function Component() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(
      '[data-animate="reveal"]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <nav
        className="sticky top-6 z-50 mx-auto flex w-full max-w-5xl items-center gap-4 rounded-full border border-white/30 bg-white/70 px-6 py-3 shadow-[0_12px_30px_-18px_rgba(35,45,75,0.45)] backdrop-blur-2xl"
        data-animate="reveal"
      >
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative inline-flex items-center text-slate-600 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-[#FFBA69] after:via-[#EA6C77] after:to-[#2E77D1] after:content-[''] hover:text-[#002862] hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/70 text-[#002862] shadow-[0_12px_30px_-18px_rgba(35,45,75,0.45)] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_42px_-26px_rgba(0,40,98,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBA69]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-[#FFBA69]" />
            ) : (
              <Moon className="h-5 w-5 text-[#002862]" />
            )}
          </button>

          <div className="flex items-center gap-3">
            <span
              className={`hidden h-2.5 w-2.5 rounded-full bg-[#FFBA69] md:inline-flex ${accentGlowClass}`}
            />
            <div className="flex items-center gap-3">
              <div className="relative h-[52px] w-[52px] overflow-hidden rounded-full border border-white/70 bg-white/80 p-1.5 shadow-[0_10px_28px_-18px_rgba(0,40,98,0.45)]">
                <Image
                  src="/dynamo-lab-logo.png"
                  alt="Circular Shakeri Lab logo"
                  fill
                  className="rounded-full object-contain"
                  sizes="52px"
                  priority
                />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#002862]">
                Shakeri Lab
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-6xl px-6 pt-24">
        <section
          className="mx-auto max-w-4xl text-center"
          id="overview"
          data-animate="reveal"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#002862] shadow-[0_16px_40px_-28px_rgba(0,40,98,0.55)]">
            University of Virginia · Data Science
          </span>
          <h1 className="mt-8 text-4xl font-semibold text-[#002862] md:text-5xl">
            Advancing Machine Intelligence for Dynamical Systems &amp; Control
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#1F2933]/80">
            The Shakeri Lab develops algorithms that pair control theory, data
            science, and machine learning to solve complex biomedical and
            networked systems challenges&mdash;from intelligent insulin delivery
            and cellular decision-making to resilient infrastructure design.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="min-w-[160px]">
              <Link href="#research">Explore Research</Link>
            </Button>
            <Button
              asChild
              variant="solid"
              className="min-w-[160px] text-white"
            >
              <Link
                href="https://github.com/Shakeri-Lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {contactLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/70 shadow-[0_20px_45px_-32px_rgba(0,40,98,0.55)] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(0,40,98,0.7)]"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-[#002862]" />
              </Link>
            ))}
          </div>
        </section>

        <section
          className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)]"
          id="research"
        >
          <div className="space-y-8">
            <Card data-animate="reveal">
              <CardHeader className="pb-0">
                <CardTitle className="text-3xl">
                  Research Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-base">
                <p>
                  At Shakeri Lab, we build intelligent algorithms to control and
                  understand complex dynamical systems in biomedical settings.
                  Our interdisciplinary work connects machine learning, control
                  theory, and data science to tackle questions ranging from
                  cellular dynamics to human health.
                </p>
                <p className="mt-4">
                  Beyond biomedicine, we translate these methods to domains like
                  traffic optimization and change-point detection in temporal
                  multispectral imagery&mdash;demonstrating how principled
                  control and inference unlock new capabilities across complex
                  systems.
                </p>
              </CardContent>
            </Card>

            <Card data-animate="reveal" id="projects">
              <CardHeader className="pb-0">
                <CardTitle className="text-3xl">
                  Current Project Spectrum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {projectSpectrum.map(
                  ({ title, description, gradient, tags, tagBackground }, idx) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-white/40 bg-white/65 p-6 shadow-[0_28px_60px_-36px_rgba(0,40,98,0.48)] backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_36px_80px_-34px_rgba(0,40,98,0.6)]"
                    >
                      <span
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${gradient} text-base font-semibold text-[#1F2933]`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-5 text-xl font-semibold text-[#002862]">
                        {title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#1F2933]/85">
                        {description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1F2933]/75 shadow-[0_10px_24px_-18px_rgba(0,40,98,0.35)]"
                            style={{ backgroundColor: tagBackground }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </CardContent>
            </Card>

            <Card data-animate="reveal">
              <CardHeader className="pb-0">
                <CardTitle className="text-3xl">Lab Spotlight</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-3xl">
                  <iframe
                    title="Shakeri Lab Video"
                    src="https://www.youtube.com/embed/6c3mOsUm3cI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8" id="team">
            <Card data-animate="reveal">
              <CardHeader className="pb-0">
                <CardTitle className="text-3xl">Team</CardTitle>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#64748B]">
                  People powering the lab
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
                      Principal Investigator
                    </p>
                    <Link
                      href={team.pi.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-base font-semibold text-[#002862] underline decoration-[#FFBA69]/70 decoration-2 underline-offset-4 transition-colors hover:text-[#0b4d63]"
                    >
                      {team.pi.name}
                    </Link>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
                      Current Members
                    </p>
                    <ul className="mt-3 space-y-3 text-sm text-[#1F2933]/80">
                      {team.currentMembers.map((member) => (
                        <li key={member.name} className="flex flex-col">
                          {member.link ? (
                            <Link
                              href={member.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#002862] transition-colors hover:text-[#0b4d63]"
                            >
                              {member.name}
                            </Link>
                          ) : (
                            <span className="font-semibold text-[#002862]">
                              {member.name}
                            </span>
                          )}
                          <span className="text-xs uppercase tracking-wide text-[#64748B]">
                            {member.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
                      Alumni
                    </p>
                    <ul className="mt-3 space-y-3 text-sm text-[#1F2933]/80">
                      {team.alumni.map((member) => (
                        <li key={member.name} className="flex flex-col">
                          {member.link ? (
                            <Link
                              href={member.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#002862] transition-colors hover:text-[#0b4d63]"
                            >
                              {member.name}
                            </Link>
                          ) : (
                            <span className="font-semibold text-[#002862]">
                              {member.name}
                            </span>
                          )}
                          <span className="text-xs uppercase tracking-wide text-[#64748B]">
                            {member.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-animate="reveal">
              <CardHeader className="pb-0">
                <CardTitle className="text-3xl">Join Our Team</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-base">
                <p>
                  We are always looking for students excited about machine
                  learning, control systems, and interdisciplinary biomedical
                  research. Reach out to learn more about open PhD positions and
                  collaborative opportunities.
                </p>
                <Button asChild className="mt-6">
                  <Link href="mailto:hs9hd@virginia.edu">
                    Start the conversation
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card data-animate="reveal" id="news" className="hover:translate-y-0">
              <CardHeader className="pb-0">
                <CardTitle className="text-3xl">News</CardTitle>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
                  Latest highlights from the lab
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[540px] overflow-hidden">
                  <div className="absolute inset-0 overflow-y-auto px-6 pt-6 pr-4">
                    <div className="space-y-6 pb-16">
                      {news.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="rounded-2xl border border-white/30 bg-white/65 p-5 shadow-[0_22px_50px_-30px_rgba(0,40,98,0.5)]"
                        >
                          <p className="text-xs uppercase tracking-[0.28em] text-[#64748B]">
                            {item.date}
                          </p>
                          <h3 className="mt-3 text-lg font-semibold text-[#002862]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#1F2933]/75">
                            {item.content}
                          </p>
                          {item.links && item.links.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-3">
                              {item.links.map((link) => (
                                <Link
                                  key={link.url}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 transition-transform duration-300 hover:-translate-y-0.5"
                                >
                                  {link.text} →
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
