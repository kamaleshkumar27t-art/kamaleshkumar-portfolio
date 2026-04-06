import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "User Interactive Web Page",
    desc: "A responsive web page built using HTML, CSS, and JavaScript focusing on user interaction and UI design.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
  },
  {
    title: "AI-Based Code Recommendation System",
    desc: "A project aimed at recommending code solutions using AI concepts and improving coding efficiency.",
    tags: ["Python", "AI", "Machine Learning"],
    status: "In Progress",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Projects" subtitle="What I've been building" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {projects.map((p, i) => (
        <ScrollReveal key={p.title} delay={i * 0.15}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 md:p-8 h-full flex flex-col group"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  p.status === "Completed"
                    ? "bg-neon-blue/10 text-neon-blue border-neon-blue/20"
                    : "bg-neon-purple/10 text-neon-purple border-neon-purple/20"
                }`}
              >
                {p.status === "In Progress" && <Loader2 className="w-3 h-3 inline mr-1 animate-spin" />}
                {p.status}
              </span>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
