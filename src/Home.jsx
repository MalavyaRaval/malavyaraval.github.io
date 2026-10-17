import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InteractiveBackground from "./components/InteractiveBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <Header />
      <Hero />
      <About />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </>
  );
}
