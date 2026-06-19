# AdSense Readiness Audit - Live Recheck After Chunk 5

Audit date: 2026-06-19
Live URL: https://globalplay.games/
Phase: pre-application
Decision: Not ready

## Sources

- Google AdSense readiness guidance: https://support.google.com/adsense/answer/7299563
- Google AdSense eligibility: https://support.google.com/adsense/answer/9724
- Connect site to AdSense and crawler access: https://support.google.com/adsense/answer/7584263
- Ads.txt guide: https://support.google.com/adsense/answer/12171612
- AdSense Program policies: https://support.google.com/adsense/answer/48182
- Google Publisher Policies: https://support.google.com/adsense/answer/10502938
- Google Publisher Restrictions: https://support.google.com/adsense/answer/10437795

## Local Guardrail Result

`npm run audit:adsense` passed locally after Chunk 5.

- Total games: 108
- Ready games: 20
- Ad-eligible games: 20
- Sitemap game pages expected locally: 20
- Errors: 0
- Warnings: 24 non-ready games with provider promotional phrases

`npm run build` also passed locally.

## Live Evidence Snapshot

- `/robots.txt`: 200, allows `/`, allows `Mediapartners-Google`, exposes sitemap.
- `/ads.txt`: 200, but only placeholder comments. No `google.com, pub-..., DIRECT, f08c47fec0942fa0` line.
- `/sitemap.xml`: 200, contains 126 URLs, including 108 game URLs. It still includes unreviewed pages such as `/games/action/prison-escape-lnj`.
- Homepage: 200, no canonical tag, robots `index, follow`, server-rendered stats still show `0` in the stats cards.
- `/games/action/golf-orbit`: 200, no canonical tag, robots `index, follow`, no `Editorial Notes`, no `Source and rights`, still uses old generic copy.
- `/games/action/prison-escape-lnj`: 200, robots `index, follow`; this should be `noindex, follow` until reviewed.
- `/games/shooting/gunblood`: 200, robots `index, follow`, description references a pistol, being shot, and animated blood.
- `/games/action/bartender_the_right_mix`: 200, robots `index, follow`, description centers on cocktail mixing and a bartender partial to cocktails.
- `/privacy-policy`, `/about`, `/contact`, `/terms`: 200 and reachable.
- `Mediapartners-Google`, `Googlebot`, and normal browser user agents all received 200 for sampled pages.

## Findings

### Blockers

- `ADS-CONTENT-01`, `ADS-CONTENT-02`, `ADS-PUB-11`: Live game detail pages are still thin embedded-game listings with generic or provider-derived copy. Evidence: `golf-orbit` has no editorial block and still says it is an action-packed adventure; `farm_frenzy_2` exposes a Y8-branded phrase. Fix: deploy the Chunk 1/2 reviewed-content build so only the 20 reviewed pages are indexable and each has original editorial notes, controls, tips, and source rights.
- `ADS-CRAWL-07`: Live sitemap still includes 108 game pages, including unreviewed and restricted-risk pages. Fix: deploy the local sitemap filtering change so only `contentStatus: ready` pages are emitted.
- `ADS-PUB-02`: Rights and copied-content risk remains live. Evidence: third-party embeds, screenshots, game names, and copied/provider phrases are visible without per-page source-rights detail. Fix: deploy source/license fields on ready pages and keep unreviewed pages noindex.

### High Risks

- `ADS-REST-02`, `ADS-REST-03`, `ADS-REST-05`: Restricted inventory is still indexable. Evidence: `Gunblood` references animated blood and shooting; shooting category pages are indexable; bartender cocktail games are indexable. Fix: keep these pages `noindex` and `adEligibility: excluded` until reviewed or permanently exclude from ads.
- `ADS-TXT-01`, `ADS-TXT-02`, `ADS-PUB-09`: `/ads.txt` exists but has no real Google publisher line. Fix after publisher ID exists: `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`.
- `ADS-CRAWL-05`: Live pages do not emit canonical tags. Fix: deploy canonical metadata from the local branch.
- `ADS-CONTENT-03`: Homepage and listing pages still expose crawler-visible weak signals. Evidence: homepage stats cards render as `0`, and listing pages include many generic snippets. Fix: deploy SSR stats and reduce indexable catalog to reviewed pages.

### Medium Risks

- `ADS-PRIV-04`, `ADS-PRIV-10`: Privacy page is present, but no certified CMP was verified for EEA/UK/Switzerland ad consent. Fix before serving personalized or non-personalized Google ads in covered regions.
- `ADS-ELIG-01`, `ADS-ELIG-02`, `ADS-OWN-02`: Account age, duplicate-account status, and domain ownership cannot be proven from the public site. Confirm before applying.

## Exhaustive Checklist

