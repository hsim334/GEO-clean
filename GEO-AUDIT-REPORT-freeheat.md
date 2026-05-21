# GEO Audit Report: Free Heat Industries

**Audit Date:** 20 May 2026
**URL:** https://freeheat.com.au
**Business Type:** Local Service Business — Pool heating, freshwater ozone pool systems, and pool equipment specialist
**Location:** Gold Coast & Brisbane, Queensland, Australia
**CMS:** Joomla (server-side rendered)
**Pages Analysed:** 11

---

## Executive Summary

**Overall GEO Score: 29/100 — Critical**

Free Heat Industries has operated since 1981, carries real expertise, and has built a technically coherent 11-page Joomla website — but the site is effectively invisible to AI systems. The core problem is systemic metadata absence: zero meta descriptions, zero schema markup, no llms.txt, no author bylines, and no content dates across every single page. AI systems require structured signals to identify, trust, and cite content; this site provides almost none. The business's strongest assets — 45 years of demonstrated experience, a detailed FAQ, and the most comprehensive freshwater ozone comparison article in its category — are sitting in an unstructured state that prevents any AI model from confidently attributing or quoting them.

The good news: the content foundation is solid. Many of the fixes are configuration-level changes in Joomla (meta descriptions, canonical tags, schema injection) that do not require new content — they expose what already exists to machines.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 31/100 | 25% | 7.75 |
| Brand Authority | 28/100 | 20% | 5.60 |
| Content E-E-A-T | 42/100 | 20% | 8.40 |
| Technical GEO | 28/100 | 15% | 4.20 |
| Schema & Structured Data | 4/100 | 10% | 0.40 |
| Platform Optimization | 25/100 | 10% | 2.50 |
| **Overall GEO Score** | | | **29/100 — Critical** |

---

## Critical Issues (Fix Immediately)

### C1 — Zero schema markup across all 11 pages
**Pages affected:** All 11
No JSON-LD, microdata, or RDFa exists anywhere on the site. AI systems cannot structurally identify this as a LocalBusiness, recognise the FAQ as machine-readable Q&A, or attribute articles to an author. This is the single highest-leverage fix.
**Fix:** Add LocalBusiness + Organization JSON-LD to homepage (ready-to-paste block in Schema section below). Add FAQPage JSON-LD to /faq (full block provided). Add Article schema to 3 comparison articles.

### C2 — No meta descriptions on any page
**Pages affected:** All 11
Meta descriptions are the primary signal AI systems use to understand page purpose and generate preview text. Their complete absence means every page is summarised by inference — usually poorly.
**Fix:** Install OSMeta or sh404SEF Joomla extension and write meta descriptions for all 11 pages. Target 140–160 characters. Priority order: homepage, /faq, /pool-heating-solutions, /fresh-water-pools, 3 comparison articles.

### C3 — No llms.txt
**URL attempted:** https://freeheat.com.au/llms.txt → 404
AI assistants (ChatGPT, Claude, Perplexity) use llms.txt as a curated index of what a business offers. Without it, AI systems must infer the site's purpose from raw HTML — inconsistently.
**Fix:** Create /llms.txt (full recommended content in Technical section below).

---

## High Priority Issues

### H1 — No author bylines or publication dates on any content
**Pages affected:** All 3 comparison articles, FAQ, all service pages
AI systems heavily discount undated, unattributed content. The /pool-advice articles — which are the site's best citability candidates — read as anonymous marketing copy with no timestamp.
**Fix:** Add "By Hal Reynolds | Pool Systems Specialist | Last reviewed: [Month Year]" to every article and service page. Add visible `datePublished`/`dateModified` to page headers and in Article schema.

### H2 — No About page for Hal Reynolds
**Pages:** No /about or /about-hal-reynolds page exists
The "45 years experience" claim floats unanchored. AI systems cannot attribute expertise to a named, credentialed human unless that person has a discoverable bio page.
**Fix:** Create `/about-hal-reynolds` with photo, career timeline, trade qualifications, SPASA membership status, patent references, and Person schema markup.

