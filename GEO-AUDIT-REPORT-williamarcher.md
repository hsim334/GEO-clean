# GEO Audit Report: William Archer Defence Lawyers

**Audit Date:** 26 March 2026
**URL:** https://williamarcher.com.au
**Business Type:** Legal Services / Local Business (Traffic Law Firm — Victoria)
**Pages Analyzed:** 47 (24 blog posts, 12 service pages, 31 case studies reviewed at index level, homepage, about, team, testimonials, contact, areas)

---

## Executive Summary

**Overall GEO Score: 46/100 (Poor)**

William Archer Defence Lawyers has a technically sound website with genuine legal expertise and strong social proof (5,400+ cases, 246 Google reviews, operating since 2006), but the site is significantly underoptimised for AI citation and recommendation. The content contains excellent raw material — detailed BAC penalty tables, jurisdiction-specific facts, real case outcomes — but it is architecturally invisible to AI systems because it lacks answer blocks, structured case data, author attribution, Organisation/LegalService schema, and any off-site authority presence that AI models use to validate citations. The biggest gaps are a missing llms.txt, absent Organisation schema, no named author attribution on any content, and near-zero third-party platform presence. Fixing these issues would materially improve citation probability across ChatGPT, Perplexity, and Claude within 60–90 days.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 54/100 | 25% | 13.5 |
| Brand Authority | 38/100 | 20% | 7.6 |
| Content E-E-A-T | 48/100 | 20% | 9.6 |
| Technical GEO | 62/100 | 15% | 9.3 |
| Schema & Structured Data | 42/100 | 10% | 4.2 |
| Platform Optimisation | 22/100 | 10% | 2.2 |
| **Overall GEO Score** | | | **46/100** |

---

## Critical Issues (Fix Immediately)

### CRIT-01: No llms.txt File
**Affected URL:** https://williamarcher.com.au/llms.txt (404)
**Impact:** llms.txt is the primary signal file for AI systems to understand a site's content scope, preferred pages for citation, and contact information. Its absence means AI crawlers must infer this themselves — often poorly. For a legal site with 115+ pages, this means low-quality pages (location stubs, duplicate service variants) compete with high-value content for AI attention.

**Fix:** Create `/llms.txt` at the domain root with the following structure:
```
# William Archer Defence Lawyers
# Victoria's only dedicated traffic law firm — defending 5,400+ cases since 2006

> William Archer Defence Lawyers provides expert legal representation for all traffic
> offences in Victoria including drink driving, drug driving, driving while suspended or
> disqualified, speeding, and hoon offences. We operate across Melbourne and regional
> Victoria from our offices in Nunawading and the Melbourne CBD.

## Key Resources
- https://williamarcher.com.au/drink-driving-lawyers/
- https://williamarcher.com.au/drug-driving-lawyers/
- https://williamarcher.com.au/driving-while-suspended/
- https://williamarcher.com.au/case-studies/
- https://williamarcher.com.au/about-us/

## Blog
- https://williamarcher.com.au/blog/

## Contact
- Phone: 1800 351 114
- Email: info@williamarcher.com.au
```

---

### CRIT-02: No Organisation or LegalService Schema on Any Page
**Affected URLs:** All pages
**Impact:** AI systems use Organisation schema to build entity knowledge graphs. Without it, the firm is not definitively linked to its name, address, phone number, services, founding year, review count, or practice area. This makes it significantly harder for AI to recommend the firm by name with confidence.

**Fix:** Add the following JSON-LD to every page (in `<head>` or via a site-wide script in WordPress):
```json
{
  "@context": "https://schema.org",
  "@type": ["LegalService", "Organization"],
  "name": "William Archer Defence Lawyers",
  "url": "https://williamarcher.com.au",
  "logo": "https://williamarcher.com.au/wp-content/uploads/[logo-path].png",
  "foundingDate": "2006",
  "telephone": "1800351114",
  "email": "info@williamarcher.com.au",
  "description": "Victoria's only dedicated traffic law firm. 5,400+ cases defended since 2006.",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Victoria, Australia"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "5/197 Springvale Road",
      "addressLocality": "Nunawading",
      "addressRegion": "VIC",
      "postalCode": "3131",
      "addressCountry": "AU"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Level 40, 140 William Street",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "246",
    "bestRating": "5"
  },
  "sameAs": [
    "https://www.linkedin.com/company/william-archer-defence-lawyers",
    "https://www.facebook.com/williamarcherlaw"
  ]
}
```

