// Hero.jsx
// The first thing visitors see. Its job is to:
// 1. State the value proposition immediately
// 2. Give a single clear action to take (CTA)
// 3. Build trust (case result card, "no fee" line)

import CaseResultCard from './CaseResultCard'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#081120] flex items-center overflow-hidden"
    >
      {/* 
        Two-column grid on large screens, single column on mobile.
        gap-12 adds breathing room between the two columns.
      */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* ── Left column: copy ── */}
        <div className="space-y-8">

          {/* Eyebrow label — small text above the headline to set context */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#D4A24C]" />
            <span className="text-[#D4A24C] text-xs font-semibold tracking-widest uppercase">
              Personal Injury Attorneys
            </span>
          </div>

          {/* Main headline — largest text on the page, serif for authority */}
          <h1
            className="text-white text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Fighting for Your{' '}
            {/* Highlighted word in gold */}
            <span className="text-[#D4A24C]">Recovery.</span>
            <br />
            Every Step of the Way.
          </h1>

          {/* Supporting paragraph — explains the headline, builds trust */}
          <p className="text-[#CBD5E1] text-lg leading-relaxed max-w-lg">
            When you're injured, the last thing you need is to fight insurance
            companies alone. Our attorneys take on the battle so you can focus
            on healing — and we don't get paid unless you do.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 items-center">

            {/* Primary CTA — was missing the opening <a */}
            <a
              href="#contact"
              className="bg-[#D4A24C] text-black font-semibold px-8 py-4 rounded-full
                         hover:-translate-y-1 hover:brightness-110 transition-all duration-300
                         shadow-lg shadow-[#D4A24C]/20"
            >
              Get a Free Consultation
            </a>

            {/* Secondary CTA — was also missing the opening <a */}
            <a
              href="#results"
              className="text-[#CBD5E1] font-medium flex items-center gap-2
                         hover:text-white transition-colors duration-200"
            >
              View Case Results
              <span aria-hidden="true">→</span>
            </a>

          </div>

          {/* Trust line below the CTA */}
          <p className="text-[#CBD5E1] text-sm flex items-center gap-2">
            <span className="text-[#D4A24C]">✓</span>
            No fee unless we win your case
          </p>

        </div>

        {/* ── Right column: image + floating card ── */}
        {/* 
          relative here so the absolutely-positioned CaseResultCard
          is positioned relative to this div, not the whole page
        */}
        <div className="relative hidden lg:block">

          {/* Attorney photo */}
          <img
            src="/images/lawyers.jpg"
            alt="Harrison and Cole attorneys"
            className="w-full h-[600px] object-cover rounded-2xl"
          />

          {/* Dark gradient overlay — fades the left edge of the photo
              so it blends into the dark background */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(90deg, rgba(8,17,32,0.6) 0%, rgba(8,17,32,0) 50%)',
            }}
          />

          {/* Floating case result card — absolute positions it over the image */}
          <div className="absolute bottom-8 left-8">
            <CaseResultCard />
          </div>

        </div>

      </div>
    </section>
  )
}
