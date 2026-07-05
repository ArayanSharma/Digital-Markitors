import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionKicker } from "./shared";

gsap.registerPlugin(ScrollTrigger);

const ROW_HEIGHT = 208;
const AMP = 16;

function buildCurvePath(count) {
  if (count < 2) return "";
  const points = Array.from({ length: count }, (_, i) => ({ x: 50, y: i * ROW_HEIGHT + ROW_HEIGHT / 2 }));
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const cx = 50 + AMP * (i % 2 === 0 ? 1 : -1);
    const cy = (a.y + b.y) / 2;
    d += ` C ${cx} ${cy}, ${cx} ${cy}, ${b.x} ${b.y}`;
  }
  return d;
}

export default function DevelopmentProcess({ steps }) {
  const pathRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    const st = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top 75%",
        end: "bottom 60%",
        scrub: 0.6,
      },
    });
    return () => st.scrollTrigger?.kill();
  }, [steps.length]);

  const totalHeight = steps.length * ROW_HEIGHT;
  const d = buildCurvePath(steps.length);

  return (
    <section className="bg-slate-50 py-24 md:py-28 overflow-hidden">
      <div className="container-custom">
        <SectionKicker
          eyebrow="How We Work"
          title="Mobile App Development Process"
          description="A proven, transparent path from your first idea to a five-star rated app in production."
        />

        <div ref={wrapRef} className="relative max-w-3xl mx-auto" style={{ minHeight: totalHeight }}>
          <svg
            className="absolute inset-0 w-full h-full hidden md:block"
            viewBox={`0 0 100 ${totalHeight}`}
            preserveAspectRatio="none"
            fill="none"
          >
            <path d={d} stroke="rgba(227,30,36,0.18)" strokeWidth="1.4" />
            <path ref={pathRef} d={d} stroke="#e31e24" strokeWidth="1.4" strokeLinecap="round" />
          </svg>

          <div className="absolute left-4 md:hidden top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-[#e31e24] to-red-400" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative grid grid-cols-2 gap-x-14 items-center pl-12 md:pl-0" style={{ height: ROW_HEIGHT }}>
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mp-timeline-dot">
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-[#e31e24] text-[#e31e24] flex items-center justify-center font-extrabold text-sm shadow-[0_6px_18px_rgba(227,30,36,0.2)]">
                    {i + 1}
                  </div>
                </div>

                <div
                  className={`mp-timeline-step col-span-2 md:col-span-1 text-left ${
                    isLeft ? "md:col-start-1 md:text-right md:pr-8" : "md:col-start-2 md:pl-8"
                  }`}
                >
                  <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{step.desc}</p>
                </div>
                <div className={`hidden md:block ${isLeft ? "col-start-2" : "col-start-1"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
