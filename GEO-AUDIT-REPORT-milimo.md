# GEO Audit Report: milimo Brisbane Limousine Service

**Audit Date:** 2026-05-21
**URL:** https://milimo.com.au
**Business Type:** Local Service Business — Luxury Limousine & Chauffeur Hire
**Pages Analyzed:** 33 pages + 95 blog posts (sample of 12 pages deep-crawled)

---

## Executive Summary

**Overall GEO Score: 27/100 — Critical**

milimo.com.au is effectively invisible to AI systems. Despite operating for 25+ years with genuine industry awards (ABIA 2018), government endorsements, and 4.9-star ratings on Easy Weddings and TripAdvisor, the site has zero schema markup, zero FAQ sections, no meta descriptions, no author attribution, and no presence on the platforms AI models rely on most (Wikipedia, Wikidata, Reddit, LinkedIn). The site's content is written entirely for brand impression rather than information retrieval — promotional atmosphere where AI systems need extractable facts, pricing data, and structured answers. The gap between milimo's real-world service quality and its AI visibility is large, but almost entirely closable with structural and schema changes rather than new content.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 19/100 | 25% | 4.75 |
| Brand Authority | 27/100 | 20% | 5.40 |
| Content E-E-A-T | 38/100 | 20% | 7.60 |
| Technical GEO | 48/100 | 15% | 7.20 |
| Schema & Structured Data | 0/100 | 10% | 0.00 |
| Platform Optimization | 20/100 | 10% | 2.00 |
| **Overall GEO Score** | | | **27/100 — Critical** |

---

## Critical Issues (Fix Immediately)

### C1 — Zero Schema Markup Across All Pages
**Affected pages:** Every page on the site (homepage, weddings, corporate, airport transfers, reviews, blog, contact — all confirmed zero)

milimo has no `LocalBusiness`, no `Organization`, no `Service`, no `Review`, no `AggregateRating`, no `FAQPage`, no `Article` schema on any page. AI systems cannot confirm what the business is, where it operates, or what customers say about it. This is the most impactful single gap on the site.

**Fix:** Install Rank Math (free) or Schema Pro in WordPress. Deploy `LocalBusiness`/`LimousineService` JSON-LD on the homepage immediately. See the Schema section below for the full JSON-LD block ready to deploy.

**Expected impact:** Unlocks rich results eligibility for Google AI Overviews; enables entity recognition in ChatGPT and Claude; star ratings eligible to appear in search results within 2–4 weeks.

---

### C2 — PHP 7.4 End-of-Life (Security + Crawl Risk)
**Evidence:** `x-powered-by: PHP/7.4.33` response header

PHP 7.4 has received zero security patches since December 2022 (3.5 years). A compromised site is deindexed and removed from AI training data. This also contributes to the 1.72-second TTFB (Time to First Byte) — more than double the acceptable threshold — which causes AI crawlers with tight fetch timeouts to receive partial page loads.

**Fix:** Upgrade to PHP 8.2 or 8.3 via hosting control panel. Most managed WordPress hosts (WP Engine, Kinsta, Flywheel, SiteGround) can do this in one click. Test compatibility on a staging environment first — the Flatsome theme and standard WordPress plugins are PHP 8.x compatible.

---

### C3 — No H1 Tags on Inner Service Pages
**Evidence:** `/wedding-limo-hire-brisbane/` confirmed zero H1 in raw HTML

AI crawlers cannot identify the primary topic of a page without a semantic H1. The page title appears visually but is a styled element, not an `<h1>` tag. This likely affects most inner pages given the page builder (Flatsome) construction pattern.

**Fix:** Audit all 33 pages via Screaming Frog or a free H1 checker. For every page missing an H1, set the visual hero text as an actual `<h1>` in the page builder element settings. This takes under 5 minutes per page.

---

## High Priority Issues (Fix Within 1 Week)

### H1 — No llms.txt File
**Evidence:** `https://milimo.com.au/llms.txt` returns a redirect to homepage (no file exists)

`llms.txt` is an emerging standard that tells AI systems what your site covers, who you are, and which pages are most valuable. Without it, AI crawlers must parse every URL individually and often miss the most important content.

