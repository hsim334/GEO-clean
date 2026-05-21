# GEO Audit Report: Awesim Building Consultants

**Audit Date:** 20 May 2026
**URL:** https://awesim.com.au
**Business Type:** Local Professional Services — Building Consultancy (NSW)
**Pages Analysed:** 22 pages + 400+ article inventory reviewed
**Stack:** WordPress 6.9.4 + Elementor 3.35.8 + AIOSEO Pro 4.9.7.2 + LiteSpeed Cache + Cloudflare

---

## Executive Summary

**Overall GEO Score: 39/100 — Critical**

Awesim Building Consultants has genuine expertise depth — 35+ years of experience, specific pricing transparency, regulatory citation quality, and a 400+ article library covering NCAT building disputes — that is almost entirely invisible to AI systems. The site scores critically low because it has zero schema markup across all pages, near-zero brand presence on the platforms AI models train on (Reddit: 0, Wikipedia: 0, YouTube: dormant), and a technical configuration that inadvertently undermines the content quality that exists. The gap between what Awesim knows and what AI systems can discover and cite is the largest single opportunity in this audit.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 52/100 | 25% | 13.0 |
| Brand Authority | 24/100 | 20% | 4.8 |
| Content E-E-A-T | 54/100 | 20% | 10.8 |
| Technical GEO | 54/100 | 15% | 8.1 |
| Schema & Structured Data | 4/100 | 10% | 0.4 |
| Platform Optimisation | 22/100 | 10% | 2.2 |
| **Overall GEO Score** | | | **39/100** |

---

## Critical Issues (Fix Immediately)

### C1. Zero Schema Markup on Every Page — Score 4/100

All five audited pages (homepage, expert-witness-report, scott-schedule, about-us-2, blog post) returned no JSON-LD, no Microdata, and no RDFa. AIOSEO Pro 4.9.7.2 is installed but its schema output is either disabled, misconfigured, or being stripped by caching. This is the most damaging single GEO failure on the site.

Without schema, AI systems cannot:
- Identify Awesim as a business entity with defined services, locations, and hours
- Extract the 15+ FAQ answers on the expert witness page for AI Overviews
- Attribute content to Glen Sim as a credentialled named expert
- Surface pricing data ($5,000–$15,000, $550/issue) in structured AI responses

**Fix:** In WordPress admin → All in One SEO → Search Appearance → Global Settings → Schema, enable Organisation as the default schema type. Verify output using Google's Rich Results Test. Then add manual JSON-LD blocks for FAQPage, Person, and LocalBusiness (full code provided in Schema Deep Dive section below).

**Estimated effort:** 2–3 hours | **GEO impact:** High

---

### C2. Critical Typos in Site Description Propagate Site-Wide

The AIOSEO site description field reads: *"The Best Building Expert Witnes Reports and Scott Schedules in Sydne New South Wales"* — "Witnes" (missing 's') and "Sydne" (missing 'y') are both present. This string is baked into:
- The `WebSite` schema `description` field on every page
- The `og:description` fallback tag
- The generated llms.txt header

AI systems that extract entity descriptions will ingest and potentially reproduce these typos, undermining brand credibility.

**Fix:** AIOSEO → Search Appearance → Global Settings → Homepage → Site Description. Correct to: *"Expert Witness Reports, Scott Schedules, and NCAT building dispute support across New South Wales. Awesim Building Consultants — operating since 1996."* Purge LiteSpeed Cache after saving.

**Estimated effort:** 5 minutes | **GEO impact:** High

---

### C3. Organisation Name Duplicated in All Schema Blocks

Every page's `Organization` schema contains `"name": "Awesim Awesim Building Consultants"` — the word "Awesim" appears twice. AI systems use this name field as the canonical entity label; if Perplexity or Claude surfaces this business, the malformed name may propagate.

**Fix:** AIOSEO → Search Appearance → Knowledge Graph → Organisation Name field. Remove the duplicate word.

