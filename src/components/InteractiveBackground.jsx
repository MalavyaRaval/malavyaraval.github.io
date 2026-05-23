import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 10000));
    const forceRadius = 150; // mouse attraction/repulsion radius

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const density = Math.min(120, Math.floor((canvas.width * canvas.height) / 10000));
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // very slow horizontal drift
          vy: Math.random() * 1.5 + 0.5,   // slow downward speed
          radius: Math.random() * 2 + 1,    // 1px to 3px radius
          baseAlpha: Math.random() * 0.4 + 0.1, // opacity 0.1 to 0.5
          alpha: 0,
          color: getRandomColor(),
        });
      }
    };

    const getRandomColor = () => {
      // Return a color palette of cyan, blue, purple, and white
      const colors = [
        "rgba(56, 189, 248, ",   // sky-400
        "rgba(96, 165, 250, ",   // blue-400
        "rgba(192, 132, 252, ",  // purple-400
        "rgba(255, 255, 255, ",  // white
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Mouse events
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = {
        x: -1000,
        y: -1000,
        active: false,
      };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initial setup
    resizeCanvas();

    // Animation loop
    const animate = () => {
      // Clear canvas with a very faint trailing fade-out for tail effects
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      // Draw mouse background glow (extremely subtle)
      if (mouse.active) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          forceRadius
        );
        glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.07)"); // blue-500 very faint
        glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((p) => {
        // Move particle down
        p.y += p.vy;
        p.x += p.vx;

        // Wrap around boundary
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
          p.vy = Math.random() * 1.5 + 0.5;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Interactive logic with mouse
        let finalX = p.x;
        let finalY = p.y;
        let scaleAlpha = 1;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < forceRadius) {
            // Calculate push force (stronger closer to the center)
            const force = (forceRadius - dist) / forceRadius;
            const pushX = (dx / dist) * force * 25; // push up to 25px
            const pushY = (dy / dist) * force * 25;

            finalX += pushX;
            finalY += pushY;

            // Brighten up the particle
            scaleAlpha = 1 + force * 2.0;

            // Draw line from mouse to particle
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(finalX, finalY);
            // Dynamic gradient line
            const lineAlpha = force * 0.12;
            ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Interpolate alpha to keep it smooth
        p.alpha += (p.baseAlpha * scaleAlpha - p.alpha) * 0.1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(0.9, p.alpha)})`;
        ctx.shadowBlur = mouse.active && Math.sqrt(Math.pow(finalX - mouse.x, 2) + Math.pow(finalY - mouse.y, 2)) < forceRadius ? 8 : 0;
        ctx.shadowColor = "rgba(56, 189, 248, 0.5)";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
