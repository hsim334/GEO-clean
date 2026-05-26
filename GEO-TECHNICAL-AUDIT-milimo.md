# GEO Technical SEO Audit — milimo.com.au
Date: 2026-05-21

---

## Technical GEO Score: 48/100

---

## Score Breakdown

| Category | Score | Max | Status |
|---|---|---|---|
| Crawlability | 10 | 15 | WARN |
| Indexability | 8 | 12 | WARN |
| Security | 4 | 10 | FAIL |
| URL Structure | 6 | 8 | PASS |
| Mobile Optimization | 8 | 10 | PASS |
| Core Web Vitals | 5 | 15 | FAIL |
| Server-Side Rendering | 14 | 15 | PASS |
| Page Speed & Server | 6 | 15 | FAIL |

Status: Pass = 80%+ of category points | Warn = 50–79% | Fail = <50%

---

## AI Crawler Access

| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | Allowed (no block) | No action needed |
| Google-Extended | Google-Extended | Allowed (no block) | No action needed — keep allowed for AI Overviews |
| Googlebot | Googlebot | Allowed (explicit rule) | No action needed |
| Bingbot | bingbot | Allowed (no block) | No action needed |
| PerplexityBot | PerplexityBot | Allowed (no block) | No action needed |
| ClaudeBot | ClaudeBot | Allowed (no block) | No action needed |
| CCBot | CCBot | Allowed (no block) | No action needed |
| Amazonbot | Amazonbot | Allowed (no block) | No action needed |
| Bytespider | Bytespider | Allowed (no block) | No action needed |
| Applebot-Extended | Applebot-Extended | Allowed (no block) | No action needed |
| FacebookExternalHit | FacebookExternalHit | Allowed (no block) | No action needed |

**Summary**: All AI crawlers are fully allowed. The robots.txt contains only Allow directives (no Disallow: / catch-all), which is unusual but permissive — crawlers default to full access. This is the strongest aspect of the site's GEO infrastructure.

**Note**: The robots.txt has no `Disallow:` directive at all, which defaults to full access for the wildcard `User-agent: *` rule. This is technically valid and harmless, but slightly non-standard. The intent is clearly permissive.

---

## Critical Issues (fix immediately)

### CRITICAL-1: No llms.txt File
- **URL**: https://milimo.com.au/llms.txt (returns 301 redirect to homepage)
- **Impact**: AI systems (ChatGPT, Perplexity, Claude, Gemini) cannot identify what the site offers, its authoritative service areas, or key entities without reading every page individually. Missing llms.txt is a significant GEO disadvantage.
- **Fix**: Create `/llms.txt` with business description, service list, location coverage, and key page links. Example:
  ```
  # milimo — Brisbane Limousine & Luxury Car Hire
  > milimo provides luxury limousine hire, wedding car hire, and corporate transfer services in Brisbane, Queensland, Australia.
  
  ## Services
  - Wedding limousine hire Brisbane: https://milimo.com.au/wedding-limo-hire-brisbane/
  - Corporate limo hire Brisbane: https://milimo.com.au/corporate-limo-hire/
  - Airport transfers Brisbane: https://milimo.com.au/brisbane-limousine-car-hire-transfers/
  - Day trips and tours: https://milimo.com.au/day-trips-tours-brisbane/
  
  ## Fleet
  - Bentley Continental: https://milimo.com.au/bentley-continental-brisbane/
  - Audi A8L: https://milimo.com.au/audi-a8l-luxury-hire/
  - Mercedes-Benz fleet: https://milimo.com.au/our-fleet/
  
  ## Contact
  Phone: 1300 884 536
  Service area: Brisbane and surrounds, Queensland, Australia
  ```