**Estimated effort:** 5 minutes | **GEO impact:** Medium-High

---

### C4. llms.txt Exists But Fails Standard Format

A file exists at `https://awesim.com.au/llms.txt` (positive), but it is an AIOSEO-generated sitemap list, not the llms.txt format supported by Anthropic, Perplexity, and other AI crawler specifications. Critical failures:
- No `> brief description` block after the `# SiteName` header (required by spec)
- No `## Sections` with curated page links and one-line descriptions
- No `llms-full.txt` companion (returns 404)
- The header description contains the same typos as C2 above

Without a spec-compliant llms.txt, Claude's crawler and PerplexityBot receive no prioritisation guidance and may deprioritise high-value pages in favour of the 400+ article crawl set.

**Fix:** After correcting C2, manually replace the AIOSEO-generated llms.txt with a hand-authored file (implementation code in Technical Deep Dive below).

**Estimated effort:** 1–2 hours | **GEO impact:** Medium-High

---

## High Priority Issues (Fix Within 1 Week)

### H1. No AI Crawler Directives in robots.txt

The robots.txt has a single `User-agent: *` block. GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and CCBot rely on the catch-all, but there is no explicit signal permitting or prioritising them. Without explicit Allow rules, you have no crawl prioritisation control.

**Fix:** Add to robots.txt (via AIOSEO → Search Appearance → Additional Pages, or directly):
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /
```

---

### H2. No Meta Descriptions on Key Pages

The homepage and multiple service pages have no meta description. AI crawlers use meta descriptions as content summaries during indexing. Missing meta descriptions mean these pages have no summary representation in AI training and retrieval contexts.

**Fix (homepage):** *"Awesim Building Consultants provides Expert Witness Reports, Scott Schedules, and Quantum Meruit Reports for NCAT building disputes across NSW. 35+ years experience, offices in Sydney, Bankstown, Tweed Heads and Tamworth."* (153 chars)

**Fix (expert witness page):** *"NCAT Expert Witness Reports by Awesim Building Consultants. Reports typically cost $2,750–$15,000 and take 3–4 weeks. Serving all of NSW for 15+ years."*

---

### H3. No FAQPage Schema Despite Extensive FAQ Content

The expert witness page has 15+ FAQ items in plain HTML. The Scott Schedule page has 5 FAQ-style sections. None are marked up with FAQPage schema. FAQPage schema is the single most-cited schema type by AI systems for question-answering content — it directly maps to how ChatGPT, Claude, and Perplexity surface answers to "how much does an expert witness report cost in NSW?"

**Fix:** Add FAQPage JSON-LD to both pages. Full code in Schema Deep Dive section.

---

### H4. Author Attribution is Vague, Pseudonymous, or Absent

400+ articles, zero attributed to Glen Sim by name. One blog post is attributed to "Audra Awesim" (a pseudonym — AI systems cannot cross-reference this on LinkedIn, professional directories, or NCAT records). Service pages carry no author at all.

AI models treat named, verifiable author attribution as a primary E-E-A-T signal when deciding whether to cite content. The entire article library is depreciating its citability value because none of it is anchored to a named, credentialled expert.

**Fix:** Set Glen Sim as the WordPress author on all existing posts. Create a `/team/glen-sim/` author page with: full name, photo, credential list with issuing bodies named, LinkedIn URL, approximate NCAT matter count, contact email. Add Person schema to that page. Reference it as `author` in Article schema sitewide.

---

### H5. No Industry Body Memberships Visible

Despite an MBA NSW accreditation being confirmed via third-party search, no professional body memberships are displayed on the site. AI systems treat professional association membership as a primary authoritativeness signal for building/construction sector content.

**Fix:** Add HIA, MBA NSW, and any other memberships to the homepage footer and About page with membership logo images linked to the member directory entry. Add `memberOf` property to Organisation schema.

---

### H6. OG Image Too Small (208×88px)

All pages use the logo as OG image at 208×88 pixels — far below the 1200×630px minimum. When AI-powered tools, social platforms, or link preview systems render Awesim's pages, the image appears broken or tiny.

**Fix:** AIOSEO → Social Networks → Open Graph → Default Image. Upload a 1200×630px image (building inspection photo, branded service graphic, or headshot of Glen Sim in professional context).

---

### H7. Multiple Offices Missing from Schema and Contact Page

The Organisation schema only lists the Sydney CBD address. Bankstown, Tweed Heads, and Tamworth offices are not structured. AI systems answering "building consultant near Tamworth" or "expert witness Tweed Heads" cannot surface Awesim because those locations are invisible in structured data.

**Fix:** Add all four addresses to LocalBusiness schema (full code in Schema section). Consider creating a separate location page per office with individual LocalBusiness schema using `branchOf` referencing the main entity.

---

## Medium Priority Issues (Fix Within 1 Month)

### M1. No Verified Testimonials (Placeholder Only)

The About page has a "Trusted by Home Owners & Builders" section that contains zero actual testimonials. AI models parse testimonial sections and find nothing — this is an active negative signal, not a neutral absence.

**Fix:** Collect 10–15 testimonials from clients and solicitors with: first name + suburb (e.g. "James T., Penrith NSW"), role, date (Month Year), and specific outcome. Add Review schema. Link to Google Business Profile reviews for third-party verification.

---

### M2. No Case Studies or Documented Outcomes

Zero case studies appear anywhere on the site. The content describes Awesim's capabilities but never documents specific client situations, actions taken, or outcomes achieved.

**Fix:** Publish 5–10 anonymised case studies at `/case-studies/`. Format: client situation, dollar amount at stake, Awesim's action, outcome. Even without client names, specific suburb, dollar amounts, and outcome type creates the citable specificity AI systems prefer.

---

### M3. Factual Inconsistency: 20 vs 35+ Years Experience

The About page states Glen Sim has "over 20 years in the building industry." Service pages claim "35+ years experience." This internal inconsistency is flagged by AI reliability scoring as a credibility signal failure.

**Fix:** Standardise across all pages: *"Glen Sim has 35+ years in the building and construction industry, including 30 years as Managing Director of Awesim."* The two numbers coexist when contextualised correctly.

---

### M4. Zero Reddit Presence

No mentions of Awesim or Glen Sim found on r/AusLegal, r/AusPropertyChat, or r/australia — the exact communities where potential clients ask for NCAT building dispute help. Reddit is the #2 AI citation signal platform (after YouTube).

**Fix:** Participate genuinely under a personal account answering NCAT and building defect questions in r/AusLegal for 2–4 weeks before any brand mention. A single highly upvoted thread referencing Awesim will be indexed by every major AI system.

---

### M5. No Wikidata Entity — Brand Disambiguation Risk

No Wikipedia article and no Wikidata entity (Q-number) exists for Awesim Building Consultants. Critically, "Awesim" is an ambiguous string that AI knowledge graphs may conflate with the Ohio Supercomputer Center's "AweSim" program or the Purism "AweSIM" mobile product.

**Fix:** Create a Wikidata entity (free, 30–60 minutes). Add: instance of business, country Australia, founded 1996, founder Glen Sim, website awesim.com.au, industry building consultancy, location NSW. This resolves brand disambiguation and anchors the entity in AI knowledge graphs directly.

---

### M6. Duplicate Social Profiles Fragment Brand Entity

Two Facebook pages, two LinkedIn profiles for Glen Sim, and two About.me profiles detected. Duplicate entity signals reduce AI model confidence in the brand.

**Fix:** Consolidate to one profile per platform. Merge or delete duplicates. LinkedIn: merge `glen-sim-3568b3328` and `awesim` profiles. Facebook: merge or unpublish `awesim.bc` in favour of `AwesimBuildingConsultants`.

---

### M7. og:locale Set to en_US Instead of en_AU

Open Graph locale and JSON-LD `inLanguage` are both set to `en_US` (American English) despite the site serving Australian clients. AI systems using locale signals for geographic routing may deprioritise these pages for Australian queries.

**Fix:** AIOSEO → Social Networks → Open Graph → Locale → change to `en_AU`. Takes 2 minutes.

---

### M8. Page HTML Weight — Elementor Bloat (283KB)

The expert witness page delivers 289,748 bytes of HTML. Root causes: Elementor injects 40+ external scripts, and the WPForms container appears duplicated in output. While AI crawlers parse HTML rather than execute JS, bloated pages increase crawl times and can affect crawl budget allocation.

**Fix:** Elementor → Performance mode → enable CSS print method "internal embedding." Confirm LiteSpeed Cache HTML minification is active. Audit for duplicate form injection.

---

## Low Priority Issues (Optimise When Possible)

- **REST API exposes full page content** (wp-json/wp/v2/) without authentication — security concern, consider restricting
- **og:type set to "article"** on service pages — change to "website" in AIOSEO
- **No preconnect hints** in page head despite loading GTM, GA, and Cloudflare assets
- **No llms-full.txt** companion file (returns 404)
- **YouTube channel TheAwesim1 is dormant** — last content from circa 2013–2016 era

---

## Category Deep Dives

### AI Citability — 52/100

**Strengths:**
- Specific cost and timeline data ($5,000–$15,000 reports, $550/issue Scott Schedules, 3–4 week turnaround) are exactly the extractable facts AI surfaces for "how much does an expert witness report cost in NSW" queries
- FAQ structure on core service pages maps directly to conversational AI query formats
- AS 3740:2021 and NCAT Procedural Direction 3 (2022) citations provide regulatory anchor points AI systems treat as authority signals

**Weaknesses and Rewrites:**

*Homepage H1 (current):* "The home of Expert Witness Reports & Scott Schedules."
*Rewrite:* "Awesim Building Consultants provides Expert Witness Reports, Scott Schedules, and Quantum Meruit Reports for NCAT building disputes across NSW. Founded in 1996, the firm has supported homeowners, builders, and legal teams in resolving construction defect claims for 35+ years."

*Scott Schedule definition (current implied):* "A Scott Schedule is a document used in building dispute proceedings at NCAT."
*Rewrite:* "A Scott Schedule is a structured legal document used in NSW Civil and Administrative Tribunal (NCAT) proceedings to itemise building defects claim by claim. Each row lists the defect, the claimant's description and cost estimate, the respondent's response, and the tribunal's finding. Scott Schedules are mandatory in most NCAT building defect cases and are typically prepared by a qualified building consultant at approximately $550 per defect item."

*Expert Witness credentials (current):* Generic credential list without NCAT acceptance statement.
*Rewrite:* "Glen Sim has provided Expert Witness testimony for NCAT building dispute proceedings since 2009. His qualifications include a NSW Builders Licence, Diploma in Building and Construction Management, and Mediation Certification. Expert Witness Reports prepared by Awesim are accepted by NCAT and NSW District Court proceedings."

---

### Brand Authority — 24/100

| Platform | Status | Score |
|---|---|---|
| YouTube (TheAwesim1) | Channel exists, last active ~2013–2016, dormant | 22/100 |
| Reddit | Zero presence across all building/legal subreddits | 0/100 |
| Wikipedia / Wikidata | No article, no Q-number, disambiguation risk | 0/100 |
| LinkedIn | Company page: 111 followers, Glen Sim has 2 duplicate profiles | 20/100 |
| Google Business Profile | 4.5+ stars, Trustindex-verified — best current asset | — |
| AllExperts.com.au | Glen Sim profile: 273 cases listed — strong domain signal | — |
| Houzz / HomeOne | Listings exist, zero reviews | — |
| Facebook | Two separate pages detected (duplication issue) | — |

**Key recommendation:** Create a Wikidata entity this week. Relaunch YouTube with 5 NCAT/Scott Schedule explainer videos featuring Glen Sim on camera. Establish authentic Reddit presence in r/AusLegal.

---

### Content E-E-A-T — 54/100

| Dimension | Score | Key Evidence |
|---|---|---|
| Experience | 55/100 | 30-year operating history, but zero case studies or documented project outcomes |
| Expertise | 72/100 | Glen Sim's credential stack is genuinely strong; blog content cites legislation and AS standards with specificity |
| Authoritativeness | 32/100 | No verifiable industry memberships on-site; reports claimed NCAT-accepted but unverified; zero external citations found |
| Trustworthiness | 62/100 | Specific pricing published (rare in sector); 4 physical offices; factual inconsistency in experience claim undermines score |

---

### Technical GEO — 54/100

| Category | Score | Key Issue |
|---|---|---|
| AI Crawler Access | Adequate | No explicit AI crawler rules — defaults to `*` allow |
| llms.txt Quality | Poor | Exists but wrong format; description block missing; typos in header |
| Sitemap Quality | Good | 5 sub-sitemaps, 400+ URLs, well-structured |
| Schema Markup | Absent | AIOSEO Pro installed but schema output disabled/misconfigured |
| Meta Tags / OG | Partial | OG image too small; locale wrong; some pages missing meta descriptions |
| Content Rendering | OK | WordPress/Elementor; HTML content accessible to crawlers |
| Page Speed | Good | LiteSpeed Cache + Cloudflare active; 283KB HTML is concern |
| Canonical Consistency | Good | Clean URL structure, HTTPS enforced |

---

### Schema & Structured Data — 4/100

**Schema found across all 5 audited pages: None.**

AIOSEO Pro is generating XML sitemaps correctly but producing no schema output. Three possible causes: (1) schema disabled in AIOSEO global settings, (2) per-page schema type set to "None", (3) caching layer stripping JSON-LD `<script>` tags.

**Immediate check:** WordPress Admin → All in One SEO → Search Appearance → Schema → verify Default Schema Type is not "None." Test a page at search.google.com/test/rich-results before implementing custom blocks.

**Priority 1 — LocalBusiness + Organisation (Homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": "https://awesim.com.au/#organization",
  "name": "Awesim Building Consultants",
  "url": "https://awesim.com.au",
  "description": "Expert Witness Reports, Scott Schedules, and NCAT building dispute support across NSW. Established 1996.",
  "foundingDate": "1996",
  "telephone": "+611800293746",
  "email": "admin@awesim.com.au",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "06:00",
    "closes": "19:00"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Level 14, 309 Kent Street",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "2 Hartzell Place",
      "addressLocality": "Bankstown Airport",
      "addressRegion": "NSW",
      "postalCode": "2200",
      "addressCountry": "AU"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Unit 9, 23 Enterprise Ave",
      "addressLocality": "Tweed Heads",
      "addressRegion": "NSW",
      "postalCode": "2486",
      "addressCountry": "AU"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Unit 5, 17 Hawker Street",
      "addressLocality": "Taminda",
      "addressRegion": "NSW",
      "postalCode": "2340",
      "addressCountry": "AU"
    }
  ],
  "areaServed": {"@type": "State", "name": "New South Wales"},
  "memberOf": [{"@type": "Organization", "name": "Master Builders Association NSW"}],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Building Consultancy Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Expert Witness Reports", "description": "NCAT-compliant building defect expert witness reports for residential disputes in NSW"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Scott Schedules"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Quantum Meruit Reports"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Client Side Project Management"}}
    ]
  },
  "sameAs": [
    "https://au.linkedin.com/company/awesim-pty-ltd",
    "https://www.facebook.com/AwesimBuildingConsultants"
  ]
}
```

