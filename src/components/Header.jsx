import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed w-full top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MR</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-blue-400 transition font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-blue-400 transition font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-300 hover:text-blue-400 transition font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-blue-400 transition font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
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
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