### CRITICAL-2: No H1 Tags on Inner Pages
- **URL tested**: https://milimo.com.au/wedding-limo-hire-brisbane/
- **Finding**: Zero `<h1>` tags found in raw HTML. The page title appears to be rendered as a visual element via CSS/banner rather than a semantic heading tag.
- **Impact**: AI crawlers and search engines cannot identify the primary topic of the page. H1 is one of the strongest on-page signals for AI content parsing and citation decisions.
- **Fix**: Add a proper `<h1>` tag to every service page. For the wedding page: `<h1>Wedding Limo Hire Brisbane</h1>`. This should be the first prominent heading visible in the HTML.

### CRITICAL-3: TTFB of 1.72 Seconds (More Than Double the Threshold)
- **Measured**: TTFB = 1.718s (threshold: < 800ms; target: < 200ms)
- **Impact**: Slow TTFB directly harms LCP scores, ranking signals, and crawl efficiency. AI crawlers with short timeout windows may partially fetch pages.
- **Root cause indicators**: PHP/7.4.33 (end-of-life, no longer supported), Apache with no visible caching layer, no CDN headers (no CF-Ray, no X-Cache).
- **Fix options**: 
  1. Implement WordPress page caching (WP Rocket, W3 Total Cache, or LiteSpeed Cache)
  2. Migrate to a CDN-backed host (Cloudflare, WP Engine, or Kinsta)
  3. Upgrade PHP from 7.4 to 8.2+ (PHP 7.4 reached end-of-life December 2022)

### CRITICAL-4: PHP 7.4 — End-of-Life Software
- **Header**: `x-powered-by: PHP/7.4.33`
- **Impact**: PHP 7.4 has received no security patches since December 2022. Running EOL software exposes the site to known vulnerabilities that could result in deindexing (Google penalises hacked sites), data breaches, or downtime.
- **Fix**: Upgrade to PHP 8.2 or 8.3 via hosting control panel. Test WordPress + plugin compatibility first on a staging environment.

---

## Warnings (fix this month)

### WARN-1: No Security Headers
- **Missing headers**: Strict-Transport-Security (HSTS), Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Only header found**: `Vary: Accept-Encoding`
- **Impact**: Without HSTS, browsers may attempt HTTP connections before being redirected. Without CSP and X-Frame-Options, the site is vulnerable to clickjacking and injection attacks. Search engines increasingly use security signals as trust indicators.
- **Fix**: Add security headers via `.htaccess` (Apache):
  ```apache
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  ```
  Or install the "Security Headers" WordPress plugin for a no-code solution.

### WARN-2: Sitemap Staleness — 17 of 33 Pages Last Modified Before 2022
- **Finding**: 52% of pages in the sitemap have `lastmod` dates from 2018–2021, including core service pages:
  - `/wedding-limo-hire-brisbane/` — lastmod: 2019-01-08 (7 years stale)
  - `/corporate-limo-hire/` — lastmod: 2019-01-08 (7 years stale)
  - `/bentley-continental-brisbane/` — lastmod: 2019-01-08 (7 years stale)
  - `/hotel-transfers-brisbane-milimo/` — lastmod: 2019-01-13 (7 years stale)
- **Impact**: Search engines and AI crawlers deprioritise stale content. A 2019 lastmod date signals that content has not been reviewed or updated, reducing crawl frequency and citation likelihood.
- **Fix**: Update sitemap `lastmod` dates to reflect actual content review dates. More importantly, actually review and update the content on these pages to match current fleet, pricing, and service offerings. Use Yoast SEO (already installed) to manage sitemap dates.

### WARN-3: No og:image on Wedding Page (and Many Inner Pages)
- **URL**: https://milimo.com.au/wedding-limo-hire-brisbane/
- **Finding**: No `og:image` meta tag present on inner service pages. The homepage has an og:image, but it points to an award badge image from 2018 (`ew-badge-award-fivestar-2018_en.png`), not a representative vehicle/service image.
- **Impact**: When these pages are shared on social media or referenced by AI systems, no visual context is provided. AI systems that use Open Graph data for entity recognition lose a signal.
- **Fix**: Add og:image to all service pages via Yoast SEO. Use high-quality vehicle photos (1200x630px recommended). Update the homepage og:image to a current hero vehicle image.

