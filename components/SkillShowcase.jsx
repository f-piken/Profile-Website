import SkillLogo from "./SkillLogo";
import { skills } from "@/data/skills";
import Reveal from "./Reveal";
import { TransitionLink } from "./PageTransition";

const groups = ["Frontend", "Backend", "Database", "Tools", "Design"];

export default function SkillShowcase() {
  return (
    <main className="mx-auto min-h-screen max-w-content overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">// Technology Stack</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">Skills & technologies.</h1>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">Teknologi yang saya gunakan untuk mengembangkan website, aplikasi, backend, database, dan workflow desain.</p>
        </div>
      </Reveal>

      <Reveal delay={70}>
        <div className="mb-10 space-y-3">
          <SkillRail items={skills} reverse={false} />
          <SkillRail items={[...skills].reverse()} reverse />
        </div>
      </Reveal>

      <div className="border-y border-border">
        {groups.map((group, groupIndex) => {
          const items = skills.filter((skill) => skill.category === group);
          if (!items.length) return null;
          return (
            <Reveal key={group} delay={groupIndex * 35}>
              <section className="grid gap-5 border-b border-border py-7 last:border-b-0 md:grid-cols-[180px_1fr] md:items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{String(groupIndex + 1).padStart(2, "0")}</span>
                  <h2 className="mt-1 font-display text-lg font-bold text-foreground">{group}</h2>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 rounded-xl border border-border bg-[var(--surface)] px-3 py-3 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-[var(--surface-high)]">
                      <SkillLogo skill={skill} />
                      <div className="min-w-0 flex-1">
                        <strong className="block truncate text-sm text-foreground">{skill.name}</strong>
                        <div className="mt-1 h-1 overflow-hidden rounded-full bg-[var(--surface-highest)]"><div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} /></div>
                      </div>
                      <span className="font-mono text-[9px] text-muted">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-mono text-xs uppercase tracking-wider text-primary">Back to portfolio</p><p className="mt-1 text-sm text-muted">Kembali melihat project dan pengalaman.</p></div>
          <TransitionLink href="/" className="inline-flex h-10 w-fit items-center rounded-xl bg-primary px-4 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-secondary">← Home</TransitionLink>
        </div>
      </Reveal>
    </main>
  );
}

function SkillRail({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className={`skill-rail ${reverse ? "skill-rail-reverse" : ""}`}>
      <div className="skill-rail-track">
        {doubled.map((skill, index) => (
          <div key={`${skill.name}-${reverse}-${index}`} className="skill-rail-item">
            <SkillLogo skill={skill} />
            <div><strong className="block whitespace-nowrap text-xs text-foreground">{skill.name}</strong><span className="font-mono text-[9px] uppercase tracking-wider text-muted">{skill.category}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
