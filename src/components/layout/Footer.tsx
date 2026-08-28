import React from "react";
import Link from "next/link";
import { SITE_CONFIG, SERVICES_DATA, NAV_LINKS } from "@/lib/constants";
import { Sparkles, ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenAudit?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAudit }) => {
  return (
    <footer className="relative bg-[#02050b] text-foreground pt-20 pb-12 border-t border-white/[0.08] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center shadow-md shadow-primary/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                STAILOR<span className="text-accent-cyan ml-0.5">IT</span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Tailoring Next-Gen Digital Growth & Intelligent IT Solutions for B2B brands, enterprises, and high-growth startups across the USA, UK, and global markets.
            </p>

            <div className="flex flex-col space-y-2.5 pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>All Systems & AI Agents Operational</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                <span>Enterprise SOC-2 Type II & GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs text-muted-foreground hover:text-accent-cyan transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent-cyan transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Solutions (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenAudit}
                  className="text-xs text-accent-cyan hover:underline transition-colors text-left"
                >
                  Free Digital Audit
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-xs text-white hover:underline transition-colors text-left font-medium"
                >
                  Book Strategy Call
                </button>
              </li>
            </ul>
          </div>

          {/* Global Operations & Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Global Headquarters
            </h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">New York / London Hubs</strong>
                  Serving Clients Nationwide across US, UK & Europe
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-cyan shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full text-xs font-semibold py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-2 transition-all hover:border-primary/50"
              >
                <span>Schedule 30-Min Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 text-accent-cyan" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} STAILOR IT Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security Overview
            </Link>
            <span className="text-white/40">US / UK B2B Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
