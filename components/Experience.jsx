const experiences = [
  {
    role: "Senior Product Designer",
    company: "TechNova Solutions",
    period: "2022 — Present",
    color: "primary",
    description: "Spearheaded the unified design system serving 14 squad teams across Southeast Asia. Authored full-spec Figma libraries and synced tokens directly to code repos via GitHub Actions, slicing design debt by 40%.",
    tags: ["Design Ops", "Team Leadership", "React Architecture"],
  },
  {
    role: "Lead UI Engineer",
    company: "PixelCraft Interactive",
    period: "2020 — 2022",
    color: "tertiary",
    description: "Led a high-velocity studio engineering pod building award-winning creative campaigns, 3D web environments, and interactive digital branding for global clients including Sony Music and Monotype.",
    tags: ["Creative Dev", "WebGL", "Animation Systems"],
  },
  {
    role: "Frontend Designer",
    company: "Studio Arca",
    period: "2018 — 2020",
    color: "secondary",
    description: "Designed UI wireframes, conducted usability benchmarks, and translated static brand visual guidelines into reactive component packages using Vue.js and modular CSS.",
    tags: ["UI/UX Research", "HTML/SCSS", "Rapid Testing"],
  },
];

const dotMap = { primary: "bg-primary", secondary: "bg-secondary", tertiary: "bg-tertiary" };
const textMap = { primary: "text-primary", secondary: "text-secondary", tertiary: "text-tertiary" };

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-content">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">// Rekam Jejak</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Experience & Milestones</h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">Over half a decade directing UI engineering, elevating design teams, and architecting resilient consumer platforms.</p>
        </div>

        <div className="relative ml-2 border-l border-border pl-7 sm:ml-4 sm:pl-10">
          {experiences.map((item) => (
            <article key={item.role} className="relative mb-8 last:mb-0">
              <span className={`absolute -left-[38px] top-8 h-4 w-4 rounded-full border-4 border-[var(--background)] ${dotMap[item.color]} shadow-[0_0_18px_var(--glow-color)] sm:-left-[49px]`} />
              <div className="rounded-panel border border-border bg-[var(--surface)]/90 p-5 shadow-[var(--shadow-soft)] transition hover:border-border-strong hover:shadow-[var(--shadow-glow)] sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{item.role}</h3>
                    <span className={`mt-1 block text-sm font-semibold ${textMap[item.color]}`}>{item.company}</span>
                  </div>
                  <span className="w-fit rounded-full border border-border bg-[var(--surface-high)] px-3 py-1.5 font-mono text-[10px] text-muted">{item.period}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="rounded-lg border border-border bg-[var(--surface-high)] px-2.5 py-1.5 font-mono text-[10px] text-muted">{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
