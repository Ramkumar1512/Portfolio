import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen text-gray-300 font-sans selection:bg-primary/30 selection:text-primary">
      {/* Background radial gradient for subtle texture */}
      <div className="fixed inset-0 bg-hero-pattern pointer-events-none z-0 opacity-50" />

      <Navbar />

      <div className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>

      <Footer />
    </main>
  );
}