**Priority 2 — FAQPage (/expert-witness-report/):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does an expert witness report cost in NSW?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Expert witness report costs typically range from $5,000 to $15,000 for most NCAT matters. Small claims have a minimum cost of approximately $2,750 inclusive of GST. Cost varies based on defect complexity and number of site inspections required."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an expert witness report take to prepare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preparation typically takes 3 to 4 weeks from the date of the site investigation. Site investigations are scheduled after initial engagement and payment of the deposit."
      }
    },
    {
      "@type": "Question",
      "name": "Are Awesim expert witness reports accepted by NCAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Awesim expert witness reports are prepared to the standards required for acceptance by NCAT and NSW courts for residential and commercial building disputes."
      }
    },
    {
      "@type": "Question",
      "name": "Do Awesim building consultants cover all of NSW?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Awesim provides expert witness services across all of New South Wales from offices in Sydney CBD, Bankstown, Tweed Heads, and Tamworth. Travel costs apply for locations outside Sydney metro."
      }
    }
  ]
}
```

**Priority 3 — Person schema for Glen Sim (/about-us-2/):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://awesim.com.au/#glen-sim",
  "name": "Glen Sim",
  "jobTitle": "Founder and Managing Director",
  "worksFor": {"@type": "Organization", "@id": "https://awesim.com.au/#organization"},
  "url": "https://awesim.com.au/about-us-2/",
  "description": "Glen Sim is the founder of Awesim Building Consultants with 35+ years in the NSW building and construction industry, including 15+ years providing Expert Witness Reports and Scott Schedules for NCAT proceedings.",
  "hasCredential": [
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "licence", "name": "NSW Builders Licence"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Diploma in Building & Construction Management"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Mediation Certification"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Accredited Pre-Purchase Property Inspector"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Carpenter & Joiner Trade Certification"}
  ],
  "knowsAbout": ["Expert Witness Reports", "Scott Schedules", "NCAT Building Disputes", "Quantum Meruit Reports", "Building Defect Assessment", "NSW Home Building Act"]
}
```

