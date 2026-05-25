import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    num: "01",
    title: "LSP",
    subtitle: "Logical Scoring Of Prefrences",
    description:
      "An AI Aid for General Decision-Making Assistance. Personalized Recomender System desgined to provide numerical reasonging on the suitablity of options.",
    tags: ["JavaScript", "LSP", "DevTools"],
    link: "https://github.com/MalavyaRaval/LSP",
    color: "#60a5fa",
    featured: true,
  },
  {
    id: 2,
    num: "02",
    title: "SafeWalk",
    subtitle: "Real-time Safety Platform",
    description:
      "Hackathon-winning platform leveraging geolocation and live 911 Calls API to receomend users with best route in real time.",
    tags: ["JavaScript", "Real-time", "Safety"],
    link: "https://github.com/Dextron04/SafeWalk",
    color: "#34d399",
    badge: "🏆 Hackathon Winner",
  },
  {
    id: 3,
    num: "03",
    title: "CareerBoost",
    subtitle: "Career Dev Platform",
    description:
      "Full-stack application with ATS Optimized Resumes building and for practicing interviews with AI-powered adaptive questioning.",
    tags: ["TypeScript", "Full-Stack"],
    link: "https://github.com/NightFury2415/CareerBoost",
    color: "#a78bfa",
  },
  {
    id: 4,
    num: "04",
    title: "Image Denoising",
    subtitle: "GPU-Accelerated Processing",
    description:
      "CUDA-powered denoising engine implementing advanced Algorithms on HPC node for maximum throughput.",
    tags: ["CUDA", "GPU", "C++"],
    link: "https://github.com/MalavyaRaval/Image-Denoising",
    color: "#fbbf24",
  },
  {
    id: 5,
    num: "05",
    title: "Web Scraping",
    subtitle: "Data Collection Engine",
    description:
      "Efficient Python-based scraping tool for automated data collection and recomendations across dynamic web sources.",
    tags: ["Python", "Data"],
    link: "https://github.com/NightFury2415/Web-Scrapping",
    color: "#f87171",
  },
  {
    id: 6,
    num: "06",
    title: "Classical ML Lab",
    subtitle: "Machine Learning Experiments",
    description:
      "A comprehensive Jupyter Notebook collection implementing and benchmarking classical ML algorithms from scratch linear regression to ensemble methods with detailed analysis and visualizations.",
    tags: ["Python", "Machine Learning", "Jupyter", "Data Science"],
    link: "https://github.com/MalavyaRaval/classicalmllab",
    color: "#22d3ee",
    wide: true,
  },
];

function ArrowIcon({ hovered, color }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ x: hovered ? 5 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </motion.svg>
  );
}

