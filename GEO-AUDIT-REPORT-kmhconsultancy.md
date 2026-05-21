# GEO Audit Report: KMH Training & Consultancy Australia

**Audit Date:** 19 May 2026
**URL:** https://kmhconsultancy.com.au
**Business Type:** Agency / Professional Services (RPL Consultancy, Trade Licensing, Education)
**Pages Mapped:** 40 | **Pages Directly Analysed:** 20
**Audited by:** GEO Audit (5-agent parallel analysis)

---

## Executive Summary

**Overall GEO Score: 28/100 — Critical**

KMH Training & Consultancy Australia is effectively invisible to AI systems. Despite having a functioning WordPress site with real service content, every major signal that AI systems (ChatGPT, Claude, Perplexity, Gemini) use to discover, trust, and cite a business is either absent or critically underbuilt: there is no structured data of any kind, no llms.txt file, no About Us page, no named authors, no government source citations, and no verified presence on any platform AI models train on or reference (LinkedIn, Wikipedia, Google Business Profile, review platforms). The site scores highest on Technical GEO because AI crawlers are not blocked and content is server-side rendered — but that access advantage is wasted without the substance AI systems need once they arrive. The three highest-leverage fixes — Rank Math schema configuration, llms.txt deployment, and a Google Business Profile — can each be implemented within a day and together would lift the score by an estimated 15–20 points.

---

## Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 38/100 | 25% | 9.50 |
| Brand Authority | 22/100 | 20% | 4.40 |
| Content E-E-A-T | 28/100 | 20% | 5.60 |
| Technical GEO | 42/100 | 15% | 6.30 |
| Schema & Structured Data | 2/100 | 10% | 0.20 |
| Platform Optimization | 15/100 | 10% | 1.50 |
| **Overall GEO Score** | | | **27.5/100** |

### Score Interpretation

| Range | Rating |
|---|---|
| 90–100 | Excellent |
| 75–89 | Good |
| 60–74 | Fair |
| 40–59 | Poor |
| **0–39** | **Critical ← KMH is here** |

---

## Critical Issues — Fix Immediately

### 1. Zero schema markup sitewide
**All 20 pages analysed returned no JSON-LD, no Microdata, no RDFa.** Rank Math SEO is installed and fully capable of generating schema but has never been configured. AI systems cannot identify the business entity, its services, or its location from structured data. This is the single most damaging technical gap on the site.

- **Fix:** Open Rank Math → Titles & Meta → Global Settings → set site type to "Local Business" and enter NAP data. Deploys Organization + LocalBusiness schema sitewide in under 30 minutes.

### 2. No llms.txt file
**https://kmhconsultancy.com.au/llms.txt returns 404.** This is the primary GEO-specific file that AI assistants (Perplexity, Claude, emerging standard) look for to understand a site's services, authority, and content priorities. Without it, AI crawlers must guess.

- **Fix:** Create and upload `/llms.txt` using the full template provided in the Technical GEO section below. Estimated 30 minutes.

### 3. No About Us page — both /about/ and /about-us/ return 404
**AI systems querying "who is KMH Consultancy" have no page to land on.** This is the primary on-site entity anchor. Google's Search Quality Evaluator Guidelines explicitly flag absence of "who is responsible for this website" as a low-quality signal. Every AI system that attempts to build a knowledge graph of this business hits a dead end.

- **Fix:** Publish /about-us/ with company founding story, named team members, credentials, RTO partner names, and Organization schema. This is a same-week priority.

### 4. Zero external source citations across all content
**Not one page links to ASQA, NSW Fair Trading, the Home Building Act, Home Affairs, PRISMS, or any government or regulatory body.** AI systems use source credibility as a core trust signal. Content advising on licensing and visas with no government citations is treated as low-trust and bypassed in favour of sites that do cite authoritative sources.

- **Fix:** Add at least one hyperlink to a relevant government source per content page. See the E-E-A-T section for page-by-page recommendations.

### 5. No named authors or human identity on any page
**Every page is attributed to "KMH Training & Consultancy Australia" with no byline.** For regulated professional services (migration, trade licensing, vocational training), anonymous content is treated as low-trust by AI systems. Google's E-E-A-T framework and AI citation models both weight author credentials heavily.

