---
name: Opportunity Refined
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e4a3d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7b6c'
  outline-variant: '#bdcaba'
  surface-tint: '#006e2d'
  primary: '#006b2c'
  on-primary: '#ffffff'
  primary-container: '#00873a'
  on-primary-container: '#f7fff2'
  inverse-primary: '#62df7d'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006b2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#00873b'
  on-tertiary-container: '#f7fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7ffc97'
  primary-fixed-dim: '#62df7d'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  surface-navy: '#1E293B'
  text-primary: '#0F172A'
  text-secondary: '#64748B'
  brand-dark-green: '#176E4B'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for a premium "Opportunities Platform" that balances the utility of high-growth SaaS with the prestige of a private equity firm. The brand personality is professional, elite, and forward-thinking. It seeks to evoke a sense of clarity and ambition, making complex opportunity discovery feel effortless and curated.

The design style is **Modern Minimalist with Glassmorphic accents**. It draws inspiration from the precision of Linear and the fluid elegance of Apple. The interface relies on generous whitespace to create "breathing room" between dense data points, ensuring a low cognitive load. Visual interest is generated through subtle micro-interactions, high-end typography pairings, and a refined sense of depth using layered surfaces rather than heavy decorative elements.

## Colors

The color palette is anchored by a high-growth "Success Green" and a foundational "Trust Navy." 

- **Primary & Tertiary:** Use Primary Green (#16A34A) for main calls to action. Use the Emerald accent (#22C55E) for success states, trend indicators, and high-energy highlights.
- **Surface & Background:** The Background (#F8FAFC) is a very light, cool grey that prevents the clinical feel of pure white. Use Surface Navy (#1E293B) for dark-themed sidebars or footer areas to provide a strong structural anchor.
- **Neutral/Text:** Text Primary is nearly black Navy to ensure high legibility while remaining softer than pure black. Text Secondary is used for metadata and helper text to establish clear visual hierarchy.

## Typography

This design system utilizes a dual-font strategy to differentiate between brand presence and functional utility.

**Sora** is the display face. Its geometric structure and wide stance provide a modern, tech-forward feel for headlines and section titles. Use tighter letter-spacing for larger display sizes to maintain impact.

**DM Sans** handles the functional heavy lifting. It is chosen for its exceptional legibility and low-contrast strokes, which keep the interface clean and readable even in data-heavy opportunity listings. Use the Bold or Medium weights sparingly for emphasis in labels and navigation items.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is centered within a 1280px max-width container on desktop to maintain readability, while utilizing a fluid 12-column grid for internal components.

A strict 8px spacing rhythm (the "unit") governs all padding and margins. 
- **Desktop:** 40px outer margins with 24px gutters.
- **Tablet:** 32px outer margins with 16px gutters.
- **Mobile:** 16px outer margins with 12px gutters.

Large vertical spacing (64px to 128px) should be used between major landing page sections to reinforce the premium, "un-cluttered" brand narrative. Use "Auto-layout" style logic for components, favoring consistent internal padding over fixed heights.

## Elevation & Depth

Visual hierarchy is conveyed through a combination of **Tonal Layers** and **Ambient Shadows**.

1.  **The Base:** The Background (#F8FAFC) serves as the lowest layer.
2.  **The Card Level:** Elevated elements (cards, containers) use a pure white background with a very soft, diffused shadow (15% opacity, 20px blur, 4px Y-offset).
3.  **Floating Elements:** Modals and dropdowns use a higher elevation with a more pronounced shadow and a thin 1px border (#E2E8F0) to ensure separation.
4.  **The Navigation:** The primary header utilizes **Glassmorphism**. Apply a `backdrop-filter: blur(12px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.8)`). This allows content to scroll underneath while maintaining the context of the page's color palette.

## Shapes

The design system uses a **Rounded** shape language to appear approachable and modern. 

- **Standard Components:** Buttons, input fields, and small cards use the base 0.5rem (8px) radius.
- **Container Elements:** Large content cards and feature sections should use the `rounded-lg` (16px) or `rounded-xl` (24px) tokens to create a softer, more "premium" container feel.
- **Interactive Tags:** Use pill-shaped (fully rounded) corners for status chips and categories to distinguish them from actionable buttons.

## Components

- **Buttons:** Primary buttons use the Primary Green with white text and a subtle inner-glow. Secondary buttons should be ghost-styled with a Navy border and text. Buttons feature a 200ms transition on hover, shifting the background color slightly darker.
- **Cards:** Opportunity cards are the hero component. They feature white backgrounds, `rounded-xl` corners, and a 1px soft border. On hover, the shadow should deepen, and the card should lift slightly (-2px Y-translation).
- **Sticky Navigation:** The navigation bar is a slim glassmorphic strip. Links use DM Sans (Label-md) with an active state indicated by a small green dot below the text rather than a heavy underline.
- **Inputs:** Form fields use a light grey background (#F1F5F9) that transitions to white on focus with a Primary Green 2px ring.
- **Chips/Badges:** For "Opportunities," use Tertiary Emerald for "Open" status and Text Secondary for "Closed" or "Pending" statuses. These should always be pill-shaped.
- **Lists:** Use high-contrast dividers (1px, #F1F5F9) and generous vertical padding (16px+) to ensure lists of data do not feel cramped.