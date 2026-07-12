## 2025-05-15 - [Skip to Content & Active Navigation]
**Learning:** For multi-page static sites like Survpedia, keyboard navigation is significantly improved by adding a "Skip to Content" link to bypass the repetitive header. Additionally, visual cues like active link highlighting paired with `aria-current="page"` provide essential orientation for both sighted and screen-reader users.
**Action:** Always include a skip-link in the base layout and implement active states in the navigation component using `aria-current`.

## 2025-05-20 - [Reading Progress Bar & Accessibility]
**Learning:** A reading progress bar provides great visual feedback for long-form content. Using `pointer-events-none` prevents it from interfering with UI interactions, and `motion-reduce:transition-none` ensures accessibility for users with motion sensitivities.
**Action:** When adding fixed decorative elements, ensure they don't block clicks and respect motion preferences.

## 2025-05-25 - [Reading Time & Shared UX Components]
**Learning:** For content-heavy sites, reading time estimates help set user expectations. Abstracting these into shared Astro components (like `ReadingTime.astro`) ensures visual and logic consistency across different content collections while reducing code duplication.
**Action:** Always localize UI labels using the `t()` function and abstract repetitive UX patterns into shared components.

## 2025-05-30 - [Interaction Symmetry & Decorative Elements]
**Learning:** For a predictable and inclusive interface, hover-driven visual feedback (like scaling or translations) should always be mirrored on `focus-visible`. Additionally, decorative icons within links should be hidden from screen readers using `aria-hidden="true"` to prevent redundant announcements, especially when the icon is already described by text or an ARIA label.
**Action:** Ensure all interactive animations are triggered by both hover and keyboard focus, and audit icons for proper ARIA concealment.
