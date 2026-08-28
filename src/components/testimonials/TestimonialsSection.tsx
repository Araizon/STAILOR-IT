import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote, ShieldCheck } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#040813] overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Executive Endorsements"
          badgeVariant="primary"
          title="Trusted by Leaders at"
          gradientWord="High-Growth Companies"
          description="Read what Founders, CTOs, and Marketing Executives have to say about partnering with STAILOR IT for engineering and digital scale."
          align="center"
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-[#080d1b] border border-white/[0.08] hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div>
                {/* Top Row: Stars & Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-[11px] text-accent-cyan/80 font-medium">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
