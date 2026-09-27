const skillGroups = [
  {
    icon: "✎",
    title: "Product Design",
    color: "primary",
    description: "Human-centric workflows, rapid prototyping, wireframing, and multi-platform design systems.",
    skills: [["Figma Tokens", 98], ["UX Architecture", 92], ["Prototyping", 95]],
    tags: ["Design Tokens", "User Journeys"],
  },
  {
    icon: "⌘",
    title: "Frontend Dev",
    color: "tertiary",
    description: "Component architectures, micro-frontends, accessible HTML5 semantics, and type safety.",
    skills: [["React & Next.js", 95], ["TypeScript", 90], ["Tailwind CSS", 96]],
    tags: ["State Machines", "REST/GraphQL"],
  },
  {
    icon: "◌",
    title: "Motion & 3D",
    color: "secondary",
    description: "Tactile feedback loops, procedural shader rendering, and performant web graphics.",
    skills: [["Three.js / WebGL", 84], ["Framer Motion", 92], ["GSAP Animations", 88]],
    tags: ["GLTF Rigging", "Canvas2D"],
  },
  {
    icon: "⚒",
    title: "Tools & Pipeline",
    color: "primary",
    description: "Modern developer ergonomics, build optimizations, linting chains, and CI/CD automation.",
    skills: [["Git & CI/CD", 90], ["Storybook Systems", 94], ["Web Vitals Audit", 89]],
    tags: ["Docker", "Vercel Edge"],
  },
];

const colorMap = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-neutral",
};

const barMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-content">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">// Kapabilitas Teknis</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Skills & Technology Matrix</h2>
          </div>
          <p className="text-sm leading-7 text-muted sm:text-base">Harmonizing visual design rigor with scalable engineering principles across the modern digital product stack.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="flex min-h-[390px] flex-col justify-between rounded-panel border border-border bg-[var(--surface)]/90 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-glow)] sm:p-7">
              <div>
                <div className={`mb-5 grid h-11 w-11 place-items-center rounded-xl text-lg ${colorMap[group.color]}`}>{group.icon}</div>
                <h3 className="font-display text-xl font-bold text-foreground">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>

                <div className="mt-7 space-y-4">
                  {group.skills.map(([name, value]) => (
                    <div key={name}>
                      <div className="mb-2 flex items-center justify-between gap-4 text-xs">
                        <span className="font-medium text-foreground-soft">{name}</span>
                        <strong className="font-mono text-muted">{value}%</strong>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-highest)]">
                        <div className={`h-full rounded-full ${barMap[group.color]} transition-all duration-700`} style={{ width: `${value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-5">
                {group.tags.map((tag) => <span key={tag} className="rounded-lg border border-border bg-[var(--surface-high)] px-2.5 py-1.5 font-mono text-[10px] text-muted">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
