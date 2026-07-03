## 2025-05-15 - [Skip to Content & Active Navigation]
**Learning:** For multi-page static sites like Survpedia, keyboard navigation is significantly improved by adding a "Skip to Content" link to bypass the repetitive header. Additionally, visual cues like active link highlighting paired with `aria-current="page"` provide essential orientation for both sighted and screen-reader users.
**Action:** Always include a skip-link in the base layout and implement active states in the navigation component using `aria-current`.

## 2025-05-20 - [Reading Progress Bar & Accessibility]
**Learning:** A reading progress bar provides great visual feedback for long-form content. Using `pointer-events-none` prevents it from interfering with UI interactions, and `motion-reduce:transition-none` ensures accessibility for users with motion sensitivities.
**Action:** When adding fixed decorative elements, ensure they don't block clicks and respect motion preferences.
