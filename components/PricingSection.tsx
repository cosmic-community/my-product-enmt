import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { PricingTier } from '@/types'

export default function PricingSection({ tiers, hideHeader }: { tiers: PricingTier[]; hideHeader?: boolean }) {
  if (!tiers || tiers.length === 0) return null

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your team. Upgrade or downgrade anytime.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const planName = getMetafieldValue(tier.metadata?.plan_name) || tier.title
            const tagline = getMetafieldValue(tier.metadata?.tagline)
            const monthlyPrice = tier.metadata?.monthly_price
            const description = getMetafieldValue(tier.metadata?.description)
            const includedFeatures = getMetafieldValue(tier.metadata?.included_features)
            const ctaText = getMetafieldValue(tier.metadata?.cta_text) || 'Get Started'
            const ctaLink = getMetafieldValue(tier.metadata?.cta_link) || '#'
            const highlighted = tier.metadata?.highlighted === true

            const features = includedFeatures
              ? includedFeatures.split('\n').filter((f) => f.trim() !== '')
              : []

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 ${
                  highlighted
                    ? 'bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-2xl shadow-brand-500/30 scale-105 z-10'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-brand-600 text-xs font-bold rounded-full shadow">
                    MOST POPULAR
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {planName}
                </h3>
                {tagline && (
                  <p className={`text-sm mb-6 ${highlighted ? 'text-brand-100' : 'text-gray-500'}`}>{tagline}</p>
                )}

                <div className="mb-6">
                  {monthlyPrice !== undefined && monthlyPrice !== null ? (
                    <>
                      <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                        ${monthlyPrice}
                      </span>
                      <span className={`ml-2 ${highlighted ? 'text-brand-100' : 'text-gray-500'}`}>/month</span>
                    </>
                  ) : (
                    <span className={`text-3xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                      Custom
                    </span>
                  )}
                </div>

                {description && (
                  <p className={`mb-6 ${highlighted ? 'text-brand-50' : 'text-gray-600'}`}>{description}</p>
                )}

                <Link
                  href={ctaLink || '#'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold mb-8 transition-colors ${
                    highlighted
                      ? 'bg-white text-brand-600 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {ctaText}
                </Link>

                {features.length > 0 && (
                  <ul className="space-y-3">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-white' : 'text-brand-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={`text-sm ${highlighted ? 'text-white' : 'text-gray-700'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}