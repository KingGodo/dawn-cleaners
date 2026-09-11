---
title: Dawn Cleaners Design System
created: 2026-09-11
author: AI-assisted
last_updated: 2026-09-11
updated_by: AI-assisted
status: active
---

# Dawn Cleaners Design System

The visual language for a premium hospitality-grade cleaning brand. Apple is a principle source — clarity, restraint, materials, optical type, interruptible motion — not a layout to copy.

Living specimens: `/style-guide`

---

## Design direction

**Personality:** Sophistication and trust, with quiet warmth. The site should feel closer to a high-end hospitality or facilities brand than to a local cleaning template.

**Emotional job:** Calm confidence. After five seconds the visitor should know what Dawn Cleaners does. After scrolling they should trust the company enough to request a quote.

**Foundation:** Light, cool, tinted neutrals. One accent: Dawn Blue `#155EEF`. Deep navy `#0B1F3A` is structural dark, not a second accent.

**Layout:** Generous editorial spacing. Top navigation. Photography as a primary storyteller. Cards are rare.

**Type:** Geist Sans. Size-specific tracking. Headlines are large but controlled — never billboard-startup scale.

**Depth:** Hairline borders, surface tint, and one quiet shadow family. Translucency only on sticky navigation.

**Motion:** Critically damped. Instant press feedback. Purpose over spectacle. Bounce is not part of this brand.

---

## Color tokens

Use blue only when it means something: primary action, focus, rare emphasis. Do not wash sections in blue.

| Token | Value | Role |
| --- | --- | --- |
| `--primary` / Dawn Blue | `#155EEF` | Primary CTA, focus ring |
| `--primary-hover` | `#0E4ED8` | Hover of primary |
| `--navy` | `#0B1F3A` | Closing CTA band, structural dark |
| `--mist` | `#EAF2FF` | Reserved media, rare wash |
| `--canvas` / `--background` | `#F8FAFC` | Page ground |
| `--card` | `#FFFFFF` | Raised surfaces |
| `--ink` / `--foreground` | `#0F172A` | Primary text |
| `--text-secondary` / `--lead` | `#334155` | Supporting copy, nav |
| `--slate` / `--text-muted` | `#64748B` | Eyebrows, captions |
| `--text-faint` | `#94A3B8` | Indices, placeholders |
| `--hairline` | `rgb(15 23 42 / 0.08)` | Borders |

**Contrast hierarchy (required):** primary → secondary → muted → faint. Use all four.

---

## Typography

Font: Geist Sans. Mono: Geist Mono, only for indices and data (`01`, `02`).

Tracking is size-specific. Large type tightens; small type opens.

| Style | Size | Weight | Tracking | Leading |
| --- | --- | --- | --- | --- |
| `t-display` | 42–84px fluid | 600 | `-0.03em` | 1.04 |
| `t-h2` | 28–40px fluid | 600 | `-0.024em` | 1.15 |
| `t-h3` | 20–24px | 600 | `-0.02em` | 1.3 |
| `t-lead` | 17–19px | 400 | `-0.011em` | 1.6 |
| `t-body` | 17px | 400 | `-0.006em` | 1.6 |
| `t-caption` | 14px | 400 | `0` | 1.5 |
| `t-label` | 13px | 500 | `0.01em` | 1.3 |
| `t-eyebrow` | 12px | 500 | `0.14em` | 1 — uppercase |

Display measure: roughly 11–18 characters. Body measure: ~40rem.

---

## Spacing

4px base grid. Symmetric padding unless content creates the balance.

| Token | Value | Use |
| --- | --- | --- |
| `--space-1` | 4 | Icon gaps |
| `--space-2` | 8 | Tight inner |
| `--space-3` | 12 | Related items |
| `--space-4` | 16 | Component padding |
| `--space-6` | 24 | Group gaps |
| `--space-8` | 32 | Major inner |
| `--space-12` | 48 | Block separation |
| `--section-y` | 64–96 fluid | Section padding |
| `--gutter` | 24–64 fluid | Page inset |

---

## Container widths

| Name | Max | Use |
| --- | --- | --- |
| `copy` | 40rem / 640px | Paragraph measure |
| `content` | 72rem / 1152px | Nav, type, most sections |
| `wide` | 80rem / 1280px | Editorial splits |
| `frame` | 90rem / 1440px | Large photography |

Always pair with `--gutter`. Never full-bleed type.

---

## Buttons

Primary CTA is visually dominant through contrast and placement, not size.

- Height: 44px (`cta`) for conversion actions. 40px default. 36px small.
- Radius: 8px (`--radius-md`).
- Primary: Dawn Blue, white type. Hover: `#0E4ED8`. Arrow shifts 4px.
- Outline: hairline border, no fill. Hover: white surface, slightly stronger border.
- Navy: only on dark bands when a second solid is needed.
- Press: `scale(0.97)` on pointer-down. Instant.
- No glow. No pill shape. No gradient.

---

## Navigation

- Height 64px at rest, 56px after 8px of scroll.
- Wordmark left. Links in the middle-right. Get a Quote last.
- Scrolled material: `backdrop-filter: blur(20px) saturate(150%)` on `--nav-material`. Content scrolls underneath.
- Hairline appears only after scroll — no hard divider on first paint.
- Mobile menu enters and exits from the right. Overlay dims without trapping mid-animation.
- Touch targets 40–44px.

---

## Image treatment

Photography carries the brand. Prefer bright, natural, hospitality interiors. No spray-bottle clichés.

- Contained images: 12px radius, `object-cover`, inset hairline (`--inset-image`).
- Edge-to-edge images: no radius.
- Hover: inner image scales to `1.03` over 800ms. The frame does not move.
- Placeholder / reserved media: `--mist`, same radius and inset.
- Aspect ratios: hero portrait `4/5`, editorial `3/2`, supporting `16/10`.
- Never overlay large gradients or badges on photographs.

---

## Border radius

Soft-minimal. One system.

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | 6px | Chips, tight controls |
| `--radius-md` / `--radius` | 8px | Buttons, inputs |
| `--radius-lg` / `--radius-image` | 12px | Images, large surfaces |

Do not use 16px+ on chrome. Do not mix pills with this system.

---

## Shadows

One family. Color shift and hairlines do most of the hierarchy.

| Token | Use |
| --- | --- |
| `--elevation-xs` | Slight lift |
| `--elevation-sm` | Sticky compact nav, small surfaces |
| `--elevation-md` | Mobile menu, rare elevated panels |
| `--inset-image` | Photograph definition |

No `0 25px 50px` theatrical shadows.

---

## Animation principles

Every motion needs a job: feedback, spatial continuity, or preventing a jump. If it is only decorative, cut it.

| Kind | Duration | Easing |
| --- | --- | --- |
| Micro (hover color, arrow) | 150ms | `--ease-out` |
| UI (nav compact, menus) | 220ms | `--ease-out` / Apple `cubic-bezier(0.25, 1, 0.5, 1)` |
| Enter | 400–500ms | `--ease-out` |
| Story / image | 800ms | `--ease-out` |
| Cinematic (later GSAP) | 1–1.5s | `power2.out`–`power4.out` |

Springs: bounce `0`, response `0.3–0.4`. No overshoot on fades, menus, or page load.

Press feedback on pointer-down, not click.

Enter and exit along the same path.

Framer Motion: navbar, menus, buttons, component hover, text reveal.

GSAP + ScrollTrigger (later): hero image reveal, parallax, pinned storytelling. Not for chrome.

`prefers-reduced-motion`: cross-fade, no parallax, no scale stories.

`prefers-reduced-transparency`: solid nav, no blur.

---

## What we refuse

- Generic cleaning-template layouts
- Card grids as the default section pattern
- Giant gradients, blobs, glass stacks
- Multiple accent colors
- Oversized display type
- Bounce, confetti, looping decoration
- Copying Apple’s site, logo, or product layouts
