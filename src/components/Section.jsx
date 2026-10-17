// Page-section chrome shared by About, Projects and Skills.
//
// Spacing is set through `style` props on purpose: the unlayered `*` reset in index.css zeroes
// Tailwind's margin/padding utilities (so `mx-auto` below has no effect), and its `.container`
// rule replaces `px-6 max-w-6xl` with 1rem side padding and max-width: 100%.
// (Comments here are scanned for class names too, so avoid bare utility words in them.)

const SECTION_PADDING = { paddingTop: "3.5rem", paddingBottom: "3.5rem" };
const HEADING_MARGIN = { marginTop: "1rem", marginBottom: "2.5rem" };

export function Section({ id, children }) {
  return (
    <section id={id} className="bg-transparent w-full border-b border-gray-800/30" style={SECTION_PADDING}>
      <div className="container mx-auto px-6 max-w-6xl">{children}</div>
    </section>
  );
}

// Renders "<children> <highlight>" with the highlight in the blue→cyan gradient.
export function SectionHeading({ as: Tag = "h2", size = "text-4xl md:text-5xl", highlight, children }) {
  return (
    <Tag className={`${size} font-bold text-white text-center w-full tracking-tight`} style={HEADING_MARGIN}>
      {children}{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{highlight}</span>
    </Tag>
  );
}
