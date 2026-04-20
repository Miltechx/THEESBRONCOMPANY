"use client";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center"
      }} className="about-grid">
        <div>
          <SectionLabel text="Who We Are" />
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            lineHeight: 1.15, marginBottom: "1.25rem",
          }}>
            Built to build — and to scale what works.
          </h2>
          <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, marginBottom: "1rem" }}>
            The ESBRON Company is a venture-building organization designing, developing, and deploying digital products across three strategic verticals: business growth, education, and creative media.
          </p>
          <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, marginBottom: "1rem" }}>
            We don&apos;t just ship products. We build ecosystems — interconnected tools and platforms that compound in value over time, creating lasting leverage for our users, partners, and investors.
          </p>
          <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8 }}>
            Every product in the ESBRON portfolio is conceived, designed, and deployed in-house — from our AI-powered business audit tools to our exam prep platforms serving Nigerian students nationwide.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            { num: "5+", label: "Live digital products", sub: "Deployed on Vercel" },
            { num: "3", label: "Strategic verticals", sub: "Business · Education · Media" },
            { num: "26", label: "Exam subjects", sub: "On AcePass platform" },
            { num: "100%", label: "Africa-built", sub: "Port Harcourt, Nigeria" },
          ].map(s => (
            <div key={s.label} style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "1.5rem",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--blue-soft)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.25rem", color: "var(--blue-glow)", lineHeight: 1, marginBottom: "0.35rem" }}>{s.num}</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.2rem" }}>{s.label}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  );
}
