import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const boxCount = skills.length;
    const boxes = [];
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

    for (let i = 0; i < boxCount; i++) {
      boxes.push(createBox(skills[i]));
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

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full h-[600px] bg-black border-4 border-white rounded-xl relative overflow-hidden" ref={containerRef}>
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
  );
}
