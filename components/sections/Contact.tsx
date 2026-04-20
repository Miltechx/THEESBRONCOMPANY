"use client";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "Investor interest", message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border-light)",
    borderRadius: 8,
    padding: "0.75rem 1rem",
    color: "var(--text-primary)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
  };

  return (
    <section id="contact" style={{ padding: "7rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel text="Get In Touch" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
        {/* Left info */}
        <div style={{ paddingTop: "0.5rem" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", marginBottom: "1rem", lineHeight: 1.2 }}>
            Ready to build with us?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2rem", fontWeight: 300 }}>
            Whether you&apos;re an investor looking to back a conviction-led venture studio, a partner exploring co-building opportunities, or a business seeking digital products — we want to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {[
              { icon: "✉", label: "Email", value: "hello@esbron.co" },
              { icon: "⬡", label: "Location", value: "Port Harcourt, Nigeria" },
            ].map(c => (
              <div key={c.label} style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.85rem 1rem",
                background: "var(--card-bg)", border: "1px solid var(--border)",
                borderRadius: 8, fontSize: "0.88rem",
              }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(29,111,235,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.1rem" }}>{c.label}</div>
                  <div>{c.value}</div>
                </div>
              </div>
            ))}
            <a href="https://kraftpitch.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              padding: "0.85rem 1rem",
              background: "var(--card-bg)", border: "1px solid var(--border)",
              borderRadius: 8, fontSize: "0.88rem",
              textDecoration: "none", color: "inherit",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(29,111,235,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ width: 32, height: 32, borderRadius: 6, background: "rgba(29,111,235,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", flexShrink: 0 }}>
                ↗
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.1rem" }}>Request a proposal via</div>
                <div style={{ color: "var(--blue-glow)" }}>KraftPitch</div>
              </div>
            </a>
          </div>

          {/* Investor note */}
          <div style={{ padding: "1.25rem", background: "rgba(29,111,235,0.05)", border: "1px solid rgba(29,111,235,0.15)", borderRadius: 10 }}>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              <span style={{ color: "var(--blue-glow)", fontWeight: 500 }}>Investor inquiries:</span> We&apos;re actively building and open to conversations with investors who believe in Africa-first, world-class digital infrastructure.
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Message received.</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>We&apos;ll get back to you within 24–48 hours.</p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: "1.75rem" }}>
                <p style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.25rem" }}>Send us a message</p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>We respond within 24–48 hours.</p>
              </div>
              <form onSubmit={submit}>
                {[
                  { label: "Full name", name: "name", type: "text", placeholder: "Your name" },
                  { label: "Email address", name: "email", type: "email", placeholder: "you@company.com" },
                ].map(f => (
                  <div key={f.name} style={{ marginBottom: "1.25rem" }}>
                    <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.4rem", letterSpacing: "0.03em", display: "block" }}>{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name as keyof typeof form]} onChange={handle} required style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "var(--blue-bright)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border-light)")}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.4rem", letterSpacing: "0.03em", display: "block" }}>Inquiry type</label>
                  <select name="type" value={form.type} onChange={handle} style={{ ...inputStyle, appearance: "none" as const }}>
                    {["Investor interest", "Partnership inquiry", "Product collaboration", "General business"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.4rem", letterSpacing: "0.03em", display: "block" }}>Message</label>
                  <textarea name="message" placeholder="Tell us about your interest..." value={form.message} onChange={handle} required rows={4} style={{ ...inputStyle, resize: "vertical" as const }}
                    onFocus={e => (e.target.style.borderColor = "var(--blue-bright)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border-light)")}
                  />
                </div>
                <button type="submit" style={{
                  width: "100%", background: "var(--blue-bright)", color: "#fff",
                  border: "none", borderRadius: 8, padding: "0.9rem",
                  fontSize: "0.95rem", fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer", transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--blue-glow)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--blue-bright)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
