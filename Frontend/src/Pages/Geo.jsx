import React, { useEffect, useState, useRef } from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

import impact from "../assets/impact.webp";

import seoRimg from "../assets/real-seo-result.webp";
import heroImg from "../assets/a.png";
import graphImg from "../assets/graph-l.webp";
import Casestudy from "../Components/Sections/Casestudy";

import seoIcon from "../assets/seo-o.webp";
import socialIcon from "../assets/social-o.webp";
import ppcIcon from "../assets/finger-up-o.webp";
import webIcon from "../assets/ad-o.webp";
import contentIcon from "../assets/pen-tab-o.webp";
import ormIcon from "../assets/head-s-0.webp";
import listenIcon from "../assets/head-pc-o.webp";
import croIcon from "../assets/dolar-o.webp";
import geoIcon from "../assets/aeo-o.webp";
import seocase from "../assets/seo-case-study-rezaries.webp";
import bgIcon from "../assets/bg-iconnew.webp";
import TestimonialSection from "../Components/Sections/Testimonials";
import Brands from "../Components/Sections/Brands";
import Tools from "../Components/Sections/Tools";
import Blogs from "../Components/Cards/BlogCard";
import Faq from "../Components/Sections/FAQ";
import Contacts from "../Components/Sections/Contact";
import { Plus, Minus } from "lucide-react";
import Icon1 from "../assets/h1.png";
import Icon2 from "../assets/h2.png";
import Icon3 from "../assets/h3.png";
import Icon4 from "../assets/h4.png";
import eimage from "../assets/BannerImg/GEOSEO.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

