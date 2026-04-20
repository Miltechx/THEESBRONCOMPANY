"use client";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export default function Ecosystem() {
  const bizProducts = products.filter(p => p.stack === "business");
  const eduProducts = products.filter(p => p.stack === "education");

  return (
    <section id="ecosystem" style={{ padding: "7rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel text="Our Products" />
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          lineHeight: 1.15,
        }}>
          The ESBRON Ecosystem
        </h2>
        <Link href="/products" style={{
          fontSize: "0.88rem", color: "var(--blue-glow)", textDecoration: "none",
          border: "1px solid rgba(29,111,235,0.3)", padding: "0.5rem 1rem", borderRadius: 6,
          transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(29,111,235,0.1)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
        >
          View all products →
        </Link>
      </div>
      <p style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 560, lineHeight: 1.7, marginBottom: "3.5rem" }}>
        A portfolio of focused products — each solving a specific problem, all sharing a common infrastructure of intelligence and design.
      </p>

      {/* Business Stack */}
      <div style={{ marginBottom: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>
        Business Growth Stack
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "3rem" }} className="eco-grid-3">
        {bizProducts.map(p => (
          <ProductCard key={p.id} {...p} color={p.color as "blue" | "teal" | "purple"} />
        ))}
      </div>

      {/* Education Stack */}
      <div style={{ marginBottom: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>
        Education Stack
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem", maxWidth: 680 }} className="eco-grid-2">
        {eduProducts.map(p => (
          <ProductCard key={p.id} {...p} color={p.color as "blue" | "teal" | "purple"} />
        ))}
      </div>

      <style>{`
        @media(max-width:900px){.eco-grid-3{grid-template-columns:1fr 1fr!important}}
        @media(max-width:600px){.eco-grid-3,.eco-grid-2{grid-template-columns:1fr!important;max-width:100%!important}}
      `}</style>
    </section>
  );
}
