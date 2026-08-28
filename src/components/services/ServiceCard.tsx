import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/constants";
import {
  Search,
  TrendingUp,
  FileText,
  Code2,
  Cpu,
  ShieldAlert,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  FileText,
  Code2,
  Cpu,
  ShieldAlert,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const IconComponent = iconMap[service.iconName] || Code2;

  return (
    <div className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[#080d19]/90 border border-white/[0.08] hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 overflow-hidden">
      {/* Background Top Corner Gradient Glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-primary/10 via-accent-cyan/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-primary/20 transition-all duration-500" />

      <div>
        {/* Header: Icon + Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-md">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>

          <span className="text-3xl font-black font-mono text-white/20 group-hover:text-accent-cyan/50 transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors mb-2">
          {service.title}
        </h3>

        <p className="text-xs font-semibold text-accent-cyan mb-4 tracking-wide">
          {service.tagline}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Highlight Stats Pill */}
        <div className="mb-6 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-emerald-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          <span>{service.statsHighlight}</span>
        </div>

        {/* Feature Bullets (2 Columns on larger screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/[0.06] mb-8">
          {service.features.slice(0, 6).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-slate-300 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-primary text-white border border-white/10 hover:border-primary text-xs font-bold transition-all duration-300 group/btn"
        >
          <span>{service.ctaText}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};
