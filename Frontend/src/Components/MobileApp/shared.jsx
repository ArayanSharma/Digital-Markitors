import { resolveImage } from "../../hooks/usePageContent";

/* ------------------------------------------------------------------ */
/* RippleButton — shared CTA button with a material-style ripple burst */
/* ------------------------------------------------------------------ */

export function RippleButton({ as = "a", className = "", children, onClick, ...rest }) {
  const Tag = as;

  const handleClick = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const span = document.createElement("span");
    span.className = "mp-ripple";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.appendChild(span);
    span.addEventListener("animationend", () => span.remove());
    onClick?.(e);
  };

  return (
    <Tag className={`mp-ripple-host ${className}`} onClick={handleClick} {...rest}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* PhoneMockup — glass-framed device shell used across hero/showcase   */
/* ------------------------------------------------------------------ */

export function PhoneMockup({ os = "ios", image, className = "", children }) {
  const isIOS = os === "ios";
  return (
    <div
      className={`relative bg-slate-950 overflow-hidden shadow-[0_40px_90px_rgba(2,6,23,0.55)] ${
        isIOS ? "rounded-[2.6rem] border-[6px] border-slate-900" : "rounded-[1.8rem] border-[5px] border-slate-800"
      } ${className}`}
    >
      {isIOS ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-2xl z-20" />
      ) : (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-700 rounded-full z-20" />
      )}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-white overflow-hidden">
        {image ? <img src={resolveImage(image)} alt="" className="w-full h-full object-cover" /> : children}
      </div>
    </div>
  );
}

export function AppScreenSkeleton({ tone = "blue" }) {
  const bar = tone === "blue"
    ? "from-blue-500 to-sky-400"
    : tone === "red"
      ? "from-[#e31e24] to-[#f5a623]"
      : "from-slate-700 to-slate-500";
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className={`h-16 rounded-2xl bg-gradient-to-r ${bar} opacity-90`} />
      <div className="h-3 w-2/3 rounded-full bg-slate-200" />
      <div className="h-3 w-1/2 rounded-full bg-slate-200" />
      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="h-20 rounded-xl bg-slate-100 border border-slate-200" />
        <div className="h-20 rounded-xl bg-slate-100 border border-slate-200" />
      </div>
      <div className="h-24 rounded-xl bg-slate-100 border border-slate-200 mt-1" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SectionKicker — the small eyebrow label + heading used every section */
/* ------------------------------------------------------------------ */

export function SectionKicker({ eyebrow, title, description, align = "center", className = "" }) {
  const alignCls = align === "left" ? "text-left mx-0" : "text-center mx-auto";
  return (
    <div className={`mp-reveal max-w-2xl mb-14 md:mb-16 ${alignCls} ${className}`}>
      <span className="inline-flex items-center gap-2 text-[#e31e24] font-bold tracking-[0.2em] text-[11px] uppercase">
        <span className="w-6 h-px bg-[#e31e24]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 mt-3 leading-tight">{title}</h2>
      {description && <p className="text-slate-500 mt-4 text-base md:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
