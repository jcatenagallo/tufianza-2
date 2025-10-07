import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValuePropositions } from "@/components/value-propositions"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ValuePropositions />
        <ProcessSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
