// Navbar.jsx
// This is the top bar of the site. It stays at the top of every page.

export default function Navbar() {
  return (
    // sticky top-0 z-50: keeps the nav visible as you scroll
    // backdrop-blur: frosted glass effect on the dark bg
    <nav className="sticky top-0 z-50 bg-[#081120]/95 backdrop-blur border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          {/* text-[#D4A24C] applies our gold accent color */}
          <div className="text-[#D4A24C] font-bold text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            ⚖ Harrison &amp; Cole
          </div>
          <div className="text-[#CBD5E1] text-xs tracking-widest uppercase">
            Personal Injury Law
          </div>
        </div>

        {/* Nav links — hidden on mobile, shown on md screens and up */}
        <ul className="hidden md:flex gap-8 text-[#CBD5E1] text-sm font-medium">
          {['Home', 'About', 'Practice Areas', 'Case Results', 'Contact'].map(item => (
            // For each menu item, render an anchor tag
            // hover:text-white transitions the color on hover
            <li key={item}>
              <a href="#" className="hover:text-white transition-colors duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[#CBD5E1] text-sm">(800) 555-0198</span>
          {/* This was the broken line — the opening <a was missing */}
          <a
            href="#contact"
            className="bg-[#D4A24C] text-black text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition duration-300"
          >
            Free Consultation
          </a>
        </div>

        {/* Hamburger icon for mobile — shown only on small screens */}
        <button className="md:hidden text-white text-2xl">☰</button>

      </div>
    </nav>
  )
}
