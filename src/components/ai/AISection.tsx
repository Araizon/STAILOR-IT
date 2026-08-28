import React from "react";
import { WorkflowDiagram } from "./WorkflowDiagram";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const AISection: React.FC = () => {
  return (
    <section id="ai-solutions" className="relative py-24 sm:py-32 bg-[#050914] overflow-hidden border-t border-white/[0.08]">
      {/* Ambient background lights */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-accent-cyan/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Autonomous Intelligence"
          badgeVariant="violet"
          title="Turn Repetitive Work Into"
          gradientWord="Intelligent Systems"
          description="We connect AI models, CRM databases, sales dispatchers, and analytics to eliminate operational latency and accelerate deals automatically."
          align="center"
          className="mb-16 sm:mb-20"
        />

        <WorkflowDiagram />
      </div>
    </section>
  );
};