// hex color → rgba string
function rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ─── Standard card ──────────────────────────────────────────────────────────
function ProjectCard({ project, className = "" }) {
  const [hovered, setHovered] = useState(false);
  const c = project.color;

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col overflow-hidden rounded-2xl cursor-pointer ${className}`}
      style={{
        background: hovered
          ? `linear-gradient(145deg, ${rgba(c, 0.12)}, rgba(10,16,30,0.85))`
          : "rgba(10,16,30,0.75)",
        border: `1.5px solid ${hovered ? rgba(c, 0.65) : rgba(c, 0.2)}`,
        boxShadow: hovered
          ? `0 0 0 1px ${rgba(c, 0.15)}, 0 8px 40px ${rgba(c, 0.28)}, inset 0 1px 0 ${rgba(c, 0.15)}`
          : `0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)`,
        transition: "background 0.4s, border-color 0.35s, box-shadow 0.4s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -7, scale: 1.018 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* top accent line — always visible, brighter on hover */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${c}, ${rgba(c, 0.3)}, transparent)`,
          opacity: hovered ? 1 : 0.55,
          transition: "opacity 0.4s",
        }}
      />

      <div className="flex flex-col h-full" style={{ padding: "22px 24px 22px 24px" }}>
        {/* number + badge */}
        <div className="flex items-start justify-between mb-1">
          <span
            className="text-6xl font-black leading-none select-none"
            style={{
              color: c,
              opacity: hovered ? 0.55 : 0.35,
              transition: "opacity 0.35s",
              letterSpacing: "-2px",
            }}
          >
            {project.num}
          </span>
          {project.badge && (
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full border mt-1 whitespace-nowrap"
              style={{
                color: c,
                borderColor: rgba(c, 0.55),
                background: rgba(c, 0.18),
              }}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* title */}
        <div className="mb-3" style={{ marginTop: "-6px" }}>
          <h3
            className="text-xl font-bold leading-tight"
            style={{ color: hovered ? "#ffffff" : "#e2e8f0", transition: "color 0.3s" }}
          >
            {project.title}
          </h3>
          <p className="text-xs font-semibold mt-0.5" style={{ color: hovered ? c : rgba(c, 0.8), transition: "color 0.3s" }}>
            {project.subtitle}
          </p>
        </div>

        {/* description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-4"
          style={{ color: hovered ? "#94a3b8" : "#64748b", transition: "color 0.3s" }}
        >
          {project.description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md font-semibold border"
              style={{
                color: hovered ? c : rgba(c, 0.8),
                borderColor: rgba(c, hovered ? 0.5 : 0.3),
                background: rgba(c, hovered ? 0.18 : 0.1),
                transition: "all 0.3s",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* divider */}
        <div style={{ height: "1px", background: rgba(c, hovered ? 0.25 : 0.1), marginBottom: "14px", transition: "background 0.3s" }} />

        {/* GitHub link — padded so it never touches edge */}
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: hovered ? c : rgba(c, 0.65), transition: "color 0.3s" }}
          >
            View on GitHub
          </span>
          <ArrowIcon hovered={hovered} color={hovered ? c : rgba(c, 0.65)} />
        </div>
      </div>
    </motion.a>
  );
}

// ─── Featured large card ─────────────────────────────────────────────────────
function FeaturedCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const c = project.color;

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col overflow-hidden rounded-2xl cursor-pointer md:col-span-2"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${rgba(c, 0.14)}, rgba(10,16,30,0.9))`
          : "rgba(10,16,30,0.75)",
        border: `1.5px solid ${hovered ? rgba(c, 0.7) : rgba(c, 0.25)}`,
        boxShadow: hovered
          ? `0 0 0 1px ${rgba(c, 0.15)}, 0 12px 60px ${rgba(c, 0.35)}, inset 0 1px 0 ${rgba(c, 0.2)}`
          : `0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.06)`,
        transition: "background 0.4s, border-color 0.35s, box-shadow 0.4s",
        minHeight: "260px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -7, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* top accent */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${c}, ${rgba(c, 0.4)}, transparent)`,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.4s",
        }}
      />

      {/* ambient glow blob */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: c,
          opacity: hovered ? 0.12 : 0.05,
          filter: "blur(60px)",
          transition: "opacity 0.5s",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row h-full" style={{ padding: "28px 32px" }}>
        {/* left: big number + featured badge */}
        <div className="flex flex-col justify-between" style={{ minWidth: "100px", marginRight: "32px" }}>
          <span
            className="font-black leading-none select-none"
            style={{
              color: c,
              opacity: hovered ? 0.6 : 0.38,
              fontSize: "96px",
              letterSpacing: "-4px",
              transition: "opacity 0.35s",
              lineHeight: 1,
            }}
          >
            {project.num}
          </span>
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full border self-start"
            style={{
              color: c,
              borderColor: rgba(c, 0.55),
              background: rgba(c, 0.18),
              marginTop: "16px",
            }}
          >
            Featured
          </span>
        </div>

        {/* right: content */}
        <div className="flex flex-col gap-4 flex-1 pt-1">
          <div>
            <h3
              className="text-3xl font-black leading-tight"
              style={{ color: hovered ? "#ffffff" : "#f1f5f9", transition: "color 0.3s" }}
            >
              {project.title}
            </h3>
            <p className="text-sm font-semibold mt-1" style={{ color: hovered ? c : rgba(c, 0.8), transition: "color 0.3s" }}>
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm leading-relaxed flex-1" style={{ color: hovered ? "#94a3b8" : "#64748b", transition: "color 0.3s" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md font-semibold border"
                style={{
                  color: hovered ? c : rgba(c, 0.8),
                  borderColor: rgba(c, hovered ? 0.5 : 0.3),
                  background: rgba(c, hovered ? 0.18 : 0.1),
                  transition: "all 0.3s",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ height: "1px", background: rgba(c, hovered ? 0.25 : 0.12), transition: "background 0.3s" }} />

          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: hovered ? c : rgba(c, 0.65), transition: "color 0.3s" }}
            >
              View on GitHub
            </span>
            <ArrowIcon hovered={hovered} color={hovered ? c : rgba(c, 0.65)} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// ─── Wide horizontal card ─────────────────────────────────────────────────────
function WideCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const c = project.color;

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col md:flex-row overflow-hidden rounded-2xl cursor-pointer md:col-span-3"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${rgba(c, 0.12)}, rgba(10,16,30,0.9))`
          : "rgba(10,16,30,0.75)",
        border: `1.5px solid ${hovered ? rgba(c, 0.65) : rgba(c, 0.2)}`,
        boxShadow: hovered
          ? `0 0 0 1px ${rgba(c, 0.15)}, 0 8px 50px ${rgba(c, 0.3)}, inset 0 1px 0 ${rgba(c, 0.15)}`
          : `0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)`,
        transition: "background 0.4s, border-color 0.35s, box-shadow 0.4s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5, scale: 1.008 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* top accent line */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${c}, ${rgba(c, 0.3)}, transparent)`,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.4s",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />

      {/* Number column */}
      <div
        className="flex items-center justify-center"
        style={{
          minWidth: "120px",
          padding: "28px 24px 28px 28px",
          borderRight: `1px solid ${rgba(c, hovered ? 0.25 : 0.1)}`,
          transition: "border-color 0.4s",
        }}
      >
        <span
          className="font-black leading-none select-none"
          style={{
            color: c,
            opacity: hovered ? 0.6 : 0.38,
            fontSize: "80px",
            letterSpacing: "-3px",
            transition: "opacity 0.35s",
          }}
        >
          {project.num}
        </span>
      </div>

      {/* Main content */}
      <div
        className="flex flex-col md:flex-row flex-1 items-start md:items-center gap-6"
        style={{ padding: "28px 32px" }}
      >
        <div className="flex-1">
          <h3
            className="text-2xl font-black"
            style={{ color: hovered ? "#ffffff" : "#f1f5f9", transition: "color 0.3s" }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs font-bold mt-1 mb-3"
            style={{ color: hovered ? c : rgba(c, 0.8), transition: "color 0.3s" }}
          >
            {project.subtitle}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: hovered ? "#94a3b8" : "#64748b", transition: "color 0.3s" }}>
            {project.description}
          </p>
        </div>

        {/* right meta */}
        <div className="flex flex-col gap-4 md:items-end shrink-0" style={{ minWidth: "180px" }}>
          <div className="flex flex-wrap gap-1.5 md:justify-end">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md font-semibold border"
                style={{
                  color: hovered ? c : rgba(c, 0.8),
                  borderColor: rgba(c, hovered ? 0.5 : 0.3),
                  background: rgba(c, hovered ? 0.18 : 0.1),
                  transition: "all 0.3s",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            style={{
              height: "1px",
              width: "100%",
              background: rgba(c, hovered ? 0.25 : 0.1),
              transition: "background 0.3s",
            }}
          />
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: hovered ? c : rgba(c, 0.65), transition: "color 0.3s" }}
            >
              View on GitHub
            </span>
            <ArrowIcon hovered={hovered} color={hovered ? c : rgba(c, 0.65)} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const featured = projects[0];
  const side = projects[1];
  const midRow = projects.slice(2, 5);
  const wide = projects[5];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="bg-transparent w-full border-b border-gray-800/30"
      style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white text-center w-full tracking-tight"
            style={{ marginTop: "1rem", marginBottom: "2.5rem" }}
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Row 1 */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <FeaturedCard project={featured} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectCard project={side} className="h-full" />
            </motion.div>

            {/* Row 2 */}
            {midRow.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} className="h-full" />
              </motion.div>
            ))}

            {/* Row 3 */}
            <motion.div variants={itemVariants} className="md:col-span-3">
              <WideCard project={wide} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}