import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { resolveImage } from "../../hooks/usePageContent";
import { TECH_META, TECH_CATEGORIES, DEFAULT_TECH_ICON } from "./iconMaps";
import { SectionKicker } from "./shared";

export default function TechStackSection({ technologies }) {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return technologies;
    return technologies.filter((t) => (TECH_META[t.name]?.category || "Tools") === category);
  }, [technologies, category]);

  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-custom">
        <SectionKicker
          eyebrow="Our Tech Stack"
          title="Technologies We Use"
          description="A modern, production-proven toolkit spanning mobile, backend, data, cloud, and tooling."
        />

        <div className="mp-reveal flex justify-center mb-12">
          <Tabs value={category} onValueChange={setCategory}>
            <TabsList className="flex-wrap h-auto gap-1 bg-slate-100 p-1.5 rounded-2xl">
              {["All", ...TECH_CATEGORIES].map((c) => (
                <TabsTrigger key={c} value={c} className="px-4 py-2 rounded-xl text-sm font-semibold">
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mp-stagger-group grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((tech) => {
            const meta = TECH_META[tech.name] || DEFAULT_TECH_ICON;
            const Icon = meta.Icon;
            const color = meta.color;
            return (
              <div
                key={tech.id || tech.name}
                className="group relative rounded-2xl p-6 bg-white border border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_40px_rgba(227,30,36,0.12)] hover:-translate-y-1.5 hover:border-[#e31e24]/30 transition-all duration-300"
              >
                <div
                  className="w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18` }}
                >
                  {tech.logo ? (
                    <img src={resolveImage(tech.logo)} alt={tech.name} className="w-7 h-7 object-contain" />
                  ) : (
                    <Icon size={26} color={color} />
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{tech.name}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
