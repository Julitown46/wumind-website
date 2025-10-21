import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ServiceExamplesSection } from "@/components/service-examples-section"
import { WhyWumindSection } from "@/components/why-wumind-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ServiceExamplesSection />
      <WhyWumindSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
