import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

import impact from "../assets/impact.webp";

import seoRimg from "../assets/real-seo-result.webp";
import heroImg from "../assets/a.png";
import graphImg from "../assets/graph-l.webp";
import Industry from "../Components/Sections/Industry";
import Casestudy from "../Components/Sections/Casestudy";

import seoIcon from "../assets/seo-o.webp";
import socialIcon from "../assets/social-o.webp";
import ppcIcon from "../assets/finger-up-o.webp";
import webIcon from "../assets/ad-o.webp";
import contentIcon from "../assets/pen-tab-o.webp";
import ormIcon from "../assets/head-s-0.webp";
import listenIcon from "../assets/head-pc-o.webp";
import croIcon from "../assets/dolar-o.webp";
import AeoIcon from "../assets/aeo-o.webp";
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
import eimage from "../assets/BannerImg/SEOServices.png";

 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 import { usePageContent, resolveImage } from "../hooks/usePageContent";

const Aeo = () => {
  const { content: c } = usePageContent("Aeo");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const about2 = c?.about2;
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
    "When DHI International partnered with us, the objective was clear – strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved strong growth in organic traffic, keyword rankings, and search visibility – transforming SEO into a reliable lead-generation channel."    ]
  },

  {
    title: "Rizaries SEO Case Study: 613% Growth in Organic Traffic",
    image: seocase,
    descriptions: [
    "Rizaries is a Shopify-based home furnishings brand selling rugs, mats, and cushion covers. The objective was to increase organic traffic, improve keyword rankings, and scale SEO as a primary sales channel. At the start, organic visibility was limited and most keywords were ranking beyond the first page. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings, and capture high-intent non-branded searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver."
    ]
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
          title: "Understand AI Search",
          description:
            "After auditing the website’s visibility on AI platforms, we create informative, yet problem-solving content with improved citations while checking the competitors’ positioning to deliver AI optimized search results.",
        },
    
        {
          icon: socialIcon,
          title: "Question-Based Content Optimization",
          description:
            "Unlike the traditional content focusing on the business information, our AEO SEO experts cover possible queries asked by the users. Depending on the nature of business, we figure out how the website should cover the relevant business details related to the localized questions.",
        },
    
        {
          icon: ppcIcon,
          title: "Featured Snippet Optimization",
          description:
            "We prepare featured snippets under 50 words, bulleted information, avoiding jargons, and maintaining conversational language to make AEO SEO services beneficial for business growth.",
        },
    
        {
          icon: webIcon,
          title: "Schema & Structured Data Implementation",
          description:
            "Our strategically planned Schema Markup enables the search engine to interpret the business information accurately. This improves the quality of search results when product schema, FAQ and local target audience are worked over.",
        },
    
        {
          icon: contentIcon,
          title: "Voice Search Optimization",
          description:
            "Our best AEO SEO services ensure the content is optimized in conversational and engaging style to address voice-based queries. This improves brand’s visibility in AI search results and voice searches.",
        },
    
        {
          icon: ormIcon,
          title: "Technical SEO",
          description:
            "We resolve all the technical SEO issues of the website according to Google’s AI Parameters to index webpages and crawling properly.",
        }
      ];

  const displayServices = c?.services?.length
    ? c.services.map((s) => ({ ...s, icon: resolveImage(s.icon) }))
    : services;

 const industries = [
  {
    image: i1,
    title: "Healthcare",
    desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.",
  },

  {
    image: i2,
    title: "E-Commerce",
    desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.",
  },

  {
    image: i3,
    title: "Travel",
    desc: "We offer a complete suite of digital marketing solutions for travel brands, helping them showcase their offerings in a unique way and drive bookings.",
  },
  {
    image: i1,
    title: "Healthcare",
    desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.",
  },

  {
    image: i2,
    title: "E-Commerce",
    desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.",
  },

  {
    image: i3,
    title: "Travel",
    desc: "We offer a complete suite of digital marketing solutions for travel brands, helping them showcase their offerings in a unique way and drive bookings.",
  },
];

 const helpCards = [

  {
    icon: Icon1,
    title: "Get More Leads",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: Icon2 ,
    title: "Increased sales",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
    title: "Improved Brand Awareness",
    desc: "We help your brand gain strong recognition across digital platforms globally",
  },

  {
    icon: Icon4,
    title: "Upskill Your Team",
    desc: "Improve your team capabilities with advanced marketing strategies and guidance",
  },

];

  const displayDominateCards = c?.dominate?.cards?.length
    ? c.dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
    : helpCards;

