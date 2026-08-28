import React from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#040813] overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Execution Methodology"
          badgeVariant="primary"
          title="From Strategy to Scale:"
          gradientWord="Our 5-Step Engine"
          description="A rigorous, sprint-based delivery cycle designed to minimize risk, maximize development velocity, and ensure predictable ROI."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#080d1c]/90 border border-white/[0.08] hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-mono text-primary group-hover:text-accent-cyan transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Deliverables:
                </span>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
