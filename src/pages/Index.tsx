import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CodingSection from "@/components/CodingSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="relative min-h-screen">
    <AnimatedBackground />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <CodingSection />
    <ProjectsSection />
    <AchievementsSection />
    <ContactSection />
    <FooterSection />
  </div>
);

export default Index;
