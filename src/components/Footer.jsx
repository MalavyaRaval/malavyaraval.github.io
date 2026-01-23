export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
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
                <a href="#projects" className="hover:text-blue-400 transition">
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
            <h4 className="font-semibold text-gray-200 mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/malavya-raval/"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MalavyaRaval"
                  className="hover:text-blue-400 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/Malavya/"
                  className="hover:text-blue-400 transition"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="mailto:mraval@sfsu.edu"
                  className="hover:text-blue-400 transition"
                >
                  Email
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
  );
}
