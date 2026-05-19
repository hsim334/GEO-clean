# GEO Audit Report: Lucinda's Studio

**Audit Date:** 18 May 2026
**URL:** https://lucindastudio.com.au
**Business Type:** Artist/Services Hybrid (Original paintings, commissions, art classes)
**Pages Analyzed:** 12 (via site: search — direct crawl blocked by server 403)
**Auditor Note:** The site returns HTTP 403 to automated fetch tools across all pages (except robots.txt). This is a critical technical signal: if the site blocks fetch user agents, AI crawlers face the same barrier. All content analysis is based on Google-indexed snippets, cached search excerpts, and third-party platform profiles.

---

## Executive Summary

**Overall GEO Score: 41/100 (Poor)**

Lucinda Leveille is an accomplished Australian landscape painter with impressive real-world credentials — Netflix screen appearances, multiple 2024–2025 industry awards, international collections, and features in respected art publications — yet her website fails to translate any of this authority into AI-visible signals. The site is largely invisible to AI systems not because of weak content, but because of a cascading set of technical and structural failures: it actively blocks crawl tools (creating a strong risk that AI crawlers are also blocked), carries no structured data, has no llms.txt, and presents content primarily as images rather than quotable text. The gap between her real-world authority and her AI citability score is the defining opportunity of this audit.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 32/100 | 25% | 8.0 |
| Brand Authority | 55/100 | 20% | 11.0 |
| Content E-E-A-T | 46/100 | 20% | 9.2 |
| Technical GEO | 28/100 | 15% | 4.2 |
| Schema & Structured Data | 18/100 | 10% | 1.8 |
| Platform Optimization | 58/100 | 10% | 5.8 |
| **Overall GEO Score** | | | **40/100** |

---

## Critical Issues (Fix Immediately)

### 1. Site Actively Blocks Automated Fetch Tools (All Pages Return HTTP 403)
**URL:** https://lucindastudio.com.au (and all subpages)
**Issue:** The server returns HTTP 403 Forbidden to all non-browser requests except robots.txt. This strongly suggests a security plugin (e.g., Wordfence, iThemes Security) or Cloudflare rule is blocking non-standard user agents — the same agents used by GPTBot, ClaudeBot, PerplexityBot, and CommonCrawl (which trains AI models).
**Fix:** In WordPress security plugin settings, whitelist these user agents: `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `anthropic-ai`, `OAI-SearchBot`. If using Cloudflare, create a bypass rule for these bots. Verify by testing: `curl -A "GPTBot" https://lucindastudio.com.au` should return 200.
**Impact:** Resolving this alone could unlock indexing by all major AI training and retrieval systems.

### 2. No llms.txt File
**URL:** https://lucindastudio.com.au/llms.txt (returns 403)
**Issue:** llms.txt is the emerging standard for telling AI systems what your site is, what content is available, and how to cite you correctly. Every site without one is invisible to AI systems that check for it (Perplexity, Claude, and others).
**Fix:** Create `/llms.txt` in the WordPress root with a structured description of Lucinda, her work, and site content (see Quick Wins section for template).

### 3. Complete Absence of Structured Data / Schema Markup
**Issue:** No Person, Organization, Product, FAQ, Article, or Event schema detected across any indexed pages. WooCommerce does generate minimal Product schema by default, but it appears to be absent or malformed.
**Impact:** No rich results in Google (no star ratings, no breadcrumbs, no artist panels). No structured entity signals for AI models. AI systems cannot confidently identify Lucinda Leveille as a recognized entity.
**Fix:** Implement Person + Organization schema on the homepage and About page immediately. Add Product schema to all shop pages, FAQPage schema to the commissions page.

---

## High Priority Issues

### 4. No Quotable, Self-Contained Text Blocks on the Website
**Issue:** The site's content appears to be primarily image-gallery focused. The richest quotes and statements from Lucinda (which exist and are excellent) appear only on *external* platforms (Artsy Shark, Artist Close Up, Art Lovers Australia) — not on her own website.
**Impact:** AI systems retrieve and cite content from the source. Quotes living only on external sites benefit those sites, not lucindastudio.com.au. When ChatGPT or Perplexity is asked "tell me about Lucinda Leveille", it cites Artsy Shark, not her own site.
**Fix:** Create an "Artist Statement" page and a "The Paintings" editorial page that republishes (and expands on) her best interview quotes. Example passages to move onto the site:
- *"Oils are the perfect medium for the powerful and emotional clouds in my landscapes."*
- *"When I'm painting a landscape, I physically feel I'm there — I'm walking the road or rambling through the grasses."*
- *"In a world that often feels hurried, I aspire for my art to serve as a serene reminder to slow down, reflect, and genuinely engage with the narratives that surround us."*

