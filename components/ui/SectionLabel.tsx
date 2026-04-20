export default function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "0.75rem",
      fontSize: "0.75rem", fontWeight: 500,
      letterSpacing: "0.15em", textTransform: "uppercase",
      color: "var(--teal)",
      marginBottom: "1rem",
    }}>
      <span style={{ display: "block", width: 24, height: 1, background: "var(--teal)" }} />
      {text}
    </div>
  );
}
