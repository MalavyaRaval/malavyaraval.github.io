import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GlitchName() {
  const originalName = [
    { char: "M", isGradient: false },
    { char: "a", isGradient: false },
    { char: "l", isGradient: false },
    { char: "a", isGradient: false },
    { char: "v", isGradient: false },
    { char: "y", isGradient: false },
    { char: "a", isGradient: false },
    { char: " ", isSpace: true },
    { char: "R", isGradient: true },
    { char: "a", isGradient: true },
    { char: "v", isGradient: true },
    { char: "a", isGradient: true },
    { char: "l", isGradient: true },
  ];

  // State to track which index is currently glitching
  const [glitchedIndex, setGlitchedIndex] = useState(null);
  
  // Phase of the glitch: "scramble" (fast character swapping) or "settled" (styled letter) or "none"
  const [glitchPhase, setGlitchPhase] = useState("none");
  
  // Current display character during scramble phase
  const [currentDisplayChar, setCurrentDisplayChar] = useState("");
  
  // Active glitch style type
  const [activeStyle, setActiveStyle] = useState("CYBERPUNK");

  const glitchTypes = ["CYBERPUNK", "MATRIX", "NOISE"];
  
  const hackerGlyphs = "01<>/\\_[]{}+-*#%@!$?X0101";

  useEffect(() => {
    const triggerGlitch = () => {
      // Pick a random letter index (exclude space at index 7)
      const letterIndices = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
      const randomIndex = letterIndices[Math.floor(Math.random() * letterIndices.length)];
      
      // Pick a random glitch style
      const randomStyle = glitchTypes[Math.floor(Math.random() * glitchTypes.length)];
      
      setActiveStyle(randomStyle);
      setGlitchedIndex(randomIndex);
      setGlitchPhase("scramble");

      // Phase 1: Scramble phase (fast swapping of random characters)
      let ticks = 0;
      const scrambleInterval = setInterval(() => {
        let displayChar = hackerGlyphs[Math.floor(Math.random() * hackerGlyphs.length)];
        
        // Sometimes use binary
        if (randomStyle === "MATRIX") {
          displayChar = Math.random() > 0.5 ? "0" : "1";
        }
        
        setCurrentDisplayChar(displayChar);
        ticks++;
        
        if (ticks >= 4) {
          clearInterval(scrambleInterval);
          // Phase 2: Settle on the original letter but in glitch styling
          setGlitchPhase("settled");
        }
      }, 45);

      // Phase 3: Settle ends after another short period, back to normal
      setTimeout(() => {
        setGlitchedIndex(null);
        setGlitchPhase("none");
      }, 550);
    };

    // Run glitch every 3000ms
    const mainInterval = setInterval(triggerGlitch, 3000);
    
    // Run once initially after 400ms
    const initialTimeout = setTimeout(triggerGlitch, 400);

    return () => {
      clearInterval(mainInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <span className="inline-flex select-none font-black">
      {originalName.map((item, index) => {
        if (item.isSpace) {
          return <span key={index} className="inline-block">&nbsp;</span>;
        }

        const isGlitched = glitchedIndex === index;

        // Default styling classes
        const baseGradientClass = "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400";
        const baseNormalClass = "text-white";
        const baseClass = item.isGradient ? baseGradientClass : baseNormalClass;

        if (isGlitched) {
          if (glitchPhase === "scramble") {
            // Neon Green/Cyan Matrix coding style
            if (activeStyle === "MATRIX") {
              return (
                <motion.span
                  key={index}
                  className="font-mono text-green-400 inline-block align-middle"
                  style={{
                    textShadow: "0 0 8px #22c55e, 0 0 15px #15803d",
                  }}
                  animate={{
                    scale: [1, 1.2, 0.9, 1.1],
                    y: [0, -2, 2, 0],
                  }}
                  transition={{ duration: 0.18 }}
                >
                  {currentDisplayChar}
                </motion.span>
              );
            }
            
            // Cyberpunk magenta/cyan scramble style
            if (activeStyle === "CYBERPUNK") {
              return (
                <motion.span
                  key={index}
                  className="font-mono text-pink-500 inline-block align-middle"
                  style={{
                    textShadow: "1px -1px 0 #06b6d4, -1px 1px 0 #f43f5e",
                  }}
                  animate={{
                    scale: [1, 1.3, 0.8, 1.1],
                    skewX: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 0.18 }}
                >
                  {currentDisplayChar}
                </motion.span>
              );
            }
            
            // Digital noise style (gray scale / binary)
            return (
              <motion.span
                key={index}
                className="font-mono text-gray-400 inline-block align-middle"
                style={{
                  textShadow: "0 0 5px #9ca3af",
                }}
                animate={{
                  scaleY: [1, 0.6, 1.4, 1],
                  x: [0, -3, 3, 0],
                }}
                transition={{ duration: 0.18 }}
              >
                {currentDisplayChar}
              </motion.span>
            );
          }

          if (glitchPhase === "settled") {
            // Settle Phase: letter returns, but in hacker styling
            if (activeStyle === "MATRIX") {
              return (
                <motion.span
                  key={index}
                  className="font-mono text-green-300 inline-block font-bold align-middle"
                  style={{
                    fontFamily: '"Fira Code", "Courier New", Courier, monospace',
                    textShadow: "0 0 8px #22c55e, 0 0 20px #15803d",
                  }}
                  animate={{ skewX: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.char}
                </motion.span>
              );
            }

            if (activeStyle === "CYBERPUNK") {
              return (
                <motion.span
                  key={index}
                  className="font-mono text-cyan-300 inline-block font-extrabold align-middle"
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    textShadow: "2px -1px 0 #ef4444, -2px 1px 0 #3b82f6",
                  }}
                  animate={{ skewY: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.char}
                </motion.span>
              );
            }

            // NOISE
            return (
              <motion.span
                key={index}
                className="font-mono text-purple-400 inline-block font-extrabold align-middle"
                style={{
                  fontFamily: '"Courier New", Courier, monospace',
                  textShadow: "0 0 8px #c084fc",
                }}
                animate={{ y: -3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.char}
              </motion.span>
            );
          }
        }

        // Standard render
        return (
          <span
            key={index}
            className={`${baseClass} transition-all duration-300 inline-block`}
          >
            {item.char}
          </span>
        );
      })}
    </span>
  );
}
