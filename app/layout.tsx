import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The ESBRON Company — Venture Studio",
  description: "A multi-venture studio building digital products across business intelligence, education, and creative media — for Africa and the world.",
  keywords: ["venture studio", "digital products", "Nigeria", "Africa", "EdTech", "SaaS", "business intelligence"],
  openGraph: {
    title: "The ESBRON Company",
    description: "We build systems that scale people and ideas.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
