export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-content flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <strong className="font-display text-foreground">Creative Engineer</strong>
          <p className="mt-1 text-xs text-muted">© 2024 Architectural Minimalism & Craft. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
          {["GitHub", "LinkedIn", "Read.cv", "Substack"].map((item) => <a key={item} href="#" className="transition hover:text-primary">{item}</a>)}
        </div>
      </div>
    </footer>
  );
}
