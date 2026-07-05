import { ArrowRight, PhoneCall } from "lucide-react";
import { resolveImage } from "../../hooks/usePageContent";
import { PhoneMockup, AppScreenSkeleton, RippleButton } from "./shared";

export default function CTASection({ cta }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e31e24]/10 to-transparent bg-[#1c1c1e] py-24 md:py-28 border-t border-[#2b2b2e]">
      <div className="mp-blob absolute w-[360px] h-[360px] rounded-full bg-white/10 blur-[110px]" style={{ top: "-100px", left: "-60px" }} />
      <div className="mp-blob-alt absolute w-[320px] h-[320px] rounded-full bg-white/10 blur-[110px]" style={{ bottom: "-100px", right: "-40px" }} />
      <div className="mp-morph absolute w-[260px] h-[260px] bg-white/5 top-1/2 -translate-y-1/2 right-[8%] hidden lg:block" />

      {cta.backgroundImage && (
        <img src={resolveImage(cta.backgroundImage)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      )}

      <PhoneMockup os="ios" className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-[160px] h-[320px] opacity-30 rotate-[-8deg]">
        <AppScreenSkeleton tone="red" />
      </PhoneMockup>
      <PhoneMockup os="android" className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-[150px] h-[300px] opacity-30 rotate-[8deg]">
        <AppScreenSkeleton tone="slate" />
      </PhoneMockup>

      <div className="mp-reveal relative z-10 container-custom text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-2 text-white/90 text-xs md:text-sm font-semibold tracking-[0.15em] mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
          Let's Build Something Great
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight font-heading">{cta.heading}</h2>
        <p className="text-white/85 max-w-xl mt-5 leading-relaxed">{cta.description}</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <RippleButton
            as="a"
            href={cta.primaryBtn?.link || "/contact"}
            className="relative overflow-hidden inline-flex items-center gap-2 text-white font-bold px-[34px] py-[15px] rounded-lg bg-[#e31e24] shadow-[0_6px_20px_rgba(227,30,36,0.35)] transition-all duration-300 hover:bg-[#c4151a] hover:scale-[1.03] hover:shadow-[0_12px_25px_rgba(227,30,36,0.45)] cursor-pointer"
          >
            {cta.primaryBtn?.text || "Start Your Mobile Project"} <ArrowRight size={18} />
          </RippleButton>
          <RippleButton
            as="a"
            href={cta.secondaryBtn?.link || "/contact"}
            className="relative overflow-hidden inline-flex items-center gap-2 bg-transparent border border-white text-white font-bold px-[34px] py-[15px] rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] cursor-pointer"
          >
            <PhoneCall size={17} /> {cta.secondaryBtn?.text || "Get Free Consultation"}
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
