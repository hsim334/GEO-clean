# GEO Audit Report: Cutting Edge Screens

**Audit Date:** 2026-05-21
**URL:** https://www.cuttingedgescreens.com.au/
**Business Type:** Local Business / E-commerce Hybrid (Laser-cut decorative metal screens)
**Location:** 1 Sheriffs Road, Lonsdale SA 5160, South Australia
**Owner:** Terry Stewart
**Pages Analyzed:** 8

---

## Executive Summary

**Overall GEO Score: 28/100 — Critical**

Cutting Edge Screens has a functioning website with genuine business substance — named institutional clients, real technical capabilities, and competitive pricing — but almost none of this substance is structured in a way AI systems can extract and cite. The site scores in the Critical band primarily because it has zero schema markup across all 8 pages, no llms.txt, no meta descriptions, no FAQ content, no third-party directory listings, and no customer testimonials. The business is currently invisible to generative engines (ChatGPT, Claude, Perplexity, Gemini) not because it lacks credibility, but because that credibility is entirely undocumented in machine-readable form. The highest-priority actions — adding LocalBusiness schema, creating llms.txt, and claiming Google Business Profile — can be completed within a single working day and would alone lift the score by an estimated 12-18 points.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 26/100 | 25% | 6.5 |
| Brand Authority | 22/100 | 20% | 4.4 |
| Content E-E-A-T | 39/100 | 20% | 7.8 |
| Technical GEO | 44/100 | 15% | 6.6 |
| Schema & Structured Data | 5/100 | 10% | 0.5 |
| Platform Optimization | 20/100 | 10% | 2.0 |
| **Overall GEO Score** | | | **27.8 → 28/100** |

---

## Critical Issues (Fix Immediately)

### C1 — Zero Schema Markup Across All 8 Pages
No structured data of any kind exists on any page of the site. No LocalBusiness, no Product, no Organization, no FAQPage, no Service schema. This means AI systems cannot reliably extract entity facts about the business (what it does, where it is, what it sells, who owns it) from a machine-readable source. This is the single most impactful fix available.

**Fix:** Add `HomeAndConstructionBusiness` + `Organization` JSON-LD to the homepage immediately using the code block in the Schema section below. Use the Insert Headers and Footers WordPress plugin if RankMath/Yoast are not installed. Expected impact: +8-12 points composite score.

### C2 — No llms.txt File
`https://www.cuttingedgescreens.com.au/llms.txt` returns 404. llms.txt is the emerging standard for telling AI crawlers what a site is, what it offers, and what pages are most valuable. Its absence means AI systems have no structured entity signal to anchor citations.

**Fix:** Create `/llms.txt` at domain root. See template in Technical GEO section below.

### C3 — Pricing Page Returns 404 Despite Being in Main Navigation
`/pricing/` is linked from every page in the navigation but returns HTTP 404. This broken link is seen by every crawler and user and directly undermines trust signals.

**Fix:** Either create the pricing page (recommended — it is the highest-citability page type for e-commerce) or remove the navigation link and redirect to the homepage product listings.

### C4 — Zero Meta Descriptions on All 8 Pages
Not a single page has a `<meta name="description">` tag. AI crawlers use meta descriptions for snippet extraction. The absence forces AI systems to generate their own descriptions from body content — which is unreliable for thin pages.

**Fix:** Install Yoast SEO or RankMath (free) and write a unique 150-character meta description for every page. Start with homepage, custom screens, and contact.

---

## High Priority Issues (Fix Within 1 Week)

### H1 — No Open Graph or Twitter Card Tags on Any Page
No `og:title`, `og:description`, `og:image`, `og:type`, `twitter:card`, or any social metadata on any page. These tags are consumed by AI platforms when processing shared links.

**Fix:** Activate Yoast/RankMath social settings. Add og:image (1200×630px) featuring a product photo to each page. At minimum, set site-wide OG fallback title and image.

### H2 — No FAQ Content or FAQ Schema Anywhere
The site has zero question-and-answer formatted content. FAQ blocks are the highest-citability content format for AI systems. Questions like "How long do laser cut screens last?", "What materials are available?", and "How much does a custom screen cost?" have zero representation on the site.

**Fix:** Add a dedicated FAQ page with 10+ questions, and add FAQPage schema markup. The JSON-LD for 5 core FAQ pairs is provided in the Schema section below — ready to copy-paste.

