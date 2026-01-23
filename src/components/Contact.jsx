import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for reaching out! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Let's Connect
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              I'm actively looking to build and contribute to projects that
              leverage full-stack development, data engineering, AI/ML, or
              performance-critical systems. Whether you have an idea, want to
              collaborate, or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2 text-lg">
                  Email
                </h4>
                <a
                  href="mailto:mraval@sfsu.edu"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  mraval@sfsu.edu
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2 text-lg">
                  Location
                </h4>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-3 text-lg">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/malavya-raval/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/MalavyaRaval"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://leetcode.com/Malavya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition font-medium"
                  >
                    LeetCode
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=3m_RhuAAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition font-medium"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 rounded-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
