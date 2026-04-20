"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "/#about" },
    { label: "Ecosystem", href: "/#ecosystem" },
    { label: "Products", href: "/products" },
    { label: "Media", href: "/#media" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0.85rem 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(5,12,26,0.95)" : "rgba(5,12,26,0.7)",
      backdropFilter: "blur(14px)",
      borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      transition: "all 0.3s ease",
    }}>
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <Image
          src="/logo-teal.png"
          alt="The Esbron Company"
          width={140}
          height={48}
          style={{ objectFit: "contain", height: 38, width: "auto" }}
          priority
        />
      </Link>

      {/* Desktop links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
        {links.map(l => (
          <Link key={l.label} href={l.href} style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            textDecoration: "none",
            letterSpacing: "0.03em",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/#contact" style={{
          background: "var(--blue-bright)",
          color: "#fff",
          padding: "0.5rem 1.25rem",
          borderRadius: "6px",
          fontSize: "0.85rem",
          fontWeight: 500,
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "var(--blue-glow)")}
        onMouseLeave={e => (e.currentTarget.style.background = "var(--blue-bright)")}
        >
          Partner With Us
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", fontSize: "1.3rem", display: "none" }}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "60px", left: 0, right: 0,
          background: "rgba(5,12,26,0.98)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem 2rem",
          display: "flex", flexDirection: "column", gap: "1.25rem",
          zIndex: 99,
        }}>
          {links.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              color: "var(--text-secondary)", textDecoration: "none", fontSize: "1rem",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{
            background: "var(--blue-bright)", color: "#fff",
            padding: "0.75rem 1.25rem", borderRadius: "8px",
            textDecoration: "none", fontWeight: 500, textAlign: "center",
          }}>
            Partner With Us
          </Link>
        </div>
      )}

      <style>{`
        @media(max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
