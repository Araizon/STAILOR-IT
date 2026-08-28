"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Activity,
  Bot,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onOpenAudit?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenAudit }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-grid-pattern mask-radial-hero">
      {/* Dynamic Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-primary/20 via-accent-cyan/15 to-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Eyebrow Pill */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white uppercase">
              US & UK Enterprise IT Partner
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs sm:text-sm text-accent-cyan font-medium hidden sm:inline">
              Accepting Q3/Q4 Builds
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            Data-Driven Digital Growth &{" "}
            <span className="text-gradient-accent block sm:inline mt-1">
              AI Automation
            </span>{" "}
            for Global Enterprises
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed max-w-3xl text-balance">
            We scale B2B brands across the US & UK through advanced SEO, performance marketing, high-converting web engineering, and custom AI workflow automations.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <Button
              size="xl"
              variant="cyan"
              icon={ArrowUpRight}
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 font-bold shadow-xl shadow-accent-cyan/20 group"
            >
              Book a Free Strategy Call
            </Button>

            <Button
              size="xl"
              variant="glass"
              icon={Sparkles}
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8"
            >
              Request a Digital Audit
            </Button>
          </div>

          {/* Trust Guarantees Micro-Strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 pt-4 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Senior Architect Access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% IP & Code Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>48-Hour Technical Scoping</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Abstract Ecosystem Visual (3D Tilt & Glass UI) */}
        <div className="mt-14 sm:mt-18 lg:mt-22 relative max-w-5xl mx-auto">
          {/* Outer Glowing Border Box */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl shadow-primary/20 backdrop-blur-xl">
            <div className="relative rounded-[22px] bg-[#070b14]/90 border border-white/10 overflow-hidden p-6 sm:p-8 lg:p-10">
              {/* Header Bar of the Mockup */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground hidden sm:inline ml-2">
                    stailor-growth-ecosystem.enterprise.v2.4
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    Live System: 99.98% Healthy
                  </span>
                </div>
              </div>

              {/* Grid Dashboard Components Inside Visual */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
                {/* Column 1: Live Growth Metrics Chart (5 cols) */}
                <div className="md:col-span-5 flex flex-col space-y-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-white">
                        Quarterly Revenue Growth (US/UK)
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      +184% ARR
                    </span>
                  </div>

                  <div className="h-28 w-full flex items-end justify-between gap-2 pt-4 px-1">
                    {[35, 52, 48, 70, 64, 85, 95, 115, 142].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-primary/40 to-accent-cyan group-hover:to-cyan-300 transition-all duration-300 shadow-sm"
                          style={{ height: `${(height / 142) * 100}%` }}
                        />
                        <span className="text-[9px] font-mono text-muted-foreground">
                          W{i + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-between text-[11px] text-muted-foreground border-t border-white/[0.04]">
                    <span>Attributed Inbound Pipeline</span>
                    <span className="text-white font-mono font-semibold">$4,850,000 USD</span>
                  </div>
                </div>

                {/* Column 2: Live AI Autonomous Qualification Stream (7 cols) */}
                <div className="md:col-span-7 flex flex-col space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      <Bot className="w-4 h-4 text-accent-cyan" />
                      <span>STAILOR AI Autonomous Agent Stream</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground font-mono">
                      Latency: 1.2s
                    </span>
                  </div>

                  {/* Stream Card 1 */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-accent-cyan shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          New B2B Lead Qualified (Fintech CEO, London)
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Intent: Enterprise Next.js App + AI Workflow
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                      Score: 98/100
                    </span>
                  </div>

                  {/* Stream Card 2 */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          SEO Core Web Vitals Automated Audit Passed
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Lighthouse Score: 99/100 | LCP: 0.8s
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                      Rank: Top #1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
