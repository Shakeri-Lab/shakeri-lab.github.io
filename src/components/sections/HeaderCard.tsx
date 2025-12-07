import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Github, GraduationCap, Mail, MapPin, Moon, Sun, Book } from "lucide-react";

interface HeaderCardProps {
  theme: string;
  onToggleTheme: () => void;
}

export function HeaderCard({ theme, onToggleTheme }: HeaderCardProps) {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="py-6">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold dark:text-white mb-4">Shakeri Lab</h1>

          <div className="w-[100px] mb-4">
            <Image
              src="/dynamo-lab-logo.png"
              alt="Shakeri Lab Logo"
              width={100}
              height={100}
              className="h-auto w-full"
              priority
            />
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6 max-w-md">
            <strong>Principled Mathematics. Rigorous AI. Clinical Reality.</strong> Bridging dynamical systems theory and the artificial pancreas to transform human health.
          </p>

          <div className="flex justify-center items-center gap-6 pt-2">
            <Link
              href="mailto:hs9hd@virginia.edu"
              className="hover:text-primary transition-colors"
              title="hs9hd at virginia dot edu"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.google.com/maps/place/1919+Ivy+Rd,+Charlottesville,+VA+22903"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="1919 Ivy Rd, Charlottesville, VA 22903"
            >
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Location</span>
            </Link>
            <Link
              href="https://shakeri-lab.github.io/dl-course-site/"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="Deep Learning Course Website"
            >
              <Book className="h-5 w-5" />
              <span className="sr-only">Deep Learning Course</span>
            </Link>
            <Link
              href="https://scholar.google.com/citations?user=zFIIhGMAAAAJ&hl=en&oi=ao"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar Profile"
            >
              <GraduationCap className="h-5 w-5" />
              <span className="sr-only">Google Scholar</span>
            </Link>
            <Link
              href="https://github.com/Shakeri-Lab"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Organization"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <button
              onClick={onToggleTheme}
              className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ?
                <Sun className="h-5 w-5 text-yellow-500" /> :
                <Moon className="h-5 w-5 text-gray-500" />
              }
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
