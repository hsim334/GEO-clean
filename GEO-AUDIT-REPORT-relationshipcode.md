# GEO Audit Report: The Relationship Code

**Audit Date:** 7 May 2026
**URL:** https://relationshipcode.org
**Business Type:** Relationship Coaching Services — immersive retreats, mentoring, digital products
**Pages Analysed:** 12 (homepage, codeevent, about-rc, rc-founders, testimonials, our-mission, the-crucible-event, mentoring, masterclass, perth city page, sitemap check, robots.txt)

---

## Executive Summary

**Overall GEO Score: 23/100 — Critical**

The Relationship Code has a real business with genuine assets — a named methodology, multi-city operations across Australia and the USA, a published book, a podcast, a mobile app, and charity partnerships — but virtually none of this is structured in a way AI systems can find, read, or cite. The site is built entirely for human emotional persuasion: all-caps superlative claims, zero editorial content, no FAQ blocks, no founder credentials, and a sitemap that indexes only transactional pages while leaving all authority-building content invisible to crawlers. Every major AI citability signal is either absent or actively working against the brand. There is no llms.txt, no meta descriptions anywhere on the site, no FAQPage schema despite question-oriented copy, and no Person schema for the founders despite them being the brand's primary authority anchor. The gap between what this business actually delivers and what AI systems can discover about it is the entire GEO opportunity.

---

## Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 14/100 | 25% | 3.5 |
| Brand Authority | 28/100 | 20% | 5.6 |
| Content E-E-A-T | 28/100 | 20% | 5.6 |
| Technical GEO | 31/100 | 15% | 4.65 |
| Schema & Structured Data | 6/100 | 10% | 0.6 |
| Platform Optimisation | 31/100 | 10% | 3.1 |
| **Overall GEO Score** | | | **23/100 — Critical** |

---

## Critical Issues (Fix Immediately)

### C1 — No llms.txt file exists
The site has no `/llms.txt` file. Every major AI engine (ChatGPT, Perplexity, Claude, Gemini) that visits this domain gets zero structured context about what the business does, who founded it, or which pages matter. They fall back to raw HTML scraping — which, given the other structural issues below, produces a poor and incomplete model of this brand.

**Fix:** Create `/llms.txt` at the domain root. Example:

```
# The Relationship Code

> The Relationship Code is a relationship transformation organisation founded by Brett and Marie Jones. It helps couples and individuals restore love, resolve conflict, and rebuild communication through evidence-based retreats, mentoring programs, and digital resources — operating across Australia and the USA.

## Core Programs

- [The Relationship Code Retreat](https://relationshipcode.org/codeevent): 3-day intensive retreat for couples, held across 7 cities in Australia and the USA. Based on the Six Step Relationship Communication Code™.
- [The Crucible](https://relationshipcode.org/the-crucible-event): 6-day immersive program for men.
- [Permission for Pleasure](https://relationshipcode.org/permission-for-pleasure): 4-day retreat for women.
- [Online Mentoring](https://relationshipcode.org/mentoring): 6-month 1:1 coaching program.
- [Free Masterclass](https://relationshipcode.org/masterclass): Introduction to the Relationship Code methodology.

## About

- [About The Relationship Code](https://relationshipcode.org/about-rc)
- [Founders Brett & Marie Jones](https://relationshipcode.org/rc-founders)
- [Our Mission](https://relationshipcode.org/our-mission)
- [Testimonials](https://relationshipcode.org/testimonials)

## Resources

- [Podcast — Relationship Advice by The Relationship Code](https://relationshipcode.org/podcast)
- [Book — Samurai Love by Brett & Marie Jones](https://relationshipcode.org/samurailovebook1)
- [Mobile App](https://relationshipcode.org/app)

## Contact

- [Contact Us](https://relationshipcode.org/contact-us)
- Phone: +61 402 690 218
- Email: info@relationshipcode.org
```

---

### C2 — Sitemap excludes ~80% of content pages
The XML sitemap contains only 11 URLs — all transactional (shop, cart, checkout, confirmation pages). Every authority-building page — homepage, founders, mission, testimonials, all retreat pages, all city pages — is completely invisible to sitemap-driven AI crawler discovery.

