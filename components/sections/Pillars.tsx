"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import { pillars } from "@/lib/data";

export default function Pillars() {
  return (
    <div id="pillars" style={{ background: "var(--navy2)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel text="What We Do" />
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          lineHeight: 1.15, marginBottom: "0.75rem",
        }}>
          Three pillars. One ecosystem.
        </h2>
        <p style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 520, lineHeight: 1.7, marginBottom: "3.5rem" }}>
          Every product we build sits within a deliberate architecture — designed for compounding growth and lasting impact.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "2rem 1.75rem",
              transition: "all 0.25s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(29,111,235,0.4)";
              e.currentTarget.style.background = "var(--card-hover)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--card-bg)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, var(--blue-bright), var(--teal))",
                opacity: 0.5,
              }} />
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "rgba(29,111,235,0.12)",
                border: "1px solid rgba(29,111,235,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem", fontSize: "1.1rem",
              }}>
                {p.icon}
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.75rem" }}>{p.title}</div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){.pillars-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
