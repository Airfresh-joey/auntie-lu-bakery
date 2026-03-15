'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type CakeStyle = 'tiered' | 'sheet' | 'cupcakes'
type EventType = 'wedding' | 'birthday' | 'corporate'

interface CakeTier {
  size: string
  diameter: number
  servings: number
}

const ROUND_CAKES: CakeTier[] = [
  { size: '6"', diameter: 6, servings: 12 },
  { size: '8"', diameter: 8, servings: 24 },
  { size: '10"', diameter: 10, servings: 38 },
  { size: '12"', diameter: 12, servings: 56 },
  { size: '14"', diameter: 14, servings: 78 },
]

const SHEET_CAKES = [
  { size: 'Quarter Sheet', servings: 24, label: '¼ Sheet' },
  { size: 'Half Sheet', servings: 48, label: '½ Sheet' },
  { size: 'Full Sheet', servings: 96, label: 'Full Sheet' },
]

const PRICE_RANGES: Record<EventType, { perServing: [number, number] }> = {
  wedding: { perServing: [6, 12] },
  birthday: { perServing: [4, 8] },
  corporate: { perServing: [3.5, 7] },
}

const EVENT_LABELS: Record<EventType, string> = {
  wedding: 'Wedding',
  birthday: 'Birthday',
  corporate: 'Corporate Event',
}

const STYLE_LABELS: Record<CakeStyle, string> = {
  tiered: 'Tiered Cake',
  sheet: 'Sheet Cake',
  cupcakes: 'Cupcakes',
}

function calculateTieredCake(guests: number) {
  // Find the best combination of tiers
  if (guests <= 12) return { tiers: [ROUND_CAKES[0]], total: 12 }
  if (guests <= 24) return { tiers: [ROUND_CAKES[1]], total: 24 }
  if (guests <= 38) return { tiers: [ROUND_CAKES[2]], total: 38 }
  if (guests <= 56) return { tiers: [ROUND_CAKES[3]], total: 56 }
  if (guests <= 78) return { tiers: [ROUND_CAKES[4]], total: 78 }

  // Multi-tier combinations
  if (guests <= 36) return { tiers: [ROUND_CAKES[0], ROUND_CAKES[1]], total: 36 }
  if (guests <= 50) return { tiers: [ROUND_CAKES[0], ROUND_CAKES[2]], total: 50 }
  if (guests <= 62) return { tiers: [ROUND_CAKES[1], ROUND_CAKES[2]], total: 62 }
  if (guests <= 74) return { tiers: [ROUND_CAKES[0], ROUND_CAKES[1], ROUND_CAKES[2]], total: 74 }
  if (guests <= 80) return { tiers: [ROUND_CAKES[1], ROUND_CAKES[3]], total: 80 }
  if (guests <= 90) return { tiers: [ROUND_CAKES[0], ROUND_CAKES[2], ROUND_CAKES[3]], total: 90 }  // 6+10+12 = 106, but let's use better combos
  if (guests <= 118) return { tiers: [ROUND_CAKES[0], ROUND_CAKES[1], ROUND_CAKES[2], ROUND_CAKES[3]], total: 130 }
  if (guests <= 150) return { tiers: [ROUND_CAKES[0], ROUND_CAKES[1], ROUND_CAKES[3], ROUND_CAKES[4]], total: 170 }
  if (guests <= 200) return { tiers: [ROUND_CAKES[0], ROUND_CAKES[1], ROUND_CAKES[2], ROUND_CAKES[3], ROUND_CAKES[4]], total: 208 }

  // Very large — multiple display cakes
  const fullTierTotal = 208
  const numSets = Math.ceil(guests / fullTierTotal)
  const tiers = Array(numSets).fill(ROUND_CAKES).flat()
  return { tiers, total: fullTierTotal * numSets }
}

function calculateSheetCake(guests: number) {
  if (guests <= 24) return { sheets: [SHEET_CAKES[0]], total: 24 }
  if (guests <= 48) return { sheets: [SHEET_CAKES[1]], total: 48 }
  if (guests <= 96) return { sheets: [SHEET_CAKES[2]], total: 96 }
  // Multiple sheets
  const fullSheets = Math.ceil(guests / 96)
  return { sheets: Array(fullSheets).fill(SHEET_CAKES[2]), total: fullSheets * 96 }
}

function calculateCupcakes(guests: number) {
  // 1.5 cupcakes per guest is standard
  const count = Math.ceil(guests * 1.5)
  const dozens = Math.ceil(count / 12)
  return { dozens, total: dozens * 12 }
}

