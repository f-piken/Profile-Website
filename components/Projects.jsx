"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

function ProjectStack({ side = "left", items, onSelect }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const cardRef = useRef(null);
  const animationRef = useRef(null);

  const current = items[index];
  const next = items[(index + 1) % items.length];
  const nextNext = items[(index + 2) % items.length];
  // Left stack throws left; right stack throws right.
  const direction = side === "left" ? -1 : 1;

  const revealNext = useCallback(async () => {
    if (leaving || items.length < 2 || !cardRef.current) return;

    const card = cardRef.current;
    const width = card.offsetWidth;
    const height = card.offsetHeight;
    const distance = Math.max(width * 1.2, 420);
    const rotation = direction * 135;

    setLeaving(true);
    animationRef.current?.cancel();

    const animation = card.animate(
      [
        {
          transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
          opacity: 1,
          offset: 0,
        },
        {
          transform: `translate3d(${direction * distance * 0.25}px, ${-height * 0.72}px, 0) rotate(${rotation * 0.22}deg) scale(.99)`,
          opacity: 1,
          offset: 0.25,
        },
        {
          transform: `translate3d(${direction * distance * 0.58}px, ${-height * 1.05}px, 0) rotate(${rotation * 0.5}deg) scale(.97)`,
          opacity: 1,
          offset: 0.52,
        },
        {
          transform: `translate3d(${direction * distance * 0.9}px, ${-height * 0.48}px, 0) rotate(${rotation * 0.78}deg) scale(.94)`,
          opacity: 0.82,
          offset: 0.78,
        },
        {
          transform: `translate3d(${direction * distance}px, ${height * 0.18}px, 0) rotate(${rotation}deg) scale(.9)`,
          opacity: 0,
          offset: 1,
        },
      ],
      {
        duration: 920,
        easing: "cubic-bezier(.2,.78,.24,1)",
        fill: "forwards",
      },
    );

    animationRef.current = animation;

    try {
      await animation.finished;
    } catch {
      return;
    }

    if (animationRef.current !== animation) return;
    animation.cancel();

    card.style.opacity = "0";
    card.style.transform = "none";
    setIndex((value) => (value + 1) % items.length);

    requestAnimationFrame(() => {
      if (!cardRef.current) return;
      cardRef.current.style.opacity = "1";
      cardRef.current.style.transform = "none";
      setLeaving(false);
    });
  }, [direction, items.length, leaving]);

  useEffect(() => () => animationRef.current?.cancel(), []);

  return (
    <div className={`project-stack-wrap ${side === "right" ? "project-stack-right" : "project-stack-left"}`}>
      <div className="project-stack-area">
        <button
          type="button"
          className={`project-stack ${leaving ? "is-leaving" : ""}`}
          onClick={revealNext}
          aria-label={`Tampilkan project berikutnya setelah ${current.title}`}
        >
          <span className="project-stack-back project-stack-back-one" aria-hidden="true">
            <img src={nextNext.image} alt="" loading="lazy" decoding="async" className="project-stack-image project-stack-back-image" />
          </span>
          <span className="project-stack-back project-stack-back-two" aria-hidden="true">
            <img src={next.image} alt="" loading="lazy" decoding="async" className="project-stack-image project-stack-back-image" />
          </span>

          <span ref={cardRef} className="project-stack-card">
            <img src={current.image} alt={current.alt} loading="lazy" decoding="async" className="project-stack-image" />
            <span className="project-stack-shade" />
            <span className="project-stack-hint">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/25 text-sm backdrop-blur-sm">↗</span>
              Click the photo behind
            </span>
            <span className="project-stack-index">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </span>
        </button>
      </div>

      <div key={`${side}-${current.id}`} className="project-stack-caption">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{current.categoryLabel} · {current.year}</span>
        <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{current.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-muted sm:text-[15px]">{current.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {current.technologies.map((tech) => <span key={tech} className="rounded-full border border-border bg-[var(--surface)] px-2.5 py-1 font-mono text-[10px] text-muted">{tech}</span>)}
        </div>
        <button type="button" onClick={() => onSelect(current)} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-foreground transition-[gap,color] duration-200 hover:gap-3 hover:text-primary">
          View case study <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="project-stack-next-hint" aria-hidden="true">Click photo untuk melempar lembar secara diagonal</p>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-12 max-w-3xl border-b border-border pb-7">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">// Selected Work</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Projects that turn ideas into systems.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Dua tumpukan project berjalan secara independen. Project berikutnya sudah berada di belakang foto aktif — klik foto untuk menggeser lembar aktif secara diagonal dan menampilkan project berikutnya.
            </p>
          </div>
        </Reveal>

        <div className="project-showcase">
          <Reveal delay={40}>
            <ProjectStack side="left" items={projects} onSelect={setSelected} />
          </Reveal>

          <Reveal delay={100}>
            <ProjectStack side="right" items={[...projects].reverse()} onSelect={setSelected} />
          </Reveal>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/65 p-4 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="w-full max-w-2xl animate-[modal-in_220ms_ease-out] overflow-hidden rounded-3xl border border-border-strong bg-[var(--surface)] shadow-[0_30px_100px_rgba(0,0,0,.35)]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 border-b border-border p-5 sm:p-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Case Study</span>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">{selected.title}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-xl border border-border text-xl text-muted transition-colors hover:bg-[var(--surface-high)] hover:text-foreground">×</button>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm leading-7 text-muted sm:text-base">{selected.body}</p>
              <div className="mt-5 rounded-xl border border-border bg-primary-soft px-4 py-3 font-mono text-[11px] text-primary">Status: Published Case Study • Production Deployed</div>
            </div>
            <div className="flex justify-end border-t border-border p-5 sm:p-6">
              <button type="button" onClick={() => setSelected(null)} className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary">Tutup</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