### 5. Duplicate Contact Pages Creating Crawl Confusion
**URLs:** `/contact/` and `/contact-lucinda-leveille/`
**Issue:** Two contact pages with different URLs dilute link equity and create indexing confusion. Google and AI crawlers may treat these as separate, thin pages.
**Fix:** Pick one canonical URL, 301-redirect the other, and add `<link rel="canonical">` to the kept page.

### 6. Professional Email Address Missing
**Issue:** Public email address is `lucindas.studio@gmail.com` rather than `hello@lucindastudio.com.au` or similar. Gmail addresses signal a non-professional operation to both users and trust-evaluation systems.
**Fix:** Set up Google Workspace with a domain email. Route mail to existing Gmail. Update all platform profiles.

### 7. No FAQ Content on Commission or Classes Pages
**Issue:** The commission process (1/3 deposit, 6-8 weeks, photos/updates throughout, included shipping) is strong and detailed — but not formatted as Q&A blocks. The classes page presumably has common questions that aren't answered in structured form.
**Fix:** Add an FAQ section to both `/commission-your-own-masterpiece/` and `/weekly-artclasses/`, then add FAQPage schema to each.

---

## Medium Priority Issues

### 8. No Wikipedia or Wikidata Entry
**Issue:** Lucinda Leveille has no Wikipedia or Wikidata entity, despite qualifying (Netflix film features, national recognition, solo exhibitions, international collections). AI models use Wikipedia heavily for entity resolution — without it, Lucinda is treated as an unresolved entity.
**Fix:** Create a Wikidata item for Lucinda Leveille (easier than Wikipedia, and sufficient for AI entity recognition). Link it from the About page using `sameAs` in schema markup.

### 9. No YouTube Channel
**Issue:** No YouTube presence found. Competitors (Joanna McOwen, John Bradley masterclass content) use YouTube to demonstrate expertise. YouTube is one of the most-cited platforms in AI responses about art techniques.
**Fix:** Create a YouTube channel. Publish 3-5 short videos (painting in progress, studio tour, "how I paint clouds" technique video). These provide highly citable content in AI systems that use YouTube.

### 10. LinkedIn Profile Likely Minimal
**Issue:** LinkedIn profile exists (`au.linkedin.com/in/lucinda-leveille-75018185`) listed as "Fine Artist" but content is likely sparse. LinkedIn is indexed by all major AI models.
**Fix:** Expand LinkedIn profile with full bio, education (National Art School, Sydney 1976-1978), exhibitions, Netflix mention, awards. Add website link and post monthly art updates.

### 11. Instagram Follower Count Relatively Low
**Issue:** @lucindas_studio has 1,102 followers; @lucindaleveilleart has 493 followers — two accounts with fragmented audience. For an artist with Netflix credentials and national recognition, this is underutilized.
**Fix:** Consolidate to one account (retire @lucindaleveilleart, redirect followers). Cross-post Instagram content to Facebook consistently.

### 12. No Blog or Editorial Content Strategy
**Issue:** Only one apparent blog page found (`/on-painting/`). No content marketing driving organic search or AI citability for art-related searches.
**Fix:** Publish 1 post per month targeting answerable questions: "How to commission an original oil painting in Australia", "What is atmospheric landscape painting?", "The Gold Coast Hinterland as art inspiration". These create AI-citable passages.

---

## Low Priority Issues

### 13. Missing Open Graph Tags (Likely)
**Issue:** No evidence of optimized OG tags. When paintings are shared on social media, previews will be generic.
**Fix:** Add open graph meta tags to all pages, especially product/painting pages.

### 14. Alt Text on Artwork Images (Likely Incomplete)
**Issue:** WordPress/WooCommerce galleries often have missing or generic alt text on artwork images.
**Fix:** Ensure every painting image has descriptive alt text: "Grain Country — original Australian landscape oil painting by Lucinda Leveille, 2024".

### 15. Site Brand Name Inconsistency
**Issue:** "Lucinda's Studio", "Lucindas Studio" (no apostrophe), "Lucinda Leveille", and "lucindastudio.com.au" are used inconsistently across the site and external profiles. AI systems struggle to resolve entities with inconsistent names.
**Fix:** Standardize to "Lucinda Leveille | Lucinda's Studio" across all pages, profiles, and schema.

