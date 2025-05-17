import * as React from "react"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number
    max?: number
    color?: string
  }
>(({ className, value, max = 100, color = "bg-primary", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("progress-bar", className)}
    {...props}
  >
    <div
      className={`progress-bar-fill ${color}`}
      style={{ width: `${(value / max) * 100}%` }}
    />
  </div>
))
Progress.displayName = "Progress"

export { Progress }
