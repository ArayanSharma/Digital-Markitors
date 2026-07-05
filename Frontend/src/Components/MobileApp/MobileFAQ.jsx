import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionKicker } from "./shared";

export default function MobileFAQ({ faqs }) {
  const [open, setOpen] = useState(0);

  if (faqs.length === 0) return null;

  return (
    <section className="container-custom py-24 md:py-28">
      <SectionKicker eyebrow="FAQ" title="Frequently Asked Questions" description="Straight answers to the questions we hear most often about mobile app development." />

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.id || i}
              className={`mp-reveal rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                isOpen ? "border-blue-300 shadow-[0_12px_32px_rgba(59,130,246,0.12)]" : "border-slate-200 hover:border-blue-200"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer bg-transparent border-0"
              >
                <span className="font-semibold text-slate-900">{item.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
