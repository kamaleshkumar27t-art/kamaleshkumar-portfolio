import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    school: "Karpagam College of Engineering, Coimbatore",
    degree: "Bachelor of Engineering in Electronics and Communication Engineering (1st Year)",
  },
  {
    school: "Perunthalaivar Kamarajar Matric Higher Secondary School, Thalavaipuram",
    degree: "Higher Secondary Education",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Education" />
    <div className="space-y-6 max-w-3xl mx-auto">
      {education.map((e, i) => (
        <ScrollReveal key={i} delay={i * 0.15}>
          <div className="glass-card p-6 md:p-8 hover-lift group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center shrink-0 group-hover:neon-glow-blue transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{e.school}</h3>
                <p className="text-sm text-muted-foreground">{e.degree}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default EducationSection;
