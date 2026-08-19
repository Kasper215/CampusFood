import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600 hover:scale-[1.02]",
      secondary: "bg-white border border-zinc-200 text-zinc-900 hover:border-primary-500",
      ghost: "hover:bg-zinc-100 text-zinc-700",
      outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
    }
    
    const sizes = {
      sm: "h-9 px-3 text-sm rounded-md",
      md: "h-11 px-5 text-base rounded-lg",
      lg: "h-12 px-7 text-lg rounded-lg",
      icon: "h-10 w-10 rounded-full",
    }
    
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }