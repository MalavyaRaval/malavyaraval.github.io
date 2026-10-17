import { m } from "framer-motion";
import GlitchName from "./GlitchName";

export default function Hero() {
  return (
    <section className="pt-44 pb-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Glow blobs behind */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "2.5s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl sm:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
              <GlitchName />
            </h1>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-gray-200 mb-8 font-light tracking-wide"
          >
            Full-Stack Developer <span className="text-blue-400">•</span> AI/ML Researcher <span className="text-blue-400">•</span> Problem Solver
          </m.p>

          <m.div
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
          </m.div>
        </div>
      </div>
    </section>
  );
}
