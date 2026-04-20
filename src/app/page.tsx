import Header from "@/features/landing/components/Header/Header"
import Hero from "@/features/landing/components/Hero/Hero"
import Showcase from "@/features/landing/components/Showcase/Showcase"
import Pricing from "@/features/landing/components/Pricing/Pricing"
import HowItWorks from "@/features/landing/components/HowItWorks/HowItWorks"
import ContactSection from "@/features/landing/components/ContactSection/ContactSection"
import RevealSection from "@/features/landing/components/RevealSection/RevealSection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <RevealSection rootMargin="0px 0px -5% 0px">
          <Hero />
        </RevealSection>
        <RevealSection>
          <HowItWorks />
        </RevealSection>
        <RevealSection>
          <Showcase />
        </RevealSection>
        <RevealSection>
          <Pricing />
        </RevealSection>
        <RevealSection>
          <ContactSection />
        </RevealSection>
      </main>
    </>
  )
}
