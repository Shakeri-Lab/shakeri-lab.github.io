import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResearchCard() {
  return (
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
  );
}
