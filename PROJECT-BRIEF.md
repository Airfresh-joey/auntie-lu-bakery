# Auntie Lu's Bakery - Project Brief

**Created:** Feb 14, 2026
**Status:** Research & Planning
**Priority:** Low (not priority - everything else comes first)
**Client:** Joey's friend

---

## 🎯 Project Vision

**Goal:** Build the best bread website on the planet with national SEO scale.

**Business Model:**
- Artisan sourdough bakery (similar to Freshly Baked by Jenn, Kimmy's Bakery)
- Online ordering with scheduled pickup times (several days after order)
- National SEO presence via city/state geo pages

---

## 📋 Requirements Summary

### Core Features
1. **Beautiful, clean design** - Warm, artisan, appetizing
2. **Order system with pickup scheduling** - Explicit pickup times, several days out
3. **Replicate Main Street Sweets Frisco order page** - Clean, calendar-based ordering
4. **Scalable geo-pages** - Every city/state across the country (~5,000+ pages)

### MVP Scope
- Main look and feel
- All core pages built out
- **ONE city as template** (San Diego suggested)
- Duplicate process for remaining cities later

---

## 🎨 Design Inspiration

### Primary References

| Site | What to Take |
|------|--------------|
| **Freshly Baked by Jenn** (freshlybakedbyjenn.com) | Warm micro-bakery vibe, "Meet the Baker" section, product highlights, community focus |
| **Kimmy's Bakery** (kimmysbakery.com) | FAQ structure, subscription model, process transparency, pickup scheduling system |
| **Amy Bakes Bread** (amybakesbread.com) | Recipe blog integration, beginner guides, cookbook promotion, course upsells |
| **Main Street Sweets Frisco** (mainstreetsweetsfrisco.com/order) | Order page UX - calendar-based, clear dates, pop-up events |

### Design Principles (from inspiration sites)
- **Personal storytelling** - "Meet the Baker" humanizes the brand
- **Process transparency** - Show the craft (fermentation, hand-scoring, etc.)
- **Simple navigation** - Order, About, FAQ, Contact
- **High-quality food photography** - The hero
- **Warm color palette** - Browns, creams, wheat tones
- **Mobile-first** - Most bakery customers browse on phone

---

## 🌍 SEO Strategy: Programmatic Geo Pages

### The Scale Challenge
- ~19,500 cities in the US with population > 5,000
- Target: Major cities + suburbs in every state
- Realistic MVP: 500-1,000 cities initially, expand to 5,000+

### Programmatic SEO Approach

**Page Template Structure:**
```
/sourdough-bread-[city]-[state]/
/artisan-bakery-[city]-[state]/
/fresh-baked-bread-[city]-[state]/
```

**Each city page includes:**
1. **Hero:** "Fresh Sourdough Bread in [City], [State]"
2. **Localized intro:** AI-generated unique paragraph about the city
3. **Product showcase:** Same core products
4. **How it works:** Order → Bake → Pickup/Ship
5. **Local touches:** Nearby pickup locations, local partnerships
6. **FAQ:** Localized shipping/pickup info
7. **CTA:** Order now

### Technical Implementation Options

| Option | Pros | Cons |
|--------|------|------|
| **SEOmatic.ai** | Purpose-built for this, templates, AI content | Monthly cost |
| **Next.js + Database** | Full control, custom | More dev work |
| **WordPress + ACF + WP All Import** | Familiar, plugins exist | Can get slow at scale |
| **Webflow + Whalesync** | Beautiful design, database sync | Limited at extreme scale |

**Recommendation:** Start with Next.js or Astro for static generation. Build template, populate from city database, deploy to Vercel/Netlify.

---

## 📦 Site Architecture

```
/                       # Homepage - Hero, Featured Products, About
/menu                   # Full product catalog
/order                  # Order page (Main Street Sweets style)
/about                  # Our Story, Meet the Baker
/faq                    # Common questions
/contact                # Contact form, location
/blog                   # Recipes, tips (optional for SEO)
/[city]-[state]/        # Geo landing pages (programmatic)
```

---

## 🛒 Order System Requirements

### Key Features (from client notes)
1. **Calendar-based pickup selection**
2. **Pickup times are several days after order** (bake-to-order model)
3. **Clear availability** - Rolling 60-day window
4. **Pop-up event integration** (like Main Street Sweets)

### Technical Options
- **Square Online** - Built-in scheduling, easy setup
- **Shopify + Zapiet** - Robust pickup scheduling plugin
- **Custom (Stripe + Cal.com)** - Full control
- **WooCommerce + Delivery Slots** - WordPress-based

**Recommendation:** Shopify + Zapiet for MVP. Clean, proven, scalable.

---

## 🚀 Recommended Next Steps

### Phase 1: Foundation (Week 1-2)
1. [ ] Finalize brand identity (logo, colors, fonts)
2. [ ] Gather product photography
3. [ ] Write core copy (About, FAQ, Product descriptions)
4. [ ] Choose tech stack (recommend: Next.js + Shopify)
5. [ ] Design homepage mockup

### Phase 2: MVP Build (Week 3-4)
1. [ ] Build core pages (Home, Menu, About, FAQ, Contact)
2. [ ] Implement order system with pickup scheduling
3. [ ] Create ONE city template (San Diego)
4. [ ] Test full order flow

### Phase 3: Geo Expansion (Week 5+)
1. [ ] Build city database (start with 100 major cities)
2. [ ] Generate unique AI content per city
3. [ ] Deploy programmatic pages
4. [ ] Monitor indexing and rankings
5. [ ] Scale to 500, then 1,000, then 5,000 cities

### Phase 4: Marketing (Ongoing)
1. [ ] Google Business Profile optimization
2. [ ] Social media presence (Instagram focus)
3. [ ] Email marketing setup
4. [ ] Local partnerships and PR

---

## 💰 Budget Considerations

| Item | Estimated Cost |
|------|----------------|
| Domain | $15/year |
| Hosting (Vercel/Netlify) | Free - $20/mo |
| Shopify Basic | $39/mo |
| Zapiet (pickup scheduling) | $29/mo |
| SEO tools | $0-100/mo |
| AI content generation | ~$50-100 for bulk |

**Total MVP:** ~$70-90/mo + initial dev time

---

## 📁 Project Files

- `PROJECT-BRIEF.md` - This file
- `DESIGN-INSPIRATION.md` - Screenshots and notes (TBD)
- `CONTENT.md` - Copy and product info (TBD)
- `CITY-DATABASE.csv` - City/state data for geo pages (TBD)
- `/mockups/` - Design files (TBD)
- `/src/` - Code (TBD)

---

## Notes

- **Not priority** - Other projects come first
- **Quality over speed** - This should be the "best bread website on the planet"
- **MVP first** - Get San Diego working perfectly before scaling

---

*Last updated: Feb 14, 2026*
