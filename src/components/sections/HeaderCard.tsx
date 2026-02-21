import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Github, GraduationCap, Mail, MapPin, Moon, Sun, Book } from "lucide-react";

interface HeaderCardProps {
  theme: string;
  onToggleTheme: () => void;
}

export function HeaderCard({ theme, onToggleTheme }: HeaderCardProps) {
  const iconClassName =
    "rounded-sm text-[var(--muted)] transition-colors hover:text-[var(--link)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-elevated)]";

  return (
    <Card className="bg-[var(--surface-elevated)]">
      <CardContent className="py-6">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-2xl font-bold tracking-tight">Shakeri Lab</h1>

          <div className="mb-4 w-[96px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-1.5">
            <Image
              src="/logo-square.jpeg"
              alt="Shakeri Lab Logo"
              width={88}
              height={88}
              className="h-[88px] w-[88px] rounded-xl object-cover"
              priority
            />
          </div>

          <p className="mb-6 max-w-md text-center text-sm text-[var(--muted)]">
            <strong>Principled Mathematics. Rigorous AI. Clinical Reality.</strong> Bridging dynamical systems theory and the artificial pancreas to transform human health.
          </p>

          <div className="flex items-center justify-center gap-6 pt-2">
            <Link
              href="mailto:hs9hd@virginia.edu"
              className={iconClassName}
              title="hs9hd at virginia dot edu"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.google.com/maps/place/1919+Ivy+Rd,+Charlottesville,+VA+22903"
              className={iconClassName}
              target="_blank"
              rel="noopener noreferrer"
              title="1919 Ivy Rd, Charlottesville, VA 22903"
            >
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Location</span>
            </Link>
            <Link
              href="https://shakeri-lab.github.io/dl-course-site/"
              className={iconClassName}
              target="_blank"
              rel="noopener noreferrer"
              title="Deep Learning Course Website"
            >
              <Book className="h-5 w-5" />
              <span className="sr-only">Deep Learning Course</span>
            </Link>
            <Link
              href="https://scholar.google.com/citations?user=zFIIhGMAAAAJ&hl=en&oi=ao"
              className={iconClassName}
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar Profile"
            >
              <GraduationCap className="h-5 w-5" />
              <span className="sr-only">Google Scholar</span>
            </Link>
            <Link
              href="https://github.com/Shakeri-Lab"
              className={iconClassName}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Organization"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <button
              onClick={onToggleTheme}
              className="rounded-md p-1.5 text-[var(--muted)] transition-colors hover:bg-white/10 hover:text-[var(--link)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2 focus:ring-offset-[var(--surface-elevated)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ?
                <Sun className="h-5 w-5 text-amber-400" /> :
                <Moon className="h-5 w-5 text-[var(--muted)]" />
              }
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
