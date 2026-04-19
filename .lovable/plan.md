

## Hero Section Redesign: Light & Clean

### Current state
The hero uses a solid dark green (`bg-primary`) background with animated radial gradients, SVG patterns, spinning shapes, and blurred orbs. Text is white on green. It feels heavy.

### Plan

**1. Strip the animated background**
Remove all the layered SVG patterns, radial gradients, spinning shapes, and blurred orbs from the hero section in `Index.tsx`.

**2. Light background with green accents**
- Change the hero background to `bg-background` (the warm off-white/cream already in the theme).
- Switch all text to dark foreground colors (`text-foreground`, `text-muted-foreground`).
- The pill badge at the top gets a light green tint: `bg-primary/10 text-primary border-primary/20`.
- The search bar keeps its white card style with a subtle `ring-primary` focus state.
- The "Looking for local resources?" link stays `text-secondary`.

**3. Subtle visual interest**
Add a single soft accent element — a very faint green gradient blob or a thin decorative border/line — to keep it from looking completely bare, while staying clean and modern.

**4. Files changed**
- `src/pages/Index.tsx` — hero section only. All other sections stay the same.

### Technical details
- Remove ~30 lines of animated background markup (lines 42–74).
- Update class names on the `<section>` and all child text elements to use light-mode foreground tokens.
- No new dependencies or CSS changes needed — uses existing theme tokens.