const faqData = [
  {
    question: "What is Aeo, and why does my business need it now?",
    answer:
      "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
  },
  {
    question:
      "if my website already ranks on Google, why should I invest in Aeo",
    answer:
      "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
  },
  {
    question:
      "How long does it take to see results from Aeo SEO services?",
    answer:
      "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
  },
  {
    question:
      "Is Aeo SEO suitable for small and mid-sized businesses?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } ,
  {
    question:
      "Can Aeo actually generate leads, or is it only for visibility?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
   ,
  {
    question:
      "How does Digital Makitors track Aeo performance?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
   ,
  {
    question:
      "Is Aeo SEO effective for service-based businesses like agencies or consultants?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 

];

  const displayFaq = c?.faq?.length ? c.faq : faqData;

  return (
    <div className="bg-white">
      <Banner
        subtitle={banner?.subtitle}
        title={banner?.title || "AEO SEO Agency That Improve visibility, Traffic, and Conversion"}
        description={banner?.description || "Being the best SEO company in Delhi NCR – Digicore Inc. integrates AI-powered solutions to improve the visibility of brands in AI-generated search results through best AEO SEO practices."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
          
          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {about?.heading || "AEO SEO AGENCY FOR AIO"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {about?.body || "At Digicore Inc., we emphasize on the growing requirements of digital marketing. To address the queries of users directly, our AEO SEO services are aimed at improving the search visibility of websites. Be it the structured content, informative snippet, summaries available on Google or AI-powered platforms, the whole idea of AEO is to provide direct answers to the users. However, it is important for the search engine to interpret the optimized information precisely. This is where the expertise of Digicore Inc. helps clients in improving the quality of answers shared online. We ensure that the top AEO SEO services boost the quality of structured answers, provide content clarity and thereby, improving the credibility of the brand."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibility?.heading || "Stay on top in the search results with AEO SEO Agency"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibility?.body || "With the rapidly evolving changes in the digital marketing segment, AI SEO practices add clarity to the search results. We blend our decade’s excellence and the new-age AI standards to improve the visibility of website on the multiple search platforms and AI websites. We constantly help our clients to connect with the potential customers by interpreting their queries through exact information. Apart from the traditional SEO services, we are integrating the power of AI to drive conversion efficiently. Being the top AEO SEO agency in Delhi, Digicore Inc. focuses on consistently improving the brand’s ranking by understanding the query of users and optimizing the search results, accordingly. Our organic search results are not limited to multiple leads, instead, focused and result-driven approach of AEO services are offered to the clients. In short, knowing what customers are looking for in your brand is clearly optimized through diverse AEO services."}
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
          
          <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {video?.title || "Understanding AEO SEO services and their relevance in digital marketing"}
          </h2>

          <p className="text-[16px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-12">
            {about2?.body || "Digicore Inc., the leading SEO company in Delhi has always delivered beyond the expectations of clients. Whether it is through the top practices of keyword research, SEO services or the other digital marketing services, the objective is to improve the ranking and visibility of website consistently. Currently, we have harnessed the power of AI-SEO solutions to help brands lead the search results. Our AEO SEO services help businesses get noticed by their potential customers."}
          </p>

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
            {seoAgency?.heading || "Why is AEO SEO necessary for all-sized businesses?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto mb-16">
            {seoAgency?.description || "Digicore Inc. is a leading SEO company in Delhi, NCR. We help brands in their journey from being invisible to become unmissable. We deliver AI-powered SEO strategies that help brands lead the market and stay ahead in a constantly evolving digital landscape."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-[#e31e24] font-heading font-extrabold mb-3">
                  {seoAgency?.problemTitle || "The Problem"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.problemText || "Most of the businesses often face challenges in improving brand’s visibility in AI-search results. The need to provide direct answers to users relying on AI-platforms like ChatGPT, Gemini or Perplexity, for brand information."}
                </p>
              </div>

              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-emerald-600 font-heading font-extrabold mb-3">
                  {seoAgency?.solutionTitle || "The Solution"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.solutionText || "We provide customized Answer Engine Optimization (AEO) services by structuring content for commonly asked questions. We focus on direct answers and authoritative signals to improve the visibility and trust factor of brand in AI-generated responses. Digicore Inc. follows updated algorithms, user behaviour shifts and AI-search optimization to improve brand’s visibility. We help brands by implementing the well-tailored AEO SEO plan. Our experts also ensure the brand is discoverable on AI-search websites and applications."}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563] lg:pt-2">
              <p>
                {seoAgency?.rightParagraph1 || "Our AEO SEO service targets long-term visibility to improve content clarity and credibility. All our strategies are backed by real-time search behavior, performance insights and structured content. We focus on boosting your brand's potential and prospects for AI-search visibility."}
              </p>
              <p>
                {seoAgency?.rightParagraph2 || "Our top AEO SEO services are aligned with the client’s business growth goals of different industries. Apart from the excellent and consistent record in serving all-sized businesses, we also integrate the power of AI. We complement AEO SEO practices with our unmatched and ethical digital marketing services, backed by insights, analytics, and performance data. We emphasize on the sustainable growth of brands by aligning SEO with AEO and GEO strategies. Our data-driven approach improves brand’s search visibility in AI-generated summaries, comparisons and answers."}
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
            {discover?.heading || "AEO SEO Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {discover?.description || "At Digicore Inc., we don’t just offer SEO services—we become your trusted digital growth partner. As pioneers in the digital marketing landscape, we’ve been empowering brands with our AI-powered, data-driven SEO services and helping them connect and engage the right audience."}
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
                className="w-5 h-5 rounded-full bg-[#22c55e] p-[3px] object-contain"
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
            {c?.dominate?.heading || "How Can We Help You Grow"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {c?.dominate?.description || "Digicore Inc. is a top AEO SEO agency in India known for its business excellence and result-driven approach. Our seasoned SEO professionals provide customized solutions aimed at improving online visibility of the brand. Apart from using the best-in-class and ethical SEO practices, we recommend the top AEO plan to our client based on their business requirements. We offer the best AEO SEO services by incorporating technical SEO, refining the content clarity, strategic link building and delivering the answer-focused content. We rely on data-driven and the other cutting-edge AEO SEO practices to make clients’ business growth consistent & efficient."}
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
            {whyBusiness?.heading || (<>Why Choose Digicore Inc. as YOUR<br />AEO SEO AGENCY</>)}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyBusiness?.description || "Digital Marketing is a Delhi-based AEO SEO company that leverages the power of AI to provide comprehensive digital marketing services. We focus on the long-term SEO practices rather than assuring the short-term brand positioning or better rankings. Our data-driven and cutting-edge AEO SEO services ensure consistent higher visibility in the search results and on AI platforms. Our 360-degree search optimization helps brands in connecting with their audience irrespective of the diverse platforms used. From Google to social media, AI-search applications to online marketplaces, we blend best AEO SEO strategies and industry-wise excellence to enhance the visibility of business. Our transparent and sure-shot search optimization practices have helped us in gaining the trust of our clients. The list of reasons that contribute to our credibility and prominence in the digital marketing landscape include: "}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="why-left space-y-4">
              <ul className="space-y-3.5">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "Seasoned SEO specialists with extensive experience customize the SEO solutions according to the clients’ business requirements." },
                  { text: "We ensure the measurable results are blended with the latest SEO practices to optimally improve brand’s visibility." },
                  { text: "Our transparency, clarity and goal-focused approach keeps the clients updated through data-driven report of AEO SEO progress." },
                  { text: "We ensure result-driven and customized AEO SEO services to efficiently address the business goals." },
                  { text: "Our high-quality keyword research and answer-focused content optimization makes us the reliable AEO SEO experts." },
                  { text: "We serve diverse industry while targeting the competitors positioning to improve the visibility of brand through AI-powered SEO services." },
                  { text: "Our AI-integrated SEO practices help businesses in improving trust-factor, higher ranks and prominent authority and consistent business growth." },
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

      {/* Testimonials Section */}
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
                  className={`bg-white border rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all duration-300 ${
                    isOpen ? "border-[#e31e24]/30 shadow-[0_12px_32px_rgba(227,30,36,0.08)]" : "border-slate-200 hover:border-[#e31e24]/20"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer bg-transparent border-0 select-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-slate-900 text-[15px]">{faq.question}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-[#e31e24] text-white" : "bg-[#e31e24]/8 text-[#e31e24]"
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

export default Aeo;
