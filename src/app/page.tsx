import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { TechStack } from '@/components/sections/TechStack'
import { Process } from '@/components/sections/Process'
import { Differentiators } from '@/components/sections/Differentiators'
import { Testimonials } from '@/components/sections/Testimonials'
import { ContactSection } from '@/components/sections/ContactSection'
import { Faq } from '@/components/sections/Faq'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { faqs } from '@/content/faq'
import { faqJsonLd } from '@/lib/seo'
import { JsonLd } from '@/components/ui/JsonLd'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TechStack />
      <Process />
      <Differentiators />
      <Testimonials />
      <ContactSection />
      <Faq />
      <CtaBanner />
      <JsonLd data={faqJsonLd([...faqs])} />
    </>
  )
}
