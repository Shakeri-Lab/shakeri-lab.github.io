import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Evergreen descriptions of the lab's research, ordered from theory to clinic.
// Papers, talks, and grants belong in src/data/news.ts, not here.
const projects = [
  {
    title: "Deep Learning & Foundation Models for Time-Series",
    description: (
      <>
        We study why deep sequence models succeed or fail on continuous physiological signals, and we use that theory to adapt Transformers, foundation models, and ideas from natural language processing to glucose and insulin data. We tackle challenges like Driver-Blindness in glucose forecasting and build architectures that robustly fuse multimodal inputs without sacrificing interpretability.
      </>
    ),
  },
  {
    title: "Learning-Based Control & The Artificial Pancreas",
    description: (
      <>
        Within the Center for Diabetes Technology, we move beyond PID toward personalized, adaptive closed-loop control&mdash;including Model Predictive Control, Active Learning, and safety-critical Reinforcement Learning&mdash;that safely navigates nonlinear, time-varying metabolic dynamics in real time.
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
    title: "Generative Modeling & Complex Systems",
    description: (
      <>
        Using techniques such as stochastic flow matching, non-Markovian processes, and diffusion models, we model interdependent systems from molecular pathways to population-level epidemics&mdash;creating digital twins for in silico trials and stress-testing clinical policies.
      </>
    ),
  },
  {
    title: "Clinical Research & Translation",
    description: (
      <>
        Our algorithms are built to leave the lab. Working with clinicians at the Center for Diabetes Technology, we take them into clinical studies of automated insulin delivery and develop tools for detecting diabetes earlier from continuous glucose monitoring (CGM). What we learn in the clinic comes back to the whiteboard.
      </>
    ),
  },
];

export function ProjectsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Areas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="mb-2 font-semibold text-[var(--muted-strong)]">{project.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t border-[var(--border)] pt-6">
          <h3 className="font-semibold text-[var(--muted-strong)]">Join Our Team</h3>
          <p className="text-sm text-[var(--muted)]">
            We are recruiting PhD students and postdocs with machine learning and control backgrounds who are excited to bridge hard mathematics with applied clinical impact.
          </p>
          <div className="space-y-2 text-sm text-[var(--muted)]">
            <p><strong>The Architect</strong>: adapts Transformers, Attention, and LLM ideas to time-series and understands why they work.</p>
            <p><strong>The Theorist</strong>: brings dynamical systems, control, or operator theory to clinical data.</p>
            <p><strong>The Modeler</strong>: uses generative AI or epidemiological modeling to simulate complex, interdependent processes that inform public health and patient care.</p>
          </div>
          <p className="text-sm text-[var(--muted)]">
            If you want to pair rigorous theory with real-world deployment, we&apos;d love to hear from you.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