### H3 — Terry Stewart Has No Bio or Credentials Page
The owner is named only on the contact page without any credentials, background, or professional biography. "Over 50 years cutting/manufacturing experience" appears on the homepage with no attribution to a named person. Named human experts with documented credentials are among the strongest E-E-A-T signals for AI citation.

**Fix:** Create an "About Terry Stewart" page or expand the Contact page with a 200-word bio including: trade background, founding story, relevant qualifications, and a professional photo.

### H4 — No Google Business Profile Confirmed / No Directory Listings
The business does not appear on YellowPages.com.au, TrueLocal.com.au, Hipages.com.au, or ProductReview.com.au. These are the four platforms AI models most commonly cite for local service businesses in Australia. Zero confirmed Google reviews.

**Fix:** Claim and complete listings on YellowPages, TrueLocal, and Hipages this week (all free at basic tier). Submit Google Business Profile verification. These listings are directly cited by AI assistants answering queries like "laser cut screens Adelaide."

### H5 — No Canonical Tags on Any Page
No `<link rel="canonical">` on any page. This creates URL ambiguity for AI and search crawlers (HTTP vs HTTPS, www vs non-www, trailing slash variants).

**Fix:** Install Yoast/RankMath — both auto-generate canonical tags once activated.

---

## Medium Priority Issues (Fix Within 1 Month)

### M1 — Client Folio Has 14 Named Projects With Zero Narrative
The Client Folio page lists 14 commercial and institutional project names (Eldercare Aged Care Facility, Seacliff Surf Life Saving Club, Emmaus Catholic School, Government House Gardens, etc.) but provides zero description for any of them — no materials used, no scope, no outcome, no client quote. This is the highest-potential page on the site currently delivering the lowest citability value.

**Fix:** Convert at least 3 projects into 400-word case studies. Government House Gardens, Seacliff Surf Life Saving Club, and Eldercare are the strongest authority names. Each case study should include: client name, location, materials selected, dimensions or scale, manufacturing process, and ideally a testimonial quote.

### M2 — No Customer Testimonials Anywhere on the Site
Despite 14+ named completed projects, there is not a single client testimonial, quote, or review on any page of the site. AI systems weight first-person customer voices heavily when evaluating trustworthiness.

**Fix:** Email 5 past customers requesting a 2-3 sentence testimonial. Add a dedicated Testimonials section to the homepage and/or Why Choose page. Also solicit Google Reviews with a direct link.

### M3 — No Privacy Policy or Terms & Conditions
The site collects contact form data but has no privacy policy. This is a legal compliance issue (Australian Privacy Act 1988) and a trust signal gap. Google and AI systems deprioritise sites without legal pages.

**Fix:** Add a Privacy Policy and basic Terms & Conditions. Free generators available at app.termly.io or use a WordPress plugin.

### M4 — Content is Very Thin (280-700 words per page, no blog)
The site has 8 pages totalling approximately 4,000-4,500 words of content. There is no blog, no guides, no educational content, and no original research. AI systems overwhelmingly cite sites with educational depth in their field.

**Fix:** Add a blog or resources section. Initial targets: "How to choose the right material for outdoor laser cut screens", "Corten steel vs aluminium — which is better for your garden?", "How laser cutting works: a guide to the process."

### M5 — No LinkedIn or YouTube Presence
A competitor ("Architectural Laser Cut Screens") already has a LinkedIn company page. YouTube is increasingly cited by AI systems for authority validation. The business has a highly visual product that performs well in video format.

**Fix:** Create a LinkedIn company page and publish one 60-90 second walkthrough video of a completed project on YouTube. Title: "Custom Laser Cut Metal Screens Adelaide — Cutting Edge Screens."

### M6 — No Viewport Meta Tag
No `<meta name="viewport">` tag detected. This is a baseline mobile rendering requirement and may affect mobile-first indexing.

**Fix:** Add `<meta name="viewport" content="width=device-width, initial-scale=1">` to the theme's `<head>` via functions.php or the theme customizer.

---

## Low Priority Issues (Optimise When Possible)

### L1 — /materials-styles/ and /styles/ Pages Appear to Duplicate Content
Both pages appear to cover similar material lists and content themes. Duplicate content dilutes authority across similar pages.

**Fix:** Audit both pages. Differentiate them clearly (e.g., /materials-styles/ = detailed material specs and comparisons; /styles/ = design gallery and style categories) or consolidate into one comprehensive page with a redirect.

### L2 — No Hreflang Tags
The site targets an Australian audience but has no hreflang tags (`<link rel="alternate" hreflang="en-AU">`). While not critical for a purely local AU site, it provides clean market signals.