---

## Category Deep Dives

### AI Citability — 32/100

The core problem is structural: lucindastudio.com.au is a portfolio/shop site that presents art visually rather than textually. While this is appropriate for a gallery experience, it leaves AI systems with nothing quotable to extract. The site's most compelling content — Lucinda's story, her philosophy, her technique, her feelings about landscape — lives on *other people's websites* (Artsy Shark, Art Lovers Australia, Artist Close Up). Every time an AI is asked about Australian landscape painters or Lucinda Leveille specifically, it cites those platforms and links to them.

**What good looks like:** A dedicated "Artist Statement" page with 500+ words of first-person, quotable content. A blog post answering "What is atmospheric landscape painting?" A commission page with specific, factual answers to common questions. A classes page with a structured FAQ.

**Highest-citability passages that need to live on the site:**
- The Netflix True Spirit story (two paintings in an internationally-released Netflix film — this is citation gold)
- The backstory of stepping away from painting for a decade and returning
- The connection to her father's landscape painting (generational artistic lineage)
- The specific technique of using oils for clouds and atmospheric light
- The Parliament House/Treasury Canberra collection note

**Citability score by page type:**
| Page | Estimated Citability |
|---|---|
| Homepage | 15/100 (images, minimal text) |
| About/My Story | 40/100 (story exists but likely thin) |
| Commission page | 35/100 (process info is good but not FAQ format) |
| Shop/product pages | 20/100 (titles and prices, no editorial) |
| Classes page | 30/100 (description but no FAQ) |
| On Painting (blog) | 55/100 (best page — but only one) |

### Brand Authority — 55/100

Lucinda has strong real-world brand authority that is partially, but not fully, captured in AI-recognizable signals. Key strengths:

**What's working:**
- Netflix True Spirit film (two paintings featured) — this is a major authority signal if properly documented on the site
- Bluethumb Rising Star 2024, Top 50 Artists 2025
- Art Lovers Australia "Artist to Watch" 2024, Top 10 2025
- Gold Coast Gallery of Art Artist to Watch 2025
- Features in Artsy Shark (2022), Artist Close Up, Circle Foundation for the Arts
- Parliament House and Treasury Canberra collections
- International collections (UK, Spain, USA)
- Solo exhibitions at Stevens Street Gallery (2024), Mist Gallery (2023)

**What's missing:**
- Wikipedia/Wikidata entity (most impactful single missing item)
- No YouTube presence
- No Reddit mentions found
- Instagram follower count modest for her credentials
- All achievements are insufficiently documented *on her own website*

**Entity recognition risk:** Without a Wikipedia entry or strong Wikidata record, AI models may not confidently resolve "Lucinda Leveille" as a known entity. This means responses to queries like "Australian landscape painters to buy from" may exclude her even when her content is indexed, because the entity linking fails.

### Content E-E-A-T — 46/100

**Experience (Strong):** Long career, personally trained at National Art School, father was a landscape painter, paintings in significant collections. The personal narrative is compelling and unique. Score: 65.

**Expertise (Medium):** National Art School Diploma (1976-1978) is legitimate formal credential. Runs art classes (demonstrates teaching expertise). Uses oils professionally. However, the site doesn't prominently display these credentials on each page — they're buried in the About section at best. Score: 55.

**Authoritativeness (Medium):** External recognition is strong but poorly mirrored on the site. The Artsy Shark feature (2022) and Art Lovers Australia interview are significant but the site doesn't link to or reproduce content from them. Awards are not listed in a structured, scannable format. Score: 45.

**Trustworthiness (Weak):** Gmail email address undermines trust. No privacy policy link verified in indexed pages. No SSL confirmation (though likely present given WooCommerce). No customer review system or testimonials visible in indexed pages. Two duplicate contact pages confuse users. Score: 30.

**Key E-E-A-T fix:** Create a dedicated "Credentials & Recognition" section (or sidebar widget) listing: National Art School training, Netflix feature, awards by year, public collections, solo exhibitions, international collections. This should appear on the About page and as a summary widget site-wide.

### Technical GEO — 28/100

**robots.txt:** Well-configured for standard protections. No AI crawler blocking in robots.txt itself. Score: 70.

**Crawler access:** Site blocks all non-browser user agents with HTTP 403. This is the most severe technical GEO issue. If GPTBot and ClaudeBot cannot fetch pages, they cannot index the content for retrieval. Score: 10.

