import { useState } from "react";
import { m } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { revealOnScroll } from "../lib/motion";
import { Section, SectionHeading } from "./Section";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GRID_VIEWPORT = { once: true, margin: "-60px" };
const CARD_TRANSITION = { duration: 0.3, ease: "easeOut" };
const IDLE_FILL = "rgba(10,16,30,0.75)";

// hex color → rgba string
function rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const textColor = (hovered, hoverColor, idleColor) => ({
  color: hovered ? hoverColor : idleColor,
  transition: "color 0.3s",
});

// Card chrome per layout. Pairs are [idle, hovered] alphas of the project colour.
const LOOKS = {
  standard: {
    className: "relative flex flex-col overflow-hidden rounded-2xl cursor-pointer h-full",
    border: [0.2, 0.65],
    inset: [0.05, 0.15],
    glow: "0 8px 40px",
    glowAlpha: 0.28,
    gradient: { angle: 145, tint: 0.12, base: 0.85 },
    accent: { mid: 0.3, idleOpacity: 0.55 },
    lift: { y: -7, scale: 1.018 },
  },
  featured: {
    className: "relative flex flex-col overflow-hidden rounded-2xl cursor-pointer md:col-span-2",
    border: [0.25, 0.7],
    inset: [0.06, 0.2],
    glow: "0 12px 60px",
    glowAlpha: 0.35,
    gradient: { angle: 135, tint: 0.14, base: 0.9 },
    accent: { mid: 0.4, idleOpacity: 0.6 },
    lift: { y: -7, scale: 1.01 },
  },
  wide: {
    className: "relative flex flex-col md:flex-row overflow-hidden rounded-2xl cursor-pointer md:col-span-3",
    border: [0.2, 0.65],
    inset: [0.05, 0.15],
    glow: "0 8px 50px",
    glowAlpha: 0.3,
    gradient: { angle: 135, tint: 0.12, base: 0.9 },
    accent: { mid: 0.3, idleOpacity: 0.5, style: { position: "absolute", top: 0, left: 0, right: 0 } },
    lift: { y: -5, scale: 1.008 },
  },
};

// Every value here has the same shape in both states so CSS can interpolate it on hover:
//  - the fill is always a linear-gradient whose stops are registered custom properties
//    (@property in index.css); at rest both stops are IDLE_FILL, i.e. a flat fill;
//  - the box-shadow always has three layers; at rest the glow layer is fully transparent.
// Swapping a flat colour for a gradient, or changing how many box-shadow entries there are, cannot be
// interpolated and makes the hover snap instead of fade.
function chromeStyle(look, c, hovered) {
  const { border, inset, glow, glowAlpha, gradient } = look;
  return {
    "--card-fill-from": hovered ? rgba(c, gradient.tint) : IDLE_FILL,
    "--card-fill-to": hovered ? `rgba(10,16,30,${gradient.base})` : IDLE_FILL,
    background: `linear-gradient(${gradient.angle}deg, var(--card-fill-from), var(--card-fill-to))`,
    border: `1.5px solid ${rgba(c, hovered ? border[1] : border[0])}`,
    boxShadow: hovered
      ? `0 0 0 1px ${rgba(c, 0.15)}, ${glow} ${rgba(c, glowAlpha)}, inset 0 1px 0 ${rgba(c, inset[1])}`
      : `0 0 0 1px rgba(255,255,255,0.03), ${glow} ${rgba(c, 0)}, inset 0 1px 0 rgba(255,255,255,${inset[0]})`,
    transition: "--card-fill-from 0.4s, --card-fill-to 0.4s, border-color 0.35s, box-shadow 0.4s",
  };
}

function useHover() {
  const [hovered, setHovered] = useState(false);
  return [hovered, { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) }];
}