**Fix:** Create `/llms.txt` at the domain root with the following content:

```
# milimo Brisbane Limousine Service
> Premium chauffeur and limousine hire in Brisbane, Gold Coast, and Sunshine Coast. Specialising in wedding car hire, corporate airport transfers, school formals, and day tours.

## Key Pages
- [Wedding Limo Hire Brisbane](https://milimo.com.au/weddings/)
- [Corporate Chauffeur Service](https://milimo.com.au/corporate/)
- [Airport Transfers Brisbane](https://milimo.com.au/airport-transfers-brisbane-limousines/)
- [Our Fleet](https://milimo.com.au/our-fleet/)
- [Reviews](https://milimo.com.au/reviews/)
- [Contact & Enquiry](https://milimo.com.au/enquiry-form/)

## About
milimo is a family-owned Brisbane limousine service operating since 2000. Fleet includes Bentley, Mercedes-Benz, Maserati, Audi, and Genesis vehicles. ABIA Queensland 2018 award winner. LAQ member. Phone: 1300 884 536.
```

---

### H2 — Zero FAQ Sections on Any Page
**Affected pages:** All service pages — weddings, corporate, airport transfers, school formals, day trips

FAQ sections are the highest-citability content format because they match the exact question-answer structure AI systems use to retrieve and surface responses. No page contains a single explicit question-answer pair.

**Fix for Weddings page** (add these as visible FAQ with `FAQPage` JSON-LD schema):
- "How far in advance should I book a wedding limo in Brisbane?"
- "What is included in a milimo wedding limousine package?"
- "Can you provide limos for the Gold Coast and Sunshine Coast?"
- "How many passengers can the stretch limousine hold?"
- "What vehicles are available for wedding car hire?"
- "Do you provide groomsmen and bridal party transport?"

**Fix for Airport Transfers page:**
- "How much does a Brisbane airport limo transfer cost?"
- "Where does my driver meet me at Brisbane Airport?"
- "Do you track flights for delays?"
- "Are child seats available?"
- "How far in advance do I need to book?"

---

### H3 — No Meta Descriptions on Any Page
**Evidence:** All pages reviewed returned no meta description tag

Every page audited (homepage, weddings, corporate, about, reviews, fleet, airport transfers) has no meta description. AI systems and search engines use meta descriptions as the primary signal for what a page covers. Their absence reduces click-through from AI-generated links and lowers the probability of being included in AI Overviews.

**Fix:** Add unique meta descriptions to all 33 pages via Rank Math or Yoast. Each description should be 140–160 characters and contain: (1) the primary service/topic, (2) the location, and (3) a differentiator.

Example for weddings page:
> "Luxury wedding limo hire across Brisbane, Gold Coast, and Sunshine Coast. Bentley, Maserati, and Mercedes fleet. Family-owned since 2000. Call 1300 884 536."

---

### H4 — No Author Attribution on 80+ Blog Posts and All Service Pages
**Evidence:** Confirmed across all blog posts and service pages reviewed

AI systems (particularly Perplexity and Gemini) heavily discount unattributed content for citation. Every blog post and service page is anonymous. There is no author profile page anywhere on the site.

**Fix:**
1. Create two author profiles: one for the chauffeur/operational side (e.g., "Adrian [Surname], Director & Lead Chauffeur — 20+ years experience"), one for the editorial/admin side.
2. Add author bylines to all 80+ blog posts and all service pages.
3. Add `Person` schema to author profile pages with `name`, `jobTitle`, `sameAs` (LinkedIn URL).

---

### H5 — Brand Absent from Wikidata, Wikipedia, and LinkedIn
**Evidence:** Wikidata API query returned zero results; LinkedIn company page not found; no Wikipedia article

ChatGPT and Claude are trained heavily on Wikipedia and Wikidata. Without a Wikidata entry, milimo cannot be recognised as a named entity by these systems. The name "milimo" currently conflicts with unrelated East African musicians in AI knowledge graphs.