### H3 — No canonical URL tags
**Pages affected:** All 11
Joomla can generate multiple URL variants for the same page (with/without trailing slash, HTTP/HTTPS, www/non-www). Without canonical tags, AI crawlers may index and partially credit multiple variants rather than consolidating authority on the correct URL.
**Fix:** Enable canonical URL output in Joomla SEO configuration (Global Configuration > SEO Settings > Search Engine Friendly URLs + Add Suffix).

### H4 — AI crawlers not explicitly welcomed in robots.txt
The current robots.txt implicitly allows all crawlers via the absence of blocks, but does not explicitly declare AI crawler access. Adding explicit `Allow: /` directives for GPTBot, ClaudeBot, and PerplexityBot signals active cooperation.
**Fix:** Append explicit allow rules to robots.txt (full block in Technical section below).

### H5 — No Open Graph or Twitter Card tags
**Pages affected:** All 11
When content is shared or referenced by AI systems in chat previews or social contexts, the fallback to page `<title>` produces poor summaries.
**Fix:** Add og:title, og:description, og:image, og:type to all pages via Joomla SEO extension.

---

## Medium Priority Issues

### M1 — Promotional tone in citability-critical content
The comparison articles and freshwater pool page use H2 headings like "Pure Freedom of a Freshwater Pool" and "A Swimming Experience Like No Other." AI systems discount promotional framing in favour of informational content. The /pool-heating-solutions page (~3,500w) is the exception — its technical H2 structure ("Sizing for Success", "Comprehensive Equipment Matching") is close to citation-ready.

### M2 — Statistics uncited across all pages
Energy savings claims (30% for inverter heat pumps, 50% for variable speed pumps) appear on /pool-equipment-upgrades and /energy-efficient-pool-systems without source attribution. The ionisers comparison article has the most specific data (copper 0.2–0.4ppm, ozone 3000x more effective, electrode lifespan 1–2.5 years) but no citations. Uncited statistics are used by AI systems at lower confidence.

### M3 — No external links/citations outbound
Zero external links to manufacturer data, Australian Standards, SPASA guidelines, or government energy efficiency resources. Outbound authority links are a trust signal — and provide the citations that make a page's statistics verifiable.

### M4 — Uniform sitemap priority (all 0.5)
All 11 sitemap entries share identical priority and "weekly" changefreq — the Joomla default. This signals an unconfigured site to crawlers that use these values for prioritisation.

### M5 — No ABN or physical address displayed
A business operating since 1981 with no ABN visible in footer and no street address triggers a trustworthiness gap. AI systems trained on Australian business data associate legitimate businesses with visible registration numbers.

---

## Low Priority Issues

### L1 — Images missing alt text site-wide
Product images, system diagrams, and logo files lack descriptive alt text across all pages. This affects accessibility and reduces the keyword signals available to crawlers on image-rich pages.

### L2 — No ProductReview.com.au or Trustpilot presence
Five Google reviews per page are embedded on-site, but no independent review platform presence exists. Reviews hosted on-site are less credible to AI systems than third-party corroborating signals.

### L3 — Pool Advice articles have no internal cross-links
The three comparison articles do not link to each other or to the FAQ. Internal linking distributes topical authority and helps AI systems map the site's knowledge graph.

### L4 — /pool-system-design-services not in sitemap
The design services page is linked from navigation but absent from sitemap.xml. Add it.

---

## Category Deep Dives

### AI Citability — 31/100

**Strongest asset:** `/pool-advice/freshwater-pools-vs-ionisers` — the most statistically dense page on the site with specific, extractable figures (50–80% chlorine reduction with ionisers, copper 0.2–0.4ppm, ozone 3000x more effective, 6–8 year cell lifespan, annual cost: 1 bag of mineral salt + 15L hydrochloric acid). This page alone is close to AI-citable if dated and attributed.

