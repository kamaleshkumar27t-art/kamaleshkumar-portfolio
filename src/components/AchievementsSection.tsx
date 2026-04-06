import { Award, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  { icon: Award, text: "Data Science using Python — Certificate" },
  { icon: Zap, text: "Participated in Hackathon — Growing through challenges" },
];

const AchievementsSection = () => (
  <section className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Achievements" subtitle="Milestones on my learning journey" />
    <div className="space-y-4 max-w-2xl mx-auto">
      {achievements.map((a, i) => (
        <ScrollReveal key={i} delay={i * 0.15}>
          <div className="glass-card p-6 flex items-center gap-4 hover-lift group">
            <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center shrink-0 group-hover:neon-glow-purple transition-all duration-300">
              <a.icon className="w-5 h-5 text-neon-purple" />
            </div>
            <p className="text-foreground">{a.text}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default AchievementsSection;
