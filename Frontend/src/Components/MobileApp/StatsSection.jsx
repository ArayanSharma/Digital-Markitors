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
    <div ref={ref} className="relative rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md px-5 py-8 text-center">
      <p className="text-3xl md:text-4xl font-extrabold text-white">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-xs md:text-sm font-medium text-slate-300">{label}</p>
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
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#020617] via-[#071a33] to-[#0b2a4d] overflow-hidden">
      <div className="mp-blob absolute w-[320px] h-[320px] rounded-full bg-blue-500/20 blur-[110px]" style={{ top: "-70px", left: "8%" }} />
      <div className="mp-blob-alt absolute w-[320px] h-[320px] rounded-full bg-sky-400/20 blur-[110px]" style={{ bottom: "-90px", right: "8%" }} />
      <div className="relative container-custom">
        <div className="mp-reveal text-center max-w-xl mx-auto mb-12">
          <span className="text-blue-300 font-bold tracking-[0.2em] text-[11px] uppercase">By The Numbers</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3">Results That Speak For Themselves</h2>
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