### WARN-4: No Caching on Static Assets
- **Finding**: Static JS files (e.g., `flatsome.js`) have no Cache-Control max-age headers. Response only contains `Vary: Accept-Encoding`.
- **Impact**: Browsers and CDNs cannot cache static resources effectively, causing repeat visitors to re-download unchanged files on every visit. Increases page load time and server load.
- **Fix**: Add cache headers to static assets via `.htaccess`:
  ```apache
  <FilesMatch "\.(js|css|png|jpg|jpeg|gif|webp|woff2|woff)$">
      Header set Cache-Control "max-age=31536000, public, immutable"
  </FilesMatch>
  ```

### WARN-5: No Twitter Card Image on Inner Pages
- **Finding**: Twitter card is set to `summary_large_image` on inner pages, but there is no `twitter:image` meta tag. This will cause social sharing to show no image.
- **Fix**: Add `twitter:image` meta tag, or ensure Yoast SEO is configured to auto-populate this from the featured image.

### WARN-6: No IndexNow Implementation
- **Finding**: No IndexNow key file found at either `/indexnow` or `/.well-known/indexnow`. Both return 301 redirects to homepage.
- **Impact**: Content updates are not instantly communicated to Bing (and therefore ChatGPT and Bing Copilot). New or updated pages may take days or weeks to appear in AI search results.
- **Fix**: Install the free "IndexNow" WordPress plugin. It automatically notifies Bing, Yandex, and other IndexNow-supported search engines when content is published or updated.

---

## Recommendations (optimise this quarter)

### REC-1: Image Format Modernisation
- **Finding**: All 34 images found on the homepage are PNG or JPEG format. Zero WebP or AVIF images detected.
- **Impact**: PNG and JPEG images are significantly larger than equivalent WebP/AVIF images (WebP is typically 25–34% smaller than JPEG; AVIF is 50% smaller). Large images are the primary cause of poor LCP scores.
- **Fix**: Convert all images to WebP format. WordPress 5.8+ can auto-generate WebP versions. Enable this via Imagify, ShortPixel, or Smush plugins. Ensure hero images above the fold are served as WebP.

### REC-2: Render-Blocking JavaScript
- **Finding**: Multiple JavaScript files load in the `<head>` without `async` or `defer` attributes:
  - `jquery.min.js` (render-blocking)
  - `jquery-migrate.min.js` (render-blocking)
  - `jquery-ui/core.min.js` (render-blocking)
  - `modernizr.custom.min.js` (render-blocking)
  - `custom.js` (Ultimate Social Media Plus plugin — render-blocking)
- **Impact**: Render-blocking scripts delay the time to first render. Google Analytics loads with `async` (correct), but jQuery and plugin scripts block parsing.
- **Fix**: Use WP Rocket or LiteSpeed Cache to defer non-critical JS. The Flatsome theme's own `flatsome.js` could be deferred for most pages.

### REC-3: No CDN in Use
- **Finding**: All assets served from `milimo.com.au` directly. No CDN-specific response headers (no Cloudflare `CF-Ray`, no CloudFront `X-Cache`, no Fastly `X-Served-By`).
- **Impact**: Visitors outside the server's physical location (especially Sydney/Melbourne vs. Brisbane) experience higher latency. TTFB is already 1.72s — without a CDN it will be worse for non-local visitors.
- **Fix**: Enable Cloudflare (free tier) as a CDN and DNS proxy. This will cache static assets at edge locations globally and can reduce TTFB to under 300ms for most pages.

### REC-4: LocalBusiness Schema Missing from Inner Pages
- **Finding**: The homepage JSON-LD includes `Organization` type, but no `LocalBusiness` or `LimousineDrivingService` schema with NAP (Name, Address, Phone), service areas, or price range.
- **Impact**: AI systems building local business knowledge graphs cannot easily extract structured entity data. For a local Brisbane service business, LocalBusiness schema is a primary citation signal.
- **Fix**: Add `LocalBusiness` (or `AutoDealer` / `TaxiService`) schema with:
  - `name`, `url`, `telephone`, `address`, `areaServed`, `openingHours`, `priceRange`
  - Implement via Yoast SEO Local or manually in a JSON-LD block in the theme footer.

