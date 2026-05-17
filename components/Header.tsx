import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">🚀</span>
            <span>My Product</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/docs" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Docs
            </Link>
            <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              FAQ
            </Link>
          </nav>

          <Link href="/pricing" className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm text-white bg-brand-600 hover:bg-brand-700 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}