import { getFeatures, getMetafieldValue } from '@/lib/cosmic'
import FeatureCard from '@/components/FeatureCard'

export const metadata = {
  title: 'Features - My Product',
  description: 'Discover all the powerful features that make My Product the best choice for your business.',
}

export default async function FeaturesPage() {
  const features = await getFeatures()

  const grouped: Record<string, typeof features> = {}
  features.forEach((feature) => {
    const category = getMetafieldValue(feature.metadata?.category) || 'General'
    if (!grouped[category]) grouped[category] = []
    grouped[category].push(feature)
  })

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed.
          </p>
        </div>

        {Object.keys(grouped).map((category) => {
          const categoryFeatures = grouped[category]
          if (!categoryFeatures || categoryFeatures.length === 0) return null

          return (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryFeatures.map((feature) => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}