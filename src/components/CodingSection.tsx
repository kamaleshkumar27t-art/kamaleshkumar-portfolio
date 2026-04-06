import { motion } from "framer-motion";
import { Code2, Trophy, Flame } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const profiles = [
  { name: "GeeksforGeeks", icon: Code2, note: "Consistent daily practice", color: "text-neon-blue", href: "https://www.geeksforgeeks.org/profile/user_ugz1vsyzlfi" },
  { name: "LeetCode", icon: Trophy, note: "Problem solving & contests", color: "text-neon-purple", href: "https://leetcode.com/u/Kamalesh_Kumar_T/" },
  { name: "CodeChef", icon: Flame, note: "Competitive programming", color: "text-neon-cyan", href: "https://www.codechef.com/users/kamalesh_55" },
];

const CodingSection = () => (
  <section id="coding" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Coding Profiles" subtitle="Actively practicing and improving problem-solving skills through competitive coding platforms." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {profiles.map((p, i) => (
        <ScrollReveal key={p.name} delay={i * 0.15}>
          <motion.a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card p-6 text-center group cursor-pointer block"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:neon-glow-blue transition-all duration-300">
              <p.icon className={`w-7 h-7 ${p.color}`} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{p.name}</h3>
            <p className="text-xs text-muted-foreground">{p.note}</p>
          </motion.a>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default CodingSection;