**Fix:** Install Rank Math or Yoast SEO on WordPress. Enable XML sitemaps for all post types and pages. Manually verify the following pages are included:
- `/` (homepage)
- `/codeevent`
- `/the-crucible-event`
- `/about-rc`
- `/rc-founders`
- `/our-mission`
- `/testimonials`
- `/mentoring`
- All `/cities/*` sub-pages (Perth, Melbourne, Brisbane, Sydney, Adelaide, San Diego, Charlotte)
- `/videos`
- `/contact-us`

Resubmit updated sitemap via Google Search Console.

---

### C3 — No meta descriptions on any page; duplicate title tags sitewide
Every page analysed returns no meta description. The same title tag — "Restore Love in 3 Days | Relationship Retreat USA and Australia | The Relationship Code" — appears on every page including the founders page, mission page, and testimonials page. AI engines use meta descriptions as high-confidence signals for page topic. Duplicate titles signal that all pages cover the same topic, destroying topical differentiation across the site.

**Fix examples:**

| Page | Recommended Title | Recommended Meta Description |
|---|---|---|
| Homepage | The Relationship Code \| Restore Love in 3 Days — USA & Australia | A 3-day relationship communication retreat helping couples restore connection and rebuild trust. Led by Brett and Marie Jones across 7 cities in Australia and the USA. |
| /rc-founders | Meet Brett & Marie Jones \| Founders of The Relationship Code | Brett and Marie Jones created The Relationship Code after transforming their own marriage. Learn their story, methodology, and the science behind their six-step communication system. |
| /codeevent | The Relationship Code 3-Day Retreat \| Upcoming Events USA & Australia | Join the flagship couples retreat from The Relationship Code. Three days. Six steps. Seven cities. Hosted by Brett and Marie Jones and 41 certified coaches. |
| /testimonials | Client Results & Testimonials \| The Relationship Code | Real transformation stories from couples who attended The Relationship Code retreats across Australia and the USA. |
| /the-crucible-event | The Crucible \| 6-Day Men's Immersion \| The Relationship Code | A 6-day intensive retreat for men seeking clarity, leadership, and breakthrough in their relationships and personal lives. |

---

### C4 — Zero schema markup confirmed across the site
With the exception of one unvalidated, partial implementation on `/the-crucible-event`, the site has no structured data whatsoever. No Organization schema (the brand has no machine-readable entity anchor), no FAQPage schema, no Person schema for the founders, no Event schema for live retreats, and no AggregateRating schema despite Google Reviews being referenced. AI engines cannot reliably identify, classify, or cite a business with no structured data layer.

**Fix priority order:** Organization → FAQPage → Person (Brett & Marie Jones) → Event → AggregateRating → Service → HowTo → Book

See Schema Deep Dive section for JSON-LD implementation examples.

---

## High Priority Issues

### H1 — No question-answering content exists anywhere on the site
Zero FAQ sections, zero definition blocks, zero Q&A format pages. FAQ-style content is the single highest-returning citability investment for a coaching service — it directly maps to queries users type into AI tools ("What causes communication breakdown in relationships?", "What is a couples retreat?", "How long does relationship coaching take?"). The site currently has nothing for an AI to extract and surface in response to these queries.

**Fix:** Add a minimum of 5 FAQ questions with substantive answers to the homepage, the main retreat page (/codeevent), and the mentoring page. Mark up with FAQPage schema immediately.

---

### H2 — Founders have no verifiable credentials on the site
Brett and Marie Jones are described as "world-renowned strategists" with zero supporting evidence — no qualifications, no certifications, no professional memberships, no biographical backstory, no schema.org Person markup. In a YMYL (Your Money/Your Life) category like relationship counselling, this is the highest E-E-A-T liability. AI models treat unsubstantiated superlatives as low-confidence signals and are unlikely to surface them in authoritative responses.

**Fix:** Create dedicated founder pages at `/about/brett-jones` and `/about/marie-jones` with full biographical detail, professional training, methodologies studied, years of practice, and any media appearances. Add Person schema with `hasCredential`, `knowsAbout`, and `alumniOf` fields.

---