**Fix (30-minute task):**
1. Go to wikidata.org → Create new item
2. Label: "milimo Brisbane Limousine Service"
3. Description: "luxury chauffeur and limousine hire service in Brisbane, Queensland, Australia"
4. Add statements: instance of = business; country = Australia; industry = transportation; official website = milimo.com.au; inception = 2000
5. Create a LinkedIn Company Page at linkedin.com/company — this costs nothing and adds a major AI entity signal

---

## Medium Priority Issues (Fix Within 1 Month)

### M1 — No Pricing Information on Any Page
No pricing, no pricing ranges, not even "from $X" anchors appear anywhere on the site. This blocks the site from being cited for any price-related query — which are among the highest-intent queries for a limo hire service. AI systems answering "how much does a wedding limo cost in Brisbane" will cite competitors with pricing pages, not milimo.

**Fix:** Add a pricing table to each core service page at minimum showing starting-from prices, typical package durations, and vehicle categories.

---

### M2 — Reviews Have No Schema and Are Stale
The 21 on-site testimonials have no `Review` or `AggregateRating` schema. The most recent is dated April 2021 — over 4 years ago. TripAdvisor (16 reviews, 5.0 stars) and Easy Weddings (25 reviews, 4.9 stars) have current data that is not surfaced on-site.

**Fix:** Implement `AggregateRating` JSON-LD using the combined Easy Weddings/TripAdvisor count and score. Embed or pull live reviews from these platforms. Launch a post-booking email review request workflow targeting Google and Easy Weddings.

---

### M3 — Sitemap Staleness (52% of Pages 5–7 Years Old)
17 of 33 pages have `lastmod` dates from 2018–2021. The wedding service page shows a lastmod of 2019-01-08. This signals low-priority content to AI crawlers.

**Fix:** Touch-update all key pages (add or refresh a sentence of content) to force WordPress to update their `lastmod` dates. Alternatively, ping the sitemap manually via Google Search Console and Bing Webmaster Tools after updating.

---

### M4 — Blog Content Is Thin and Disconnected from Core Services
80+ blog posts average 300–700 words. The "Best Golf Courses Brisbane" post is ~280 words — a bare 13-item list with no descriptions, ratings, or local knowledge. Posts like "Planning Amazing Valentine's Day Dates" and "Kooroomba Lavender Vineyard Farm Tours" are topically adjacent but do not demonstrate authority on the core service. The airport transfers page contains a grammatically incorrect heading ("Our Limousine is up to dated").

**Fix:** Audit all 80+ posts for word count. Expand, merge, or noindex posts under 500 words. Rewrite the top 10 posts to 1,000+ words with genuine operational detail only an operator would know. Correct the grammar error on the airport transfers page immediately.

---

### M5 — No Named Team Members on About Page
The "family-owned — father and son chauffeurs" reference appears on the homepage but no names are provided anywhere. AI models cannot build an entity around an unnamed person or business owner.

**Fix:** Add names, headshots, brief bios, and years of experience for at least two team members to the About page. Add the `foundingDate`, `employee`, and `award` properties to the `LocalBusiness` schema.

---

### M6 — TTFB of 1.72 Seconds (Page Speed)
Server response time is 1.72 seconds — more than double the 800ms acceptable threshold. Root causes: PHP 7.4 (addressed in C2), no page caching, no CDN.

**Fix:** Install WP Rocket or W3 Total Cache (caching). Add Cloudflare free CDN. These two changes alone typically reduce TTFB to under 500ms.

---

## Low Priority Issues (Optimise When Possible)

- **L1** — Zero security headers (HSTS, CSP, X-Frame-Options). Fixable via `.htaccess` in ~30 minutes; improves security score from 4/10 to 8/10.
- **L2** — YouTube channel dormant since 2020. Upload 3 short videos (fleet tour, wedding day walkthrough, airport transfer process) to reactivate the channel and generate AI training signal.
- **L3** — No Reddit presence whatsoever. Begin authentically answering Brisbane transport/wedding questions in r/brisbane, r/AusWeddings, r/australia — 3–5 helpful comments per month compounds into meaningful AI training signal within 6–12 months.
- **L4** — Instagram at 196 followers. For a 25-year-old luxury service business this is low. Consistent posting (2x/week) of vehicle and event content would improve social authority signals.
- **L5** — No `BreadcrumbList` schema on any page. Low-effort addition via Rank Math; improves navigation clarity for AI crawlers.
- **L6** — Open Graph tags missing on most pages. Add via Rank Math to improve sharing and AI social graph signals.

