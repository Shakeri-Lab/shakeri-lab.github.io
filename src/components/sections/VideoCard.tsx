import { Card, CardContent } from "@/components/ui/card";

export function VideoCard() {
  return (
    <Card className="overflow-hidden bg-[var(--surface-elevated)]">
      <CardContent className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6c3mOsUm3cI"
          title="Shakeri Lab Introduction Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md border border-[var(--border)]"
          loading="lazy"
        />
      </CardContent>
    </Card>
  );
}
