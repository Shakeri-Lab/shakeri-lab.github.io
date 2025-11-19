import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function JoinCard() {
  return (
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
  );
}