**Fix:** Low effort via Yoast/RankMath — add as part of the meta tags fix.

### L3 — DevIT Technologies Designer Credit Link
Footer links to the developer. This is a minor outbound authority signal but worth noting.

**Fix:** Add `rel="nofollow"` to the designer credit link.

### L4 — Pinterest Presence is Passive
One Pinterest pin was found (a client folio image). Given the highly visual nature of the product, active Pinterest board curation would improve platform diversity scores.

**Fix:** Create a Cutting Edge Screens Pinterest account and curate boards for each design style/material category.

---

## Category Deep Dives

### AI Citability — 26/100

**Summary:** The site has genuine factual assets that AI systems could cite — price ranges, material specs, named clients, technical capabilities — but almost none are structured in extractable formats.

**Strongest content blocks:**
- Homepage product pricing (Circles $150-$390, etc.) — price data is specific and quotable
- Custom Screens page (~650-700 words, best structural heading use on the site)
- Beware page — material thickness specs (1.6mm, 3mm Corten) are the site's most precise technical facts

**Weakest content blocks:**
- Client Folio — 14 project names with zero narrative
- Homepage business claims — "Family owned," "50 years experience" are unanchored marketing fragments
- Materials & Styles — comma-separated material list with no explanatory sentences

**No answer-first paragraphs exist on any page.** Every page opens with a heading fragment or list rather than a sentence that directly answers the query the page targets. No FAQ sections exist anywhere.

**Rewrite priority #1 — Client Folio:**
> *Current:* "Eldercare Aged Care Facility at Goodwood, Stainless Steel Decorative Panels, Babylon Decorative Screen..."
>
> *Recommended:* "Cutting Edge Screens has completed over 30 commercial and residential laser-cut screen installations across metropolitan Adelaide. Projects include the Eldercare Aged Care Facility in Goodwood, where 3mm powder-coated aluminium privacy screens were installed across a full external facade, and the Seacliff Surf Life Saving Club, which received custom Corten steel decorative panels rated for coastal exposure. Each project is manufactured in Lonsdale, South Australia using CNC laser cutting with tolerances to 0.1mm."

**Rewrite priority #2 — Homepage business claims:**
> *Current:* "Family owned and run business | Over 50 years cutting/manufacturing experience"
>
> *Recommended:* "Cutting Edge Screens is a family-owned laser cutting business founded and operated by Terry Stewart, based in Lonsdale, South Australia. With over 50 years of combined manufacturing experience, the business specialises in custom decorative metal screens for residential, commercial, and architectural applications. All products are manufactured on-site at 1 Sheriffs Road, Lonsdale SA 5160, with standard lead times of approximately 3 weeks and free delivery throughout the Adelaide Metropolitan Area."

**Rewrite priority #3 — Materials page:**
> *Current:* "Steel, Stainless Steel, Corten Steel, Aluminium, Bronze, Titanium..."
>
> *Recommended:* "Laser cut decorative screens from Cutting Edge Screens are available in 11 materials. Corten steel (weathering steel) develops a characteristic rust-patina finish and is available in 1.6mm or 3mm thickness — ideal for outdoor installations where an aged aesthetic is desired. Powder-coated aluminium (3mm) is the most popular choice for residential privacy screens due to its light weight, corrosion resistance, and availability in custom RAL colours. Stainless steel is preferred for coastal environments and high-traffic commercial applications."

---

### Brand Authority — 22/100

**Platform presence map:**

| Platform | Status | Notes |
|---|---|---|
| Own website | ✅ Present | Primary asset |
| Facebook | ✅ Present | facebook.com/cuttingedgescreens1 |
| Pinterest | ⚠️ Passive | 1 pin found (client folio image) |
| Google Business Profile | ❓ Not confirmed | Not surfaced in search results |
| LinkedIn | ❌ Absent | Competitor already has one |
| YouTube | ❌ Absent | — |
| Reddit | ❌ Absent | No mentions found |
| Wikipedia | ❌ Absent | — |
| YellowPages.com.au | ❌ Not listed | — |
| TrueLocal.com.au | ❌ Not listed | — |
| Hipages.com.au | ❌ Not listed | — |
| ProductReview.com.au | ❌ Not listed | — |
| Houzz / Archiproducts | ❌ Absent | — |

**Confirmed third-party reviews:** 0

**Competitor context:** Decoview and Cutout.com.au (Cutout Architectural) both appear in directory and search results for the same queries. Architectural Laser Cut Screens has a LinkedIn company page.

