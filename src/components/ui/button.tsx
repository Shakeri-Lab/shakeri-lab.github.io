import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps extends 
React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function Button({ className, asChild = false, ...props }: 
ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={`inline-flex items-center justify-center 
rounded-md text-sm font-medium transition-colors 
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
focus-visible:ring-offset-2 disabled:opacity-50 
disabled:pointer-events-none ring-offset-background ${className}`} 
{...props} />
}
