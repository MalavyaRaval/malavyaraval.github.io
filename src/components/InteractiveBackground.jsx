import { useEffect, useRef } from "react";

// Particle colours (alpha is appended per frame): sky-400, blue-400, purple-400, white.
const PARTICLE_COLORS = ["rgba(56, 189, 248, ", "rgba(96, 165, 250, ", "rgba(192, 132, 252, ", "rgba(255, 255, 255, "];
const MAX_PARTICLES = 120;
const PIXELS_PER_PARTICLE = 10000;
const FORCE_RADIUS = 150; // cursor interaction radius (px)
const FORCE_RADIUS_SQ = FORCE_RADIUS * FORCE_RADIUS;
const MAX_PUSH = 25; // how far a particle is pushed away right at the cursor (px)
const MAX_KEPT_HEIGHT_CHANGE = 150; // px; covers mobile browser toolbars (see resizeCanvas)

const particleCountFor = (width, height) => Math.min(MAX_PARTICLES, Math.floor((width * height) / PIXELS_PER_PARTICLE));

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.2, // very slow horizontal drift
    vy: Math.random() * 1.5 + 0.5, // slow downward speed
    radius: Math.random() * 2 + 1, // 1px to 3px
    baseAlpha: Math.random() * 0.4 + 0.1, // opacity 0.1 to 0.5
    alpha: 0,
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
  };
}

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -1000, y: -1000, active: false };
    let particles = [];
    let seededWidth = -1;
    let frameId;

    const resizeCanvas = () => {
      const previousHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const { width, height } = canvas;
      const target = particleCountFor(width, height);

      // Small height-only changes are mobile browser toolbars showing/hiding while scrolling:
      // keep the field so the background doesn't blink and reshuffle on every scroll direction
      // change. Particles now below the bottom edge are dropped (they would otherwise all
      // re-enter from the top in the same frame) and the count is trimmed or topped up.
      if (width === seededWidth && Math.abs(height - previousHeight) <= MAX_KEPT_HEIGHT_CHANGE) {
        particles = particles.filter((p) => p.y <= height);
        if (particles.length > target) particles.length = target;
        while (particles.length < target) particles.push(createParticle(width, height));
        return;
      }

      // Anything else (first run, new width, big height jump) starts a fresh field.
      seededWidth = width;
      particles = Array.from({ length: target }, () => createParticle(width, height));
    };

    // `resize` can fire without a size change, and assigning canvas.width/height clears the
    // bitmap, so skip those. (Only for events: the effect must always seed on mount, even when
    // it re-runs on an already-sized canvas, as under StrictMode or Fast Refresh.)
    const handleResize = () => {
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) resizeCanvas();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const animate = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Extremely subtle glow around the cursor. The gradient is fully transparent beyond
      // FORCE_RADIUS, so only its bounding square needs filling.
      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, FORCE_RADIUS);
        glow.addColorStop(0, "rgba(59, 130, 246, 0.07)"); // blue-500, very faint
        glow.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(mouse.x - FORCE_RADIUS, mouse.y - FORCE_RADIUS, FORCE_RADIUS * 2, FORCE_RADIUS * 2);
      }

      // Constant per frame (resizing the canvas resets context state, so set them here).
      ctx.lineWidth = 0.5;
      ctx.shadowColor = "rgba(56, 189, 248, 0.5)";

      for (const p of particles) {
        // Drift down, wrapping around the edges.
        p.y += p.vy;
        p.x += p.vx;
        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
          p.vy = Math.random() * 1.5 + 0.5;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        let x = p.x;
        let y = p.y;
        let alphaScale = 1;
        let near = false;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          near = distSq < FORCE_RADIUS_SQ;
          if (near) {
            // Push away from the cursor (stronger when closer) and brighten.
            const dist = Math.sqrt(distSq);
            const force = (FORCE_RADIUS - dist) / FORCE_RADIUS;
            x += (dx / dist) * force * MAX_PUSH;
            y += (dy / dist) * force * MAX_PUSH;
            alphaScale = 1 + force * 2.0;

            // Faint line from the cursor to the particle.
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(x, y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${force * 0.12})`;
            ctx.stroke();
          }
        }

        // Ease alpha toward its target so brightening is smooth.
        p.alpha += (p.baseAlpha * alphaScale - p.alpha) * 0.1;

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(0.9, p.alpha)})`;
        // Particles near the cursor get a soft glow. (A pushed particle ends up 5/6·d + 25px
        // from the cursor, which is inside FORCE_RADIUS exactly when d was.)
        if (near) ctx.shadowBlur = 8;
        ctx.fill();
        if (near) ctx.shadowBlur = 0;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "screen" }} />;
}
