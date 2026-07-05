import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

import MobileHero from "../Components/MobileApp/MobileHero";
import PlatformsSection from "../Components/MobileApp/PlatformsSection";
import ServicesSection from "../Components/MobileApp/ServicesSection";
import DevelopmentProcess from "../Components/MobileApp/DevelopmentProcess";
import TechStackSection from "../Components/MobileApp/TechStackSection";
import FeaturesBento from "../Components/MobileApp/FeaturesBento";
import WhyChooseSection from "../Components/MobileApp/WhyChooseSection";
import StatsSection from "../Components/MobileApp/StatsSection";
import IndustriesSection from "../Components/MobileApp/IndustriesSection";
import ProjectsShowcase from "../Components/MobileApp/ProjectsShowcase";
import MobileTestimonials from "../Components/MobileApp/MobileTestimonials";
import MobileFAQ from "../Components/MobileApp/MobileFAQ";

gsap.registerPlugin(ScrollTrigger);

const PAGE_SLUG = "android-ios-development";

/* ------------------------------------------------------------------ */
/* Default content (used until admin-saved content loads)              */
/* ------------------------------------------------------------------ */

const defaultHero = {
  visible: true,
  badge: "📱 DigiCore Mobile Studio",
  title: "Transform Your Ideas Into Powerful Android & iOS Apps",
  description:
    "DigiCore designs and engineers premium native and cross-platform mobile apps — fast, secure, scalable, and built to convert from day one.",
  primaryBtn: { text: "Start Your App Project", link: "/contact" },
  secondaryBtn: { text: "View Mobile Portfolio", link: "#mobile-projects" },
  heroImage: "",
  heroImage2: "",
  backgroundImage: "",
};

const defaultServicesHeader = {
  heading: "Everything Your Mobile Product Needs",
  subheading: "From first sketch to store listing — a full-cycle mobile engineering team under one roof.",
};

const defaultServices = [
  { id: "s1", icon: "NativeAndroid", title: "Android App Development", description: "High-performance Kotlin & Java apps tailored for the Android platform.", featured: true, visible: true },
  { id: "s2", icon: "NativeIOS", title: "iPhone App Development", description: "Swift-built iOS apps that feel right at home on every Apple device.", featured: true, visible: true },
  { id: "s3", icon: "CrossPlatform", title: "Cross Platform Apps", description: "One codebase, two platforms — shipped faster without compromise.", featured: false, visible: true },
  { id: "s4", icon: "EnterpriseApps", title: "Enterprise Mobile Apps", description: "Secure, scalable internal and customer-facing apps for large organizations.", featured: true, visible: true },
  { id: "s5", icon: "EcommerceApps", title: "Ecommerce Apps", description: "High-converting shopping experiences with seamless checkout flows.", featured: false, visible: true },
  { id: "s6", icon: "FoodDeliveryApps", title: "Food Delivery Apps", description: "Live tracking, ordering, and kitchen management in one platform.", featured: false, visible: true },
  { id: "s7", icon: "HealthcareApps", title: "Healthcare Apps", description: "Telemedicine and patient-record apps built for compliance and trust.", featured: false, visible: true },
  { id: "s8", icon: "FinTechApps", title: "FinTech Apps", description: "Secure banking, trading, and digital wallet applications.", featured: false, visible: true },
  { id: "s9", icon: "BookingApps", title: "Booking Apps", description: "Reservation and scheduling apps with real-time availability.", featured: false, visible: true },
  { id: "s10", icon: "SocialMediaApps", title: "Social Media Apps", description: "Engaging, scalable social platforms with real-time feeds and chat.", featured: false, visible: true },
  { id: "s11", icon: "EducationApps", title: "Education Apps", description: "Interactive learning apps with live classes and progress tracking.", featured: false, visible: true },
  { id: "s12", icon: "CustomBusinessApps", title: "Custom Business Apps", description: "Bespoke mobile tools engineered around your exact workflow.", featured: false, visible: true },
];