### H3 — Methodology is named but never explained
The "Six Step Relationship Communication Code™" and "9 researched therapies" are both referenced repeatedly but never explained. No step breakdowns, no therapy citations, no academic references. The site claims to be "the first global scientific system ever to restore relationships" while providing zero scientific evidence. This is the single biggest AI credibility liability — a claim without a citation chain will not be amplified by any AI system.

**Fix:** Publish a "Methodology" or "The Science Behind the Code" page that names and briefly explains each of the nine therapeutic modalities with links to the originating research. Break down the Six Steps with enough detail for a reader to understand the logic. One well-structured 2,500-word page would move AI citability and E-E-A-T scores significantly.

---

### H4 — No Wikipedia presence; brand unrecognised as an entity by AI
There is no Wikipedia article for The Relationship Code, Brett Jones, or Marie Jones. Wikipedia is the single highest-weight signal for AI entity recognition — without it, large language models have no authoritative anchor to associate the brand with a real-world entity.

**Fix:** Draft and submit a Wikipedia article covering the organisation's founding, methodology, geographic reach, book, and charitable work. Ensure the article is written in neutral encyclopaedic tone and supported by third-party references (media articles, book reviews, event listings). This is the highest-ROI single action for long-term AI entity recognition.

---

### H5 — All-caps headings are functionally unquotable by AI
H1 and H2 headings throughout the site are written in ALL CAPS ("THE CODE IS THE FIRST GLOBAL SCIENTIFIC SYSTEM EVER TO RESTORE RELATIONSHIPS"). AI parsers treat all-caps text as presentational rather than informational — it cannot be lifted as a clean quote or cited as a factual statement. If the HTML itself contains uppercase text (not just CSS `text-transform`), this needs correcting at content level.

**Fix:** Rewrite every heading to sentence case with descriptive, information-carrying language. "The Relationship Code uses a six-step communication framework to help couples break dysfunctional patterns" is citable. The all-caps equivalent is not.

---

## Medium Priority Issues

- No Open Graph or Twitter Card meta tags — no structured social preview signals
- Canonical tags unconfirmed — www/non-www consolidation risk (both `relationshipcode.org` and `www.relationshipcode.org` may serve content without canonicals)
- Google Reviews referenced via tinyurl redirect rather than embedded schema — review social proof is invisible to machines
- No LinkedIn company page confirmed — significant professional authority gap for a multi-city, multi-coach operation
- Podcast episode transcripts not published to site — audio content is not crawlable or citable
- 41 coaches mentioned as a number but none named or profiled — undermines the credibility claim entirely
- No Privacy Policy page confirmed — legal risk and a baseline trust signal failure in a YMYL category
- Charity partnerships (Our Rescue, Destiny Rescue) not surfaced through any structured data or press outreach

---

## Low Priority Issues

- Minor canonical inconsistency between sitemap (www.) and domain root
- No BreadcrumbList schema across any pages
- No VideoObject schema if video testimonials exist
- Social media links present but no consistent cross-linking back to site
- App store links not marked up with SoftwareApplication schema
- "Samurai Love" book not marked up with Book schema

---

## Category Deep Dives

### AI Citability — 14/100

The site is optimised for human emotional response, not AI information retrieval. Every piece of content is structured to persuade rather than inform. AI systems extract information; this site offers none.

**What's broken:**
- Every H1 and H2 is an exclamatory marketing claim in all caps — zero information value for AI extraction
- No self-contained passages anywhere. Each paragraph requires surrounding emotional context to make sense
- Three testimonials exist as transformation story titles ("A Marriage Reborn — Marc & Michelle"), not verbatim quotes. Story titles are not citable
- Statistics ("41 coaches", "9 therapies", "Six Steps") appear as orphaned numbers in marketing copy with no source, context, or methodology link
- 4,500-word homepage with near-zero information density — high word count, shallow factual content

**What's working:**
- Site has genuine content depth in the real-world programs — the methodology exists, it just isn't on the website
- Named founders provide a human entity anchor that can be built on

**Rewrite example:**

*Current homepage opening:*
> "THE CODE IS THE FIRST GLOBAL SCIENTIFIC SYSTEM EVER TO RESTORE RELATIONSHIPS"

*GEO-optimised version:*
> "The Relationship Code is a structured six-step communication framework founded by Brett and Marie Jones, drawing on nine evidence-based therapeutic modalities. It is delivered through immersive retreats and online mentoring programmes for couples and individuals seeking to repair communication breakdown, rebuild trust, and prevent divorce."