- **Fix:** Add a named author with credentials to all blog posts and service pages. Author bio template provided in the E-E-A-T section below.

---

## High Priority Issues — Fix Within 1 Week

### 6. No Google Business Profile (or unverified)
No verified GBP means no Google Knowledge Panel, no local pack eligibility, and no Gemini/AI Overview local citations. The site displays 5-star Google reviews on the homepage but there is no confirmed verified GBP behind them. This is the highest-impact single action for brand authority.

### 7. No LinkedIn company page
LinkedIn is crawled by Bing (used by ChatGPT) and Perplexity for professional entity recognition. KMH has no company page. Even a minimal, complete LinkedIn profile would materially increase AI entity recognition.

### 8. FAQPage schema missing from pages that already have FAQ sections
The RPL Certification page, Trade License Sydney page, Student Visas page, and homepage all contain FAQ sections in plain HTML. Rank Math can convert these to FAQPage schema per-page with no coding. These Q&A pairs would then be directly extractable by AI answer engines and eligible for Google rich snippets.

### 9. No Open Graph or Twitter Card meta tags
Zero social sharing meta tags detected across all pages. Every share on Facebook, LinkedIn, or WhatsApp (the primary contact channel for this audience) produces an unformatted naked link. This also reduces how AI systems perceive brand representation when encountering the site via social signals.

### 10. Thin content on key pages — /what-is-rpl/ (350 words), /how-to-get-a-trade-license-in-nsw/ (650 words), /how-to-get-a-builder-license-in-nsw/ (estimated <700 words)
These three pages target some of the highest-value informational queries in the RPL and trade licensing space. Their word counts are below the minimum threshold for AI citation consideration. The trade license NSW page in particular competes against the much stronger /trade-license-sydney/ page (~3,500 words), creating internal keyword cannibalism.

### 11. No ProductReview.com.au listing
Australia's primary consumer review platform has no KMH listing. AI systems regularly cite ProductReview.com.au for Australian service businesses. Absence means no third-party review citations are possible.

### 12. ELICOS benefits blog post is dangerously thin (~280 words)
This page covers CRICOS courses and student visas — regulated services with legal implications. 280 words is shorter than a LinkedIn post. For AI citability, this page effectively does not exist.

---

## Medium Priority Issues — Fix Within 1 Month

### 13. Partial/no AI crawler explicit directives in robots.txt
All AI crawlers are currently allowed by default (no blocking), which is correct. However, no explicit `User-agent: GPTBot / Allow: /` style directives exist. Adding explicit cooperation signals is a low-effort trust upgrade.

### 14. No hreflang for Turkish-language pages
The site has `/turk-avukat-sydney/` and `/turkce-hizmetler-sydney/` (Turkish-language pages) with no `hreflang="tr"` tags. This confuses crawlers about language targeting and may suppress these pages in Turkish-language AI queries.

### 15. No BreadcrumbList schema
The nested URL structure (`/rpl-certification/healthcare-rpl-qualifications/`) implies hierarchy but has no visual breadcrumbs or BreadcrumbList schema. This is both a UX gap and a structured data gap.

### 16. No YouTube channel or video content
No KMH YouTube channel was identified. RPL explainer videos and trade license walkthrough guides would generate citations on a platform AI systems heavily index, while also driving referral traffic from a high-intent audience.

### 17. No Wikipedia page
Wikipedia is the single most cited source by AI systems for entity recognition. While creating and sustaining a Wikipedia article requires notability criteria to be met, building toward this — via media mentions, third-party citations, and industry directory listings — should be a medium-term authority goal.

### 18. Blog corpus is too small — 7 posts total across 2+ years
A multi-service consultancy covering RPL, trade licensing, ELICOS, CRICOS, and migration visas with 7 blog posts signals a dormant content programme to AI systems that weight recency and volume. A minimum cadence of 2 posts per month across the active service categories is needed.

### 19. No EducationalOrganization schema on ELICOS and CRICOS pages
The site offers CRICOS and ELICOS-related services, which are educational products. EducationalOrganization or EducationalOccupationalProgram schema would better align these pages with how AI systems categorize education providers.

