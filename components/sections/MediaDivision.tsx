"use client";
import SectionLabel from "@/components/ui/SectionLabel";

export default function MediaDivision() {
  const services = ["Branding & Identity", "Motion Design", "Visual Storytelling", "Digital Production"];

  return (
    <div id="media" style={{ background: "var(--navy2)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel text="Creative Division" />
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }} className="media-grid">
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2, marginBottom: "1rem",
            }}>
              The ESBRON Media Arm
            </h2>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, marginBottom: "0.75rem" }}>
              Beyond products, we operate a full creative and media division — the engine behind how ESBRON ventures look, feel, and communicate to the world.
            </p>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, marginBottom: "1.75rem" }}>
              Every brand that comes through ESBRON gets the full creative stack: strategy, visual identity, motion, and storytelling — produced at studio quality.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {services.map(s => (
                <div key={s} style={{
                  padding: "0.85rem 1rem",
                  background: "rgba(29,111,235,0.06)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  display: "flex", alignItems: "center", gap: "0.6rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--blue-soft)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--blue-glow)", flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: "2rem",
            background: "rgba(29,111,235,0.05)",
            borderRadius: 12,
            border: "1px solid var(--border)",
          }}>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Studio philosophy
            </div>
            <p style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.35rem",
              lineHeight: 1.45,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}>
              "Design is not decoration — it is the primary interface between an idea and the people it is meant to reach."
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>— The ESBRON Creative Standard</p>

            <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(13,207,180,0.05)", borderRadius: 8, border: "1px solid rgba(13,207,180,0.15)" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--teal)", lineHeight: 1.6 }}>
                The media arm supports all ESBRON portfolio ventures — and is available for select external engagements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.media-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
