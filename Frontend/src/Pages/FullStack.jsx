import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tools from "../Components/Sections/Tools";
import Brands from "../Components/Sections/Brands";
import {
  ArrowRight,
  ExternalLink,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Webhook,
  LayoutDashboard,
  Cloud,
  Wrench,
  Sparkles,
  Award,
  Cpu,
  Code2,
  Layers,
  Rocket,
  Headphones,
  Braces,
  Plus,
  Minus,
} from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaJava, FaGithub } from "react-icons/fa";
import { usePageContent, resolveImage } from "../hooks/usePageContent";
import Banner from "../Components/Cards/Seohero";
import FAQ from "../Components/Sections/FAQ";
import TestimonialSection from "../Components/Sections/Testimonials";

gsap.registerPlugin(ScrollTrigger);

const PAGE_SLUG = "full-stack-development";

/* ------------------------------------------------------------------ */
/* Static lookup tables                                                */
/* ------------------------------------------------------------------ */

const TECH_ICON_MAP = {
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  "Express.js": { Icon: SiExpress, color: "#1F2937" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#3C873A" },
  "Next.js": { Icon: SiNextdotjs, color: "#111827" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Django: { Icon: SiDjango, color: "#0C4B33" },
  JavaScript: { Icon: SiJavascript, color: "#D4AC0D" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  Java: { Icon: FaJava, color: "#E76F00" },
};

const FEATURE_ICON_MAP = {
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Webhook,
  LayoutDashboard,
  Cloud,
  Wrench,
  Sparkles,
};

/* ------------------------------------------------------------------ */
/* Default content (used until admin-saved content loads)              */
/* ------------------------------------------------------------------ */

const defaultHero = {
  visible: true,
  subtitle: "END-TO-END ENGINEERING",
  title: "Full Stack Development",
  description:
    "We build scalable, secure, high-performance web applications using modern technologies.",
  primaryBtn: { text: "Start Project", link: "/contact" },
  secondaryBtn: { text: "View Portfolio", link: "/case-studies" },
  backgroundImage: "",
};

const defaultTechnologies = [
  { id: "t1", name: "MongoDB", description: "NoSQL database built for scalability.", experience: "5+ Yrs", visible: true, featured: true },
  { id: "t2", name: "Express.js", description: "High-performance backend runtime.", experience: "5+ Yrs", visible: true, featured: false },
  { id: "t3", name: "React", description: "Modern frontend library for fast UI.", experience: "5+ Yrs", visible: true, featured: true },
  { id: "t4", name: "Node.js", description: "High-performance backend runtime.", experience: "5+ Yrs", visible: true, featured: true },
  { id: "t5", name: "Next.js", description: "Production-ready React framework.", experience: "4+ Yrs", visible: true, featured: true },
  { id: "t6", name: "Python", description: "Powerful backend & automation language.", experience: "5+ Yrs", visible: true, featured: false },
  { id: "t7", name: "Django", description: "Secure Python web framework.", experience: "4+ Yrs", visible: true, featured: false },
  { id: "t8", name: "JavaScript", description: "Interactive frontend development.", experience: "6+ Yrs", visible: true, featured: false },
  { id: "t9", name: "HTML5", description: "Modern semantic markup.", experience: "6+ Yrs", visible: true, featured: false },
  { id: "t10", name: "CSS3", description: "Responsive UI styling.", experience: "6+ Yrs", visible: true, featured: false },
  { id: "t11", name: "Java", description: "Enterprise-grade backend development.", experience: "3+ Yrs", visible: true, featured: false },
];

const defaultProcess = [
  { title: "Discovery", desc: "We analyze your requirements, goals, and audience to define the right technical strategy." },
  { title: "UI/UX Design", desc: "Wireframes and pixel-perfect interfaces crafted for clarity, conversion, and delight." },
  { title: "Development", desc: "Clean, scalable full stack code built with modern frameworks and best practices." },
  { title: "Testing", desc: "Rigorous QA across devices and browsers to catch issues before they reach users." },
  { title: "Deployment", desc: "Smooth, zero-downtime releases to production with monitoring in place." },
];

const defaultFeatures = [
  { icon: "Smartphone", title: "Responsive Design", desc: "Pixel-perfect experiences across desktop, tablet, and mobile." },
  { icon: "Zap", title: "Fast Performance", desc: "Optimized builds and caching for lightning-fast load times." },
  { icon: "Search", title: "SEO Friendly", desc: "Semantic markup and best practices baked in from day one." },
  { icon: "ShieldCheck", title: "Secure Authentication", desc: "Industry-standard auth flows to keep user data safe." },
  { icon: "Webhook", title: "REST APIs", desc: "Well-documented, versioned APIs built for scale." },
  { icon: "LayoutDashboard", title: "Admin Dashboard", desc: "Powerful dashboards to manage content and data with ease." },
  { icon: "Cloud", title: "Cloud Deployment", desc: "CI/CD pipelines and cloud-native infrastructure." },
  { icon: "Wrench", title: "Maintenance Support", desc: "Ongoing updates, monitoring, and support after launch." },
  { icon: "Sparkles", title: "Animations", desc: "Delightful micro-interactions that bring interfaces to life." },
];

const defaultProjects = [
  {
    id: "p1",
    name: "Enterprise E-Commerce Platform",
    description: "A scalable multi-vendor marketplace with real-time inventory and secure payments.",
    coverImage: "",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "p2",
    name: "SaaS Analytics Dashboard",
    description: "A data-heavy dashboard with role-based access, live charts, and exports.",
    coverImage: "",
    tags: ["Next.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "p3",
    name: "Healthcare Booking Portal",
    description: "Appointment scheduling platform with secure patient records and reminders.",
    coverImage: "",
    tags: ["Django", "Python", "React"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const whyChooseUs = [
  { icon: Award, title: "5+ Years Experience", desc: "A seasoned team that has shipped full stack products across industries." },
  { icon: Cpu, title: "Modern Technologies", desc: "We build on current, battle-tested frameworks — never legacy stacks." },
  { icon: Code2, title: "Clean Code", desc: "Readable, well-documented, maintainable code your team can build on." },
  { icon: Layers, title: "Scalable Architecture", desc: "Systems designed to grow from first users to millions of requests." },
  { icon: Rocket, title: "Fast Delivery", desc: "Agile sprints and clear milestones keep your project moving quickly." },
  { icon: Headphones, title: "Support", desc: "Post-launch monitoring, maintenance, and support whenever you need it." },
];

const defaultStats = {
  projects: { value: 100, suffix: "+", label: "Projects" },
  clients: { value: 50, suffix: "+", label: "Happy Clients" },
  technologies: { value: 10, suffix: "+", label: "Technologies" },
  experience: { value: 5, suffix: "+", label: "Years Experience" },
};

const defaultFaq = [
  { id: "f1", question: "What technologies do you use for full stack development?", answer: "We primarily use the MERN stack (MongoDB, Express.js, React, Node.js) and frameworks like Next.js, Django, or Python depending on your project requirements.", visible: true },
  { id: "f2", question: "Do you design the user interface as well?", answer: "Yes, we have expert UI/UX designers who create modern, intuitive, and responsive interface designs before we begin coding.", visible: true },
  { id: "f3", question: "How do you ensure application security?", answer: "We follow industry best practices, including secure authentication, data encryption, input validation, and secure cloud configurations to protect your app from threats.", visible: true },
  { id: "f4", question: "Can you integrate third-party APIs?", answer: "Absolutely. We routinely integrate APIs for payment gateways (Stripe, PayPal), social logins, CRM systems, maps, and other third-party services.", visible: true },
  { id: "f5", question: "Do you offer post-launch support?", answer: "Yes, we provide ongoing maintenance, security updates, server monitoring, and performance optimization support after deployment.", visible: true },
];

const defaultSeo = {
  metaTitle: "Full Stack Development Services | Digital Markitors",
  metaDescription:
    "We build scalable, secure, high-performance web applications using MongoDB, Express, React, Node.js and more.",
  keywords: "full stack development, MERN stack, web application development",
  ogImage: "",
};

const FLOATING_ICON_KEYS = ["React", "Node.js", "MongoDB", "Next.js", "Python", "JavaScript"];

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
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
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-brand-primary to-brand-accent bg-clip-text text-transparent">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm md:text-base font-medium text-text-muted">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function FullStack() {
  const { content: c } = usePageContent(PAGE_SLUG);
  const rootRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const hero = { ...defaultHero, ...(c?.hero || {}) };
  const technologies = c?.technologies?.length ? c.technologies : defaultTechnologies;
  const visibleTechnologies = technologies.filter((t) => t.visible !== false);
  const processSteps = c?.process?.length ? c.process : defaultProcess;
  const features = c?.features?.length ? c.features : defaultFeatures;
  const projects = c?.projects?.length ? c.projects : defaultProjects;
  const stats = {
    projects: { ...defaultStats.projects, ...(c?.statistics?.projects || {}) },
    clients: { ...defaultStats.clients, ...(c?.statistics?.clients || {}) },
    technologies: { ...defaultStats.technologies, ...(c?.statistics?.technologies || {}) },
    experience: { ...defaultStats.experience, ...(c?.statistics?.experience || {}) },
  };
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

  /* GSAP animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fs-hero-fade", {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.utils.toArray(".fs-reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray(".fs-stagger-group").forEach((group) => {
        gsap.utils.toArray(group.children).forEach((card, i) => {
          gsap.from(card, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: (i % 4) * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 94%", once: true },
          });
        });
      });

      gsap.utils.toArray(".fs-slide-left").forEach((el) => {
        gsap.from(el, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      gsap.utils.toArray(".fs-slide-right").forEach((el) => {
        gsap.from(el, {
          x: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      gsap.utils.toArray(".fs-process-line").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [c]);

  return (
    <div ref={rootRef} className="overflow-x-hidden bg-white">
      {/* ================= HERO ================= */}
      {hero.visible !== false && (
        <Banner
          subtitle={hero.subtitle}
          title={hero.title}
          description={hero.description}
          primaryBtnText={hero.primaryBtn?.text || "Start Project"}
          primaryBtnLink={hero.primaryBtn?.link || "/contact"}
          secondaryBtnText={hero.secondaryBtn?.text || "View Portfolio"}
          secondaryBtnLink={hero.secondaryBtn?.link || "/case-studies"}
          backgroundImage={hero.backgroundImage ? resolveImage(hero.backgroundImage) : ""}
        />
      )}

      {/* ================= TECHNOLOGIES ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="fs-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Our Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Technologies We Master</h2>
          <p className="text-text-muted mt-4">
            A modern, production-proven toolkit spanning the entire stack — from database to deployment.
          </p>
        </div>

        <div className="fs-stagger-group grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleTechnologies.map((tech) => {
            const meta = TECH_ICON_MAP[tech.name];
            const Icon = meta?.Icon || Braces;
            const color = meta?.color || "#145a8c";
            return (
              <div
                key={tech.id || tech.name}
                className="group relative rounded-2xl p-6 bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(20,90,140,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: `0 0 0 2px ${color}55` }} />
                {tech.featured && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18` }}
                >
                  {tech.logo ? (
                    <img src={resolveImage(tech.logo)} alt={tech.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <Icon size={28} color={color} />
                  )}
                </div>
                <h3 className="font-bold text-brand-primary text-base">{tech.name}</h3>
                <p className="text-sm text-text-muted mt-1.5 leading-relaxed">{tech.description}</p>
                {tech.experience && (
                  <span className="inline-block mt-4 text-xs font-semibold text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                    {tech.experience} Experience
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="bg-bg-secondary py-24 md:py-28">
        <div className="container-custom">
          <div className="fs-reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Our Process</h2>
            <p className="text-text-muted mt-4">A proven five-step workflow that takes your idea from concept to launch.</p>
          </div>

          <div className="relative">
            <div className="fs-process-line hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className={i % 2 === 0 ? "fs-slide-left" : "fs-slide-right"}>
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-brand-accent/30 mb-5">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-brand-primary text-lg">{step.title}</h3>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="fs-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">What You Get</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Features Built In</h2>
          <p className="text-text-muted mt-4">Every project ships with these production-grade essentials by default.</p>
        </div>

        <div className="fs-stagger-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = FEATURE_ICON_MAP[f.icon] || Sparkles;
            return (
              <div
                key={i}
                className="rounded-2xl p-7 bg-white border border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(20,90,140,0.14)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-brand-primary">{f.title}</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= PROJECT SHOWCASE ================= */}
      <section className="bg-bg-secondary py-24 md:py-28">
        <div className="container-custom">
          <div className="fs-reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Project Showcase</h2>
            <p className="text-text-muted mt-4">A sample of full stack products we've designed, built, and shipped.</p>
          </div>

          <div className="fs-stagger-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.id || p.name}
                className="group rounded-2xl bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_48px_rgba(20,90,140,0.16)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-48 bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center overflow-hidden">
                  {p.coverImage ? (
                    <img
                      src={resolveImage(p.coverImage)}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Code2 size={48} className="text-white/70" />
                  )}
                  {p.featured && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide text-brand-primary bg-white px-2.5 py-1 rounded-full shadow">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-primary text-lg">{p.name}</h3>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(p.tags || []).map((tag, ti) => (
                      <span key={ti} className="text-xs font-semibold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <a
                      href={p.live || "#"}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-accent rounded-xl px-4 py-2.5 transition-colors duration-200"
                    >
                      <ExternalLink size={15} /> View Demo
                    </a>
                    <a
                      href={p.github || "#"}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-primary border border-slate-200 hover:border-brand-primary rounded-xl px-4 py-2.5 transition-colors duration-200"
                    >
                      <FaGithub size={15} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />


      {/* ================= WHY CHOOSE US ================= */}
      <section className="container-custom py-24 md:py-28">
        <div className="fs-reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Why Choose Us</h2>
        </div>

        <div className="fs-stagger-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 border border-brand-primary/10 hover:border-brand-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-brand-accent flex items-center justify-center mb-4">
                <item.icon size={22} />
              </div>
              <h3 className="font-bold text-brand-primary">{item.title}</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Tools />

      <Brands />

      {/* ================= FAQ ================= */}
      {faqs.length > 0 && (
        <section className="container-custom py-24 md:py-28 border-t border-slate-100">
          <div className="fs-reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.2em] text-xs uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3">Frequently Asked Questions</h2>
            <p className="text-text-muted mt-4">
              Find answers to common questions about our full stack development services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, i) => (
              <div
                key={item.id || i}
                className="fs-reveal rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer bg-transparent border-0"
                >
                  <span className="font-semibold text-brand-primary text-base md:text-lg leading-relaxed">
                    {item.question}
                  </span>
                  {openFaq === i ? (
                    <Minus className="w-5 h-5 shrink-0 text-brand-accent" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0 text-brand-primary" />
                  )}
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: openFaq === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-text-muted leading-relaxed border-t border-slate-100 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
