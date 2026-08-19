import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { src?: string; fallback?: string; size?: 'sm' | 'md' | 'lg' }>(
  ({ className, src, fallback, size = 'md', ...props }, ref) => {
    const sizes = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full bg-zinc-100",
          sizes[size],
          className
        )}
        {...props}
      >
        {src ? (
          <img
            className="aspect-square h-full w-full object-cover"
            src={src}
            alt="Avatar"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-zinc-500">
            {fallback}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }