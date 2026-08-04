---
name: Midnight Ink & Gold
colors:
  surface: '#0b1324'
  surface-dim: '#0b1324'
  surface-bright: '#31394b'
  surface-container-lowest: '#060e1e'
  surface-container-low: '#131b2c'
  surface-container: '#171f31'
  surface-container-high: '#222a3b'
  surface-container-highest: '#2d3547'
  on-surface: '#dae2fa'
  on-surface-variant: '#c4c5d5'
  inverse-surface: '#dae2fa'
  inverse-on-surface: '#283042'
  outline: '#8e909f'
  outline-variant: '#444653'
  surface-tint: '#b8c4ff'
  primary: '#b8c4ff'
  on-primary: '#002584'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#3755c3'
  secondary: '#ffb59c'
  on-secondary: '#571f09'
  secondary-container: '#76361f'
  on-secondary-container: '#fba283'
  tertiary: '#ffb3b0'
  on-tertiary: '#680010'
  tertiary-container: '#9b001d'
  on-tertiary-container: '#ffa3a0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#73341d'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410006'
  on-tertiary-fixed-variant: '#93001b'
  background: '#0b1324'
  on-background: '#dae2fa'
  surface-variant: '#2d3547'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is a premium, high-contrast framework designed for professional SaaS and corporate environments that require a sense of authority and sophistication. The visual narrative is built upon a "Midnight" foundation—using deep, atmospheric navies—punctuated by "Ink" (vibrant primary blues) and "Gold" (warm, sunset-inspired accents).

The style merges **Glassmorphism** with **Corporate Modernism**. It utilizes translucent layers and subtle background blurs to create depth without sacrificing the functional clarity required for complex interfaces. The emotional response is one of trust, innovation, and exclusivity.

- **Primary Motif:** Translucent surface containers with soft, internal glows.
- **Visual Weight:** High-contrast text on dark backgrounds to ensure WCAG accessibility while maintaining a cinematic aesthetic.
- **Atmosphere:** Moody, refined, and technologically advanced.

## Colors

The palette is anchored in a dark-mode-first philosophy. The primary blue is utilized for high-intent actions, while the sunset gold and crimson serve as strategic accents for highlights, notifications, or secondary call-to-actions.

- **Surface Tiers:** Use `#161e2f` for base surfaces. Layering is achieved by stepping up to `#242f49` and `#384358` for cards and floating modals respectively.
- **Accents:** The gold (#ffa586) should be used sparingly for "hero" highlights or critical data points. The crimson (#b51a2b) is reserved for error states or high-urgency alerts.
- **Typography:** Pure white (#ffffff) is used for primary headings. Use a muted slate (#94a3b8) for secondary body text to maintain hierarchy and reduce eye strain.

## Typography

This system uses a dual-font strategy. **Montserrat** (substituted for Poppins for a slightly more professional, geometric edge) handles all headlines and display roles, providing a strong, confident presence. **Inter** is utilized for all functional roles, including body copy, inputs, and labels, ensuring maximum legibility across all pixel densities.

- **Headlines:** Always bold or semi-bold. Use tight letter spacing for display sizes to create a modern, "inked" look.
- **Body:** Standard weight for readability. Use the `on_surface_variant` color for secondary information to create a clear visual stack.
- **Labels:** Use uppercase for `label-sm` to denote categories or overlines, paired with increased letter spacing.

## Layout & Spacing

The design system employs a **Fluid Grid** model based on an 8px square rhythm. This ensures alignment across diverse screen sizes while maintaining a generous sense of whitespace characteristic of premium brands.

- **Desktop:** 12-column grid with 24px gutters. Use wide 64px margins to "frame" the content, creating a centered, cinematic focus.
- **Mobile:** 4-column grid with 16px margins. Content should stretch to fill the width.
- **Sectioning:** Use large `xl` (80px) vertical padding between major sections to allow the dark background to breathe and reduce cognitive load.

## Elevation & Depth

Depth is communicated through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

1.  **Backdrop Blurs:** High-level containers (like navigation bars or modal overlays) use a 12px to 20px blur with a 60% opaque surface color.
2.  **Inner Glows:** To define edges on dark backgrounds, use a subtle 1px top-border (inner stroke) with 10% white opacity. This simulates light hitting the edge of a physical object.
3.  **Ambient Shadows:** Use large, highly diffused shadows (`blur: 40px`) with a low opacity (`15%`) tinted with the primary blue (`#1e40af`) to create a "neon underglow" effect for active components.

## Shapes

The system uses a **Rounded** (Level 2) shape language to balance professional structure with approachability. 

- **Standard Elements:** Buttons, input fields, and small tags use an 8px (`0.5rem`) radius.
- **Containers:** Content cards and sections use a 16px (`1rem`) radius.
- **Hero Elements:** Large featured images or prominent banners use a 24px (`1.5rem`) radius to draw the eye.
- **Interactive States:** When a card is hovered, the radius remains constant, but the "inner glow" border should increase in brightness.

## Components

### Buttons
- **Primary:** Solid `#1e40af` fill, white text, 8px radius. On hover, apply a primary-tinted outer glow.
- **Secondary:** Transparent fill with a 1px border of `#384358`. White text.
- **Accent/Gold:** Used only for "conversion-critical" actions. Solid `#ffa586` fill with `#161e2f` text for maximum contrast.

### Cards
- **Surface:** `#242f49` with 16px radius. 
- **Style:** Apply a subtle 1px border of `#384358`. For "featured" cards, use the glassmorphic effect (blur + 60% opacity).

### Input Fields
- **Base:** `#161e2f` background with a 1px border of `#384358`. 
- **Focus State:** Border changes to primary blue `#1e40af` with a soft blue outer glow.

### Chips & Tags
- **Style:** Small 8px radius. Use `#384358` background for neutral tags and a low-opacity version of the Primary Blue (15% alpha) for active filters.

### Lists
- **Separators:** Use 1px lines with `#242f49` color. Ensure generous vertical padding (16px) between items to maintain the "premium" feel.