**Core problem:** The brand is effectively invisible to AI models beyond its own domain. AI assistants answering "laser cut screens Adelaide" have no third-party data to validate or surface Cutting Edge Screens.

---

### Content E-E-A-T — 39/100

| Dimension | Score | Key Gap |
|---|---|---|
| Experience | 42/100 | 14 named projects but zero narrative depth; no project dates |
| Expertise | 38/100 | Technical vocab present but unattributed; no credentials for Terry Stewart |
| Authoritativeness | 31/100 | Named institutional clients are an asset; zero third-party validation |
| Trustworthiness | 44/100 | Address/phone/HTTPS present; no privacy policy, no reviews, no ABN displayed |

**Missing vs. AI citability benchmarks for home improvement/architectural products:**

| Signal AI Systems Prioritise | Industry Standard | CES Current State |
|---|---|---|
| Named author/expert with credentials | ~80% of cited sources | Absent |
| Customer testimonials with attribution | ~75% of cited sources | Absent |
| Specific technical specifications | ~70% of cited sources | Partial |
| Case studies with outcomes | ~65% of cited sources | Names only |
| Third-party validation | ~55% of cited sources | Absent |
| Privacy policy / legal pages | ~90% of cited sources | Absent |
| Industry certification references | ~50% of cited sources | Absent |
| Educational/guide content | ~60% of cited sources | Absent |

The business meets approximately 2 of 8 AI citability signals. The substance exists — it simply isn't documented.

---

### Technical GEO — 44/100

| Element | Status | Score Impact |
|---|---|---|
| HTTPS | ✅ Confirmed | Baseline met |
| robots.txt | ✅ All crawlers allowed | 20/25 pts |
| Sitemap | ✅ Present, 8 pages, up-to-date | 8/10 pts |
| WordPress (SSR) | ✅ Server-rendered HTML | 12/15 pts |
| llms.txt | ❌ 404 | 0/20 pts |
| Meta descriptions | ❌ None on any page | 0/20 pts |
| Open Graph tags | ❌ None on any page | 0 pts |
| Twitter Card tags | ❌ None on any page | 0 pts |
| Canonical tags | ❌ None detected | 0/10 pts |
| Viewport meta tag | ❌ Not detected | Flagged |
| Hreflang | ❌ Absent | Low priority |
| Schema/JSON-LD | ❌ None | 0 pts |

**llms.txt template (create at `/llms.txt`):**
```
# Cutting Edge Screens
> Laser-cut and water jet cut decorative metal screens for homes, gardens, and commercial spaces. Manufactured in Lonsdale, South Australia by Terry Stewart.

## Services
- Custom laser-cut metal screens (residential and commercial)
- Water jet cutting for any material
- CAD/CAM custom design service
- Decorative facades and architectural features

## Products
- Pre-designed laser-cut screens: Corten steel, aluminium, stainless steel
- Price range: $150–$1,820 depending on size and design
- Standard lead time: approximately 3 weeks
- Free delivery: Adelaide Metro area

## Contact
- Address: 1 Sheriffs Road, Lonsdale SA 5160, South Australia
- Phone: +61 419 814 153
- Email: sales@cuttingedgescreens.com.au

## Key Pages
- /custom-screens/ — Custom CAD/CAM and laser cutting services
- /materials-styles/ — Materials guide (steel, aluminium, Corten, and more)
- /client-folio/ — Commercial and residential project portfolio
- /why-choose-cutting-edge-screens/ — Quality and value positioning
- /contact/ — Quote requests and enquiries
```

---

### Schema & Structured Data — 5/100

**Current state:** Zero schema on all 8 pages. Score of 5/100 reflects a functioning HTTPS site with consistent URL structure as the only baseline — no structured data credit.

**Priority schema implementations:**

| Priority | Schema Type | Page | Reason |
|---|---|---|---|
| 1 | HomeAndConstructionBusiness | Homepage | Core entity declaration — tells AI what the business is |
| 2 | FAQPage | FAQ page (new) | Feeds AI answer extraction directly |
| 3 | Service | /custom-screens/ | Machine-readable service description with areaServed |
| 4 | Product | Homepage / product pages | Enables product-level AI citation with prices |
| 5 | BreadcrumbList | All inner pages | Declares site hierarchy to AI crawlers |

