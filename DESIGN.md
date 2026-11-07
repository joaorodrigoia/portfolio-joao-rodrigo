# Visual direction

## North Star

A cinematic project dossier: warm machined obsidian, precise editorial typography, and a restrained brass signal. The page should feel like moving through a sequence of crafted digital systems. Motion carries the chapter changes; light and depth help distinguish the chapters without competing with those transitions.

## Palette

| Role | Value | Runtime source |
| --- | --- | --- |
| Deep warm base | `#0D0B09` | `--surface-0` in `app/globals.css` |
| Raised panel | `#161310` | `--surface-1` in `app/globals.css` |
| Primary text | `#EDE5D8` | `--ink-1` in `app/globals.css` |
| Editorial white | `#FAF5EE` | `--ink-0` in `app/globals.css` |
| Brass accent | `#C9A852` | `--accent` in `app/globals.css` |
| Cool instrument accent | `#8FA8C4` | `--accent-cool` in `app/globals.css` |

Ambient brass, steel-blue, and ember glows are low-opacity CSS gradients in `app/globals.css`. They are surface treatments, not interactive state colors. The project intro gradient is shared with the laptop texture capture through `.sd-header::before`; keep those two views aligned.

## Type and layout

- Plus Jakarta Sans carries interface copy and display headings.
- Instrument Serif, used in italics, is the restrained editorial counterpoint.
- JetBrains Mono is reserved for labels, counters, process steps, and technical details.
- Chapter headers use the existing editorial rule and accent label. Content follows a single sequence: selected work, current work, skills, profile, contact.
- Keep the 1120px content measure, generous chapter spacing, asymmetric project framing, and double-bezel panel language already defined by the runtime CSS.

## Motion and behavior

The hero, scroll-scrubbed project deck, section reveals, skill physics, transitions, contact reveal, and pointer treatments are part of the identity. Preserve their existing GSAP, Three.js, Lenis, and Matter.js contracts when making visual changes. Respect `prefers-reduced-motion`; ambient gradients remain static and require no animation.

## Token ownership

`app/globals.css` is canonical for runtime colors, typography, spacing, easing, and elevation. This file records accepted visual intent and mirrors those values; it does not generate CSS tokens.
