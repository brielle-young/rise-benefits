# Redesign verification

- Production build, TypeScript check, existing Vitest test, and whitespace checks pass.
- ESLint: zero errors; seven pre-existing Fast Refresh warnings in shadcn library modules remain. Fixed the existing empty-interface and Tailwind require-import lint errors without behavioral changes.
- All eight page components captured at 375, 768, and 1280px. Reviewed mobile/desktop contact sheet, homepage, and populated directory. No horizontal overflow or runtime exceptions observed.
- Browser checks: homepage search selects New York and navigates to the original state query route; mobile menu opens and navigates; contact labels correctly associate with inputs; populated rows show all supplied fields, accessible details open, and category filtering works at all three widths.
- Live sheet returned no listings during local verification. Populated screenshots use clearly named, temporary browser-network fixtures, not production additions. Production fetching, parsing, cache, routes, and contact mailto behavior are unchanged. Screenshots are in `docs/screenshots`.
- Contrast against warm paper: ink 13.83:1, forest 8.27:1, muted text 6.27:1. Input border against card surface 3.75:1. Dark-green section uses light paper text. Placeholder text uses the checked muted token.
- DM Sans variable WOFF2 and DM Serif Display WOFF2 are hosted locally and preloaded; font licenses included. Removed active Framer Motion use from page components; respects reduced motion for shared UI.
- Added SVG favicon and 1200×630 PNG social preview. Existing logo, team photographs, content, analytics, data source, and deployment workflow preserved.
- No verified last-update date exists in the source data; none invented. Footer directs readers to official listing sources for current availability.
