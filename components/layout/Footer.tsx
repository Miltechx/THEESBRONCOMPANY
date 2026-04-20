import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    {
      title: "Ecosystem",
      links: [
        { label: "AcePass", href: "/products/acepass" },
        { label: "CramWiz", href: "/products/cramwiz" },
        { label: "BizKlarity", href: "/products/bizhealth" },
        { label: "KraftPitch", href: "/products/kraftpitch" },
        { label: "BrandWella", href: "/products/brandwella" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "What We Do", href: "/#pillars" },
        { label: "Media Division", href: "/#media" },
        { label: "Vision", href: "/#vision" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Partner With Us", href: "/#contact" },
        { label: "Investor Inquiry", href: "/#contact" },
        { label: "KraftPitch Dashboard", href: "https://kraftpitch.vercel.app/dashboard" },
      ],
    },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--navy2)", padding: "4rem 2rem 2rem" }}>
      <style>{`
        .footer-link { font-size: 0.88rem; color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: var(--text-primary); }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media(max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
          <div>
            <Image src="/logo-teal.png" alt="The Esbron Company" width={160} height={54} style={{ objectFit: "contain", height: 42, width: "auto", marginBottom: "1rem" }} />
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300, maxWidth: "260px" }}>
              A venture studio building digital products that scale people and ideas — from Port Harcourt, for the world.
            </p>
            <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Port Harcourt, Nigeria</span>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500, marginBottom: "1rem" }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {col.links.map(l => (
                  <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>© {year} The ESBRON Company. All rights reserved.</p>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Built in Nigeria. Scaling everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
