
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/f-piken",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.06c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.53A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fiky-prayoga?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3ZM6.5 7.63a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.26-1.87 2.57V19h-3V9h2.88v1.37h.04a3.16 3.16 0 0 1 2.84-1.56c3.04 0 3.61 2 3.61 4.6Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pikishuuu._?obrf=MThqaGF5ZWpwc2JwaA%3D%3D&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:fikypray@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-content flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <strong className="font-display text-foreground">
            Creative Engineer
          </strong>
          <p className="mt-1 text-xs text-muted">
            © {new Date().getFullYear()} Fiky Prayoga.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target={item.name === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
            >
              <span className="h-[17px] w-[17px]">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

