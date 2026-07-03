export default function AdminCard({ children, hover = false, className = "", style, ...rest }) {
  return (
    <div
      className={`adm-card ${hover ? "adm-card-hover" : ""} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
