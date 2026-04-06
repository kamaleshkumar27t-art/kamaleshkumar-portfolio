import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Coding", href: "#coding" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-glass-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-lg gradient-text">KK</a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-200 ${
                activeSection === l.href.slice(1)
                  ? "text-neon-blue font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 p-2 rounded-lg border border-glass-border hover:border-neon-blue/40 transition-all duration-300 text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg border border-glass-border text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card border-t border-glass-border px-4 pb-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm transition-colors ${
                activeSection === l.href.slice(1)
                  ? "text-neon-blue font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
