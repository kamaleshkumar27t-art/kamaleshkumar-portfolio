import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { title: "Programming", skills: ["C", "C++", "Python", "JavaScript"], color: "neon-blue" },
  { title: "Web", skills: ["HTML", "CSS", "JavaScript"], color: "neon-purple" },
  { title: "Core", skills: ["Data Structures", "Problem Solving"], color: "neon-cyan" },
  { title: "Tools", skills: ["VS Code", "Git"], color: "neon-blue" },
  { title: "Soft Skills", skills: ["Logical Thinking", "Self-Learning", "Communication"], color: "neon-purple" },
];

const colorMap: Record<string, string> = {
  "neon-blue": "from-neon-blue/20 to-neon-blue/5 border-neon-blue/20 hover:border-neon-blue/40",
  "neon-purple": "from-neon-purple/20 to-neon-purple/5 border-neon-purple/20 hover:border-neon-purple/40",
  "neon-cyan": "from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/20 hover:border-neon-cyan/40",
};

const pillColor: Record<string, string> = {
  "neon-blue": "bg-neon-blue/10 text-neon-blue border-neon-blue/20",
  "neon-purple": "bg-neon-purple/10 text-neon-purple border-neon-purple/20",
  "neon-cyan": "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
};

const SkillsSection = () => (
  <section id="skills" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Skills" subtitle="Technologies and competencies I work with" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <ScrollReveal key={cat.title} delay={i * 0.1}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`glass-card p-6 bg-gradient-to-b ${colorMap[cat.color]} transition-all duration-300`}
          >
            <h3 className="font-display font-semibold mb-4 text-foreground">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${pillColor[cat.color]}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default SkillsSection;
