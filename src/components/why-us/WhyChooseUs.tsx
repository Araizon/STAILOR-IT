import React from "react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BarChart3,
  ShieldCheck,
  Sparkles,
  Globe,
  Target,
  Handshake,
} from "lucide-react";

const whyIcons: Record<string, React.ElementType> = {
  BarChart3,
  ShieldCheck,
  Sparkles,
  Globe,
  Target,
  Handshake,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Enterprise Standards"
          badgeVariant="emerald"
          title="Built for Growth."
          gradientWord="Engineered for Scale."
          description="We combine deep technical engineering with commercial strategy to eliminate risk and deliver predictable business outcomes."
          align="center"
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = whyIcons[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-[#080d1a]/80 border border-white/[0.08] hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center gap-2 text-xs font-semibold text-accent-cyan">
                  <span>Guaranteed Standard</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
