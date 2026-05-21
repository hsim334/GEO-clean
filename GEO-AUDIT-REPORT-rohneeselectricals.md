# GEO Audit Report: Rohnees Electricals PTY LTD

**Audit Date:** 20 May 2026
**URL:** https://rohneeselectricals.com.au
**Business Type:** Local Electrical Contractor (Residential, Commercial, Industrial)
**Location:** Macquarie Fields, NSW 2564 — South West Sydney
**Pages Analysed:** 11

---

## Executive Summary

**Overall GEO Score: 23/100 (Critical)**

Rohnees Electricals is a legitimate, licensed, 15-year-old electrical contractor with a real owner (Dilip Gorad, Electrical Engineer), verified registration (ABN 53 162 220 680), trade directory presence across 8+ Australian platforms, and genuine customer reviews averaging 4.4/5 — but almost none of these assets are visible to AI systems. The site has zero schema markup, no llms.txt, no meta descriptions, two placeholder "coming soon" service pages, and content so thin and generic that AI models cannot extract a single citable passage. The gap between Rohnees' real-world credibility and its AI-visible authority is the central finding of this audit: the business is entirely invisible to ChatGPT, Perplexity, Gemini, and Google AI Overviews for any electrical service query in South West Sydney.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 18/100 | 25% | 4.50 |
| Brand Authority | 14/100 | 20% | 2.80 |
| Content E-E-A-T | 32/100 | 20% | 6.40 |
| Technical GEO | 57/100 | 15% | 8.55 |
| Schema & Structured Data | 4/100 | 10% | 0.40 |
| Platform Optimization | 8/100 | 10% | 0.80 |
| **Overall GEO Score** | | | **23/100** |

| Score | Rating |
|---|---|
| 23/100 | **Critical** — site is largely invisible to AI systems |

---

## Critical Issues (Fix Immediately)

### C1 — No llms.txt file
**Impact:** AI systems cannot self-discover what the site is, who it serves, or which pages to prioritise for citation. Every major AI crawler (GPTBot, ClaudeBot, PerplexityBot) would benefit from this signal.

**Fix:** Create `/llms.txt` at the webroot with:
```
# Rohnees Electricals PTY LTD
# Licensed electrical contractor — Sydney South West, NSW, Australia

> Rohnees Electricals PTY LTD is a licensed, family-owned electrical contractor
> serving Macquarie Fields, Minto, Campbelltown, and broader South West Sydney.
> We provide residential, commercial, and industrial electrical services including
> switchboard upgrades, safety inspections, home automation, data cabling, and
> project management. ABN 53 162 220 680. Fully insured.

## Key Pages

- [Home](https://rohneeselectricals.com.au/): Overview of all electrical services
- [Residential](https://rohneeselectricals.com.au/residential/): Home electrical services
- [Commercial](https://rohneeselectricals.com.au/commercial/): Commercial electrical fit-outs
- [Industrial](https://rohneeselectricals.com.au/industrial/): Industrial electrical contracting
- [Safety Inspection](https://rohneeselectricals.com.au/safety-inspection/): Free electrical safety inspections
- [About Us](https://rohneeselectricals.com.au/about-us/): Company background and credentials
- [Contact](https://rohneeselectricals.com.au/contact/): Book an electrician in South West Sydney
```

---

### C2 — Zero schema markup on all 11 pages
**Impact:** AI systems use LocalBusiness / ElectricalContractor schema as the primary signal to identify a local business entity. Without it, Rohnees cannot appear in AI-generated "best electrician near me" responses. Yoast SEO is installed but its schema output is not functioning — this is a configuration fault, not a missing plugin.

**Fix Step 1:** Go to WordPress Admin > SEO (Yoast) > Search Appearance > General > Knowledge Graph. Set "Site represents" to Organisation, enter business name, upload logo, add social URLs. Verify JSON-LD appears on homepage by checking View Source for `application/ld+json`.

