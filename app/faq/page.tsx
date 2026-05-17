import { getFAQs } from '@/lib/cosmic'
import FAQSection from '@/components/FAQSection'

export const metadata = {
  title: 'FAQ - My Product',
  description: 'Frequently asked questions about My Product.',
}

export default async function FAQPage() {
  const faqs = await getFAQs()

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our product.
          </p>
        </div>
      </div>
      <FAQSection faqs={faqs} hideHeader />
    </div>
  )
}