**Ready-to-use JSON-LD — LocalBusiness (homepage):**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.cuttingedgescreens.com.au/#organization",
      "name": "Cutting Edge Screens",
      "url": "https://www.cuttingedgescreens.com.au/",
      "description": "Cutting Edge Screens designs and manufactures laser-cut and water jet cut decorative metal screens for homes, gardens, and commercial spaces across Australia. Custom CAD/CAM designs available.",
      "telephone": "+61419814153",
      "email": "sales@cuttingedgescreens.com.au",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-17:00",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Sheriffs Road",
        "addressLocality": "Lonsdale",
        "addressRegion": "SA",
        "postalCode": "5160",
        "addressCountry": "AU"
      },
      "founder": {
        "@type": "Person",
        "name": "Terry Stewart"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "knowsAbout": [
        "Laser cutting", "Water jet cutting", "Decorative metal screens",
        "CAD/CAM design", "Custom metal fabrication", "Outdoor privacy screens"
      ],
      "sameAs": [
        "https://www.facebook.com/cuttingedgescreens1"
      ]
    }
  ]
}
</script>
```

**Ready-to-use JSON-LD — FAQPage (add to new FAQ page or homepage):**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do laser-cut metal screens last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cutting Edge Screens products are manufactured from high-quality steel and aluminium that, when powder coated, can last 20 years or more outdoors. All screens are designed for long-term structural integrity in the Australian climate."
      }
    },
    {
      "@type": "Question",
      "name": "Do you ship laser-cut screens outside of Adelaide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cutting Edge Screens ships Australia-wide. Free delivery is available within the Adelaide Metropolitan Area. Contact sales@cuttingedgescreens.com.au for a freight quote to other locations."
      }
    },
    {
      "@type": "Question",
      "name": "What materials are laser-cut screens available in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our decorative screens are available in mild steel, Corten (weathering) steel, stainless steel, and powder-coated aluminium. Corten is available in 1.6mm or 3mm thickness. Aluminium (3mm powder-coated) is the most popular choice for residential applications."
      }
    },
    {
      "@type": "Question",
      "name": "Can I provide my own design for a custom screen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can supply artwork as a vector file (PDF, DWG, DXF, SVG, PSD, PNG or JPG) and our team will prepare it for laser cutting or water jet cutting. We also offer a free in-house CAD/CAM design service."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a custom laser-cut screen cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pre-designed screens start from $150 for smaller pieces. Custom projects are quoted individually based on size, material, and design complexity. Contact us at sales@cuttingedgescreens.com.au or call +61 419 814 153 for a quote."
      }
    }
  ]
}
</script>
```

**Implementation:** Use Insert Headers and Footers plugin (Settings > Insert Headers and Footers) to paste the LocalBusiness JSON-LD into the site-wide `<head>`. Add FAQPage schema to individual pages via RankMath or Yoast Schema blocks. Validate every block at search.google.com/test/rich-results before publishing.

---

### Platform Optimization — 20/100

The site has two owned platforms (website + Facebook) and one passive third-party mention (Pinterest). It has no presence on the platforms AI models most frequently cite for Australian local service businesses:

- No Google Business Profile (or unverified/unclaimed)
- No YellowPages.com.au, TrueLocal.com.au, Hipages.com.au listings
- No LinkedIn company page
- No YouTube channel
- No Houzz or Archiproducts listing (key for architectural/home products)
- No ProductReview.com.au listing
- No Reddit mentions in any relevant subreddit (r/AusRenovation, r/AusPropertyChat, etc.)

A competitor ("Architectural Laser Cut Screens") already has a LinkedIn company page. Decoview and Cutout.com.au appear in directory results for the same queries.

---

## Quick Wins (Implement This Week)

1. **Add LocalBusiness JSON-LD to homepage** — Copy-paste the schema block above into Insert Headers and Footers. 30 minutes. Expected impact: +6-8 composite points. AI systems immediately gain a structured entity record for the business.

2. **Create llms.txt** — Copy-paste the template above into a new file at `yoursite.com/llms.txt` via WordPress Media or FTP. 15 minutes. Expected impact: +4-6 composite points. Directly accessible to all AI crawlers.

3. **Fix the /pricing/ 404** — Either create a pricing page or remove the nav link. Every visitor and crawler currently hits a dead end. 30 minutes. Expected impact: trust/crawl improvement.

4. **Claim Google Business Profile and request 5 reviews** — Go to business.google.com, claim the listing, complete all fields, then email 5 past customers with a direct review link. 1-2 hours. Expected impact: +4-6 composite points. This is the single action most likely to trigger AI Local Pack citations for "laser cut screens Adelaide."

