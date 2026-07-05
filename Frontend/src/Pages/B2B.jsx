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
import eimage from "../assets/BannerImg/b2b.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const B2B = () => {
  const { content: c } = usePageContent("b2b");
  const hero = c?.hero;
  const about = c?.about;
  const visibility = c?.visibility;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const impactSection = c?.impact;
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
      title: "SEO Audits",
      description:
        "The site health, performance, and structure are analyses to identify the scope of optimization & improvement.",
    },

    {
      icon: socialIcon,
      title: "B2B SEO Strategy Development",
      description:
        "The long-term SEO plans of B2B businesses according to their objectives, complex sales funnels, and buyer personas are tailored.",
    },

    {
      icon: ppcIcon,
      title: "Competitor Analysis",
      description:
        "The search visibility and content issues of competitors are analysed to formulate a strategic SEO plan",
    },

    {
      icon: webIcon,
      title: "Keyword Research & Mapping",
      description:
        "The long-tail, high-intent, and industry-specific keywords used by decision-makers are identified.",
    },

    {
      icon: contentIcon,
      title: "Content Optimization",
      description:
        "The SEO-friendly content of website is created or updated to improve relevance and rankings of the business.",
    },

    {
      icon: ormIcon,
      title: "B2B Content Strategy & Creation",
      description:
        "A variety of content including whitepapers, blogs, guides, and case studies are created in accordance to buyer’s search intent.",
    }
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
      title: "B2B",
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

  const displayDominateCards = dominate?.cards?.length
    ? dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
    : helpCards;

  const faqData = [
    {
      question: "How long will it take for my website to start ranking on Google?",
      answer:
        "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
    },
    {
      question:
        "How many keywords will you work on as part of my SEO campaign?",
      answer:
        "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
    },
    {
      question:
        "Do you offer monthly, quarterly, or custom SEO payment plans?",
      answer:
        "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
    },
    {
      question:
        "What is the size of your in-house SEO and digital marketing team?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
    {
      question:
        "Which industries and types of clients do you primarily work with?",
      answer:
        "We work with diverse range of clients across industries, including education, finance, e-commerce, travel, B2B, B2B, and so on. We have a huge clientele across Pan India. We help both startups and already established brands elevate their online presence and achieve measurable results.",
    },
    {
      question:
        "Will my website be optimized to rank in AI-powered search platforms like ChatGPT and Google AI?",
      answer:
        "Yes, we utilize the most advanced tools and cutting-edge technology to ensure your website is optimized for AI-powered search platforms as well. Our team of experts will optimise your website for AI search like ChatGPT and Google AI by targeting high-intent customer queries and creating high-quality and high-authority content. Visit our site or connect with the AI First SEO team via email or phone for more details.",
    },
    {
      question:
        "Which is the best SEO agency in Delhi, and how do I choose the right one?",
      answer:
        "Digicore Inc. is a leading AI SEO agency in Delhi NCR with proven results. We offer comprehensive SEO marketing solutions to a diverse range of clients across industries. We utilize years of experience and cutting-edge tools and technology to help you achieve desired results. You can visit our site and go through our SEO case studies to know how we have helped our clients improve their digital presence and achieve ROI-driven results to make the right choice.",
    },
    {
      question:
        "Have you worked with clients from my industry before?",
      answer:
        "Yes, we have worked with clients from your industry and we are excited to serve you with our innovative digital marketing solutions to help you leave a lasting impression across all online platforms, including social media handles.",
    },
    {
      question:
        "How do you share SEO performance reports and how frequently will I receive them?",
      answer:
        "We provide a bi-monthly SEO performance reports to help you track key metrics such as rankings, traffic, conversions and more. If you want, we can provide you report more frequently; however, we believe that a bi-monthly reporting system is more appropriate as you get enough insights to ponder on.",
    }
    , {
      question:
        "Can you share real client case studies and past SEO results?",
      answer:
        "Yes, we can! Aside from that, you can also visit the SEO case studies section in our website to learn more about our existing and past clients’ experience with us.",
    }

    , {
      question:
        "Apart from SEO, what other digital marketing services do you provide?",
      answer:
        "We provide comprehensive digital marketing services, including SEO, SMM, PPC, Content Marketing, Performance Marketing, Website Design & Development, Online Reputation Marketing, Conversion Rate Optimisation, AEO+AIO+GEO, Display Advertising Services, Social Media Listing, Response Marketing and many more.",
    }

    , {
      question:
        "My website has a high spam score. How will you reduce and fix it?",
      answer:
        "Don’t worry about that. We will fix it! We will first conduct a thorough audit to identify the issues causing it, such as low-quality backlinks, thin content or technical SEO problems. After identifying the real cause, we will implement a comprehensive cleanup SEO strategy to eliminate the issue and restore your website’s credibility and improve its search engine trustworthiness.",
    }

    , {
      question:
        "I have been working with another SEO agency for over a year but my rankings haven’t improved. Can you fix this?",
      answer:
        "Well, we have no idea what strategies your previous SEO partner was using. But worry not! We will thoroughly audit your site and know what exactly is the reason for your site’s low ranking. After that, we would be in better position to tell you our exact course of action. But rest assured, Digicore Inc. is the best SEO company in Delhi. Our team of experts will help you achieve your digital marketing goals, including first page ranking & high-intent leads effortlessly. We will use the most advanced tools and technology to elevate your site’s ranking and drive measurable growth.",
    }

    , {
      question:
        "How much monthly traffic and how many leads can I realistically expect from SEO?",
      answer:
        "The monthly traffic and leads you can expect from SEO depend on various factors like your industry, competition, current website authority and the scope of SEO efforts. But you don’t need to worry. Our team of experts will craft specialized digital marketing strategies tailored to your brand to ensure increased targeted traffic and high-quality leads within 3-6 months.",
    }

    , {
      question:
        "If I stop SEO in the future, will my rankings remain stable?",
      answer:
        "Stopping in today’s scenario simply translates to falling behind fast. The moment you will stop implementing digital marketing strategies, your ranking will drop, let alone remaining stable. Digital marketing isn’t a one-time fix; it’s a continuous process of consistent effort and growth. With technological advancements and SEO evolution, your brand also evolves. If you will stop after a time being, you will lead to nowhere. Hence, you are advised to actively implement digital marketing effort to reap consistent outcomes. Partner with Digicore Inc. – the most reliable AI First SEO agency in Delhi to have stable ranking across platforms!",
    }

    , {
      question:
        "For how long will I need to continue SEO for my website to maintain results?",
      answer:
        "As said earlier, SEO is not a one-time fix; it is a continuous process. You need to keep implementing SEO strategies in order to maintain consisting results and stay ahead across online and social media platforms. With the best AI-first digital marketing company by your side you can ensure consistent online growth and robust outcomes!",
    }

  ];

  const displayFaqData = c?.faq?.length ? c.faq : faqData;

  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) =>
      prev === displayCaseStudies.length - 1 ? 0 : prev + 1
    );
  };

  const prevCase = () => {
    setCurrentCase((prev) =>
      prev === 0 ? displayCaseStudies.length - 1 : prev - 1
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

  const displayCaseStudies = c?.caseStudies?.length
    ? c.caseStudies.map((s) => ({ ...s, image: resolveImage(s.image) }))
    : caseStudies;

  return (
    <>

      <Banner

        title={hero?.title || "B2B SEO Agency That Drives Traffic, Trust, and Conversions"}
        description={hero?.description || "To address the challenges of B2B SEO, it is ideal to partner with the trusted digital marketing agency. In order to incorporate AI-driven SEO practices, improve visibility in the digital landscape, the B2B SEO agency helps clients in attracting qualified leads. At Digicore Inc., we provide tailored experience of marketing to our clients by applying the expertise and new-age SEO practices."}
        primaryBtnText={hero?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={hero?.secondaryBtn?.text || "Our Services"}
        backgroundImage={hero?.backgroundImage ? resolveImage(hero.backgroundImage) : eimage}
      />




      <section className="about-section">
        <div className="divider"></div>
        <div className="about-container">

          <h1>
            {about?.heading || "B2B SEO Company"}
          </h1>



          <p>
            {about?.body || "At Digicore Inc., a trusted B2B SEO agency we believe in generating organic traffic for B2B companies. In this journey of consistent growth, we address all the complexities of the marketplace, and tailor the suitable solution for clients. Our seasoned SEO professionals focus on increasing the visibility, boost revenue, and generate leads through white-hat and ethical marketing practices. We ensure that our industry-wise practice for applying B2B SEO strategies along with technical SEO proficiency, content marketing integration, on-page & off-page SEO optimization to communication & collaboration altogether help us in speeding up the growth of business in the digital landscape. Our creative approach towards B2B SEO, marketing tools, and realistic data-driven solutions address the objectives of clients in a short span. In this AI-driven world, Digicore Inc. ensures technical audit, keyword research, B2B content marketing, link building and AI SEO services are aligned with the business objectives of clients. From Answer Search Optimization (AEO), Generative Engine Optimization (GEO), and ChatGPT optimization to other AI-personalization gets planned in our B2B SEO practices."}
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
              {visibility?.heading || (<>A client-centric and data-driven B2B SEO agency<br />for all-sized businesses</>)}
            </h2>

            <p>
              {visibility?.paragraph1 || "Digicore Inc. has attained a decade’s excellence in catering to the tailored objectives of B2B market. We understand the target audience of our clients, hence, formulate effective SEO strategies to optimize their website. We being with comprehensive technical audit to identify the scope of website optimization, thereby, improving the visibility of business in SERPs. Apart from the traditional search, the new-age voice search optimization, AI-friendly search results, local SEO, customized PPC campaigns and well-planned digital marketing services altogether help B2B businesses in staying ahead of their competitors. Our SEO specialists play a vital role in analyzing the performance of the marketing activities and prepare transparent report. This report is shared with the client to know the level of optimization, rank of website in SERPs, and the plan ahead for further optimization."}
              <br /><br />
              {visibility?.paragraph2 || "Our proven strategies of B2B SEO services and digital marketing services improve the visibility of client’s website, thereby, enhancing the brand prominence. In fact, the other businesses can connect with the website that has been optimized according to products or services of their choice. At Digicore Inc. creates a practically-designed plan of B2B SEO to drive potential customers by focusing on content creation, landing page development, link profile management, technical website optimization, etc. As a result, the clients can engage businesses by clearly showcasing their products or services through optimized website ranked in the top search results. Being the trusted B2B SEO agency, we promise measurable growth results and provide detailed results in regular SEO report. We emphasize on improving leads, traffic, revenue for B2B, and sales to B2B businesses through our results-driven SEO services."}
            </p>

            <div className="orange-line"></div>

          </div>

          <div className="visibility-image">
            <img src={visibility?.image ? resolveImage(visibility.image) : graphImg} alt="Graph" />
          </div>

        </div>

      </section>


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

            <h2>{seoAgency?.heading || "Why Do I Need an Healthcare SEO Agency"}</h2>

            <p>
              {seoAgency?.description || "Digicore Inc. is a 360 digital marketing agency in Delhi that is dedicated to helping brands develop, engage, and lead, while also supporting the success of your business. Over the years, we've been at the forefront of driving digital transformation through creativity, strategy, and technology to meet our clients' impactful requirements."}
            </p>
          </div>

          <div className="seo-content">

            <div className="seo-left">

              <h3>{seoAgency?.problemTitle || "The Problem"}</h3>

              <p>
                {seoAgency?.problemText || "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased."}
              </p>

              <h3>{seoAgency?.solutionTitle || "The Solution"}</h3>

              <p>
                {seoAgency?.solutionText || "From Google, Instagram and YouTube to markeplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere."}
              </p>

            </div>

            <div className="seo-right">

              <p>
                AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased. Today, ranking should not be only about Google; it should be about visibility wherever audiences are looking—like Google, Instagram, YouTube, LinkedIn, marketplaces, or even AI-generated results.
              </p>

              <p>
                From Google, Instagram and YouTube to markeplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere. As we see Gen Z discovering brands first on social media and AI reshaping how people find and evaluate products, belonging to the future means that your brand is visible in the moment—wherever your consumer is.
              </p>

            </div>

          </div>

        </div>
      </section>


      <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {discover?.heading || "B2B SEO Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {discover?.description || "With the customized level of optimization, scope of improving the online visibility, and the efforts required to cater to industry-specific objectives, Digicore Inc. plans SEO services. From boosting the conversion and clickthrough rates to driving potential customers through organic traffic, our B2B SEO services deliver the measurable results backed by detailed report."}
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
            {whyChoose?.heading || "Scale Your Online Store with High-Performance E-commerce SEO."}
          </h1>

          <div className="choose-btns">

            <a href={whyChoose?.button1?.link || "#"} className="light-btn">

              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
              />

              {whyChoose?.button1?.text || "+91 98188 88064"}

            </a>

            <a href={whyChoose?.button2?.link || "#"} className="light-btn">
              {whyChoose?.button2?.text || "REQUEST A CALLBACK"}
            </a>

          </div>

        </div>

      </section>
      <section className="impact-sec" style={{ backgroundColor: "#fff" }}>

        <div className="impact-container">

          <div className="impact-image bg-white rounded-[24px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-[#e5e7eb]/80 p-5 md:p-6 flex items-center justify-center max-w-[500px] w-full">
            <img
              src={impactSection?.image ? resolveImage(impactSection.image) : impact}
              alt="Impact"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="timeline-section">

            <div className="timeline relative">
              <div className="absolute left-[8px] top-2 bottom-2 w-[2px] bg-[#e31e24] z-[1]"></div>

              {(impactSection?.timeline?.length ? impactSection.timeline : [
                { title: "Marketing companies", description: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co" },
                { title: "SEO and PPC", description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
                { title: "Google Premier Partner", description: "We are a Google Premier Partner since 2017. This means we’re are one of Top 50 PPC Companies in India from 4000 odd Digital Marketing agencies that have partnered with Google." },
                { title: "Search engine optimization", description: "Our SEO professionals have decades of experience providing results to clients and sound knowledge of the latest search engine optimization trends." },
              ]).map((item, index) => (
                <div className="timeline-item" key={item.id || index}>
                  <div className="relative z-[2] mt-2 flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#e31e24] bg-white shrink-0">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#e31e24]"></div>
                  </div>
                  <div className="timeline-content">
                    <h3 className="text-[20px] font-heading font-extrabold text-[#2b2b2e] mb-1">{item.title}</h3>
                    <p className="text-[#4b5563] text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      <div className="about-container">
        <div className="divider"></div>
        <h1>
          {video?.title || "SEO is not just about ranking on Google — it’s about connecting your brand across every platform where your customers search."}
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

      <section className="py-[100px] px-[6%] bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[42px] max-[769px]:text-[30px] text-[#1c1c1e] font-heading font-extrabold mb-[15px]">
            {dominate?.heading || "How We Grow Your E-commerce Sales & Revenue"}
          </h2>

          <div className="w-[70px] h-[4px] bg-[#e31e24] mx-auto mb-[30px] rounded-[20px]"></div>

          <p className="max-w-[850px] mx-auto text-[17px] leading-[1.8] text-[#4b5563] mb-[60px]">
            {dominate?.description || "Since we Live ‘Digital’, Think ‘Digital’, Breathe ‘Digital’, and Understand ‘Digital’, each of our digital marketing solution is designed around a few yet important key elements or we better call them ‘building blocks’ for the digital business plan of our clients. We evaluate things and customize our solutions keeping your business goals, the current stage of the digital presence, and competitive landscape in mind. With our creative and result-oriented solutions, we ensure that you will:"}
          </p>
        </div>

        <div className="flex justify-center gap-10 flex-wrap mt-[30px]">
          {displayDominateCards.map((item, index) => (
            <div
              className="group w-[260px] h-[260px] max-[769px]:w-[220px] max-[769px]:h-[220px] rounded-full bg-white border border-[#e5e7eb] flex flex-col items-center justify-center text-center p-6 box-border relative overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:bg-[#e31e24] hover:border-[#e31e24] hover:shadow-[0_12px_25px_rgba(227,30,36,0.25)] hover:-translate-y-1.5"
              key={item.id || index}
            >
              <div className="relative z-[2] w-12 h-12 mb-4 flex items-center justify-center transition-colors duration-300">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>

              <h3 className="relative z-[2] text-[18px] max-[769px]:text-[15px] font-heading font-bold text-[#2b2b2e] leading-tight m-0 transition-colors duration-300 group-hover:text-white group-hover:mb-[10px]">{item.title}</h3>

              <p className="relative z-[2] mt-0 text-[12px] leading-[1.5] text-white opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-90 group-hover:max-h-[120px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[100px] px-[6%] bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]">
            <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

            <h2 className="text-[42px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-[20px]">
              {whyBusiness?.heading || "Why choose Digicore Inc. for B2B SEO Services?"}
            </h2>

            <p className="max-w-[850px] mx-auto text-[17px] leading-[1.8] text-[#4b5563]">
              {whyBusiness?.description || "Being the trusted B2B SEO agency, Digicore Inc. is familiar with the intricacies of the market faced by business owners in the B2B segment. To bridge the gap between potential buyers and business owner, we tailor the data-driven SEO strategies that not only boost the online visibility of the website, but also, increase its ROI. Besides, we focus on in-depth technical assessment of the client’s website to understand the scope of optimization and better positioning in the search engine. Whether you want to outrank your competitors, increase conversion rate or increase the quality of organic traffic, partnering with Digicore Inc. is the right choice."}
            </p>
          </div>

          <div className="flex items-center gap-[60px] max-[993px]:flex-col">
            <div className="flex-1 w-full">
              <ul className="list-none p-0 flex flex-col gap-4">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "Expertise, industry-wise experience and proven excellence in offering customized SEO results" },
                  { text: "Goal-oriented objectives related to the B2B industry, SEO strategies are realistically planned" },
                  { text: "Comprehensive B2B SEO services aimed at increased traffic, better conversion rate & revenue are offered" },
                  { text: "Dedicated SEO team provides regular report and proposes plan of action to improve website’s performance" },
                  { text: "Search-friendliness of website is targeted through white-hat and AI-driven SEO practices" },
                  { text: "Hassle-free accessibility to the new-age SEO practices offered at a competitive price" },
                ]).map((item, index) => (
                  <li key={item.id || index} className="text-[16px] leading-[1.6] bg-white p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#e5e7eb]/60 transition-all duration-300 hover:translate-x-[8px] flex items-start">
                    <span className="text-[#e31e24] font-bold mr-3 shrink-0">✔</span>
                    <span className="text-[#4b5563]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 text-center w-full">
              <img
                src={whyBusiness?.image ? resolveImage(whyBusiness.image) : graphImg}
                alt="Graph"
                className="w-full max-w-[500px] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] mx-auto border border-[#e5e7eb]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
      <div>


        <TestimonialSection />


      </div>

      <div>
        <Brands />
      </div>

      <div>
        <Tools />
      </div>




      <div>

        <Blogs />
      </div>



      <section className="faq-section">
        <div className="faq-header">
          <h2>FAQ</h2>
          <div className="faq-line"></div>
        </div>

        <div className="faq-container">
          {displayFaqData.map((faq, index) => (
            <div
              key={faq.id || index}
              className={`faq-item ${activeIndex === index ? "active" : ""
                }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                {activeIndex === index ? (
                  <Minus size={28} />
                ) : (
                  <Plus size={28} />
                )}
              </button>

              <div
                className={`faq-answer ${activeIndex === index ? "show" : ""
                  }`}
              >
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
  )
}

export default B2B
