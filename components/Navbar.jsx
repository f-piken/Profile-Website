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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    // ==============================
    // LOAD THEME
    // ==============================

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = "dark";
    }

    // ==============================
    // SECTION OBSERVER
    // ==============================

    const sections = navItems
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(
            (entry) => entry.isIntersecting
          )
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin:
          "-20% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      observer.disconnect();
    };
  }, []);

  // ==============================
  // TOGGLE THEME
  // ==============================

  const toggleTheme = () => {
    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";

    setTheme(newTheme);

    document.documentElement.dataset.theme =
      newTheme;

    localStorage.setItem(
      "theme",
      newTheme
    );
  };

  return (
    <nav
      className={`navbar ${
        scrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >
      <div className="navbar-inner">

        {/* LOGO */}

        <a
          href="#home"
          className="navbar-logo"
        >
          <span>F</span>
        </a>

        {/* NAVIGATION */}

        <div className="navbar-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* THEME BUTTON */}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          <span className="theme-icon">
            {theme === "dark"
              ? "☀"
              : "☾"}
          </span>
        </button>

      </div>
    </nav>
  );
}