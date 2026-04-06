import ScrollReveal from "./ScrollReveal";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <ScrollReveal className="text-center mb-16">
    <h2 className="font-display font-bold text-3xl md:text-4xl gradient-text mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
  </ScrollReveal>
);

export default SectionHeading;
