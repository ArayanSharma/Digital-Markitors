import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children, footer }) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf;
    let timeout;
    if (open) {
      setMounted(true);
      raf = requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      timeout = setTimeout(() => setMounted(false), 300);
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [open]);

  useEffect(() => {
    if (!mounted) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mounted, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`adm-modal-overlay ${visible ? "adm-in" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className="adm-modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="adm-modal-title"
      >
        <div className="adm-modal-header">
          <h2 id="adm-modal-title">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="adm-icon-btn"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="adm-modal-body">{children}</div>
        {footer && (
          <div className="adm-modal-header" style={{ borderBottom: "none", borderTop: "1px solid rgba(124,58,237,0.2)" }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