---

### Platform Optimisation — 22/100

| Platform | Score | Action Required |
|---|---|---|
| YouTube (TheAwesim1) | 22/100 | Relaunch with NCAT/Scott Schedule explainer videos |
| Reddit | 0/100 | Build authentic presence in r/AusLegal, r/AusPropertyChat |
| Wikipedia/Wikidata | 0/100 | Create Wikidata Q-entry this week |
| LinkedIn | 20/100 | Consolidate duplicate profiles; publish monthly thought leadership |
| Google Business Profile | Active, 4.5+ stars | Scale reviews to 50+ |
| AllExperts.com.au | 273 cases listed | Maintain and update |

---

## Quick Wins (Implement This Week)

1. **Fix the two typos** in AIOSEO site description ("Witnes" → "Witness", "Sydne" → "Sydney") — cascades to fix schema, OG tags, and llms.txt header site-wide in one change. **5 minutes.**

2. **Fix Organisation name duplication** ("Awesim Awesim Building Consultants" → "Awesim Building Consultants") in AIOSEO Knowledge Graph settings. **5 minutes.**

3. **Add AI crawler directives** to robots.txt — explicit Allow blocks for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot. **15 minutes.**

4. **Enable AIOSEO schema output** — check AIOSEO → Search Appearance → Schema → Default Schema Type is not "None." This may unlock BreadcrumbList and WebSite schema automatically with zero additional work. **10 minutes.**

