"use client";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  tagline: string;
  tag: string;
  color: "blue" | "teal" | "purple";
  status: "live" | "coming-soon";
  url?: string | null;
  compact?: boolean;
};

const colorMap = {
  blue: { bg: "rgba(29,111,235,0.15)", text: "var(--blue-glow)", border: "rgba(29,111,235,0.4)" },
  teal: { bg: "rgba(13,207,180,0.15)", text: "var(--teal)", border: "rgba(13,207,180,0.35)" },
  purple: { bg: "rgba(139,92,246,0.15)", text: "#a78bfa", border: "rgba(139,92,246,0.35)" },
};

export default function ProductCard({ id, name, tagline, tag, color, status, url, compact }: ProductCardProps) {
  const c = colorMap[color];

  return (
    <Link href={`/products/${id}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: compact ? "1.5rem" : "1.75rem",
          transition: "all 0.25s ease",
          cursor: "pointer",
          position: "relative",
          height: "100%",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.borderColor = c.border;
          el.style.background = "var(--card-hover)";
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.borderColor = "var(--border)";
          el.style.background = "var(--card-bg)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Top accent line on hover - done via pseudo is tricky in inline, so use a colored bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${c.text}, transparent)`,
          borderRadius: "12px 12px 0 0", opacity: 0.6,
        }} />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500,
            padding: "0.25rem 0.65rem", borderRadius: 100,
            background: c.bg, color: c.text,
          }}>
            {tag}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            {status === "live" ? (
              <span style={{ fontSize: "0.7rem", color: "var(--teal)", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
                Live
              </span>
            ) : (
              <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Soon</span>
            )}
          </div>
        </div>

        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: compact ? "1.15rem" : "1.35rem",
          marginBottom: "0.5rem",
          color: "var(--text-primary)",
        }}>
          {name}
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {tagline}
        </p>

        <div style={{
          marginTop: "1.25rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "0.78rem", color: c.text }}>View details →</span>
          {url && (
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", background: "var(--border)", padding: "0.2rem 0.5rem", borderRadius: 4 }}>
              Live app ↗
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
