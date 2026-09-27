import Link from "next/link";
import SkillLogo from "./SkillLogo";
import { skills } from "@/data/skills";
import Reveal from "./Reveal";

const colorText = { primary: "text-primary", secondary: "text-secondary", tertiary: "text-tertiary" };

export default function Skills() {
  const firstRow = skills;
  const secondRow = [...skills].reverse();

  return (
    <section id="skills" className="overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">// Skills</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Tools I work with.</h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">HTML, CSS, JavaScript, React, Next.js, Laravel, database, design tools, and the workflow behind them.</p>
            </div>
            <Link href="/skills" className="inline-flex h-10 w-fit shrink-0 items-center rounded-xl border border-border-strong bg-[var(--surface)] px-4 text-sm font-semibold text-foreground transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-high)]">View all skills →</Link>
          </div>
        </Reveal>

        <div className="space-y-3">
          <SkillRail skills={firstRow} direction="left" />
          <SkillRail skills={secondRow} direction="right" />
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Hover to pause • Click to explore the full stack</p>
            <span className="text-xs text-muted">{skills.length} core technologies</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillRail({ skills, direction }) {
  const items = [...skills, ...skills];
  return (
    <div className={`skill-rail ${direction === "right" ? "skill-rail-reverse" : ""}`} aria-label="Scrolling skills">
      <div className="skill-rail-track">
        {items.map((skill, index) => (
          <div key={`${skill.name}-${direction}-${index}`} className="skill-rail-item">
            <SkillLogo skill={skill} />
            <div className="min-w-0">
              <strong className="block whitespace-nowrap text-xs text-foreground">{skill.name}</strong>
              <span className={`font-mono text-[9px] uppercase tracking-wider ${colorText[skill.color]}`}>{skill.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
