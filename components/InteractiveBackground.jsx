"use client";

import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--background)] transition-colors duration-300">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div
        className="absolute -inset-1/2 opacity-[0.025] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.5'/%3E%3C/svg%3E\")",
          transform: "rotate(3deg)",
        }}
      />

      <div
        className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[35px] opacity-60 transition-[left,top] duration-200 ease-out"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          background: "radial-gradient(circle, var(--glow-color), transparent 68%)",
        }}
      />

      <div className="absolute -left-[180px] -top-[220px] h-[480px] w-[480px] animate-[float-orb_14s_ease-in-out_infinite] rounded-full bg-primary opacity-[0.12] blur-[120px]" />
      <div className="absolute -bottom-[220px] -right-[220px] h-[480px] w-[480px] animate-[float-orb_14s_ease-in-out_infinite] rounded-full bg-secondary opacity-[0.12] blur-[120px] [animation-delay:-7s]" />
    </div>
  );
}
