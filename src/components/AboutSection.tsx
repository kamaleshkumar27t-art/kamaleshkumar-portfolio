import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="About Me" />
    <ScrollReveal>
      <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center hover-lift">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-neon-blue/40 overflow-hidden shrink-0 shadow-[0_0_20px_hsl(225_100%_60%/0.2)]">
          <img
            src={profilePhoto}
            alt="Kamalesh Kumar T"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-muted-foreground leading-relaxed text-center md:text-left">
          I am an ECE student passionate about software development and technology. I enjoy turning ideas into real-world projects and continuously improving my coding and problem-solving skills. I am currently building my foundation in programming and web development, aiming to grow into a professional software engineer.
        </p>
      </div>
    </ScrollReveal>
  </section>
);

export default AboutSection;
