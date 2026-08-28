import React from "react";
import { CASE_STUDIES } from "@/lib/constants";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-accent-cyan/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Client Impact"
          badgeVariant="emerald"
          title="Digital Systems"
          gradientWord="Built to Perform"
          description="Explore how our full-stack engineering, performance marketing, and AI automations generate verifiable ROI for US & UK B2B companies."
          align="center"
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
