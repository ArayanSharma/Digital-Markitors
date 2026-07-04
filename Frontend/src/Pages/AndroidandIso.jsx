import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Repeat,
  PenTool,
  Wrench,
  Webhook,
  WifiOff,
  Bell,
  MapPin,
  CreditCard,
  MessageCircle,
  KeyRound,
  RefreshCw,
  BarChart3,
  Camera,
  Share2,
  Fingerprint,
  Map as MapIcon,
  Award,
  Layers,
  Palette,
  Rocket,
  ShieldCheck,
  Cpu,
  Headphones,
  Tablet,
  Star,
  Quote,
  ChevronDown,
  Check,
} from "lucide-react";
import {
  SiReact,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import { FaJava, FaAndroid, FaApple, FaAppStoreIos, FaGooglePlay, FaAws, FaGithub } from "react-icons/fa";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

gsap.registerPlugin(ScrollTrigger);

const PAGE_SLUG = "android-ios-development";

/* ------------------------------------------------------------------ */
/* Static lookup tables                                                */
/* ------------------------------------------------------------------ */

const SERVICE_ICON_MAP = {
  NativeAndroid: { Icon: FaAndroid, color: "#3DDC84" },
  NativeIOS: { Icon: FaApple, color: "#0f172a" },
  CrossPlatform: { Icon: Repeat, color: "#6366f1" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  ReactNative: { Icon: SiReact, color: "#61DAFB" },
  UIUX: { Icon: PenTool, color: "#ec4899" },
  Maintenance: { Icon: Wrench, color: "#f59e0b" },
  APIIntegration: { Icon: Webhook, color: "#14b8a6" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  AppStoreDeployment: { Icon: FaAppStoreIos, color: "#0f172a" },
  GooglePlayPublishing: { Icon: FaGooglePlay, color: "#00B2FF" },
};

const TECH_ICON_MAP = {
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  Java: { Icon: FaJava, color: "#E76F00" },
  Swift: { Icon: SiSwift, color: "#F05138" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  "Node.js": { Icon: SiNodedotjs, color: "#3C873A" },
  Express: { Icon: SiExpress, color: "#1F2937" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  "REST API": { Icon: Webhook, color: "#145a8c" },
  GraphQL: { Icon: SiGraphql, color: "#E10098" },
  AWS: { Icon: FaAws, color: "#FF9900" },
};

const FEATURE_LIST = [
  { icon: WifiOff, title: "Offline Support", desc: "Apps that keep working smoothly even without a live connection." },
  { icon: Bell, title: "Push Notifications", desc: "Real-time alerts that bring users back into the experience." },
  { icon: MapPin, title: "GPS", desc: "Precise location tracking for delivery, ride-hailing, and geo apps." },
  { icon: CreditCard, title: "Payment Gateway", desc: "Secure in-app payments with the providers your users trust." },
  { icon: MessageCircle, title: "Chat System", desc: "Real-time messaging built for speed, reliability, and scale." },
  { icon: KeyRound, title: "Authentication", desc: "Rock-solid login flows with tokens, sessions, and 2FA." },
  { icon: RefreshCw, title: "Cloud Sync", desc: "Seamless data sync across every device your users own." },
  { icon: BarChart3, title: "Analytics", desc: "In-depth behavioral analytics baked into every build." },
  { icon: Camera, title: "Camera Integration", desc: "Native camera access for scanning, capture, and AR features." },
  { icon: Share2, title: "Social Login", desc: "One-tap sign-in with Google, Apple, and social providers." },
  { icon: Fingerprint, title: "Biometric Login", desc: "Face ID and fingerprint unlock for effortless, secure access." },
  { icon: MapIcon, title: "Maps Integration", desc: "Interactive maps, routing, and geofencing out of the box." },
];

const WHY_CHOOSE_US = [
  { icon: Award, title: "5+ Years Experience", desc: "A team that has shipped mobile products across every major industry." },
  { icon: Layers, title: "Modern Architecture", desc: "Clean, modular codebases built to scale with your business." },
  { icon: Palette, title: "Pixel Perfect UI", desc: "Interfaces crafted to match design specs down to the last pixel." },
  { icon: Rocket, title: "Fast Delivery", desc: "Agile sprints and transparent milestones keep launches on time." },
  { icon: ShieldCheck, title: "Secure Apps", desc: "Best-practice encryption, auth, and data handling by default." },
  { icon: Cpu, title: "Scalable Backend", desc: "APIs and infrastructure engineered to grow with your user base." },
  { icon: Headphones, title: "Post Launch Support", desc: "Ongoing monitoring, patches, and feature support after release." },
  { icon: Tablet, title: "100% Responsive", desc: "Flawless experiences across phones, tablets, and foldables." },
];

const ANDROID_POINTS = ["Open ecosystem", "Distributed via Google Play", "Built with Java / Kotlin", "Highly customizable", "Runs on diverse device range"];
const IOS_POINTS = ["Apple ecosystem", "Distributed via App Store", "Built with Swift", "High, consistent performance", "Premium, polished UX"];

/* ------------------------------------------------------------------ */
/* Default content (used until admin-saved content loads)              */
/* ------------------------------------------------------------------ */

const defaultHero = {
  visible: true,
  badge: "📱 Android & iOS Development",
  title: "Build High-Performance Mobile Apps That Users Love",
  description:
    "We design and develop beautiful Android and iOS applications that are fast, secure, scalable, and built for exceptional user experiences.",
  primaryBtn: { text: "Start Your App", link: "/contact" },
  secondaryBtn: { text: "Book Consultation", link: "/contact" },
  heroImage: "",
  backgroundImage: "",
};

const defaultServices = [
  { id: "s1", icon: "NativeAndroid", title: "Native Android Development", description: "High-performance Kotlin & Java apps tailored for the Android platform.", featured: true, visible: true },
  { id: "s2", icon: "NativeIOS", title: "Native iOS Development", description: "Swift-built iOS apps that feel right at home on every Apple device.", featured: true, visible: true },
  { id: "s3", icon: "CrossPlatform", title: "Cross Platform Apps", description: "One codebase, two platforms — shipped faster without compromise.", featured: false, visible: true },
  { id: "s4", icon: "Flutter", title: "Flutter Development", description: "Beautiful, natively-compiled apps from a single Flutter codebase.", featured: true, visible: true },
  { id: "s5", icon: "ReactNative", title: "React Native Development", description: "JavaScript-powered apps with near-native speed and feel.", featured: false, visible: true },
  { id: "s6", icon: "UIUX", title: "UI/UX Design", description: "Research-driven interfaces that are as intuitive as they are beautiful.", featured: false, visible: true },
  { id: "s7", icon: "Maintenance", title: "App Maintenance", description: "Ongoing updates, monitoring, and support to keep apps running smoothly.", featured: false, visible: true },
  { id: "s8", icon: "APIIntegration", title: "API Integration", description: "Robust, well-documented integrations with any third-party service.", featured: false, visible: true },
  { id: "s9", icon: "Firebase", title: "Firebase Integration", description: "Auth, real-time data, crash reporting, and push — fully wired up.", featured: false, visible: true },
  { id: "s10", icon: "AppStoreDeployment", title: "App Store Deployment", description: "Smooth, compliant submissions to Apple's App Store.", featured: false, visible: true },
  { id: "s11", icon: "GooglePlayPublishing", title: "Google Play Publishing", description: "End-to-end Google Play listing, release, and rollout management.", featured: false, visible: true },
];

const defaultTechnologies = [
  { id: "t1", name: "React Native", description: "Cross-platform apps with native performance.", visible: true },
  { id: "t2", name: "Flutter", description: "Google's UI toolkit for natively compiled apps.", visible: true },
  { id: "t3", name: "Kotlin", description: "Modern, concise language for Android development.", visible: true },
  { id: "t4", name: "Java", description: "Battle-tested language for enterprise Android apps.", visible: true },
  { id: "t5", name: "Swift", description: "Apple's fast, safe language for iOS development.", visible: true },
  { id: "t6", name: "Firebase", description: "Backend-as-a-service for auth, data, and analytics.", visible: true },
  { id: "t7", name: "Node.js", description: "Scalable JavaScript runtime for app backends.", visible: true },
  { id: "t8", name: "Express", description: "Minimal, fast backend framework for REST APIs.", visible: true },
  { id: "t9", name: "MongoDB", description: "Flexible NoSQL database for mobile-scale data.", visible: true },
  { id: "t10", name: "REST API", description: "Well-documented, versioned APIs built for scale.", visible: true },
  { id: "t11", name: "GraphQL", description: "Efficient, flexible data fetching for mobile clients.", visible: true },
  { id: "t12", name: "AWS", description: "Cloud infrastructure that scales with your app.", visible: true },
];

const defaultProcess = [
  { title: "Requirement Analysis", desc: "Understanding your goals, users, and platform requirements in depth." },
  { title: "Wireframing", desc: "Mapping every screen and flow before a single line of UI is built." },
  { title: "UI Design", desc: "Crafting pixel-perfect, on-brand interfaces for Android and iOS." },
  { title: "Development", desc: "Building clean, scalable, well-tested native or cross-platform code." },
  { title: "Testing", desc: "Rigorous QA across real devices, OS versions, and screen sizes." },
  { title: "Deployment", desc: "Managing App Store and Google Play submissions end-to-end." },
  { title: "Maintenance", desc: "Ongoing monitoring, updates, and support after launch." },
];

const defaultProjects = [
  {
    id: "p1",
    name: "FitTrack Pro",
    category: "Health & Fitness",
    description: "A cross-platform fitness companion with live workout tracking and social challenges.",
    coverImage: "",
    playStore: "#",
    appStore: "#",
    github: "#",
    featured: true,
    visible: true,
  },
  {
    id: "p2",
    name: "UrbanEats",
    category: "Food Delivery",
    description: "A native food delivery app with live GPS tracking and in-app payments.",
    coverImage: "",
    playStore: "#",
    appStore: "#",
    github: "#",
    featured: true,
    visible: true,
  },
  {
    id: "p3",
    name: "WalletWise",
    category: "Finance",
    description: "A secure personal finance app with biometric login and real-time analytics.",
    coverImage: "",
    playStore: "#",
    appStore: "#",
    github: "#",
    featured: false,
    visible: true,
  },
];

const defaultStatistics = {
  apps: { value: 120, suffix: "+", label: "Apps Delivered" },
  clients: { value: 80, suffix: "+", label: "Happy Clients" },
  countries: { value: 15, suffix: "+", label: "Countries Served" },
  satisfaction: { value: 99, suffix: "%", label: "Client Satisfaction" },
};

const defaultTestimonials = [
  { id: "r1", name: "Ananya Kapoor", company: "Founder, FitTrack Pro", avatar: "", review: "They took our idea from a sketch to a five-star rated app on both stores in under four months.", rating: 5, visible: true },
  { id: "r2", name: "Marcus Lee", company: "CTO, UrbanEats", avatar: "", review: "Rock-solid engineering and constant communication. Our app hasn't had a single major crash since launch.", rating: 5, visible: true },
  { id: "r3", name: "Priya Nair", company: "Product Lead, WalletWise", avatar: "", review: "The attention to UX detail is unmatched — our retention numbers improved within the first month.", rating: 5, visible: true },
];

const defaultFaq = [
  { id: "f1", question: "How long does app development take?", answer: "Most apps take 10-16 weeks from kickoff to launch, depending on scope, platform count, and integrations required.", visible: true },
  { id: "f2", question: "Do you publish apps?", answer: "Yes — we manage the full App Store and Google Play submission process, including compliance and review handling.", visible: true },
  { id: "f3", question: "Can you redesign existing apps?", answer: "Absolutely. We regularly modernize legacy apps with new UI, architecture, and performance improvements.", visible: true },
  { id: "f4", question: "Do you build backend too?", answer: "Yes — our team builds and hosts complete backends, APIs, and databases alongside the mobile app itself.", visible: true },
  { id: "f5", question: "Do you provide maintenance?", answer: "Every project includes an optional ongoing maintenance plan covering updates, monitoring, and support.", visible: true },
];

const defaultCta = {
  heading: "Ready to Launch Your Mobile App?",
  description: "Let's turn your idea into a fast, secure, beautifully designed Android or iOS app.",
  primaryBtn: { text: "Start Project", link: "/contact" },
  secondaryBtn: { text: "Get Free Quote", link: "/contact" },
  backgroundImage: "",
};

const defaultSeo = {
  metaTitle: "Android & iOS App Development Services | Digital Markitors",
  metaDescription:
    "We design and build high-performance native and cross-platform Android and iOS apps with Flutter, React Native, Swift, and Kotlin.",
  keywords: "android app development, ios app development, flutter, react native, mobile app agency",
  ogImage: "",
};

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function PhoneFrame({ os = "ios", image, className = "", children }) {
  const isIOS = os === "ios";
  return (
    <div
      className={`relative bg-slate-950 overflow-hidden shadow-[0_35px_80px_rgba(2,6,23,0.5)] ${
        isIOS ? "rounded-[2.75rem] border-[6px] border-slate-900" : "rounded-[2rem] border-[5px] border-slate-800"
      } ${className}`}
    >
      {isIOS ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />
      ) : (
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-700 rounded-full z-20" />
      )}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-white overflow-hidden">
        {image ? (
          <img src={resolveImage(image)} alt="" className="w-full h-full object-cover" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

function AppScreenPlaceholder({ tone = "emerald" }) {
  const bar = tone === "emerald" ? "from-emerald-400 to-teal-500" : "from-indigo-400 to-sky-500";
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className={`h-16 rounded-2xl bg-gradient-to-r ${bar} opacity-90`} />
      <div className="h-3 w-2/3 rounded-full bg-slate-200" />
      <div className="h-3 w-1/2 rounded-full bg-slate-200" />
      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="h-20 rounded-xl bg-slate-100 border border-slate-200" />
        <div className="h-20 rounded-xl bg-slate-100 border border-slate-200" />
      </div>
      <div className="h-24 rounded-xl bg-slate-100 border border-slate-200 mt-1" />
    </div>
  );
}

function StatTile({ value, suffix, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => setCount(Math.round(obj.val)),
        });
      },
    });
    return () => trigger.kill();
  }, [value]);

  return (
    <div ref={ref} className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md px-6 py-8 text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-white">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
    </div>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="ai-reveal rounded-2xl border border-slate-200 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
      >
        <span className="font-semibold text-brand-primary">{item.question}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-text-muted leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function AndroidandIso() {
  const { content: c } = usePageContent(PAGE_SLUG);
  const rootRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const hero = { ...defaultHero, ...(c?.hero || {}) };
  const services = c?.services?.length ? c.services : defaultServices;
  const visibleServices = services.filter((s) => s.visible !== false);
  const technologies = c?.technologies?.length ? c.technologies : defaultTechnologies;
  const visibleTechnologies = technologies.filter((t) => t.visible !== false);
  const processSteps = c?.process?.length ? c.process : defaultProcess;
  const projects = c?.projects?.length ? c.projects : defaultProjects;
  const visibleProjects = projects.filter((p) => p.visible !== false);
  const statistics = {
    apps: { ...defaultStatistics.apps, ...(c?.statistics?.apps || {}) },
    clients: { ...defaultStatistics.clients, ...(c?.statistics?.clients || {}) },
    countries: { ...defaultStatistics.countries, ...(c?.statistics?.countries || {}) },
    satisfaction: { ...defaultStatistics.satisfaction, ...(c?.statistics?.satisfaction || {}) },
  };
  const testimonials = (c?.testimonials?.length ? c.testimonials : defaultTestimonials).filter((t) => t.visible !== false);
  const faqs = (c?.faq?.length ? c.faq : defaultFaq).filter((f) => f.visible !== false);
  const cta = { ...defaultCta, ...(c?.cta || {}) };
  const seo = { ...defaultSeo, ...(c?.seo || {}) };

  /* SEO tags */
  useEffect(() => {
    if (seo.metaTitle) document.title = seo.metaTitle;
    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", seo.metaDescription);
    setMeta("keywords", seo.keywords);
    setMeta("og:image", seo.ogImage ? resolveImage(seo.ogImage) : "", "property");
  }, [seo.metaTitle, seo.metaDescription, seo.keywords, seo.ogImage]);

  /* Auto-sliding testimonials */
  useEffect(() => {
    if (testimonials.length < 2) return;
    const id = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  /* GSAP animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ai-hero-fade", { y: 28, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 });
      gsap.from(".ai-hero-phone-ios", { x: 60, opacity: 0, rotate: 6, duration: 1.1, ease: "power3.out", delay: 0.2 });
      gsap.from(".ai-hero-phone-android", { x: -40, y: 40, opacity: 0, rotate: -8, duration: 1.1, ease: "power3.out", delay: 0.35 });
      gsap.from(".ai-hero-chip", { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)", stagger: 0.15, delay: 0.7 });

      gsap.utils.toArray(".ai-reveal").forEach((el) => {
        gsap.from(el, { y: 36, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });

      gsap.utils.toArray(".ai-stagger-group").forEach((group) => {
        gsap.utils.toArray(group.children).forEach((card, i) => {
          gsap.from(card, {
            y: 28,
            opacity: 0,
            duration: 0.6,
            delay: (i % 4) * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 94%", once: true },
          });
        });
      });

      gsap.utils.toArray(".ai-slide-left").forEach((el) => {
        gsap.from(el, { x: -50, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });
      gsap.utils.toArray(".ai-slide-right").forEach((el) => {
        gsap.from(el, { x: 50, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });

      gsap.utils.toArray(".ai-timeline-line").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          { scaleY: 1, transformOrigin: "top center", duration: 1.4, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } }
        );
      });

      gsap.utils.toArray(".ai-timeline-step").forEach((el) => {
        gsap.from(el, { x: -30, opacity: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [c]);

  return (
    <div ref={rootRef} className="overflow-x-hidden bg-white">
      {/* ================= HERO ================= */}
      {hero.visible !== false && (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#03121f] via-[#062338] to-[#0b3450]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute w-[380px] h-[380px] rounded-full bg-emerald-400/20 blur-[120px]" style={{ top: "-100px", left: "-80px" }} />
          <div className="absolute w-[380px] h-[380px] rounded-full bg-indigo-500/25 blur-[120px]" style={{ bottom: "-120px", right: "-60px" }} />

          {hero.backgroundImage && (
            <img src={resolveImage(hero.backgroundImage)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          )}

          <div className="relative z-10 container-custom py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="ai-hero-fade inline-flex items-center gap-2 text-emerald-300 text-xs md:text-sm font-semibold tracking-[0.15em] mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                {hero.badge}
              </span>
              <h1 className="ai-hero-fade text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white max-w-xl">
                {hero.title}
              </h1>
              <p className="ai-hero-fade text-slate-300 max-w-lg mt-6 text-base md:text-lg leading-relaxed">{hero.description}</p>
              <div className="ai-hero-fade flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                <a
                  href={hero.primaryBtn?.link || "/contact"}
                  className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-indigo-500 hover:shadow-[0_14px_34px_rgba(16,185,129,0.35)] hover:-translate-y-1 transition-all duration-300"
                >
                  {hero.primaryBtn?.text || "Start Your App"} <ArrowRight size={18} />
                </a>
                <a
                  href={hero.secondaryBtn?.link || "/contact"}
                  className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
                >
                  {hero.secondaryBtn?.text || "Book Consultation"}
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">
              <div className="ai-hero-chip absolute top-4 right-2 md:right-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30">
                <Bell size={16} className="text-emerald-500" />
                <span className="text-xs font-semibold text-slate-700">New order received!</span>
              </div>
              <div className="ai-hero-chip absolute bottom-10 left-0 md:left-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-30">
                <ShieldCheck size={16} className="text-indigo-500" />
                <span className="text-xs font-semibold text-slate-700">Secure Login</span>
              </div>

              <PhoneFrame os="android" className="ai-hero-phone-android absolute left-2 md:left-6 bottom-0 w-[190px] h-[380px] z-10">
                {hero.heroImage ? null : <AppScreenPlaceholder tone="emerald" />}
              </PhoneFrame>
              <PhoneFrame os="ios" className="ai-hero-phone-ios absolute right-2 md:right-6 top-0 w-[220px] h-[440px] z-20">
                {hero.heroImage ? (
                  <img src={resolveImage(hero.heroImage)} alt="" className="w-full h-full object-cover" />
                ) : (
                  <AppScreenPlaceholder tone="indigo" />
                )}
              </PhoneFrame>
            </div>
          </div>
        </section>
      )}

      {/* ================= SERVICES ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="ai-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">What We Build</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Our Mobile App Services</h2>
          <p className="text-text-muted mt-4">Full-cycle Android and iOS app development, from first sketch to store listing.</p>
        </div>

        <div className="ai-stagger-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => {
            const meta = SERVICE_ICON_MAP[service.icon] || SERVICE_ICON_MAP.CrossPlatform;
            const Icon = meta.Icon;
            return (
              <div key={service.id} className="group relative p-[1.5px] rounded-3xl bg-gradient-to-br from-emerald-300/60 via-slate-200 to-indigo-300/60 hover:from-emerald-400 hover:to-indigo-500 transition-all duration-300">
                <div className="relative h-full rounded-[calc(1.5rem-1.5px)] bg-white p-7 flex flex-col hover:-translate-y-1.5 transition-transform duration-300">
                  {service.featured && (
                    <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: `${meta.color}18` }}
                  >
                    <Icon size={26} color={meta.color} />
                  </div>
                  <h3 className="font-bold text-brand-primary text-lg">{service.title}</h3>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed flex-1">{service.description}</p>
                  <a href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 mt-5 group-hover:gap-2.5 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= ANDROID VS IOS ================= */}
      <section className="bg-bg-secondary py-24 md:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="ai-reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Platform Comparison</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Android vs iOS</h2>
            <p className="text-text-muted mt-4">We build for whichever platform — or both — your users live on.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            <div className="ai-slide-left relative rounded-3xl bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)] p-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                <FaAndroid size={26} color="#3DDC84" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary">Android</h3>
              <ul className="mt-5 space-y-3">
                {ANDROID_POINTS.map((point, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <Check size={16} className="text-emerald-500 shrink-0" /> {point}
                  </li>
                ))}
              </ul>
            </div>

            <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl items-center justify-center text-xs font-extrabold text-brand-primary z-10 border border-slate-200">
              VS
            </span>

            <div className="ai-slide-right relative rounded-3xl bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)] p-8">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-5">
                <FaApple size={26} color="#0f172a" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary">iOS</h3>
              <ul className="mt-5 space-y-3">
                {IOS_POINTS.map((point, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <Check size={16} className="text-indigo-500 shrink-0" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APP DEVELOPMENT PROCESS ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="ai-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">App Development Process</h2>
          <p className="text-text-muted mt-4">A proven seven-step journey from idea to a live, published app.</p>
        </div>

        <div className="relative max-w-2xl mx-auto pl-12 md:pl-16">
          <div className="ai-timeline-line absolute left-[15px] md:left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-400 via-brand-accent to-indigo-500" />
          <div className="space-y-10">
            {processSteps.map((step, i) => (
              <div key={i} className="ai-timeline-step relative">
                <div className="absolute -left-12 md:-left-16 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-brand-accent text-brand-accent flex items-center justify-center font-bold text-sm shadow-md">
                  {i + 1}
                </div>
                <h3 className="font-bold text-brand-primary text-lg">{step.title}</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES (marquee) ================= */}
      <section className="bg-bg-secondary py-24 md:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="ai-reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Our Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Technologies We Use</h2>
            <p className="text-text-muted mt-4">A modern, production-proven toolkit across mobile and backend.</p>
          </div>
        </div>

        <div className="relative">
          <div className="ai-marquee flex gap-6 w-max">
            {[...visibleTechnologies, ...visibleTechnologies].map((tech, i) => {
              const meta = TECH_ICON_MAP[tech.name];
              const Icon = meta?.Icon || Webhook;
              const color = meta?.color || "#145a8c";
              return (
                <div
                  key={`${tech.id || tech.name}-${i}`}
                  className="w-64 shrink-0 rounded-2xl p-5 bg-white border border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_34px_rgba(20,90,140,0.16)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                      {tech.logo ? (
                        <img src={resolveImage(tech.logo)} alt={tech.name} className="w-6 h-6 object-contain" />
                      ) : (
                        <Icon size={22} color={color} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-primary text-sm">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted mt-3 leading-relaxed">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="ai-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Built In</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Features Your App Can Have</h2>
          <p className="text-text-muted mt-4">Common, production-ready capabilities we integrate on demand.</p>
        </div>

        <div className="ai-stagger-group grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {FEATURE_LIST.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-emerald-300 hover:shadow-[0_14px_30px_rgba(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-indigo-500 text-white flex items-center justify-center mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="font-bold text-brand-primary text-sm">{f.title}</h3>
              <p className="text-xs text-text-muted mt-1.5 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APP SHOWCASE ================= */}
      <section className="bg-bg-secondary py-24 md:py-28">
        <div className="container-custom">
          <div className="ai-reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">App Showcase</h2>
            <p className="text-text-muted mt-4">A sample of Android and iOS apps we've designed, built, and shipped.</p>
          </div>

          <div className="ai-stagger-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visibleProjects.map((p) => (
              <div key={p.id || p.name} className="group flex flex-col items-center text-center">
                <PhoneFrame os="ios" image={p.coverImage} className="w-[170px] h-[340px] mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  {!p.coverImage && <AppScreenPlaceholder tone={p.featured ? "emerald" : "indigo"} />}
                </PhoneFrame>
                {p.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-brand-accent px-2.5 py-1 rounded-full mb-2">Featured</span>
                )}
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide">{p.category}</span>
                <h3 className="font-bold text-brand-primary text-lg mt-1">{p.name}</h3>
                <p className="text-sm text-text-muted mt-2 max-w-xs leading-relaxed">{p.description}</p>
                <div className="flex items-center gap-3 mt-5">
                  <a href={p.playStore || "#"} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-primary hover:bg-brand-accent rounded-xl px-4 py-2.5 transition-colors duration-200">
                    <ExternalLink size={13} /> View Project
                  </a>
                  <a href={p.appStore || "#"} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary border border-slate-200 hover:border-brand-primary rounded-xl px-4 py-2.5 transition-colors duration-200">
                    Live Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="ai-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Why Choose Us</h2>
        </div>

        <div className="ai-stagger-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500/5 to-indigo-500/5 border border-slate-200 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm text-brand-accent flex items-center justify-center mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="font-bold text-brand-primary text-sm">{item.title}</h3>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="relative py-20 bg-gradient-to-br from-[#03121f] via-[#062338] to-[#0b3450] overflow-hidden">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-emerald-400/15 blur-[100px]" style={{ top: "-60px", left: "10%" }} />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/20 blur-[100px]" style={{ bottom: "-80px", right: "10%" }} />
        <div className="relative container-custom grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatTile value={statistics.apps.value} suffix={statistics.apps.suffix} label={statistics.apps.label} />
          <StatTile value={statistics.clients.value} suffix={statistics.clients.suffix} label={statistics.clients.label} />
          <StatTile value={statistics.countries.value} suffix={statistics.countries.suffix} label={statistics.countries.label} />
          <StatTile value={statistics.satisfaction.value} suffix={statistics.satisfaction.suffix} label={statistics.satisfaction.label} />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      {testimonials.length > 0 && (
        <section className="py-24 md:py-28 bg-gradient-to-br from-slate-50 via-white to-emerald-50/40">
          <div className="container-custom">
            <div className="ai-reveal text-center max-w-2xl mx-auto mb-14">
              <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">What Our Clients Say</h2>
            </div>

            <div className="relative max-w-3xl mx-auto overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="w-full shrink-0 px-2">
                    <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-10 text-center">
                      <Quote size={28} className="text-emerald-400 mx-auto mb-4" />
                      <p className="text-base md:text-lg text-text-secondary leading-relaxed">"{t.review}"</p>
                      <div className="flex items-center justify-center gap-1 mt-5">
                        {Array.from({ length: t.rating || 5 }).map((_, i) => (
                          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-3 mt-5">
                        <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center text-brand-primary font-bold">
                          {t.avatar ? <img src={resolveImage(t.avatar)} alt={t.name} className="w-full h-full object-cover" /> : t.name?.[0]}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-brand-primary text-sm">{t.name}</p>
                          <p className="text-xs text-text-muted">{t.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeTestimonial ? "w-6 bg-brand-accent" : "w-2 bg-slate-300"
                    }`}
                    aria-label={`Show testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="ai-reveal text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <FaqItem key={item.id || i} item={item} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-indigo-600">
        {cta.backgroundImage && (
          <img src={resolveImage(cta.backgroundImage)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        )}
        <div className="ai-reveal relative z-10 container-custom py-24 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl">{cta.heading}</h2>
          <p className="text-white/85 max-w-xl mt-5 leading-relaxed">{cta.description}</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <a href={cta.primaryBtn?.link || "/contact"} className="inline-flex items-center gap-2 bg-white text-brand-primary font-semibold px-8 py-3.5 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
              {cta.primaryBtn?.text || "Start Project"} <ArrowRight size={18} />
            </a>
            <a href={cta.secondaryBtn?.link || "/contact"} className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-2xl backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
              {cta.secondaryBtn?.text || "Get Free Quote"}
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA BANNER ================= */}
      <section className="relative overflow-hidden bg-slate-950 py-20">
        <div className="ai-footer-blob absolute w-[400px] h-[400px] rounded-full bg-emerald-500/20 blur-[130px]" style={{ top: "-100px", left: "-60px" }} />
        <div className="ai-footer-blob absolute w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[130px]" style={{ bottom: "-120px", right: "-60px" }} />
        <div className="ai-reveal relative z-10 container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Let's Build Something Amazing Together.</h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 text-white font-semibold px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-indigo-500 hover:-translate-y-1 transition-transform duration-300"
          >
            Get In Touch <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <style>{`
        @keyframes ai-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ai-marquee {
          animation: ai-marquee-scroll 32s linear infinite;
        }
        .ai-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes ai-blob-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .ai-footer-blob {
          animation: ai-blob-drift 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
