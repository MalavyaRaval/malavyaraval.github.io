export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[600px] flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
            Malavya Raval
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Computer Science Graduate | Full-Stack Developer | AI/ML Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building practical, user-focused software and scalable systems. 
            Published AI research 🔬 | Hackathon winner 🏆 | 500+ LeetCode problems solved 💪
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold transition"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
