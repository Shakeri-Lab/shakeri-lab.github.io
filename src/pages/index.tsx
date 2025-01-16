import { news } from "@/data/news";
import { team } from "@/data/team";
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">  {/* Remove dark:bg-gray-900 */}
  <div className="container mx-auto flex items-center justify-between p-4">
    <div className="w-[120px]">
      <Image
        src="/logo.svg"
        alt="DYNAMO Lab Logo"
        width={120}
        height={120}
        className="h-auto w-full"
        priority
      />
    </div>
    <div className="text-center max-w-2xl">
      <h1 className="text-3xl font-bold text-black">DYNAMO Lab</h1>
      <p className="text-sm text-gray-600 mt-2">
        Advancing Machine Intelligence for Dynamical Systems and Control in Biomedical Applications
      </p>
    </div>
    <div className="w-[300px]">
      <Image
        src="/SDS_Logo_Color-Screen.png"
        alt="School of Data Science, University of Virginia"
        width={300}
        height={75}
        className="h-auto w-full"
        priority
      />
    </div>
  </div>
</header>
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
              <Link 
                href="https://github.com/Shakeri-Lab" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span>Software</span>
              </Link>
                <Link 
                  href="https://scholar.google.com/citations?user=zFIIhGMAAAAJ&hl=en&oi=ao" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Publications</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Email: <Link href="mailto:hs9hd@virginia.edu" className="text-primary hover:underline">hs9hd at virginia dot edu</Link></p>
              <p className="text-sm mt-2">Office: Room 436, 1919 Ivy Rd, Charlottesville, VA 22903</p>
            </CardContent>
             </Card>

            <Card>
      <CardHeader>
        <CardTitle className="text-base">Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm text-zinc-700">Principal Investigator</h3>
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
            <h3 className="font-semibold text-sm text-zinc-700">Current Members</h3>
            <ul className="space-y-2">
              {team.currentMembers.map((member, index) => (
                <li key={index} className="text-sm">
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
            <h3 className="font-semibold text-sm text-zinc-700">Alumni</h3>
            <ul className="space-y-2">
              {team.alumni.map((member, index) => (
                <li key={index} className="text-sm">
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

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Join Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  We are always looking for passionate students interested in machine learning and control systems. 
                  Reach out to learn about our open PhD positions!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Research Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  At DYNAMO Lab, we develop intelligent algorithms to control and understand complex dynamical systems in biomedical applications. 
                  Our interdisciplinary approach bridges machine learning, control theory, and data science to tackle challenges ranging from cellular dynamics to human health.
                </p>
                <p className="text-sm">
                  While our primary focus is on biomedical applications, we also explore intelligent control and data analysis techniques in areas like traffic optimization 
                  and change-point detection in temporal multispectral images. These projects showcase the versatility of our methods and their applicability to various complex systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700">Smart Artificial Pancreas Systems</h3>
                  <p className="text-sm">
                    In collaboration with the <strong>UVA Center of Diabetes</strong>, we are pioneering "trainable" artificial pancreas systems that leverage 
                    machine learning to personalize diabetes management for individuals with <strong>Type 1 Diabetes</strong>. By harnessing vast amounts of continuous 
                    glucose monitoring (CGM) and insulin delivery data, we're developing smarter, fully automated closed-loop control algorithms. Our goal is to improve 
                    patient outcomes and enhance quality of life by providing more precise and adaptive insulin delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700">Single-Cell Signaling Dynamics</h3>
                  <p className="text-sm">
                    Our team is creating novel learning frameworks to analyze how individual cells respond to different stimuli. By focusing on signaling molecules 
                    and transcription factors, we aim to uncover how cells make heterogeneous and context-dependent decisions. We integrate high-dimensional single-cell 
                    measurements with live-cell trajectory data using advanced techniques like <strong>stochastic flow matching</strong> and <strong>spectral operator analysis</strong>. 
                    This research advances our understanding of cellular behavior at the single-cell level, potentially leading to new therapeutic strategies in precision medicine.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700">Explainable AI for Glaucoma Risk Assessment</h3>
                  <p className="text-sm">
                    We are developing <strong>GUIDE</strong> (Glaucoma Understanding and Integrated Data Evaluation), an explainable AI framework that uses <strong>foundation models</strong> 
                    to integrate clinical data, imaging, electronic health records, and social determinants of health. Our goal is to provide personalized glaucoma risk assessments, 
                    enhance fairness, and reduce health disparities through transparent and robust multimodal models. By employing <strong>hierarchical fusion models</strong> and focusing 
                    on <strong>contextual transparency</strong>, we aim to transform glaucoma management and improve patient outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700">Operator-Theoretic Methods in Dynamical Systems</h3>
                  <p className="text-sm">
                    Employing operator theory, particularly within the <strong>Koopman framework</strong>, we analyze the spectral characteristics of complex dynamical systems. 
                    This work advances reduced-order modeling and innovative control strategies, improving <strong>Model Predictive Control (MPC)</strong> and model-based learning 
                    for high-dimensional, nonlinear systems. Our approach addresses challenges like instabilities from continuous spectra and sensitivity to initial conditions, 
                    enhancing the performance of <strong>model-based reinforcement learning</strong> and <strong>physics-informed machine learning (ML)</strong> methods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-zinc-700">Complex Networks and Graph Data Analysis</h3>
                  <p className="text-sm">
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
          <Card>
            <CardHeader>
              <CardTitle className="text-base">News</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              {/* Increased height from 600px to 900px (1.5x) */}
              <div className="h-[900px] overflow-y-auto pr-2 space-y-4 scrollbar-thin">
                {news.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="pb-4 border-b border-gray-100 last:border-0"
                  >
                    {/* Existing news item content */}
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.content}</p>
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
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none flex items-end justify-center pb-2">
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
