import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Bell, ShieldCheck, Zap, ArrowRight, PlayCircle } from "lucide-react";
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

  const tones = ["red", "slate", "red"];

  const highlightTitle = (text) => {
    if (!text) return "";
    const keywords = ["Digicore", "Results", "Visibility", "Grow", "Marketing", "SEO", "Agency", "Traffic", "Conversions", "Search", "Optimization", "B2B", "Digital", "Growth", "Losing", "losing", "Losing at Search", "Android", "iOS", "Apps", "Mobile", "Studio", "Engineering", "Development", "DigiCore"];
    const words = text.split(" ");
    return words.map((word, idx) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      if (keywords.includes(cleanWord)) {
        return <span key={idx} className="text-[#e31e24]">{word} </span>;
      }
      return word + " ";
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f4f5] border-b border-[#e5e7eb] font-body text-[#4b5563]">
      {/* grid + glow backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(rgba(227,30,36,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className="mp-blob absolute w-[420px] h-[420px] rounded-full bg-[#e31e24]/6 blur-[130px]" style={{ top: "-120px", left: "-100px" }} />
      <div className="mp-blob-alt absolute w-[380px] h-[380px] rounded-full bg-[#f5a623]/6 blur-[120px]" style={{ bottom: "-100px", right: "-60px" }} />
      {hero.backgroundImage && (
        <img src={resolveImage(hero.backgroundImage)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      )}

      <div ref={sceneRef} className="relative z-10 container-custom pt-28 pb-16 md:pt-36 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <span className="mp-hero-fade inline-flex items-center gap-2 text-[#e31e24] text-xs md:text-sm font-semibold tracking-[0.15em] mb-6 px-4 py-1.5 rounded-full bg-[#e31e24]/8 border border-[#e31e24]/15 backdrop-blur-md">
            {hero.badge}
          </span>
          <h1 className="mp-hero-fade text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold leading-[1.1] text-[#2b2b2e] font-heading max-w-xl">
            {highlightTitle(hero.title)}
          </h1>
          <p className="mp-hero-fade text-[#4b5563] max-w-lg mt-6 text-base md:text-lg leading-relaxed">{hero.description}</p>

          <div className="mp-hero-fade flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
            <RippleButton
              as="a"
              href={hero.primaryBtn?.link || "/contact"}
              className="relative overflow-hidden inline-flex items-center gap-2 text-white font-bold px-[34px] py-[15px] rounded-lg bg-[#e31e24] shadow-[0_6px_20px_rgba(227,30,36,0.35)] transition-all duration-300 hover:bg-[#c4151a] hover:scale-[1.03] hover:shadow-[0_12px_25px_rgba(227,30,36,0.45)] cursor-pointer"
            >
              {hero.primaryBtn?.text || "Start Your App Project"} <ArrowRight size={18} />
            </RippleButton>
            <RippleButton
              as="a"
              href={hero.secondaryBtn?.link || "/contact"}
              className="relative overflow-hidden inline-flex items-center gap-2 text-[#1c1c1e] font-bold px-[34px] py-[15px] rounded-lg bg-transparent border border-[#1c1c1e] transition-all duration-300 hover:bg-[#1c1c1e] hover:text-white hover:scale-[1.03] cursor-pointer"
            >
              <PlayCircle size={18} /> {hero.secondaryBtn?.text || "View Mobile Portfolio"}
            </RippleButton>
          </div>

        </div>

        {/* Right: device scene */}
        <div className="relative h-[440px] md:h-[500px] flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-[#e31e24]/10 blur-[90px]" />

          <div className="mp-hero-chip absolute top-2 right-0 md:right-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30 mp-float">
            <Bell size={16} className="text-[#e31e24]" />
            <span className="text-xs font-semibold text-slate-700">New order received!</span>
          </div>
          <div className="mp-hero-chip absolute bottom-16 left-0 md:left-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30 mp-float-delayed">
            <ShieldCheck size={16} className="text-green-600" />
            <span className="text-xs font-semibold text-slate-700">Secure Login</span>
          </div>
          <div className="mp-hero-chip absolute bottom-2 right-4 md:right-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30 mp-float">
            <Zap size={16} className="text-[#e31e24]" />
            <span className="text-xs font-semibold text-slate-700">99.9% Uptime</span>
          </div>

          <div className="mp-hero-orbit-a absolute top-6 left-2 md:left-8 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center z-30">
            <FaAndroid size={22} color="#3DDC84" />
          </div>
          <div className="mp-hero-orbit-b absolute bottom-24 right-0 md:right-2 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center z-30">
            <FaApple size={22} color="#0f172a" />
          </div>

          <div ref={phoneARef} className="mp-hero-phone-a absolute left-2 md:left-8 bottom-0 w-[185px] h-[370px] z-10 mp-phone-wobble">
            <PhoneMockup os="android" image={hero.heroImage2} className="w-full h-full">
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
      <div className="relative border-t border-[#e5e7eb] py-6 overflow-hidden bg-white">
        <div className="mp-marquee flex items-center gap-12 w-max">
          {[...MARQUEE_ICONS, ...MARQUEE_ICONS].map(({ Icon, color, name }, i) => (
            <div key={`${name}-${i}`} className="flex items-center gap-2.5 text-[#4b5563] shrink-0">
              <Icon size={18} color={color} />
              <span className="text-xs font-semibold tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
