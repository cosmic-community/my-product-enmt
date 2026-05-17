import { getMetafieldValue } from '@/lib/cosmic'
import type { Feature } from '@/types'

export default function FeatureCard({ feature }: { feature: Feature }) {
  const name = getMetafieldValue(feature.metadata?.name) || feature.title
  const description = getMetafieldValue(feature.metadata?.description)
  const icon = getMetafieldValue(feature.metadata?.icon) || '✨'
  const featureImage = feature.metadata?.feature_image

  return (
    <div className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all">
      {featureImage?.imgix_url ? (
        <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-2xl">
          <img
            src={`${featureImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={200}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      ) : null}

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 text-white flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
      {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
    </div>
  )
}