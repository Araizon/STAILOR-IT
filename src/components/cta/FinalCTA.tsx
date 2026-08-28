import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Sparkles, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface FinalCTAProps {
  onOpenBooking?: () => void;
  onOpenAudit?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onOpenAudit }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#02050b] overflow-hidden">
      {/* Background Radial Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-primary/15 via-accent-cyan/15 to-violet-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-20 rounded-[2.5rem] bg-[#070c18]/90 border border-white/10 shadow-2xl backdrop-blur-xl text-center max-w-5xl mx-auto flex flex-col items-center space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Ready for Scale</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl">
            Ready to Build{" "}
            <span className="text-gradient-accent">What&apos;s Next?</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
            Let&apos;s turn your digital challenges into scalable systems, measurable growth, and intelligent AI automation. Schedule your discovery call today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
            <Button
              size="xl"
              variant="cyan"
              icon={ArrowUpRight}
              onClick={onOpenBooking}
              className="w-full sm:w-auto font-bold shadow-xl shadow-accent-cyan/25"
            >
              Book a Free Strategy Call
            </Button>

            <Button
              size="xl"
              variant="glass"
              icon={Sparkles}
              onClick={onOpenAudit}
              className="w-full sm:w-auto"
            >
              Request a Digital Audit
            </Button>
          </div>

          {/* Micro Trust Details */}
          <div className="pt-8 border-t border-white/[0.08] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-accent-cyan" />
              <span>48-Hour Technical Proposal</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% IP & Code Ownership</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-accent-cyan" />
              <span>Direct US/UK Executive Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
