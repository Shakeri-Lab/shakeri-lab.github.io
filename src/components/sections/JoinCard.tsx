import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function JoinCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Join Our Team</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[var(--muted)]">
          We are always looking for passionate students interested in machine learning and control systems.
          Reach out to learn about our open PhD positions!
        </p>
      </CardContent>
    </Card>
  );
}
