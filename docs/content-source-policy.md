# GlobalPlay Content Source Policy

Last updated: 2026-06-19

This document defines how GlobalPlay prepares game listings before they are allowed to be indexed or considered for ads.

## Source Rules

GlobalPlay may list browser games embedded or hosted by third-party providers such as CrazyGames, Y8-associated hosts, GameDistribution, GameMonetize, Famobi, and independent game-hosting domains.

Every listing must keep a source record in `src/data/games.ts`:

- `sourceName`
- `sourceUrl`
- `licenseNote`
- `contentStatus`
- `adEligibility`
- `reviewedAt` when editorial review is complete

## Original Content Rules

Provider text must not be copied into an AdSense-ready page as the main value of the page. Before a game page is marked `contentStatus: 'ready'`, it needs original GlobalPlay content:

- A rewritten `description` and `shortDescription`
- An `editorialSummary` based on gameplay expectations, controls, pacing, and user fit
- `testedControls`
- `deviceNotes`
- Three or more `playTips`
- A visible source and rights disclosure

Pages that only contain an iframe, provider-style text, generic category copy, stats, and related links must remain `contentStatus: 'needs_editorial'` and `adEligibility: 'excluded'`.

## Image And Trademark Rules

Game titles, screenshots, logos, thumbnails, and embedded game files remain with their respective owners. GlobalPlay must not imply that it owns, publishes, develops, sponsors, or is endorsed by any third-party game brand.

If a rights holder reports a listing, image, embed, or description, the affected page should be reviewed promptly. Valid removal or correction requests should be handled through the public contact and legal channels listed on the site.

## Indexing Rules

Only pages with `contentStatus: 'ready'` should appear in `sitemap.xml`.

Pages with any of the following status values should remain accessible for users but excluded from search indexing:

- `needs_editorial`
- `restricted`
- `retired`

Search result pages should remain `noindex, follow`.

## Ad Eligibility Rules

A page can be `adEligibility: 'eligible'` only when:

- `contentStatus` is `ready`
- The page has original editorial content
- The page has no unresolved licensing concern
- The page has no unresolved restricted-content concern
- The page is not mainly an iframe or copied/provider text

Pages with violent, shocking, horror, weapon, blood, surgery, adult, gambling, alcohol-sale, drug, or other restricted-inventory risks should stay `adEligibility: 'excluded'` unless separately reviewed and approved for a suitable ad policy category.

## Review Workflow

1. Add or update the raw game listing.
2. Default it to `contentStatus: 'needs_editorial'` and `adEligibility: 'excluded'`.
3. Rewrite descriptions and add editorial fields.
4. Verify source and rights notes.
5. Check whether any content warning applies.
6. Mark low-risk, original pages as `contentStatus: 'ready'`.
7. Only mark a ready page as `adEligibility: 'eligible'` when it has no restricted-content concern.
