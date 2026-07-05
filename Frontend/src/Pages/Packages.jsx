import React from "react";
import { useState } from "react";
import "../Styles/Packages.css";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

import logo from "../assets/logo.png"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


import video from "../assets/video.webp";
import Gursimran from "../assets/gursimran-jassal.webp";
import Pawandeep from "../assets/pawandeep-singh.webp";
import Dheeraj from "../assets/dheeraj-kumar-director-cepl.webp";
import PackageBG from "../assets/seo-package.webp";


import {
  Phone,
  CheckCircle,
  Plus, Minus 
} from "lucide-react";

const plans = [
  { name: "STANDARD", keywords: "30 KEYWORDS" },
  { name: "PREMIUM", keywords: "50 KEYWORDS" },
  { name: "BUSINESS", keywords: "80 KEYWORDS" },
  { name: "PLATINUM", keywords: "150 KEYWORDS" },
];

const features = [
  {
    title: "Initial Review and Analysis",
    details: [
      "Local Optimization",
      "In-Depth Site Analysis",
      "Keyword Analysis",
      "Competitor Analysis",
      "Duplicate Content Check",
      "Baseline Ranking Check",
      "Keyword URL Mapping",
      "Broken Links Check",
      "Google Penalty Check",

    ],
  },
  {
    title: "On Page Optimization",
    details: [
      "Canonicalization",
      "Header Tags Optimization",
      "Internal Link Structuring & Optimization",
      "Optimization",
      "Existing Content Optimization",
      "Robots.txt Creation/Analysis",
      "XML Sitemap Analysis",
      "Google Webmaster Tools Set Up",
      "Google Analytics Setup",
      "Page Speed Optimization Analysis",
      "Fresh Web Content Suggestions",
      "Title & Meta Tags Optimization",
      "Image & Hyperlink Optimization",
      "Bing Webmaster Tools Set Up",
      "HTML Site Map Creation",
      "Optimization of robots.txt & Google",
      "Bot crawls",
      "Footer Optimization",
      "Website usability analysis",
      "Check Header Status, Meta Robots",
      "Google Cache of Pages",
      "Check Mobility Issues",
      "Custom 404 Page" ,
      "URL structure Analysis"





    ],
  },
  {
    title: "Content Marketing",
    details: ["Blog Writing",
              "PDF Creation",
              "Press Release Writing",
              "Guest Post Writing",
              "Article Writing",
              "Infographic Creation",
              "PPT Creation"
            ],
  },
  {
    title: "Off Page",
    details: ["Profile Creation",
              "Blog Submission",
              "Guest Post Submission",
              "Article Submission",
              "Company Profile Listing Social",
              "Bookmarking",
              "PDF/Doc Submission",
              "Video Submission (if available)",
              "Q & A Submissions*",
              "Infographic Submission*",
              "Press Release Promotion",
              "Press Release Submission",
              "Infographic Promotion",
              "Infographic Distribution",
              "PPT Submission",
              "PPT Promotion",
              "Blog Commenting"



      ],
  },
  {
    title: "Social Marketing",
    details: ["Social Bookmarking",
              "Social Sharing",
            "Web 2.0 Profile Creation",
            "Image Promotion & Submission",
            "Video Marketing & Submission"
    ],
  },
  {
    title: "SEO Report",
    details: ["Google Analytics Report", 
              "Ranking Report, Monthly",
              "Accomplishment Report",
        ],
  },
  {
    title: "Minimum Contract Duration",
    details: ["Minimum Contract Duration"],
  },
];


const testimonials = [
  {
    image: Gursimran,
    name: "Gursimran Jassal",
    designation: "Co-Founder - Skittles Productions",
    text: "We took SEO and digital services from  Digicore Inc and that really boosted our sales. I must say Ram and his team is very efficient and professional."
  },
  {
    image: Pawandeep,
    name: "Pawandeep Singh",
    designation: "CEO - Signature Visas",
    text: "Choosing  Digicore Inc was my best decision. Their team shortlisted the right keywords and within a few months most keywords started ranking on Google's first page."
  },
  {
    image: Dheeraj,
    name: "Dheeraj Kumar",
    designation: "Director - CEPL",
    text: "I approached  Digicore Inc to improve my company's online presence. After a few months, my website started generating quality business and leads."
  }
];

