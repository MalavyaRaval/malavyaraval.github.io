import { useEffect, useRef, useState } from 'react';

const skills = [
  "TypeScript", "Python", "Java", "C++", "JavaScript", "SQL", "C", "Swift",
  "React", "HTML/CSS", "Tailwind CSS", "Responsive Design", "Redux",
  "Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "GraphQL", "Docker",
  "Machine Learning", "Data Analysis", "Jupyter", "Classical ML", "Image Processing",
  "AWS", "Google Cloud", "Azure", "Kubernetes", "Terraform", "GitHub", "CI/CD",
  "Git", "Vim", "Linux", "Figma", "Slack", "Trello", "GitLab", "Vercel", "Photoshop"
];

export default function NeonSkills() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showStatic, setShowStatic] = useState(false);
  const animationFrameRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || showStatic) return;

    container.innerHTML = '';
    const boxCount = skills.length;
    const speed = 1.5;

    const createBox = (text) => {
      const div = document.createElement('div');
      div.className = 'absolute p-4 font-bold font-sans text-black bg-white border-2 border-solid rounded-lg flex items-center justify-center whitespace-nowrap animate-neon-cycle';
      div.innerText = text;
      
      container.appendChild(div);
      
      const w = div.offsetWidth;
      const h = div.offsetHeight;
      
      let x = Math.random() * (container.clientWidth - w);
      let y = Math.random() * (container.clientHeight - h);
      
      const angle = Math.random() * Math.PI * 2;
      let dx = Math.cos(angle) * speed;
      let dy = Math.sin(angle) * speed;
      
      div.style.left = x + 'px';
      div.style.top = y + 'px';
      div.style.animationDelay = (Math.random() * 3) + 's';
      
      return { el: div, x, y, dx, dy, w, h };
    };

    boxesRef.current = skills.map(s => createBox(s));

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [showStatic]);

  useEffect(() => {
    if (isPaused || showStatic) {
      cancelAnimationFrame(animationFrameRef.current);
      return;
    }

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
  }, [isPaused, showStatic]);

  return (
    <div className="relative">
      <div className="flex gap-2 mb-2">
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="bg-blue-500/80 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded transition-colors"
          aria-label={isPaused ? "Resume animation" : "Pause animation"}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button 
          onClick={() => setShowStatic(!showStatic)}
          className="bg-gray-600 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded transition-colors"
        >
          {showStatic ? "Show Animation" : "Show Static List"}
        </button>
      </div>

      {showStatic ? (
        <ul className="w-full h-[600px] bg-gray-900 border-4 border-white rounded-xl p-6 overflow-y-auto list-none flex flex-wrap gap-3 content-start">
            {skills.map(s => (
                <li key={s} className="bg-white text-black px-3 py-1.5 rounded-lg text-sm font-semibold">{s}</li>
            ))}
        </ul>
      ) : (
        <div className="w-full h-[600px] bg-black border-4 border-white rounded-xl relative overflow-hidden" ref={containerRef} role="img" aria-label="Moving neon skill cloud visualization.">
          <style>{`
            @keyframes neon-cycle {
              0% { border-color: #FF00FF; box-shadow: 0 0 10px #FF00FF; }
              33% { border-color: #00FFFF; box-shadow: 0 0 10px #00FFFF; }
              66% { border-color: #00FF00; box-shadow: 0 0 10px #00FF00; }
              100% { border-color: #FF00FF; box-shadow: 0 0 10px #FF00FF; }
            }
            .animate-neon-cycle { animation: neon-cycle 3s infinite linear; }
          `}</style>
        </div>
      )}
    </div>
  );
}