### 20. Dual ABN name creates entity confusion
The ABR shows the entity registered under both "KMH Training & Consultancy Australia" and "KMH Digital Marketing Australia." This dual-name registration may confuse AI entity resolution systems trying to establish what the business does.

---

## Low Priority Issues — Optimise When Possible

- Some blog posts have visible publication dates (Nov 2023) but no "Last Updated" dates — freshness signals matter for AI trust on regulatory content
- No Review/AggregateRating schema — if testimonials exist, structured markup would lift AI citation probability
- No Article/BlogPosting schema on any of the 7 blog posts (author, datePublished, publisher all missing)
- WhatsApp as primary contact channel is not indexable; a prominent phone number and email are preferable for entity schema
- No Service schema on the 12+ RPL qualification category pages

---

## Category Deep Dives

### AI Citability — 38/100

The site's content has the right structural instincts (FAQ sections, step-by-step processes, definition blocks) but poor execution. The trade license page is the strongest asset, with specific fee data ($378/$755/$1,160 for 1/3/5-year licences) and 17 trade categories listed — this is the kind of precise, quotable data AI systems can surface directly. However, across all other pages, the dominant pattern is promotional language with imprecise timeframes ("several weeks," "within weeks") and zero external source attribution.

**Highest-value pages for AI citability:**
- `/trade-license-sydney/` — best page on the site; ~3,500 words, specific fee data, 9 FAQ questions, 17 trade types. Still needs government citations and FAQPage schema.
- `/rpl-certification-in-nsw/` — definition blocks present ("What Is RPL Certification In NSW?"), 10 FAQ questions. Needs expansion and schema.
- `/student-visas/` — specific visa subclass numbers (500, 590, 407, 485, 417, 462, 600), duration, work rights listed. Needs Home Affairs citations.

**Example rewrite for AI citability:**

*Current (/rpl-certification-in-nsw/):*
> "the process of recognising your existing skills, work experience, and industry knowledge to help you obtain a nationally recognised qualification without studying from the beginning."

*Rewritten:*
> Recognition of Prior Learning (RPL) is a formal assessment process under the Australian Qualifications Framework (AQF) by which a Registered Training Organisation (RTO) evaluates a candidate's existing skills, work history, and industry knowledge against the competency standards of a nationally recognised qualification. Rather than completing full coursework, the applicant submits evidence — such as payslips, job cards, employer references, and photographic documentation — demonstrating they already meet the qualification outcomes. Under the AQF, RPL must be offered by all RTOs as an option to eligible applicants (AQF Second Edition, January 2013, Section 9.3).

---

### Brand Authority — 22/100

KMH's brand is essentially unrecognized by AI entity systems. The ABN is active (47 862 232 276, registered March 2023), the NAP is consistent across the website, and Google reviews are displayed — but virtually every external signal AI systems use for entity recognition is absent.

**Platform presence map:**

| Platform | Status | Notes |
|---|---|---|
| Wikipedia | Absent | No page exists |
| LinkedIn | Absent | No company page |
| Reddit | Not detected | No indexed mentions found |
| Google Business Profile | Unverified | Reviews displayed on site but GBP not confirmed |
| YouTube | Absent | No channel identified |
| ProductReview.com.au | Absent | No listing |
| Trustpilot | Absent | No listing |
| Facebook | Partial | Page exists but not publicly crawlable |
| Instagram | Present | @kmhtrainingandconsultancy active |
| Training.gov.au (RTO register) | N/A | Not an RTO; correct |
| ABR | Present | Active ABN, GST registered |

**Note on entity structure:** The ABR lists the entity as an Individual/Sole Trader under the personal name AKAN, MERAL. For a business providing professional services in regulated sectors (migration, licensing, education), presenting as a formally incorporated entity (Pty Ltd) would materially improve perceived institutional authority to both clients and AI systems.

---

### Content E-E-A-T — 28/100

| Dimension | Score | Notes |
|---|---|---|
| Experience | 4/25 | No case studies, client outcomes, or practitioner stories anywhere |
| Expertise | 8/25 | ABN, RTO disclaimer, physical address present — but no named staff or qualifications |
| Authoritativeness | 7/25 | No About Us page, no external citations, no industry body references |
| Trustworthiness | 9/25 | ABN displayed, address visible, Google reviews mentioned — but no author names or verifiable credentials |

