// FeatureIcons.jsx
// Three icon cards that reinforce trust signals below the hero.
// lucide-react gives us clean, consistent SVG icons as React components.

import { ShieldCheck, Scale, MessageCircle } from 'lucide-react'

// Define the features as data — not hardcoded JSX.
// This is a common React pattern: separate your data from your markup.
// To add a 4th feature, just add one more object to this array.
const features = [
  {
    icon: ShieldCheck,
    title: 'Client Focused',
    desc: 'You are never just a case number. We fight for you personally, every step of the way.',
  },
  {
    icon: Scale,
    title: 'Proven Results',
    desc: 'Over $50M recovered for injured clients. Our track record speaks for itself.',
  },
  {
    icon: MessageCircle,
    title: 'Free Consultation',
    desc: 'Speak with an attorney today at no cost. No obligation, no pressure.',
  },
]

export default function FeatureIcons() {
  return (
    <section className="bg-[#0a1628] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        {features.map(({ icon: Icon, title, desc }) => (
          // Each card: hover lifts it up with translate + shadow
          <div
            key={title}
            className="bg-[#0f1e33] border border-[#334155] rounded-2xl p-8
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon in a gold circle */}
            <div className="w-12 h-12 rounded-full bg-[#D4A24C]/10 flex items-center justify-center mb-4">
              {/* Icon is a component stored in a variable — render it like any component */}
              <Icon size={24} color="#D4A24C" />
            </div>

            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">{desc}</p>
          </div>
        ))}

      </div>
    </section>
  )
}