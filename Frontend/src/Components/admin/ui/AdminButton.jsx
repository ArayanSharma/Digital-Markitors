import { Loader2 } from "lucide-react";

export default function AdminButton({
  variant = "primary",
  loading = false,
  icon: Icon,
  children,
  className = "",
  disabled,
  ...rest
}) {
  return (
    <button
      className={`adm-btn adm-btn-${variant} ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