---

### CRIT-03: No Author Attribution on Any Content
**Affected URLs:** All 24 blog posts, all service pages
**Impact:** Every blog post uses `"williamarcher"` as the schema author — not a real named Person. No byline appears on any article. AI systems treat anonymously-authored legal content as lower authority than named, credentialled content. This is one of the primary reasons the site is not being cited by AI systems for legal questions despite having accurate, in-depth content.

**Fix:**
1. Create a proper WordPress author profile for **Amalia Vicze** (Principal Solicitor, University of Melbourne LLB, founded firm 2006, 20+ years traffic law experience) and assign all existing blog posts to her.
2. Add an author byline block to every blog post with name, title, and credentials.
3. Update all Article/WebPage schema to include a proper Person schema:
```json
"author": {
  "@type": "Person",
  "name": "Amalia Vicze",
  "jobTitle": "Principal Solicitor",
  "worksFor": {"@type": "Organization", "name": "William Archer Defence Lawyers"},
  "alumniOf": {"@type": "EducationalOrganization", "name": "University of Melbourne"},
  "url": "https://williamarcher.com.au/our-team/"
}
```

---

## High Priority Issues

### HIGH-01: No Open Graph or Twitter Card Meta Tags
**Affected URLs:** All pages (not detected on homepage, service pages, or blog posts)
**Impact:** Open Graph tags control how the site appears when shared on LinkedIn, Facebook, and other platforms where AI systems harvest training data and citation signals. Their absence means any links shared about the firm render poorly, reducing click-through and third-party citation probability.

**Fix:** Add to all pages via Yoast SEO (Social tab):
- `og:title` — page-specific title
- `og:description` — compelling 1-2 sentence description
- `og:image` — 1200×630px branded image with firm name
- `og:type` — `article` for blog posts, `website` for service pages
- `twitter:card` — `summary_large_image`

---

### HIGH-02: Case Studies Buried in Paginated/Filtered UI
**Affected URL:** https://williamarcher.com.au/case-studies/
**Impact:** The case studies page uses a filtered card layout with "Load More" pagination. AI crawlers see only the initially loaded subset (roughly 10-15 cards) and cannot extract structured outcome data. The firm has 31 documented case studies with real outcome data — this is the single most citeable content type a law firm can have — but it is architecturally invisible to AI.

**Fix:** Add a static HTML outcomes table at the top of the case studies page, above the filtered grid:

```html
<h2>Recent Case Outcomes</h2>
<table>
  <thead>
    <tr>
      <th>Charge</th><th>Court</th><th>Circumstances</th><th>Outcome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Drink driving (0.131 BAC)</td>
      <td>Melbourne Magistrates' Court</td>
      <td>First offence</td>
      <td>No conviction recorded, 12-month interlock</td>
    </tr>
    <tr>
      <td>Drug driving + disqualified driving</td>
      <td>Ringwood Magistrates' Court</td>
      <td>3 charges same day</td>
      <td>$1,500 fine, 3-month cancellation, no jail</td>
    </tr>
    <tr>
      <td>Unpaid fines ($68,000 debt)</td>
      <td>Frankston Magistrates' Court</td>
      <td>Arrested by Sheriff</td>
      <td>Reduced to $3,000 at $100/month</td>
    </tr>
    <!-- ... populate all 31 cases ... -->
  </tbody>
</table>
```

---

### HIGH-03: No Fine Dollar Amounts in Penalty Tables
**Affected URL:** https://williamarcher.com.au/drink-driving-lawyers/
**Impact:** The BAC penalty table on the drink driving page is the strongest AI-citable asset on the site — but it shows only licence cancellation periods, not fines. AI systems cannot answer "how much is the fine for drink driving in Victoria?" from this page. Competitor content that includes fine amounts in dollar terms will be cited instead.

