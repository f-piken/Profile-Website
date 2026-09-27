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
    <section className="section contact-section" id="contact">
      <div className="contact-shell">
        <div className="contact-glow" />

        <div className="contact-grid">
          <div className="contact-copy">
            <div>
              <span className="eyebrow">// Let’s Collaborate</span>
              <h2>
                Have a project in mind? Let’s create something extraordinary
                together.
              </h2>
              <p>
                Whether you need a full product zero-to-one design cycle,
                design system consultation, or specialized creative front-end
                execution, my terminal is open.
              </p>
            </div>

            <div className="direct-channel">
              <span className="label">Direct Channel</span>

              <button className="email-copy" onClick={copyEmail}>
                <span>◎</span>
                <strong>mikael.reza.studio@gmail.com</strong>
                <small>{copied ? "Disalin!" : "Salin"}</small>
              </button>

              <div className="socials">
                <a href="#" aria-label="GitHub">GH</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Twitter">X</a>
                <a href="#" aria-label="Dribbble">Dr</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Pesan berhasil dikirim</h3>
                <p>
                  Terima kasih! Pesan telah diterima. Mikael akan membalas
                  dalam 24 jam kerja.
                </p>
                <button
                  className="button primary"
                  onClick={() => setSent(false)}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-row">
                  <label>
                    Nama Anda
                    <input
                      name="name"
                      placeholder="Alexander Vance"
                      required
                    />
                  </label>

                  <label>
                    Email Bisnis
                    <input
                      name="email"
                      type="email"
                      placeholder="alex@company.com"
                      required
                    />
                  </label>
                </div>

                <fieldset>
                  <legend>Estimasi Anggaran Project (USD)</legend>
                  <div className="budget-grid">
                    {budgets.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className={
                          budget === item ? "budget active" : "budget"
                        }
                        onClick={() => setBudget(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label>
                  Ceritakan Kebutuhan Anda
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Halo Mikael, kami sedang merancang platform SaaS baru..."
                    required
                  />
                </label>

                <button
                  className="button primary submit-button"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Mengirim..." : "Kirim Pesan →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}