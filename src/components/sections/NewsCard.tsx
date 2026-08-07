import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { news } from "@/data/news";
import type { NewsItem } from "@/types";

function NewsEntry({ item, index }: { item: NewsItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  // Only offer "See more" when the copy is actually clipped (measured while collapsed).
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      if (!expanded) setOverflows(el.scrollHeight > el.clientHeight + 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [expanded]);

  const canToggle = overflows || expanded || Boolean(item.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-b border-[var(--border)] pb-4 last:border-0"
    >
      <p className="text-xs text-[var(--muted)] opacity-80">{item.date}</p>
      <h3 className="text-sm font-semibold text-[var(--muted-strong)]">{item.title}</h3>

      <p
        ref={contentRef}
        className={`text-sm text-[var(--muted)] ${expanded ? "" : "line-clamp-3"}`}
      >
        {item.content}
      </p>

      {canToggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-1 rounded text-sm font-medium text-[var(--link)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}

      {expanded && item.image && (
        <div className="mt-3 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] p-2">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            className="mx-auto h-auto max-h-[360px] w-auto max-w-full rounded-md object-contain"
          />
        </div>
      )}

      {item.links && item.links.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
          {item.links.map((link, linkIndex) => (
            <Link
              key={linkIndex}
              href={link.url}
              className="inline-flex items-center gap-1 text-sm text-[var(--link)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text} →
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function NewsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">News</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="space-y-4 lg:h-[1350px] lg:overflow-y-auto lg:pr-2 lg:scrollbar-thin">
          {news.map((item, index) => (
            <NewsEntry key={index} item={item} index={index} />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-16 items-end justify-center bg-gradient-to-t from-[var(--surface)] to-transparent pb-2 lg:flex">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1 text-sm text-[var(--muted)]"
          >
            Scroll for more
            <svg
              className="w-4 h-4"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
