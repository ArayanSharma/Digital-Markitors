import React, { useEffect, useState, useRef } from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

import impact from "../assets/impact.webp";

import seoRimg from "../assets/real-seo-result.webp";
import heroImg from "../assets/a.png";
import graphImg from "../assets/graph-l.webp";

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
import eimage from "../assets/BannerImg/AiSeo2.png";

import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

const AiSeo = () => {
  const { content: c } = usePageContent("ai-seo");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const video = c?.video;
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

  const services = [
    {
      icon: seoIcon,
      title: "AI SEO STRATEGY",
      description:
        "We offer customized SEO strategies to help businesses improver their online presence, attract high-quality, relevant traffic and leave a lasting impression.",
    },
    {
      icon: socialIcon,
      title: "AI SEARCH CONSULTANCY",
      description:
        "We provide premium AI Search Consultancy services designed to elevate your brand’s visibility, boost rankings, and attract the right audience from around the world.",
    },
    {
      icon: ppcIcon,
      title: "GEO SEO",
      description:
        "GEO SEO is for those who wish to maximize their store visibility, attract high-intent shoppers across various platforms and improve their ROI.",
    },
    {
      icon: webIcon,
      title: "AEO SEOs",
      description:
        "Strengthening brands with robust data-driven strategies designed to boost their website’s visibility in national search results and drive high-quality traffic.",
    },
    {
      icon: contentIcon,
      title: "TECHNICAL",
      description:
        "Using AI-driven analysis, we optimize your site’s structure, speed and usability to ensure your customers keep returning to your site not just for the product but for the unique experience.",
    },
    {
      icon: ormIcon,
      title: "ChatGPT Optimization",
      description:
        "Achieve maximum visibility in specific geographic locations with our tailored GEO SEO that intelligently combines advanced local and global SEO strategies.",
    },
    {
      icon: listenIcon,
      title: "Perplexity Optimization",
      description:
        "Our Perplexity Optimization services are curated specifically for brands to ensure their content remains visible and credible on AI platforms like Perplexity AI.",
    },
    {
      icon: croIcon,
      title: "Gemini Optimization",
      description:
        "Get your content optimized for the new AI search with our Gemini Optimization Services and let your audience find and engage with your brand effortlessly.",
    },
    {
      icon: geoIcon,
      title: "Google AI Mode Optimization",
      description:
        "We ensure your brand stays visible, relevant and authoritative in AI-driven search with our cutting-edge Google AI Mode Optimization services.",
    },
  ];

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

  const faqData = [
    {
      question: "What is AI SEO and how is it different from traditional SEO?",
      answer:
        "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
    },
    {
      question: "Do I still need traditional SEO if I invest in AI SEO?",
      answer:
        "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
    },
    {
      question: "Will AI SEO help in generating leads or only visibility?",
      answer:
        "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
    },
    {
      question: "How do you track performance in AI SEO?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
    {
      question: "Is AI SEO suitable for all types of businesses?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
  ];

  const displayServices = c?.services?.length
    ? c.services.map((s) => ({ ...s, icon: resolveImage(s.icon) }))
    : services;

  const displayIndustries = c?.industries?.length
    ? c.industries.map((i) => ({ ...i, image: resolveImage(i.image) }))
    : industries;

  const displayDominateCards = dominate?.cards?.length
    ? dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon), desc: card.desc }))
    : helpCards;

  const displayFaq = c?.faq?.length ? c.faq : faqData;

  return (
    <>
      <Banner
        title={banner?.title || "SEO Agency in Delhi That Drives Traffic, Trust, and Conversions"}
        description={banner?.description || "We are  Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      <section className="about-section">
        <div className="divider"></div>
        <div className="about-container">
          <h1>
            {about?.heading || "AI SEO That Drives Measurable Business Growth"}
          </h1>
          <p>
            {about?.body || "Digicore Inc. is the best AI SEO company in Delhi. We provide the most advanced AI SEO services and help businesses improve their brand visibility in AI-powered searches. We think and go beyond traditional searches – using powerful strategies to make sure your content shows up across popular AI platforms, including ChatGPT, Gemini, Perplexity and Google’s AI-powered search."}
          </p>
        </div>
      </section>

      <section className="visibility-section">
        <div className="visibility-container">
          <div className="visibility-content">
            <h2>
              {visibility?.heading || "Lead Every Search with Delhi’s Most Trusted SEO Agency"}
            </h2>
            <p>
              {visibility?.body || "In this era of AI a lot has changed, including the way people search online. Modern consumers just don’t rely on single platform for searching brands. They search across multiple touchpoints, such as Google, social media, online marketplaces, video platforms and even AI-powered recommendations. Being visible everywhere is now more important than ever."}
            </p>
            <div className="orange-line"></div>
          </div>
          <div className="visibility-image">
            <img src={visibility?.image ? resolveImage(visibility.image) : graphImg} alt="Graph" />
          </div>
        </div>
      </section>

      <div className="about-container">
        <div className="divider"></div>
        <h1>
          {video?.title || "AI Is Ruling Search – Make Sure To Position Your Brand To Be Discovered In This New Era"}
        </h1>
        <section className="video-section">
          <div className="video-container">
            <iframe
              src={video?.url || "https://www.youtube.com/embed/RugY9uuIJhY"}
              title=" Digicore Inc Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      <section className="performance-section">
        <div className="performance-container">
          <div className="performance-left">
            <h2>{performance?.labelTrack || "TRACK"}</h2>
            <h2>{performance?.labelAnalyze || "ANALYZE"}</h2>
            <h2>{performance?.labelScale || "SCALE"}</h2>
            <h2>{performance?.labelRepeat || "REPEAT"}</h2>
          </div>
          <div className="performance-right">
            <img src={performance?.image ? resolveImage(performance.image) : seoRimg} alt="SEO Performance" />
          </div>
        </div>
      </section>

      <section className="seo-agency-section">
        <div className="seo-container">
          <div className="seo-heading">
            <div className="seo-line"></div>
            <h2>{seoAgency?.heading || "Why Do I Need an AI SEO Agency"}</h2>
            <p>
              {seoAgency?.description || "In this era where AI is ruling the search platforms being visible wherever your customers are looking for you have become more important than ever."}
            </p>
          </div>

          <div className="seo-content">
            <div className="seo-left">
              <h3>{seoAgency?.problemTitle || "The Problem"}</h3>
              <p>
                {seoAgency?.problemText || "Today, search is no longer just typed—it’s asked, suggested and predicted. Study reveals that over 70% of users use AI tools to conduct online search."}
              </p>
              <h3>{seoAgency?.solutionTitle || "The Solution"}</h3>
              <p>
                {seoAgency?.solutionText || "AI SEO is the only solution to stay ahead, stay competitive and stay relevant in this era. Being visible across multiple platforms, including AI-powered recommendations is especially important when people are comparing options and making decisions."}
              </p>
            </div>

            <div className="seo-right">
              <p>
                {seoAgency?.rightParagraph1 || "Digicore Inc. is a leading AI SEO company in Delhi, NCR, providing top-notch AI SEO Services to businesses. We offer cutting-edge AI SEO Strategies to help brands lead in this AI-driven era with ease."}
              </p>
              <p>
                {seoAgency?.rightParagraph2 || "By combining human insight with smart AI, we make sure your brand is seen at the right time, on the right platform and with the right message—today and always!"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {discover?.heading || "Our AI SEO Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {discover?.description || "SEO is not just limited to Google Search at Digicore Inc.. We help business unlock their brand’s full digital potential by using AI-powered strategies and help them connect, engage and inspire their audience the right way and at the right platform."}
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

      <section className="why-choose-sec" style={{
        backgroundImage: `url(${whyChoose?.backgroundImage ? resolveImage(whyChoose.backgroundImage) : bgIcon})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="div-content">
          <h1>
            {whyChoose?.heading || "Stop Guessing. Start Growing. Book Your Strategy Call Now."}
          </h1>
          <div className="choose-btns">
            <a href={whyChoose?.button1?.link || "#"} className="light-btn">
              <img src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png" alt="whatsapp" />
              {whyChoose?.button1?.text || "+91 98188 88064"}
            </a>
            <a href={whyChoose?.button2?.link || "#"} className="light-btn">
              {whyChoose?.button2?.text || "REQUEST A CALLBACK"}
            </a>
          </div>
        </div>
      </section>

      <section className="dominate-section">
        <div className="dominate-heading">
          <h2>{dominate?.heading || "How Can We Help You Grow"}</h2>
          <div className="dominate-line"></div>
          <p>
            {dominate?.description || "Digicore Inc. is a leading AI SEO company in Delhi, NCR. We craft unique AI SEO strategies for each of our clients to help them grow and thrive in highly competitive AI-driven search."}
          </p>
        </div>

        <div className="dominate-cards">
          {displayDominateCards.map((item, index) => (
            <div className="dominate-card" key={item.id || index}>
              <div className="dominate-icon">
                <img src={item.icon} alt={item.title} className="dominate-icon-img" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-business-section" style={{ backgroundColor: "#fff" }}>
        <div className="why-business-container">
          <div className="why-business-heading">
            <div className="divider"></div>
            <h2>
              {whyBusiness?.heading || (<>Why Choose Digicore Inc. as YOUR<br />AI SEO AGENCY</>)}
            </h2>
            <p>
              {whyBusiness?.description || "Digicore Inc. is a leading AI-first digital marketing company in Delhi NCR. We offer an extensive range of digital marketing and SEO services, including AI SEO."}
            </p>
          </div>

          <div className="why-business-content">
            <div className="why-left">
              <ul>
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "We design future-ready strategies to ensure long-term visibility and relevance." },
                  { text: "All our strategies are curated by our highly skilled and experienced AI SEO experts." },
                  { text: "We believe in pure work – every decision is powered by real insights, analytics and performance data." },
                  { text: "We ensure your brand shows up across AI platforms, social channels and marketplaces." },
                  { text: "We design SEO strategies with today’s search in focus and tomorrow’s opportunities in sight." },
                  { text: "We deliver results you can trust and clearly measure." },
                ]).map((item, index) => (
                  <li key={item.id || index}>✔ {item.text}</li>
                ))}
              </ul>
            </div>
            <div className="why-right">
              <img src={whyBusiness?.image ? resolveImage(whyBusiness.image) : graphImg} alt="Graph" />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <h2>FAQ</h2>
          <div className="faq-line"></div>
        </div>

        <div className="faq-container">
          {displayFaq.map((faq, index) => (
            <div key={faq.id || index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {activeIndex === index ? <Minus size={28} /> : <Plus size={28} />}
              </button>
              <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div>
        <Contacts />
      </div>
    </>
  );
};

export default AiSeo;
