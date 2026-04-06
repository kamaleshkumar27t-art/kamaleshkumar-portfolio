import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const useTypewriter = (text: string, speed = 80, delay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      return () => clearTimeout(t);
    }
  }, [displayed, text, speed, started]);

  return displayed;
};

const HeroSection = () => {
  const name = useTypewriter("KAMALESH KUMAR T", 90, 500);
  const tagline = useTypewriter(
    "ECE Student | Future Software Engineer | AI Enthusiast | Consistent Learner",
    40,
    2200
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-blue/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-mono text-neon-blue mb-6 tracking-widest uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 min-h-[1.2em]">
          <span className="gradient-text neon-text-blue">{name}</span>
          <span className="animate-pulse text-neon-blue">|</span>
        </h1>

        <p className="font-mono text-sm md:text-base text-muted-foreground mb-12 min-h-[1.5em] max-w-2xl mx-auto">
          {tagline}
          {tagline.length < 74 && <span className="animate-pulse text-neon-purple">|</span>}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-neon-blue text-white font-medium hover-lift hover:shadow-[0_0_20px_hsl(225_100%_60%/0.4)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-glass-border text-foreground font-medium hover-lift hover:border-neon-purple/50 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="kamaleshkumar-portfolio-main/kamaleshkumar-portfolio-main/public/resume.pdf"
            download = "resume.pdf"
            className="px-8 py-3 rounded-lg border border-neon-blue/30 text-foreground font-medium hover-lift hover:border-neon-blue/60 hover:shadow-[0_0_20px_hsl(225_100%_60%/0.3)] transition-all duration-300 flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-neon-blue"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