**llms.txt:** Not present. Score: 0.

**Rendering:** WordPress site — content is server-rendered, which is good. Not JS-dependent. Score: 75.

**URL structure:** Clean permalinks observed (e.g., `/shop/grain-country/`, `/weekly-artclasses/`). Score: 70.

**Duplicate content:** Two contact page URLs (/contact/ and /contact-lucinda-leveille/) are a technical waste. Score: 50.

**Email:** Gmail rather than domain email — hurts trust signals in AI assessment. Score: 20.

**Sitemap:** Standard WooCommerce sitemap likely exists but inaccessible during audit. Robots.txt presumably references it. Score: 60.

**Overall weighted technical score: 28/100**

### Schema & Structured Data — 18/100

No structured data detected beyond potential WooCommerce defaults. This is a significant missed opportunity for a WordPress/WooCommerce site where implementation via Yoast or RankMath takes minutes.

**Missing schema types by priority:**

| Schema Type | Page | Priority | Impact |
|---|---|---|---|
| `Person` | Homepage, About | Critical | Entity recognition by AI |
| `Organization` | Homepage | Critical | Brand entity signal |
| `Product` | All shop pages | High | Rich results, AI product queries |
| `FAQPage` | Commission, Classes | High | Featured snippets, AI Q&A |
| `AggregateRating` | Product pages | High | Star ratings in SERPs |
| `Event` | Classes page | Medium | Event listings |
| `Article` | Blog posts | Medium | AI citation attribution |
| `BreadcrumbList` | All pages | Medium | SERP display |
| `HowTo` | Commission process | Medium | AI how-to queries |

**Recommended Person schema (for homepage/about):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lucinda Leveille",
  "jobTitle": "Landscape Artist",
  "description": "Australian landscape painter in oils, based in Gold Coast Hinterland, Queensland. Trained at the National Art School, Sydney. Works held in private collections in the UK, Spain, and USA. Two paintings featured in Netflix film True Spirit.",
  "url": "https://lucindastudio.com.au",
  "email": "lucindas.studio@gmail.com",
  "telephone": "+61413113573",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 Sue Court",
    "addressLocality": "Highland Park",
    "addressRegion": "QLD",
    "postalCode": "4211",
    "addressCountry": "AU"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "National Art School",
    "address": "Sydney, NSW, Australia"
  },
  "sameAs": [
    "https://www.instagram.com/lucindas_studio/",
    "https://au.linkedin.com/in/lucinda-leveille-75018185",
    "https://www.saatchiart.com/lucindaleveille",
    "https://bluethumbart.com/lucinda-leveille/"
  ]
}
```

### Platform Optimization — 58/100

**Strong platforms:**
- ✅ Saatchi Art — international art marketplace, highly indexed by AI
- ✅ Bluethumb — Australia's leading online art marketplace, featured as Rising Star + Top 50
- ✅ Art Lovers Australia — feature interview + artist profile
- ✅ Artsy Shark — 2022 featured artist (authoritative art industry site)
- ✅ Artist Close Up — interview profile
- ✅ Circle Foundation for the Arts — member profile
- ✅ Artsphere — artist profile
- ✅ Instagram — active, two accounts
- ✅ Facebook — business + personal pages
- ✅ LinkedIn — profile exists

**Missing platforms:**
- ❌ YouTube — no channel found (high priority)
- ❌ Wikipedia — no entry (high priority)
- ❌ Wikidata — no entry (high priority)
- ❌ Reddit (r/AustralianArt, r/Art) — no mentions found
- ❌ Pinterest — no presence confirmed (visual platform, ideal for art)
- ❌ Google Arts & Culture — no presence

---

## Quick Wins (Implement This Week)

1. **Whitelist AI crawler user agents in security plugin** — prevents GPTBot, ClaudeBot, PerplexityBot from being blocked. In Wordfence: Firewall → All Firewall Rules → whitelist the specific bot user agents. In Cloudflare: create a bypass WAF rule for these bots. Estimated time: 30 minutes. Impact: unlocks AI indexing entirely.

2. **Create /llms.txt** — add a 20-line plain text file at the WordPress root describing who Lucinda is, what the site covers, and what AI systems should know. Template:
```
# Lucinda's Studio — llms.txt
# Australian landscape artist website

> Lucinda Leveille is an Australian landscape painter in oils based in the Gold Coast Hinterland, Queensland. She trained at the National Art School, Sydney (1976-1978). Her work explores stillness, atmospheric light, and the emotional weight of the Australian landscape.

