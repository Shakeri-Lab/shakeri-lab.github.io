import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "solid" | "outline";
}

export function Button({
  className = "",
  asChild = false,
  variant = "outline",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

  const outlineStyles =
    "border border-[#002862]/30 text-[#002862] shadow-[0_20px_45px_-32px_rgba(0,40,98,0.55)] hover:-translate-y-1 hover:border-[#002862]/70 hover:bg-gradient-to-r hover:from-white/80 hover:to-white/70 hover:shadow-[0_26px_65px_-36px_rgba(0,40,98,0.68)] focus-visible:ring-[#FFBA69]/50 focus-visible:ring-offset-white";

  const solidStyles =
    "border border-transparent bg-gradient-to-r from-[#002862] to-[#0b4d63] text-white shadow-[0_24px_60px_-34px_rgba(0,40,98,0.6)] hover:-translate-y-1 hover:shadow-[0_32px_80px_-32px_rgba(0,40,98,0.75)] focus-visible:ring-[#FFBA69]/60 focus-visible:ring-offset-white";

  const styles = cn(
    baseStyles,
    variant === "solid" ? solidStyles : outlineStyles,
    className
  );

  return <Comp className={styles} {...props} />;
}