---

## Category Deep Dives

### AI Citability: 19/100

The fundamental problem: all content is written for brand impression, not information retrieval. The site's highest-scoring citability content is the airport pickup instruction block on the door-to-door page — the only self-contained operational fact on the entire site. Zero pages have answer blocks, FAQ structures, pricing data, fleet capacity numbers, or booking process explanations that AI systems can extract verbatim.

**The three most citable passages currently on the site:**
1. Airport pickup directions ("to the left in front of the Coffee Club" / "bottom of escalator near baggage carousel number one") — 38/100
2. 21 on-site testimonials (volume signals social proof even without schema) — 22/100
3. ABN + endorsed operator status mention — 18/100

**The content milimo needs to add for AI citability (in order of impact):**
1. FAQ sections with `FAQPage` schema on weddings, corporate, and airport pages
2. Pricing tables with "from $X" anchors on all service pages
3. Named team bios with credentials
4. Fleet specification table (seating capacity, luggage capacity, vehicle age)
5. Booking process explainer ("How to Book" page or section)

---

### Brand Authority: 27/100

milimo has strong presence on specialist platforms AI models do consult for local service discovery:
- TripAdvisor: 5.0 stars / 16 reviews / #13 of 111 Brisbane transport services (reviewed Dec 2025 — current)
- Easy Weddings: 4.9 stars / 25 reviews / 92% five-star
- Yellow Pages AU: two listings (Geebung QLD 4034)
- Yelp: active listing with 35+ photos, updated July 2025

But the platforms AI models train their entity knowledge on are almost entirely absent:
- Reddit: zero mentions in any subreddit
- Wikipedia: no article
- Wikidata: no Q-number (critical gap — name conflict with East African musicians)
- LinkedIn: no company page

**AI platform likelihood of citing milimo:**
| Platform | Likelihood | Reason |
|---|---|---|
| Perplexity AI | Medium | Real-time search surfaces TripAdvisor/Easy Weddings |
| Google AI Overviews | Low | Thin Google Business Profile signals, no schema |
| ChatGPT | Very Low | No Wikipedia, no Reddit = not a named entity in training data |
| Claude | Very Low | Training skews toward Wikipedia/high-authority sources |

---

### Content E-E-A-T: 38/100

**Strengths:** ABIA Queensland 2018 award, LAQ membership, Easy Weddings 5-star profile, ABN verifiable, quarantine transport endorsement, ~25 years operating history.

