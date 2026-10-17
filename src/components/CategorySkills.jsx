import { useEffect, useRef } from "react";

// Vibrant full-spectrum palette for pill borders and glows.
const COLORS = [
  "#3b82f6", // blue
  "#06b6d4", // cyan
  "#8b5cf6", // violet
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ec4899", // pink
  "#ef4444", // red
  "#f97316", // orange
  "#84cc16", // lime
  "#14b8a6", // teal
  "#a855f7", // purple
  "#e11d48", // rose
];

const PILL_CLASS =
  "absolute px-4 py-1.5 font-medium font-sans text-xs md:text-sm text-gray-100 bg-slate-900/90 backdrop-blur-md rounded-xl flex items-center justify-center whitespace-nowrap border-2 border-solid cursor-pointer hover:scale-110 hover:text-white transition-all duration-300 select-none";

const EDGE = 4; // pills bounce this far inside the container (px)
const REPEL_RADIUS = 100; // cursor repulsion radius (px)
const REPEL_STRENGTH = 0.1;
const MAX_SPEED = 4.0; // px per frame
const MIN_SPEED = 1.2; // px per frame

// Glows append 2-digit hex alpha to the #rrggbb colour.
const idleGlow = (c) => `0 0 8px ${c}90, 0 0 20px ${c}40, inset 0 0 8px ${c}15`;
const hoverGlow = (c) => `0 0 12px ${c}, 0 0 30px ${c}80, 0 0 50px ${c}40, inset 0 0 12px ${c}30`;

// Pills are plain DOM nodes moved by the animation loop, so animating never re-renders React.
function createPill(container, text) {
  const el = document.createElement("div");
  el.className = PILL_CLASS;
  el.textContent = text;

  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const idle = idleGlow(color);
  const hover = hoverGlow(color);
  el.style.borderColor = color;
  el.style.boxShadow = idle;
  el.addEventListener("mouseenter", () => {
    el.style.boxShadow = hover;
  });
  el.addEventListener("mouseleave", () => {
    el.style.boxShadow = idle;
  });
  container.appendChild(el);

  // Size and position are assigned on the first frame the container has a size.
  return { el, x: -1, y: -1, dx: (Math.random() - 0.5) * 2.5, dy: (Math.random() - 0.5) * 2.5, w: 80, h: 30 };
}

export default function CategorySkills({ skills, label }) {
  const containerRef = useRef(null);

  // One effect owns the pills, the listeners and the animation loop, so a re-run (new
  // `skills`) always tears down and restarts all of them together.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pills = [...new Set(skills)].map((text) => createPill(container, text));
    const mouse = { x: -1000, y: -1000 };
    // Cached size: reading clientWidth every frame forces a layout after the other clouds'
    // style writes. ResizeObserver keeps it current instead.
    let width = container.clientWidth;
    let height = container.clientHeight;
    let frameId = null;

    // One physics step plus the style writes.
    const step = () => {
      if (width > 0 && height > 0) {
        for (const p of pills) {
          if (p.x === -1 || p.y === -1) {
            p.w = p.el.offsetWidth || p.w;
            p.h = p.el.offsetHeight || p.h;
            p.x = Math.random() * Math.max(10, width - p.w);
            p.y = Math.random() * Math.max(10, height - p.h);
          }

          p.x += p.dx;
          p.y += p.dy;

          // Gently repel from the cursor.
          const dx = p.x + p.w / 2 - mouse.x;
          const dy = p.y + p.h / 2 - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_RADIUS) {
            const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
            p.dx += (dx / dist) * force * REPEL_STRENGTH;
            p.dy += (dy / dist) * force * REPEL_STRENGTH;
          }

          // Keep the speed within [MIN_SPEED, MAX_SPEED]; a stalled pill gets a random heading.
          const speed = Math.sqrt(p.dx * p.dx + p.dy * p.dy);
          if (speed > MAX_SPEED) {
            p.dx = (p.dx / speed) * MAX_SPEED;
            p.dy = (p.dy / speed) * MAX_SPEED;
          } else if (speed < MIN_SPEED) {
            const angle = Math.random() * Math.PI * 2;
            p.dx = Math.cos(angle) * MIN_SPEED;
            p.dy = Math.sin(angle) * MIN_SPEED;
          }

          // Bounce off the walls (perfectly elastic).
          if (p.x <= EDGE) {
            p.x = EDGE;
            p.dx = Math.abs(p.dx);
          } else if (p.x + p.w >= width - EDGE) {
            p.x = width - p.w - EDGE;
            p.dx = -Math.abs(p.dx);
          }
          if (p.y <= EDGE) {
            p.y = EDGE;
            p.dy = Math.abs(p.dy);
          } else if (p.y + p.h >= height - EDGE) {
            p.y = height - p.h - EDGE;
            p.dy = -Math.abs(p.dy);
          }
        }

        // Separate overlapping pills along the smaller overlap axis and swap that velocity.
        for (let i = 0; i < pills.length; i++) {
          const a = pills[i];
          for (let j = i + 1; j < pills.length; j++) {
            const b = pills[j];
            const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
            const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
            if (overlapX <= 0 || overlapY <= 0) continue;

            if (overlapX < overlapY) {
              const move = overlapX / 2;
              if (a.x < b.x) {
                a.x -= move;
                b.x += move;
              } else {
                a.x += move;
                b.x -= move;
              }
              [a.dx, b.dx] = [b.dx, a.dx];
            } else {
              const move = overlapY / 2;
              if (a.y < b.y) {
                a.y -= move;
                b.y += move;
              } else {
                a.y += move;
                b.y -= move;
              }
              [a.dy, b.dy] = [b.dy, a.dy];
            }
          }
        }

        for (const p of pills) {
          p.el.style.left = `${p.x}px`;
          p.el.style.top = `${p.y}px`;
        }
      }
    };

    const loop = () => {
      step();
      frameId = requestAnimationFrame(loop);
    };
    const start = () => {
      if (frameId === null) frameId = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };

    // Place the pills immediately so they are never seen unpositioned.
    step();

    // Only animate while the cloud is on (or within 200px of) the screen.
    const visibility = new IntersectionObserver(
      (entries) => {
        if (entries[entries.length - 1].isIntersecting) start();
        else stop();
      },
      { rootMargin: "200px 0px" },
    );
    visibility.observe(container);

    const resize = new ResizeObserver(() => {
      width = container.clientWidth;
      height = container.clientHeight;
    });
    resize.observe(container);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stop();
      visibility.disconnect();
      resize.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      for (const p of pills) p.el.remove();
    };
  }, [skills]);

  return (
    <div className="relative mt-2">
      <div
        className="w-full h-52 bg-slate-950/45 border border-slate-800/80 rounded-2xl relative overflow-hidden"
        ref={containerRef}
        role="img"
        aria-label={`${label}: ${skills.join(", ")}`}
      />
    </div>
  );
}