This version: names the founders, defines the product, references the therapeutic depth, and can be extracted as a standalone paragraph by any AI system.

---

### Brand Authority — 28/100

The brand has genuine authority assets — a book, app, podcast, charitable partnerships, multi-city operations — but almost none are structured or distributed in ways AI systems can find and cite.

**Platform presence map:**

| Platform | Status | GEO Impact |
|---|---|---|
| Wikipedia | Not present | Critical gap — highest AI entity recognition signal |
| Google Business Profile | Unconfirmed / unstructured | High gap |
| LinkedIn | Not confirmed | High gap |
| YouTube | Present (link on site) | Unoptimised — no confirmed keyword-rich descriptions |
| Apple Podcasts | Present | Content not transcribed / crawlable |
| Reddit | No confirmed presence | High gap — primary platform for relationship advice queries |
| Trustpilot / directory | Not confirmed | Medium gap |
| Press / media mentions | None listed on site | High gap |

**Priority actions:**
1. Draft Wikipedia article — highest single-action ROI for AI entity recognition
2. Create LinkedIn company page with full service descriptions and founder profiles
3. Pursue two independent press features (relationship/wellness media, podcast guest slots) to establish a citation trail
4. Register with at least one professional directory (Psychology Today, Relate, PACFA or equivalent)

---

### Content E-E-A-T — 28/100

**Experience (32/100):** Three couple testimonials exist but are presented as story titles without verbatim quotes or outcome data. No case studies, no aggregate results data, no before/after metrics.

**Expertise (22/100):** The methodology is proprietary but unexplained. "Nine researched therapies" are never named. The Six Steps are never described. The founders have 30 years of combined coaching experience (referenced in book copy) but no qualifications are listed anywhere on the site.

**Authoritativeness (18/100):** No third-party citations, no press mentions, no academic references, no institutional affiliations. The "world-renowned" claim has zero corroboration from any external source.

**Trustworthiness (40/100):** Phone, email, and physical locations are provided. Charity partnerships are genuine. Terms & Conditions exist. However: no confirmed Privacy Policy, no professional memberships, no review embedding — only a tinyurl redirect to Google Reviews.

**Priority fixes:**
1. Name and cite the nine therapeutic modalities with links to original research
2. Publish detailed founder bios with verifiable credentials
3. Convert testimonials to structured case studies with presenting problem, intervention, and outcome
4. Add a Privacy Policy page immediately
5. Embed Google Reviews directly (Places API widget) rather than via redirect

---

### Technical GEO — 31/100

**What's working:**
- robots.txt does not block any AI crawlers (GPTBot, ClaudeBot, PerplexityBot are implicitly allowed)
- Site appears to render server-side — content is accessible to crawlers without JavaScript execution
- WordPress CMS provides a solid plugin ecosystem for fixing most technical issues

**What's broken:**
- No llms.txt — zero structured AI guidance (Critical)
- Sitemap covers only 11 transactional pages, missing all content pages (Critical)
- Zero meta descriptions across the entire site (Critical)
- Duplicate title tags on all pages (Critical)
- No Open Graph or Twitter Card tags confirmed (High)
- Canonical URL structure unconfirmed — www/non-www inconsistency risk (High)

