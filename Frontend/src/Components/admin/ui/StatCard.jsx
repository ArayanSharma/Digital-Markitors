import { useEffect, useRef, useState } from "react";
import AdminCard from "./AdminCard";

function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    const end = Number(target) || 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [target, duration]);

  return value;
}

export default function StatCard({ icon: Icon, label, value, accent = "brand-primary", delayMs = 0 }) {
  const count = useCountUp(value);

  return (
    <AdminCard
      hover
      className="adm-fade-in"
      style={{ animationDelay: `${delayMs}ms`, padding: 28, display: "flex", alignItems: "center", gap: 18 }}
    >
      <div
        className="adm-pulse-glow"
        style={{
          width: 60,
          height: 60,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          flexShrink: 0,
          background: `linear-gradient(135deg, var(--color-${accent}), var(--color-brand-accent))`,
        }}
      >
        {Icon && <Icon size={26} />}
      </div>
      <div>
        <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: 0 }}>{label}</p>
        <h2 style={{ fontSize: 30, fontWeight: 700, color: "var(--color-text-primary)", margin: "4px 0 0" }}>
          {count.toLocaleString()}
        </h2>
      </div>
    </AdminCard>
  );
}