// Visual cake tier component
function CakeVisual({ tiers }: { tiers: CakeTier[] }) {
  const sorted = [...tiers].sort((a, b) => b.diameter - a.diameter)
  const maxWidth = sorted[0]?.diameter || 14

  return (
    <div className="flex flex-col items-center gap-0 py-6">
      {/* Cake topper */}
      <div className="w-3 h-6 bg-wheat rounded-full mb-1 animate-pulse" />
      <div className="w-1 h-3 bg-wheat" />

      {sorted.map((tier, i) => {
        const widthPct = (tier.diameter / maxWidth) * 100
        const minPx = 60
        const maxPx = 240
        const widthPx = minPx + ((maxPx - minPx) * widthPct) / 100

        return (
          <div key={i} className="flex flex-col items-center" style={{ animationDelay: `${i * 150}ms` }}>
            <div
              className="relative rounded-lg transition-all duration-500 group"
              style={{
                width: `${widthPx}px`,
                height: `${Math.max(36, 50 - i * 4)}px`,
              }}
            >
              {/* Cake layer */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-blush via-[#E8D5C4] to-accent shadow-md" />
              {/* Frosting stripe */}
              <div className="absolute top-0 left-0 right-0 h-[6px] rounded-t-lg bg-white/70" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold text-dark-crust/80 drop-shadow-sm">
                  {tier.size} — {tier.servings} servings
                </span>
              </div>
            </div>
            {/* Separator line between tiers */}
            {i < sorted.length - 1 && (
              <div className="w-8 h-[2px] bg-white/50" />
            )}
          </div>
        )
      })}

      {/* Cake board */}
      <div
        className="h-[6px] rounded-full bg-dark-crust/20 mt-1"
        style={{ width: `${(sorted[0]?.diameter || 14) / maxWidth * 240 + 20}px` }}
      />
    </div>
  )
}

function SheetCakeVisual({ sheets }: { sheets: typeof SHEET_CAKES }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      {sheets.map((sheet, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="relative rounded-xl bg-gradient-to-br from-blush via-[#E8D5C4] to-accent shadow-md flex items-center justify-center"
            style={{
              width: sheet.servings >= 96 ? '180px' : sheet.servings >= 48 ? '140px' : '100px',
              height: sheet.servings >= 96 ? '120px' : sheet.servings >= 48 ? '90px' : '70px',
            }}
          >
            <div className="absolute inset-1 rounded-lg border-2 border-white/40" />
            <span className="text-xs font-semibold text-dark-crust/80">{sheet.label}</span>
          </div>
          <span className="text-xs text-[#6B6560]">{sheet.servings} servings</span>
        </div>
      ))}
    </div>
  )
}

function CupcakeVisual({ dozens }: { dozens: number }) {
  const displayCount = Math.min(dozens * 12, 36)
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <div className="flex flex-wrap justify-center gap-2 max-w-[280px]">
        {Array.from({ length: displayCount }).map((_, i) => (
          <div key={i} className="flex flex-col items-center" style={{ animationDelay: `${i * 30}ms` }}>
            {/* Frosting swirl */}
            <div className="w-5 h-4 rounded-full bg-gradient-to-b from-white to-blush" />
            {/* Cupcake liner */}
            <div className="w-4 h-3 bg-gradient-to-b from-accent to-crust rounded-b-md" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }} />
          </div>
        ))}
      </div>
      {dozens * 12 > 36 && (
        <span className="text-sm text-[#6B6560]">+ {dozens * 12 - 36} more</span>
      )}
      <span className="text-xs text-[#6B6560]">{dozens} dozen ({dozens * 12} cupcakes)</span>
    </div>
  )
}

