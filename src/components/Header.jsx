import { useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = (event) => {
    event.preventDefault(); // keep "#" out of the URL
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1200px]">
      <nav className="bg-gray-950/70 backdrop-blur-xl rounded-2xl px-8 md:px-16 py-4 flex justify-between items-center border border-gray-800/50 shadow-2xl shadow-gray-950/50 hover:border-blue-500/30 transition-all duration-300">
        <a
          href="#"
          onClick={scrollToTop}
          aria-label="MR – back to top"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 cursor-pointer"
        >
          MR
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-gray-300 hover:text-blue-300 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6 text-gray-300 hover:text-blue-300 transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-4 bg-gray-950/80 backdrop-blur-xl border border-gray-700/60 rounded-2xl shadow-2xl shadow-gray-950/50 overflow-hidden"
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 rounded-lg transition-all duration-200 font-medium cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
