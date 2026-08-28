import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "primary" | "cyan" | "emerald" | "violet" | "live";
  title: string;
  gradientWord?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = "primary",
  title,
  gradientWord,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4 max-w-3xl",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
        {title}{" "}
        {gradientWord && (
          <span className="text-gradient-accent block sm:inline mt-1 sm:mt-0">
            {gradientWord}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