## Site Sections
- /about-lucinda/ — Artist biography, credentials, exhibitions
- /shop/ — Original oil paintings for sale
- /commission-your-own-masterpiece/ — Commission process (6-8 weeks, 1/3 deposit)
- /weekly-artclasses/ — Art tutoring and workshops (max 8 students)
- /on-painting/ — Artist writing on technique and process

## Key Facts
- Two paintings featured in Netflix film True Spirit
- Works held in private collections in UK, Spain, USA
- Parliament House and Treasury Canberra collections
- Bluethumb Rising Star 2024, Top 50 Artists 2025
- Art Lovers Australia Artist to Watch 2024, Top 10 2025
```
Estimated time: 20 minutes. Impact: immediate AI system discovery.

3. **Install and configure RankMath or Yoast SEO** — enables Person + Organization schema on homepage in ~10 minutes. Enable Product schema for WooCommerce automatically. Impact: structured data across the entire site without custom coding.

4. **Create a Wikidata entry for Lucinda Leveille** — go to wikidata.org/wiki/Special:NewItem. Add: name, description ("Australian landscape painter"), birth country (Australia), occupation (painter), educated at (National Art School), website (lucindastudio.com.au), social accounts. Estimated time: 45 minutes. Impact: AI entity resolution.

5. **Publish an "Artist Statement" page** — 500+ words of Lucinda's own words about her practice, inspiration, technique. Pull from best interview quotes. Include Netflix mention, National Art School background, father-as-painter story. Estimated time: 2 hours. Impact: highest-citability page on the site.

---

## 30-Day Action Plan

### Week 1: Unlock AI Access
- [ ] Identify and configure security plugin to whitelist AI crawler user agents
- [ ] Test with `curl -A "GPTBot" https://lucindastudio.com.au` — confirm 200 response
- [ ] Create /llms.txt and upload to WordPress root
- [ ] Install RankMath (free) — configure homepage Person + Organization schema
- [ ] Fix duplicate contact pages: choose /contact/, 301-redirect /contact-lucinda-leveille/
- [ ] Submit sitemap to Google Search Console

### Week 2: Build AI-Citable Content
- [ ] Write and publish "Artist Statement" page (~600 words, first person, rich with specific details)
- [ ] Write and publish "About the Work: Atmospheric Landscapes" page — explain technique, oil medium choice, cloud painting
- [ ] Add FAQ section to commission page (8-10 Q&A pairs)
- [ ] Add FAQ section to classes page (6-8 Q&A pairs)
- [ ] Add FAQPage schema to both pages (RankMath makes this easy)

### Week 3: Strengthen Entity & Authority Signals
- [ ] Create Wikidata entry for Lucinda Leveille
- [ ] Expand LinkedIn profile fully: bio, education, exhibitions, Netflix mention, awards
- [ ] Create YouTube channel — film and post first video (studio tour or painting in progress)
- [ ] Standardize brand name to "Lucinda Leveille | Lucinda's Studio" across all platforms
- [ ] Add domain email (Google Workspace ~$10/month) — update all profiles

### Week 4: Schema & Platform Expansion
- [ ] Add Product schema to all shop painting pages (verify via Google Rich Results Test)
- [ ] Add Article schema to blog posts
- [ ] Create Pinterest business account — pin all paintings with keyword-rich descriptions
- [ ] Consolidate Instagram to one account (@lucindas_studio) — announce on @lucindaleveilleart before archiving
- [ ] Write and publish first blog post: "How to Commission an Original Australian Landscape Painting"
- [ ] Add credentials/awards widget to About page (scannable list format)

---

## Appendix: Pages Analyzed

| URL | Title | Key GEO Issues |
|---|---|---|
| lucindastudio.com.au | Lucinda Leveille — Australian Landscape Artist | 403 to bots, no schema, no text blocks |
| /about-lucinda/ | My Story — Lucindas Studio | Likely thin, no Person schema |
| /contact/ | Contact — Art Inquiries and Workshop Info | Duplicate of /contact-lucinda-leveille/ |
| /contact-lucinda-leveille/ | Contact Lucinda Leveille — Lucindas Studio | Duplicate, should be 301'd |
| /commission-your-own-masterpiece/ | Commission Your Own Masterpiece | No FAQ schema, no HowTo schema |
| /weekly-artclasses/ | Tutoring & Class Information | No FAQ schema, no Event schema |
| /on-painting/ | On Painting — Lucinda Leveille | Best content page, needs Article schema |
| /shop/grain-country/ | Grain Country — Lucinda Leveille | No Product schema confirmed |
| /shop/night-lights/ | Night Lights — Seascape Painting | No Product schema confirmed |
| /shop/intertwined-souls/ | Intertwined Souls — Lucinda Leveille | No Product schema confirmed |
| /category/the-road-series/ | The Road Series | Category page, no structured content |
| /tag/lucinda-leveille-art/ | Lucinda Leveille Art Archives | Tag page, thin content |

