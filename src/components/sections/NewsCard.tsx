import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { news } from "@/data/news";

export function NewsCard() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-base dark:text-white">News</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="h-[1350px] overflow-y-auto pr-2 space-y-4 scrollbar-thin">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0"
            >
              <p className="text-xs text-muted-foreground dark:text-gray-400">{item.date}</p>
              <h3 className="text-sm font-semibold dark:text-white">{item.title}</h3>
              <p className="text-sm dark:text-gray-300">{item.content}</p>
              {item.links && item.links.length > 0 && (
                <div className="mt-2 space-x-4">
                  {item.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text} →
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none flex items-end justify-center pb-2">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm flex items-center gap-1"
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