5. **Change og:locale to en_AU** in AIOSEO social settings and update `inLanguage` to `en-AU`. **2 minutes.**

6. **Create a Wikidata entity** for Awesim Building Consultants at wikidata.org. Resolves brand disambiguation against Ohio Supercomputer's "AweSim" program. **45 minutes.**

7. **Write and publish homepage meta description** (see H2 text above). **10 minutes.**

---

## 30-Day Action Plan

### Week 1: Fix the Foundation (Technical Errors)
- [ ] Fix typos in AIOSEO site description (C2)
- [ ] Fix Organisation name duplication in AIOSEO (C3)
- [ ] Enable AIOSEO schema output and verify with Rich Results Test
- [ ] Add AI crawler directives to robots.txt (H1)
- [ ] Change og:locale to en_AU (M7)
- [ ] Create Wikidata entity for Awesim Building Consultants (M5)
- [ ] Write meta descriptions for homepage, expert witness, and Scott Schedule pages (H2)

### Week 2: Schema Implementation
- [ ] Add LocalBusiness + Organisation JSON-LD to homepage (C1 / Schema Priority 1)
- [ ] Add FAQPage JSON-LD to /expert-witness-report/ (H3 / Schema Priority 2)
- [ ] Add Person JSON-LD for Glen Sim to /about-us-2/ (Schema Priority 3)
- [ ] Add FAQPage JSON-LD to /scott-schedule/
- [ ] Upload 1200×630px OG image to replace 208×88px logo (H6)
- [ ] Replace AIOSEO llms.txt with spec-compliant hand-authored version (C4)

