import { useState } from "react";
import { motion } from "framer-motion";
import CategorySkills from "./components/CategorySkills";
import InteractiveBackground from "./components/InteractiveBackground";
import ProjectsSection from "./components/ProjectsSection";
import GlitchName from "./components/GlitchName";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "LSP",
      description:
        "Language Server Protocol implementation featuring intelligent code analysis and real-time diagnostics for enhanced developer experience.",
      tags: ["JavaScript", "LSP", "DevTools"],
      link: "https://github.com/MalavyaRaval/LSP",
    },
    {
      id: 2,
      title: "SafeWalk",
      description:
        "Real-time safety platform that won a hackathon. Leverages geolocation and real-time notifications to keep users safe.",
      tags: ["JavaScript", "Real-time", "Safety"],
      link: "https://github.com/Dextron04/SafeWalk",
    },
    {
      id: 3,
      title: "CareerBoost",
      description:
        "Full-stack application designed to enhance career development with personalized recommendations and progress tracking.",
      tags: ["TypeScript", "Full-Stack", "Career"],
      link: "https://github.com/NightFury2415/CareerBoost",
    },
    {
      id: 4,
      title: "Image Denoising",
      description:
        "GPU-accelerated image denoising using CUDA. Implements advanced signal processing algorithms for optimal performance.",
      tags: ["CUDA", "GPU", "Image Processing"],
      link: "https://github.com/MalavyaRaval/Image-Denoising",
    },
    {
      id: 5,
      title: "Web Scrapping",
      description:
        "Efficient web scraping tool built with Python for data collection and analysis from various web sources.",
      tags: ["Python", "Web Scraping", "Data"],
      link: "https://github.com/NightFury2415/Web-Scrapping",
    },
    {
      id: 6,
      title: "Classical ML Lab",
      description:
        "Comprehensive Jupyter Notebook collection implementing classical machine learning algorithms and experiments.",
      tags: ["Python", "ML", "Jupyter"],
      link: "https://github.com/MalavyaRaval/classicalmllab",
    },
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "SQL",
        "C",
        "Swift",
      ],
      icon: "💻"
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "HTML/CSS",
        "Tailwind CSS",
        "Responsive Design",
        "Redux",
      ],
      icon: "🎨"
    },
    {
      category: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "Docker",
      ],
      icon: "⚙️"
    },
    {
      category: "AI/ML & Data",
      skills: [
        "Machine Learning",
        "Data Analysis",
        "Jupyter",
        "Classical ML",
        "Image Processing",
      ],
      icon: "🧠"
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Kubernetes",
        "Terraform",
        "GitHub",
        "CI/CD",
      ],
      icon: "☁️"
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git",
        "Vim",
        "Linux",
        "Figma",
        "Slack",
        "Trello",
        "GitLab",
        "Vercel",
        "Photoshop",
      ],
      icon: "🛠️"
    },
  ];

  const getInitials = (title) =>
    title
      .split(" ")
      .map((s) => s[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const currentYear = new Date().getFullYear();

  return (
    <>
      <InteractiveBackground />

      {/* Header */}
      <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1200px]">
        <nav className="bg-gray-950/70 backdrop-blur-xl rounded-2xl px-8 md:px-16 py-4 flex justify-between items-center border border-gray-800/50 shadow-2xl shadow-gray-950/50 hover:border-blue-500/30 transition-all duration-300">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            MR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10 cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10 cursor-pointer"
            >
              Skills
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-300 hover:text-blue-300 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-950/80 backdrop-blur-xl border border-gray-700/60 rounded-2xl shadow-2xl shadow-gray-950/50 overflow-hidden">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium cursor-pointer"
              >
                Skills
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-44 pb-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
        {/* Glow blobs behind */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-7xl sm:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
                <GlitchName />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-2xl md:text-3xl text-gray-200 mb-8 font-light tracking-wide"
            >
              Full-Stack Developer <span className="text-blue-400">•</span> AI/ML Researcher <span className="text-blue-400">•</span> Problem Solver
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center"
            >
              <p className="text-base sm:text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl px-2 text-center">
                Building practical, user-focused software and scalable systems.
                <br className="hidden sm:block" />
                <span className="inline-flex flex-wrap justify-center gap-x-2 gap-y-1">
                  <span className="text-blue-300 font-medium hover:text-blue-200 transition-colors whitespace-nowrap">Published AI research 🔬</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-blue-300 font-medium hover:text-blue-200 transition-colors whitespace-nowrap">Hackathon winner 🏆</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-blue-300 font-medium hover:text-blue-200 transition-colors whitespace-nowrap">500+ LeetCode problems 💪</span>
                </span>
              </p>
            </motion.div>


          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-transparent w-full border-b border-gray-800/30"
        style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center w-full tracking-tight" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src="https://avatars.githubusercontent.com/u/118731394?v=4"
                  alt="Malavya Raval"
                  className="relative rounded-2xl shadow-2xl border border-blue-500/20 w-full object-cover aspect-square md:aspect-auto"
                />
              </motion.div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  I'm a Computer Science graduate from San Francisco State
                  University with a passion for building practical, user-focused
                  software and scalable systems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  My work spans full-stack development, AI/ML applications, and
                  system design. I've built and presented AI-powered tools at top
                  conferences like AAAI and FQAS, and recently won a hackathon for
                  a real-time safety platform.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  I actively work with TypeScript, Python, Java, C++, SQL, and
                  React. I've solved over 500 LeetCode problems to strengthen my
                  DSA foundation, and I'm always looking to learn and build things
                  that matter.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Currently seeking opportunities in full-stack development, data
                  engineering, AI/ML, or performance-critical systems. Let's build
                  something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsSection />


      {/* Skills */}
      <section
        id="skills"
        className="bg-transparent w-full border-b border-gray-800/30"
        style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center w-full tracking-tight" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 w-full">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-slate-900/60 to-slate-900/30 rounded-2xl p-6 border border-gray-800/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
                >
                  <div className="relative z-10 flex items-center gap-4 mb-4 ml-2">
                    <span className="text-4xl transform group-hover:scale-125 transition-transform duration-300">{category.icon}</span>
                    <h3 className="text-xl font-bold text-blue-300 group-hover:text-cyan-300 transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>
                  <CategorySkills skills={category.skills} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.07)', width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-white text-center w-full tracking-tight" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Achievements</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-blue-950/40 to-blue-900/10 rounded-2xl p-8 text-center border border-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-5xl font-black text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      500+
                    </div>
                    <p className="text-gray-300 text-sm font-semibold">
                      LeetCode Problems
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-yellow-950/40 to-yellow-900/10 rounded-2xl p-8 text-center border border-yellow-500/20 hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.2)] transition-all duration-300 cursor-default overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-5xl font-black text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">🏆</div>
                    <p className="text-gray-300 text-sm font-semibold">
                      Hackathon Winner
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-purple-950/40 to-purple-900/10 rounded-2xl p-8 text-center border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-default overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-5xl font-black text-purple-400 mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      2+
                    </div>
                    <p className="text-gray-300 text-sm font-semibold">
                      Conference Papers
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-green-950/40 to-green-900/10 rounded-2xl p-8 text-center border border-green-500/20 hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all duration-300 cursor-default overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-5xl font-black text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300">
                      1,800
                    </div>
                    <p className="text-gray-300 text-sm font-semibold">
                      GitHub Contributions
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-transparent py-12 border-t border-gray-800/30 relative z-10">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm font-medium text-gray-455">
            <a href="mailto:mraval@sfsu.edu" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> Email
            </a>
            <a href="https://www.linkedin.com/in/malavya-raval/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
            </a>
            <a href="https://github.com/MalavyaRaval" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
            </a>
            <a href="https://leetcode.com/Malavya/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.972 17.51l-3.525 3.525a1.5 1.5 0 0 1-2.121 0l-3.535-3.535a1.5 1.5 0 0 1 0-2.121l3.525-3.525a1.5 1.5 0 0 1 2.121 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121zm6.606-5.464l-3.525 3.525a1.5 1.5 0 0 1-2.121 0l-3.535-3.535a1.5 1.5 0 0 1 0-2.121l3.525-3.525a1.5 1.5 0 0 1 2.121 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121z"/></svg> LeetCode
            </a>
            <a href="https://scholar.google.com/citations?user=3m_RhuAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-all duration-300 hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l9 4-9 4-9-4 9-4zm0 16l-9-4v-3l9 4 9-4v3l-9 4zM12 15l-9-4 9-4 9 4-9 4z"/></svg> Scholar
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-8">
            © {currentYear} Malavya Raval. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

