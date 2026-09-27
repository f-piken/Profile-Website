"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const words = ["creativity", "design", "technology", "innovation"];

  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [loaded, setLoaded] = useState(false);

  /*
   * ============================
   * Typing Animation
   * ============================
   */
  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, typedWord.length + 1);

        setTypedWord(nextText);

        // Setelah selesai mengetik, tunggu sebentar
        if (nextText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        const nextText = currentWord.slice(0, typedWord.length - 1);

        setTypedWord(nextText);

        // Setelah selesai menghapus,
        // pindah ke kata berikutnya
        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedWord, isDeleting, wordIndex]);

  /*
   * ============================
   * Page Load Animation
   * ============================
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  /*
   * ============================
   * Mouse Parallax
   * ============================
   */
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const resetMouse = () => {
    setMouse({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center
        overflow-hidden
        px-4 pb-16 pt-28
        sm:px-6 sm:pb-20 sm:pt-32
        lg:px-8 lg:pb-24 lg:pt-36
      "
    >
      {/* ============================
          Background Glow
      ============================ */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[320px] w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          opacity-60
          blur-[90px]
          transition-transform
          duration-300
          sm:h-[440px] sm:w-[440px]
        "
        style={{
          transform: `
            translate(
              calc(-50% + ${mouse.x * 20}px),
              calc(-50% + ${mouse.y * 20}px)
            )
          `,
        }}
      />

      {/* ============================
          Main Container
      ============================ */}
      <div
        className="
          relative z-10
          mx-auto grid w-full max-w-content
          items-center
          gap-14
          lg:grid-cols-[1.08fr_0.92fr]
          lg:gap-16
          xl:gap-20
        "
      >
        {/* ============================
            LEFT — Hero Content
        ============================ */}
        <div
          className={`
            max-w-3xl
            transition-all
            duration-700
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          {/* Availability Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-border
              bg-[var(--surface)]/80
              px-3.5 py-2
              font-mono
              text-[11px]
              font-medium
              text-muted
              shadow-[var(--shadow-soft)]
              backdrop-blur-md
              sm:mb-7
              sm:text-xs
            "
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span
                className="
                  absolute
                  h-3 w-3
                  animate-[pulse-ring_2s_ease-in-out_infinite]
                  rounded-full
                  bg-primary/30
                "
              />

              <span
                className="
                  relative
                  h-1.5 w-1.5
                  rounded-full
                  bg-primary
                "
              />
            </span>

            Available for freelance & full-time roles
          </div>

          {/* Small Heading */}
          <p
            className="
              mb-4
              font-mono
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-primary
              sm:text-sm
            "
          >
            Programmer / Portfolio
          </p>

          {/* ============================
              Main Heading + Typing Effect
          ============================ */}
          <h1
            className="
              max-w-3xl
              font-display
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.04em]
              text-foreground
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            <span className="block">
              Hi, I&apos;m Fiky Prayoga
            </span>

            <span
              className="
                mt-2
                block
                min-h-[1.1em]
                bg-gradient-to-r
                from-primary
                via-secondary
                to-tertiary
                bg-clip-text
                text-transparent
              "
            >
              {typedWord}

              {/* Typing Cursor */}
              <span
                className="
                  ml-1
                  inline-block
                  h-[0.85em]
                  w-[2px]
                  translate-y-1
                  animate-pulse
                  bg-primary
                "
              />
            </span>
          </h1>

          {/* ============================
              Description
          ============================ */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-muted
              sm:mt-7
              sm:text-lg
              sm:leading-8
            "
          >
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-foreground">
              Fiky Prayoga
            </strong>
            . A passionate programmer who enjoys building modern web
            applications, exploring new technologies, and turning ideas into
            functional digital experiences.
          </p>

          {/* ============================
              CTA Buttons
          ============================ */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* Projects */}
            <a
              href="#projects"
              className="
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-5
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_var(--glow-color)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-secondary
              "
            >
              Lihat Project
              <span>↓</span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-border-strong
                bg-[var(--surface)]
                px-5
                text-sm
                font-semibold
                text-foreground
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/50
                hover:bg-[var(--surface-high)]
              "
            >
              <span>✉</span>
              Hubungi Saya
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                px-4
                text-sm
                font-semibold
                text-muted
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-foreground
              "
            >
              ↓ Resume
            </a>
          </div>

          {/* ============================
              Statistics
          ============================ */}
          <div
            className="
              mt-10
              grid
              max-w-xl
              grid-cols-3
              gap-5
              border-t
              border-border
              pt-6
              sm:mt-12
              sm:gap-6
              sm:pt-7
            "
          >
            {[
              ["40+", "Projects Delivered"],
              ["99%", "Client Satisfaction"],
              ["6+", "Years Experience"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tracking-tight
                    text-foreground
                    sm:text-3xl
                  "
                >
                  {value}
                </strong>

                <span
                  className="
                    mt-1
                    block
                    max-w-[100px]
                    text-[11px]
                    leading-4
                    text-muted
                    sm:text-xs
                  "
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================
            RIGHT — Profile Image
        ============================ */}
        <div
          className={`
            relative
            mx-auto
            w-full
            max-w-[380px]
            transition-all
            duration-1000
            lg:max-w-[340px]
            xl:max-w-[360px]
            ${
              loaded
                ? "translate-x-0 opacity-100"
                : "translate-x-5 opacity-0"
            }
          `}
          onMouseEnter={() => setIsHovering(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
        >
          {/* Image Glow */}
          <div
            className="
              absolute
              inset-8
              rounded-[2rem]
              bg-primary/25
              blur-3xl
              transition-transform
              duration-300
            "
            style={{
              transform: `
                translate(
                  ${mouse.x * 25}px,
                  ${mouse.y * 25}px
                )
                scale(${isHovering ? 1.1 : 1})
              `,
            }}
          />

          {/* ============================
              Image Card
          ============================ */}
          <div
            className="
              relative
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[320px]
              overflow-hidden
              rounded-[2rem]
              border
              border-border-strong
              bg-[var(--surface)]
              shadow-[0_30px_100px_rgba(0,0,0,0.2)]
              transition-transform
              duration-300
              will-change-transform
            "
            style={{
              transform: `
                perspective(1000px)
                rotateY(${mouse.x * 10}deg)
                rotateX(${-mouse.y * 10}deg)
                translateZ(${isHovering ? 16 : 0}px)
              `,
            }}
          >
            {/* Profile Image */}
            <Image
              src="/images/profile.jpeg"
              alt="Fiky Prayoga"
              fill
              priority
              sizes="
                (max-width: 640px) 80vw,
                (max-width: 1024px) 340px,
                360px
              "
              className="object-cover"
            />

            {/* Dark Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/10
                to-transparent
              "
            />

            {/* ============================
                Image Information
            ============================ */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                flex
                items-end
                justify-between
                gap-4
                p-5
                text-white
                sm:p-6
              "
            >
              <div>
                <strong
                  className="
                    block
                    font-display
                    text-lg
                    font-bold
                    sm:text-xl
                  "
                >
                  Fiky Prayoga
                </strong>

                <span
                  className="
                    mt-1
                    block
                    text-xs
                    text-white/70
                    sm:text-sm
                  "
                >
                  Programmer & Developer
                </span>
              </div>

              <small
                className="
                  hidden
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-3
                  py-1.5
                  text-[10px]
                  backdrop-blur-md
                  sm:block
                  sm:text-xs
                "
              >
                Bangkalan - East Java
              </small>
            </div>

            {/* ============================
                Mouse Light Effect
            ============================ */}
            <div
              className="
                pointer-events-none
                absolute
                h-28
                w-28
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/15
                blur-2xl
                transition-opacity
                duration-200
              "
              style={{
                left: `${50 + mouse.x * 50}%`,
                top: `${50 + mouse.y * 50}%`,
                opacity: isHovering ? 1 : 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}