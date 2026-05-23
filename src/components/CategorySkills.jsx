import { useEffect, useRef } from 'react';

export default function CategorySkills({ skills }) {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const boxesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const uniqueSkills = [...new Set(skills)];
    // Vibrant full-spectrum color palette
    const colors = [
      '#3b82f6', // blue
      '#06b6d4', // cyan
      '#8b5cf6', // violet
      '#10b981', // emerald
      '#f59e0b', // amber
      '#ec4899', // pink
      '#ef4444', // red
      '#f97316', // orange
      '#84cc16', // lime
      '#14b8a6', // teal
      '#a855f7', // purple
      '#e11d48', // rose
    ];

    const createBox = (text) => {
      const div = document.createElement('div');
      div.className = 'absolute px-4 py-1.5 font-medium font-sans text-xs md:text-sm text-gray-100 bg-slate-900/90 backdrop-blur-md rounded-xl flex items-center justify-center whitespace-nowrap border-2 border-solid cursor-pointer hover:scale-110 hover:text-white transition-all duration-300 select-none';
      div.innerText = text;
      
      let colorIndex = Math.floor(Math.random() * colors.length);
      const chosenColor = colors[colorIndex];
      div.style.borderColor = chosenColor; // fully opaque, vivid border
      div.style.boxShadow = `0 0 8px ${chosenColor}90, 0 0 20px ${chosenColor}40, inset 0 0 8px ${chosenColor}15`;
      
      // Hover glows — even brighter
      div.addEventListener('mouseenter', () => {
        div.style.boxShadow = `0 0 12px ${chosenColor}, 0 0 30px ${chosenColor}80, 0 0 50px ${chosenColor}40, inset 0 0 12px ${chosenColor}30`;
      });
      div.addEventListener('mouseleave', () => {
        div.style.boxShadow = `0 0 8px ${chosenColor}90, 0 0 20px ${chosenColor}40, inset 0 0 8px ${chosenColor}15`;
      });

      container.appendChild(div);
      
      const w = div.offsetWidth || 80;
      const h = div.offsetHeight || 30;
      
      // x and y will be initialized on first animation frame when clientWidth/clientHeight are measured
      return { 
        el: div, 
        x: -1, 
        y: -1, 
        dx: (Math.random() - 0.5) * 2.5, 
        dy: (Math.random() - 0.5) * 2.5, 
        w, h,
        color: chosenColor
      };
    };

    boxesRef.current = uniqueSkills.map(s => createBox(s));

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [skills]);

  useEffect(() => {
    function animate() {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const boxes = boxesRef.current;

      if (containerWidth > 0 && containerHeight > 0) {
        boxes.forEach((box, i) => {
          // Initialize coordinates and measure actual sizes if not set yet
          if (box.x === -1 || box.y === -1) {
            box.w = box.el.offsetWidth || box.w;
            box.h = box.el.offsetHeight || box.h;
            box.x = Math.random() * Math.max(10, containerWidth - box.w);
            box.y = Math.random() * Math.max(10, containerHeight - box.h);
          }

          // Move
          box.x += box.dx;
          box.y += box.dy;

          // Repel Mouse (gently)
          const dx = box.x + box.w / 2 - mouseRef.current.x;
          const dy = box.y + box.h / 2 - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            box.dx += (dx / dist) * force * 0.1;
            box.dy += (dy / dist) * force * 0.1;
          }

          // Drag and speed limits
          const speed = Math.sqrt(box.dx * box.dx + box.dy * box.dy);
          const maxSpeed = 4.0;
          const minSpeed = 1.2;
          if (speed > maxSpeed) {
            box.dx = (box.dx / speed) * maxSpeed;
            box.dy = (box.dy / speed) * maxSpeed;
          } else if (speed < minSpeed) {
            const angle = Math.random() * Math.PI * 2;
            box.dx = Math.cos(angle) * minSpeed;
            box.dy = Math.sin(angle) * minSpeed;
          }

          // Boundary checks & bouncing (perfectly elastic)
          if (box.x <= 4) {
            box.x = 4;
            box.dx = Math.abs(box.dx);
          } else if (box.x + box.w >= containerWidth - 4) {
            box.x = containerWidth - box.w - 4;
            box.dx = -Math.abs(box.dx);
          }

          if (box.y <= 4) {
            box.y = 4;
            box.dy = Math.abs(box.dy);
          } else if (box.y + box.h >= containerHeight - 4) {
            box.y = containerHeight - box.h - 4;
            box.dy = -Math.abs(box.dy);
          }
        });

        // Box-to-box collision separation & velocity swapping
        for (let i = 0; i < boxes.length; i++) {
          const box = boxes[i];
          if (box.x === -1) continue;

          for (let j = i + 1; j < boxes.length; j++) {
            const other = boxes[j];
            if (other.x === -1) continue;

            const overlapX = Math.min(box.x + box.w, other.x + other.w) - Math.max(box.x, other.x);
            const overlapY = Math.min(box.y + box.h, other.y + other.h) - Math.max(box.y, other.y);

            if (overlapX > 0 && overlapY > 0) {
              // Push apart
              if (overlapX < overlapY) {
                const move = overlapX / 2;
                if (box.x < other.x) {
                  box.x -= move;
                  other.x += move;
                } else {
                  box.x += move;
                  other.x -= move;
                }
                // Swap velocities
                const tempDx = box.dx;
                box.dx = other.dx;
                other.dx = tempDx;
              } else {
                const move = overlapY / 2;
                if (box.y < other.y) {
                  box.y -= move;
                  other.y += move;
                } else {
                  box.y += move;
                  other.y -= move;
                }
                // Swap velocities
                const tempDy = box.dy;
                box.dy = other.dy;
                other.dy = tempDy;
              }
            }
          }
        }

        // Apply styles
        boxes.forEach(box => {
          if (box.x !== -1) {
            box.el.style.left = `${box.x}px`;
            box.el.style.top = `${box.y}px`;
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <div className="relative mt-2">
      <div 
        className="w-full h-52 bg-slate-950/45 border border-slate-800/80 rounded-2xl relative overflow-hidden" 
        ref={containerRef}
        role="img"
        aria-label="Moving skill cloud visualization."
      />
    </div>
  );
}