export default function Packages() {
  const { content: c } = usePageContent("packages");
  const hero = c?.hero;
  const seoSection = c?.seoSection;
  const displayPlans = c?.plans?.length ? c.plans : plans;
  const displayFeatures = c?.features?.length ? c.features : features;
  const whyChoose = c?.whyChoose;
  const contactBanner = c?.contactBanner;
  const displayTestimonials = c?.testimonials?.length
    ? c.testimonials.map((t) => ({ ...t, image: resolveImage(t.image) }))
    : testimonials;

  const featuresMeta = c?.featuresMeta || {};
  const videoSrc = c?.video?.url || c?.video?.upload || null;
  const testimonialsHeading = c?.testimonialsHeading || null;

  const [active, setActive] = useState(0);

   const [open, setOpen] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

const getTotalRows = () => {
  let rows = [];

  displayFeatures.forEach((feature, featureIndex) => {

    rows.push({
      type: "title",
      text: feature.title
    });

    if (open === featureIndex) {
      feature.details.forEach((detail) => {
        rows.push({
          type: "detail",
          text: detail
        });
      });
    }

  });

  return rows;
};

const rows = getTotalRows();
  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[480px] bg-gradient-to-br from-[#1c1c1e] to-slate-900 overflow-hidden flex items-center px-5 py-20">
        <img
          src={hero?.image ? resolveImage(hero.image) : PackageBG}
          alt="SEO Packages"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-[42px] max-[769px]:text-[32px] font-heading font-extrabold text-white leading-tight">
              {hero?.heading || "Affordable SEO Packages Plans & Pricing Delhi, India"}
            </h1>

            <p className="text-[17px] leading-[1.8] text-white/80 max-w-xl">
              {hero?.description || `Take full advantage of Digicore Inc’ affordable yet professional SEO services to get more organic traffic on your website and grow your business immensely.`}
            </p>

            <ul className="space-y-3.5">
              {(hero?.bullets?.length ? hero.bullets : [
                "ROI-Driven SEO pricing packages that assure you top rankings",
                "Absolute adherence to Webmaster guidelines",
                "Handpicked monthly SEO packages in India starting @ 15000*",
              ]).map((bullet, index) => (
                <li key={index} className="flex items-center gap-3 text-white/95 text-[15px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e31e24] shrink-0"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SEO Packages Header Description */}
      <section className="w-full py-16 px-5 bg-white text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6">
            {seoSection?.heading ? (
              <span>{seoSection.heading}</span>
            ) : (
              <>
                Get the Best and Result-Oriented{" "}
                <span className="text-[#e31e24]">SEO Packages in India and Plans with Us</span>
              </>
            )}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto">
            {seoSection?.description || `Our SEO services are quite economical when compared with others. Digicore Inc, as the top digital marketing company in Delhi offer market-centric and result-oriented SEO services. We use White Hat techniques to ensure that your website’s ranking grows organically.`}
          </p>
        </div>
      </section>

      {/* Pricing Comparison Container */}
      <div className="max-w-[1200px] mx-auto px-5 py-20 flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar Features */}
        <aside className="w-full lg:w-[320px] shrink-0 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
          <div>
            <h3 className="text-[22px] font-heading font-extrabold text-white mb-5 leading-snug">
              {featuresMeta.heading1 ? (
                <>
                  <span className="block text-[#e31e24]">{featuresMeta.heading1}</span>
                  <span className="text-sm font-semibold text-slate-400 mt-1 block">{featuresMeta.heading2}</span>
                </>
              ) : (
                <>GENERATE LEADS <br /> ONLINE</>
              )}
            </h3>

            <button className="w-full bg-[#e31e24] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 mb-8 hover:bg-[#c4151a] transition-all cursor-pointer">
              <Phone size={16} />
              <span className="text-xs uppercase tracking-wider">{featuresMeta.mobile || "WORKS FOR YOUR BUSINESS"}</span>
            </button>

            <div className="divide-y divide-white/5">
              {displayFeatures.map((item, index) => (
                <div key={item.id || index} className="py-2.5">
                  <div
                    className={`flex items-center justify-between py-3 cursor-pointer select-none transition-colors duration-200 ${
                      open === index ? "text-[#e31e24]" : "text-white/90 hover:text-white"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-sm font-semibold pr-3 leading-tight">{item.title}</span>
                    {open === index ? <Minus size={16} className="shrink-0" /> : <Plus size={16} className="shrink-0" />}
                  </div>

                  {open === index && (
                    <div className="space-y-1 mt-2 pb-3 pl-3">
                      {item.details.map((detail, i) => (
                        <div key={i} className="py-1 text-xs text-slate-400 leading-normal border-l-2 border-[#e31e24]/20 pl-2.5">
                          {detail}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Pricing Cards Grid */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {displayPlans.map((plan, index) => (
            <div
              key={plan.id || index}
              className={`bg-white border rounded-3xl p-6 text-center flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ${
                selectedPlan === index 
                  ? "border-[#e31e24]/30 shadow-[0_15px_30px_rgba(227,30,36,0.1)] ring-2 ring-[#e31e24]/5 -translate-y-1.5" 
                  : "border-[#e5e7eb]"
              }`}
              onMouseEnter={() => setSelectedPlan(index)}
            >
              <div>
                <div className="plan-header border-b border-slate-100 pb-5">
                  <h4 className="text-xs font-bold tracking-[0.1em] text-slate-400 uppercase mb-2">{plan.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">UPTO</p>
                  <h2 className="text-[22px] font-heading font-extrabold text-slate-900 my-1">{plan.keywords}</h2>
                  <h5 className="text-[11px] font-bold text-[#e31e24] bg-[#fee2e2] px-2.5 py-0.5 rounded-full inline-block mt-1">
                    {plan.duration || "6 MONTHS"}
                  </h5>
                </div>

                <div className="checks mt-6 space-y-2">
                  {rows.map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-center items-center border-b border-slate-100 ${
                        row.type === "title" ? "h-[44px]" : "h-[32px]"
                      }`}
                    >
                      <CheckCircle 
                        size={row.type === "title" ? 18 : 14} 
                        className={row.type === "title" ? "text-[#e31e24]" : "text-[#e31e24]/40"}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button className={`w-full font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedPlan === index 
                    ? "bg-[#e31e24] text-white shadow-[0_6px_15px_rgba(227,30,36,0.3)] hover:bg-[#c4151a]" 
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}>
                  {plan.buttonText || "Enquire Now"}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Why Choose us ranking banner */}
      <section className="w-full py-24 px-5 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-12">
            {whyChoose?.heading ? (
              whyChoose.heading
            ) : (
              <>
                Fulfill Your Dream of <span className="text-[#e31e24]">Number #1 Ranking</span> <br />
                with Our Local SEO Packages
              </>
            )}
          </h2>

          <div className="text-center text-[16px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto space-y-6">
            {(whyChoose?.paragraphs?.length ? whyChoose.paragraphs : [
              `Digicore Inc is one of the most reliable SEO companies in Delhi, India. Since our inception, we have worked on numerous challenging projects for both domestic and international clients. Our growing experience, expertise, and commitment to staying ahead of the competition help us deliver exceptional results.`,
              `Whether you are an established market leader or a budding startup, generating calls and leads is essential for business success. If you're unsure where to begin, it's time to grow locally. Choose our affordable Local SEO Packages and let us enhance your website’s online visibility, credibility, and ability to attract more targeted customers.`,
            ]).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="w-full bg-[#1c1c1e] py-12 px-5 border-t border-b border-[#2b2b2e]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <a 
            href={`tel:${contactBanner?.phone || "9818888064"}`} 
            className="flex items-center gap-3 text-white text-[18px] hover:text-[#e31e24] transition-colors duration-200 font-semibold"
          >
            <FaPhoneAlt className="text-[#e31e24] text-xl" />
            <span>{contactBanner?.phone || "9818888064"}</span>
          </a>

          <div className="flex items-center justify-center bg-white rounded-lg px-6 py-3">
            <img 
              src={contactBanner?.logo ? resolveImage(contactBanner.logo) : logo} 
              alt="logo" 
              className="h-24 object-contain w-auto"
            />
          </div>

          <a 
            href={`mailto:${contactBanner?.email || "hello@digitalmarkitors.com"}`} 
            className="flex items-center gap-3 text-white text-[18px] hover:text-[#e31e24] transition-colors duration-200 font-semibold"
          >
            <FaEnvelope className="text-[#e31e24] text-xl" />
            <span>{contactBanner?.email || "hello@digitalmarkitors.com"}</span>
          </a>
        </div>
      </section>

      {/* Testimonials Video reviews */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[36px] font-heading font-extrabold text-[#1c1c1e] mb-2">Testimonials</h2>
          <p className="text-center text-[16px] text-slate-500 mb-12">
            {testimonialsHeading || "Check out what our clients say about our top digital marketing solutions"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200">
              <img
                src={videoSrc ? resolveImage(videoSrc) : video}
                alt="Video"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl p-10 border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-slate-100">
                    <img
                      src={displayTestimonials[active]?.image}
                      alt={displayTestimonials[active]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1c1c1e] text-[18px]">{displayTestimonials[active]?.name}</h4>
                    <p className="text-xs text-slate-500">{displayTestimonials[active]?.designation}</p>
                  </div>
                </div>

                <div className="relative">
                  <span className="text-[48px] text-[#e31e24]/20 font-serif leading-none absolute -left-4 -top-6">❝</span>
                  <p className="text-[16px] leading-relaxed text-[#4b5563] italic pl-6 pr-4">
                    {displayTestimonials[active]?.text}
                  </p>
                  <span className="text-[48px] text-[#e31e24]/20 font-serif leading-none absolute right-0 -bottom-6">❞</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6 pl-6">
                {displayTestimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      active === index ? "w-6 bg-[#e31e24]" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}