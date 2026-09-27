"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "creativity",
    "design",
    "technology",
    "innovation",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // ==============================
  // WORD ANIMATION
  // ==============================

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(
        (current) => (current + 1) % words.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // ==============================
  // PAGE LOAD ANIMATION
  // ==============================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // ==============================
  // MOUSE MOVE
  // ==============================

  const handleMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setMouse({
      x,
      y,
    });
  };

  // ==============================
  // MOUSE LEAVE
  // ==============================

  const handleMouseLeave = () => {
    setMouse({
      x: 0,
      y: 0,
    });

    setIsHovering(false);
  };

  return (
    <section className="hero" id="home">

      {/* ==============================
          INTERACTIVE BACKGROUND
      ============================== */}

      <div
        className={`hero-interactive-bg ${
          isHovering ? "active" : ""
        }`}
        style={{
          transform: `
            translate(
              ${mouse.x * 40}px,
              ${mouse.y * 40}px
            )
          `,
        }}
      />

      <div className="hero-grid">

        {/* ==============================
            HERO CONTENT
        ============================== */}

        <div
          className={`hero-copy ${
            loaded ? "hero-copy-visible" : ""
          }`}
        >

          <div className="availability-pill">
            <span className="pulse-dot" />
            Available for freelance & full-time roles
          </div>

          <h1>
            Designing digital experiences that bridge{" "}
            <span className="gradient-text">
              {words[wordIndex]}
            </span>
          </h1>

          <p className="hero-description">
            Hi, I’m <strong>Mikael Reza</strong>. Senior
            Product Designer & Creative Developer with 6+
            years forging high-impact design systems,
            spatial web apps, and bespoke computational
            interfaces.
          </p>

          <div className="hero-actions">

            <a
              className="button primary"
              href="#projects"
            >
              Lihat Project <span>↓</span>
            </a>

            <a
              className="button secondary"
              href="#contact"
            >
              ✉ Hubungi Saya
            </a>

            <a
              className="button ghost"
              href="/resume.pdf"
              download
            >
              ↓ Resume PDF
            </a>

          </div>

          <div className="metrics">

            <div>
              <strong>
                40<span>+</span>
              </strong>

              <small>
                Projects Delivered
              </small>
            </div>

            <div>
              <strong>
                99<span>%</span>
              </strong>

              <small>
                Client Satisfaction
              </small>
            </div>

            <div>
              <strong>
                6<span>+</span>
              </strong>

              <small>
                Years Experience
              </small>
            </div>

          </div>

        </div>

        {/* ==============================
            HERO VISUAL
        ============================== */}

        <div
          className={`hero-visual ${
            loaded
              ? "hero-visual-visible"
              : ""
          }`}
          onMouseEnter={() =>
            setIsHovering(true)
          }
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          {/* GLOW */}

          <div
            className="portrait-glow"
            style={{
              transform: `
                translate(
                  ${mouse.x * 25}px,
                  ${mouse.y * 25}px
                )
                scale(
                  ${isHovering ? 1.15 : 1}
                )
              `,
            }}
          />

          {/* PHOTO */}

          <div
            className="portrait-card"
            style={{
              transform: `
                perspective(1000px)
                rotateY(${mouse.x * 18}deg)
                rotateX(${-mouse.y * 18}deg)
                translateZ(
                  ${isHovering ? 25 : 0}px
                )
              `,
            }}
          >

            <img
              src="/images/profile.jpg"
              alt="Mikael Reza Portrait"
            />

            <div className="portrait-overlay">

              <div>
                <strong>
                  Mikael Reza
                </strong>

                <span>
                  Senior Product Designer & Dev
                </span>
              </div>

              <small>
                Jakarta / Remote
              </small>

            </div>

          </div>

          {/* CURSOR LIGHT */}

          <div
            className="cursor-light"
            style={{
              left: `${50 + mouse.x * 50}%`,
              top: `${50 + mouse.y * 50}%`,
              opacity: isHovering ? 1 : 0,
            }}
          />

        </div>

      </div>
    </section>
  );
}