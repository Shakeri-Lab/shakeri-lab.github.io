import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Smart Artificial Pancreas Systems",
    description: (
      <>
        In collaboration with the <strong className="dark:text-white">UVA Center of Diabetes</strong>, we are pioneering &quot;trainable&quot; artificial pancreas systems that leverage
        machine learning to personalize diabetes management for individuals with <strong className="dark:text-white">Type 1 Diabetes</strong>. By harnessing vast amounts of continuous
        glucose monitoring (CGM) and insulin delivery data, we&apos;re developing smarter, fully automated closed-loop control algorithms. Our goal is to improve
        patient outcomes and enhance quality of life by providing more precise and adaptive insulin delivery.
      </>
    ),
  },
  {
    title: "Single-Cell Signaling Dynamics",
    description: (
      <>
        Our team is creating novel learning frameworks to analyze how individual cells respond to different stimuli. By focusing on signaling molecules
        and transcription factors, we aim to uncover how cells make heterogeneous and context-dependent decisions. We integrate high-dimensional single-cell
        measurements with live-cell trajectory data using advanced techniques like <strong>stochastic flow matching</strong> and <strong>spectral operator analysis</strong>.
        This research advances our understanding of cellular behavior at the single-cell level, potentially leading to new therapeutic strategies in precision medicine.
      </>
    ),
  },
  {
    title: "Explainable AI for Glaucoma Risk Assessment",
    description: (
      <>
        We are developing <strong>GUIDE</strong> (Glaucoma Understanding and Integrated Data Evaluation), an explainable AI framework that uses <strong>foundation models</strong>
        to integrate clinical data, imaging, electronic health records, and social determinants of health. Our goal is to provide personalized glaucoma risk assessments,
        enhance fairness, and reduce health disparities through transparent and robust multimodal models. By employing <strong>hierarchical fusion models</strong> and focusing
        on <strong>contextual transparency</strong>, we aim to transform glaucoma management and improve patient outcomes.
      </>
    ),
  },
  {
    title: "Operator-Theoretic Methods in Dynamical Systems",
    description: (
      <>
        Employing operator theory, particularly within the <strong>Koopman framework</strong>, we analyze the spectral characteristics of complex dynamical systems.
        This work advances reduced-order modeling and innovative control strategies, improving <strong>Model Predictive Control (MPC)</strong> and model-based learning
        for high-dimensional, nonlinear systems. Our approach addresses challenges like instabilities from continuous spectra and sensitivity to initial conditions,
        enhancing the performance of <strong>model-based reinforcement learning</strong> and <strong>physics-informed machine learning (ML)</strong> methods.
      </>
    ),
  },
  {
    title: "Complex Networks and Graph Data Analysis",
    description: (
      <>
        We investigate the dynamics of complex networks to understand how topological features influence processes such as information spread, disease transmission,
        and network robustness. By leveraging <strong>machine learning</strong>, <strong>dynamical systems theory</strong>, and <strong>reinforcement learning</strong>,
        we design and optimize network architectures for desired functionalities in communication networks, power grids, and social systems. Our research enhances the
        capabilities of <strong>Graph Neural Networks (GNNs)</strong> by incorporating high-order structures, capturing nuanced relationships, and improving community detection.
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