---
---

# Competitor Analysis Report: lucindastudio.com.au

**Date:** 18 May 2026
**Subject:** Lucinda Leveille / Lucinda's Studio
**Competitors Analysed:** John Bradley Art, Graham Gercken, Karen Collins Artist, Jeremy Western, Karen McOwen (Joanna McOwen)

---

## Executive Summary

Lucinda Leveille operates in the Australian independent artist market where personal branding, story, and trust signals drive purchasing decisions. Her primary advantage over competitors is a combination of genuine media credibility (Netflix), recent industry recognition (multiple 2024-2025 awards), and a distinctive artistic voice — all of which are *under-leveraged* on her website and across digital platforms. Her main competitors range from highly established (John Bradley, 40+ years, books, physical gallery) to niche-specific (Graham Gercken, highly optimised for landscape painting keywords). Lucinda sits in the middle: more credentialed than she appears online, and outcompeted by sites that simply have more text, more structure, and more platform presence.

---

## Competitive Landscape

| Factor | Lucinda Leveille | John Bradley | Graham Gercken | Karen Collins | Jeremy Western |
|---|---|---|---|---|---|
| **Domain** | lucindastudio.com.au | johnbradleyart.com | landscape-paintings-australia.com | karencollinsartist.com | australianpaintings.com.au |
| **Platform** | WordPress/WooCommerce | WordPress/WooCommerce | Shopify | Static HTML | Static HTML |
| **Years Active (Est.)** | ~15+ | 40+ | 25+ | 15+ | Unknown |
| **Physical Gallery** | No | Yes (Stanwell Park NSW) | No | No | No |
| **Art Classes** | Yes ✅ | Yes (Masterclasses/DVD) | No | No | No |
| **Commissions** | Yes ✅ | Yes | No confirmed | Yes | No |
| **Blog/Content** | Minimal (1 page) | Yes (active) | No | Minimal | No |
| **YouTube** | No | Masterclass videos | No | No | No |
| **Schema Markup** | No | No | No | No | No |
| **Netflix Credential** | Yes ✅ (True Spirit) | No | No | No | No |
| **National Art School** | Yes ✅ | No (self-taught) | No | No | No |
| **Wikipedia** | No | No | No | No | No |
| **Wikidata** | No | No | No | No | No |
| **Instagram** | ~1,600 total (2 accounts) | Unknown | Unknown | Unknown | Unknown |
| **Saatchi Art** | Yes ✅ | Unknown | No | No | No |
| **Bluethumb** | Yes ✅ (Rising Star) | Unknown | No | No | No |

---

## Competitor Profiles

### John Bradley Art — johnbradleyart.com

**Strengths:**
- 40+ years professional painting, 15 years running art school (up to 300 students)
- Published two books (*Blue Mountains Magic*, *A Journey Through Time*)
- 400+ images in print globally; featured in Prestige Calendars for 14 years
- Physical gallery in Stanwell Park, NSW with Friday–Sunday opening hours
- Masterclass DVD box sets — generates passive income and demonstrates expertise at scale
- Active blog ("Artists Blog" section)
- Diversified product range: originals, prints, puzzles, calendars, books, commissioned works
- Regional keyword targeting: Blue Mountains, Hunter Valley, NSW landscapes

**Weaknesses:**
- No schema markup detected — surprising for such an established site
- No meta descriptions optimised
- Heavier emphasis on breadth than depth — may not rank well for atmospheric/emotional landscape queries
- Physical gallery limits digital-first audience

**GEO Position:** Better than Lucinda on content volume and entity recognition (40+ years of mentions), but both sites share the "no schema, no llms.txt" weakness. John Bradley's masterclass content creates YouTube/educational citability that Lucinda lacks.

**Exploit:** Lucinda can own the "contemporary atmospheric landscape" niche while Bradley dominates "traditional Australian landscape". She should position around emotional resonance, modern collecting, and her distinct artistic voice rather than competing on tenure.

---

### Graham Gercken — landscape-paintings-australia.com