**Fix Step 2:** Add LocalBusiness JSON-LD to the homepage `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ElectricalContractor"],
  "@id": "https://rohneeselectricals.com.au/#business",
  "name": "Rohnees Electricals PTY LTD",
  "legalName": "Rohnees Electricals PTY LTD",
  "description": "Licensed electrical contractor providing industrial, commercial, and residential electrical services in Macquarie Fields and greater Sydney, NSW.",
  "url": "https://rohneeselectricals.com.au",
  "telephone": "+61423905982",
  "email": "dilip.gorad@rohneeselectricals.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5 Ficus Place",
    "addressLocality": "Macquarie Fields",
    "addressRegion": "NSW",
    "postalCode": "2564",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.9997,
    "longitude": 150.8830
  },
  "areaServed": [
    {"@type": "City", "name": "Macquarie Fields"},
    {"@type": "City", "name": "Campbelltown"},
    {"@type": "City", "name": "Minto"},
    {"@type": "City", "name": "Ingleburn"}
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Dilip Gorad",
    "jobTitle": "Electrical Engineer"
  },
  "identifier": {
    "@type": "PropertyValue",
    "name": "ABN",
    "value": "53 162 220 680"
  },
  "sameAs": [
    "https://www.facebook.com/rohneeselectricals"
  ]
}
```

---

### C3 — Two service pages are "Coming Soon" placeholders
**Pages affected:** `/home-automation-2/`, `/project-management/`
**Impact:** These are listed core services with zero content. AI systems will never cite a "coming soon" page. Two of eleven pages waste crawl budget and signal low content quality.

**Fix:** Write minimum 400-word service descriptions for both pages immediately. Example for Home Automation:
> "Home automation electrical services from Rohnees Electricals include smart lighting control, automated switchboard installation, and integration with Google Home, Amazon Alexa, and Clipsal C-Bus. Based in Macquarie Fields NSW, our licensed electricians install and commission home automation systems for new builds and retrofit projects across South West Sydney. A typical smart lighting installation for a 4-bedroom home takes 1–2 days and includes a 12-month workmanship warranty."

---

### C4 — No meta descriptions on any of 11 pages
**Impact:** AI systems and search engines have no fallback descriptive signal. Every page appears identical to a crawler with no summary.

**Fix:** Add 140–160 character meta descriptions to all pages via Yoast SEO. Use answer-first format:
- Homepage: "Licensed electrician in Macquarie Fields & South West Sydney — residential, commercial, and industrial electrical work. Free quotes. Call 0423 905 982."
- Residential: "Residential electrical services in Macquarie Fields NSW: switchboard upgrades, power points, smoke alarms, lighting. Free electrical safety inspection. ABN 53 162 220 680."
- Safety Inspection: "Free electrical safety inspection for Macquarie Fields homes and businesses — checks lights, power points, smoke alarms, switchboard wiring, and more. Book online."

---

### C5 — "Employee Name" placeholder text is live in production
**Page:** `/about-us/`
**Impact:** The About page team section shows four entries labelled "Employee Name" with no real names, photos, or qualifications. This is the most damaging trust signal on the site — it tells every visitor and AI crawler that the site was never finished.

**Fix:** Replace all four instances with real team member names and one-line descriptions (e.g., "Dilip Gorad — Electrical Engineer, 15+ years experience, NSW Licensed Contractor"). If the owner prefers not to list all staff, remove the section entirely.

---

### C6 — NSW Electrical Contractor Licence number not displayed anywhere
**Impact:** In NSW, displaying the electrical contractor licence number is a regulatory expectation and primary trust credential. Its absence is a major red flag for AI systems evaluating authoritativeness, and potentially a compliance issue.

**Fix:** Add the licence number to the footer alongside ABN/ACN. Format: "NSW Electrical Contractor Licence No. [XXXXXX]". Also add it to the About page credentials section.

---

### C7 — No Google Business Profile or confirmed review presence on site
**Impact:** AI Overviews for local queries draw directly from Google Business Profile review volume and ratings. With only ~16 confirmed reviews across all platforms over 13 years of operation, AI systems have minimal social proof to cite.

