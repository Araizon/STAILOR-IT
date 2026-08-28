import React from "react";
import { CaseStudyItem } from "@/lib/constants";
import { ArrowUpRight, TrendingUp, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: CaseStudyItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-3xl bg-[#080d1a] border border-white/[0.08] hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20">
      {/* Top Image & Mockup Preview with Gradient Mask */}
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#04070f]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-black/40" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full">
            {project.industry}
          </span>
          <span className="text-xs font-mono font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2.5 py-1 rounded-full">
            {project.client}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Services Pill Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.services.map((srv, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold text-muted-foreground bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 rounded-md"
              >
                {srv}
              </span>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Metrics Grid Result Box */}
        <div className="pt-4 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#040711] p-3.5 rounded-2xl border border-white/[0.06]">
            {project.results.map((res, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-white font-mono">
                  {res.value}
                </span>
                <span className="text-[10px] text-muted-foreground truncate">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
