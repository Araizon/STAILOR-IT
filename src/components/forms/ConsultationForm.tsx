"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  X,
  Send,
  Building,
  Mail,
  User,
  Globe,
  DollarSign,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultChallenge?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen,
  onClose,
  defaultChallenge = "AI Automation",
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "10-50 employees",
    industry: "B2B SaaS / Technology",
    website: "",
    primaryChallenge: defaultChallenge,
    budgetRange: "$10,000 - $25,000",
    timeline: "Within 30 Days",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleNext = () => {
    setErrorMsg("");
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
        setErrorMsg("Please fill in all required fields (Name, Email, Company).");
        return;
      }
      if (!formData.email.includes("@") || !formData.email.includes(".")) {
        setErrorMsg("Please provide a valid business email address.");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#090e1c] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center text-center space-y-6 py-8 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Consultation Request Received
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our senior technical architects are reviewing your submission for{" "}
              <strong className="text-accent-cyan">{formData.company}</strong>. We will deliver your tailored growth assessment within 24 hours.
            </p>

            <Button
              variant="cyan"
              size="md"
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                onClose();
              }}
            >
              Done
            </Button>
          </div>
        ) : (
          <div>
            {/* Header & Step Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase text-accent-cyan tracking-wider">
                  Step 0{step} of 04
                </span>
                <span className="text-xs text-muted-foreground">
                  Enterprise Consultation & Audit
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent-cyan transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 mb-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Contact Details */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Let&apos;s start with your contact details
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Company Profile */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Tell us about your organization
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company Size
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1628] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan"
                    >
                      <option value="1-10 employees">1-10 employees (Early Stage)</option>
                      <option value="10-50 employees">10-50 employees (Growth Stage)</option>
                      <option value="50-250 employees">50-250 employees (Mid-Market)</option>
                      <option value="250+ employees">250+ employees (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Industry Vertical
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. B2B SaaS, Fintech, HealthTech, E-Commerce"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Website URL (for Audit)
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Primary Challenge */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-2">
                    What is your primary growth priority?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Search Engine Optimization (SEO)",
                      "Custom Web Development & UI/UX",
                      "Digital Marketing & Paid Media",
                      "AI Automation & Workflow Integration",
                      "360° Forensic Digital Audit",
                      "Full-Stack Scale Retainer",
                    ].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setFormData({ ...formData, primaryChallenge: item })}
                        className={cn(
                          "p-4 rounded-xl text-left text-xs font-semibold border transition-all duration-200 select-none",
                          formData.primaryChallenge === item
                            ? "bg-accent-cyan/15 border-accent-cyan text-white shadow-md shadow-accent-cyan/10"
                            : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]"
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Budget & Timeline */}
              {step === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Project investment & target timeline
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Project Budget (USD)
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1628] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan"
                    >
                      <option value="$5,000 - $10,000">$5,000 - $10,000 (Sprint Audit / MVP)</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000 (Core Platform / AI Build)</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000 (Enterprise Scaling)</option>
                      <option value="$50,000+">$50,000+ (Full Custom Enterprise Transformation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Desired Kickoff Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1628] border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan"
                    >
                      <option value="Immediately (Within 2 Weeks)">Immediately (Within 2 Weeks)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Next Quarter">Next Quarter</option>
                      <option value="Exploring Options">Exploring Options</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-white px-3 py-2 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <Button
                    type="button"
                    variant="cyan"
                    size="md"
                    icon={ArrowRight}
                    onClick={handleNext}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="cyan"
                    size="md"
                    icon={Send}
                    isLoading={isSubmitting}
                  >
                    Request Consultation
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