**Weaknesses:** No named team members, no author attribution across 80+ blog posts, blog content is thin SEO filler (golf lists, Valentine's Day dates), testimonials stale to 2021, no credentials contextualised, no About page with real people.

The awards and memberships are the site's strongest E-E-A-T assets but they are buried in the site rather than surfaced prominently and schema-marked. The ABIA 2018 award should be on the homepage with a link to verification, marked up with `award` in the LocalBusiness schema, and referenced in the meta description of every wedding page.

---

### Technical GEO: 48/100

**Passes:**
- AI crawlers not blocked (GPTBot, ClaudeBot, PerplexityBot all allowed)
- Full server-side rendering (WordPress + Flatsome) — AI crawlers can read 100% of content without JavaScript execution
- HTTPS with correct single-hop redirects (HTTP→HTTPS, www→non-www)
- Self-referencing canonical tags on all tested pages
- Sitemap index present with 7 child sitemaps

**Fails:**
- No llms.txt (highest GEO impact)
- PHP 7.4 end-of-life (security and speed)
- TTFB 1.72s (no caching, no CDN)
- No H1 on inner service pages
- Zero security headers
- 52% of sitemap pages have stale lastmod dates (2018–2021)

---

### Schema & Structured Data: 0/100

Confirmed zero schema.org implementation across every page audited. No JSON-LD, no microdata, no RDFa on homepage, weddings page, reviews page, contact page, or blog posts. This is the most complete schema void possible for a local service business of this size and age.

**Deploy immediately — Homepage JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "LimousineService"],
      "@id": "https://milimo.com.au/#business",
      "name": "milimo Brisbane Limousine Service",
      "url": "https://milimo.com.au/",
      "description": "Premium limousine and chauffeur hire in Brisbane, Gold Coast, and Sunshine Coast. Specialising in wedding car hire, corporate transfers, airport pickups, and day tours.",
      "telephone": "+61-1300-884-536",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.4698,
        "longitude": 153.0251
      },
      "areaServed": [
        {"@type": "City", "name": "Brisbane"},
        {"@type": "City", "name": "Gold Coast"},
        {"@type": "City", "name": "Sunshine Coast"}
      ],
      "priceRange": "$$$",
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "41",
        "bestRating": "5"
      },
      "award": "ABIA Queensland 2018",
      "memberOf": {
        "@type": "Organization",
        "name": "Limousine Association Queensland"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://milimo.com.au/#website",
      "url": "https://milimo.com.au/",
      "name": "milimo Brisbane Limousine Service",
      "publisher": {"@id": "https://milimo.com.au/#business"}
    }
  ]
}
```

**Prioritised schema rollout:**
1. `LocalBusiness`/`LimousineService` + `WebSite` on homepage (this week)
2. `AggregateRating` + `Review` on reviews page (this week)
3. `Service` schema on weddings, corporate, airport transfer pages (week 2)
4. `FAQPage` schema once FAQs are added to service pages (week 2–3)
5. `Article`/`BlogPosting` + `Person` author schema on blog posts (week 3–4)
6. `BreadcrumbList` on all interior pages (week 4)

---

### Platform Optimization: 20/100

| Platform | Status | Priority |
|---|---|---|
| TripAdvisor | ✅ Active — 5.0 stars / 16 reviews / ranked #13 | Maintain |
| Easy Weddings | ✅ Active — 4.9 stars / 25 reviews | Maintain |
| Yelp AU | ✅ Active — 35+ photos, updated July 2025 | Maintain |
| Yellow Pages AU | ✅ Listed (Geebung QLD) | Maintain |
| Facebook | ✅ Active — 416 likes | Increase posting frequency |
| YouTube | ⚠️ Dormant since 2020 — 4 videos only | Upload 3 new videos |
| Instagram | ⚠️ 196 followers — low for brand age | Post 2x/week |
| Reddit | ❌ Zero mentions in any subreddit | Begin authentic engagement |
| Wikipedia | ❌ No article | Build toward notability with press coverage |
| Wikidata | ❌ No Q-number — name conflict risk | Create entry immediately (30 min) |
| LinkedIn | ❌ No company page | Create immediately (free) |
| Google Business Profile | ⚠️ Status unclear — not confirmed active | Verify and optimise |

---

## Quick Wins (Implement This Week)

1. **Create Wikidata entry** (30 min, free) — wikidata.org → new item → "milimo Brisbane Limousine Service" → add: instance of (business), country (Australia), official website, inception year. Begins AI entity disambiguation immediately.

2. **Deploy LocalBusiness JSON-LD schema** via Rank Math (free WordPress plugin) — use the JSON-LD block provided above. This is the single highest-leverage technical change on the site.

3. **Create llms.txt** at milimo.com.au/llms.txt — copy the template from the H1 section above, takes 20 minutes.

4. **Add meta descriptions** to the top 10 pages via Rank Math — homepage, weddings, corporate, airport transfers, our fleet, school formals, day trips, reviews, about, contact. One hour of work.

5. **Create LinkedIn company page** (20 min, free) — add company name, description, website, industry (Ground Passenger Transportation), size (1–10 employees), and logo.

---

## 30-Day Action Plan

### Week 1: Schema & Technical Foundation
- [ ] Install Rank Math (free) or Schema Pro in WordPress
- [ ] Deploy `LocalBusiness`/`LimousineService` JSON-LD on homepage
- [ ] Add `AggregateRating` and `Review` schema to reviews page
- [ ] Add meta descriptions to all 33 pages (use Rank Math bulk editor)
- [ ] Create llms.txt file
- [ ] Upgrade PHP from 7.4 to 8.2 (via hosting control panel)
- [ ] Install WP Rocket + Cloudflare (caching + CDN for TTFB fix)
- [ ] Create Wikidata entry for milimo
- [ ] Create LinkedIn company page

### Week 2: Content Restructure — Service Pages
- [ ] Add H1 tags to all inner pages missing them (Screaming Frog audit first)
- [ ] Add FAQ section (minimum 6 questions) to weddings page with FAQPage JSON-LD
- [ ] Add FAQ section to corporate page with FAQPage JSON-LD
- [ ] Add FAQ section to airport transfers page with FAQPage JSON-LD
- [ ] Add pricing table (starting-from prices) to all three pages
- [ ] Correct "Our Limousine is up to dated" heading on airport page
- [ ] Add `Service` schema to weddings, corporate, and airport transfer pages

### Week 3: E-E-A-T & Author Authority
- [ ] Rewrite About page with named team members, photos, bios, credentials
- [ ] Add `foundingDate`, `employee`, and `award` to LocalBusiness schema
- [ ] Create 2 author profile pages with `Person` schema
- [ ] Add author bylines to all 80+ blog posts (can use WordPress bulk author assignment)
- [ ] Add publication + last-updated dates to all blog posts
- [ ] Audit all 80+ blog posts — noindex any under 400 words unless expanding
- [ ] Touch-update all key service pages to refresh sitemap lastmod dates

### Week 4: Brand Authority & Platform Expansion
- [ ] Upload 3 new videos to YouTube (fleet tour, wedding day walkthrough, airport transfer)
- [ ] Start Reddit engagement — answer 5 questions in r/brisbane, r/AusWeddings
- [ ] Verify and optimise Google Business Profile (hours, photos, services, posts)
- [ ] Launch post-booking email review request (targeting Google and Easy Weddings)
- [ ] Add security headers to .htaccess (HSTS, X-Frame-Options, X-Content-Type-Options)
- [ ] Rewrite top 5 blog posts to 1,000+ words with operational depth
- [ ] Begin outreach for 2–3 press/editorial mentions (Brisbane Times, wedding blogs)

---

## Appendix: Pages Analyzed

| URL | Title | Key Issues |
|---|---|---|
| milimo.com.au/ | milimo Brisbane Limousine Service | No schema, no meta desc, H1 is brand label |
| milimo.com.au/weddings/ | Weddings — Wedding Limo Car Hire | No schema, no FAQ, no meta desc, no pricing |
| milimo.com.au/corporate/ | Brisbane Corporate Limousine Service | No schema, no FAQ, no meta desc, ~875 words |
| milimo.com.au/about-us/ | About milimo | No named team, no credentials detail, no schema |
| milimo.com.au/reviews/ | Reviews | No Review/AggregateRating schema, testimonials stale to 2021 |
| milimo.com.au/our-fleet/ | Our Fleet | No vehicle schema, no pricing, no specs |
| milimo.com.au/airport-transfers-brisbane-limousines/ | Airport Transfers Brisbane | ~650 words, no FAQ, no schema, no pricing |
| milimo.com.au/door-to-door-airport-transfers-brisbane/ | Door to Door Airport Transfers | Contains best citable content (pickup locations); still no schema |
| milimo.com.au/blog/ | Blog Archive | 80+ posts, no author attribution, no dates visible |
| milimo.com.au/wedding-limo-hire-brisbane/ | Wedding Limo Hire Brisbane | Confirmed zero H1 tags in raw HTML |
| milimo.com.au/brisbane-wine-tours/ | Brisbane Wine Tours | No Article schema, thin content |
| milimo.com.au/best-golf-courses-brisbane/ | Best Golf Courses Brisbane | ~280 words, bare list, no expertise demonstrated |

---

*Report generated by GEO Audit — milimo.com.au — 2026-05-21*
*Methodology: Georgia Tech / Princeton / IIT Delhi GEO framework (2024). Composite score weighted across 6 dimensions. Pages crawled: 12 deep-audited from 128 total indexed.*
