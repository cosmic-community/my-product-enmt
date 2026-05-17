'use client'

import { useState } from 'react'
import { getMetafieldValue } from '@/lib/cosmic'
import type { FAQ } from '@/types'

export default function FAQSection({ faqs, hideHeader }: { faqs: FAQ[]; hideHeader?: boolean }) {
  const [openId, setOpenId] = useState<string | null>(null)

  if (!faqs || faqs.length === 0) return null

  const grouped: Record<string, FAQ[]> = {}
  faqs.forEach((faq) => {
    const category = getMetafieldValue(faq.metadata?.category) || 'General'
    if (!grouped[category]) grouped[category] = []
    grouped[category].push(faq)
  })

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-4xl">
        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>
        )}

        {Object.keys(grouped).map((category) => {
          const categoryFaqs = grouped[category]
          if (!categoryFaqs || categoryFaqs.length === 0) return null

          return (
            <div key={category} className="mb-10">
              {Object.keys(grouped).length > 1 && (
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
              )}
              <div className="space-y-3">
                {categoryFaqs.map((faq) => {
                  const question = getMetafieldValue(faq.metadata?.question) || faq.title
                  const answer = getMetafieldValue(faq.metadata?.answer)
                  const isOpen = openId === faq.id

                  return (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-brand-300 transition-colors"
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{question}</span>
                        <svg
                          className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && answer && (
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                          {answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}