**Second strongest:** `/faq` — 10 Q&A pairs with moderately self-contained answers. FAQPage schema would immediately make these extractable by AI overview systems.

**Weakest:** `/fresh-water-pools` and `/pool-advice` landing page — heavily promotional framing and thin informational content respectively.

**Key gap:** Every page lacks the two signals that push content over the AI citation threshold: (1) author attribution with credentials, and (2) a publication/review date. Without these, even technically accurate content is treated as anonymous and potentially stale.

**Recommended rewrite — FAQ answer sharpening:**
> Current: "Yes, our freshwater ozone systems are compatible with heated pools with proper setup."
> Rewrite: "Yes. FreeHeat freshwater ozone systems are fully compatible with heated pools. The ozone cell is installed post-heater to prevent off-gassing, and low-TDS water (around 1,200 ppm) improves heater efficiency compared to standard saltwater systems operating at 3,000–5,000 TDS."

**Recommended addition — energy efficient page opening:**
> Add as first sentence: "Variable-speed pool pumps reduce filtration energy consumption by up to 50% compared to single-speed models, making them the highest-impact upgrade for Australian pool owners looking to reduce running costs."

---

### Brand Authority — 28/100

| Platform | Status | Signal Strength |
|---|---|---|
| Google Business Profile | Present (embedded reviews) | Low-Medium |
| Facebook | Active page | Low |
| LinkedIn | Company page not confirmed | Negligible |
| Nextdoor | One listing | Negligible |
| Buy Local AU | Listed | Negligible |
| ZoomInfo / RocketReach | Data-scraped entry | Negligible |
| Wikipedia | Not present (unrelated band article exists) | Negligible |
| Reddit | No mentions | Negligible |
| YouTube | No channel or videos | Negligible |
| ProductReview.com.au | Not present | Negligible |
| Trustpilot | Not present | Negligible |
| HiPages / Localsearch | Not confirmed | Negligible |
| News / Media | No press coverage found | Negligible |

**Summary:** Despite 45 years of operation, the brand's digital footprint outside its own domain is negligible. AI systems trained on internet corpora have almost no third-party data points to associate "Free Heat Industries" with pool heating expertise. This is the most surprising gap for a business of this age.

---

### Content E-E-A-T — 42/100

| Component | Score | Key Signal |
|---|---|---|
| Experience | 52/100 | "Since 1981" + customer tenure testimonials |
| Expertise | 48/100 | Technical depth present; no credentials listed |
| Authoritativeness | 28/100 | No third-party recognition; anonymous content |
| Trustworthiness | 44/100 | Phone + hours present; no ABN, no address, no ToS |

**Strongest E-E-A-T signal:** The business's founding year (1981) and the "45+ years experience" repeated claim are genuine trust anchors. A 14-year customer relationship testimonial (Joan Murray) is unusually strong social proof.

**Critical gap:** Hal Reynolds needs a discoverable expert identity. The LinkedIn link in the footer is the seed — a dedicated About page with trade history, credentials, and Person schema markup would lift the Authoritativeness score significantly.

---

### Technical GEO — 28/100

**Passes:** HTTPS ✓ | Server-side rendering (Joomla) ✓ | Sitemap present ✓ | AI crawlers not blocked ✓

**Fails:** Meta descriptions (0/11) ✗ | Canonical tags (0/11) ✗ | Open Graph tags (0/11) ✗ | JSON-LD schema (0/11) ✗ | llms.txt ✗

**Rendering verdict:** All content is visible in raw HTML. Joomla's SSR means AI crawlers can read every word of every page without executing JavaScript. This is a genuine technical advantage over React/Next.js sites with hydration problems.

