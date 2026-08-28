"use client";

import React, { useState } from "react";
import { TECH_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, Layers, Cpu, Database, Layout, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons = [Layers, Database, Cpu, Layout, BarChart2];

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="technologies" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-primary/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Enterprise Infrastructure"
          badgeVariant="cyan"
          title="Powered by"
          gradientWord="Modern Technology"
          description="We engineer your digital platforms using battle-tested, high-performance technology stacks built for sub-second latency and zero security vulnerabilities."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {TECH_CATEGORIES.map((cat, idx) => {
            const IconComp = categoryIcons[idx] || Layers;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 select-none cursor-pointer border",
                  isActive
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                    : "bg-white/[0.03] text-muted-foreground border-white/[0.08] hover:bg-white/[0.06] hover:text-white"
                )}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {TECH_CATEGORIES[activeTab].items.map((item, i) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-[#080d19] border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-cyan/10"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-accent-cyan mb-4 group-hover:bg-accent-cyan group-hover:text-black transition-colors font-mono font-bold text-xs">
                  0{i + 1}
                </div>

                <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-accent-cyan transition-colors">
                  {item.name}
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