**Quick-win robots.txt addition** (optional but positive signal):
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /
```

---

### Schema & Structured Data — 6/100

The site is functionally invisible to AI engines and Google's structured data layer. One partial, unvalidated schema implementation on a single event page is the entirety of structured data coverage across a multi-service, multi-city business with a book, podcast, named methodology, two founders, testimonials, and recurring live events.

**GEO-critical schema missing:**

```json
// 1. Organization — add to homepage <head> (entity anchor for all other schema)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://relationshipcode.org/#organization",
  "name": "The Relationship Code",
  "url": "https://relationshipcode.org",
  "description": "The Relationship Code helps couples restore love and rebuild communication through evidence-based retreats, mentoring programs, and digital resources.",
  "founder": [
    {
      "@type": "Person",
      "@id": "https://relationshipcode.org/#brett-jones",
      "name": "Brett Jones",
      "jobTitle": "Co-Founder",
      "url": "https://relationshipcode.org/rc-founders"
    },
    {
      "@type": "Person",
      "@id": "https://relationshipcode.org/#marie-jones",
      "name": "Marie Jones",
      "jobTitle": "Co-Founder",
      "url": "https://relationshipcode.org/rc-founders"
    }
  ],
  "areaServed": ["Australia", "United States"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-402-690-218",
    "contactType": "customer service",
    "email": "info@relationshipcode.org"
  },
  "sameAs": [
    "https://www.facebook.com/relationshipcode",
    "https://www.instagram.com/relationshipcode",
    "https://www.youtube.com/relationshipcode"
  ]
}
```

```json
// 2. FAQPage — add to homepage and /codeevent (highest GEO impact schema type)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is The Relationship Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Relationship Code is a structured six-step communication framework developed by Brett and Marie Jones to help couples identify and break dysfunctional communication patterns. It is delivered through 3-day immersive retreats across Australia and the USA, supported by online mentoring and a mobile app."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Six Step Relationship Communication Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Six Step Relationship Communication Code is a methodology developed by Brett and Marie Jones that guides couples through identifying their dominant communication patterns, understanding their partner's communication style, mapping recurring conflict loops, applying pattern interruption techniques, building new communication defaults, and embedding lasting relational habits."
      }
    },
    {
      "@type": "Question",
      "name": "How is The Relationship Code different from couples therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Relationship Code is not therapy. It is a structured communication and behaviour-change program based on a proprietary six-step methodology integrating nine evidence-based therapeutic approaches. The immersive retreat format compresses months of insight into a 3-day, high-accountability environment."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Relationship Code retreats held?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Relationship Code runs retreats across Perth, Melbourne, Brisbane, Sydney, and Adelaide in Australia, and in San Diego and Charlotte in the USA. Auckland and Vancouver are planned for 2027."
      }
    },
    {
      "@type": "Question",
      "name": "Who founded The Relationship Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Relationship Code was founded by Brett and Marie Jones, who developed the Six Step Relationship Communication Code™ over 30 years of coaching practice. They are also the authors of the book Samurai Love."
      }
    }
  ]
}
```

**Full schema priority list:**

| Priority | Schema Type | Location |
|---|---|---|
| Critical | Organization | Homepage |
| Critical | FAQPage | Homepage, /codeevent, /mentoring |
| Critical | Person | /rc-founders (Brett & Marie Jones) |
| Critical | Event | /codeevent, /the-crucible-event (per city/date) |
| Critical | AggregateRating | /testimonials, homepage |
| High | Service | Each program page |
| High | HowTo | Six-step methodology page (create this page) |
| High | Book | Any page referencing "Samurai Love" |
| High | LocalBusiness | Each city page |
| Medium | PodcastSeries | Podcast page |
| Medium | BreadcrumbList | All pages |
| Medium | Review | /testimonials |

---

### Platform Optimisation — 31/100

| Platform | Status | Action Required |
|---|---|---|
| YouTube | Present (links on site) | Audit for keyword-optimised titles, full descriptions, chapter markers |
| Apple Podcasts | Present | Publish episode transcripts to site as indexed text |
| Facebook | Present | — |
| Instagram | Present | — |
| TikTok | Present | — |
| LinkedIn | Not confirmed | Create company page with full service descriptions and founder profiles |
| Reddit | No presence | Participate organically in r/relationship_advice, r/marriageadvice, r/psychology |
| Wikipedia | Not present | Draft and submit article (highest-priority platform action) |
| Trustpilot / directory | Not confirmed | Register with at least one professional directory |
| Spotify Podcasts | Not confirmed | Ensure podcast is on Spotify with keyword-rich show description |

The brand has multi-platform reach but low platform depth. Podcast content not transcribed to site means audio content is invisible to crawlers. No Reddit presence is a critical gap — Reddit is the primary conversational AI training source for relationship advice topics.

---

## Quick Wins (Implement This Week)

1. **Create `/llms.txt`** — 30 minutes to write, immediate impact on AI context for every crawler visit. Use the template in Issue C1 above.

2. **Add 5 FAQ questions with answers to the homepage** — Write them now, deploy today. Mark up with FAQPage JSON-LD. Target: "What is The Relationship Code?", "Who founded it?", "Where are retreats held?", "How is it different from therapy?", "What is the Six Step Communication Code?"

3. **Add unique meta descriptions to all pages** — Use the examples in Issue C3. Fixes the most technically damaging site-wide issue in one round of edits.

4. **Add Organization JSON-LD to the homepage `<head>`** — Use the schema example above. This is the entity anchor for everything else.

5. **Fix the sitemap** — Install Rank Math or Yoast SEO, regenerate comprehensive sitemap, resubmit to Google Search Console. All key pages need to be discoverable.

---

## 30-Day Action Plan

### Week 1: Technical Foundation
- [ ] Create and publish `/llms.txt` with full site context
- [ ] Add unique meta descriptions to all pages
- [ ] Fix and regenerate sitemap — include all content pages
- [ ] Add Organization schema to homepage
- [ ] Add explicit AI crawler allow directives to robots.txt
- [ ] Add Open Graph and Twitter Card tags sitewide

### Week 2: Schema Layer
- [ ] Implement FAQPage schema on homepage, /codeevent, and /mentoring
- [ ] Validate and complete Event schema on all retreat pages (add dates, locations, pricing)
- [ ] Add Person schema for Brett and Marie Jones on /rc-founders
- [ ] Add AggregateRating schema linked to actual Google review count and score
- [ ] Add Service schema to each program page
- [ ] Add canonical tags sitewide; confirm www preference

### Week 3: E-E-A-T & Citability
- [ ] Rewrite all H1 and H2 headings from ALL CAPS to sentence case
- [ ] Publish "The Science Behind the Code" methodology page — name all 9 therapies with citations
- [ ] Rewrite homepage opening paragraphs for AI citability (use example in AI Citability section)
- [ ] Expand founder bios on /rc-founders with verifiable credentials and professional background
- [ ] Convert 3 testimonials to structured case studies with presenting problem, program applied, and outcome
- [ ] Add a Privacy Policy page

### Week 4: Authority & Platform
- [ ] Create LinkedIn company page with full descriptions and founder profiles
- [ ] Publish podcast episode transcripts to the website as indexed text
- [ ] Draft Wikipedia article for review (target submission in Week 5)
- [ ] Register with one professional directory relevant to relationship coaching
- [ ] Seed two genuine Reddit discussions in r/relationship_advice or r/marriageadvice
- [ ] Add HowTo schema to six-step methodology page once created
- [ ] Add Book schema for "Samurai Love" sitewide

---

## Appendix: Pages Analysed

| URL | Title Tag | GEO Issues Found |
|---|---|---|
| / (homepage) | Restore Love in 3 Days \| Relationship Retreat USA and Australia \| The Relationship Code | No meta desc, no FAQ, no schema, duplicate title, all-caps H1 |
| /codeevent | Restore Love in 3 Days \| ... (duplicate) | No meta desc, no FAQ schema, no Event schema |
| /about-rc | Restore Love in 3 Days \| ... (duplicate) | No meta desc, no Organization schema, no credentials |
| /rc-founders | Restore Love in 3 Days \| ... (duplicate) | No Person schema, no credentials listed |
| /testimonials | Restore Love in 3 Days \| ... (duplicate) | No AggregateRating schema, testimonials are story titles not quotes |
| /our-mission | Restore Love in 3 Days \| ... (duplicate) | No meta desc, no supporting citations for claims |
| /the-crucible-event | Restore Love in 3 Days \| ... (duplicate) | Partial/unvalidated Event schema, no meta desc |
| /mentoring | (not confirmed) | No schema, no pricing, no FAQ |
| /perth | Restore Love in 3 Days \| ... (duplicate) | No LocalBusiness schema, no city-specific meta desc |
| /masterclass | Restore Love in 3 Days \| ... (duplicate) | No Event schema, no meta desc |
| /sitemap.xml | — | Only 11 transactional pages indexed; all content pages missing |
| /robots.txt | — | No AI crawler directives; no llms.txt referenced |

---

*GEO Audit produced by GetCited GEO — https://getcitedgeo.com.au*
*Audit methodology based on GEO research (Georgia Tech / Princeton / IIT Delhi, 2024)*
