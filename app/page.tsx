import { CtaBand } from "@/components/cta-band"
import { Hero } from "@/components/hero"
import { IndustriesSection } from "@/components/industries-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { SiteShell } from "@/components/site-shell"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TrustSection } from "@/components/trust-section"
import { WhySection } from "@/components/why-section"
import { WorkSection } from "@/components/work-section"

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustSection />
      <WhySection />
      <ProcessSection />
      <WorkSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaBand />
    </SiteShell>
  )
}
