import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StatTile({ value, suffix = "", label, decimals = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(decimals ? (0).toFixed(decimals) : "0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 1.7,
          ease: "power2.out",
          onUpdate: () => setDisplay(decimals ? obj.val.toFixed(decimals) : String(Math.round(obj.val))),
        });
      },
    });
    return () => trigger.kill();
  }, [value, decimals]);

  return (
    <div ref={ref} className="relative rounded-3xl bg-white border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 px-5 py-8 text-center">
      <p className="text-3xl md:text-4xl font-extrabold text-[#e31e24]">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-xs md:text-sm font-medium text-[#4b5563]">{label}</p>
    </div>
  );
}

export default function StatsSection({ statistics }) {
  const tiles = [
    { value: statistics.apps.value, suffix: statistics.apps.suffix, label: statistics.apps.label },
    { value: statistics.downloads?.value ?? 250, suffix: statistics.downloads?.suffix ?? "K+", label: statistics.downloads?.label ?? "Downloads Generated" },
    { value: statistics.countries.value, suffix: statistics.countries.suffix, label: statistics.countries.label },
    { value: statistics.clients.value, suffix: statistics.clients.suffix, label: statistics.clients.label },
    { value: 4.9, suffix: "★", label: "Average App Rating", decimals: 1 },
    { value: statistics.satisfaction.value, suffix: statistics.satisfaction.suffix, label: statistics.satisfaction.label },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-[#f4f4f5] border-t border-b border-[#e5e7eb] overflow-hidden">
      <div className="mp-blob absolute w-[320px] h-[320px] rounded-full bg-[#e31e24]/6 blur-[110px]" style={{ top: "-70px", left: "8%" }} />
      <div className="mp-blob-alt absolute w-[320px] h-[320px] rounded-full bg-[#f5a623]/6 blur-[110px]" style={{ bottom: "-90px", right: "8%" }} />
      <div className="relative container-custom">
        <div className="mp-reveal text-center max-w-xl mx-auto mb-12">
          <span className="text-[#e31e24] font-bold tracking-[0.2em] text-[11px] uppercase">By The Numbers</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b2b2e] mt-3 font-heading">Results That Speak For Themselves</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
          {tiles.map((t, i) => (
            <StatTile key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
