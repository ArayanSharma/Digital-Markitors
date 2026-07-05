import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { resolveImage } from "../../hooks/usePageContent";
import { SectionKicker } from "./shared";

export default function MobileTestimonials({ testimonials }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2) return;
    const id = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="relative py-24 md:py-28 bg-gradient-to-br from-[#e31e24]/3 via-white to-[#f4f4f5] overflow-hidden">
      <div className="container-custom">
        <SectionKicker eyebrow="Client Testimonials" title="What Our Clients Say" />

        <div className="mp-reveal relative max-w-2xl mx-auto">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-[-4.5rem] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-500 hover:text-[#e31e24] hover:border-[#e31e24]/30 transition-colors duration-200 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-[-4.5rem] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-500 hover:text-[#e31e24] hover:border-[#e31e24]/30 transition-colors duration-200 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>

          <div key={t.id || active} className="mp-testimonial-fade rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-[0_20px_50px_rgba(227,30,36,0.06)] p-10 text-center">
            <Quote size={28} className="text-[#e31e24]/40 mx-auto mb-4" />
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">"{t.review}"</p>
            <div className="flex items-center justify-center gap-1 mt-5">
              {Array.from({ length: t.rating || 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-[#e31e24]/8 flex items-center justify-center text-[#e31e24] font-bold">
                {t.avatar ? <img src={resolveImage(t.avatar)} alt={t.name} className="w-full h-full object-cover" /> : t.name?.[0]}
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.company}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
            <button type="button" onClick={prev} className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 cursor-pointer">
              <ChevronLeft size={16} />
            </button>
            <button type="button" onClick={next} className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 cursor-pointer">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === active ? "w-6 bg-[#e31e24]" : "w-2 bg-slate-300"}`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
