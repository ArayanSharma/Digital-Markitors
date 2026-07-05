import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Bell, ShieldCheck, Zap, ArrowRight, PlayCircle, Star } from "lucide-react";
import { FaAndroid, FaApple } from "react-icons/fa";
import {
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { resolveImage } from "../../hooks/usePageContent";
import { PhoneMockup, AppScreenSkeleton, RippleButton } from "./shared";

const MARQUEE_ICONS = [
  { Icon: SiKotlin, color: "#7F52FF", name: "Kotlin" },
  { Icon: SiSwift, color: "#F05138", name: "Swift" },
  { Icon: SiFlutter, color: "#02569B", name: "Flutter" },
  { Icon: SiReact, color: "#61DAFB", name: "React Native" },
  { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { Icon: FaAws, color: "#FF9900", name: "AWS" },
  { Icon: SiNodedotjs, color: "#3C873A", name: "Node.js" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
];

export default function MobileHero({ hero }) {
  const sceneRef = useRef(null);
  const phoneARef = useRef(null);
  const phoneBRef = useRef(null);
  const [screenIndex, setScreenIndex] = useState(0);

  /* Mouse-move device parallax — two phone layers drift at different depths */
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !phoneARef.current || !phoneBRef.current) return;

    const moveA = gsap.quickTo(phoneARef.current, "x", { duration: 0.7, ease: "power3.out" });
    const moveAY = gsap.quickTo(phoneARef.current, "y", { duration: 0.7, ease: "power3.out" });
    const moveB = gsap.quickTo(phoneBRef.current, "x", { duration: 0.9, ease: "power3.out" });
    const moveBY = gsap.quickTo(phoneBRef.current, "y", { duration: 0.9, ease: "power3.out" });

    const onMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      moveA(px * 22);
      moveAY(py * 22);
      moveB(px * -14);
      moveBY(py * -14);
    };
    scene.addEventListener("mousemove", onMove);
    return () => scene.removeEventListener("mousemove", onMove);
  }, []);

  /* App screen slider — cycles the iOS mock's screen content */
  useEffect(() => {
    if (hero?.heroImage) return;
    const id = setInterval(() => setScreenIndex((i) => (i + 1) % 3), 2800);
    return () => clearInterval(id);
  }, [hero?.heroImage]);

  const tones = ["blue", "slate", "blue"];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#071a33] to-[#0b2a4d]">
      {/* grid + glow backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(rgba(147,197,253,0.9) 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className="mp-blob absolute w-[420px] h-[420px] rounded-full bg-blue-500/25 blur-[130px]" style={{ top: "-120px", left: "-100px" }} />
      <div className="mp-blob-alt absolute w-[380px] h-[380px] rounded-full bg-sky-400/20 blur-[120px]" style={{ bottom: "-100px", right: "-60px" }} />
      {hero.backgroundImage && (
        <img src={resolveImage(hero.backgroundImage)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      )}

      <div ref={sceneRef} className="relative z-10 container-custom pt-28 pb-16 md:pt-36 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <span className="mp-hero-fade inline-flex items-center gap-2 text-blue-300 text-xs md:text-sm font-semibold tracking-[0.15em] mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
            {hero.badge}
          </span>
          <h1 className="mp-hero-fade text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold leading-[1.1] text-white max-w-xl">
            {hero.title}
          </h1>
          <p className="mp-hero-fade text-slate-300 max-w-lg mt-6 text-base md:text-lg leading-relaxed">{hero.description}</p>

          <div className="mp-hero-fade flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
            <RippleButton
              as="a"
              href={hero.primaryBtn?.link || "/contact"}
              className="relative overflow-hidden inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-400 bg-[length:200%_auto] mp-gradient-shift hover:shadow-[0_16px_38px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              {hero.primaryBtn?.text || "Start Your App Project"} <ArrowRight size={18} />
            </RippleButton>
            <RippleButton
              as="a"
              href={hero.secondaryBtn?.link || "/contact"}
              className="relative overflow-hidden inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:-translate-y-1 hover:bg-white/15 transition-all duration-300"
            >
              <PlayCircle size={18} /> {hero.secondaryBtn?.text || "View Mobile Portfolio"}
            </RippleButton>
          </div>

          <div className="mp-hero-fade flex items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              {["bg-blue-500", "bg-sky-500", "bg-indigo-500"].map((c, i) => (
                <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-[#071a33] flex items-center justify-center text-[10px] font-bold text-white`}>
                  {["JD", "AK", "ML"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Trusted by 80+ founders worldwide</p>
            </div>
          </div>
        </div>

        {/* Right: device scene */}
        <div className="relative h-[440px] md:h-[500px] flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-blue-500/30 blur-[90px]" />

          <div className="mp-hero-chip absolute top-2 right-0 md:right-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30 mp-float">
            <Bell size={16} className="text-blue-500" />
            <span className="text-xs font-semibold text-slate-700">New order received!</span>
          </div>
          <div className="mp-hero-chip absolute bottom-16 left-0 md:left-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30 mp-float-delayed">
            <ShieldCheck size={16} className="text-sky-500" />
            <span className="text-xs font-semibold text-slate-700">Secure Login</span>
          </div>
          <div className="mp-hero-chip absolute bottom-2 right-4 md:right-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30 mp-float">
            <Zap size={16} className="text-blue-500" />
            <span className="text-xs font-semibold text-slate-700">99.9% Uptime</span>
          </div>

          <div className="mp-hero-orbit-a absolute top-6 left-2 md:left-8 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center z-30">
            <FaAndroid size={22} color="#3DDC84" />
          </div>
          <div className="mp-hero-orbit-b absolute bottom-24 right-0 md:right-2 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center z-30">
            <FaApple size={22} color="#0f172a" />
          </div>

          <div ref={phoneARef} className="mp-hero-phone-a absolute left-2 md:left-8 bottom-0 w-[185px] h-[370px] z-10 mp-phone-wobble">
            <PhoneMockup os="android" className="w-full h-full">
              <AppScreenSkeleton tone="slate" />
            </PhoneMockup>
          </div>
          <div ref={phoneBRef} className="mp-hero-phone-b absolute right-2 md:right-6 top-0 w-[215px] h-[430px] z-20 mp-phone-wobble-alt">
            <PhoneMockup os="ios" image={hero.heroImage} className="w-full h-full">
              <div className="relative w-full h-full">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: screenIndex === i ? 1 : 0 }}
                  >
                    <AppScreenSkeleton tone={tones[i]} />
                  </div>
                ))}
              </div>
            </PhoneMockup>
          </div>
        </div>
      </div>

      {/* infinite marquee — trusted stack ticker */}
      <div className="relative border-t border-white/10 py-6 overflow-hidden">
        <div className="mp-marquee flex items-center gap-12 w-max">
          {[...MARQUEE_ICONS, ...MARQUEE_ICONS].map(({ Icon, color, name }, i) => (
            <div key={`${name}-${i}`} className="flex items-center gap-2.5 text-slate-400 shrink-0">
              <Icon size={18} color={color} />
              <span className="text-xs font-semibold tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
