"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeWipe, setThemeWipe] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;

    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // A viewport-position based active section works more reliably on mobile
    // than relying only on IntersectionObserver thresholds.
    let frame = 0;
    const updateActiveSection = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.35;
        let current = "home";
        let closest = Number.POSITIVE_INFINITY;

        navItems.forEach((item) => {
          const section = document.getElementById(item.id);
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - marker);
          if (rect.top <= marker + 40 && rect.bottom >= marker - 40 && distance < closest) {
            closest = distance;
            current = item.id;
          }
        });

        // Keep the last section active when the user reaches the bottom.
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
          const available = [...navItems].reverse().find((item) => document.getElementById(item.id));
          if (available) current = available.id;
        }

        setActiveSection(current);
        frame = 0;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    const applyTheme = () => {
      setTheme(next);
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    };

    // Use the browser's View Transition API when available. The new theme
    // expands from the top-right corner, avoiding the double-render glitch.
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(applyTheme);
      return;
    }

    // Smooth fallback for older browsers.
    const wipeColor = next === "dark" ? "#0f0f12" : "#f5f6fb";
    setThemeWipe(wipeColor);
    window.setTimeout(applyTheme, 360);
    window.setTimeout(() => setThemeWipe(null), 820);
  };

  const goTo = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      return;
    }

    router.push(`/#${id}`);
  };

  return (
    <>
      {themeWipe && (
        <div
          className="theme-wipe is-active"
          style={{ "--theme-wipe-color": themeWipe }}
          aria-hidden="true"
        />
      )}
      <nav
      className={`fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-content -translate-x-1/2 transition-all duration-300 sm:top-5 sm:w-[calc(100%-32px)] ${
        scrolled ? "top-2 sm:top-3" : ""
      }`}
    >
      <div className="rounded-4xl border border-border bg-[color:var(--surface)]/85 px-8 shadow-[var(--shadow-soft)] backdrop-blur-md transition-colors duration-300">
        <div className="flex min-h-14 items-center gap-2 sm:min-h-16 sm:gap-3">
          <button
            onClick={() => goTo("home")}
            className="group grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-sm font-extrabold text-white shadow-[0_0_18px_var(--glow-color)] transition hover:scale-105 sm:h-11 sm:w-11"
            aria-label="Go to home"
          >
            F
            <span className="absolute ml-4 mt-4 h-1.5 w-1.5 rounded-full bg-tertiary" />
          </button>

          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-primary-soft text-primary"
                      : "text-muted hover:bg-[var(--surface-high)] hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-[var(--surface-high)] text-base text-foreground transition hover:border-border-strong hover:bg-[var(--surface-highest)]"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-[var(--surface-high)] text-lg text-foreground transition hover:border-border-strong md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="grid gap-1 border-t border-border pt-2 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeSection === item.id
                    ? "bg-primary-soft text-primary"
                    : "text-muted hover:bg-[var(--surface-high)] hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      </nav>
    </>
  );
}