The trade license page (~3,500 words) shows topical depth but every other blog post is too thin to demonstrate expertise. The ELICOS benefits article (~280 words) is the most concerning: it covers a regulated service and provides effectively no substantive guidance.

**Author bio template to implement on all content pages:**

```
[Full Name]
[Title] at KMH Training & Consultancy Australia

[Full Name] has [X] years of experience in [RPL assessment / NSW trade licensing / international student admissions]. 
[He/She/They] holds [relevant qualification, e.g. Certificate IV in Training and Assessment TAE40122] and has 
assisted over [number] clients successfully [obtain RPL certifications / secure NSW trade licences / enrol in 
CRICOS-registered programs] across [industries/states].

Prior to KMH, [he/she/they] worked as [previous role] at [previous organisation], where [specific experience].

[If applicable: [Full Name] is registered with [MARA No. XXXXXXX] / is a member of [Master Builders NSW / NEAS].]

Reviewed by: [Second name, Title] — [Date of last review]
```

---

### Technical GEO — 42/100

The technical foundation is adequate: HTTPS enforced, content is server-side rendered (AI crawlers can read all content without executing JavaScript), the sitemap is clean and freshly updated (2026-05-18), and all AI crawlers have open access. The site earns baseline points for these fundamentals.

However, the technical GEO layer that matters most — structured data, llms.txt, and meta tags — is entirely absent.

**Technical checklist:**

| Item | Status | Priority |
|---|---|---|
| HTTPS | ✅ Pass | — |
| robots.txt present | ✅ Pass | — |
| AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot) | ✅ Pass (implicit) | — |
| Server-side rendered content | ✅ Pass | — |
| XML sitemap | ✅ Pass | — |
| Sitemap in robots.txt | ✅ Pass | — |
| No noindex blocks | ✅ Pass | — |
| llms.txt | ❌ 404 | Critical |
| Any JSON-LD schema | ❌ None | Critical |
| LocalBusiness/Organization schema | ❌ None | Critical |
| FAQPage schema | ❌ None | High |
| Article/BlogPosting schema | ❌ None | High |
| Open Graph tags | ❌ Not detected | High |
| Twitter Card meta | ❌ Not detected | Medium |
| Canonical tags | ⚠️ Unverified | Medium |
| Hreflang (Turkish pages) | ❌ Missing | Medium |
| BreadcrumbList schema | ❌ None | Medium |
| Explicit AI bot allow directives | ⚠️ Implicit only | Low |

**llms.txt — ready to deploy:**

