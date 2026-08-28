"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { MetricsSection } from "@/components/trust/MetricsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AISection } from "@/components/ai/AISection";
import { WhyChooseUs } from "@/components/why-us/WhyChooseUs";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { TechStack } from "@/components/technology/TechStack";
import { AuditCTA } from "@/components/audit/AuditCTA";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { AIChatWidget } from "@/components/chat/AIChatWidget";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-primary/30">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Main Orchestrated Funnel Content */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={() => setBookingModalOpen(true)}
          onOpenAudit={() => setAuditModalOpen(true)}
        />

        {/* 2. Trust Metrics Bar */}
        <MetricsSection />

        {/* 3. Core Capabilities / Services Bento */}
        <ServicesSection />

        {/* 4. Autonomous AI Solutions & Workflow Pipeline */}
        <AISection />

        {/* 5. Enterprise Differentiators */}
        <WhyChooseUs />

        {/* 6. 5-Stage Delivery Process */}
        <ProcessTimeline />

        {/* 7. Technology Infrastructure */}
        <TechStack />

        {/* 8. Digital Audit CTA Intercept */}
        <AuditCTA onOpenAudit={() => setAuditModalOpen(true)} />

        {/* 9. Verified B2B Case Studies */}
        <CaseStudies />

        {/* 10. Executive Testimonials */}
        <TestimonialsSection />

        {/* 11. Objection-Free FAQ */}
        <FAQAccordion />

        {/* 12. Final High-Impact Conversion Banner */}
        <FinalCTA
          onOpenBooking={() => setBookingModalOpen(true)}
          onOpenAudit={() => setAuditModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Floating STAILOR AI Growth Chatbot */}
      <AIChatWidget
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Calendly Booking Scheduler Modal */}
      <CalendlyModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Multi-Step Enterprise Consultation & Audit Wizard */}
      <ConsultationForm
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
