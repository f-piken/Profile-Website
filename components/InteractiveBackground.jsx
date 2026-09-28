"use client";

import { useEffect } from "react";

export default function InteractiveBackground() {
  useEffect(() => {
    // The background pointer glow is useful on desktop, but it is unnecessary
    // work on touch devices where there is no persistent pointer.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    let frame = 0;

    const update = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--mouse-x", `${event.clientX}px`);
        root.style.setProperty("--mouse-y", `${event.clientY}px`);
        frame = 0;
      });
    };

    const reset = () => {
      root.style.setProperty("--mouse-x", "50vw");
      root.style.setProperty("--mouse-y", "50vh");
    };

    window.addEventListener("pointermove", update, { passive: true });
    window.addEventListener("blur", reset);

    return () => {
      window.removeEventListener("pointermove", update);
      window.removeEventListener("blur", reset);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* Lightweight grain: one tiny repeated SVG instead of a large animated filter. */}
      <div
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.028]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Mouse glow remains, but its position is updated once per animation frame via CSS variables. */}
      <div className="mouse-glow absolute h-[420px] w-[420px] rounded-full opacity-50 blur-[42px]" />

      {/* Floating orbs are transform-only animations, so layout is not recalculated. */}
      <div className="absolute -left-[180px] -top-[220px] h-[420px] w-[420px] animate-[float-orb-slow_18s_ease-in-out_infinite] rounded-full bg-primary opacity-[0.11] blur-[90px] will-change-transform" />
      <div className="absolute -bottom-[220px] -right-[220px] h-[420px] w-[420px] animate-[float-orb-slow_20s_ease-in-out_infinite] rounded-full bg-secondary opacity-[0.11] blur-[90px] [animation-delay:-8s] will-change-transform" />
    </div>
  );
}
