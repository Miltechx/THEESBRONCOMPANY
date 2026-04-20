import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import { teamValues } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — The ESBRON Company",
  description: "Learn about The ESBRON Company — a venture studio building digital products from Port Harcourt, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <style>{`
        .about-stat:hover { border-color: var(--blue-soft) !important; }
        .value-card { background: var(--card-bg); border: 1px solid var(--border); border-left: 3px solid var(--blue-bright); border-radius: 12px; padding: 2rem; }
        @media(max-width:768px){ .story-grid,.values-grid{grid-template-columns:1fr!important;gap:2.5rem!important} }
      `}</style>
      <main style={{ paddingTop: "5rem" }}>
        <div style={{ background: "var(--navy2)", borderBottom: "1px solid var(--border)", padding: "5rem 2rem 4rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionLabel text="About Us" />
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, marginBottom: "1rem" }}>
              Africa-first.<br /><em style={{ fontStyle: "italic", color: "var(--blue-glow)" }}>World-class.</em>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 560, lineHeight: 1.75, fontSize: "1.05rem" }}>
              The ESBRON Company was built on a simple conviction: that the infrastructure for learning, building, and scaling belongs in the hands of Africans — and it should be the best in the world.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start", marginBottom: "5rem" }} className="story-grid">
            <div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1.25rem" }}>The story</h2>
              <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, marginBottom: "1rem" }}>
                ESBRON began not as a company, but as a commitment — to build things that actually work, for people who actually need them. Founded in Port Harcourt, Nigeria, we started by identifying the gaps: students who needed better exam prep, businesses who needed clarity on their health, freelancers who needed professional proposals in minutes.
              </p>
              <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8, marginBottom: "1rem" }}>
                Each product we launched taught us something. AcePass showed us how hungry Nigerian students are for structured, quality study tools. BizKlarity revealed how many SME founders are operating blind. KraftPitch proved that even simple improvements to professional workflows can unlock significant value.
              </p>
              <p style={{ color: "var(--text-secondary)", fontWeight: 300, lineHeight: 1.8 }}>
                Today, ESBRON is a growing venture studio — shipping products, building brand infrastructure, and creating media. The mission has not changed. The scale has.
              </p>
            </div>
            <div>
              <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 16, padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <Image src="/logo-color.png" alt="The Esbron Company" width={280} height={140} style={{ objectFit: "contain", width: "100%", maxWidth: 260, height: "auto" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { num: "2024", label: "Founded" },
                  { num: "PHC", label: "Headquarters" },
                  { num: "5+", label: "Products live" },
                  { num: "3", label: "Verticals" },
                ].map(s => (
                  <div key={s.label} className="about-stat" style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "1.25rem", transition: "border-color 0.2s" }}>
                    <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.75rem", color: "var(--blue-glow)", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionLabel text="How We Work" />
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.2, marginBottom: "2.5rem" }}>
              What we believe in
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="values-grid">
              {teamValues.map((v, i) => (
                <div key={i} className="value-card">
                  <div style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.75rem", color: "var(--text-primary)" }}>{v.title}</div>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "var(--navy2)", borderTop: "1px solid var(--border)", padding: "5rem 2rem", textAlign: "center" }}>
          <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, var(--teal), transparent)", margin: "0 auto 2rem" }} />
          <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
            Want to build something together?
          </p>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontWeight: 300, maxWidth: 480, margin: "0 auto 2rem" }}>
            We are a small, focused studio that moves fast. If you have a vision worth backing or a problem worth solving, let us talk.
          </p>
          <Link href="/#contact" style={{ display: "inline-block", background: "var(--blue-bright)", color: "#fff", padding: "0.9rem 2rem", borderRadius: 8, fontSize: "0.95rem", fontWeight: 500, textDecoration: "none" }}>
            Get in touch →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
