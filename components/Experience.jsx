const experiences = [
  {
    role: "Senior Product Designer",
    company: "TechNova Solutions",
    period: "2022 — Present",
    color: "primary",
    description:
      "Spearheaded the unified design system serving 14 squad teams across Southeast Asia. Authored full-spec Figma libraries and synced tokens directly to code repos via GitHub Actions, slicing design debt by 40%.",
    tags: ["Design Ops", "Team Leadership", "React Architecture"],
  },
  {
    role: "Lead UI Engineer",
    company: "PixelCraft Interactive",
    period: "2020 — 2022",
    color: "tertiary",
    description:
      "Led a high-velocity studio engineering pod building award-winning creative campaigns, 3D web environments, and interactive digital branding for global clients including Sony Music and Monotype.",
    tags: ["Creative Dev", "WebGL", "Animation Systems"],
  },
  {
    role: "Frontend Designer",
    company: "Studio Arca",
    period: "2018 — 2020",
    color: "secondary",
    description:
      "Designed UI wireframes, conducted usability benchmarks, and translated static brand visual guidelines into reactive component packages using Vue.js and modular CSS.",
    tags: ["UI/UX Research", "HTML/SCSS", "Rapid Testing"],
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="experience-heading">
        <span className="eyebrow">// Rekam Jejak</span>
        <h2>Experience & Milestones</h2>
        <p>
          Over half a decade directing UI engineering, elevating design teams,
          and architecting resilient consumer platforms.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={item.role}>
            <span className={`timeline-dot ${item.color}`} />

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>{item.role}</h3>
                  <span className={`company ${item.color}`}>
                    {item.company}
                  </span>
                </div>
                <span className="period">{item.period}</span>
              </div>

              <p>{item.description}</p>

              <div className="tech-list">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}