import React from "react";
import { Button } from "@/components/ui/Button";
import { Sparkles, ShieldCheck, Gauge, Search, ArrowUpRight } from "lucide-react";

interface AuditCTAProps {
  onOpenAudit?: () => void;
}

export const AuditCTA: React.FC<AuditCTAProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#050914] overflow-hidden border-y border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-accent-cyan/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#090f20]/90 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold uppercase tracking-wider w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary Enterprise Assessment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Not Sure What&apos;s Holding{" "}
                <span className="text-gradient-accent">Your Growth Back?</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Get a comprehensive 360° forensic audit of your website code, technical SEO, UX conversion friction, and digital advertising funnel — complete with a prioritized 90-day execution roadmap.
              </p>

              <div className="pt-2">
                <Button
                  size="xl"
                  variant="cyan"
                  icon={ArrowUpRight}
                  onClick={onOpenAudit}
                  className="font-bold shadow-xl shadow-accent-cyan/20"
                >
                  Request a Digital Audit
                </Button>
              </div>
            </div>

            {/* Right Abstract Visual Inspection Dial (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#040812] border border-white/[0.08] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Technical SEO</span>
                  <Search className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-white font-mono mt-3">
                  98<span className="text-xs text-muted-foreground font-normal">/100</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold mt-1">
                  Passed 42 Checks
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#040812] border border-white/[0.08] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Core Web Vitals</span>
                  <Gauge className="w-4 h-4 text-accent-cyan" />
                </div>
                <div className="text-3xl font-black text-white font-mono mt-3">
                  0.8s<span className="text-xs text-muted-foreground font-normal"> LCP</span>
                </div>
                <span className="text-[10px] text-cyan-400 font-semibold mt-1">
                  Ultra-Fast Tier
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#040812] border border-white/[0.08] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Security & SOC-2</span>
                  <ShieldCheck className="w-4 h-4 text-violet-400" />
                </div>
                <div className="text-3xl font-black text-white font-mono mt-3">
                  A+<span className="text-xs text-muted-foreground font-normal"> Grade</span>
                </div>
                <span className="text-[10px] text-violet-400 font-semibold mt-1">
                  Zero Vulnerabilities
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#040812] border border-white/[0.08] flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>CAC Efficiency</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-black text-white font-mono mt-3">
                  4.2x<span className="text-xs text-muted-foreground font-normal"> ROAS</span>
                </div>
                <span className="text-[10px] text-amber-400 font-semibold mt-1">
                  High Performance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
