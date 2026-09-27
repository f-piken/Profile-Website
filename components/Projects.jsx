"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const filters = [
  ["all", "All (4)"],
  ["uiux", "UI/UX"],
  ["webapp", "Web App"],
  ["creative", "Creative Dev"],
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category.includes(filter));

  return (
    <>
      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-content">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">// Portofolio Terpilih</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Selected Artifacts & Systems</h2>
            </div>
            <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-[var(--surface)]/70 p-1.5 backdrop-blur-md">
              {filters.map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${filter === value ? "bg-primary text-white shadow-[0_8px_22px_var(--glow-color)]" : "text-muted hover:bg-[var(--surface-high)] hover:text-foreground"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article key={project.id} className="group flex min-h-[520px] flex-col justify-between overflow-hidden rounded-panel border border-border bg-[var(--surface)]/90 p-3 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-glow)]">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-card bg-[var(--surface-high)]">
                    <img src={project.image} alt={project.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 text-[11px] font-semibold text-white sm:text-xs">
                      <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 backdrop-blur-md">{project.categoryLabel}</span>
                      <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 backdrop-blur-md">{project.year}</span>
                    </div>
                  </div>

                  <div className="px-2 pb-3 pt-5 sm:px-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
                      <a href="#contact" aria-label={`Open ${project.title}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-lg text-muted transition hover:border-primary hover:bg-primary-soft hover:text-primary">↗</a>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-border px-2 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-lg border border-border bg-[var(--surface-high)] px-2.5 py-1.5 font-mono text-[10px] text-muted">{tech}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelected(project)} className="shrink-0 text-left text-xs font-semibold text-primary transition hover:text-tertiary sm:text-right">View Case Study →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-md" onClick={() => setSelected(null)}>
          <div className="w-full max-w-2xl animate-[modal-in_220ms_ease-out] overflow-hidden rounded-3xl border border-border-strong bg-[var(--surface)] shadow-[0_30px_100px_rgba(0,0,0,0.35)]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 border-b border-border p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
                <h3 className="font-display text-xl font-bold text-foreground">{selected.title}</h3>
              </div>
              <button onClick={() => setSelected(null)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-xl border border-border text-xl text-muted transition hover:bg-[var(--surface-high)] hover:text-foreground">×</button>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm leading-7 text-muted sm:text-base">{selected.body}</p>
              <div className="mt-5 rounded-xl border border-border bg-primary-soft px-4 py-3 font-mono text-[11px] text-primary">Status: Published Case Study • Production Deployed</div>
            </div>
            <div className="flex flex-wrap justify-end gap-2 border-t border-border p-5 sm:p-6">
              <button onClick={() => setSelected(null)} className="rounded-xl border border-border-strong bg-[var(--surface-high)] px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-[var(--surface-highest)]">Tutup</button>
              <a href="#contact" onClick={() => setSelected(null)} className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary">Diskusikan Proyek Serupa</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