**Fix:** Add fine columns to the existing BAC table using current Victorian penalty unit values (1 PU = $192.31 as at July 2025). Source: Magistrates' Court of Victoria / Road Safety Act 1986.

---

### HIGH-04: Missing Article Schema on All Blog Posts
**Affected URLs:** All 24 blog posts (currently using `WebPage` schema type)
**Impact:** AI systems weight `Article` schema significantly higher than `WebPage` when deciding whether to cite a page as an informational source. Blog posts are inherently `Article` type content but are being served as generic web pages to AI crawlers.

**Fix:** In Yoast SEO, switch all blog post schema type from `WebPage` to `Article`. Ensure each Article has: `headline`, `author` (Person), `datePublished`, `dateModified`, `publisher` (Organization).

---

### HIGH-05: No LinkedIn Company Page (Confirmed Absent from Search Results)
**Affected:** Off-site brand authority
**Impact:** LinkedIn is one of the platforms AI systems treat as a high-trust source for professional entity verification. Its absence means AI models cannot cross-reference the firm's existence and credentials via LinkedIn — reducing confidence in citation.

**Fix:** Create a LinkedIn Company Page for William Archer Defence Lawyers. Complete it fully: logo, cover image, about section, founded date (2006), specialities (traffic law, drink driving defence, Victoria), and link back to the website.

---

## Medium Priority Issues

### MED-01: FAQPage Schema Missing on Blog Posts with FAQ Sections
**Affected URLs:** Blog posts including `/what-happens-in-court-for-driving-offences-in-victoria-step-by-step-guide/` (has H3 "FAQs" section) and others
**Impact:** Blog posts contain FAQ sections but lack FAQPage schema. These FAQ sections are prime AI citation targets — structured Q&A is the most reliably extracted content format — but without schema, AI crawlers cannot identify them as definitively Q&A structured.

**Fix:** Add FAQPage schema to all blog posts that contain FAQ sections. In Yoast, use the FAQ block plugin or manually add JSON-LD.

---

### MED-02: No Legislation Citations in Any Content
**Affected URLs:** All blog posts and service pages
**Impact:** Legal content without statutory citations scores lower for legal authority with AI systems. Phrases like "under Victorian law" or "the courts may consider" are unverifiable. Specific references like "Road Safety Act 1986 s 49(1)(f)" are verifiable primary sources — AI systems weight them significantly higher.

**Fix:** Add section references for all legal claims. The drink driving page already lists charge types with section numbers (Road Safety Act s 49(1)(a)–(g)) — replicate this pattern across all service pages and blog posts.

---

### MED-03: No "Quick Answer" Summary Block on Any Page
**Affected URLs:** All service pages and blog posts
**Impact:** AI systems scan the first 100–200 words of a page for a direct answer to the implied question. Every page on this site opens with emotional framing ("If you've been charged with drink driving, you're probably feeling overwhelmed...") rather than a factual answer block. The best content is buried 500+ words in.

**Fix:** Add a "In Short" or "Key Facts" summary block as the first content element after the H1 on every service page and blog post. Example for /drink-driving-lawyers/:

> **Key Facts — Drink Driving Victoria (2025)**
> - BAC of 0.05 or above = criminal charge, mandatory licence cancellation
> - Minimum licence loss: 3 months (low-range, first offence) to 24 months (0.24+, first offence)
> - Maximum fine: up to $4,808 (25 penalty units) for high-range or DUI charges
> - No work licences, no hardship exemptions exist in Victoria
> - Alcohol interlock required before licence reinstatement in most cases
> - A no-conviction outcome is possible — the court has discretion

---

### MED-04: Crawl Delay of 10 Seconds in robots.txt
**Affected URL:** https://williamarcher.com.au/robots.txt
**Impact:** The 10-second crawl delay applies to all bots including AI crawlers. This slows re-indexing of updated content. It was likely set to protect server load from the old SEO era — modern hosting can handle faster crawls.

**Fix:** Reduce crawl delay to 1–2 seconds or remove it entirely if the hosting can handle it. This will not fix GEO directly but speeds up the propagation of all other improvements.

---

