import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SoftwareCard() {
  const linkClassName =
    "inline-flex min-h-11 items-center rounded text-sm font-medium text-[var(--link)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Software</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <h3 className="font-semibold text-[var(--muted-strong)]">
          Dengue Control Scheduler (Aedes Control)
        </h3>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          Explore how the timing of larvicide, adulticide, and breeding-site removal
          changes temperature-driven relative dengue transmission risk. The browser
          interface compares schedules you choose; the desktop application searches
          for treatment dates that reduce average risk.
        </p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          Software accompanying &ldquo;Optimal scheduling of dengue vector control&rdquo;
          by Aram Vajdi, Lee W. Cohnstaedt, Caterina M. Scoglio, and Heman Shakeri
          in the <em>Journal of Theoretical Biology</em>.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <Link
            href="https://shakeri-lab.github.io/dengue-control-scheduler/"
            className={linkClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open interactive scheduler →
          </Link>
          <Link
            href="https://github.com/Shakeri-Lab/dengue-control-scheduler"
            className={linkClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code and desktop app →
          </Link>
          <Link
            href="https://doi.org/10.1016/j.jtbi.2026.112617"
            className={linkClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the paper →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
