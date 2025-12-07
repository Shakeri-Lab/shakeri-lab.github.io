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
  {
    title: "We're Looking For Builders Who Bridge Theory & Practice",
    description: (
      <>
        The Architect: adapts Transformers, Attention, and LLM ideas to time-series and knows why they work. The Theorist: brings dynamical systems, control, or operator theory to clinical data. The Modeler: uses generative AI or epidemiological modeling to simulate complex, interdependent processes that inform public health and patient care.
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
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2 text-zinc-700 dark:text-zinc-300">{project.title}</h3>
            <p className="text-sm dark:text-gray-300">{project.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
