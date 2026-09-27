"use client";

import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="interactive-background">

      {/* Grid */}
      <div className="background-grid" />

      {/* Grain */}
      <div className="background-noise" />

      {/* Mouse glow */}
      <div
        className="background-glow"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
      />

      {/* Ambient glow */}
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

    </div>
  );
}