```
# KMH Training & Consultancy Australia

> KMH Training & Consultancy Australia (ABN 47 862 232 276) is a specialist RPL certification 
consultancy and education services provider based in Carlton, NSW. We help skilled workers across 
Australia obtain formal recognition of their existing skills through Recognition of Prior Learning (RPL), 
and assist with trade licensing, ELICOS courses, CRICOS enrolments, and Australian student visas.

## About

KMH Consultancy operates Australia-wide with expertise across RPL for trades, healthcare, hospitality, 
engineering, business, social work, commercial cookery, horticulture, security, real estate, beauty, 
and training industries. Services available in NSW, VIC, QLD, WA, SA, TAS, NT, and ACT.

Contact: 1300 003 518 | info@kmhconsultancy.com.au
Address: Suite 201 / 77 Edward Street, Carlton NSW 2218
WhatsApp: +61 410 100 867

## Core Services

- [RPL Certification Australia](https://kmhconsultancy.com.au/rpl-certification/)
- [RPL Certification NSW](https://kmhconsultancy.com.au/rpl-certification-in-nsw/)
- [RPL Certification VIC](https://kmhconsultancy.com.au/rpl-certification-in-victoria/)
- [RPL Certification WA](https://kmhconsultancy.com.au/rpl-certification-in-wa/)
- [RPL Certification ACT](https://kmhconsultancy.com.au/rpl-certification-in-act/)
- [RPL Certification SA](https://kmhconsultancy.com.au/rpl-certification-in-sa/)
- [RPL Certification TAS](https://kmhconsultancy.com.au/rpl-certification-in-tasmania/)
- [RPL Certification NT](https://kmhconsultancy.com.au/rpl-certification-in-nt/)
- [Trade License NSW](https://kmhconsultancy.com.au/trade-license-sydney/)
- [Student Visas Australia](https://kmhconsultancy.com.au/student-visas/)
- [ELICOS Courses](https://kmhconsultancy.com.au/affordable-elicos-course/)

## RPL Qualification Categories

- [Trades RPL](https://kmhconsultancy.com.au/rpl-certification/trade-rpl-qualifications/)
- [Healthcare RPL](https://kmhconsultancy.com.au/rpl-certification/healthcare-rpl-qualifications/)
- [Engineering RPL](https://kmhconsultancy.com.au/rpl-certification/engineering-rpl-qualifications/)
- [Hospitality RPL](https://kmhconsultancy.com.au/rpl-certification/hospitality-rpl-qualifications/)
- [Commercial Cookery RPL](https://kmhconsultancy.com.au/rpl-certification/commercial-cookery-rpl-qualifications/)
- [Business RPL](https://kmhconsultancy.com.au/rpl-certification/business-rpl-qualifications/)
- [Social Work RPL](https://kmhconsultancy.com.au/rpl-certification/social-work-rpl-qualifications/)
- [Security RPL](https://kmhconsultancy.com.au/rpl-certification/security-rpl-qualifications/)
- [Real Estate RPL](https://kmhconsultancy.com.au/rpl-certification/real-estate-rpl-qualifications/)
- [Beauty RPL](https://kmhconsultancy.com.au/rpl-certification/beauty-rpl-qualifications/)
- [Horticulture RPL](https://kmhconsultancy.com.au/rpl-certification/horticulture-rpl-qualifications/)
- [Training RPL](https://kmhconsultancy.com.au/rpl-certification/training-rpl-qualifications/)

## Educational Content

- [What is RPL?](https://kmhconsultancy.com.au/what-is-rpl/)
- [How to Get a Trade License in NSW](https://kmhconsultancy.com.au/how-to-get-a-trade-license-in-nsw/)
- [How to Get a Builder License in NSW](https://kmhconsultancy.com.au/how-to-get-a-builder-license-in-nsw/)
- [Types of Trade Licenses in Australia](https://kmhconsultancy.com.au/understand-the-different-types-of-trade-licenses/)
- [Role of a Trade License Consultant](https://kmhconsultancy.com.au/the-role-of-trade-license-consultant/)
- [Benefits of Working with an ELICOS Agent](https://kmhconsultancy.com.au/benefits-of-working-with-an-elicos-agent/)
- [Blog](https://kmhconsultancy.com.au/blog/)

## Contact

- [Contact Us](https://kmhconsultancy.com.au/contact-us/)
- [Privacy Policy](https://kmhconsultancy.com.au/privacy-policy/)
```

---

### Schema & Structured Data — 2/100

Zero structured data of any kind across all 20 pages analysed. No JSON-LD, no Microdata, no RDFa. No Open Graph tags. No Twitter Cards. Rank Math SEO is installed and capable of generating all required schema types automatically — the infrastructure exists but has never been activated. This is a single configuration session away from being substantially remediated.

**Schema types needed:**

| Schema Type | Priority | Pages | Status |
|---|---|---|---|
| Organization + LocalBusiness | Critical | All pages (sitewide) | Missing |
| FAQPage | Critical | RPL, Trade License, Student Visas, Homepage | Missing |
| Service | High | All service pages (27 pages) | Missing |
| Article / BlogPosting | High | All 7 blog posts | Missing |
| BreadcrumbList | High | All nested pages | Missing |
| WebSite + SearchAction | Medium | Homepage | Missing |
| Open Graph (og:) | High | All pages | Missing |
| EducationalOrganization | Medium | ELICOS, CRICOS pages | Missing |
| Person (author) | Low | All blog posts | Missing |

