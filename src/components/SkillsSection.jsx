import { m } from "framer-motion";
import { ACHIEVEMENTS } from "../data/achievements";
import { SKILL_CATEGORIES } from "../data/skills";
import { revealOnScroll } from "../lib/motion";
import CategorySkills from "./CategorySkills";
import { Section, SectionHeading } from "./Section";

const CATEGORY_CARD_MOTION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  whileHover: { scale: 1.02 },
};
const ACHIEVEMENTS_REVEAL = { ...revealOnScroll, viewport: { once: true } };
const ACHIEVEMENT_HOVER = { y: -6, scale: 1.02 };
const ACHIEVEMENTS_DIVIDER = {
  marginTop: "3.5rem",
  paddingTop: "2.5rem",
  borderTop: "1px solid rgba(255,255,255,0.07)",
  width: "100%",
};

// Full class strings per accent so Tailwind can see them.
const ACCENTS = {
  blue: {
    card: "from-blue-950/40 to-blue-900/10 border-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
    glow: "from-blue-600/10",
    value: "text-blue-400 group-hover:text-blue-300 transition-colors",
  },
  yellow: {
    card: "from-yellow-950/40 to-yellow-900/10 border-yellow-500/20 hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.2)]",
    glow: "from-yellow-600/10",
    value: "text-yellow-400 group-hover:scale-110 transition-transform",
  },
  purple: {
    card: "from-purple-950/40 to-purple-900/10 border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
    glow: "from-purple-600/10",
    value: "text-purple-400 group-hover:text-purple-300 transition-colors",
  },
  green: {
    card: "from-green-950/40 to-green-900/10 border-green-500/20 hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]",
    glow: "from-green-600/10",
    value: "text-green-400 group-hover:text-green-300 transition-colors",
  },
};

function AchievementCard({ value, label, accent }) {
  const styles = ACCENTS[accent];
  return (
    <m.div
      whileHover={ACHIEVEMENT_HOVER}
      className={`group relative bg-gradient-to-br ${styles.card} rounded-2xl p-8 text-center border transition-all duration-300 cursor-default overflow-hidden backdrop-blur-sm`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className={`text-5xl font-black mb-3 duration-300 ${styles.value}`}>{value}</div>
        <p className="text-gray-300 text-sm font-semibold">{label}</p>
      </div>
    </m.div>
  );
}

export default function SkillsSection() {
  return (
    <Section id="skills">
      <m.div {...revealOnScroll}>
        <SectionHeading highlight="Expertise">Skills &amp;</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 w-full">
          {SKILL_CATEGORIES.map(({ category, icon, skills }) => (
            <m.div
              key={category}
              {...CATEGORY_CARD_MOTION}
              className="group relative bg-gradient-to-br from-slate-900/60 to-slate-900/30 rounded-2xl p-6 border border-gray-800/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <div className="relative z-10 flex items-center gap-4 mb-4 ml-2">
                <span className="text-4xl transform group-hover:scale-125 transition-transform duration-300">{icon}</span>
                <h3 className="text-xl font-bold text-blue-300 group-hover:text-cyan-300 transition-colors duration-300">
                  {category}
                </h3>
              </div>
              <CategorySkills skills={skills} label={category} />
            </m.div>
          ))}
        </div>
      </m.div>

      {/* Achievements */}
      <div style={ACHIEVEMENTS_DIVIDER}>
        <m.div {...ACHIEVEMENTS_REVEAL}>
          <SectionHeading as="h3" size="text-4xl" highlight="Achievements">
            Key
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {ACHIEVEMENTS.map((achievement) => (
              <AchievementCard key={achievement.label} {...achievement} />
            ))}
          </div>
        </m.div>
      </div>
    </Section>
  );
}