const Geo = () => {
  const { content: c } = usePageContent("GEO");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const video = c?.video;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const dominate = c?.dominate;
  const whyBusiness = c?.whyBusiness;

  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sliderRef = useRef(null);
  const scrollLeft = () => {
    const card = sliderRef.current.querySelector(".workindustry-card");

    if (card) {
      const cardWidth = card.offsetWidth + 40;
      sliderRef.current.scrollBy({
        left: -(cardWidth * 3),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const card = sliderRef.current.querySelector(".workindustry-card");

    if (card) {
      const cardWidth = card.offsetWidth + 40; // 40 = gap
      sliderRef.current.scrollBy({
        left: cardWidth * 3,
        behavior: "smooth",
      });
    }
  };






  useEffect(() => {

    let start = 0;

    const interval = setInterval(() => {

      start += 1;

      setCounts({
        count1: start <= 50 ? start : 50,
        count2: start <= 52 ? start : 52,
        count3: start <= 61 ? start : 61,
        count4: start <= 44 ? start : 44,
      });

      if (start >= 61) {
        clearInterval(interval);
      }

    }, 30);

    return () => clearInterval(interval);

  }, []);

  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
  };

  const prevCase = () => {
    setCurrentCase((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
  };

  const caseStudies = [
    {
      title: "DHI International SEO Case Study: 190% Growth in Organic Traffic",
      image: seocase,
      descriptions: [
        "When DHI International partnered with us, the objective was clear – strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved strong growth in organic traffic, keyword rankings, and search visibility – transforming SEO into a reliable lead-generation channel."]
    },

    {
      title: "Rizaries SEO Case Study: 613% Growth in Organic Traffic",
      image: seocase,
      descriptions: [
        "Rizaries is a Shopify-based home furnishings brand selling rugs, mats, and cushion covers. The objective was to increase organic traffic, improve keyword rankings, and scale SEO as a primary sales channel. At the start, organic visibility was limited and most keywords were ranking beyond the first page. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings, and capture high-intent non-branded searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver."]
    },

    {
      title: "Moti Mahal Delux SEO Case Study: 100% Keyword Visibility",
      image: seocase,
      descriptions: [
        "When we started working on Moti Mahal Delux, none of the targeted franchise-related keywords were visible on Google. There were no dedicated SEO pages, limited content depth, and technical and on-page gaps restricting search visibility. Our team suggested new SEO-focused pages, created optimised content, fixed technical and on-page issues, and executed high-quality link building to strengthen authority. As a result, the website achieved 100% keyword visibility, with all targeted keywords now ranking on the first page of Google – most within the top 5 positions."
      ]
    }
  ];
  const services = [

    {
      icon: seoIcon,
      title: "GENERATIVE AI RESULT & CITATION ANALYSIS",
      description:
        "We analyze AI-generated results to uncover visibility gaps, identify citation opportunities, and improve how AI engines reference and recommend your content.",
    },

    {
      icon: socialIcon,
      title: "AI-friendly Keyword Enhancement",
      description:
        "We optimize keywords for real user intent and AI understanding so that your content never gets overlooked in relevant AI answers and recommendations.",
    },

    {
      icon: ppcIcon,
      title: "Topical Authority Building",
      description:
        "With Topical Authority Building, we position your brand as the go-to expert so that AI systems and other search platforms rank it first in front of your audience.",
    },

    {
      icon: webIcon,
      title: "AIO CONTENT & STRUCTURED Q&A",
      description:
        "We create clear, easy to understand, AI-ready answers to the questions your audience is asking so AI systems understand, trust and recommend your content first.",
    },

    {
      icon: contentIcon,
      title: "TECHNICAL SEO",
      description:
        "We leverage AI to optimize your site’s structure, speed and usability to create a seamless experience that attract high-intent audience to your site.",
    },

    {
      icon: ormIcon,
      title: "SCHEMA & STRUCTURED DATA IMPLEMENTATION",
      description:
        "We simplify your website’s content for AI and search engines using precise structured markup, helping your pages appear in rich results, featured snippets and AI-generated answers.",
    },

    {
      icon: listenIcon,
      title: "DIGITAL PR & LINK-BUILDING",
      description:
        "Digicore Inc. help your brand earn authoritative mentions and backlinks so that search engines and AI systems recognize your expertise and trustworthiness.",
    },

    {
      icon: croIcon,
      title: "Brand Mentions & EEAT Signals",
      description:
        "Our Brand Mentions & EEAT services boost your credibility and authority to ensure both AI and other search platforms recognize and trust your brand.",
    },

    {
      icon: geoIcon,
      title: "PERFORMANCE TRACKING",
      description:
        "Digicore Inc.’ experts monitor your SEO, content and AI visibility in real time to ensure your website performs its best at all times.",
    },

  ];

  const displayServices = c?.services?.length
    ? c.services.map((s) => ({ ...s, icon: resolveImage(s.icon) }))
    : services;


  const industries = [

    {
      icon: "⏱",
      title: "B2B",
      desc: "We combine in-depth keyword research, competitive analysis and content optimization to ensure your brand appears in front of the audiences that matter most.",
    },

    {
      icon: "💼",
      title: "Financial & Professional",
      desc: "We optimize your website for search engines with authoritative content & high-intent keywords so you can build credibility, attract leads and drive engagement.",
    },

    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Providing AI-driven SEO Strategies to help marketplaces and retailers with improved rankings, increased sales and elevated brand’s online presence.",
    },

    {
      icon: "🛒",
      title: "E-Commerce",
      desc: "Providing AI-driven SEO Strategies to help marketplaces and retailers with improved rankings, increased sales and elevated brand’s online presence.",
    },

    {
      icon: "✈",
      title: "Travel",
      desc: "We offer specialized SEO solutions to help travel brands stand out in a crowded digital world and create the right experience for their customers.",
    },

    {
      icon: "🏨",
      title: "Hospitality",
      desc: "Offering high-quality SEO services tailored to the hospitality sector to help them stand out in search results, attract the right audience and drive bookings.",
    },

  ];

  const helpCards = [

    {
      icon: Icon1,
      title: "Get Measurable Results",
      desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
    },

    {
      icon: Icon2,
      title: "Drive High-Intent Traffic",
      desc: "We help you convert maximum possible leads into sales and grow your business faster",
    },

    {
      icon: Icon3,
      title: "Build Brand Authority",
      desc: "We help your brand gain strong recognition across digital platforms globally",
    },

    {
      icon: Icon4,
      title: "Get Maximum Visibility",
      desc: "Improve your team capabilities with advanced marketing strategies and guidance",
    },

  ];

  const displayDominateCards = c?.dominate?.cards?.length
    ? c.dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
    : helpCards;

  const faqData = [
    {
      question: "What is GEO, and why does my business need it now?",
      answer:
        "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
    },
    {
      question:
        "if my website already ranks on Google, why should I invest in GEO",
      answer:
        "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
    },
    {
      question:
        "How long does it take to see results from GEO SEO services?",
      answer:
        "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
    },
    {
      question:
        "Is GEO SEO suitable for small and mid-sized businesses?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
    {
      question:
        "Can GEO actually generate leads, or is it only for visibility?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    }
    ,
    {
      question:
        "How does Digital Makitors track GEO performance?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    }
    ,
    {
      question:
        "Is GEO SEO effective for service-based businesses like agencies or consultants?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    }

  ];

  const displayFaq = c?.faq?.length ? c.faq : faqData;

  return (
    <div className="bg-white">
      <Banner
        subtitle={banner?.subtitle}
        title={banner?.title || "GEO SEO Agency That Drives Traffic, Trust, and Conversions"}
        description={banner?.description || "Digicore Inc. is the best GEO SEO agency in India. We provide highest quality GEO SEO services in the region, ensure your success and growth in this new, AI-powered search era."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {about?.heading || "GEO SEO - Optimizing Brands For Platforms That Matter"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {about?.body || "Search is no longer limited to links. Today, it is shaped by intelligence. At Digicore Inc., we operate beyond traditional SEO, beyond links, beyond keywords to create authority that sustains an AI-first search world. Digicore Inc. is a renowned GEO SEO agency in Delhi, NCR. We focus on AI Optimization (AIO) so platforms like Google’s Search Generative Experience and ChatGPT don’t just notice your brand, but they also understand what makes you stand out so as to present it to the right audience. In this era where Artificial Intelligence is redefining how customers search, keywords alone are not just enough. You need clarity, credibility and contextual relevance to stand out in this highly competitive market. We align your content with how AI engines like ChatGPT, Gemini and Perplexity understand and respond to user queries to ensure you brand becomes easily discoverable and chosen by AI-driven search engines."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[24px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibility?.heading || "Become Visible, Trusted & Relevant With Digicore Inc. – Most Trusted GEO SEO Agency in India"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibility?.body || "Search behavior is changing very quickly. Instead of clicking multiple links, users today prefer AI assistants and generative search results. This makes investing in GEO SEO services crucial than ever. GEO SEO makes your business discoverable in the AI-first search environment. It ensures that AI not only finds you but also recognizes your authority and relevance. Using GEO SEO techniques, we optimize your content so it is accurately understood, trusted and presented by AI-powered search engines, answer engines and large language models. Unlike traditional SEO, which focuses only on rankings and keywords, GEO SEO ensures your brand and content are understood, cited and recommended by generative AI systems."}
              </p>
            </div>

            <div className="w-[120px] h-[4px] bg-[#e31e24] mt-10"></div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200">
            <img
              src={visibility?.image ? resolveImage(visibility.image) : graphImg}
              alt="Graph"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-20 px-5 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-12">
            {video?.title || "GENERATIVE SEARCH KEEPS YOUR BRAND ALIVE AND RESONANT IN THE AI ERA, TRANSFORMING VISIBILITY INTO TRUST AND TRUST INTO LASTING GROWTH."}
          </h2>

          <div className="w-full max-w-[900px] mx-auto rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 aspect-[16/9]">
            <iframe
              src={video?.url || "https://www.youtube.com/embed/RugY9uuIJhY"}
              title="Digicore Inc Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0 block"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="w-full p-0 m-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 w-full">
          <div className="bg-gradient-to-br from-[#8b0000] to-[#1c1c1e] min-h-[350px] flex flex-col justify-center px-12 py-[80px] lg:pl-[120px]">
            <h2 className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
              {performance?.labelTrack || "TRACK"}
            </h2>
            <h2 className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
              {performance?.labelAnalyze || "ANALYZE"}
            </h2>
            <h2 className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
              {performance?.labelScale || "SCALE"}
            </h2>
            <h2 className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
              {performance?.labelRepeat || "REPEAT"}
            </h2>
          </div>

          <div className="min-h-[390px] max-[992px]:min-h-[350px] max-[769px]:min-h-[250px] overflow-hidden">
            <img
              src={performance?.image ? resolveImage(performance.image) : seoRimg}
              alt="SEO Performance"
              className="w-full h-full block object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEO Agency Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[55px] h-1 bg-[#e31e24] mx-auto mb-[18px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-8 uppercase leading-tight">
            {seoAgency?.heading || "Why You Need a GEO SEO Agency"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-[#e31e24] font-heading font-extrabold mb-3">
                  {seoAgency?.problemTitle || "The Problem"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.problemText || "Traditional SEO is not just enough to thrive in this new, AI-driven search era. With only traditional SEO, you risk becoming invisible on places where your customers are searching – that’s AI-powered engines. AI-powered engines may not even look your content, significantly impacting your visibility, credibility and long-term growth."}
                </p>
              </div>

              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-emerald-600 font-heading font-extrabold mb-3">
                  {seoAgency?.solutionTitle || "The Solution"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.solutionText || "The solution is simple and clear – evolve beyond traditional SEO. GEO SEO is your only support system here. Optimizing content for how AI engines understand, evaluate and recommend information is now more than necessary in the era. The best GEO SEO agency in Delhi can help your brand stay discoverable, build authority and attract high-intent audience in this AI-first world."}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563] lg:pt-2">
              <p>
                {seoAgency?.rightParagraph1 || "The way people discover information is changing. AI-powered search engines like ChatGPT, Gemini, and Google’s Search Generative Experience do more than just showing links. They understand what people are really looking for. They summarize information and even suggest solutions – fundamentally changing how search works. Businesses that rely only on traditional SEO are sure to lose the game."}
              </p>
              <p>
                {seoAgency?.rightParagraph2 || "Traditional SEO isn’t enough to keep your brand visible in this new, AI-first world. A trustworthy GEO SEO agency in Delhi ensures your content is written not just for people, but also it is created to be comprehended, trusted and recommended by AI systems. At Digicore Inc., we help businesses stay visible across AI-driven platforms along with traditional search engines. We build real authority so AI recognizes your expertise and relevance and attract the right traffic to your site."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {discover?.heading || "Our GEO SEO Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {discover?.description || "Our GEO SEO services are designed to help your brand stay visible, credible and recommended on AI-powered search engines, including ChatGPT, Gemini and Google’s Search Generative Experience. We will optimize your digital presence so AI engines know your brand and what it makes it valuable."}
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {displayServices.map((service, index) => (
              <ServiceCard
                key={service.id || index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Why Choose Section */}
      <section className="relative overflow-hidden w-full py-20 px-5 bg-gradient-to-br from-[#1c1c1e] to-slate-900 text-center border-t border-b border-[#2b2b2e]">
        <div className="max-w-[1200px] mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-white max-w-3xl mx-auto leading-tight">
            {whyChoose?.heading || "Ready for More Traffic, Leads & Sales? Start SEO Now."}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whyChoose?.button1?.link || "#"}
              className="relative overflow-hidden inline-flex items-center gap-2 text-[#22c55e] font-bold px-[34px] py-[15px] rounded-lg bg-white border border-[#22c55e]/25 shadow-[0_6px_20px_rgba(34,197,94,0.16)] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a] hover:scale-[1.03] cursor-pointer"
            >
              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
                className="w-5 h-5 object-contain"
              />
              <span>{whyChoose?.button1?.text || "+91 98188 88064"}</span>
            </a>

            <a
              href={whyChoose?.button2?.link || "#"}
              className="relative overflow-hidden inline-flex items-center gap-2 bg-transparent border border-white text-white font-bold px-[34px] py-[15px] rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] cursor-pointer"
            >
              <span>{whyChoose?.button2?.text || "REQUEST A CALLBACK"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dominate Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {dominate?.heading || "How Can We Help You Grow"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {dominate?.description || "Digicore Inc. is a trustworthy GEO SEO company in the Delhi-NCR region. We help businesses thrive in the AI-first search era. We utilize cutting-edge SEO strategies, AI-driven insights and authoritative content optimization to boost your brand’s visibility, drive high-intent traffic and improve its credibility across both AI-driven and traditional search platforms. We build future-ready strategies that bring sure shot results and ensure your long-term success, visibility, credibility and relevance across multiple platforms, including ChatGPT, Perplexity and Google’s Search Generative Experience. We make sure you stay ahead of the competition today, tomorrow and in the future. With us, you will:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayDominateCards.map((item, index) => (
              <div
                className="group bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(227,30,36,0.1)] hover:border-[#e31e24]/20 transition-all duration-300 flex flex-col items-center text-center"
                key={item.id || index}
              >
                <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-[18px] font-bold text-[#2b2b2e] mb-3">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#4b5563]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section with Checklists */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 uppercase">
            {whyBusiness?.heading || (<>Why Choose Digicore Inc. as YOUR<br />GEO SEO AGENCY</>)}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyBusiness?.description || "Digicore Inc. is a leading GEO SEO Company in Delhi. Businesses choose us because we think outside-the-box and go beyond traditional optimization techniques. Using high-quality GEO SEO techniques, we make your brand unmissable, trusted and recommended across AI-driven and traditional search engines. We combine AI-driven insights, high-intent keyword strategies, structured content and authoritative link-building to deliver measurable results that drive traffic, leads and long-term growth. Ours is a future-ready approach that allow us to make your brand highly visible, trusted by AI systems and consistently recommended to the right audience, ensuring long-term growth and success. "}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="why-left space-y-4">
              <ul className="space-y-3.5">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "We are a team of highly expert and professional GEO SEO specialists" },
                  { text: "We build strategies that keep your brand visible, relevant and future-ready" },
                  { text: "All our strategies are backed by real insights, analytics and performance data" },
                  { text: "Our strategies are curated for today’s search and tomorrow’s growth" },
                  { text: "We help businesses move forward in this AI-powered search era" },
                  { text: "Measurable results are guaranteed with us that drive real business growth" },
                ]).map((item, index) => (
                  <li key={item.id || index} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]">
                    <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100">
              <img
                src={whyBusiness?.image ? resolveImage(whyBusiness.image) : graphImg}
                alt="Graph"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <div>
        <TestimonialSection />
      </div>

      {/* Brand Logos and Tools */}
      <div>
        <Brands />
      </div>

      <div>
        <Tools />
      </div>

      {/* Blogs Showcase */}
      <div>
        <Blogs />
      </div>

      {/* Accordion FAQ Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-b border-[#e5e7eb]">
        <div className="max-w-[850px] mx-auto">
          <div className="text-center mb-12">
            <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
            <h2 className="text-[36px] font-heading font-extrabold text-[#1c1c1e] uppercase">FAQ</h2>
          </div>

          <div className="space-y-4">
            {displayFaq.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={faq.id || index}
                  className={`bg-white border rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all duration-300 ${isOpen ? "border-[#e31e24]/30 shadow-[0_12px_32px_rgba(227,30,36,0.08)]" : "border-slate-200 hover:border-[#e31e24]/20"
                    }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer bg-transparent border-0 select-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-slate-900 text-[15px]">{faq.question}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-[#e31e24] text-white" : "bg-[#e31e24]/8 text-[#e31e24]"
                      }`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contacts Form footer */}
      <div>
        <Contacts />
      </div>
    </div>
  );
}

export default Geo;
