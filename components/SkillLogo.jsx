const logos = {
  HTML5: <><path d="M5 3h14l-1.25 15.5L12 21l-5.75-2.5L5 3Z"/><path d="m8 7 .35 4h7.3l-.35 3.5-3.3 1.2-3.3-1.2-.2-2"/><path d="M16.8 7H8"/></>,
  CSS3: <><path d="M5 3h14l-1.25 15.5L12 21l-5.75-2.5L5 3Z"/><path d="m8 7 .35 4h7.3l-.35 3.5-3.3 1.2-3.3-1.2"/></>,
  JavaScript: <><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M9 9v6.5c0 1.2-.7 1.5-1.6 1.5-.7 0-1.2-.2-1.7-.5M12.5 15.5c.5 1 1.2 1.5 2.4 1.5 1.2 0 2.1-.6 2.1-1.7 0-.9-.5-1.4-1.7-1.9l-.5-.2c-.7-.3-1-.5-1-.9 0-.4.3-.7.8-.7.5 0 .8.2 1.1.7"/></>,
  React: <><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/></>,
  "Next.js": <><path d="M12 3a9 9 0 1 0 9 9"/><path d="M8 16V8l9 8V8"/><path d="M13 8h4"/></>,
  "Tailwind CSS": <><path d="M5 10c1.2-3 3-4.5 5.5-4.5 3.8 0 4 3.5 6.5 3.5 1.1 0 1.9-.5 2.5-1.5-1.2 3-3 4.5-5.5 4.5-3.8 0-4-3.5-6.5-3.5-1.1 0-1.9.5-2.5 1.5Z"/><path d="M4 17c1.2-3 3-4.5 5.5-4.5 3.8 0 4 3.5 6.5 3.5 1.1 0 1.9-.5 2.5-1.5-1.2 3-3 4.5-5.5 4.5-3.8 0-4-3.5-6.5-3.5-1.1 0-1.9.5-2.5 1.5Z"/></>,
  PHP: <><path d="M3 12c0-3 3.6-5 9-5s9 2 9 5-3.6 5-9 5-9-2-9-5Z"/><path d="M6.5 14v-4h2.2c1.4 0 2.2.7 2.2 1.9 0 1.3-.8 2.1-2.2 2.1H7.7M13 14v-4h2.2c1.4 0 2.2.7 2.2 1.9 0 1.3-.8 2.1-2.2 2.1h-1"/></>,
  Laravel: <><path d="m5 15 3-5 4 2 3-5 4 2"/><circle cx="5" cy="15" r="1.5"/><circle cx="8" cy="10" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="15" cy="7" r="1.5"/><circle cx="19" cy="9" r="1.5"/></>,
  MySQL: <><path d="M4 16c2-1 3-4 6-4 3 0 3 3 5 3 1.2 0 2-.8 3-2"/><path d="M4 8c2 1 3 4 6 4 3 0 3-3 5-3 1.2 0 2 .8 3 2"/></>,
  Git: <><path d="m8 7 4-4 4 4-4 4-4-4Z"/><path d="M8 7v6l4 4 4-4V7M12 11v6"/></>,
  GitHub: <><path d="M9 19c-4 .9-4-2-5-2m10 4v-3.2c0-1 .1-1.4-.5-2 1.7-.2 3.5-.8 3.5-4a3.1 3.1 0 0 0-.8-2.2c.1-.2.4-1-.1-2.1 0 0-.7-.2-2.2.8a7.7 7.7 0 0 0-4 0C8.4 7.3 7.7 7.5 7.7 7.5c-.5 1.1-.2 1.9-.1 2.1a3.1 3.1 0 0 0-.8 2.2c0 3.2 1.8 3.8 3.5 4-.4.4-.5.8-.5 1.5V21"/></>,
  Figma: <><path d="M9 3h3v6H9a3 3 0 1 1 0-6ZM12 3h3a3 3 0 1 1 0 6h-3V3ZM9 9h3v6H9a3 3 0 1 1 0-6ZM12 9h3a3 3 0 1 1 0 6h-3V9ZM9 15h3v3a3 3 0 1 1-3-3Z"/></>
};

export default function SkillLogo({ skill }) {
  return (
    <span className={`skill-logo skill-logo-${skill.color}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {logos[skill.name] || <text x="12" y="15" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">{skill.mark}</text>}
      </svg>
    </span>
  );
}
