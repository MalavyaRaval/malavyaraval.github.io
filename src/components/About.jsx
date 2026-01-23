export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/118731394?v=4"
              alt="Malavya Raval"
              className="rounded-lg shadow-2xl border-2 border-blue-500/30 w-full"
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a Computer Science graduate from San Francisco State University with a passion for building practical, user-focused software and scalable systems.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My work spans full-stack development, AI/ML applications, and system design. I've built and presented AI-powered tools at top conferences like AAAI and FQAS, and recently won a hackathon for a real-time safety platform.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I actively work with TypeScript, Python, Java, C++, SQL, and React. I've solved over 500 LeetCode problems to strengthen my DSA foundation, and I'm always looking to learn and build things that matter.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently seeking opportunities in full-stack development, data engineering, AI/ML, or performance-critical systems. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
