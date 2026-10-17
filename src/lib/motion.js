// Shared framer-motion presets. Defined once at module scope so every render reuses the
// same objects.

// Fade in and slide up the first time a section body scrolls into view.
export const revealOnScroll = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};
