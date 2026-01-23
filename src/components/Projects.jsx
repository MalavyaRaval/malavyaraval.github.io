export default function Projects() {
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

  return (
    <section id="projects" className="py-20 bg-gray-900/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-400 font-semibold text-sm hover:text-cyan-300 transition">
                  View on GitHub →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