// The clickable card: link, border/glow/fill chrome, hover lift and the top accent line.
function CardFrame({ project, look, hovered, hoverHandlers, style, children }) {
  const c = project.color;
  return (
    <m.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={look.className}
      style={{ ...chromeStyle(look, c, hovered), ...style }}
      {...hoverHandlers}
      whileHover={look.lift}
      transition={CARD_TRANSITION}
    >
      {/* top accent line — always visible, brighter on hover */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${c}, ${rgba(c, look.accent.mid)}, transparent)`,
          opacity: hovered ? 1 : look.accent.idleOpacity,
          transition: "opacity 0.4s",
          ...look.accent.style,
        }}
      />
      {children}
    </m.a>
  );
}

function ArrowIcon({ hovered, color }) {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ x: hovered ? 5 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </m.svg>
  );
}

function TagList({ tags, color: c, hovered, className }) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2.5 py-1 rounded-md font-semibold border"
          style={{
            color: hovered ? c : rgba(c, 0.8),
            borderColor: rgba(c, hovered ? 0.5 : 0.3),
            background: rgba(c, hovered ? 0.18 : 0.1),
            transition: "all 0.3s",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function GitHubCta({ color: c, hovered }) {
  const tone = hovered ? c : rgba(c, 0.65);
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tone, transition: "color 0.3s" }}>
        View on GitHub
      </span>
      <ArrowIcon hovered={hovered} color={tone} />
    </div>
  );
}

// ─── Standard card ──────────────────────────────────────────────────────────
function StandardCard({ project }) {
  const [hovered, hoverHandlers] = useHover();
  const c = project.color;

  return (
    <CardFrame project={project} look={LOOKS.standard} hovered={hovered} hoverHandlers={hoverHandlers}>
      <div className="flex flex-col h-full" style={{ padding: "22px 24px 22px 24px" }}>
        {/* number + badge */}
        <div className="flex items-start justify-between mb-1">
          <span
            className="text-6xl font-black leading-none select-none"
            style={{ color: c, opacity: hovered ? 0.55 : 0.35, transition: "opacity 0.35s", letterSpacing: "-2px" }}
          >
            {project.num}
          </span>
          {project.badge && (
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full border mt-1 whitespace-nowrap"
              style={{ color: c, borderColor: rgba(c, 0.55), background: rgba(c, 0.18) }}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* title */}
        <div className="mb-3" style={{ marginTop: "-6px" }}>
          <h3 className="text-xl font-bold leading-tight" style={textColor(hovered, "#ffffff", "#e2e8f0")}>
            {project.title}
          </h3>
          <p className="text-xs font-semibold mt-0.5" style={textColor(hovered, c, rgba(c, 0.8))}>
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm leading-relaxed flex-1 mb-4" style={textColor(hovered, "#94a3b8", "#64748b")}>
          {project.description}
        </p>

        <TagList tags={project.tags} color={c} hovered={hovered} className="flex flex-wrap gap-1.5 mb-4" />

        {/* divider */}
        <div
          style={{ height: "1px", background: rgba(c, hovered ? 0.25 : 0.1), marginBottom: "14px", transition: "background 0.3s" }}
        />

        <GitHubCta color={c} hovered={hovered} />
      </div>
    </CardFrame>
  );
}

// ─── Featured large card ─────────────────────────────────────────────────────
function FeaturedCard({ project }) {
  const [hovered, hoverHandlers] = useHover();
  const c = project.color;

  return (
    <CardFrame
      project={project}
      look={LOOKS.featured}
      hovered={hovered}
      hoverHandlers={hoverHandlers}
      style={{ minHeight: "260px" }}
    >
      {/* ambient glow blob */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: c, opacity: hovered ? 0.12 : 0.05, filter: "blur(60px)", transition: "opacity 0.5s" }}
      />

      <div className="relative z-10 flex flex-col md:flex-row h-full" style={{ padding: "28px 32px" }}>
        {/* left: big number + featured badge */}
        <div className="flex flex-col justify-between" style={{ minWidth: "100px", marginRight: "32px" }}>
          <span
            className="font-black leading-none select-none"
            style={{
              color: c,
              opacity: hovered ? 0.6 : 0.38,
              fontSize: "96px",
              letterSpacing: "-4px",
              transition: "opacity 0.35s",
              lineHeight: 1,
            }}
          >
            {project.num}
          </span>
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full border self-start"
            style={{ color: c, borderColor: rgba(c, 0.55), background: rgba(c, 0.18), marginTop: "16px" }}
          >
            Featured
          </span>
        </div>

        {/* right: content */}
        <div className="flex flex-col gap-4 flex-1 pt-1">
          <div>
            <h3 className="text-3xl font-black leading-tight" style={textColor(hovered, "#ffffff", "#f1f5f9")}>
              {project.title}
            </h3>
            <p className="text-sm font-semibold mt-1" style={textColor(hovered, c, rgba(c, 0.8))}>
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm leading-relaxed flex-1" style={textColor(hovered, "#94a3b8", "#64748b")}>
            {project.description}
          </p>

          <TagList tags={project.tags} color={c} hovered={hovered} className="flex flex-wrap gap-2" />

          <div style={{ height: "1px", background: rgba(c, hovered ? 0.25 : 0.12), transition: "background 0.3s" }} />

          <GitHubCta color={c} hovered={hovered} />
        </div>
      </div>
    </CardFrame>
  );
}

// ─── Wide horizontal card ─────────────────────────────────────────────────────
function WideCard({ project }) {
  const [hovered, hoverHandlers] = useHover();
  const c = project.color;

  return (
    <CardFrame project={project} look={LOOKS.wide} hovered={hovered} hoverHandlers={hoverHandlers}>
      {/* Number column */}
      <div
        className="flex items-center justify-center"
        style={{
          minWidth: "120px",
          padding: "28px 24px 28px 28px",
          borderRight: `1px solid ${rgba(c, hovered ? 0.25 : 0.1)}`,
          transition: "border-color 0.4s",
        }}
      >
        <span
          className="font-black leading-none select-none"
          style={{ color: c, opacity: hovered ? 0.6 : 0.38, fontSize: "80px", letterSpacing: "-3px", transition: "opacity 0.35s" }}
        >
          {project.num}
        </span>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1 items-start md:items-center gap-6" style={{ padding: "28px 32px" }}>
        <div className="flex-1">
          <h3 className="text-2xl font-black" style={textColor(hovered, "#ffffff", "#f1f5f9")}>
            {project.title}
          </h3>
          <p className="text-xs font-bold mt-1 mb-3" style={textColor(hovered, c, rgba(c, 0.8))}>
            {project.subtitle}
          </p>
          <p className="text-sm leading-relaxed" style={textColor(hovered, "#94a3b8", "#64748b")}>
            {project.description}
          </p>
        </div>

        {/* right meta */}
        <div className="flex flex-col gap-4 md:items-end shrink-0" style={{ minWidth: "180px" }}>
          <TagList tags={project.tags} color={c} hovered={hovered} className="flex flex-wrap gap-1.5 md:justify-end" />
          <div
            style={{ height: "1px", width: "100%", background: rgba(c, hovered ? 0.25 : 0.1), transition: "background 0.3s" }}
          />
          <GitHubCta color={c} hovered={hovered} />
        </div>
      </div>
    </CardFrame>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
const CARD_BY_LAYOUT = { standard: StandardCard, featured: FeaturedCard, wide: WideCard };
const GRID_SPAN = { featured: "md:col-span-2", wide: "md:col-span-3" };
const layoutOf = (project) => (project.featured ? "featured" : project.wide ? "wide" : "standard");

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <m.div {...revealOnScroll}>
        <SectionHeading highlight="Projects">Featured</SectionHeading>

        <m.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={GRID_VIEWPORT}
        >
          {PROJECTS.map((project) => {
            const layout = layoutOf(project);
            const Card = CARD_BY_LAYOUT[layout];
            return (
              <m.div key={project.id} variants={itemVariants} className={GRID_SPAN[layout]}>
                <Card project={project} />
              </m.div>
            );
          })}
        </m.div>
      </m.div>
    </Section>
  );
}
