export default function Skills() {
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

  return (
    <section id="skills" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg p-6 border border-gray-600/50 hover:border-blue-500/50 transition"
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
        <div className="mt-16 pt-12 border-t border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-gray-300">LeetCode Problems</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">🏆</div>
              <p className="text-gray-300">Hackathon Winner</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <p className="text-gray-300">Conference Papers</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <p className="text-gray-300">GitHub Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
