"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const filters = [
  ["all", "All (4)"],
  ["uiux", "UI/UX"],
  ["webapp", "Web App"],
  ["creative", "Creative Dev"],
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <>
      <section className="section" id="selected-works">
        <div className="section-header">
          <div>
            <span className="eyebrow">// Portofolio Terpilih</span>
            <h2>Selected Artifacts & Systems</h2>
          </div>

          <div className="filter-tabs">
            {filters.map(([value, label]) => (
              <button
                key={value}
                className={
                  filter === value ? "filter-btn active" : "filter-btn"
                }
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid" key={filter}>
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} />
                  <div className="project-labels">
                    <span>{project.categoryLabel}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <a href="#contact" aria-label={`Open ${project.title}`}>
                      ↗
                    </a>
                  </div>

                  <p>{project.description}</p>
                </div>
              </div>

              <div className="project-footer">
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <button
                  className="case-study"
                  onClick={() => setSelected(project)}
                >
                  View Case Study →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="status-dot" />
                <h3>{selected.title}</h3>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <p>{selected.body}</p>
              <div className="case-status">
                Status: Published Case Study • Production Deployed
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="button secondary"
                onClick={() => setSelected(null)}
              >
                Tutup
              </button>
              <a
                className="button primary"
                href="#contact"
                onClick={() => setSelected(null)}
              >
                Diskusikan Proyek Serupa
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
