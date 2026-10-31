# Web Art Work — Design System

Design system for **Web Art Work** (IT Solutions), a digital product studio in Kamianets-Podilskyi, Ukraine: websites, e-commerce, CRM, mobile apps (Capacitor), AI, Unity/3D, blockchain, quantum. Audience: small businesses and startups, mostly English-speaking (Upwork, LinkedIn).

First consumer: the **Pricing page redesign** (webart.work/pricing). The system also covers the shared header, footer and mobile tab bar used site-wide.

## Sources
- **webart.work** — brand identity and palette. Live CSS (`styles-73CZNMKK.css`) read Oct 2026: `--primary #d7d71d`, graphite `#282828/#343434/#404040`, light mode `#f3f4f7 / #17224f`, Poppins, easing `cubic-bezier(.25,.8,.25,1)`. Logo `landing/logo.svg` copied to `assets/logo.svg`.
- **nudot.com.tw** (via minimal.gallery) — compositional reference only: editorial hierarchy, whitespace, hairlines, precise type. Nothing copied.
- **`uploads/ТЗ редизайн сторінки Pricing — Web Art Work.pdf`** (spec, @Anton, 27 Oct 2026) — content, prices, sections, states, breakpoints, constraints. Copy also cross-checked against the live page.
- Stack to land on: Angular + Tailwind + CSS variables, no UI libraries.

## Index
- `styles.css` — entry; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css`, `shape.css`, `base.css` (element styles + `.t-*` / `.u-*` utilities), `legacy.css` (maps current site vars like `--primary`, `--c-bg-primary` onto new tokens).
- `components/<group>/` — React primitives + one `<group>.css` with the real class-based styles (portable to Angular templates as-is).
- `data/pricing.js` — single source of truth for packages, compare matrix, solutions, FAQ (`window.WAW_PRICING`).
- `guidelines/` — foundation specimen cards.
- `assets/` — `logo.svg`, `flags/united-kingdom.svg` (current site; not used by the new LangSwitch).
- `fonts/` — self-hosted Poppins 300–700 and IBM Plex Mono 400/500 (latin).
- `SKILL.md`, `thumbnail.html`.

## Components
- **actions/** — `Button` (primary · secondary · text; sm/md/lg; arrow up-right/right/down; block/split), `IconButton`
- **icons/** — `Icon` (bespoke glyph set, `ICON_NAMES`)
- **pricing/** — `PricingCard` (regular, featured), `PriceLabel`, `Badge`, `PriceChip`, `FeatureList`
- **compare/** — `CompareTable` (table ≥768, plan tabs <768, sticky header)
- **content/** — `SectionHeader`, `InlineList`, `SolutionCard`, `Accordion`, `Step`
- **navigation/** — `SiteHeader`, `LangSwitch`, `ThemeToggle`, `MobileTabBar`, `SiteFooter`

### Intentional additions
- `Icon` — bespoke glyphs replace Material Symbols (spec §7 allows inline SVG instead of the icon font).
- `SectionHeader`, `InlineList`, `Step` — spec sections (eyebrow + H2, hero micro-benefits, How it works) need a repeatable shape.

UI kit (full Pricing page, 1440 + 390) is **Phase 2** — pending approval of this system.

---

## CONTENT FUNDAMENTALS
- **Language:** English only today. Plain, concrete, small-business-friendly. No jargon beyond product names (Capacitor, Cosmos SDK, IBM Quantum).
- **Voice:** "we" (the studio) speaking to "you" (the client). "Your photos and texts", "We will credit part of your original payment".
- **Casing:** Sentence case for headings, CTAs and labels ("Start your website project", "Compare all features"). Title Case only for package names (Basic, Pro, Extended) and nav items. Mono labels are rendered uppercase by CSS, authored in sentence case.
- **CTAs name the package:** "Start with Basic / Pro / Extended". Secondary: "Get a quote", "Compare all features ↓", "Book a free 15-min call".
- **Prices:** `$200` + "one-time"; solutions "From $1,200"; Quantum "On request". US-style thousands commas. Never "only", "just", "!".
- **Feature lines:** short noun phrases, no full stops: "Basic SEO setup", "Up to 5 extra pages". Inherited tier first: "Everything in Pro".
- **Descriptions:** one line, no full stop on cards ("A site built around your business"); full sentences in leads and FAQ answers.
- **No emoji, no exclamation marks, no performance claims** (ratings, project counts, guarantees, payment terms are unverified until confirmed).

## VISUAL FOUNDATIONS
- **Palette:** one accent — **Signal** `#d7d71d` (site primary; logo gradient `#F8EC20 → #A79F1E` gives the scale ends). The Pricing-only gold `#f4d37b`, green checks `#7ee787` and red `#c53d3d` are retired. Dark theme on **Graphite** (`#282828` page, `#2e2e2e/#343434` surfaces, `#404040` lines). Light theme on **Mist** (`#f3f4f7`) with **Navy** `#17224f` headings — both from the current light mode.
- **Accent rules:** Signal is a *fill* (primary CTA, Most Popular badge, featured rule, active nav underline, open-accordion toggle, list markers). As *text* it is `--accent-text`: Signal on dark, deep olive `#5c590c` on light — never yellow text on light. Text on Signal is always `#0b0b0f`.
- **Type:** Poppins (brand) for everything readable, at **500** for headings with strong negative tracking (−0.03 to −0.045em) — hierarchy by size and space, not by the old weight 900. IBM Plex Mono for indices (01–08), eyebrows, meta keys (LAUNCH / PAGES), chips and footers — the "spec sheet" voice. Price numerals are the loudest element on a card (52–68px), with a small raised `$`.
- **Layout:** 12-col grid in a 1280 container (80px margins at 1440), 8-col tablet, 4-col mobile (20px margins). Asymmetric section heads: title spans 7 cols, lead sits right in 5 cols, aligned to the baseline. Section spacing 80–160px. Every section opens with a mono eyebrow, index and a hairline that runs to the edge.
- **Lines over boxes:** separation is done with 1px hairlines (`--border-subtle`, `--border`, `--border-strong`), tonal surface steps and whitespace. Feature lists, meta rows, FAQ and the compare table are all hairline-ruled.
- **Cards:** 8px radius, 1px `--border`, `--surface-1`, almost no shadow (`--shadow-1` hairline highlight). Featured card: warmed surface, accent hairline, 2px Signal top rule. Solution cards are transparent until hover.
- **Radii:** 0 / 2 / 4 / 8 / 14 — badges 2, buttons 4, cards 8, the final CTA block 14. No pills. Square-capped glyphs to match.
- **Shadows:** three only — hairline, `--shadow-lift` (hover on pricing cards), `--shadow-menu` (dropdown).
- **Backgrounds:** flat colour. No orbs, gradients, textures or illustrations (the current blurred pricing orbs are removed). No imagery on the Pricing page; the OG image should follow the same flat graphite + Signal language.
- **Transparency & blur:** only on the sticky header and mobile tab bar (`--surface-header` + 14px blur). Nowhere else.
- **Hover:** pricing card lifts 4px with `--shadow-lift`; solution card hairline turns accent and the corner arrow nudges 3px; buttons darken (primary) or go full-contrast outline (secondary); text links draw a 1px underline left→right; nav items preview a short accent rule.
- **Press:** 1px downward translate + darker fill. No scale/shrink.
- **Focus:** 3px solid ring, 2px offset — Signal on dark, Navy on light. Always visible on keyboard focus.
- **Motion:** brand easing `cubic-bezier(.25,.8,.25,1)`, 150 / 250 / 400ms. Fades and short translations only, section reveals ≤400ms. `prefers-reduced-motion` sets all durations and the lift to 0.
- **Contrast:** all text pairs ≥4.5:1 in both themes (see Colors → Contrast pairs card, computed live).
- **Touch targets:** ≥44×44 on every control, including text links and tab bar items.

