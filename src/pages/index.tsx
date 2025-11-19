import Head from "next/head";
import { useEffect, useState } from "react";
import {
  HeaderCard,
  TeamCard,
  VideoCard,
  JoinCard,
  ResearchCard,
  ProjectsCard,
  NewsCard,
} from "@/components/sections";

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
      </Head>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background dark:bg-gray-900 dark:text-white">
        <main id="main-content" className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-3 space-y-6">
              <HeaderCard theme={theme} onToggleTheme={toggleTheme} />
              <TeamCard />
              <VideoCard />
              <JoinCard />
            </div>

            {/* Middle Column */}
            <div className="lg:col-span-6 space-y-6">
              <ResearchCard />
              <ProjectsCard />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3">
              <NewsCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
