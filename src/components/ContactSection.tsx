import { Mail, Github, Linkedin, Download, Code2, Trophy, Flame } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const links = [
  { icon: Mail, label: "kamaleshkumar27t@gmail.com", href: "mailto:kamaleshkumar27t@gmail.com", external: false },
  { icon: Github, label: "GitHub", href: "https://github.com/kamaleshkumar27t-art", external: true },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kamalesh-kumar-t-34ab40364/", external: true },
  { icon: Code2, label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/user_ugz1vsyzlfi", external: true },
  { icon: Trophy, label: "LeetCode", href: "https://leetcode.com/u/Kamalesh_Kumar_T/", external: true },
  { icon: Flame, label: "CodeChef", href: "https://www.codechef.com/users/kamalesh_55", external: true },
];

const ContactSection = () => (
  <section id="contact" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Get In Touch" subtitle="Feel free to reach out" />
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {links.map((l, i) => (
        <ScrollReveal key={l.label} delay={i * 0.08}>
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            className="glass-card px-6 py-4 flex items-center gap-3 group"
          >
            <l.icon className="w-5 h-5 text-neon-blue group-hover:text-neon-purple transition-colors" />
            <span className="text-sm text-foreground">{l.label}</span>
          </motion.a>
        </ScrollReveal>
      ))}
    </div>
    <ScrollReveal delay={0.5}>
      <div className="flex justify-center mt-8">
        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          href="kamaleshkumar-portfolio-main/kamaleshkumar-portfolio-main/public/resume.pdf"
          download
          className="px-8 py-3 rounded-lg bg-neon-blue text-white font-medium flex items-center gap-2 hover:shadow-[0_0_20px_hsl(225_100%_60%/0.4)] transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </motion.a>
      </div>
    </ScrollReveal>
  </section>
);

export default ContactSection;
