import Link from 'next/link'
import { getDocumentationPages, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Documentation - My Product',
  description: 'Comprehensive documentation for My Product.',
}

export default async function DocsPage() {
  const docs = await getDocumentationPages()

  const grouped: Record<string, typeof docs> = {}
  docs.forEach((doc) => {
    const category = getMetafieldValue(doc.metadata?.category) || 'General'
    if (!grouped[category]) grouped[category] = []
    grouped[category].push(doc)
  })

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to get started and master My Product.
          </p>
        </div>

        {docs.length === 0 ? (
          <p className="text-center text-gray-500">No documentation available yet.</p>
        ) : (
          <div className="max-w-4xl mx-auto">
            {Object.keys(grouped).map((category) => {
              const categoryDocs = grouped[category]
              if (!categoryDocs || categoryDocs.length === 0) return null

              return (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {category}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {categoryDocs.map((doc) => {
                      const title = getMetafieldValue(doc.metadata?.title) || doc.title
                      const summary = getMetafieldValue(doc.metadata?.summary)
                      return (
                        <Link
                          key={doc.id}
                          href={`/docs/${doc.slug}`}
                          className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-brand-500 hover:shadow-lg transition-all"
                        >
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
                          {summary && <p className="text-gray-600 text-sm">{summary}</p>}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}