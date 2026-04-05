import { useState } from "react";
import { motion } from "framer-motion";
import CategorySkills from "./components/CategorySkills";

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
      {/* Header */}
      <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1200px]">
        <nav className="bg-gray-950/70 backdrop-blur-xl rounded-2xl px-8 md:px-16 py-4 flex justify-between items-center border border-gray-800/50 shadow-2xl shadow-gray-950/50 hover:border-blue-500/30 transition-all duration-300">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
            MR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10"
            >
              Contact
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
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-44 pb-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-7xl sm:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Malavya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-pulse">Raval</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light tracking-wide">
              Full-Stack Developer <span className="text-blue-400">•</span> AI/ML Researcher <span className="text-blue-400">•</span> Problem Solver
            </p>
            <div className="flex justify-center">
              <p className="text-base sm:text-lg text-gray-400 mb-12 leading-relaxed max-w-4xl px-2 text-center">
                Building practical, user-focused software and scalable systems.
                <br className="hidden sm:block" />
                <span className="text-blue-300 font-medium">Published AI research 🔬</span> • <span className="text-blue-300 font-medium">Hackathon winner 🏆</span> • <span className="text-blue-300 font-medium">500+ LeetCode problems solved 💪</span>
              </p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95 inline-flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm w-full border-b border-gray-800/40"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center w-full tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/118731394?v=4"
                alt="Malavya Raval"
                className="rounded-lg shadow-2xl border-2 border-blue-500/30 w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Science graduate from San Francisco State
                University with a passion for building practical, user-focused
                software and scalable systems.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My work spans full-stack development, AI/ML applications, and
                system design. I've built and presented AI-powered tools at top
                conferences like AAAI and FQAS, and recently won a hackathon for
                a real-time safety platform.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I actively work with TypeScript, Python, Java, C++, SQL, and
                React. I've solved over 500 LeetCode problems to strengthen my
                DSA foundation, and I'm always looking to learn and build things
                that matter.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently seeking opportunities in full-stack development, data
                engineering, AI/ML, or performance-critical systems. Let's build
                something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full" aria-hidden>
        <div className="mx-auto h-4"></div>
      </div>

      {/* Projects */}
      <section id="projects" className="py-32 bg-gradient-to-b from-gray-900/80 via-gray-900 to-gray-950 w-full border-b border-gray-800/40">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-16 mb-24 text-center w-full tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-full" aria-hidden>
            <div className="mx-auto h-6"></div>
          </div>
          <div className="flex justify-center w-full px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-4 max-w-6xl mx-auto w-full justify-items-center">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="group bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/40 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 will-change-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/60 hover:border-blue-400/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 backdrop-blur-sm"
              >
                <div className="p-6 min-h-[240px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                        {getInitials(project.title)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-blue-300/70">
                          {project.tags.slice(0, 2).join(" • ")}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-700/40 flex items-center justify-between gap-4 relative z-10">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded-full text-xs font-medium border border-blue-500/20 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-400/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:text-cyan-300 transition-all duration-300 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mr-1.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                      Visit
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      </section>

      <div className="w-full" aria-hidden>
        <div className="mx-auto h-4"></div>
      </div>

      {/* Skills */}
      <section
        id="skills"
        className="py-32 bg-gradient-to-b from-gray-900 via-gray-800/40 to-gray-900 w-full border-b border-gray-800/40"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white my-12 text-center w-full tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
          </h2>
          <div className="w-full" aria-hidden>
            <div className="mx-auto h-8"></div>
          </div>
          <div className="flex justify-center w-full px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 max-w-6xl w-full">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-gray-700/40 to-gray-800/30 rounded-2xl p-6 border border-gray-600/40 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm"
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
          </div>

          {/* Achievements */}
          <div className="mt-32 pt-24 border-t border-gray-700/60 w-full">
            <div className="w-full" aria-hidden>
              <div className="mx-auto h-4"></div>
            </div>
            <h3 className="text-4xl font-bold text-white my-8 text-center w-full tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Achievements</span>
            </h3>
            <div className="w-full" aria-hidden>
              <div className="mx-auto h-10"></div>
            </div>
            <div className="flex justify-center w-full px-4 md:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                <div className="group relative bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl p-8 min-h-[140px] text-center border border-blue-500/40 hover:border-blue-400/80 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-default overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-4xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors duration-300">
                      500+
                    </div>
                    <p className="text-gray-200 text-sm font-semibold">
                      LeetCode Problems
                    </p>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-2xl p-8 min-h-[140px] text-center border border-yellow-500/40 hover:border-yellow-400/80 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 cursor-default overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-4xl font-bold text-yellow-300 mb-3 group-hover:text-yellow-200 transition-colors duration-300">🏆</div>
                    <p className="text-gray-200 text-sm font-semibold">
                      Hackathon Winner
                    </p>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl p-8 min-h-[140px] text-center border border-purple-500/40 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-default overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-4xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      2+
                    </div>
                    <p className="text-gray-200 text-sm font-semibold">
                      Conference Papers
                    </p>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl p-8 min-h-[140px] text-center border border-green-500/40 hover:border-green-400/80 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 cursor-default overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-4xl font-bold text-green-300 mb-3 group-hover:text-green-200 transition-colors duration-300">
                      1,600
                    </div>
                    <p className="text-gray-200 text-sm font-semibold">
                      GitHub Contributions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full" aria-hidden>
        <div className="mx-auto h-4"></div>
      </div>

      {/* Contact */}
      <section id="contact" className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 w-full border-b border-gray-800/40">
        <div className="w-full" aria-hidden>
          <div className="mx-auto h-6"></div>
        </div>
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white my-12 text-center w-full tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Connect</span>
          </h2>

          <div className="w-full" aria-hidden>
            <div className="mx-auto h-6"></div>
          </div>

          <div className="flex justify-center w-full">
            <p className="text-gray-300 leading-relaxed text-lg text-center max-w-2xl">
              I'm actively looking to build and contribute to projects that
              leverage{" "}
              <span className="text-blue-400 font-medium">
                full-stack development
              </span>
              ,{" "}
              <span className="text-blue-400 font-medium">
                data engineering
              </span>
              , <span className="text-blue-400 font-medium">AI/ML</span>, or{" "}
              <span className="text-blue-400 font-medium">
                performance-critical systems
              </span>
              . Whether you have an idea, want to collaborate, or just want to
              say hi, feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      <div className="w-full" aria-hidden>
        <div className="mx-auto h-16"></div>
      </div>

      {/* Footer */}
      {/* Simple, Clean Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm font-medium text-gray-400">
            <a href="mailto:mraval@sfsu.edu" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> Email
            </a>
            <a href="https://www.linkedin.com/in/malavya-raval/" target="_blank" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
            </a>
            <a href="https://github.com/MalavyaRaval" target="_blank" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
            </a>
            <a href="https://leetcode.com/Malavya/" target="_blank" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.972 17.51l-3.525 3.525a1.5 1.5 0 0 1-2.121 0l-3.535-3.535a1.5 1.5 0 0 1 0-2.121l3.525-3.525a1.5 1.5 0 0 1 2.121 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121zm6.606-5.464l-3.525 3.525a1.5 1.5 0 0 1-2.121 0l-3.535-3.535a1.5 1.5 0 0 1 0-2.121l3.525-3.525a1.5 1.5 0 0 1 2.121 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121z"/></svg> LeetCode
            </a>
            <a href="https://scholar.google.com/citations?user=3m_RhuAAAAAJ&hl=en" target="_blank" className="flex flex-col items-center gap-3 hover:text-blue-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l9 4-9 4-9-4 9-4zm0 16l-9-4v-3l9 4 9-4v3l-9 4zM12 15l-9-4 9-4 9 4-9 4z"/></svg> Scholar
            </a>
          </div>
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} Malavya Raval. Built with ❤
          </p>
        </div>
      </footer>
    </>
  );
}
