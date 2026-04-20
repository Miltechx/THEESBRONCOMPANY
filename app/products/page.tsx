import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — The ESBRON Company",
  description: "Explore the full ESBRON product ecosystem: BizKlarity, KraftPitch, BrandWella, AcePass, and CramWiz.",
};

export default function ProductsPage() {
  const biz = products.filter(p => p.stack === "business");
  const edu = products.filter(p => p.stack === "education");

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6rem" }}>
        {/* Header */}
        <div style={{ background: "var(--navy2)", padding: "5rem 2rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionLabel text="Our Products" />
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, marginBottom: "1rem" }}>
              The ESBRON Ecosystem
            </h1>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 560, lineHeight: 1.75, fontSize: "1.05rem" }}>
              Five focused products. Two strategic verticals. One shared infrastructure of intelligence, design, and African ambition.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
          {/* Business Stack */}
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>
                Business Growth Stack
              </span>
              <span style={{ fontSize: "0.7rem", background: "rgba(29,111,235,0.12)", color: "var(--blue-glow)", padding: "0.2rem 0.6rem", borderRadius: 100 }}>
                {biz.length} products
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300, fontSize: "0.9rem", marginBottom: "2rem", maxWidth: 520 }}>
              Tools that give businesses the clarity, infrastructure, and brand identity they need to operate and grow with confidence.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="grid-3">
              {biz.map(p => (
                <ProductCard key={p.id} {...p} color={p.color as "blue"|"teal"|"purple"} />
              ))}
            </div>
          </div>

          {/* Education Stack */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>
                Education Stack
              </span>
              <span style={{ fontSize: "0.7rem", background: "rgba(13,207,180,0.12)", color: "var(--teal)", padding: "0.2rem 0.6rem", borderRadius: 100 }}>
                {edu.length} products
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300, fontSize: "0.9rem", marginBottom: "2rem", maxWidth: 520 }}>
              Platforms that prepare Nigerian students to compete, perform, and succeed at every academic milestone.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem", maxWidth: 680 }} className="grid-2">
              {edu.map(p => (
                <ProductCard key={p.id} {...p} color={p.color as "blue"|"teal"|"purple"} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Band */}
        <div style={{ background: "var(--navy2)", borderTop: "1px solid var(--border)", padding: "4rem 2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.75rem", marginBottom: "1rem" }}>
            Want to partner on a product?
          </p>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontWeight: 300 }}>
            We&apos;re open to strategic partnerships, investment, and co-building conversations.
          </p>
          <a href="/#contact" style={{
            display: "inline-block",
            background: "var(--blue-bright)", color: "#fff",
            padding: "0.9rem 2rem", borderRadius: 8,
            fontSize: "0.95rem", fontWeight: 500, textDecoration: "none",
          }}>
            Get in touch →
          </a>
        </div>
      </main>
      <Footer />

      <style>{`
        @media(max-width:900px){ .grid-3{grid-template-columns:1fr 1fr!important} }
        @media(max-width:600px){ .grid-3,.grid-2{grid-template-columns:1fr!important;max-width:100%!important} }
      `}</style>
    </>
  );
}
