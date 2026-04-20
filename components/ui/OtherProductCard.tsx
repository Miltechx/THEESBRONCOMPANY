"use client";
import Link from "next/link";

const colorMap = {
  blue: { bg: "rgba(29,111,235,0.15)", text: "var(--blue-glow)" },
  teal: { bg: "rgba(13,207,180,0.15)", text: "var(--teal)" },
  purple: { bg: "rgba(139,92,246,0.15)", text: "#a78bfa" },
};

type Props = { id: string; name: string; tagline: string; tag: string; color: "blue"|"teal"|"purple" };

export default function OtherProductCard({ id, name, tagline, tag, color }: Props) {
  const c = colorMap[color];
  return (
    <Link href={`/products/${id}`} style={{ textDecoration: "none" }}>
      <div
        style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.5rem", transition: "all 0.2s", cursor: "pointer" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(29,111,235,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, padding: "0.2rem 0.55rem", borderRadius: 100, background: c.bg, color: c.text, display: "inline-block", marginBottom: "0.75rem" }}>
          {tag}
        </span>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", marginBottom: "0.4rem", color: "var(--text-primary)" }}>{name}</div>
        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{tagline}</p>
      </div>
    </Link>
  );
}