**Ready-to-use Organization + LocalBusiness JSON-LD** (paste into Rank Math or `<head>` of every page):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://kmhconsultancy.com.au/#organization",
      "name": "KMH Training & Consultancy Australia",
      "url": "https://kmhconsultancy.com.au",
      "description": "KMH Training & Consultancy Australia provides RPL certification, trade license applications, ELICOS courses, CRICOS courses, and student visa guidance across Australia.",
      "telephone": "1300003518",
      "email": "info@kmhconsultancy.com.au",
      "vatID": "47 862 232 276",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 201/77 Edward Street",
        "addressLocality": "Carlton",
        "addressRegion": "NSW",
        "postalCode": "2218",
        "addressCountry": "AU"
      },
      "areaServed": {"@type": "Country", "name": "Australia"},
      "sameAs": [
        "https://www.facebook.com/kmhconsultancy",
        "https://www.instagram.com/kmhtrainingandconsultancy"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://kmhconsultancy.com.au/#website",
      "url": "https://kmhconsultancy.com.au",
      "name": "KMH Training & Consultancy Australia",
      "publisher": {"@id": "https://kmhconsultancy.com.au/#organization"},
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://kmhconsultancy.com.au/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

---

### Platform Optimization — 15/100

KMH has Instagram and Facebook profiles, with Instagram appearing active (@kmhtrainingandconsultancy). Beyond this, there is no meaningful presence on the platforms AI systems draw from most heavily: LinkedIn, YouTube, Reddit, Wikipedia, Google Business Profile, and Australian consumer review platforms. The practical result is that when AI systems are asked "who provides RPL certification in NSW?" or "best trade licence consultants in Sydney?", KMH has no third-party signals to pull from and will not appear in AI-generated answers.

---

## Quick Wins — Implement This Week

These five actions require no new content creation, minimal technical skill, and can be completed within 1–2 business days. Together they would lift the GEO score by an estimated 15–22 points.

1. **Configure Rank Math LocalBusiness schema sitewide (30 minutes)** — Rank Math → Titles & Meta → Global Settings → Local Business. Enter NAP data from the contact page. Deploys Organization + LocalBusiness JSON-LD to every page immediately. The JSON-LD template above is ready to paste.

2. **Create and upload /llms.txt (30 minutes)** — Copy the template from the Technical GEO section above, create the file, and upload it to the domain root. This is a static text file requiring no CMS interaction.

3. **Add FAQPage schema to the three main service pages via Rank Math (2 hours)** — /rpl-certification/, /trade-license-sydney/, and /student-visas/ all have FAQ content. In the WordPress editor for each page, open the Rank Math schema block and add FAQPage schema with the Q&A pairs already on the page.

4. **Create and verify Google Business Profile (1 hour + verification wait)** — Go to business.google.com, create the listing for "KMH Training & Consultancy Australia" at Suite 201/77 Edward Street, Carlton NSW 2218. Request postcard verification. This is the single highest-impact brand authority action.

5. **Enable Open Graph meta tags in Rank Math (15 minutes)** — Rank Math → Titles & Meta → enable social meta tags. Upload a default 1200×630 social sharing image. All pages then auto-generate og:title, og:description, and og:image.

---

## 30-Day Action Plan

### Week 1: Technical Foundations (Zero Content Required)
- [ ] Configure Rank Math LocalBusiness schema sitewide (30 min)
- [ ] Create and upload `/llms.txt` to domain root (30 min)
- [ ] Add FAQPage schema to /rpl-certification/, /trade-license-sydney/, /student-visas/ via Rank Math (2 hrs)
- [ ] Enable Open Graph + Twitter Card meta tags in Rank Math (15 min)
- [ ] Add BreadcrumbList schema to nested RPL category pages via Rank Math (1 hr)
- [ ] Add Article schema to all 7 blog posts via Rank Math (1 hr)
- [ ] Add explicit AI crawler allow rules to robots.txt (`User-agent: GPTBot` + `Allow: /` etc.) (15 min)
- [ ] Add hreflang tags to /turk-avukat-sydney/ and /turkce-hizmetler-sydney/ (30 min)

### Week 2: Brand Entity Building
- [ ] Create and verify Google Business Profile listing for Carlton NSW location
- [ ] Create LinkedIn company page — full profile with description, services, location, ABN
- [ ] Publish /about-us/ page: founding story, team names and credentials, RTO partner names, Organization schema
- [ ] Create ProductReview.com.au business listing
- [ ] Ask the 5-star reviewers named on homepage (Sam Maq, Tom Jung, etc.) to post reviews to GBP and ProductReview

### Week 3: Content Quality Upgrades
- [ ] Add named author byline + credentials bio to all 7 blog posts
- [ ] Add one government source citation per content page (ASQA, Fair Trading NSW, Home Affairs)
- [ ] Rewrite /what-is-rpl/ from 350 words to 1,500+ words with AQF citations and FAQ section
- [ ] Expand /benefits-of-working-with-an-elicos-agent/ from 280 words to 1,200+ words with Home Affairs citations
- [ ] Add "Last Updated" dates to all blog posts (especially the Nov 2023 posts)
- [ ] Rewrite all H2 headings on blog posts to match natural question phrasing (e.g., "What qualifications do I need for a NSW trade licence?")

### Week 4: Content Authority & Depth
- [ ] Rewrite /how-to-get-a-trade-license-in-nsw/ from 650 words to 2,500+ words with NSW Fair Trading fee tables and specific processing timelines
- [ ] Rewrite /how-to-get-a-builder-license-in-nsw/ to full comprehensive guide (2,000+ words)
- [ ] Publish a new high-value article: "RPL Certification in Australia: Key Statistics and Requirements 2026" with sourced NCVER and ASQA data
- [ ] Set up YouTube channel and publish one RPL explainer video (what is RPL, who qualifies, what evidence is needed)
- [ ] Begin process for creating a Wikipedia article (requires establishing notability through media mentions first — identify 3 target Australian media or industry publications to pitch)

---

## Appendix: Pages Analysed

| URL | Status | Key Issues |
|---|---|---|
| https://kmhconsultancy.com.au/ | 200 | No schema, no author, no external citations |
| https://kmhconsultancy.com.au/rpl-certification/ | 200 | No schema, no author, FAQ needs FAQPage markup |
| https://kmhconsultancy.com.au/trade-license-sydney/ | 200 | Best page on site; still needs schema and government citations |
| https://kmhconsultancy.com.au/what-is-rpl/ | 200 | 350 words — critically thin |
| https://kmhconsultancy.com.au/contact-us/ | 200 | No LocalBusiness schema despite full NAP present |
| https://kmhconsultancy.com.au/student-visas/ | 200 | Good visa subclass data; needs Home Affairs citations + schema |
| https://kmhconsultancy.com.au/rpl-certification-in-nsw/ | 200 | Good definition blocks; needs expansion and schema |
| https://kmhconsultancy.com.au/how-to-get-a-trade-license-in-nsw/ | 200 | 650 words — too thin for target query |
| https://kmhconsultancy.com.au/how-to-get-a-builder-license-in-nsw/ | 200 | Thin blog post vs. needed comprehensive guide |
| https://kmhconsultancy.com.au/the-role-of-trade-license-consultant/ | 200 | 650–700 words, no citations, no author |
| https://kmhconsultancy.com.au/benefits-of-working-with-an-elicos-agent/ | 200 | 280 words — critically thin for regulated service |
| https://kmhconsultancy.com.au/understand-the-different-types-of-trade-licenses/ | 200 | 800–900 words, generic categorisation, no citations |
| https://kmhconsultancy.com.au/about/ | 404 | Missing — critical E-E-A-T gap |
| https://kmhconsultancy.com.au/about-us/ | 404 | Missing — critical E-E-A-T gap |
| https://kmhconsultancy.com.au/llms.txt | 404 | Missing — critical GEO infrastructure gap |
| https://kmhconsultancy.com.au/robots.txt | 200 | No AI-specific directives; otherwise adequate |
| https://kmhconsultancy.com.au/sitemap_index.xml | 200 | Well-structured; 3 child sitemaps, freshly updated |
| https://kmhconsultancy.com.au/rpl-certification/healthcare-rpl-qualifications/ | 200 | No schema; no breadcrumbs |
| https://kmhconsultancy.com.au/privacy-policy/ | 200 | Present — positive trust signal |
| https://kmhconsultancy.com.au/rpl-certification-in-victoria/ | 200 | State RPL page — no schema |

**Fetch failures / not analysed:** CRICOS courses page, multiple state RPL pages (WA, SA, TAS, NT, ACT), Turkish-language pages, category archive pages.

---

*GEO Audit conducted 19 May 2026. Scores reflect conditions at time of audit. Re-audit recommended after implementing Week 1–2 actions.*
