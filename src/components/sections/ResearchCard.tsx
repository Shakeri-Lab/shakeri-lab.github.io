import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResearchCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          We don&apos;t just model data&mdash;we close the loop. Operating between the UVA School of Data Science and the Center for Diabetes Technology, we span the full spectrum from proving theorems on whiteboards to deploying algorithms in FDA-regulated clinical trials.
        </p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          Our contributions run from the theory of deep learning and control to clinical research. We work across modern AI, from foundation models and natural language to reinforcement learning, all toward a single goal: <strong className="text-[var(--muted-strong)]">treating and curing diabetes</strong>.
        </p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          We reject black-box health AI. Our systems are grounded in the geometric and spectral structure of the underlying dynamics, moving ideas from fundamental operator theory through in silico generative modeling to closed-loop clinical translation.
        </p>
      </CardContent>
    </Card>
  );
}
