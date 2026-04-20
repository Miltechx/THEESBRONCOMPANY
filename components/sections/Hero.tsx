"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px", opacity: 0.3, pointerEvents: "none",
      }} />
      {/* Glows */}
      <div style={{ position: "absolute", top: "15%", left: "-5%", width: 700, height: 700, background: "radial-gradient(circle, rgba(29,111,235,0.12) 0%, transparent 70%)", pointerEvents: "none", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(13,207,180,0.07) 0%, transparent 70%)", pointerEvents: "none", borderRadius: "50%" }} />
      {/* Large watermark logo — top right decorative */}
      <div style={{
        position: "absolute", right: "-2%", top: "10%",
        opacity: 0.04, pointerEvents: "none",
        zIndex: 0,
      }}>
        <Image src="/logo-teal.png" alt="" width={520} height={520} style={{ objectFit: "contain", width: 480, height: "auto" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "8rem 2rem 6rem", position: "relative", zIndex: 1, width: "100%" }}>
        {/* Live badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(29,111,235,0.08)", border: "1px solid rgba(29,111,235,0.2)",
          borderRadius: 100, padding: "0.35rem 1rem",
          fontSize: "0.78rem", color: "var(--blue-glow)",
          marginBottom: "1.75rem", letterSpacing: "0.05em",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
          Venture Studio · Port Harcourt, Nigeria
        </div>

        {/* Company identity row */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, var(--teal), transparent)" }} />
          <div>
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
              The ESBRON Company
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              Venture Studio · EdTech · Business Intelligence · Creative Media
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
          marginBottom: "1.5rem",
          maxWidth: 820,
        }}>
          We build systems that{" "}
          <em style={{ fontStyle: "italic", color: "var(--blue-glow)" }}>scale</em>
          {" "}people and ideas.
        </h1>

        <p style={{
          fontSize: "1.1rem", color: "var(--text-secondary)",
          maxWidth: 520, lineHeight: 1.75,
          marginBottom: "2.5rem", fontWeight: 300,
        }}>
          A multi-venture studio building digital products across business intelligence, education, and creative media — for Africa and the world.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="#ecosystem" style={{
            background: "var(--blue-bright)", color: "#fff",
            padding: "0.9rem 2rem", borderRadius: 8,
            fontSize: "0.95rem", fontWeight: 500, textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--blue-glow)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(29,111,235,0.35)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--blue-bright)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Explore Ecosystem
          </Link>
          <Link href="#contact" style={{
            background: "transparent", color: "var(--text-secondary)",
            padding: "0.9rem 2rem", borderRadius: 8,
            fontSize: "0.95rem", fontWeight: 400, textDecoration: "none",
            border: "1px solid var(--border-light)", transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderColor = "var(--blue-soft)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border-light)"; }}
          >
            Partner With Us
          </Link>
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", gap: "3rem", marginTop: "4rem",
          paddingTop: "2.5rem", borderTop: "1px solid var(--border)", flexWrap: "wrap",
        }}>
          {[
            { num: "5+", label: "Live Products" },
            { num: "3", label: "Verticals" },
            { num: "26", label: "Exam Subjects" },
            { num: "100%", label: "Built in Nigeria" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: "var(--blue-glow)" }}>{s.num}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
    </section>
  );
}
