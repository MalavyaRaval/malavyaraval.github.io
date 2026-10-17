import { useEffect, useState } from "react";
import { m } from "framer-motion";

const FIRST_NAME = "Malavya";
const FULL_NAME = `${FIRST_NAME} Raval`;

// One entry per character; the last name gets the gradient treatment.
const LETTERS = [...FULL_NAME].map((char, i) => ({
  char,
  isSpace: char === " ",
  isGradient: i > FIRST_NAME.length,
}));
const GLITCHABLE = LETTERS.flatMap((letter, i) => (letter.isSpace ? [] : [i]));

const GRADIENT_CLASS = "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400";
const HACKER_GLYPHS = "01<>/\\_[]{}+-*#%@!$?X0101";

const FIRST_GLITCH_MS = 400;
const GLITCH_EVERY_MS = 3000;
const SCRAMBLE_TICK_MS = 45;
const SCRAMBLE_TICKS = 4;
const GLITCH_DURATION_MS = 550;

// How the glitched letter looks: random glyphs while scrambling, then the real letter in
// hacker styling until the glitch ends. Both phases render the same m.span (same key
// and type), so framer animates from the scramble's end state into the settled one.
const GLITCH_STYLES = {
  CYBERPUNK: {
    scramble: {
      className: "font-mono text-pink-500 inline-block align-middle",
      style: { textShadow: "1px -1px 0 #06b6d4, -1px 1px 0 #f43f5e" },
      animate: { scale: [1, 1.3, 0.8, 1.1], skewX: [0, 15, -15, 0] },
      transition: { duration: 0.18 },
    },
    settled: {
      className: "font-mono text-cyan-300 inline-block font-extrabold align-middle",
      style: { fontFamily: '"Courier New", Courier, monospace', textShadow: "2px -1px 0 #ef4444, -2px 1px 0 #3b82f6" },
      animate: { skewY: 5, scale: 1.1 },
      transition: { duration: 0.3 },
    },
  },
  MATRIX: {
    scramble: {
      className: "font-mono text-green-400 inline-block align-middle",
      style: { textShadow: "0 0 8px #22c55e, 0 0 15px #15803d" },
      animate: { scale: [1, 1.2, 0.9, 1.1], y: [0, -2, 2, 0] },
      transition: { duration: 0.18 },
    },
    settled: {
      className: "font-mono text-green-300 inline-block font-bold align-middle",
      style: { fontFamily: '"Fira Code", "Courier New", Courier, monospace', textShadow: "0 0 8px #22c55e, 0 0 20px #15803d" },
      animate: { skewX: -10, scale: 1.05 },
      transition: { duration: 0.3 },
    },
  },
  NOISE: {
    scramble: {
      className: "font-mono text-gray-400 inline-block align-middle",
      style: { textShadow: "0 0 5px #9ca3af" },
      animate: { scaleY: [1, 0.6, 1.4, 1], x: [0, -3, 3, 0] },
      transition: { duration: 0.18 },
    },
    settled: {
      className: "font-mono text-purple-400 inline-block font-extrabold align-middle",
      style: { fontFamily: '"Courier New", Courier, monospace', textShadow: "0 0 8px #c084fc" },
      animate: { y: -3, scale: 1.05 },
      transition: { duration: 0.3 },
    },
  },
};
const STYLE_NAMES = Object.keys(GLITCH_STYLES);

const pick = (items) => items[Math.floor(Math.random() * items.length)];
const randomGlyph = (style) => (style === "MATRIX" ? (Math.random() > 0.5 ? "0" : "1") : pick(HACKER_GLYPHS));

export default function GlitchName() {
  // null while idle, otherwise { index, style, phase: "scramble" | "settled", char }
  const [glitch, setGlitch] = useState(null);

  useEffect(() => {
    let scrambleTimer;
    let endTimer;

    const triggerGlitch = () => {
      clearInterval(scrambleTimer);
      clearTimeout(endTimer);

      const index = pick(GLITCHABLE);
      const style = pick(STYLE_NAMES);
      setGlitch({ index, style, phase: "scramble", char: randomGlyph(style) });

      let ticks = 0;
      scrambleTimer = setInterval(() => {
        ticks += 1;
        if (ticks < SCRAMBLE_TICKS) {
          const char = randomGlyph(style);
          setGlitch((g) => g && { ...g, char });
        } else {
          clearInterval(scrambleTimer);
          setGlitch((g) => g && { ...g, phase: "settled" });
        }
      }, SCRAMBLE_TICK_MS);

      endTimer = setTimeout(() => setGlitch(null), GLITCH_DURATION_MS);
    };

    const firstTimer = setTimeout(triggerGlitch, FIRST_GLITCH_MS);
    const loopTimer = setInterval(triggerGlitch, GLITCH_EVERY_MS);
    return () => {
      clearTimeout(firstTimer);
      clearInterval(loopTimer);
      clearInterval(scrambleTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <>
      <span className="inline-flex select-none font-black" aria-hidden="true">
        {LETTERS.map(({ char, isSpace, isGradient }, index) => {
          if (isSpace) {
            return (
              <span key={index} className="inline-block">
                &nbsp;
              </span>
            );
          }

          if (glitch?.index === index) {
            const look = GLITCH_STYLES[glitch.style][glitch.phase];
            return (
              <m.span
                key={index}
                className={look.className}
                style={look.style}
                animate={look.animate}
                transition={look.transition}
              >
                {glitch.phase === "scramble" ? glitch.char : char}
              </m.span>
            );
          }

          return (
            <span key={index} className={`${isGradient ? GRADIENT_CLASS : "text-white"} transition-all duration-300 inline-block`}>
              {char}
            </span>
          );
        })}
      </span>
      {/* The animated letters are aria-hidden; assistive tech reads the plain name instead. */}
      <span className="sr-only">{FULL_NAME}</span>
    </>
  );
}
