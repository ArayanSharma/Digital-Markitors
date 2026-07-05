import { ExternalLink } from "lucide-react";
import { FaAndroid, FaApple, FaGithub } from "react-icons/fa";
import { PhoneMockup, AppScreenSkeleton, SectionKicker } from "./shared";

export default function ProjectsShowcase({ projects }) {
  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="container-custom">
        <SectionKicker
          eyebrow="Portfolio"
          title="Featured Mobile Projects"
          description="A sample of Android and iOS products we've designed, engineered, and shipped to real users."
        />

        <div className="mp-stagger-group grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.id || p.name}
              className="group relative rounded-3xl bg-white border border-slate-200 p-6 md:p-7 flex gap-6 items-center overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(227,30,36,0.12)] hover:border-[#e31e24]/30 transition-all duration-400"
            >
              {p.featured && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wide text-white bg-[#e31e24] px-2.5 py-1 rounded-full z-10">
                  Featured
                </span>
              )}
              <PhoneMockup os="ios" image={p.coverImage} className="w-[110px] h-[220px] shrink-0 group-hover:-translate-y-1.5 transition-transform duration-500">
                {!p.coverImage && <AppScreenSkeleton tone={p.featured ? "red" : "slate"} />}
              </PhoneMockup>

              <div className="min-w-0">
                <span className="text-xs font-bold text-[#e31e24] uppercase tracking-wide">{p.category}</span>
                <h3 className="font-bold text-slate-900 text-lg mt-1">{p.name}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-3">{p.description}</p>

                <div className="flex items-center gap-2 mt-4">
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                    <FaAndroid size={13} color="#3DDC84" />
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                    <FaApple size={13} color="#0f172a" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Android &amp; iOS</span>
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <a
                    href={p.playStore || p.appStore || "#"}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-[#e31e24] rounded-xl px-4 py-2.5 transition-colors duration-200"
                  >
                    <ExternalLink size={13} /> View Case Study
                  </a>
                  {p.github && (
                    <a
                      href={p.github}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-[#e31e24] rounded-xl px-4 py-2.5 transition-colors duration-200"
                    >
                      <FaGithub size={13} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
