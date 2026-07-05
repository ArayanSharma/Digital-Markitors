import { Users, Palette, ShieldCheck, Gauge, Layers, Repeat2, Headphones, Cpu } from "lucide-react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { SectionKicker } from "./shared";

const REASONS = [
  { Icon: Users, title: "Experienced Mobile Developers", desc: "A senior team that has shipped apps across every major industry." },
  { Icon: Palette, title: "Pixel Perfect UI", desc: "Interfaces crafted to match design specs down to the last pixel." },
  { Icon: FaAppStoreIos, title: "App Store Ready", desc: "Smooth, compliant submissions to Apple's App Store." },
  { Icon: FaGooglePlay, title: "Google Play Ready", desc: "End-to-end Google Play listing, release & rollout management." },
  { Icon: ShieldCheck, title: "Secure Architecture", desc: "Best-practice encryption, auth, and data handling by default." },
  { Icon: Gauge, title: "Fast Performance", desc: "Optimized builds engineered for speed on every device." },
  { Icon: Layers, title: "Scalable Codebase", desc: "Clean, modular architecture built to grow with your business." },
  { Icon: Repeat2, title: "Agile Development", desc: "Transparent sprints and milestones that keep launches on time." },
  { Icon: Headphones, title: "Ongoing Support", desc: "Continuous monitoring, patches, and support after release." },
  { Icon: Cpu, title: "Latest Technologies", desc: "We build on current, battle-tested frameworks — never legacy stacks." },
];

export default function WhyChooseSection() {
  return (
    <section className="container-custom py-24 md:py-28">
      <SectionKicker
        eyebrow="Why Us"
        title="Why Choose DigiCore"
        description="Ten reasons founders and enterprises trust us with their most important mobile products."
      />

      <div className="mp-stagger-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {REASONS.map((r, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-6 bg-white border border-slate-200 hover:border-[#e31e24]/30 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(227,30,36,0.12)] transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-[#e31e24]/8 text-[#e31e24] flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:bg-[#e31e24] group-hover:text-white">
              <r.Icon size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{r.title}</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{r.desc}</p>
            <span className="block h-0.5 w-0 group-hover:w-10 bg-[#e31e24] rounded-full mt-4 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