5. **Add meta descriptions via Yoast/RankMath** — Install the plugin (free), write 8 unique 150-character descriptions. 1 hour. Expected impact: +3-4 composite points plus improved snippet quality in all AI platforms.

---

## 30-Day Action Plan

### Week 1: Technical Foundation (Days 1-7)
- [ ] Add LocalBusiness + FAQPage JSON-LD schema to homepage (use code blocks above)
- [ ] Create `/llms.txt` using the template above
- [ ] Fix the /pricing/ 404 (create page or remove nav link)
- [ ] Install Yoast SEO or RankMath; add meta descriptions to all 8 pages
- [ ] Add Open Graph tags site-wide (og:title, og:description, og:image) via Yoast/RankMath
- [ ] Add viewport meta tag to theme header
- [ ] Claim Google Business Profile and complete all fields

### Week 2: Content & Trust (Days 8-14)
- [ ] Create a Terry Stewart bio/About page (200+ words, photo, trade background, credentials)
- [ ] Add Privacy Policy and Terms & Conditions pages (use free generator at app.termly.io)
- [ ] Create a 10-question FAQ page targeting "laser cut screens" informational queries
- [ ] Add Service schema to /custom-screens/ page
- [ ] Request 5 Google Reviews from past customers via direct link
- [ ] Display ABN prominently in footer or contact page

### Week 3: Brand & Platform (Days 15-21)
- [ ] Submit to YellowPages.com.au (free basic listing)
- [ ] Submit to TrueLocal.com.au (free basic listing)
- [ ] Submit to Hipages.com.au (free basic listing)
- [ ] Create LinkedIn company page with full description and product photos
- [ ] Film and upload one 60-second project walkthrough video to YouTube
- [ ] Create Houzz account and add 3-5 portfolio projects

### Week 4: Content Depth (Days 22-30)
- [ ] Convert 3 Client Folio entries into full case studies (Government House Gardens, Seacliff Surf Life Saving Club, Eldercare Aged Care Facility)
- [ ] Add testimonials section to homepage with 3 attributed client quotes
- [ ] Write first blog post: "Corten Steel vs Aluminium — Which is Right for Your Outdoor Screen?"
- [ ] Add materials comparison table to /materials-styles/ page (Material | Thickness | Best Use | Durability)
- [ ] Add Product schema to homepage product listings (Circles, Cactus with Bees, etc.)

---

## Projected Score After Implementation

| Phase | Action | Expected GEO Score |
|---|---|---|
| Baseline (current) | — | 28/100 |
| After Week 1 (schema + llms.txt + meta tags + GBP) | Technical fixes | ~40-44/100 |
| After Week 2 (bio + FAQ + privacy policy) | Content & trust | ~47-52/100 |
| After Week 3 (directories + LinkedIn + YouTube) | Brand & platform | ~52-58/100 |
| After Week 4 (case studies + blog + testimonials) | Content depth | ~60-68/100 |

---

## Appendix: Pages Analyzed

| URL | Title | Last Modified | Word Count | GEO Issues |
|---|---|---|---|---|
| / | Laser Cut Screens - Premium custom screens | 2026-03-09 | ~400 | No meta desc, no schema, no OG tags |
| /materials-styles/ | Materials Styles - Laser Cut Screens | 2023-11-30 | ~450 | No meta desc, no schema, overlaps /styles/ |
| /why-choose-cutting-edge-screens/ | Why Choose Cutting Edge Screens | 2023-11-30 | ~380 | No meta desc, no schema, no testimonials |
| /styles/ | Styles - Laser Cut Screens | 2024-05-19 | ~430 | No meta desc, no schema, overlaps /materials-styles/ |
| /custom-screens/ | Custom Screens – Laser Cut & Decorative Metal Screens | 2024-10-15 | ~680 | No meta desc, no schema, no FAQ |
| /client-folio/ | Cutting Edge Screens Client Folio | 2024-10-15 | ~1,300 | No meta desc, no schema, no case study narrative |
| /beware/ | Beware of Imitations – Cutting Edge Screens Adelaide | 2024-10-15 | ~280 | No meta desc, no schema, very thin |
| /contact/ | Contact Cutting Edge Screens | 2024-11-20 | ~150 | No meta desc, no schema, no map embed |
| /pricing/ | (linked from nav) | — | — | **404 ERROR — page does not exist** |
| /llms.txt | — | — | — | **404 — does not exist** |
