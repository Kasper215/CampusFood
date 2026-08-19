import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'success' | 'warning' | 'error' | 'info' }>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-zinc-100 text-zinc-700",
      success: "bg-primary-50 text-primary-600",
      warning: "bg-yellow-50 text-yellow-600",
      error: "bg-red-50 text-red-600",
      info: "bg-blue-50 text-blue-600",
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }