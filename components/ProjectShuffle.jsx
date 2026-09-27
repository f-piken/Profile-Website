"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function ProjectShuffle({ projects }) {
  const [activeSlot, setActiveSlot] = useState(0);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const shuffle = useCallback(() => {
    setActiveSlot((slot) => (slot === 0 ? 1 : 0));
    setIndex((current) => (current + 1) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    timerRef.current = window.setInterval(shuffle, 3800);
    return () => window.clearInterval(timerRef.current);
  }, [shuffle]);

  const topProject = projects[index % projects.length];
  const bottomProject = projects[(index + 1) % projects.length];

  return (
    <div className="mb-12 grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-[var(--surface)]/80 p-4 shadow-[var(--shadow-soft)] sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-7">
      <button
        type="button"
        onClick={shuffle}
        aria-label="Shuffle project preview"
        className="project-shuffle relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-[var(--surface-high)] text-left sm:min-h-[360px]"
      >
        <div className={`project-shuffle-card project-shuffle-top ${activeSlot === 0 ? "is-active" : ""}`}>
          <img src={topProject.image} alt={topProject.alt} loading="lazy" decoding="async" />
          <span>{topProject.title}</span>
        </div>
        <div className={`project-shuffle-card project-shuffle-bottom ${activeSlot === 1 ? "is-active" : ""}`}>
          <img src={bottomProject.image} alt={bottomProject.alt} loading="lazy" decoding="async" />
          <span>{bottomProject.title}</span>
        </div>
        <span className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 font-mono text-[10px] font-semibold text-white backdrop-blur-sm">
          Click to shuffle ↻
        </span>
      </button>

      <div className="px-2 py-2 sm:px-3 lg:px-5">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Interactive project wall</span>
        <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Shuffle through my work.</h3>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
          Dua preview bergerak bergantian dari pojok kiri atas ke pojok kiri bawah. Klik area foto untuk mengganti project, atau tunggu beberapa detik untuk melihat loop otomatis.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {projects.map((project, projectIndex) => (
            <span key={project.id} className={`rounded-full border px-3 py-1.5 font-mono text-[10px] transition-colors ${projectIndex === index ? "border-primary/40 bg-primary-soft text-primary" : "border-border text-muted"}`}>
              {project.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
