"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "glass";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "right",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

    const variantStyles = {
      primary:
        "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 border border-white/10 hover:-translate-y-0.5",
      secondary:
        "bg-secondary hover:bg-secondary/80 text-foreground border border-white/10 shadow-md hover:border-primary/40",
      outline:
        "bg-transparent hover:bg-white/[0.05] text-foreground border border-border hover:border-primary/50",
      ghost: "bg-transparent hover:bg-white/[0.06] text-muted-foreground hover:text-foreground",
      cyan: "bg-accent-cyan hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-accent-cyan/25 hover:shadow-xl hover:shadow-accent-cyan/40 hover:-translate-y-0.5",
      glass:
        "bg-card/70 hover:bg-card/90 backdrop-blur-md text-foreground border border-white/10 shadow-glass hover:border-primary/40 hover:-translate-y-0.5",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5 h-8",
      md: "text-sm px-5 py-2.5 gap-2 h-10",
      lg: "text-base px-7 py-3.5 gap-2.5 h-12",
      xl: "text-lg px-8 py-4 gap-3 h-14",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {Icon && iconPosition === "left" && !isLoading ? (
          <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        ) : null}
        <span>{children}</span>
        {Icon && iconPosition === "right" && !isLoading ? (
          <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        ) : null}
      </button>
    );
  }
);

Button.displayName = "Button";
