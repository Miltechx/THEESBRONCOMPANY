"use client";
export default function Vision() {
  return (
    <div id="vision" style={{ background: "var(--navy3)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          width: 1, height: 60,
          background: "linear-gradient(to bottom, transparent, var(--teal), transparent)",
          margin: "0 auto 2.5rem",
        }} />
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2rem" }}>
          Our founding conviction
        </p>
        <blockquote style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
          lineHeight: 1.3,
          color: "var(--text-primary)",
          marginBottom: "2.5rem",
        }}>
          &ldquo;The ESBRON Company builds systems that help people{" "}
          <em style={{ color: "var(--blue-glow)", fontStyle: "italic" }}>learn, build, and scale</em>
          {" "}in a rapidly evolving digital world.&rdquo;
        </blockquote>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Learn", desc: "Education products that prepare people for the digital economy" },
            { label: "Build", desc: "Business tools that help founders and operators move with clarity" },
            { label: "Scale", desc: "Infrastructure that compounds — growing the more it is used" },
          ].map(v => (
            <div key={v.label} style={{
              flex: "1 1 200px", maxWidth: 260,
              padding: "1.5rem",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              textAlign: "left",
            }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--teal)", marginBottom: "0.5rem" }}>{v.label}</div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
