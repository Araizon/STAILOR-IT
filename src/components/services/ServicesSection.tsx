import React from "react";
import { SERVICES_DATA } from "@/lib/constants";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Enterprise Capabilities"
          badgeVariant="cyan"
          title="Everything You Need to"
          gradientWord="Scale Smarter"
          description="From high-velocity technical foundations to intelligent AI automation, we engineer the digital ecosystems that drive measurable, multi-million dollar revenue growth."
          align="center"
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
