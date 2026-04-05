import { useEffect, useRef } from 'react';

export default function CategorySkills({ skills }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const uniqueSkills = [...new Set(skills)];
    const boxCount = uniqueSkills.length;
    const boxes = [];
    const speed = 1.5;
    
    const colors = ['#FF00FF', '#00FFFF', '#00FF00', '#FF0000', '#FFFF00', '#FF8C00'];

    const createBox = (text) => {
      const div = document.createElement('div');
      // Thinner border-2, transition for smooth color switching
      div.className = 'absolute px-4 py-2 font-bold font-sans text-lg text-black bg-white rounded-lg flex items-center justify-center whitespace-nowrap border-2 border-solid';
      div.innerText = text;
      div.style.transition = 'border-color 0.5s ease, box-shadow 0.5s ease';
      
      // Initial color
      let colorIndex = Math.floor(Math.random() * colors.length);
      div.style.borderColor = colors[colorIndex];
      div.style.boxShadow = `0 0 5px ${colors[colorIndex]}`;
      
      // Cycle color every few seconds
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
      
      div.style.left = x + 'px';
      div.style.top = y + 'px';
      
      return { el: div, x, y, dx, dy, w, h, interval };
    };

    for (let i = 0; i < boxCount; i++) {
      boxes.push(createBox(uniqueSkills[i]));
    }

    let animationId;
    function animate() {
      boxes.forEach(box => {
        box.x += box.dx;
        box.y += box.dy;

        if (box.x <= 0 || box.x + box.w >= container.clientWidth) box.dx *= -1;
        if (box.y <= 0 || box.y + box.h >= container.clientHeight) box.dy *= -1;

        box.el.style.left = box.x + 'px';
        box.el.style.top = box.y + 'px';
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      boxes.forEach(box => clearInterval(box.interval));
    };
  }, [skills]);

  return (
    <div 
      className="w-full h-48 bg-black border border-white/20 rounded-xl relative overflow-hidden" 
      ref={containerRef}
      role="img"
      aria-label="Moving skill cloud visualization: technical skills floating."
    >
    </div>
  );
}
