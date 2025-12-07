import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Learning-Based Control & The Artificial Pancreas",
    description: (
      <>
        Within the Center for Diabetes Technology, we move beyond PID toward personalized, adaptive closed-loop control&mdash;including Model Predictive Control, Active Learning, and safety-critical Reinforcement Learning&mdash;that safely navigates nonlinear, time-varying metabolic dynamics in real time.
      </>
    ),
  },
  {
    title: "Deep Learning & Foundation Models for Time-Series",
    description: (
      <>
        We adapt the successes of Transformers and foundation models to continuous physiological signals, tackling challenges like Driver-Blindness in glucose forecasting and building architectures that robustly fuse multimodal inputs without sacrificing interpretability.
      </>
    ),
  },
  {
    title: "Generative Modeling & Complex Systems",
    description: (
      <>
        Using techniques such as stochastic flow matching, non-Markovian processes, and diffusion models, we model interdependent systems from molecular pathways to population-level epidemics&mdash;creating digital twins for in silico trials and stress-testing clinical policies.
      </>
    ),
  },
  {
    title: "Operator-Theoretic Machine Learning",
    description: (
      <>
        Leveraging Koopman operator theory and spectral methods, we build globally linear representations of nonlinear dynamics to secure the guarantees and computational tractability needed for safety-critical medical devices and high-stakes decision systems.
      </>
    ),
  },
];

export function ProjectsCard() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-white">Current Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2 text-zinc-700 dark:text-zinc-300">{project.title}</h3>
              <p className="text-sm dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 dark:border-gray-700 space-y-4">
          <h3 className="font-semibold text-zinc-700 dark:text-zinc-200">Join Our Team</h3>
          <p className="text-sm dark:text-gray-300">
            We are recruiting PhD students and postdocs who are excited to bridge hard mathematics with applied clinical impact.
          </p>
          <div className="space-y-2 text-sm dark:text-gray-300">
            <p><strong>The Architect</strong>: adapts Transformers, Attention, and LLM ideas to time-series and understands why they work.</p>
            <p><strong>The Theorist</strong>: brings dynamical systems, control, or operator theory to clinical data.</p>
            <p><strong>The Modeler</strong>: uses generative AI or epidemiological modeling to simulate complex, interdependent processes that inform public health and patient care.</p>
          </div>
          <p className="text-sm dark:text-gray-300">
            If you want to pair rigorous theory with real-world deployment, we&apos;d love to hear from you.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
