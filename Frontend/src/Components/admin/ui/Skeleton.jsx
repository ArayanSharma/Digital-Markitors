export default function Skeleton({ variant = "row", count = 3 }) {
  const rows = Array.from({ length: count });

  if (variant === "card") {
    return (
      <div className="adm-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {rows.map((_, i) => (
          <div key={i} className="adm-skeleton" style={{ height: 120, borderRadius: 16 }} />
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {rows.map((_, i) => (
        <div key={i} className="adm-skeleton" style={{ height: 44, borderRadius: 10 }} />
      ))}
    </div>
  );
}
