import { useState } from "react";

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
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <nav className="bg-gray-900/60 backdrop-blur-md rounded-2xl px-6 py-4 flex justify-between items-center border border-gray-800/30 shadow-sm">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-400 transition font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-blue-400 transition font-medium"
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
              className="w-6 h-6 text-gray-300"
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
          <div className="md:hidden mt-4 bg-gray-900/65 backdrop-blur-md border border-gray-700/40 rounded-xl shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[600px] flex items-center justify-center relative overflow-hidden w-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center">
          <div className="text-center w-full">
            <h1 className="text-6xl sm:text-7xl font-bold text-white mb-12 tracking-tight w-full">
              Malavya Raval
            </h1>
            <p className="text-xl text-gray-300 mb-8 w-full">
              Computer Science Graduate | Full-Stack Developer | AI/ML
              Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed w-full text-center">
              Building practical, user-focused software and scalable systems.
              Published AI research 🔬 | Hackathon winner 🏆 | 500+ LeetCode
              problems solved 💪
            </p>
            <div className="flex gap-4 justify-center flex-wrap w-full">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 bg-gray-800/50 backdrop-blur-sm w-full"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center w-full">
            About Me
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

      {/* Projects */}
      <section id="projects" className="py-28 bg-gray-900/80 w-full">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center w-full">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 justify-center w-full">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="group bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-xl shadow-lg overflow-hidden transition transform will-change-transform hover:scale-105 hover:shadow-2xl border border-gray-700/60 hover:border-blue-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/30"
              >
                <div className="p-12 min-h-[260px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-8 mb-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                        {getInitials(project.title)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-blue-200/60">
                          {project.tags.join(" • ")}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 text-base leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-700/30 flex items-center justify-between gap-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-transparent text-blue-300 px-3 py-2 rounded-full text-sm font-medium border border-blue-500/20 transition-transform transform hover:scale-105 hover:bg-blue-600/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-400 font-semibold text-base hover:text-cyan-300 transition group-hover:underline whitespace-nowrap">
                      <span className="flex items-center gap-2">
                        <span>View on GitHub</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-1 transition-transform transform group-hover:translate-x-1"
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
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-40 bg-gray-800/50 backdrop-blur-sm w-full"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center w-full">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 border border-gray-600/50 hover:border-blue-500/50 transition"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-24 pt-20 border-t border-gray-700 w-full">
            <h3 className="text-3xl font-bold text-white mb-12 text-center w-full">
              Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-8 min-h-[110px] text-center border border-blue-500/30 hover:border-blue-400/60 hover:shadow-md hover:shadow-blue-500/10 transition duration-200">
                  <div className="text-4xl font-bold text-blue-300 mb-3">
                    500+
                  </div>
                  <p className="text-gray-200 text-base font-medium">
                    LeetCode Problems
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl p-8 min-h-[110px] text-center border border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-md hover:shadow-cyan-500/10 transition duration-200">
                  <div className="text-4xl font-bold text-cyan-300 mb-3">🏆</div>
                  <p className="text-gray-200 text-base font-medium">
                    Hackathon Winner
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-8 min-h-[110px] text-center border border-purple-500/30 hover:border-purple-400/60 hover:shadow-md hover:shadow-purple-500/10 transition duration-200">
                  <div className="text-4xl font-bold text-purple-300 mb-3">
                    2+
                  </div>
                  <p className="text-gray-200 text-base font-medium">
                    Conference Papers
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-8 min-h-[110px] text-center border border-green-500/30 hover:border-green-400/60 hover:shadow-md hover:shadow-green-500/10 transition duration-200">
                  <div className="text-4xl font-bold text-green-300 mb-3">
                    1,600
                  </div>
                  <p className="text-gray-200 text-base font-medium">
                    GitHub Contributions
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-gray-900/50 w-full">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center w-full">
            Let's Connect
          </h2>

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

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-12 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
            <div className="text-center">
              <p className="text-2xl mb-2">📧</p>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a
                href="mailto:mraval@sfsu.edu"
                className="text-blue-400 hover:text-blue-300 transition font-medium"
              >
                mraval@sfsu.edu
              </a>
            </div>

            <div className="text-center">
              <p className="text-2xl mb-2">📍</p>
              <p className="text-sm text-gray-400 mb-1">Location</p>
              <p className="text-blue-400 font-medium">San Francisco, CA</p>
            </div>

            <div className="text-center">
              <p className="text-2xl mb-2">🔗</p>
              <p className="text-sm text-gray-400 mb-3">Connect</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/malavya-raval/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition font-medium text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MalavyaRaval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition font-medium text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://leetcode.com/Malavya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition font-medium text-sm"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                Malavya Raval
              </h3>
              <p className="text-gray-400">
                CS Graduate building practical, scalable systems through
                full-stack development and AI/ML.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-blue-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-400 transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-blue-400 transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-200 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://scholar.google.com/citations?user=3m_RhuAAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    Google Scholar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/malavya-raval/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MalavyaRaval"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/Malavya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>
              &copy; {currentYear} Malavya Raval. Built with React + Vite +
              Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
