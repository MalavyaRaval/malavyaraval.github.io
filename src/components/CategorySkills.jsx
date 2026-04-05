import { useEffect, useRef } from 'react';

export default function CategorySkills({ skills }) {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const uniqueSkills = [...new Set(skills)];
    const speed = 1.5;
    
    const colors = ['#FF00FF', '#00FFFF', '#00FF00', '#FF0000', '#FFFF00', '#FF8C00'];

    const createBox = (text) => {
      const div = document.createElement('div');
      div.className = 'absolute px-4 py-2 font-bold font-sans text-lg text-black bg-white rounded-lg flex items-center justify-center whitespace-nowrap border-2 border-solid';
      div.innerText = text;
      div.style.transition = 'border-color 0.5s ease, box-shadow 0.5s ease';
      
      let colorIndex = Math.floor(Math.random() * colors.length);
      div.style.borderColor = colors[colorIndex];
      div.style.boxShadow = `0 0 5px ${colors[colorIndex]}`;
      
      const interval = setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        div.style.borderColor = colors[colorIndex];
        div.style.boxShadow = `0 0 5px ${colors[colorIndex]}`;
      }, 3000 + Math.random() * 2000);
      
      container.appendChild(div);
      
      const w = div.offsetWidth;
      const h = div.offsetHeight;
      
      let x = Math.random() * Math.max(0, container.clientWidth - w);
      let y = Math.random() * Math.max(0, container.clientHeight - h);
      
      const angle = Math.random() * Math.PI * 2;
      let dx = Math.cos(angle) * speed;
      let dy = Math.sin(angle) * speed;
      
      return { el: div, x, y, dx, dy, w, h, interval };
    };

    boxesRef.current = uniqueSkills.map(s => createBox(s));

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      boxesRef.current.forEach(box => clearInterval(box.interval));
    };
  }, [skills]);

  useEffect(() => {
    function animate() {
      boxesRef.current.forEach(box => {
        const container = containerRef.current;
        if (!container) return;

        box.x += box.dx;
        box.y += box.dy;

        if (box.x <= 0 || box.x + box.w >= container.clientWidth) box.dx *= -1;
        if (box.y <= 0 || box.y + box.h >= container.clientHeight) box.dy *= -1;

        box.el.style.left = box.x + 'px';
        box.el.style.top = box.y + 'px';
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
          aria-label="Moving skill cloud visualization: technical skills floating."
      />
    </div>
  );
}
