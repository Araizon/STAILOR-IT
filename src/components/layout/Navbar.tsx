"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Layers,
  Bot,
  Workflow,
  Briefcase,
  Cpu,
  ShieldCheck,
  HelpCircle,
  FileSearch,
  BookOpen,
  Mail,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenBooking?: () => void;
  onOpenAudit?: () => void;
}

const SECTION_ICONS: Record<string, React.ElementType> = {
  Services: Layers,
  Solutions: Bot,
  Process: Workflow,
  "Case Studies": Briefcase,
  Technologies: Cpu,
  "Why Us": ShieldCheck,
  FAQ: HelpCircle,
};

const EXTRA_PAGES = [
  { name: "About Agency", href: "/about", icon: Info },
  { name: "Forensic Audit", href: "/audit", icon: FileSearch },
  { name: "Tech Insights", href: "/insights", icon: BookOpen },
  { name: "Direct Contact", href: "/contact", icon: Mail },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection for header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent BG scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key or desktop resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    // If anchor link on home page, smoothly scroll
    if (href.startsWith("/#") && pathname === "/") {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
          isScrolled ? "py-3 sm:top-4 px-3 sm:px-6" : "py-5 sm:top-6 px-4 sm:px-8"
        )}
      >
        <div
          className={cn(
            "w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
            isScrolled
              ? "bg-[#090e17]/85 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full py-2.5 px-4 sm:px-6"
              : "bg-transparent border border-transparent py-1 px-2"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/15 bg-white/5 flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Stailor IT Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center">
                STAILOR<span className="text-accent-cyan ml-0.5">IT</span>
              </span>
              <span className="text-[0.62rem] tracking-widest text-muted-foreground uppercase font-semibold -mt-1 hidden sm:block">
                Intelligent Growth
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 select-none",
                    isActive
                      ? "text-accent-cyan bg-accent-cyan/10 font-semibold"
                      : "text-muted-foreground hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAudit}
              className="text-xs font-semibold text-muted-foreground hover:text-white px-3 py-2 transition-colors cursor-pointer flex items-center gap-1"
            >
              Digital Audit
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <Button
              size="sm"
              variant="cyan"
              icon={ArrowUpRight}
              onClick={onOpenBooking}
              className="shadow-md shadow-accent-cyan/20"
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center",
                mobileMenuOpen
                  ? "bg-accent-cyan/20 border-accent-cyan text-accent-cyan shadow-lg shadow-accent-cyan/20"
                  : "bg-white/[0.07] border-white/10 text-white hover:bg-white/10"
              )}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform rotate-90 duration-200" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu with Full Internal Scrolling & BG Scroll Lock */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#030712]/98 backdrop-blur-3xl transition-all duration-300 lg:hidden",
          "overflow-y-auto overscroll-contain h-[100dvh] max-h-[100dvh] w-full",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        )}
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="min-h-full flex flex-col justify-between pt-24 pb-10 px-5 sm:px-8 max-w-lg mx-auto w-full">
          {/* Top Section Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-cyan block">
                  STAILOR IT Enterprise Portal
                </span>
                <span className="text-xs text-muted-foreground">
                  Select a section to navigate
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400 border border-white/10">
                {NAV_LINKS.length} Sectors
              </span>
            </div>

            {/* Main Sectors Links */}
            <div className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const IconComponent = SECTION_ICONS[link.name] || ArrowUpRight;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200 group active:scale-[0.98]",
                      isActive
                        ? "bg-accent-cyan/15 border-accent-cyan/40 text-accent-cyan font-bold"
                        : "bg-white/[0.03] border-white/[0.06] text-white/90 hover:bg-white/[0.06] hover:border-white/15"
                    )}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                          isActive
                            ? "bg-accent-cyan/20 text-accent-cyan"
                            : "bg-white/[0.05] text-slate-400 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10"
                        )}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-base font-semibold tracking-tight">
                        {link.name}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                );
              })}
            </div>

            {/* Dedicated Pages Grid */}
            <div className="pt-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Agency Directory & Insights
              </div>
              <div className="grid grid-cols-2 gap-2">
                {EXTRA_PAGES.map((page) => {
                  const PageIcon = page.icon;
                  return (
                    <Link
                      key={page.name}
                      href={page.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-colors flex items-center gap-2.5 text-xs font-medium text-slate-300 hover:text-white"
                    >
                      <PageIcon className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                      <span className="truncate">{page.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Conversion Section */}
          <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-white/[0.08]">
            <Button
              size="lg"
              variant="cyan"
              icon={ArrowUpRight}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking?.();
              }}
              className="w-full justify-center font-bold shadow-lg shadow-accent-cyan/20"
            >
              Book Strategy Call
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit?.();
              }}
              className="w-full justify-center bg-white/[0.02]"
            >
              Request Free Digital Audit
            </Button>

            <div className="pt-2 flex flex-col gap-2 text-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-accent-cyan transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Hotline: {SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-accent-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent-cyan" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <span className="text-[10px] text-slate-500">
                Tekatia, Fakirhat, Bagerhat - 9372, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