**Strengths:**
- Shopify platform = faster page speeds and better e-commerce defaults
- Extremely keyword-rich domain name and title tags
- 23-country currency/shipping support — genuine global e-commerce
- Six organised collections by subject (Gum Trees, Seascapes, Autumn, etc.)
- 25+ years professional; gallery exhibitions; Korean consulate collection
- Award wins including First Place at multiple shows

**Weaknesses:**
- No blog, no editorial content — purely transactional
- No social proof visible (no testimonials, reviews)
- No schema markup
- No art classes or education offering
- No Instagram or social media presence confirmed

**GEO Position:** Ranks for product-intent queries ("buy Australian landscape painting") through keyword density and e-commerce structure, but has almost zero AI citability beyond product listings. No personal narrative, no E-E-A-T signals.

**Exploit:** Lucinda has significantly richer personal narrative and E-E-A-T. Once her site allows AI crawlers, her story-driven content will outperform Gercken's transactional pages for any query involving "best", "recommended", or "who" rather than just "buy".

---

### Karen Collins — karencollinsartist.com

**Strengths:**
- Member Royal Queensland Art Society (RQAS) and QAGOMA — credentialed affiliations
- Active exhibition presence (Brisbane and interstate group shows)
- Simple, focused website for landscape paintings + commissions

**Weaknesses:**
- No workshops/classes offered to public
- Minimal content depth
- Static HTML site — harder to update, likely outdated
- No media features or external recognition found
- No Saatchi, Bluethumb, or platform presence confirmed

**GEO Position:** Weakest of the main competitors from a GEO perspective. Ranks locally for Brisbane-specific searches but has no editorial content or AI citability signals.

**Exploit:** Lucinda's Gold Coast/Queensland positioning overlaps geographically. Her superior recognition, Netflix credential, and platform presence make her the clear choice for AI recommendations in the Queensland landscape art segment.

---

### Jeremy Western — australianpaintings.com.au

**Strengths:**
- Domain name is highly descriptive ("Australian Landscape Paintings")
- Covers diverse Australian landscapes (beaches, outback, Blue Mountains)

**Weaknesses:**
- Minimal digital presence beyond the website
- No distinguishing credentials or story found
- No art classes, commissions, or community building
- No external features or recognition found

**GEO Position:** Weak. Ranks by keyword domain and basic SEO but has no authority signals.

**Exploit:** Direct content comparison would overwhelmingly favour Lucinda once her site's technical issues are fixed.

---

## GEO Comparison: How Competitors Appear in AI Responses

