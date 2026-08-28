import React from "react";
import { TRUST_METRICS } from "@/lib/constants";
import { ShieldCheck, Award, Zap, Users } from "lucide-react";

export const MetricsSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#040812] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_METRICS.map((metric, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-accent-cyan transition-colors">
                {metric.value}
              </div>

              <div className="text-base sm:text-lg font-bold text-white mt-2 mb-1">
                {metric.label}
              </div>

              <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {metric.subtext}
              </div>

              {/* Accent Corner Glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 group-hover:bg-primary/20 blur-xl transition-all rounded-full pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Global Client & Technology Verification Strip */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-cyan" />
            <span className="font-semibold text-white">US & UK Enterprise Ready</span>
            <span className="hidden sm:inline">— NDA, IP Assignment & SOC-2 SLA</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span className="hover:text-white transition-colors">NEXT.JS 15</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">OPENAI GPT-4O</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">TYPESCRIPT</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">TAILWIND CSS</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">AWS & CLOUD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
