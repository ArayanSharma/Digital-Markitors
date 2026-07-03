import { Inbox } from "lucide-react";

export default function EmptyState({ icon: Icon = Inbox, message = "Nothing here yet." }) {
  return (
    <div
      style={{
        padding: "48px 20px",
        textAlign: "center",
        color: "var(--color-text-muted)",
      }}
    >
      <Icon size={28} style={{ margin: "0 auto 10px", opacity: 0.6 }} />
      <p style={{ margin: 0, fontSize: 14 }}>{message}</p>
    </div>
  );
}
