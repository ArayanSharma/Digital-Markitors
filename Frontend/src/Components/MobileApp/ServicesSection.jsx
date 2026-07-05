import { ArrowUpRight } from "lucide-react";
import { SERVICE_ICON_MAP } from "./iconMaps";
import { SectionKicker } from "./shared";
import { resolveImage } from "../../hooks/usePageContent";

export default function ServicesSection({
  services,
  heading = "Everything Your Mobile Product Needs",
  subheading = "From first sketch to store listing — a full-cycle mobile engineering team under one roof.",
}) {
  return (
    <section className="container-custom py-24 md:py-28">
      <SectionKicker
        eyebrow="App Development Services"
        title={heading}
        description={subheading}
      />

      <div className="mp-stagger-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(0,1fr)]">
        {services.map((service) => {
          const meta = SERVICE_ICON_MAP[service.icon] || SERVICE_ICON_MAP.CrossPlatform;
          const Icon = meta.Icon;
          return (
            <div
              key={service.id}
              className={`group relative rounded-3xl bg-white border border-slate-200 p-6 flex flex-col overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:border-[#e31e24]/30 hover:shadow-[0_20px_46px_rgba(227,30,36,0.12)] ${
                service.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                style={{ background: meta.color }}
              />
              {service.featured && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wide text-[#e31e24] bg-[#e31e24]/8 px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}
              <div
                className="relative w-[3.25rem] h-[3.25rem] rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 overflow-hidden"
                style={{ background: service.iconImage ? undefined : `${meta.color}18` }}
              >
                {service.iconImage ? (
                  <img src={resolveImage(service.iconImage)} alt="" className="w-full h-full object-cover" />
                ) : (
                  <Icon size={24} color={meta.color} />
                )}
              </div>
              <h3 className="relative font-bold text-slate-900 text-lg">{service.title}</h3>
              <p className="relative text-sm text-slate-500 mt-2 leading-relaxed flex-1">{service.description}</p>
              <a
                href="/contact"
                className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-[#e31e24] mt-5 group-hover:gap-2.5 transition-all duration-300"
              >
                Learn More <ArrowUpRight size={14} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
