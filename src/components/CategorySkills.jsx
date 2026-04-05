import { useEffect, useRef } from 'react';

export default function CategorySkills({ skills }) {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const boxesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const uniqueSkills = [...new Set(skills)];
    const colors = ['#FF00FF', '#00FFFF', '#00FF00', '#FF0000', '#FFFF00', '#FF8C00'];

    const createBox = (text) => {
      const div = document.createElement('div');
      div.className = 'absolute px-4 py-2 font-bold font-sans text-lg text-black bg-white rounded-lg flex items-center justify-center whitespace-nowrap border-2 border-solid cursor-pointer hover:scale-110 transition-transform duration-200';
      div.innerText = text;
      
      let colorIndex = Math.floor(Math.random() * colors.length);
      div.style.borderColor = colors[colorIndex];
      div.style.boxShadow = `0 0 5px ${colors[colorIndex]}`;
      
      container.appendChild(div);
      
      const w = div.offsetWidth;
      const h = div.offsetHeight;
      
      return { 
        el: div, 
        x: Math.random() * Math.max(0, container.clientWidth - w), 
        y: Math.random() * Math.max(0, container.clientHeight - h), 
        dx: (Math.random() - 0.5) * 4, 
        dy: (Math.random() - 0.5) * 4, 
        rotation: 0,
        dRotation: (Math.random() - 0.5) * 2,
        w, h 
      };
    };

    boxesRef.current = uniqueSkills.map(s => createBox(s));

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [skills]);

  useEffect(() => {
    function animate() {
      const container = containerRef.current;
      if (!container) return;

      const boxes = boxesRef.current;

      boxes.forEach((box, i) => {
        // Move
        box.x += box.dx;
        box.y += box.dy;
        box.rotation += box.dRotation;

        // Repel Mouse
        const dx = box.x + box.w / 2 - mouseRef.current.x;
        const dy = box.y + box.h / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          box.dx += (dx / dist) * 0.5;
          box.dy += (dy / dist) * 0.5;
        }

        // Bounce Walls
        if (box.x <= 0 || box.x + box.w >= container.clientWidth) {
          box.dx *= -1;
          box.dRotation *= -1;
        }
        if (box.y <= 0 || box.y + box.h >= container.clientHeight) {
          box.dy *= -1;
          box.dRotation *= -1;
        }

        // Collision Detection
        for (let j = i + 1; j < boxes.length; j++) {
          const other = boxes[j];
          if (box.x < other.x + other.w && box.x + box.w > other.x &&
              box.y < other.y + other.h && box.y + box.h > other.y) {
            box.dx *= -1;
            box.dy *= -1;
            other.dx *= -1;
            other.dy *= -1;
          }
        }

        // Apply
        box.el.style.left = box.x + 'px';
        box.el.style.top = box.y + 'px';
        box.el.style.transform = `rotate(${box.rotation}deg)`;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <div className="relative">
      <div 
          className="w-full h-48 bg-black border border-white/20 rounded-xl relative overflow-hidden" 
          ref={containerRef}
          role="img"
          aria-label="Moving skill cloud visualization: technical skills floating with interactivity."
      />
    </div>
  );
}