| ID | Status | Evidence | Next action |
| --- | --- | --- | --- |
| ADS-ELIG-01 | Unknown | Owner/account age not visible from site or repo. | Confirm applicant is eligible and at least 18, or uses guardian account. |
| ADS-ELIG-02 | Unknown | AdSense account history not available. | Confirm no duplicate publisher account. |
| ADS-ELIG-03 | Fail | Content and restricted-inventory checks below fail on live site. | Fix content, sitemap, noindex, and restricted-page exclusions before applying. |
| ADS-ELIG-04 | N/A | Site is an independent Next.js website, not Blogger/YouTube hosted flow. | None. |
| ADS-OWN-01 | Pass | Local repo access exists and layout/head injection path is available. | Add verification only when ready to apply. |
| ADS-OWN-02 | Unknown | Domain ownership cannot be proven from public crawl. | Confirm DNS/registrar or hosting control. |
| ADS-OWN-03 | Pass | Sampled pages render and return complete HTML/JS. | Keep normal JS rendering available. |
| ADS-SITE-01 | Unknown | AdSense dashboard site status not available. | Add site in AdSense and request review only after fixes. |
| ADS-SITE-02 | Unknown | Live site has placeholder ads.txt and no visible AdSense meta/code. | Configure a real verification method after content fixes. |
| ADS-TXT-01 | Fail | `/ads.txt` lacks a Google seller line. | Add real publisher ID when issued. |
| ADS-TXT-02 | Fail | Placeholder file exists but does not authorize inventory. | Replace placeholder with valid line. |
| ADS-CONTENT-01 | Fail | Live game pages lack substantial original editorial content. | Deploy reviewed ready pages. |
| ADS-CONTENT-02 | Fail | Live pages rely on third-party embeds and provider-like snippets. | Keep unreviewed pages noindex and add original commentary. |
| ADS-CONTENT-03 | Fail | Game details are thin and homepage stats cards render `0`. | Deploy SSR stats and substantial detail pages. |
| ADS-CONTENT-04 | Pass | Site is live with many reachable pages, not a coming-soon shell. | Maintain uptime. |
| ADS-CONTENT-05 | Pass | No visible ad or affiliate blocks observed. | Keep ad slots out until approval. |
| ADS-CONTENT-06 | Pass | Primary language is English, which AdSense supports. | Keep language consistent. |
| ADS-CONTENT-07 | N/A | No public comments or UGC observed. | Add moderation if UGC is introduced. |
| ADS-CONTENT-08 | Fail | Repeated generic titles/descriptions and provider phrases remain live. | Rewrite or noindex unreviewed pages. |
| ADS-UX-01 | Pass | Header/footer navigation and category/detail links are visible. | Continue mobile checks after deployment. |
| ADS-UX-02 | Pass | Users can understand the site as a browser game directory. | Keep breadcrumbs/search/category paths clear. |
| ADS-UX-03 | Pass | No fake download links or misleading ad-navigation placements observed. | Preserve clear play/navigation separation. |
| ADS-UX-04 | Pass | No forced downloads, popunders, or unexpected redirects observed in samples. | Recheck after adding ads. |
| ADS-UX-05 | Pass | About, contact, privacy, terms, and footer links are reachable. | Keep pages updated with actual ad/CMP behavior. |
| ADS-UX-06 | Pass | No ad-like layout before approval observed. | Keep no display ads before approval. |
| ADS-CRAWL-01 | Pass | Sampled key URLs returned 200. | Monitor uptime. |
| ADS-CRAWL-02 | Pass | `robots.txt` allows `/` and explicitly allows `Mediapartners-Google`; sampled bot UAs got 200. | Keep bot access open. |
| ADS-CRAWL-03 | Pass | Content pages are GET-accessible; search is GET and noindex. | Avoid POST-only content pages. |
| ADS-CRAWL-04 | Pass | No excessive redirects observed in sampled URLs. | Keep canonical host stable. |
| ADS-CRAWL-05 | Fail | Live sampled pages do not emit canonical tags. | Deploy canonical metadata. |
| ADS-CRAWL-06 | Pass | HTTPS live site responds normally. | Continue monitoring DNS/TLS. |
| ADS-CRAWL-07 | Fail | Live sitemap has 108 game URLs instead of only reviewed pages. | Deploy sitemap filter. |
| ADS-PROG-01 | Unknown | Traffic sources and owner behavior are not visible. | Confirm no artificial traffic or self-clicking. |
| ADS-PROG-02 | Pass | No text asking users to click ads observed; no ads are present. | Recheck after ad slots are added. |
| ADS-PROG-03 | N/A | No Google ads are present. | Use neutral labels only after ads are added. |
| ADS-PROG-04 | Unknown | Acquisition sources not available. | Confirm traffic is legitimate. |
| ADS-PROG-05 | N/A | No AdSense ad code is live. | Review wrappers before launch. |
| ADS-PROG-06 | N/A | No Google ads are placed in frames, popups, emails, or non-content pages. | Add ads only to eligible publisher-content pages after approval. |
| ADS-PROG-07 | N/A | Audit target is a website, not an app WebView integration. | None. |
| ADS-PUB-01 | Pass | No illegal products or illegal-activity promotion observed in sampled pages. | Continue policy review as catalog changes. |
| ADS-PUB-02 | Fail | Third-party media/embeds and copied/provider snippets lack page-level rights evidence. | Add source/license detail and keep copied pages noindex. |
| ADS-PUB-03 | Pass | No hate, harassment, self-harm, terrorism, or violence praise observed; restricted violence handled under ADS-REST. | Keep restricted content excluded from ads. |
| ADS-PUB-04 | N/A | No animal cruelty or endangered-species sales content observed. | None. |
| ADS-PUB-05 | Pass | About/terms/footer disclose independent directory and no endorsement. | Add per-page source details on ready pages. |
| ADS-PUB-06 | Pass | No phishing, fake offers, or personal-information theft flow observed. | Recheck forms if added. |
| ADS-PUB-07 | Pass | No cheating, hacking, fake-document, or spyware-enabling content observed. | Continue review. |
| ADS-PUB-08 | Pass | No compensated sexual acts, mail-order bride, or adult-family content observed. | Continue review. |
| ADS-PUB-09 | Fail | Publisher seller identity in ads.txt is not configured. | Add real publisher line after AdSense account setup. |
| ADS-PUB-10 | N/A | No Google ads are present. | Recheck ad layout later. |
| ADS-PUB-11 | Fail | Live contains low-value, copied, and thin pages that would be ad-ineligible. | Deploy noindex/review model. |
| ADS-PUB-12 | N/A | No Google ads are present. | Place ads only in context after approval. |
| ADS-PUB-13 | N/A | No election, health, or climate claims observed. | None. |
| ADS-PUB-14 | N/A | No manipulated political/social-issue media observed. | None. |
| ADS-PUB-15 | Pass | No child sexual abuse or child endangerment signals observed in sampled content. | Keep catalog review active. |
| ADS-PUB-16 | N/A | No active-crisis or sensitive-event content observed. | None. |
| ADS-REST-01 | Pass | No sexual content or sexual products observed in samples. | Continue review. |
| ADS-REST-02 | Fail | `Gunblood` and zombie/violent titles are indexable; `Gunblood` references animated blood. | Exclude from ads and noindex unless reviewed as safe. |
| ADS-REST-03 | Fail | Shooting/firearms/weapons pages such as `Gunblood`, `Copter.io`, and shooting category pages are indexable. | Exclude from ads and noindex restricted pages. |
| ADS-REST-04 | Pass | No tobacco or recreational drug content observed. | Continue review. |
| ADS-REST-05 | Fail | Bartender/cocktail games are indexable and include alcohol-centered copy. | Exclude from ads and noindex unless reviewed. |
| ADS-REST-06 | Pass | No real-money gambling or wagering observed. | Keep free-play wording clear. |
| ADS-REST-07 | Pass | No prescription-drug/pharmacy content observed. | None. |
| ADS-REST-08 | N/A | No Google ads or video ad placements are live. | Recheck after ad implementation. |
| ADS-PRIV-01 | Pass | Privacy policy page is reachable and includes Google/cookie disclosures. | Keep policy aligned with actual ads/CMP. |
| ADS-PRIV-02 | Pass | Privacy policy and cookie notice mention advertising cookies and third-party/Google behavior. | Update after AdSense/CMP integration. |
| ADS-PRIV-03 | Unknown | No live AdSense requests to inspect for PII. | Verify after adding ad code. |
| ADS-PRIV-04 | Unknown | No Google-certified CMP verified for EEA/UK/Switzerland ad consent. | Integrate certified CMP before serving ads where required. |
| ADS-PRIV-05 | N/A | No precise location collection observed. | None. |
| ADS-PRIV-06 | Unknown | Game site may appeal to minors; child-directed status/account settings not visible. | Confirm audience positioning before applying. |
| ADS-PRIV-07 | N/A | No code observed that modifies Google-domain cookies. | Recheck if custom ad/proxy code is added. |
| ADS-PRIV-08 | Unknown | Personalized advertising and audience-list settings are not yet configured/visible. | Avoid sensitive audience lists and verify settings. |
| ADS-PRIV-09 | N/A | Site is not housing, employment, or credit-related. | None. |
| ADS-PRIV-10 | Unknown | Personalized ads are not yet configured; consent/ad-choice controls not verified. | Decide ad personalization mode and update privacy/CMP. |

## Completeness Check

- Requirement IDs in reference: 73
- Requirement IDs in report: 73
- Missing IDs: none
