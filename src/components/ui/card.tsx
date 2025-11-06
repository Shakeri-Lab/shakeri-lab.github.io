import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-white/30 bg-white/70 text-slate-700 shadow-[0_32px_60px_-32px_rgba(0,40,98,0.55)] backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:shadow-[0_42px_90px_-38px_rgba(0,40,98,0.6)] dark:border-white/10 dark:bg-[#0e162b]/70 dark:text-slate-100",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-6 pb-4", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-snug text-[#002862] dark:text-white",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-6 pt-0 text-sm leading-relaxed text-slate-600 dark:text-slate-200",
        className
      )}
      {...props}
    />
  );
}
