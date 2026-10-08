# RISE frontend audit

Stack: React 18, TypeScript, Vite 5, React Router 6; Tailwind 3 with HSL CSS variables and shadcn/Radix primitives. React Query, Sonner, and toast providers wrap the router. Framer Motion currently animates homepage, local resources, team sections, and program details. No backend code is present.

Routes: `/`, `/states` (state/category queries), `/state/:code`, `/federal` (category query), `/local`, `/about`, `/contact`, and wildcard 404. Layout shares Navbar and Footer; ScrollToTop handles route transitions.

Data: `src/data/programs.ts` parses the configured Google Sheets CSV with PapaParse and falls back to localStorage. Fields: name, category, state, description, official URL, how-to-access details, and level. No structured incentive amount, eligibility, or last-verified date exists. Preserve descriptions and details; do not invent missing fields or dates. Contact composes an email via mailto. Team photographs and names are real supplied content.

Template tells: centered map-watermark hero; repeated emoji feature tiles; two-column program cards with hover-triggered details; translucent sticky navigation; repeated rounded bordered boxes; blurred/staggered entrance animation; category pills. Existing green/paper palette and serif pairing are a useful starting point.

Direction: forest green, warm paper, dark ink, restrained ochre; locally hosted DM Serif Display and DM Sans; left-aligned hero and prominent search; numbered federal category index; divider-based program rows with keyboard-accessible details; compact navigation and source-aware footer; no decorative motion. Preserve content and routes.

## Page inventory
- src/pages/Index.tsx
- src/pages/StateProgramsPage.tsx
- src/pages/AboutPage.tsx
- src/pages/LocalInfoPage.tsx
- src/pages/FederalPage.tsx
- src/pages/ContactPage.tsx
- src/pages/StatePage.tsx
- src/pages/NotFound.tsx

## Shared components
- src/components/Navbar.tsx
- src/components/ScrollToTop.tsx
- src/components/NavLink.tsx
- src/components/Footer.tsx
- src/components/CategoryFilter.tsx
- src/components/Layout.tsx
- src/components/ProgramCard.tsx

## UI library inventory (retained)
- aspect-ratio
- alert-dialog
- pagination
- tabs
- card
- slider
- popover
- progress
- toaster
- input-otp
- chart
- hover-card
- sheet
- scroll-area
- resizable
- label
- sonner
- navigation-menu
- accordion
- drawer
- tooltip
- alert
- switch
- calendar
- breadcrumb
- radio-group
- command
- toggle-group
- avatar
- menubar
- dialog
- badge
- sidebar
- table
- separator
- button
- toggle
- toast
- checkbox
- collapsible
- dropdown-menu
- select
- textarea
- input
- skeleton
- context-menu
- form
- carousel