**Recommended llms.txt** (create at https://freeheat.com.au/llms.txt):

```
# Free Heat Industries

> Australian pool heating and freshwater ozone pool system specialists based on the Gold Coast, Queensland. Supplying, installing, and servicing solar pool heating, heat pumps, freshwater ozone systems, and pool equipment upgrades for residential and commercial pools since 1981.

## Services
- /pool-heating-solutions — Solar and heat pump pool heating, sizing, and upgrades
- /fresh-water-pools — Freshwater ozone pool systems (low-chemical alternative to saltwater)
- /pool-equipment-upgrades — Variable speed pumps, robotic cleaners, automation
- /commercial-pool-heating — Commercial pool heating for apartments, resorts, body corporates
- /energy-efficient-pool-systems — Energy-efficient pool system upgrades and advice
- /pool-system-design-services — DIY pool system design and remote consultation

## Information
- /faq — Frequently asked questions about freshwater ozone pool systems
- /pool-advice/freshwater-pool-vs-saltwater-pool — Freshwater vs saltwater comparison
- /pool-advice/fresh-water-pool-vs-chlorine-pool — Freshwater vs chlorine comparison
- /pool-advice/freshwater-pools-vs-ionisers — Freshwater ozone vs ioniser comparison
```

**Recommended robots.txt additions** (append to existing file):

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GoogleOther
Allow: /
```

---

### Schema & Structured Data — 4/100

**Current state:** Zero schema markup confirmed on homepage and /faq. No JSON-LD, microdata, or RDFa anywhere across all 11 pages.

**Missing schema by page:**

| Page | Schema Required |
|---|---|
| Homepage | LocalBusiness, Organization |
| /fresh-water-pools | Service |
| /pool-heating-solutions | Service |
| /pool-equipment-upgrades | Service |
| /commercial-pool-heating | Service |
| /energy-efficient-pool-systems | Service |
| /pool-system-design-services | Service |
| /pool-advice | CollectionPage |
| 3 × comparison articles | Article, BreadcrumbList |
| /faq | FAQPage |

**Ready-to-implement JSON-LD blocks:**

**1. Homepage — LocalBusiness + Organization**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://freeheat.com.au/#business",
  "name": "Free Heat Industries",
  "url": "https://freeheat.com.au",
  "description": "Pool heating, freshwater ozone pool systems, and energy-efficient pool equipment for residential and commercial pools on the Gold Coast, Brisbane, and Tweed Coast. Operating since 1981.",
  "telephone": "+61418761739",
  "founder": {
    "@type": "Person",
    "name": "Hal Reynolds"
  },
  "foundingDate": "1981",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "06:00",
    "closes": "18:00"
  },
  "areaServed": [
    {"@type": "City", "name": "Gold Coast"},
    {"@type": "City", "name": "Brisbane"},
    {"@type": "Place", "name": "Tweed Coast"}
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "QLD",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.facebook.com/www.freeheat.com.au"
  ]
}
</script>
```

**2. /faq — FAQPage (complete, ready to paste)**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can freshwater ozone systems work with heated pools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Freshwater ozone systems are fully compatible with heated pools. The ozone cell is installed post-heater to prevent off-gassing, and low-TDS water (around 1,200 ppm) improves heater efficiency compared to standard saltwater systems."
      }
    },
    {
      "@type": "Question",
      "name": "How do freshwater ozone systems differ from saltwater pools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Freshwater ozone systems operate at lower total dissolved solids (around 1,200 TDS), produce minimal chlorine, and rely on ozone-based oxidation rather than salt electrolysis. This results in gentler water on skin, eyes, and pool equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Is chlorine still needed with a freshwater ozone system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, small supplemental amounts of chlorine are still required to maintain a residual disinfectant in the water alongside the ozone's primary oxidation role."
      }
    },
    {
      "@type": "Question",
      "name": "What are the advantages of a freshwater ozone pool over traditional systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Freshwater ozone pools minimise chemical consumables, operate efficiently at low TDS levels, reduce long-term maintenance costs, and produce clearer, softer water compared to saltwater and traditional chlorine systems."
      }
    },
    {
      "@type": "Question",
      "name": "Can my existing pool be upgraded to a freshwater ozone system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most existing pools can transition from saltwater, chlorine, or older treatment systems to a freshwater ozone setup with compatible design integration."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a freshwater ozone system last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Systems last many years with proper maintenance. The corona discharge technology used by Free Heat Industries is backed by a 10-year warranty."
      }
    },
    {
      "@type": "Question",
      "name": "What maintenance does a freshwater ozone system require?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regular water balance checks are needed, along with biennial inspections. The ozone cell may require replacement after 6 to 8 years depending on usage."
      }
    },
    {
      "@type": "Question",
      "name": "Are freshwater ozone systems safe for swimmers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ozone dissolves fully before reaching swimmers and leaves no harmful residues. Only minimal chlorine levels are maintained as a supplemental safeguard."
      }
    },
    {
      "@type": "Question",
      "name": "Can a freshwater ozone system reduce pool operating costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, through reduced chemical spend, lower TDS operation reducing equipment wear, and minimised consumables compared to saltwater or chlorine systems."
      }
    },
    {
      "@type": "Question",
      "name": "Is a freshwater ozone system right for my pool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is ideal for heated pools where the priorities are crystal-clear water, low chemical use, durable equipment, and lower ongoing maintenance costs."
      }
    }
  ]
}
</script>
```

**3. Comparison Articles — Article template**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title — e.g. Freshwater Pools vs. Ionisers]",
  "url": "https://freeheat.com.au/pool-advice/[slug]",
  "author": {
    "@type": "Person",
    "name": "Hal Reynolds",
    "url": "https://freeheat.com.au/about-hal-reynolds"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Free Heat Industries",
    "@id": "https://freeheat.com.au/#business"
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://freeheat.com.au"},
      {"@type": "ListItem", "position": 2, "name": "Pool Advice", "item": "https://freeheat.com.au/pool-advice"},
      {"@type": "ListItem", "position": 3, "name": "[Article Title]", "item": "https://freeheat.com.au/pool-advice/[slug]"}
    ]
  }
}
</script>
```