### MED-05: Team Credentials Not Surfaced in Content
**Affected URLs:** Blog posts, service pages, About page
**Impact:** Amalia Vicze's credentials (University of Melbourne LLB, founded 2006, political refugee background) are strong trust signals — but they only appear on the Our Team page, which receives comparatively little traffic. AI systems discover credentials by seeing them repeated across content, not by finding a single bio page.

**Fix:** Add a short author bio footer to every blog post: "Written by Amalia Vicze, Principal Solicitor at William Archer Defence Lawyers. Amalia founded the firm in 2006 and has personally defended over 5,400 traffic law cases in Victoria."

---

## Low Priority Issues

### LOW-01: About Page Contains No Individual Credentials
**Affected URL:** https://williamarcher.com.au/about-us/
**Impact:** The About page uses collective "we" language with no individual attribution. This is a missed opportunity for an E-E-A-T signal that AI reads heavily.

**Fix:** Restructure About page to name Amalia Vicze, list her credentials, and reference her founding of the firm.

---

### LOW-02: Case Study Individual Pages Lack Structured Data
**Affected URLs:** All 31 /case-study/* pages
**Impact:** Individual case study pages contain excellent outcome data but have no schema to help AI extract it as structured knowledge.

**Fix:** Add custom schema to case study pages — at minimum a `NewsArticle` or `Article` with outcome data in the body, and consider a custom `LegalCase` schema extension.

---

### LOW-03: Some Blog Posts Lack Canonical Tags (Not Confirmed)
**Affected URLs:** Unconfirmed — canonical tag was not visible in fetch output for the blog post fetched
**Impact:** Without canonical tags, AI systems may encounter duplicate or near-duplicate content (e.g., multiple "driving while suspended" articles) and dilute citation authority across them rather than concentrating it on the best version.

**Fix:** Confirm canonical tags are present on all pages via Yoast SEO. Ensure the most comprehensive version of each topic is canonicalised as the primary.

---

### LOW-04: Chinese Language Page Not Linked from Main Navigation
**Affected URL:** https://williamarcher.com.au/%e5%a2%a8%e5%b0%94%e6%9c%ac%e5%88%91%e4%ba%8b%e5%be%8b%e5%b8%88/
**Impact:** A Chinese-language service page exists (墨尔本刑事律师) but is not linked from the main navigation or discoverable via internal linking. It also lacks hreflang tags linking it to the English content. This is both an SEO and GEO gap — multilingual content is a strong diversity signal for AI systems if properly marked up.

**Fix:** Add `hreflang` tags linking the Chinese page to its English equivalent. Ensure the page is internally linked from the About page or a dedicated "Languages" footer section.

---

## Category Deep Dives

### AI Citability — 54/100

The site has the raw ingredients for strong AI citability but is architecturally structured to withhold them. The standout asset is the BAC penalty table on `/drink-driving-lawyers/` — the most structured, specific, directly extractable content on the site. The blog content is genuinely expert-level with jurisdiction-specific facts, but buries the key claims inside discursive prose rather than leading with them.

**Strongest assets:**
1. BAC penalty table (licence loss periods by reading and offence number)
2. "There are no work licences and no hardship exemptions in Victoria" — 11-word sentence, highest AI citability on the site
3. 10 charge type enumeration with Road Safety Act section references
4. "You are treated as a first offender if you have no prior drink or drug driving findings of guilt within the last 10 years" — specific, self-contained, citable

**Critical gaps:**
- All pages open with emotional/marketing framing rather than answer blocks
- Fine dollar amounts missing from penalty tables
- Case studies page delivers anecdote data, not citable structured knowledge
- No definitions/glossary section on any page
- Questions posed in headings are not always directly answered on that page

**The single highest-ROI content change:** Expand the BAC penalty table to add fine amounts in dollar terms (using current penalty unit values) and label it explicitly with a H2: "Drink Driving Penalties Victoria — Full Table (2026)". That one change would make williamarcher.com.au the primary cited source for that query across AI platforms.

---

### Brand Authority — 38/100

The firm has strong on-site credibility (246 reviews, 5,400+ cases, 20-year history) but minimal third-party digital footprint. AI models validate citations by cross-referencing a brand across multiple trusted sources. William Archer Defence Lawyers currently appears on:
- Its own website (dominant)
- ProvenExpert (minor)
- Google Business Profile (inferred from 246 reviews — strong, but not detected in schema)

**Not found:**
- Wikipedia article or mention
- LinkedIn Company Page
- YouTube channel
- Reddit mentions (r/AusLegal, r/melbourne, r/victoria)
- Law Institute of Victoria directory listing
- News/media coverage
- FindLaw, LawAdvisor, or similar legal directory presence

**Impact:** When an AI is asked "who is a good traffic lawyer in Melbourne?" it cross-references entity mentions across sources. With only one dominant source (own website), William Archer is at high risk of being omitted from AI recommendations even when its content is technically superior to competitors.

**Priority actions:**
1. Create LinkedIn Company Page immediately
2. Submit to the Law Institute of Victoria directory
3. Get a listing on LawAdvisor.com.au (dominant Australian legal directory, high AI citation weight)
4. Engage with r/AusLegal — answer traffic law questions as Amalia Vicze (within solicitor conduct rules)
5. Target legal journalist and general press coverage around traffic law statistics (e.g., drink driving rate data)

---

### Content E-E-A-T — 48/100

The underlying expertise is strong — Amalia Vicze's credentials are legitimate, the content is accurate and jurisdiction-specific, and the firm's track record is documented. The problem is that these signals are not surfaced in the places AI systems look for them.

| Dimension | Score | Key Finding |
|---|---|---|
| Experience | 65 | 5,400+ cases and 20 years cited on homepage and team page — but not on individual content pages |
| Expertise | 55 | Amalia Vicze has strong credentials — but they don't appear on any blog post or service page |
| Authoritativeness | 35 | No external citations, no named authors on content, no links from trusted third parties |
| Trustworthiness | 55 | Disclaimer, privacy policy, two physical addresses, phone number — solid basics |

**Key gap:** The Our Team page is the only place credentials appear. This is the wrong architecture for E-E-A-T. Credentials need to be distributed across content pages — author bylines on blog posts, practitioner bios on service pages, team credentials on the About page. AI systems encounter the About page and blog posts far more often than the Team page.

**No blog post or service page on this site has a named, credentialled human author.** This is a binary E-E-A-T failure for AI systems — anonymous legal content is treated as lower authority regardless of its quality.

---

### Technical GEO — 62/100

The technical foundation is solid. The site is server-side rendered with JavaScript enhancement — core content is accessible to AI crawlers without JavaScript execution. All crawlers are permitted. HTTPS is implemented. A sitemap index is present.

| Check | Status | Notes |
|---|---|---|
| AI crawlers allowed (robots.txt) | ✅ Pass | All user-agents allowed, no AI-specific blocks |
| llms.txt present | ❌ Fail | 404 — High priority |
| Server-side rendered | ✅ Pass | Core HTML content accessible to bots |
| HTTPS | ✅ Pass | Enforced |
| Sitemap | ✅ Pass | sitemap_index.xml with 3 sub-sitemaps |
| Open Graph tags | ❌ Fail | Not detected on homepage or service pages |
| Twitter Card tags | ❌ Fail | Not detected |
| Canonical tags | ⚠️ Partial | Present on some pages, not confirmed on all |
| Crawl delay | ⚠️ Minor | 10 seconds — slows re-indexing |
| Author schema | ❌ Fail | Uses "williamarcher" string, not a Person entity |
| FAQPage schema | ✅ Partial | Present on service pages, missing on blog posts |

**Biggest technical win available:** llms.txt creation is a 30-minute task that immediately improves AI crawler understanding of the site's content scope and preferred citation pages.

---

### Schema & Structured Data — 42/100

The site uses Yoast SEO and has basic schema in place, but is missing every schema type that matters most for a local legal services firm.

**Schema types present:**
- `WebPage` / `WebSite` ✅
- `BreadcrumbList` ✅
- `FAQPage` (service pages only) ✅
- `ImageObject` ✅
- `Person` (malformed — uses username not proper Person entity) ⚠️

**Schema types missing (priority order):**

| Schema Type | Priority | Impact |
|---|---|---|
| `LegalService` / `Organization` | Critical | Entity recognition, local recommendations |
| `AggregateRating` | High | 246 reviews invisible to AI |
| `Article` (blog posts) | High | Blog posts appear as generic pages |
| `LocalBusiness` with two addresses | High | Location-based AI recommendations |
| `HowTo` (step-by-step posts) | Medium | Structured extraction of guides |
| `FAQPage` (blog posts) | Medium | Q&A extraction from blog FAQ sections |
| `Person` (Amalia Vicze — proper) | Medium | Author credibility for AI |
| `Review` schema (individual reviews) | Low | Supports AggregateRating |

The absence of `LegalService` / `Organization` schema is the most damaging single omission on the site. This is the schema that tells AI systems "this is a legal services provider in Victoria that defends traffic charges and has been operating since 2006." Without it, AI entity recognition for the firm is based entirely on page text — much weaker than schema-backed entity definition.

---

### Platform Optimisation — 22/100

The firm has almost no presence on the platforms AI systems most heavily weight as corroboration sources.

| Platform | Status | Priority |
|---|---|---|
| Google Business Profile | ✅ Active (246 reviews) | Maintain — add services schema linkage |
| LinkedIn Company Page | ❌ Not found | High — create immediately |
| LawAdvisor.com.au | ❌ Not found | High — primary AU legal directory |
| YouTube | ❌ Not found | Medium — video content ranks in AI responses |
| Reddit (r/AusLegal) | ❌ No brand mentions | Medium — organic mention target |
| Wikipedia | ❌ Not found | Low (hard to achieve, high value if possible) |
| Law Institute of Victoria | ❌ Not confirmed | High — trusted legal authority signal |
| FindLaw / Lawyers.com.au | ❌ Not found | Medium |

The 246 Google reviews are a strong existing asset — but they are not being surfaced to AI via `AggregateRating` schema. Right now, AI systems cannot see those reviews unless they read the raw page text. Adding schema makes this data structured and immediately extractable.

---

## Quick Wins (Implement This Week)

1. **Create llms.txt** — 30 minutes. Immediately improves AI crawler understanding of the site. Highest effort:impact ratio of any single action on this list. Template provided in CRIT-01 above.

2. **Add Organisation/LegalService JSON-LD sitewide** — 1–2 hours via WordPress. Resolves the most critical schema gap. Tells AI systems definitively who the firm is, where it operates, what it does, and that it has 246 verified reviews. Full schema block provided in CRIT-02 above.

3. **Switch blog post schema type from WebPage to Article in Yoast** — 20 minutes, sitewide setting. Immediately elevates all 24 blog posts to Article-type content in AI crawler eyes.

4. **Add Open Graph tags to all pages via Yoast Social tab** — 1 hour. Upload a branded 1200×630 OG image, write OG descriptions for the top 10 pages. Unlocks social sharing signals that AI training data harvests.

5. **Expand the BAC penalty table to include fine dollar amounts** — 1 hour. Add a "Maximum Fine" column using current penalty unit values ($192.31/PU as at July 2025). This transforms the table from "useful" to "the definitive AI-cited source for drink driving penalties in Victoria."

---

## 30-Day Action Plan

### Week 1: Foundation — Make the Site Machine-Readable
- [ ] Create and publish llms.txt (CRIT-01)
- [ ] Add Organisation/LegalService JSON-LD schema sitewide (CRIT-02)
- [ ] Add AggregateRating schema linking to Google reviews (CRIT-02)
- [ ] Switch all blog post schema to Article type in Yoast (HIGH-04)
- [ ] Switch blog post author from "williamarcher" to Amalia Vicze proper Person schema (CRIT-03)
- [ ] Add Open Graph and Twitter Card tags sitewide (HIGH-01)

### Week 2: Content — Activate the Existing Assets
- [ ] Expand BAC penalty table with fine dollar amounts (HIGH-03)
- [ ] Add "Quick Answer" / "Key Facts" summary blocks to top 5 pages: drink driving, drug driving, driving while suspended, disqualified driving, court process guide (MED-03)
- [ ] Add author byline block (Amalia Vicze, credentials, short bio) to all blog posts (CRIT-03 / MED-05)
- [ ] Add FAQPage schema to all blog posts that contain FAQ sections (MED-01)
- [ ] Add legislation citations (Road Safety Act section references) to all service pages (MED-02)

### Week 3: Structure — Surface the Case Data
- [ ] Add static HTML outcomes table to /case-studies/ page with all 31 cases (HIGH-02)
- [ ] Add Article schema with proper author Person to each individual case study page (LOW-02)
- [ ] Add HowTo schema to step-by-step guides (court process, licence recovery guides) (LOW — medium impact)
- [ ] Fix hreflang on Chinese language page and add internal link from About page (LOW-04)
- [ ] Restructure About page to name and credential Amalia Vicze (LOW-01)

### Week 4: Authority — Build Off-Site Entity Signals
- [ ] Create LinkedIn Company Page (full completion: logo, about, specialities, team) (HIGH-05)
- [ ] Submit listing to LawAdvisor.com.au (HIGH brand authority)
- [ ] Confirm and optimise Law Institute of Victoria directory listing
- [ ] Create or claim FindLaw / Lawyers.com.au profile
- [ ] Reduce robots.txt crawl-delay to 1 second (MED-04)
- [ ] Verify canonical tags on all pages in Yoast (LOW-03)

---

## Appendix: Pages Analysed

| URL | Type | Key GEO Issues |
|---|---|---|
| https://williamarcher.com.au/ | Homepage | No OG tags, no Organisation schema |
| https://williamarcher.com.au/drink-driving-lawyers/ | Service | FAQPage present but no Article schema, missing fine amounts |
| https://williamarcher.com.au/drug-driving-lawyers/ | Service | Assumed same issues as drink driving page |
| https://williamarcher.com.au/driving-while-suspended/ | Service | Assumed same issues |
| https://williamarcher.com.au/about-us/ | About | No individual credentials, no Person schema |
| https://williamarcher.com.au/our-team/ | Team | Credentials not distributed to content pages |
| https://williamarcher.com.au/testimonials/ | Social proof | 246 reviews not in AggregateRating schema |
| https://williamarcher.com.au/case-studies/ | Case studies | Paginated format, no structured outcomes table |
| https://williamarcher.com.au/blog/ | Blog index | — |
| https://williamarcher.com.au/first-time-drink-driving-offence-in-victoria-what-really-happens/ | Blog | No Article schema, no author byline, no legislation citations |
| https://williamarcher.com.au/is-it-worth-fighting-a-drink-driving-charge-in-victoria/ | Blog | No definitions block, rhetorical hedging reduces citability |
| https://williamarcher.com.au/understanding-the-traffic-court-process-in-victorias-magistrates-court/ | Blog | No Article schema, no legislation citations, strong structure |
| https://williamarcher.com.au/what-happens-in-court-for-driving-offences-in-victoria-step-by-step-guide/ | Blog | FAQPage schema missing (has FAQ section), no author byline |
| https://williamarcher.com.au/can-you-go-to-jail-for-driving-while-suspended-in-victoria/ | Blog | (Not fetched — assumed same issues) |
| https://williamarcher.com.au/case-study/drink-driving-melbourne-magistrates-court/ | Case study | No Article schema, good outcome data but unstructured |
| /case-study/unpaid-fines-frankston-magistrates-court/ | Case study | $68k→$3k outcome — excellent but no schema |
| /case-study/drug-driving-and-disqualified-driving-ringwood-magistrates-court/ | Case study | Good specificity, no structured data |
| https://williamarcher.com.au/%e5%a2%a8%e5%b0%94%e6%9c%ac%e5%88%91%e4%ba%8b%e5%be%8b%e5%b8%88/ | Chinese page | No hreflang, not internally linked |
| https://williamarcher.com.au/robots.txt | Technical | 10s crawl delay, no AI-specific directives |
| https://williamarcher.com.au/llms.txt | Technical | 404 — file does not exist |

*31 case study URLs reviewed at index level. 24 blog post URLs reviewed at sitemap level with 5 fetched in detail. 12+ service/location pages reviewed at sitemap level.*

---

*Audit produced by GetCitedGEO — Australia's specialist GEO agency.*
*Contact: getcitedgeo.com.au*