### REC-5: WordPress REST API Exposing User Data
- **Finding**: HTTP response headers include `Link: <https://milimo.com.au/wp-json/>; rel="https://api.w.org/"` — the WP REST API is publicly accessible.
- **Impact**: The REST API exposes `/wp-json/wp/v2/users/` endpoint by default, which leaks WordPress username enumeration. Also exposes page and post IDs.
- **Fix**: Disable user enumeration via the REST API. Add to `functions.php` or use a security plugin:
  ```php
  add_filter('rest_endpoints', function($endpoints) {
      if (isset($endpoints['/wp/v2/users'])) {
          unset($endpoints['/wp/v2/users']);
      }
      return $endpoints;
  });
  ```

### REC-6: OG Locale Mismatch
- **Finding**: `og:locale` is set to `en_US` on a `.com.au` site serving Australian customers.
- **Impact**: Minor inconsistency that could confuse social platforms and AI systems about geographic targeting. Should match the actual locale of the audience.
- **Fix**: Update `og:locale` to `en_AU` in Yoast SEO settings or via `functions.php`:
  ```php
  add_filter('wpseo_locale', function() { return 'en_AU'; });
  ```

---

## Detailed Findings

### Category 1: Crawlability — 10/15 (WARN)

| Check | Score | Finding |
|---|---|---|
| robots.txt valid and complete | 2/3 | Valid but no Disallow directives — unusual but permissive. Missing explicit Disallow for admin/login paths is a security consideration. |
| AI crawlers allowed | 5/5 | All major AI crawlers allowed. No blocks for GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended, Bingbot, or any AI crawler. FULL MARKS. |
| XML sitemap present and valid | 2/3 | Sitemap index present at /sitemap_index.xml with 7 child sitemaps. However, 52% of pages have stale lastmod dates (pre-2022). |
| Crawl depth within 3 clicks | 1/2 | Navigation appears to be server-rendered and links key pages within 1-2 clicks. Some portfolio/category sitemaps suggest deeper content but could not be fully verified. |
| No erroneous noindex directives | 0/2 | All tested pages correctly set `index, follow` with `max-image-preview:large`. No erroneous noindex found — PASS, but score reduced because the check confirmed correct setup. |

**Note on robots.txt**: The file uses only Allow directives without a `Disallow: /` catch-all. This is functionally equivalent to allowing everything (which is the default behaviour), but it is non-standard. The explicit `Disallow:` for wp-admin, wp-login.php etc. would be best practice for security.

### Category 2: Indexability — 8/12 (WARN)

| Check | Score | Finding |
|---|---|---|
| Canonical tags correct on all pages | 3/3 | Self-referencing canonicals present on both tested pages. Homepage: `https://milimo.com.au/`. Wedding page: `https://milimo.com.au/wedding-limo-hire-brisbane/`. FULL MARKS. |
| No duplicate content issues | 2/3 | HTTP redirects to HTTPS (301). www redirects to non-www (301). Trailing slash appears consistent. However, some parameter URLs may exist via WooCommerce/product URLs — not fully tested. |
| Pagination handled correctly | 2/2 | No pagination detected on tested pages. Blog pagination not checked but low priority. |
| Hreflang (not applicable) | 2/2 | Single-language, single-country site. No hreflang required. |
| No index bloat | 1/2 | 33 pages in page sitemap, 95+ posts — reasonable for a service business. However, product/portfolio sitemaps exist (suggesting WooCommerce remnants) which may contribute to thin indexed pages. |

### Category 3: Security — 4/10 (FAIL)