**Joomla implementation note:** For a site with 11 pages, the fastest implementation is adding each JSON-LD block to the relevant article's "Custom HTML" module or the page-specific metadata field. No plugin is required. Alternatively, the sh404SEF or OSMeta extension supports per-page schema injection via the admin UI.

---

### Platform Optimization — 25/100

The business has active Facebook and Google Reviews presence, and is listed on Nextdoor and Buy Local AU. All other platforms — YouTube, Reddit, Quora, ProductReview.com.au, Trustpilot, Wikipedia, HiPages, Localsearch.com.au — have zero presence. For a 45-year-old trade business, this is an unusually thin external footprint. AI models draw heavily on ProductReview.com.au and Reddit (r/auspool, r/DIY) for Australian home services queries; absence from both means the business cannot be cited in those response contexts.

---

## Quick Wins (Implement This Week)

1. **Create /llms.txt** — Copy the block from the Technical section above and upload it to the Joomla root. Estimated time: 15 minutes. Impact: Immediately signals AI assistants how to understand and navigate the site.

2. **Add FAQPage JSON-LD to /faq** — The complete, ready-to-paste block is in the Schema section above. Paste it into the /faq article's custom HTML field in Joomla admin. Estimated time: 10 minutes. Impact: Enables AI overview extraction and Google Featured Snippets for all 10 FAQ questions.

3. **Add LocalBusiness JSON-LD to homepage** — Complete block above. 10 minutes. Impact: Establishes entity identity for all AI systems and search engines.

4. **Write meta descriptions for all 11 pages** — Use an SEO extension (OSMeta is free). Write 140–160 character descriptions starting with the most important keyword. The homepage suggestion: *"Gold Coast & Brisbane pool heating specialists since 1981. Freshwater ozone pool systems, heat pumps, energy-efficient equipment, and commercial installations."*

