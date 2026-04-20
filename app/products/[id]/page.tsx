import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/lib/data";
import OtherProductCard from "@/components/ui/OtherProductCard";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return products.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — The ESBRON Company`,
    description: product.tagline,
  };
}

const colorMap = {
  blue: { bg: "rgba(29,111,235,0.12)", text: "var(--blue-glow)", border: "rgba(29,111,235,0.25)", glow: "rgba(29,111,235,0.15)" },
  teal: { bg: "rgba(13,207,180,0.12)", text: "var(--teal)", border: "rgba(13,207,180,0.25)", glow: "rgba(13,207,180,0.1)" },
  purple: { bg: "rgba(139,92,246,0.12)", text: "#a78bfa", border: "rgba(139,92,246,0.25)", glow: "rgba(139,92,246,0.1)" },
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) notFound();

  const c = colorMap[product.color as keyof typeof colorMap];
  const others = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "5rem" }}>
        <div style={{
          background: "var(--navy2)", borderBottom: "1px solid var(--border)",
          padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "20%", right: "5%", width: 400, height: 400, background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>ESBRON</Link>
              <span>›</span>
              <Link href="/products" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Products</Link>
              <span>›</span>
              <span style={{ color: "var(--text-secondary)" }}>{product.name}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="product-hero-grid">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, fontWeight: 500, padding: "0.25rem 0.65rem", borderRadius: 100, background: c.bg, color: c.text }}>
                    {product.tag}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: product.status === "live" ? "var(--teal)" : "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                    {product.status === "live" ? <><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} /> Live</> : "Coming Soon"}
                  </span>
                </div>

                <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, marginBottom: "1rem" }}>
                  {product.name}
                </h1>
                <p style={{ fontSize: "1.1rem", color: c.text, fontWeight: 300, marginBottom: "1.5rem", lineHeight: 1.5 }}>
                  {product.tagline}
                </p>
                <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
                  {product.description}
                </p>

                <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                  {product.url ? (
                    <a href={product.url} target="_blank" rel="noopener noreferrer" style={{
                      background: "var(--blue-bright)", color: "#fff", padding: "0.85rem 1.75rem", borderRadius: 8, fontSize: "0.9rem", fontWeight: 500, textDecoration: "none",
                    }}>Open App ↗</a>
                  ) : (
                    <Link href="/#contact" style={{
                      background: "var(--blue-bright)", color: "#fff", padding: "0.85rem 1.75rem", borderRadius: 8, fontSize: "0.9rem", fontWeight: 500, textDecoration: "none",
                    }}>
                      {product.status === "coming-soon" ? "Get Notified" : "Inquire"}
                    </Link>
                  )}
                  <Link href="/products" style={{
                    background: "transparent", color: "var(--text-secondary)", padding: "0.85rem 1.75rem", borderRadius: 8,
                    fontSize: "0.9rem", fontWeight: 400, textDecoration: "none", border: "1px solid var(--border-light)",
                  }}>
                    ← All Products
                  </Link>
                </div>
              </div>

              <div style={{ background: "var(--card-bg)", border: `1px solid ${c.border}`, borderRadius: 16, padding: "2rem" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--text-muted)", fontWeight: 500, marginBottom: "1.25rem" }}>
                  Key Features
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.85rem" }}>
                  {product.features.map((f: string, i: number) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <span style={{ width: 18, height: 18, borderRadius: 4, background: c.bg, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.1rem" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.text, display: "block" }} />
                      </span>
                      <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "4rem" }} className="details-grid">
            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "2rem" }}>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--text-muted)", fontWeight: 500, marginBottom: "0.75rem" }}>Target Audience</p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9rem" }}>{product.audience}</p>
            </div>
            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "2rem" }}>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--text-muted)", fontWeight: 500, marginBottom: "0.75rem" }}>Impact & Status</p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9rem" }}>{product.impact}</p>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-muted)", fontWeight: 500, marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
              Also in the ecosystem
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="others-grid">
              {others.map(p => (
                <OtherProductCard key={p.id} id={p.id} name={p.name} tagline={p.tagline} tag={p.tag} color={p.color as "blue"|"teal"|"purple"} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media(max-width:768px){
          .product-hero-grid,.details-grid{grid-template-columns:1fr!important;gap:2rem!important}
          .others-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  );
}
