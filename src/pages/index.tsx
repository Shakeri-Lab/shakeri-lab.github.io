import { news } from "@/data/news";
import { team } from "@/data/team";
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GraduationCap, Mail, MapPin, Moon, Sun, Book } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Component() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
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
    <div className="min-h-screen bg-background dark:bg-gray-900 dark:text-white">
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="py-6">
                <div className="flex flex-col items-center">
                  {/* Title above logo */}
                  <h1 className="text-2xl font-bold dark:text-white mb-4">Shakeri Lab</h1>
                  
                  {/* Logo */}
                  <div className="w-[100px] mb-4">
                    <Image
                      src="/dynamo-lab-logo.png"
                      alt="Shakeri Lab Logo"
                      width={100}
                      height={100}
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                  
                  {/* Description below logo */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6 max-w-md">
                    Advancing Machine Intelligence for Dynamical Systems and Control in Biomedical Applications
                  </p>
                  
                  {/* All icons in a row at the bottom */}
                  <div className="flex justify-center items-center gap-6 pt-2">
                    <Link 
                      href="mailto:hs9hd@virginia.edu" 
                      className="hover:text-primary transition-colors"
                      title="hs9hd at virginia dot edu"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="https://www.google.com/maps/place/1919+Ivy+Rd,+Charlottesville,+VA+22903" 
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="1919 Ivy Rd, Charlottesville, VA 22903"
                    >
                      <MapPin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://shakeri-lab.github.io/dl-course-site/"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Deep Learning Course Website"
                    >
                      <Book className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="https://scholar.google.com/citations?user=zFIIhGMAAAAJ&hl=en&oi=ao" 
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GraduationCap className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="https://github.com/Shakeri-Lab" 
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <button 
                      onClick={toggleTheme} 
                      className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Toggle dark mode"
                    >
                      {theme === "dark" ? 
                        <Sun className="h-5 w-5 text-yellow-500" /> : 
                        <Moon className="h-5 w-5 text-gray-500" />
                      }
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-base dark:text-white">Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Principal Investigator</h3>
                    <Link 
                      href={team.pi.link} 
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {team.pi.name}
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Current Members</h3>
                    <ul className="space-y-2">
                      {team.currentMembers.map((member, index) => (
                        <li key={index} className="text-sm dark:text-gray-300">
                          {member.link ? (
                            <Link 
                              href={member.link} 
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {member.name}
                            </Link>
                          ) : (
                            member.name
                          )} - {member.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Alumni</h3>
                    <ul className="space-y-2">
                      {team.alumni.map((member, index) => (
                        <li key={index} className="text-sm dark:text-gray-300">
                          {member.link ? (
                            <Link 
                              href={member.link} 
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {member.name}
                            </Link>
                          ) : (
                            member.name
                          )} - {member.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/6c3mOsUm3cI" 
                  title="Shakeri Lab Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-md">
                </iframe>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-base dark:text-white">Join Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm dark:text-gray-300">
                  We are always looking for passionate students interested in machine learning and control systems. 
                  Reach out to learn about our open PhD positions!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Research Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm dark:text-gray-300">
                  At Shakeri Lab, we develop intelligent algorithms to control and understand complex dynamical systems in biomedical applications. 
                  Our interdisciplinary approach bridges machine learning, control theory, and data science to tackle challenges ranging from cellular dynamics to human health.
                </p>
                <p className="text-sm dark:text-gray-300">
                  While our primary focus is on biomedical applications, we also explore intelligent control and data analysis techniques in areas like traffic optimization 
                  and change-point detection in temporal multispectral images. These projects showcase the versatility of our methods and their applicability to various complex systems.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Current Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Smart Artificial Pancreas Systems</h3>
                  <p className="text-sm dark:text-gray-300">
                    In collaboration with the <strong className="dark:text-white">UVA Center of Diabetes</strong>, we are pioneering "trainable" artificial pancreas systems that leverage 
                    machine learning to personalize diabetes management for individuals with <strong className="dark:text-white">Type 1 Diabetes</strong>. By harnessing vast amounts of continuous 
                    glucose monitoring (CGM) and insulin delivery data, we're developing smarter, fully automated closed-loop control algorithms. Our goal is to improve 
                    patient outcomes and enhance quality of life by providing more precise and adaptive insulin delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Single-Cell Signaling Dynamics</h3>
                  <p className="text-sm dark:text-gray-300">
                    Our team is creating novel learning frameworks to analyze how individual cells respond to different stimuli. By focusing on signaling molecules 
                    and transcription factors, we aim to uncover how cells make heterogeneous and context-dependent decisions. We integrate high-dimensional single-cell 
                    measurements with live-cell trajectory data using advanced techniques like <strong>stochastic flow matching</strong> and <strong>spectral operator analysis</strong>. 
                    This research advances our understanding of cellular behavior at the single-cell level, potentially leading to new therapeutic strategies in precision medicine.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Explainable AI for Glaucoma Risk Assessment</h3>
                  <p className="text-sm dark:text-gray-300">
                    We are developing <strong>GUIDE</strong> (Glaucoma Understanding and Integrated Data Evaluation), an explainable AI framework that uses <strong>foundation models</strong> 
                    to integrate clinical data, imaging, electronic health records, and social determinants of health. Our goal is to provide personalized glaucoma risk assessments, 
                    enhance fairness, and reduce health disparities through transparent and robust multimodal models. By employing <strong>hierarchical fusion models</strong> and focusing 
                    on <strong>contextual transparency</strong>, we aim to transform glaucoma management and improve patient outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Operator-Theoretic Methods in Dynamical Systems</h3>
                  <p className="text-sm dark:text-gray-300">
                    Employing operator theory, particularly within the <strong>Koopman framework</strong>, we analyze the spectral characteristics of complex dynamical systems. 
                    This work advances reduced-order modeling and innovative control strategies, improving <strong>Model Predictive Control (MPC)</strong> and model-based learning 
                    for high-dimensional, nonlinear systems. Our approach addresses challenges like instabilities from continuous spectra and sensitivity to initial conditions, 
                    enhancing the performance of <strong>model-based reinforcement learning</strong> and <strong>physics-informed machine learning (ML)</strong> methods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700 dark:text-zinc-300">Complex Networks and Graph Data Analysis</h3>
                  <p className="text-sm dark:text-gray-300">
                    We investigate the dynamics of complex networks to understand how topological features influence processes such as information spread, disease transmission, 
                    and network robustness. By leveraging <strong>machine learning</strong>, <strong>dynamical systems theory</strong>, and <strong>reinforcement learning</strong>, 
                    we design and optimize network architectures for desired functionalities in communication networks, power grids, and social systems. Our research enhances the 
                    capabilities of <strong>Graph Neural Networks (GNNs)</strong> by incorporating high-order structures, capturing nuanced relationships, and improving community detection.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-base dark:text-white">News</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              {/* Increased height from 900px to 1350px (50% more) */}
              <div className="h-[1350px] overflow-y-auto pr-2 space-y-4 scrollbar-thin">
                {news.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0"
                  >
                    {/* Existing news item content */}
                    <p className="text-xs text-muted-foreground dark:text-gray-400">{item.date}</p>
                    <h3 className="text-sm font-semibold dark:text-white">{item.title}</h3>
                    <p className="text-sm dark:text-gray-300">{item.content}</p>
                    {item.links && item.links.length > 0 && (
                      <div className="mt-2 space-x-4">
                        {item.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.url}
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text} →
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Scroll indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none flex items-end justify-center pb-2">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-gray-400 text-sm flex items-center gap-1"
                >
                  Scroll for more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </motion.div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
