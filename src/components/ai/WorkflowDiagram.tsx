"use client";

import React, { useState } from "react";
import { WORKFLOW_STEPS } from "@/lib/constants";
import {
  Users,
  Bot,
  Database,
  Gauge,
  MailCheck,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stepIcons: Record<string, React.ElementType> = {
  Users,
  Bot,
  Database,
  Gauge,
  MailCheck,
  Zap,
};

export const WorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="w-full flex flex-col space-y-10">
      {/* Node Pipeline Horizontal/Grid Stepper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
        {WORKFLOW_STEPS.map((step, index) => {
          const IconComp = stepIcons[step.icon] || Zap;
          const isActive = activeStep === index;

          return (
            <div
              key={step.step}
              onClick={() => setActiveStep(index)}
              className={cn(
                "relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between",
                isActive
                  ? "bg-[#0c1424] border-accent-cyan shadow-xl shadow-accent-cyan/15 scale-[1.03] z-20"
                  : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20"
              )}
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={cn(
                    "text-xs font-mono font-bold px-2 py-0.5 rounded",
                    isActive
                      ? "bg-accent-cyan text-black"
                      : "bg-white/10 text-muted-foreground"
                  )}
                >
                  {step.step}
                </span>

                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                    isActive
                      ? "bg-accent-cyan/20 text-accent-cyan"
                      : "bg-white/5 text-muted-foreground"
                  )}
                >
                  <IconComp className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h4
                  className={cn(
                    "text-sm font-bold mb-1 transition-colors",
                    isActive ? "text-white" : "text-slate-300"
                  )}
                >
                  {step.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Active Glow Bottom Bar */}
              {isActive && (
                <div className="absolute -bottom-[1px] left-4 right-4 h-1 bg-gradient-to-r from-primary to-accent-cyan rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Interactive Active Node Deep-Dive Showcase Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#090f1d] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step {WORKFLOW_STEPS[activeStep].step} Deep Dive</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {WORKFLOW_STEPS[activeStep].title}
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed">
              {WORKFLOW_STEPS[activeStep].desc} Our AI orchestration engine guarantees sub-second data enrichment, eliminating 100% of manual transcription and lead triage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Latency Webhook Triggers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Encrypted SOC-2 Data Pipeline</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Model Fallback (GPT-4o / Claude)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Slack / Email Notification</span>
              </div>
            </div>
          </div>

          {/* Right Live Simulation Console */}
          <div className="lg:col-span-5 bg-[#04070e] border border-white/10 rounded-2xl p-5 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-muted-foreground">
              <span>SIMULATION_CONSOLE</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                EXECUTION_ACTIVE
              </span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <p className="text-accent-cyan">&gt; trigger: pipeline_event_inbound</p>
              <p className="text-slate-400">&gt; payload: &#123; stage: &quot;{WORKFLOW_STEPS[activeStep].title}&quot; &#125;</p>
              <p className="text-emerald-400">&gt; status: 200 OK (latency 0.08s)</p>
              <p className="text-violet-400">&gt; ai_confidence_score: 99.8%</p>
              <p className="text-slate-400">&gt; next_action: dispatch_to_sales_crm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