**Fix:** Audit or create Google Business Profile immediately. Once active, implement a systematic review request process. Target 50+ Google reviews within 90 days by reaching out to the 28 confirmed ServiceSeeking hires and past clients.

---

## High Priority Issues

### H1 — Data Communication page is grammatically unreadable
The only paragraph on `/data-communication/` contains broken sentence structure that cannot be parsed by AI or human readers. Rewrite entirely with technical specifics (Cat6, fibre optic, AS/CA S009).

### H2 — No AI-citable content structure on any page
Zero pages contain: FAQ sections, question-based headings (What/How/Why), definition sentences ("X is..."), or self-contained answer blocks. Content is written as marketing copy, not answer content.

**Fix:** Add a minimum 5-question FAQ to `/safety-inspection/` as the first implementation. Example questions:
- "What does a free electrical safety inspection include?"
- "How long does an electrical safety inspection take?"
- "Is the safety inspection really free with no obligation?"
- "How often should I get an electrical safety inspection?"
- "What happens if a fault is found during the inspection?"

### H3 — No Open Graph tags on any page
Yoast SEO should output OG tags automatically but is not doing so. Fix in Yoast settings (Social tab). Add a default OG image (minimum 1200×630px). Absence means no preview cards when pages are shared or cited.

### H4 — TTFB consistently above 1 second (1.1–1.2s measured)
No page caching is active despite the site running LiteSpeed. Install and configure the LiteSpeed Cache WordPress plugin (free). Target TTFB < 300ms.

### H5 — No platform presence on AI training sources
The business is absent from YouTube, Reddit, and Wikipedia — the three platforms with the highest measured correlation to AI citation. Facebook (285 likes) and trade directories exist but are weak signals in AI retrieval.

### H6 — Gallery images have no captions or descriptions
35+ project photos exist but all are unlabelled. AI cannot extract any meaning from images. Add one-line captions: "[Work type] — [Suburb], [Year]" to every gallery image.

### H7 — The Business xCellenceAwards certificate is image-only
This is a genuine differentiator that is invisible to AI crawlers because it exists only as a photo. Add text describing the award (name, year, category, issuing body) to the About page.

---

## Medium Priority Issues

### M1 — Homepage H1 and title tag are not service/location focused
- Current title: "Home - Rohnees Electricals PTY LTD"
- Current H1: "Our Biggest Asset Is Our Customers Trust!" (homepage) / "OUR RANGE OF SERVICES"
- Recommended title: "Electrician Macquarie Fields & South West Sydney | Rohnees Electricals"
- Recommended H1: "Licensed Electrician — Macquarie Fields & South West Sydney"

### M2 — Service pages average under 200 words each
Target 500–800 words per service page with technical specifics, standards references, and local suburb mentions.

### M3 — No LinkedIn company page
Important for commercial/industrial B2B authority signals. Create a LinkedIn company page and cross-reference from the website.

### M4 — Hipages listing missing
Australia's largest tradie platform; AI systems are increasingly citing Hipages for local service queries. Create a listing and request reviews from existing clients.

### M5 — `user-scalable=no` in viewport meta
Accessibility violation. Change `width=device-width,initial-scale=1,user-scalable=no` to `width=device-width, initial-scale=1`.