export default function ServingCalculator() {
  const [guests, setGuests] = useState(50)
  const [style, setStyle] = useState<CakeStyle>('tiered')
  const [eventType, setEventType] = useState<EventType>('wedding')

  const result = useMemo(() => {
    const priceRange = PRICE_RANGES[eventType]

    if (style === 'tiered') {
      const { tiers, total } = calculateTieredCake(guests)
      const low = Math.round(total * priceRange.perServing[0])
      const high = Math.round(total * priceRange.perServing[1])
      return { type: 'tiered' as const, tiers, total, priceLow: low, priceHigh: high }
    }

    if (style === 'sheet') {
      const { sheets, total } = calculateSheetCake(guests)
      const low = Math.round(total * priceRange.perServing[0])
      const high = Math.round(total * priceRange.perServing[1])
      return { type: 'sheet' as const, sheets, total, priceLow: low, priceHigh: high }
    }

    // cupcakes
    const { dozens, total } = calculateCupcakes(guests)
    const cupcakePrice: [number, number] = [2.5, 5]
    const low = Math.round(total * cupcakePrice[0])
    const high = Math.round(total * cupcakePrice[1])
    return { type: 'cupcakes' as const, dozens, total, priceLow: low, priceHigh: high }
  }, [guests, style, eventType])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Controls */}
      <div className="space-y-8">
        {/* Guest count */}
        <div>
          <label className="block text-dark-crust font-semibold mb-3 text-lg">
            Number of Guests
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={10}
              max={500}
              step={1}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-blush accent-crust"
            />
            <div className="relative">
              <input
                type="number"
                min={10}
                max={500}
                value={guests}
                onChange={(e) => {
                  const v = Math.min(500, Math.max(10, Number(e.target.value) || 10))
                  setGuests(v)
                }}
                className="w-20 text-center text-lg font-semibold text-dark-crust bg-cream border-2 border-blush rounded-xl px-3 py-2 focus:border-wheat focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="flex justify-between text-xs text-[#6B6560] mt-1 px-1">
            <span>10</span>
            <span>250</span>
            <span>500</span>
          </div>
        </div>

        {/* Cake Style */}
        <div>
          <label className="block text-dark-crust font-semibold mb-3 text-lg">
            Cake Style
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['tiered', 'sheet', 'cupcakes'] as CakeStyle[]).map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`relative rounded-xl px-4 py-4 text-sm font-medium transition-all duration-300 border-2 ${
                  style === s
                    ? 'bg-dark-crust text-white border-dark-crust shadow-lg scale-[1.02]'
                    : 'bg-white text-dark-crust border-blush hover:border-crust hover:shadow-md'
                }`}
              >
                <span className="block w-8 h-8 mx-auto mb-1 rounded-full bg-wheat/40"></span>
                {STYLE_LABELS[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-dark-crust font-semibold mb-3 text-lg">
            Event Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['wedding', 'birthday', 'corporate'] as EventType[]).map((e) => (
              <button
                key={e}
                onClick={() => setEventType(e)}
                className={`relative rounded-xl px-4 py-4 text-sm font-medium transition-all duration-300 border-2 ${
                  eventType === e
                    ? 'bg-dark-crust text-white border-dark-crust shadow-lg scale-[1.02]'
                    : 'bg-white text-dark-crust border-blush hover:border-crust hover:shadow-md'
                }`}
              >
                <span className="block w-8 h-8 mx-auto mb-1 rounded-full bg-wheat/40"></span>
                {EVENT_LABELS[e]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl shadow-lg border border-blush/50 overflow-hidden">
        {/* Result header */}
        <div className="bg-gradient-to-r from-dark-crust to-crust px-6 py-5">
          <h3 className="font-serif text-xl text-white mb-1">Your Recommendation</h3>
          <p className="text-blush/90 text-sm">
            For {guests} guests at a {EVENT_LABELS[eventType].toLowerCase()}
          </p>
        </div>

        {/* Visual */}
        <div className="px-6 py-4 bg-cream/50 border-b border-blush/30 min-h-[180px] flex items-center justify-center">
          {result.type === 'tiered' && <CakeVisual tiers={result.tiers} />}
          {result.type === 'sheet' && <SheetCakeVisual sheets={result.sheets} />}
          {result.type === 'cupcakes' && <CupcakeVisual dozens={result.dozens} />}
        </div>

        {/* Details */}
        <div className="px-6 py-6 space-y-4">
          {/* Size recommendation */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-crust"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <div>
              <p className="font-semibold text-dark-crust text-sm">Recommended</p>
              <p className="text-[#6B6560] text-sm">
                {result.type === 'tiered' && (
                  <>
                    {result.tiers.length === 1
                      ? `Single ${result.tiers[0].size} round cake`
                      : `${result.tiers.length}-tier cake (${result.tiers.map(t => t.size).join(' + ')})`
                    }
                  </>
                )}
                {result.type === 'sheet' && (
                  <>
                    {result.sheets.length === 1
                      ? result.sheets[0].size
                      : `${result.sheets.length}x ${result.sheets[0].size}`
                    }
                  </>
                )}
                {result.type === 'cupcakes' && (
                  <>{result.dozens} dozen cupcakes</>
                )}
              </p>
            </div>
          </div>

          {/* Servings */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-crust"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <p className="font-semibold text-dark-crust text-sm">Total Servings</p>
              <p className="text-[#6B6560] text-sm">{result.total} servings</p>
            </div>
          </div>

          {/* Price estimate */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-crust"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <p className="font-semibold text-dark-crust text-sm">Estimated Price Range</p>
              <p className="text-2xl font-serif text-dark-crust">
                ${result.priceLow.toLocaleString()} – ${result.priceHigh.toLocaleString()}
              </p>
              <p className="text-xs text-[#6B6560] mt-0.5">
                Final pricing depends on design complexity &amp; flavors
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-blush/30">
            <Link
              href={`/contact?guests=${guests}&event=${eventType}&style=${style}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-dark-crust hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get a Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <p className="text-center text-xs text-[#6B6560] mt-3">
              No obligation — we&apos;ll help you find the perfect fit
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
