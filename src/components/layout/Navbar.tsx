"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Sparkles, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenBooking?: () => void;
  onOpenAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center shadow-md shadow-primary/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
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

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between pt-24 pb-12 px-6",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">
            Navigation Menu
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white/90 hover:text-accent-cyan transition-colors py-2 border-b border-white/[0.06] flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <Button
            size="lg"
            variant="cyan"
            icon={ArrowUpRight}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking?.();
            }}
            className="w-full justify-center"
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
            className="w-full justify-center"
          >
            Request Free Digital Audit
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4">
            <Phone className="w-3.5 h-3.5 text-accent-cyan" />
            <span>US/UK Direct Line: {SITE_CONFIG.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
};