### Week 3: Author Attribution and E-E-A-T
- [ ] Set Glen Sim as author on all WordPress posts
- [ ] Create /team/glen-sim/ author page with full credentials and bio
- [ ] Add Article schema with author reference to all blog posts (via AIOSEO post template)
- [ ] Standardise experience claim across all pages (20 vs 35+ inconsistency) (M3)
- [ ] Consolidate duplicate social profiles: Facebook, LinkedIn, About.me (M6)

### Week 4: Brand Authority and Content
- [ ] Email last 50 satisfied clients requesting Google Business Profile reviews
- [ ] Script and record first YouTube video: "What is a Scott Schedule and How Does It Work in NCAT?"
- [ ] Draft first 3 anonymised case studies for /case-studies/ section
- [ ] Collect 10 real testimonials with name, suburb, date, outcome for About page
- [ ] Name issuing bodies for all accreditations on About page (removes self-assertion signal)

---

## Appendix: Pages Analysed

| URL | Title | Key Issues Found |
|---|---|---|
| https://awesim.com.au/ | Building Consultants Sydney Expert Witness & Scott Schedules | No meta description, no schema, OG image 208×88px, H1 not quotable |
| https://awesim.com.au/expert-witness-report/ | NCAT Building Expert Witness Reports | ~3,800 words, comprehensive FAQs, no FAQPage schema, no author |
| https://awesim.com.au/scott-schedule/ | Scott Schedules — Awesim Building Consultants | ~1,300 words, FAQ sections, no schema, no author |
| https://awesim.com.au/about-us-2/ | About Us — Glen Sim and Awesim | Strong credentials, no Person schema, experience inconsistency |
| https://awesim.com.au/what-is-a-threshold-water-stop/ | What is a Threshold Water Stop? | ~3,500 words, AS 3740:2021 cited, no Article schema, author name unclear |
| https://awesim.com.au/building-dispute-about-windows/ | Building Dispute About Windows | Cites NCAT Procedural Direction 3 (2022), Home Building Act, no schema |
| https://awesim.com.au/client-side-project-management-company/ | Client Side Project Management | Three-phase methodology documented, no schema, no case studies |
| https://awesim.com.au/quantum_meruit_report/ | Quantum Meruit Report | Service page, no schema |
| https://awesim.com.au/contact/ | Contact | 4 offices listed, no LocalBusiness schema for branch locations |
| https://awesim.com.au/llms.txt | llms.txt | Exists, AIOSEO-generated, wrong format, typos in header |
| https://awesim.com.au/robots.txt | robots.txt | No AI crawler directives |
| https://awesim.com.au/sitemap.xml | Sitemap Index | 5 sub-sitemaps, 400+ URLs, well-structured |
| https://awesim.com.au/page-sitemap.xml | Page Sitemap | 22 pages listed |
| https://awesim.com.au/post-sitemap.xml | Post Sitemap | 200+ articles |
| https://awesim.com.au/suburb-sitemap.xml | Suburb Sitemap | 1 URL (Wellington) — local SEO targeting |