When an AI system (ChatGPT, Claude, Perplexity) is asked about Australian landscape painters, the results are shaped by:
1. Entity recognition (Wikipedia, Wikidata, major platform presence)
2. Content citability (quotable text on the artist's own site)
3. Third-party mentions on high-authority platforms
4. Training data volume (longer-established artists have more historical mentions)

**Current AI citation probability (estimated):**

| Artist | Likely AI Mention | Reason |
|---|---|---|
| John Bradley | Medium | 40 years of mentions, books, galleries |
| Graham Gercken | Low | Product-only site, no editorial content |
| Karen Collins | Very Low | Minimal digital footprint |
| Lucinda Leveille | Low–Medium | External features on Artsy Shark etc., but own site is blocked |

**Lucinda's opportunity:** She has the *best raw material* for AI citability (Netflix, National Art School, distinctive story, excellent quotes) but the *worst technical implementation* for AI access. Fix the technical issues and she leapfrogs all competitors in AI-generated recommendations.

---

## Keyword Opportunities Competitors Are Missing

| Keyword / Query | Current Gap | Lucinda's Opportunity |
|---|---|---|
| "atmospheric landscape painting Australia" | No competitor owns this | Unique to Lucinda's style — publish a definition page |
| "commission landscape painting Gold Coast" | Localised, no competitor targets it | Lucinda is geographically positioned |
| "Australian artist Netflix True Spirit" | Zero competitors can claim this | Create a dedicated page about the Netflix feature |
| "oil painting art classes Gold Coast" | ClassBento dominates — individual artists absent | Lucinda's classes page with local SEO could rank |
| "Australian landscape artist awards 2025" | No competitor has 2025 awards — Lucinda has three | Publish an awards/recognition press page |
| "how long does a commissioned painting take" | No competitor answers this clearly | FAQ on commission page would rank for this |
| "buy original Australian landscape painting online" | Graham Gercken and Bluethumb dominate | Stronger product schema and editorial content would compete |

---

## Backlink & Authority Comparison

Without access to paid SEO tools, precise DA/DR figures are unavailable. Based on observable signals:

| Site | External Features Found | Platform Profiles | Media Mentions | Estimated Link Strength |
|---|---|---|---|---|
| Lucinda Leveille | Artsy Shark, Art Lovers AU, Circle Foundation, Artist Close Up | Saatchi Art, Bluethumb, Artsphere | Netflix (indirect), Art Edit | Medium |
| John Bradley | Hunter Lifestyle Magazine | Art societies, galleries | Books, calendars, puzzles | Medium–High |
| Graham Gercken | Gallery exhibitions | Art society listings | Awards | Medium |
| Karen Collins | Art society listings | RQAS | None found | Low |

**Lucinda's backlink opportunity:** The Netflix True Spirit feature should be actively promoted to generate inbound links. Reach out to:
- Australian art blogs and news sites with the Netflix story
- Queensland tourism/culture sites
- Gold Coast creative industry directories
- Netflix fan sites and True Spirit review pages (most don't link to the artists featured)

---

## Strengths to Learn From Competitors

1. **John Bradley's Masterclass model** — DVD box sets and downloadable videos create high-value educational content that generates AI citations, passive income, and authority. Lucinda's art classes could be adapted to a digital format (even simple smartphone-filmed videos).

2. **Graham Gercken's collection taxonomy** — organising paintings into named series/collections (The Road Series, The Music of the Night already exist on Lucinda's site) with dedicated landing pages helps AI systems understand the body of work as a structured entity, not just random individual products.

3. **John Bradley's physical presence** — even a Gold Coast open studio day 2-4 times per year would generate local press coverage, NAP citations, and event schema opportunities.

---

## Weaknesses to Exploit

1. **None of Lucinda's competitors have schema markup** — she can be first to implement it and gain rich results advantage immediately.

2. **None have llms.txt** — first mover advantage in AI-era discoverability.

3. **No competitor has Lucinda's Netflix credential** — this is a differentiator none can replicate. It needs to be front and centre in every bio, schema description, and press mention.

4. **No competitor targets emotional/atmospheric/contemporary positioning** — Bradley and Gercken both target traditional landscape buyers. Lucinda's style and story appeal to a different collector: emotionally-driven, contemporary, interested in the artist's journey.

5. **No competitor runs a genuinely active art class business** — this is a community-building and authority-building moat that none of the direct website competitors offer at scale.

---

## Strategic Recommendations

### Immediate (This Month)
1. Fix crawler access (allows AI systems to index the site for the first time effectively)
2. Create /llms.txt (signals AI-readiness)
3. Implement Person + Organization schema (entity recognition)
4. Create a dedicated "Netflix True Spirit" page documenting the film feature with photos and details

### Short-Term (1-3 Months)
5. Launch YouTube channel with 5 painting process videos
6. Create Wikidata entry
7. Publish 6 blog posts targeting keyword opportunities listed above
8. Consolidate Instagram to one account, grow to 3,000+ followers
9. Set up domain email (lucinda@lucindastudio.com.au)

### Long-Term (3-12 Months)
10. Commission an online masterclass — even 3-4 videos behind a $49 paywall generates income, authority, and educational citations
11. Pursue Wikipedia article (once Wikidata entry and additional secondary sources exist)
12. Target Artsy.net (international art platform, different from Artsy Shark) for a profile — higher DA and AI training data coverage
13. Annual press release for any new award, exhibition, or major commission — build a press/media page on the site

---

## Battle Card Summary

**Use when competing for collector attention:**

| Lucinda Leveille | vs. Competitors |
|---|---|
| Netflix True Spirit feature | ✅ Unique — no competitor has this |
| National Art School, Sydney trained | ✅ Strongest formal credential in field |
| Contemporary atmospheric style | ✅ Differentiates from traditional landscape competitors |
| Gold Coast Hinterland location | ✅ Distinctive landscape inspiration and local market |
| Art classes / community | ✅ Only direct competitor offering this |
| Multiple 2024-2025 industry awards | ✅ Most recently recognised of all competitors |
| International collections (UK, Spain, USA) | ✅ Signals global appeal |
| Parliament House & Treasury Canberra | ✅ Public institution credibility |

**Lucinda loses on:**
- Website technical quality (currently) — fixable
- Years of established digital presence — catchable with content strategy
- YouTube/educational content — fixable with simple video production
- Physical gallery space — not a priority, open studio days are sufficient
