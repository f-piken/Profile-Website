"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;

    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const goTo = (id) => {
    setMobileOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-content -translate-x-1/2 transition-all duration-300 sm:top-5 sm:w-[calc(100%-32px)] ${
        scrolled ? "top-2 sm:top-3" : ""
      }`}
    >
      <div className="rounded-4xl border border-border bg-[color:var(--surface)]/85 px-8 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-colors duration-300">
        <div className="flex min-h-14 items-center gap-2 sm:min-h-16 sm:gap-3">
          <button
            onClick={() => goTo("home")}
            className="group grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-sm font-extrabold text-white shadow-[0_0_28px_var(--glow-color)] transition hover:scale-105 sm:h-11 sm:w-11"
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
  );
}
