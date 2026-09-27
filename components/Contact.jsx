"use client";

import { useState } from "react";

const budgets = ["< $3,000", "$3k - $8k", "$8k - $15k", "$15k+"];

export default function Contact() {
  const [budget, setBudget] = useState("$3k - $8k");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mikael.reza.studio@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      event.target.reset();
      setBudget("$3k - $8k");
    }, 1000);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] border border-border-strong bg-[var(--surface)]/90 p-5 shadow-[var(--shadow-glow)] backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">// Let’s Collaborate</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">Have a project in mind? Let’s create something extraordinary together.</h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">Whether you need a full product zero-to-one design cycle, design system consultation, or specialized creative front-end execution, my terminal is open.</p>
            </div>

            <div className="rounded-2xl border border-border bg-[var(--surface-high)]/70 p-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Direct Channel</span>
              <button onClick={copyEmail} className="mt-3 flex w-full items-center gap-3 text-left text-sm transition hover:text-primary">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">◎</span>
                <strong className="min-w-0 flex-1 truncate text-foreground">mikael.reza.studio@gmail.com</strong>
                <small className="text-muted">{copied ? "Disalin!" : "Salin"}</small>
              </button>
              <div className="mt-4 flex gap-2">
                {[["GH", "GitHub"], ["in", "LinkedIn"], ["X", "Twitter"], ["Dr", "Dribbble"]].map(([label, name]) => (
                  <a key={name} href="#" aria-label={name} className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-[var(--surface)] font-mono text-[10px] font-semibold text-muted transition hover:border-primary/50 hover:bg-primary-soft hover:text-primary">{label}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-[var(--background)]/45 p-5 sm:p-7">
            {sent ? (
              <div className="grid min-h-[420px] place-items-center text-center">
                <div className="max-w-sm">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-xl font-bold text-white">✓</div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Pesan berhasil dikirim</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">Terima kasih! Pesan telah diterima. Mikael akan membalas dalam 24 jam kerja.</p>
                  <button className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary" onClick={() => setSent(false)}>Kirim Pesan Lain</button>
                </div>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={submit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-xs font-semibold text-foreground-soft">Nama Anda<input name="name" placeholder="Alexander Vance" required className="w-full rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm font-normal text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10" /></label>
                  <label className="space-y-2 text-xs font-semibold text-foreground-soft">Email Bisnis<input name="email" type="email" placeholder="alex@company.com" required className="w-full rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm font-normal text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10" /></label>
                </div>

                <fieldset>
                  <legend className="mb-2 text-xs font-semibold text-foreground-soft">Estimasi Anggaran Project (USD)</legend>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {budgets.map((item) => (
                      <button key={item} type="button" onClick={() => setBudget(item)} className={`rounded-xl border px-3 py-3 text-xs font-semibold transition ${budget === item ? "border-primary bg-primary-soft text-primary" : "border-border bg-[var(--surface)] text-muted hover:border-border-strong hover:text-foreground"}`}>{item}</button>
                    ))}
                  </div>
                </fieldset>

                <label className="block space-y-2 text-xs font-semibold text-foreground-soft">Ceritakan Kebutuhan Anda<textarea name="message" rows="5" placeholder="Halo Mikael, kami sedang merancang platform SaaS baru..." required className="w-full resize-y rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm font-normal leading-6 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10" /></label>

                <button className="w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_var(--glow-color)] transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={sending}>{sending ? "Mengirim..." : "Kirim Pesan →"}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
