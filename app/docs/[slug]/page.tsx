// app/docs/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDocumentationPage, getMetafieldValue } from '@/lib/cosmic'

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = await getDocumentationPage(slug)

  if (!doc) {
    notFound()
  }

  const title = getMetafieldValue(doc.metadata?.title) || doc.title
  const content = getMetafieldValue(doc.metadata?.content)
  const category = getMetafieldValue(doc.metadata?.category)

  return (
    <div className="py-20">
      <div className="container-custom max-w-4xl">
        <Link href="/docs" className="text-brand-600 hover:text-brand-700 text-sm font-medium mb-6 inline-block">
          ← Back to Documentation
        </Link>

        {category && (
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-4">
            {category}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">{title}</h1>

        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}