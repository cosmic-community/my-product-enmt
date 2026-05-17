import { getFeatures, getPricingTiers, getFAQs, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [features, pricingTiers, faqs, testimonials] = await Promise.all([
    getFeatures(),
    getPricingTiers(),
    getFAQs(),
    getTestimonials(),
  ])

  return (
    <>
      <Hero />
      <FeaturesSection features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <PricingSection tiers={pricingTiers} />
      <FAQSection faqs={faqs} />
      <CTASection />
    </>
  )
}