## ICONOGRAPHY
- The live site uses **Material Symbols Outlined** (icon font). The new system **replaces it** with a small bespoke inline-SVG set (`components/icons/Icon.jsx`): 20px grid, 1.5px stroke, square caps, mitred joins, `currentColor`, `aria-hidden` by default.
- Glyphs exist only where a symbol carries meaning: arrows on CTAs (↗ leave/open form, → next, ↓ in-page), check / dash / plus in feature lists and the compare table, sun/moon, chevron, menu/close, and the 5 mobile tab icons (Services, Solutions, Partners, Startups, Pricing).
- **Solution cards use mono index numbers (01–08) instead of icons** — typographic labelling over pictograms.
- No emoji, no unicode-as-icon (except `·` as an inline separator), no Lucide / Font Awesome / Material.
- Social links (LinkedIn, Upwork, Instagram, GitHub) are text + ↗ — third-party logos are not redrawn.
- Language: mono code "EN" instead of a flag.

## Open questions (from spec checklist)
- Basic page count ("1 page" assumed), compare matrix values (draft from spec).
- Payment terms / guarantees, Upwork rating, project counts, testimonials, client logos — not used until confirmed.
- Visible contact email (currently Cloudflare-obfuscated) — `SiteFooter` hides it until provided.
- UA version: Poppins has no Cyrillic; a Ukrainian version would need a Cyrillic-capable pairing.