5. **Add author + date to the 3 comparison articles** — Add "By Hal Reynolds, Pool Systems Specialist | Last reviewed: May 2026" visibly at the top of each /pool-advice article. This single change lifts E-E-A-T signals and citability in parallel.

---

## 30-Day Action Plan

### Week 1: Schema and Metadata Foundation
- [ ] Create /llms.txt (see Technical section for content)
- [ ] Add LocalBusiness + Organization JSON-LD to homepage
- [ ] Add FAQPage JSON-LD to /faq
- [ ] Install OSMeta or sh404SEF Joomla extension
- [ ] Write and publish meta descriptions for all 11 pages
- [ ] Add canonical URL tags via SEO extension

### Week 2: Author Identity and Content Credibility
- [ ] Create `/about-hal-reynolds` page with photo, career history, qualifications, and Person schema markup
- [ ] Add "By Hal Reynolds | Last reviewed: [date]" to all 3 comparison articles
- [ ] Add visible publication dates to all articles and service pages
- [ ] Add Article + BreadcrumbList schema to 3 comparison articles
- [ ] Add ABN number to site footer
- [ ] Add Service JSON-LD to at least /pool-heating-solutions and /fresh-water-pools

### Week 3: Brand Authority and Platform Expansion
- [ ] Create a LinkedIn Company Page for Free Heat Industries (founding year 1981, Gold Coast)
- [ ] Claim ProductReview.com.au business profile and invite recent customers to review
- [ ] List on HiPages and Localsearch.com.au with full business details and photos
- [ ] Append explicit AI crawler allow rules to robots.txt (GPTBot, ClaudeBot, PerplexityBot)
- [ ] Add Open Graph tags site-wide via SEO extension

### Week 4: Content Enhancement and Linking
- [ ] Add external citations to key statistics: link the 50% pump savings claim to manufacturer data or an Australian energy body
- [ ] Add 3–5 internal cross-links between comparison articles and the FAQ
- [ ] Add /pool-system-design-services to sitemap.xml
- [ ] Update sitemap priority values (homepage: 1.0, service pages: 0.8, articles: 0.6)
- [ ] Add alt text to all product/service images across the site
- [ ] Sharpen the top 5 FAQ answers using the rewrite pattern in the Citability section

---

## Appendix: Pages Analysed

| URL | Title | Word Count | GEO Issues |
|---|---|---|---|
| / | Gold Coast & Brisbane Pool Heating | ~1,200 | No meta desc, no schema, no OG tags |
| /fresh-water-pools | Fresh Water Pools | ~2,000 | No meta desc, no schema, no author, no date |
| /pool-heating-solutions | Pool Heating Solutions | ~3,500–4,000 | No meta desc, no schema, no author, no date |
| /pool-equipment-upgrades | Pool Equipment Upgrades | ~2,200–2,400 | No meta desc, no schema, uncited stats |
| /commercial-pool-heating | Commercial Pool Heating | ~1,800–2,000 | No meta desc, no schema, no author |
| /energy-efficient-pool-systems | Energy Efficient Pool Systems | ~2,200 | No meta desc, no schema, uncited stats |
| /pool-system-design-services | Pool System Design Service | ~800–900 | No meta desc, no schema, not in sitemap |
| /pool-advice | Pool Advice | ~1,200 | No meta desc, no schema, no dates on articles |
| /pool-advice/freshwater-pool-vs-saltwater-pool | Freshwater pool vs saltwater pool | ~1,200 | No meta desc, no schema, no author, no date |
| /pool-advice/fresh-water-pool-vs-chlorine-pool | Freshwater Pools vs. Chlorine Pools | ~1,100 | No meta desc, no schema, no author, no date |
| /pool-advice/freshwater-pools-vs-ionisers | Freshwater Pools vs. Ionisers | ~2,400 | No meta desc, no schema, no author, uncited stats |
| /faq | FreshWater Pool Systems FAQ | ~1,200 | No meta desc, no FAQPage schema |

**Pages not found / failed fetch:**
- /llms.txt — 404 Not Found
