const skillGroups = [
  {
    icon: "✎",
    title: "Product Design",
    color: "primary",
    description:
      "Human-centric workflows, rapid prototyping, wireframing, and multi-platform design systems.",
    skills: [
      ["Figma Tokens", 98],
      ["UX Architecture", 92],
      ["Prototyping", 95],
    ],
    tags: ["Design Tokens", "User Journeys"],
  },
  {
    icon: "⌘",
    title: "Frontend Dev",
    color: "tertiary",
    description:
      "Component architectures, micro-frontends, accessible HTML5 semantics, and type safety.",
    skills: [
      ["React & Next.js", 95],
      ["TypeScript", 90],
      ["Tailwind CSS", 96],
    ],
    tags: ["State Machines", "REST/GraphQL"],
  },
  {
    icon: "◌",
    title: "Motion & 3D",
    color: "secondary",
    description:
      "Tactile feedback loops, procedural shader rendering, and performant web graphics.",
    skills: [
      ["Three.js / WebGL", 84],
      ["Framer Motion", 92],
      ["GSAP Animations", 88],
    ],
    tags: ["GLTF Rigging", "Canvas2D"],
  },
  {
    icon: "⚒",
    title: "Tools & Pipeline",
    color: "container",
    description:
      "Modern developer ergonomics, build optimizations, linting chains, and CI/CD automation.",
    skills: [
      ["Git & CI/CD", 90],
      ["Storybook Systems", 94],
      ["Web Vitals Audit", 89],
    ],
    tags: ["Docker", "Vercel Edge"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <div>
          <span className="eyebrow">// Kapabilitas Teknis</span>
          <h2>Skills & Technology Matrix</h2>
        </div>

        <p className="section-intro">
          Harmonizing visual design rigor with scalable engineering principles
          across the modern digital product stack.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div>
              <div className={`skill-icon ${group.color}`}>{group.icon}</div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-progress">
                {group.skills.map(([name, value]) => (
                  <div className="progress-item" key={name}>
                    <div className="progress-label">
                      <span>{name}</span>
                      <strong>{value}%</strong>
                    </div>
                    <div className="progress-track">
                      <div
                        className={`progress-fill ${group.color}`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}