const defaultTechnologies = [
  { id: "t1", name: "Kotlin", description: "Modern, concise language for Android development.", visible: true },
  { id: "t2", name: "Java", description: "Battle-tested language for enterprise Android apps.", visible: true },
  { id: "t3", name: "Swift", description: "Apple's fast, safe language for iOS development.", visible: true },
  { id: "t4", name: "SwiftUI", description: "Declarative UI framework for modern Apple apps.", visible: true },
  { id: "t5", name: "Flutter", description: "Google's UI toolkit for natively compiled apps.", visible: true },
  { id: "t6", name: "React Native", description: "Cross-platform apps with native performance.", visible: true },
  { id: "t7", name: "Node.js", description: "Scalable JavaScript runtime for app backends.", visible: true },
  { id: "t8", name: "Express", description: "Minimal, fast backend framework for REST APIs.", visible: true },
  { id: "t9", name: "Django", description: "Secure, batteries-included Python web framework.", visible: true },
  { id: "t10", name: "MongoDB", description: "Flexible NoSQL database for mobile-scale data.", visible: true },
  { id: "t11", name: "MySQL", description: "Reliable relational database for structured data.", visible: true },
  { id: "t12", name: "PostgreSQL", description: "Advanced open-source relational database.", visible: true },
  { id: "t13", name: "SQLite", description: "Lightweight embedded database for on-device storage.", visible: true },
  { id: "t14", name: "AWS", description: "Cloud infrastructure that scales with your app.", visible: true },
  { id: "t15", name: "Google Cloud", description: "Managed cloud services for global-scale apps.", visible: true },
  { id: "t16", name: "Firebase", description: "Backend-as-a-service for auth, data, and analytics.", visible: true },
  { id: "t17", name: "Appwrite", description: "Open-source backend for auth, storage, and functions.", visible: true },
  { id: "t18", name: "Android Studio", description: "Official IDE for building and debugging Android apps.", visible: true },
  { id: "t19", name: "Xcode", description: "Apple's IDE for building and shipping iOS apps.", visible: true },
  { id: "t20", name: "GitHub", description: "Version control and collaboration for every codebase.", visible: true },
  { id: "t21", name: "Docker", description: "Containerized environments for consistent deployments.", visible: true },
  { id: "t22", name: "Figma", description: "Collaborative design tool for every screen we ship.", visible: true },
  { id: "t23", name: "Postman", description: "API design, testing, and documentation toolkit.", visible: true },
];

const defaultProcess = [
  { title: "Discovery", desc: "Understanding your goals, users, and platform requirements in depth." },
  { title: "Wireframing", desc: "Mapping every screen and flow before a single line of UI is built." },
  { title: "UI/UX Design", desc: "Crafting pixel-perfect, on-brand interfaces for Android and iOS." },
  { title: "App Development", desc: "Building clean, scalable, well-tested native or cross-platform code." },
  { title: "API Integration", desc: "Wiring up payments, auth, and third-party services end-to-end." },
  { title: "Testing", desc: "Rigorous QA across real devices, OS versions, and screen sizes." },
  { title: "App Store Deployment", desc: "Managing App Store and Google Play submissions end-to-end." },
  { title: "Maintenance & Updates", desc: "Ongoing monitoring, updates, and support after launch." },
];

