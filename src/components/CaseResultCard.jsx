// CaseResultCard.jsx
// A small floating card showing a recent case result.
// It's used inside the Hero as a social-proof element.
// Because it's its own component, you could also drop it into
// a "Results" page or a sidebar without rewriting it.

export default function CaseResultCard() {
  return (
    // The card itself — dark background, gold top border for emphasis
    <div className="bg-[#0f1e33] border border-[#334155] border-t-2 border-t-[#D4A24C] rounded-2xl p-5 w-56 shadow-2xl">

      {/* Label */}
      <p className="text-[#D4A24C] text-xs font-semibold tracking-widest uppercase mb-2">
        Recent Case Result
      </p>

      {/* The big number — this is what draws the eye */}
      <p
        className="text-white text-3xl font-bold leading-tight"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        $2.4 Million
      </p>

      {/* Case type */}
      <p className="text-[#CBD5E1] text-sm mt-1">
        Car Accident Settlement
      </p>

      {/* A subtle divider */}
      <div className="border-t border-[#334155] mt-3 pt-3">
        <p className="text-[#CBD5E1] text-xs">
          ✓ Settled in 8 months
        </p>
      </div>

    </div>
  )
}