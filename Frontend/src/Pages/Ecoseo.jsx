import React, { useEffect, useState, useRef } from "react";


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
import eimage from "../assets/BannerImg/Ecommerce.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const Ecoseo = () => {
  const { content: c } = usePageContent("Eco-SEO");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const impactData = c?.impact;
  const video = c?.video;
  const dominate = c?.dominate;
  const whyBusiness = c?.whyBusiness;
  const faqSection = c?.faqSection;

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
        "When we started working on Moti Mahal Delux, none of the targeted franchise-related keywords were visible on Google. There were no dedicated SEO pages, limited content depth, and technical and on-page gaps restricting search visibility. Our team suggested new SEO-focused pages, created optimised content, fixed technical and on-page issues, and executed high-quality link building to strengthen authority. As a result, the website achieved 100% keyword visibility, with all targeted keywords now ranking on the first page of Google – most within the top 5 positions."]
    }
  ];
  const services = [

    {
      icon: seoIcon,
      title: "Ecommerce Strategy",
      description:
        "After a comprehensive SEO audit, we recommend the tailored Ecommerce SEO services to our clients. The process involves product optimization, content optimization, and modern practices to improve website’s visibility.",
    },

    {
      icon: socialIcon,
      title: "Ecommerce SEO",
      description:
        "The process involves product optimization, link building, on-page optimization, and customized white-hat SEO strategies to improve the organic traffic of the website.",
    },

    {
      icon: ppcIcon,
      title: "PShopping Ads",
      description:
        "With our well-optimized shopping ads, we ensure that the product visibility gets increased and high-intent buyers are attracted to your marketplace. We focus on improving organic traffic, boosted online sales and improved click-through rates.",
    },

    {
      icon: webIcon,
      title: "Meta Shopping Ads",
      description:
        "To improve the visibility of your products on Facebook and Instagram, our Meta Shopping ads target high-intent audience while increasing the product discovery through data-driven campaigns.",
    },

    {
      icon: contentIcon,
      title: "Content Optimisation",
      description:
        "We optimize categories, metadata, and product pages by using the high-search volume keywords in content optimisation. These services ensure improved user experience, better conversion & organic traffic and increased brand visibility.",
    },

    {
      icon: ormIcon,
      title: "Technical SEO",
      description:
        "The comprehensive technical SEO audit helps us in understanding the scope of improvement in the website related to page speed, site structure, mobile friendliness and indexing. Based on the observations, we recommend the tailored SEO strategies to improve the visibility of website and provide seamless shopping experience to users.",
    }];

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
      icon: Icon2,
      title: "Make More Sales",
      desc: "We help you convert maximum possible leads into sales and grow your business faster",
    },

    {
      icon: Icon3,
      title: "Build Brand Awareness",
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
      question: "What is Ecommerce SEO and why is it necessary for businesses?",
      answer:
        "The visibility of online store increases and organic traffic increases while improving the user experience when the Ecommerce SEO services are availed. The brand credibility, sales and conversion rate of business also improve through the consistent optimization.",
    },
    {
      question:
        "How soon can I expect results from Ecommerce SEO?",
      answer:
        "The timeline of SEO results is variable depending on the distinct business goals, scope of optimisation and long-term growth of Ecommerce businesses.",
    },
    {
      question:
        "What are the services offered by the best Ecommerce SEO agency in Delhi?",
      answer:
        "The best Ecommerce SEO agency in Delhi, Digicore Inc. provides on-page optimisation, product page optimisation, technical SEO audit, and link building services for improved visibility and consistent business growth.",
    },
    {
      question:
        "How does Digicore Inc. ensure growth with Ecommerce SEO?",
      answer:
        "At Digicore Inc., our seasoned professionals provide tailored Ecommerce SEO strategies to improve product visibility. We consistently track performance metrics, and boost organic traffic to increase conversion rate and revenue growth.",
    }
  ];

  const displayFaq = c?.faqSection?.faq?.length ? c.faqSection.faq : faqData;


  return (
    <div className="bg-white">
      <Banner
        title={banner?.title || "Best Ecommerce SEO Agency to convert traffic, drive revenue and build brand credibility"}
        description={banner?.description || "Digitization of business is rapidly evolving to improve the user experience. No matter which stream of business you are in, reaching your target audience efficiently is crucial. This is where Digicore Inc., the best Ecommerce SEO company helps your company in top search results through tailored services."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
          
          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {about?.heading || "Best ECOMMERCE SEO Agency"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {about?.body || "In the digital landscape, it is essential for business to evolve online and adapt to the modern changes to strengthen business visibility. At Digicore Inc., we are a team of highly qualified Ecommerce SEO professionals that attracts potential customers further driving conversion, revenue and improved brand presence. With our result driven approach, we ensure your product or services appear online every time the user searches for a reliable brand. Being the trusted Ecommerce SEO agency with more than a decade’s experience and a consistent track record to deliver tailored SEO services, we continue to incorporate modern tools. From the optimal use of AI, and voice search optimization to image based searches, we cater to diverse ecommerce SEO requirements."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibility?.heading || "Build a great digital experience with Best Ecommerce SEO agency"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibility?.body || (<>With the increase in the online shopping preferences, businesses need to keep their website updated and SEO-friendly. Besides, to address the efficient, easily navigable and productive browsing requirements of users, the new-age ecommerce SEO services need to be availed.
                <br /><br />
                Digicore Inc., the top Ecommerce SEO agency based in Delhi instils the power of AI in the SEO practices. The comprehensive strategies aimed at addressing smart search suggestions, improving engagement and providing real-time support make our ecommerce SEO services reliable.</>)}
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
            {seoAgency?.heading || "Why Do I Need an E-commerce SEO Agency For My Online Store"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto mb-16">
            {seoAgency?.description || "Digicore Inc. is the best Ecommerce SEO company in Delhi that helps clients in adapting new trends and buyer behaviour through data-driven services. We help all sized businesses in improving online visibility, optimize the website according to the search intent and incorporate the modern tools in the customized Ecommerce SEO services."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-[#e31e24] font-heading font-extrabold mb-3">
                  {seoAgency?.problemTitle || "The Problem"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.problemText || "Website has poor online visibility, lesser product discoverability, and low organic traffic that totally affects user experience."}
                </p>
              </div>

              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-emerald-600 font-heading font-extrabold mb-3">
                  {seoAgency?.solutionTitle || "The Solution"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.solutionText || "With the modern approach involving AI and the other advanced tools, Ecommerce SEO services address the visibility and product optimization. At Digicore Inc., we focus on improved engagement and brand building through 360-degree SEO methodology for ecommerce business."}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563] lg:pt-2">
              <p>
                {seoAgency?.rightParagraph || (<>We leverage the power of AI, visual search, smart search recommendations and optimize your Ecommerce business. At Digicore Inc., our professionals ensure the organic traffic, conversion and sales of your business increase consistently through the top Ecommerce SEO services. Considering the changing buyer preferences, we count on AI to innovate SEO tactics in Ecommerce.
                <br /><br />
                Be it the diverse and increased customer expectations, data overload or accessibility to various tools and platforms, our AI driven and future-ready methodology delivers the sustainable growth for Ecommerce businesses. Digicore Inc. believes in transforming the user’s journey while accessing the online marketplace with a variety of products through website optimization. From personalized product recommendations, AI chatbots & virtual assistants, smart site search, and inventory optimization to fraud detection, our best Ecommerce SEO services assure smooth user experience. </>)}
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
            {discover?.heading || "Our Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {discover?.description || "Improve your brand visibility, product discoverability and boost sales through smart Ecommerce SEO services backed by AI and the modern tools. Partner with Digicore Inc. to optimally utilize the benefits of Artificial Intelligence, personalization and intelligent automation in Ecommerce. Optimize your Ecommerce business through the strategic implementation of AI-powered content creation and advanced SEO applications."}
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

      {/* Impact Section */}
      <section className="w-full py-24 px-5 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[350px] h-[350px] rounded-full bg-[#fee2e2] -z-10 animate-pulse"></div>
            <img
              src={impact}
              alt="Impact"
              className="max-w-full h-auto rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100 object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-[#e5e7eb] space-y-8">
              {(impactData?.items?.length ? impactData.items : [
                {
                  title: "Marketing companies",
                  desc: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co",
                },
                {
                  title: "SEO and PPC",
                  desc: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
                },
                {
                  title: "Google Premier Partner",
                  desc: "We are a Google Premier Partner since 2017. This means we’re are one of Top 50 PPC Companies in India from 4000 odd Digital Marketing agencies that have partnered with Google.",
                },
                {
                  title: "Search engine optimization",
                  desc: "Our SEO professionals have decades of experience providing results to clients and sound knowledge of the latest search engine optimization trends.",
                },
              ]).map((item, index) => (
                <div className="relative group" key={item.id || index}>
                  <div className="absolute -left-[37px] top-1.5 w-[10px] h-[10px] rounded-full bg-slate-300 group-hover:bg-[#e31e24] group-hover:scale-125 transition-all duration-300"></div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#e31e24] transition-colors duration-300 mb-1">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-20 px-5 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
          
          <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-12">
            {video?.title || "SEO is not just about ranking on Google — it’s about connecting your brand across every platform where your customers search."}
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

      {/* Dominate Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {dominate?.heading || "How We Grow Your E-commerce Sales & Revenue"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {dominate?.description || "At Digicore Inc., we ensure data-driven Ecommerce SEO services to increases sales and revenue of all-sized Ecommerce businesses. With an objective to improve visibility, enhance traffic quality, and boost conversion rate, we optimize product pages and categories while fixing the technical issues of the website. Our professionals utilize conversion based UX improvements to improve the user experience and help then find the right product. Connect with us to benefit from competitor analysis, performance tracking and scalable SEO strategies for consistent ecommerce revenue growth."}
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
            {whyBusiness?.heading || "Why Business Choose Digicore Inc. for Ecommerce SEO services?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyBusiness?.description || "Digicore Inc. has an extensive industrial experience in Ecommerce SEO services with a consistent record of providing tailored services. With a comprehensive Ecommerce SEO audit, we ensure all the aspects of store optimization are properly aligned with the business goals of clients. From technical website analysis, link building, on-page optimisation and category & product optimisation to consistent performance tracking, our best Ecommerce SEO services address all the aspects. Experience the maximum transparency, client centric approach and choose affordable Ecommerce SEO packages by partnering with us!"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="why-left space-y-4">
              <ul className="space-y-3.5">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "We provide customized Ecommerce SEO strategies" },
                  { text: "keeping in mind the business goals and target audience of clients" },
                  { text: "We assure maximum transparency by informing clients about the status and measurable results." },
                  { text: "Our SEO professionals strictly adhere to the white hat SEO guidelines" },
                  { text: "We provide constant support and optimisation services for sustainable business growth" },
                  { text: "Fully-managed Ecommerce SEO services we offer are competitively priced according to diverse business requirements and budget" },
                  { text: "Result-driven Ecommerce SEO strategies with proven results and improved visibility are assured to clients" },
                  { text: "Save time and money by availing our professional Ecommerce SEO services" },
                  { text: "Strengthen your brand presence and improve mobile friendliness of your website" },
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

      {/* Tools Showcase */}
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
            <h2 className="text-[36px] font-heading font-extrabold text-[#1c1c1e] uppercase">
              {faqSection?.heading || "ECOMMERCE SEO FAQS"}
            </h2>
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

export default Ecoseo;