const defaultProjects = [
  {
    id: "p1",
    name: "FitTrack Pro",
    category: "Fitness App",
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
    category: "Food Delivery App",
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
    category: "FinTech App",
    description: "A secure personal finance app with biometric login and real-time analytics.",
    coverImage: "",
    playStore: "#",
    appStore: "#",
    github: "#",
    featured: false,
    visible: true,
  },
  {
    id: "p4",
    name: "RideNow",
    category: "Taxi Booking App",
    description: "An on-demand ride booking app with live driver tracking and fare estimation.",
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
  clients: { value: 96, suffix: "%", label: "Client Retention" },
  countries: { value: 15, suffix: "+", label: "Countries Served" },
  satisfaction: { value: 5, suffix: "+", label: "Years Experience" },
};

const defaultTestimonials = [
  { id: "r1", name: "Ananya Kapoor", company: "Founder, FitTrack Pro", avatar: "", review: "DigiCore took our idea from a sketch to a five-star rated app on both stores in under four months.", rating: 5, visible: true },
  { id: "r2", name: "Marcus Lee", company: "CTO, UrbanEats", avatar: "", review: "Rock-solid engineering and constant communication. Our app hasn't had a single major crash since launch.", rating: 5, visible: true },
  { id: "r3", name: "Priya Nair", company: "Product Lead, WalletWise", avatar: "", review: "The attention to UX detail is unmatched — our retention numbers improved within the first month.", rating: 5, visible: true },
];

const defaultFaq = [
  { id: "f1", question: "Android vs iOS — which should I build first?", answer: "It depends on where your users are. We'll help you decide based on your target market, budget, and timeline — or build both from a single cross-platform codebase.", visible: true },
  { id: "f2", question: "Flutter vs Native — what's the difference?", answer: "Native (Swift/Kotlin) gives maximum performance and platform-specific polish. Flutter and React Native ship faster from one codebase with near-native quality. We recommend the right fit after a quick discovery call.", visible: true },
  { id: "f3", question: "How much does app development cost?", answer: "Most projects range from $20k to $100k+ depending on scope, platforms, and integrations. We provide a detailed, fixed-scope quote after our discovery session.", visible: true },
  { id: "f4", question: "How long does delivery take?", answer: "Most apps take 10-16 weeks from kickoff to launch, depending on scope, platform count, and integrations required.", visible: true },
  { id: "f5", question: "Do you handle App Store submission?", answer: "Yes — we manage the full App Store and Google Play submission process, including compliance and review handling.", visible: true },
  { id: "f6", question: "Do you provide maintenance after launch?", answer: "Every project includes an optional ongoing maintenance plan covering updates, monitoring, and support.", visible: true },
];

const defaultSeo = {
  metaTitle: "Android & iOS App Development Services | DigiCore",
  metaDescription:
    "DigiCore designs and builds high-performance native and cross-platform Android and iOS apps with Flutter, React Native, Swift, and Kotlin.",
  keywords: "android app development, ios app development, flutter, react native, mobile app agency, DigiCore",
  ogImage: "",
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function AndroidandIso() {
  const { content: c } = usePageContent(PAGE_SLUG);
  const rootRef = useRef(null);

  const hero = { ...defaultHero, ...(c?.hero || {}) };
  const servicesHeader = {
    heading: c?.servicesHeader?.heading || defaultServicesHeader.heading,
    subheading: c?.servicesHeader?.subheading || defaultServicesHeader.subheading,
  };
  const services = (c?.services?.length ? c.services : defaultServices).filter((s) => s.visible !== false);
  const technologies = (c?.technologies?.length ? c.technologies : defaultTechnologies).filter((t) => t.visible !== false);
  const processSteps = c?.process?.length ? c.process : defaultProcess;
  const projects = (c?.projects?.length ? c.projects : defaultProjects).filter((p) => p.visible !== false);
  const statistics = {
    apps: { ...defaultStatistics.apps, ...(c?.statistics?.apps || {}) },
    clients: { ...defaultStatistics.clients, ...(c?.statistics?.clients || {}) },
    countries: { ...defaultStatistics.countries, ...(c?.statistics?.countries || {}) },
    satisfaction: { ...defaultStatistics.satisfaction, ...(c?.statistics?.satisfaction || {}) },
  };
  const testimonials = (c?.testimonials?.length ? c.testimonials : defaultTestimonials).filter((t) => t.visible !== false);
  const faqs = (c?.faq?.length ? c.faq : defaultFaq).filter((f) => f.visible !== false);
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

  /* Shared scroll-reveal GSAP wiring — bespoke local interactions (hero
     parallax, process curve draw, counters, carousel) live inside their
     own components. */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mp-hero-fade", { y: 28, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 });
      gsap.from(".mp-hero-phone-a", { x: -50, y: 30, opacity: 0, rotate: -6, duration: 1.1, ease: "power3.out", delay: 0.25 });
      gsap.from(".mp-hero-phone-b", { x: 60, opacity: 0, rotate: 6, duration: 1.1, ease: "power3.out", delay: 0.1 });
      gsap.from(".mp-hero-chip", { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)", stagger: 0.15, delay: 0.75 });
      gsap.from([".mp-hero-orbit-a", ".mp-hero-orbit-b"], { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.8)", stagger: 0.15, delay: 0.5 });

      gsap.utils.toArray(".mp-reveal").forEach((el) => {
        gsap.from(el, { y: 36, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });

      gsap.utils.toArray(".mp-stagger-group").forEach((group) => {
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

      gsap.utils.toArray(".mp-timeline-step").forEach((el) => {
        gsap.from(el, { y: 24, opacity: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });
      gsap.utils.toArray(".mp-timeline-dot").forEach((el) => {
        gsap.from(el, { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)", scrollTrigger: { trigger: el, start: "top 92%", once: true } });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [c]);

  return (
    <div ref={rootRef} className="overflow-x-hidden bg-white">
      {hero.visible !== false && <MobileHero hero={hero} />}

      <PlatformsSection />

      <ServicesSection services={services} heading={servicesHeader.heading} subheading={servicesHeader.subheading} />

      <div id="mobile-process">
        <DevelopmentProcess steps={processSteps} />
      </div>

      <TechStackSection technologies={technologies} />

      <FeaturesBento />

      <WhyChooseSection />

      <StatsSection statistics={statistics} />

      <IndustriesSection />

      <div id="mobile-projects">
        <ProjectsShowcase projects={projects} />
      </div>

      <MobileTestimonials testimonials={testimonials} />

      <MobileFAQ faqs={faqs} />


      <style>{`
        .mp-ripple-host { position: relative; }
        .mp-ripple {
          position: absolute;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.45);
          transform: scale(0);
          animation: mp-ripple-burst 0.6s ease-out;
          pointer-events: none;
        }
        @keyframes mp-ripple-burst {
          to { transform: scale(1); opacity: 0; }
        }

        @keyframes mp-blob-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(24px, -22px); }
        }
        .mp-blob { animation: mp-blob-drift 9s ease-in-out infinite; }
        .mp-blob-alt { animation: mp-blob-drift 11s ease-in-out infinite reverse; }

        @keyframes mp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .mp-float { animation: mp-float 4.5s ease-in-out infinite; }
        .mp-float-delayed { animation: mp-float 5.5s ease-in-out infinite; animation-delay: 1.2s; }

        @keyframes mp-phone-wobble {
          0%, 100% { transform: translate(0, 0) rotate(-3deg); }
          50% { transform: translate(0, -12px) rotate(-1deg); }
        }
        @keyframes mp-phone-wobble-alt {
          0%, 100% { transform: translate(0, 0) rotate(3deg); }
          50% { transform: translate(0, -14px) rotate(1deg); }
        }
        .mp-phone-wobble { animation: mp-phone-wobble 6.5s ease-in-out infinite; }
        .mp-phone-wobble-alt { animation: mp-phone-wobble-alt 7.5s ease-in-out infinite; }

        @keyframes mp-orbit-a {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -14px); }
        }
        @keyframes mp-orbit-b {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 12px); }
        }
        .mp-hero-orbit-a { animation: mp-orbit-a 5s ease-in-out infinite; }
        .mp-hero-orbit-b { animation: mp-orbit-b 6s ease-in-out infinite; }

        @keyframes mp-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .mp-marquee { animation: mp-marquee-scroll 30s linear infinite; }
        .mp-marquee:hover { animation-play-state: paused; }

        @keyframes mp-gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .mp-gradient-shift { animation: mp-gradient-shift 8s ease infinite; }

        @keyframes mp-morph {
          0%, 100% { border-radius: 42% 58% 65% 35% / 45% 45% 55% 55%; }
          50% { border-radius: 60% 40% 35% 65% / 55% 60% 40% 45%; }
        }
        .mp-morph { animation: mp-morph 10s ease-in-out infinite; }

        @keyframes mp-testimonial-fade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mp-testimonial-fade { animation: mp-testimonial-fade 0.5s ease-out; }
      `}</style>
    </div>
  );
}