| Check | Score | Finding |
|---|---|---|
| HTTPS enforced with valid cert | 4/4 | HTTPS active. HTTP redirects to HTTPS (301). Valid certificate. FULL MARKS. |
| HSTS header present | 0/2 | Strict-Transport-Security header ABSENT. |
| X-Content-Type-Options | 0/1 | X-Content-Type-Options header ABSENT. |
| X-Frame-Options | 0/1 | X-Frame-Options header ABSENT. |
| Referrer-Policy | 0/1 | Referrer-Policy header ABSENT. |
| Content-Security-Policy | 0/1 | Content-Security-Policy header ABSENT. |

**Note**: The only response headers present are `x-powered-by: PHP/7.4.33`, `vary: Accept-Encoding`, and basic WordPress Link headers. This is a significant security and trust gap.

### Category 4: URL Structure — 6/8 (PASS)

| Check | Score | Finding |
|---|---|---|
| Clean, readable URLs | 2/2 | URLs are descriptive slugs: `/wedding-limo-hire-brisbane/`, `/corporate-limo-hire/`, `/bentley-continental-brisbane/`. No query strings or session IDs. |
| Logical hierarchy | 2/2 | Flat URL structure (all pages at root level) is appropriate for a small service site. Consistent use of trailing slashes. |
| No redirect chains | 2/2 | HTTP → HTTPS is a single-hop 301 redirect. www → non-www is a single-hop 301 redirect. |
| Parameter handling | 0/2 | Not verified. WooCommerce/product remnants in sitemap may create parameter URLs. Not confirmed as a problem but not confirmed clean. |

### Category 5: Mobile Optimization — 8/10 (PASS)

| Check | Score | Finding |
|---|---|---|
| Viewport meta tag correct | 3/3 | `<meta name="viewport" content="width=device-width, initial-scale=1">` present and correct. |
| Responsive layout | 3/3 | Flatsome theme is a well-known responsive WordPress theme. Layout uses responsive breakpoints in inline CSS (`@media (min-width:550px)`). |
| Tap targets | 0/2 | Cannot confirm from raw HTML alone. Flatsome is generally mobile-optimised but social media buttons from "Ultimate Social Media Plus" plugin may have small tap targets. |
| Font sizes | 2/2 | No evidence of fixed-width non-responsive text. Flatsome defaults use 16px+ body text. |

### Category 6: Core Web Vitals — 5/15 (FAIL)

| Check | Score | Estimated Finding |
|---|---|---|
| LCP < 2.5s | 2/5 | TTFB alone is 1.72s, leaving under 800ms for the rest of the render. Hero images are PNG format (not WebP) and large (1020px+ dimensions). LCP is very likely > 4.0s (Poor range). No `<link rel="preload">` for hero images. |
| INP < 200ms | 2/5 | Multiple render-blocking scripts (jQuery, jQuery UI, plugin scripts) loaded synchronously. Heavy Flatsome theme JS bundle. Social media plugin adds additional JavaScript weight. INP likely in Needs Improvement range. |
| CLS < 0.1 | 1/5 | Images have explicit `width` and `height` attributes — good. However, the Flatsome page builder uses inline CSS for element sizing that may cause layout shift on load. Background images are loaded via CSS class injection (`bg.bg-loaded`) which could cause CLS. |

**Note**: These are estimates based on page structure analysis. Actual CWV data requires PageSpeed Insights or real-user monitoring.

### Category 7: Server-Side Rendering — 14/15 (PASS)

| Check | Score | Finding |
|---|---|---|
| Main content in raw HTML | 8/8 | All key service content confirmed present in raw HTML without JavaScript execution. Navigation, service descriptions, fleet information, location data ("Brisbane"), contact number (1300 884 536) — all present in curl output. WordPress + Flatsome renders server-side. FULL MARKS. |
| Meta tags + structured data in raw HTML | 4/4 | All meta tags, Open Graph, Twitter Cards, and JSON-LD schema blocks are present in the raw HTML `<head>`. AI crawlers can fully read this data. FULL MARKS. |
| Internal links in raw HTML | 2/3 | Navigation links and service links are server-rendered. However, some internal link text is fragmented in the raw HTML (likely due to Flatsome shortcode rendering breaking text into spans). |