### M6 — No security headers (HSTS, X-Frame-Options, X-Content-Type-Options)
Add via `.htaccess`:
```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

### M7 — No privacy policy page
Required for any site collecting personal data via contact forms. Add a minimum privacy policy page linked from the footer.

### M8 — No pricing transparency
"Free quote" is stated but no pricing framework is given. Adding a "How our pricing works" section with call-out fee range information reduces friction for residential customers.

### M9 — Sitemap conflict: two plugins (Yoast + Google XML Sitemaps v4.1.22)
Deactivate the legacy Google XML Sitemaps plugin and use Yoast SEO's built-in sitemap exclusively.

### M10 — `/home-automation-2/` URL slug
The `-2` suffix is a WordPress duplicate-detection artefact. Redirect to `/home-automation/` with a 301.

---

## Low Priority Issues

### L1 — No image optimisation (0 WebP/AVIF files)
All images are JPEG/PNG. Install ShortPixel or Imagify to convert to WebP. Add explicit `width` and `height` attributes to all `<img>` tags to prevent CLS.

### L2 — Testimonial contains uncorrected typo
"electical" in Paul P's testimonial. Minor but signals no editorial quality control.

### L3 — About page Vision/Mission text is generic boilerplate
"To be the most valuable and trustworthy organisation through world class performance throughout Australia and overseas" — replace with a specific, verifiable statement.

### L4 — 9 render-blocking scripts in `<head>` without async/defer
Affects Time to Interactive. Enable JS deferral via LiteSpeed Cache plugin.

### L5 — No IndexNow implementation
Install the free IndexNow WordPress plugin to automatically ping Bing (and by extension ChatGPT) when content is updated.

### L6 — Sitemap `lastmod` dates stale (2020)
Most pages show last-modified date of 2020 in the sitemap. Refreshing page content will update these automatically.

---

## Category Deep Dives

### AI Citability (18/100)
**The site has genuine business assets but zero AI-extractable evidence of them.** No page opens any section with a direct answer to a user question. The Industrial page is the site's strongest content (names PLC, VSD, BMS, hydraulic/pneumatic controllers) but even this reads as a feature list rather than an answer block. Two pages are "coming soon" placeholders; the Data Communication page has a single grammatically broken paragraph. The About page lists five value headings (Integrity, Responsibility, etc.) with zero body text beneath them. The only quantified claim across all 11 pages is "15+ years."

**Best current content block (Score: 27/100):** Safety Inspection "Inspection Inclusions" list — the only structured list on the site that approximates a direct answer to a user question.

**Key rewrites needed:**
- Homepage: replace tagline H1 with a 150-word entity block defining who Rohnees is, where they operate, and what they specialise in
- Data Communication: complete rewrite of broken paragraph with technical specifics
- All pages: add question-based headings and answer-first paragraph structure
- Safety Inspection: add 5-question FAQ (highest ROI action for citability)

---

### Brand Authority (14/100)
**Strong trade directory presence; invisible on AI-training platforms.**

| Platform | Status | Notes |
|---|---|---|
| Google Business Profile | Unconfirmed | Critical gap — must verify/create |
| ServiceSeeking | Active | 4.5★ / 15 reviews / 28 hires / Top 10 badges |
| Facebook | Active | ~285 likes |
| Yellow Pages AU | Listed | Unverified status |
| Localsearch | Listed | Unclaimed — 0 reviews |
| Oneflare | Listed | Unclaimed — 0 reviews |
| YouTube | Absent | Zero channel, zero mentions |
| Reddit | Absent | Zero threads anywhere |
| Wikipedia/Wikidata | Absent | No entity record |
| LinkedIn (company) | Absent | Director personal profile only |
| Hipages | Absent | Australia's largest tradie platform |
| ProductReview.com.au | Absent | |
| Master Electricians AU | Unconfirmed | |

**Review aggregate:** ~16 confirmed reviews across all platforms, blended 4.4/5. For a 13-year business with 28+ confirmed hires on ServiceSeeking alone, this is very low volume.

---

### Content E-E-A-T (32/100)

| Pillar | Score | Key Finding |
|---|---|---|
| Experience | 28/100 | Gallery exists (35+ photos) but unlabelled; 2 vague testimonials; no case studies |
| Expertise | 38/100 | Owner credentials real but undocumented; no licence number; placeholder team section |
| Authoritativeness | 22/100 | One award (text-invisible); no blog; no external citations; no industry memberships |
| Trustworthiness | 42/100 | HTTPS ✓, ABN/ACN ✓, consistent NAP ✓; no privacy policy; placeholder text live |

**Total site word count: ~1,500 words across all service pages.** A well-optimised local trades site should target 5,000–8,000 words across service pages.

---

### Technical GEO (57/100)
**Strongest category — fundamentals are sound.**

| Check | Status |
|---|---|
| AI crawlers allowed (all major bots) | ✅ Pass |
| Server-side rendered (WordPress) | ✅ Pass |
| HTTPS enforced | ✅ Pass |
| Sitemap present | ✅ Pass |
| Canonical tags | ✅ Pass |
| HTTP→HTTPS redirect | ✅ Pass |
| llms.txt | ❌ 404 |
| Meta descriptions | ❌ Missing all pages |
| Open Graph tags | ❌ Missing all pages |
| LocalBusiness schema | ❌ Missing |
| Page caching | ❌ TTFB 1.1–1.2s |
| Image optimisation | ❌ 0 WebP images |
| Security headers | ❌ Missing HSTS, X-Frame, etc. |
| `user-scalable=no` | ❌ Accessibility violation |

---

### Schema & Structured Data (4/100)
**Zero structured data on all 11 pages.** Yoast SEO is installed but not outputting schema — configuration fault. No JSON-LD, no Microdata, no Open Graph anywhere. The 4-point score reflects the absence of active schema errors (a blank slate is marginally better than conflicting/invalid markup).

**Priority schema to implement:**
1. `LocalBusiness` + `ElectricalContractor` (homepage) — highest ROI
2. `Organization` with `sameAs` links (homepage)
3. `Service` schema on each of the 8 service pages
4. `FAQPage` once FAQ content is written
5. `AggregateRating` once Google reviews are being surfaced

---

### Platform Optimization (8/100)
**Absent from every platform AI models actively train on and cite.** YouTube (highest correlation to AI citation at ~0.737) has zero presence. Reddit has zero mentions. Wikipedia/Wikidata has no entity record. LinkedIn company page does not exist. Trade directory presence (ServiceSeeking, Yellow Pages, Localsearch) scores well within that sub-category but these platforms carry low weight in AI citation decisions.

---

## Quick Wins (Implement This Week)

1. **Create `/llms.txt`** — 30 minutes, zero cost, immediate AI discoverability improvement
2. **Fix Yoast SEO schema output** — diagnose why it's disabled, restore to generate Organisation + WebPage schema
3. **Add LocalBusiness JSON-LD to homepage** — paste the JSON-LD block from Critical Issue C2
4. **Remove "Employee Name" placeholders from About page** — replace or remove the section
5. **Add meta descriptions to all pages** — one afternoon of copy, implemented via Yoast
6. **Add NSW Electrical Contractor Licence number to footer** — single line edit, immediate trust signal
7. **Install LiteSpeed Cache WordPress plugin** — free, fixes TTFB from 1.1s to ~0.2s
8. **Caption every gallery image** — "Work type — Suburb, Year" format

---

## 30-Day Action Plan

### Week 1: Foundation Fixes (Technical & Trust)
- [ ] Create `/llms.txt` at webroot with business summary and page index
- [ ] Fix Yoast SEO schema configuration (diagnose why output is suppressed)
- [ ] Add LocalBusiness + ElectricalContractor JSON-LD to homepage
- [ ] Add Organisation JSON-LD to homepage
- [ ] Install LiteSpeed Cache plugin and configure page caching
- [ ] Remove "Employee Name" placeholder text from About page
- [ ] Add NSW Electrical Contractor Licence number to footer
- [ ] Add privacy policy page
- [ ] Fix `user-scalable=no` in viewport meta

### Week 2: Content & Citability
- [ ] Write real content for `/home-automation-2/` (rename slug to `/home-automation/`)
- [ ] Write real content for `/project-management/`
- [ ] Rewrite `/data-communication/` paragraph (correct grammar, add technical specifics)
- [ ] Add meta descriptions to all 11 pages
- [ ] Add 5-question FAQ to `/safety-inspection/` with FAQPage schema
- [ ] Rewrite homepage H1 and update title tag to include location keyword
- [ ] Caption all 35+ gallery images with work type, suburb, year
- [ ] Describe Business xCellenceAwards in text on About page

### Week 3: Schema Rollout
- [ ] Add Open Graph image to all pages via Yoast Social settings
- [ ] Add Service schema to each of the 8 service pages
- [ ] Validate all schema using Google Rich Results Test
- [ ] Add security headers (.htaccess: HSTS, X-Frame, X-Content-Type, Referrer-Policy)
- [ ] Deactivate Google XML Sitemaps plugin, use Yoast sitemap only
- [ ] Install IndexNow plugin for faster Bing/ChatGPT indexing

### Week 4: Brand Authority & Platforms
- [ ] Verify or create Google Business Profile, complete all fields
- [ ] Request reviews from the 28 confirmed ServiceSeeking customers
- [ ] Claim Localsearch profile and add business details
- [ ] Claim Oneflare profile and add business details
- [ ] Create Hipages listing
- [ ] Create LinkedIn company page
- [ ] Install ShortPixel/Imagify, convert all images to WebP
- [ ] Add `width` and `height` to all `<img>` tags
- [ ] Add preconnect hints for external font/script origins

---

## 60–90 Day Roadmap

**Month 2: Content Authority**
- Publish 3 project case studies (minimum: client type, suburb, scope, outcome, 1 photo)
- Publish 3 educational guides targeting local informational queries:
  - "When does a switchboard need upgrading? A guide for NSW homeowners"
  - "What is a Certificate of Compliance for Electrical Work (CCEW) and do you need one?"
  - "Electrical safety for commercial tenants in Sydney: what to check before signing a lease"
- Add real team member bios to About page with qualifications
- Expand Industrial and Residential pages to 600+ words with technical specifics and NSW standards references (AS/NZS 3000:2018, AS/CA S009)

**Month 3: Platform & Association**
- Apply for Master Electricians Australia membership (or NECA) — display member badge
- Build 50 Google Business Profile reviews — implement post-job review request SMS/email workflow
- Set up ProductReview.com.au profile
- Publish first YouTube video (walkthrough of a safety inspection or switchboard upgrade — no production required, phone video is adequate)
- Embed Google Maps and Google review widget on Contact page

---

## Appendix: Pages Analysed

| URL | Title | Status | Key Issues |
|---|---|---|---|
| https://rohneeselectricals.com.au/ | Home - Rohnees Electricals PTY LTD | ✅ 200 | No meta desc, no schema, tagline H1, no OG tags |
| https://rohneeselectricals.com.au/about-us/ | About Us | ✅ 200 | Placeholder team text, no meta desc, no schema |
| https://rohneeselectricals.com.au/services/ | Services | ✅ 200 | No meta desc, no schema, thin content |
| https://rohneeselectricals.com.au/industrial/ | Industrial | ✅ 200 | No meta desc, no schema, moderate content |
| https://rohneeselectricals.com.au/commercial/ | Commercial | ✅ 200 | No meta desc, no schema, thin content |
| https://rohneeselectricals.com.au/residential/ | RESIDENTIAL | ✅ 200 | No meta desc, no schema, thin content |
| https://rohneeselectricals.com.au/safety-inspection/ | Safety Inspection | ✅ 200 | Best content page; no meta desc, no FAQ schema |
| https://rohneeselectricals.com.au/home-automation-2/ | Home Automation | ✅ 200 | "Coming Soon" — zero content |
| https://rohneeselectricals.com.au/project-management/ | Project Management | ✅ 200 | "Coming Soon" — zero content |
| https://rohneeselectricals.com.au/data-communication/ | Data Communication | ✅ 200 | Grammatically broken paragraph, no meta desc |
| https://rohneeselectricals.com.au/contact/ | Contact Us | ✅ 200 | No meta desc, no schema, no hours |
| https://rohneeselectricals.com.au/gallery/ | Gallery | ✅ 200 | 35+ images, none captioned |

**Technical environment:** WordPress + Yoast SEO (schema output suppressed) + LiteSpeed server on Hostinger + Google XML Sitemaps plugin (legacy, conflicts with Yoast). HTTPS enforced. All AI crawlers permitted.

---

*Audit conducted using GEO Audit methodology v1.0. Scores reflect AI citability, brand authority, E-E-A-T quality, technical infrastructure, schema markup, and platform presence across all major AI systems (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews).*
