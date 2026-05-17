import { getPricingTiers, getFAQs } from '@/lib/cosmic'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'

export const metadata = {
  title: 'Pricing - My Product',
  description: 'Simple, transparent pricing that scales with your business.',
}

export default async function PricingPage() {
  const [tiers, faqs] = await Promise.all([getPricingTiers(), getFAQs()])

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, ever.
          </p>
        </div>
      </div>
      <PricingSection tiers={tiers} hideHeader />
      <FAQSection faqs={faqs} />
    </div>
  )
}