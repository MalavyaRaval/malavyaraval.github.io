import { m } from "framer-motion";
import { revealOnScroll } from "../lib/motion";
import { Section, SectionHeading } from "./Section";

const PARAGRAPHS = [
  "I'm a Computer Science graduate from San Francisco State University with a passion for building practical, user-focused software and scalable systems.",
  "My work spans full-stack development, AI/ML applications, and system design. I've built and presented AI-powered tools at top conferences like AAAI and FQAS, and recently won a hackathon for a real-time safety platform.",
  "I actively work with TypeScript, Python, Java, C++, SQL, and React. I've solved over 500 LeetCode problems to strengthen my DSA foundation, and I'm always looking to learn and build things that matter.",
  "Currently seeking opportunities in full-stack development, data engineering, AI/ML, or performance-critical systems. Let's build something amazing together!",
];

export default function About() {
  return (
    <Section id="about">
      <m.div {...revealOnScroll}>
        <SectionHeading highlight="Me">About</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <m.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src="https://avatars.githubusercontent.com/u/118731394?v=4"
              alt="Malavya Raval"
              className="relative rounded-2xl shadow-2xl border border-blue-500/20 w-full object-cover aspect-square md:aspect-auto"
            />
          </m.div>
          <div className="space-y-6">
            {PARAGRAPHS.map((text) => (
              <p key={text} className="text-lg text-gray-300 leading-relaxed font-light">
                {text}
              </p>
            ))}
          </div>
        </div>
      </m.div>
    </Section>
  );
}
