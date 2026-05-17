import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-purple-700 px-8 py-16 md:px-16 md:py-24">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-brand-100 mb-10">
              Join thousands of teams already using My Product to build better, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-brand-700 bg-white hover:bg-gray-100 transition-colors shadow-xl"
              >
                Start Free Trial
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}