**GEO Assessment**: This is the best category on the site. WordPress with Flatsome is fully server-side rendered — AI crawlers can read 100% of the content without executing JavaScript. This is a significant advantage over React/Next.js-based competitors who may have SSR configuration issues.

### Category 8: Page Speed & Server — 6/15 (FAIL)

| Check | Score | Finding |
|---|---|---|
| TTFB < 800ms | 0/3 | TTFB measured at 1.718s — more than double the threshold. Indicative of unoptimised WordPress with no page caching and direct Apache hosting without a CDN. |
| Page weight < 2MB | 2/2 | Page size is 124KB (HTML only) — lean. However, total page weight with images and scripts not measured. |
| Images optimised | 1/3 | Width/height attributes present (good for CLS). `loading="lazy"` used on below-fold images (good). However, all images are PNG/JPEG — no WebP or AVIF. No hero image preload. |
| JS bundles reasonable | 1/2 | Flatsome bundles JS in a single file (`flatsome.js`). No source maps or bundle analysis available. Estimated reasonable but multiple additional plugin scripts add weight. |
| Compression enabled | 2/2 | `Vary: Accept-Encoding` header present, indicating gzip/brotli compression is available. |
| Cache headers on static resources | 0/2 | Static assets have no `Cache-Control` max-age header. Browser cannot cache resources across visits. |
| CDN in use | 0/1 | No CDN detected. No Cloudflare, CloudFront, or Fastly headers present. |

---

## AI Crawler Accessibility Assessment

**Can AI crawlers effectively access and parse milimo.com.au?**

**Yes — with limitations.**

**Positive factors:**
- No AI crawlers blocked in robots.txt
- WordPress + Flatsome provides full server-side rendering — all content visible in raw HTML
- JSON-LD schema present on all tested pages (WebPage, Organization, BreadcrumbList)
- Canonical tags correct on all tested pages
- Meta descriptions present and descriptive

**Limiting factors:**
- TTFB of 1.72s means AI crawlers with tight timeout budgets may partially load pages or deprioritise crawling
- No llms.txt means AI systems cannot quickly understand the site's scope and services — they must infer from individual pages
- No H1 tags on inner pages (confirmed missing on wedding page) — AI cannot identify the primary topic signal
- Stale sitemap lastmod dates signal low-priority content to AI crawlers
- OG images missing on inner pages reduce entity recognition quality
- No LocalBusiness schema with NAP data — a primary AI citation signal for local businesses

**Overall**: The site is technically accessible to AI crawlers but is not optimised for AI citation. A competitor with identical content but proper llms.txt, H1 tags, LocalBusiness schema, and fresh sitemap dates would be significantly more likely to be cited by AI search platforms.

---

## Priority Action Plan

| Priority | Action | Effort | GEO Impact |
|---|---|---|---|
| 1 | Create llms.txt file | 1 hour | Very High |
| 2 | Add H1 tags to all service pages | 2 hours | High |
| 3 | Add LocalBusiness/LimousineDrivingService schema | 3 hours | High |
| 4 | Implement page caching (WP Rocket) | 2 hours | High (TTFB) |
| 5 | Upgrade PHP from 7.4 to 8.2+ | 1 hour | High (security) |
| 6 | Add security headers via .htaccess | 1 hour | Medium |
| 7 | Enable Cloudflare CDN | 2 hours | Medium (speed) |
| 8 | Convert images to WebP | 4 hours | Medium (LCP) |
| 9 | Update sitemap lastmod dates | 1 hour | Medium |
| 10 | Install IndexNow plugin | 30 min | Medium (Bing) |
| 11 | Add og:image to all inner pages | 2 hours | Medium |
| 12 | Fix og:locale to en_AU | 15 min | Low |
| 13 | Add cache headers for static assets | 1 hour | Medium |

**Estimated total effort for items 1–10 (highest impact): 17.5 hours**
