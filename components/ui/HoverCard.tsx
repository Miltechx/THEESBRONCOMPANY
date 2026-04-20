"use client";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  borderColor?: string;
};

export default function HoverCard({ href, children, borderColor = "rgba(29,111,235,0.4)" }: Props) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.5rem", transition: "all 0.2s", cursor: "pointer" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        {children}
      </div>
    </Link>
  );
}
