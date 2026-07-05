import React, { useEffect, useState, useRef } from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

import impact from "../assets/impact.webp";

import seoRimg from "../assets/real-seo-result.webp";
import heroImg from "../assets/a.png";
import graphImg from "../assets/graph-l.webp";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
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
import eimage from "../assets/Dimage/0.png";
import seocase1 from "../assets/case1.png";
import seocase2 from "../assets/case2.png";
import seocase3 from "../assets/case3.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const SocialListening = () => {
  const { content: c } = usePageContent("social-listening");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const impactData = c?.impact?.items?.length ? c.impact : null;
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
      title: "The Moto Men – High-Intent Google Ads Leads with 12.5% Conversion",
      image: seocase1,
      descriptions: [
        "For The Moto Men, we executed a Noida-focused PPC campaign to drive high-intent enquiries for premium car detailing services. Nearly 80% of the enquiries were highly relevant, aligned with both location and service intent. From these qualified enquiries, the campaign achieved a conversion rate of up to 12.5%, delivering consistent and measurable business impact. The strategy focused on precise location targeting, intent-driven keywords, and continuous optimisation to maintain lead quality while minimising wasted ad spend."
      ]
    },

    {
      title: "Trusted Hair Transplant Clinic – PPC Performance Case Study (14.52% Conversion)",
      image: seocase2,
      descriptions: [
        "We executed a high-intent Google Search Ads campaign for a hair transplant clinic, targeting users actively searching for treatment-related queries. The campaign delivered a conversion rate of 14.52%, indicating strong intent alignment and effective ad optimisation. The strategy focused on quality enquiries and consistent performance rather than inflated traffic, helping the clinic generate relevant leads and measurable growth."
      ]
    },

    {
      title: "IOD Global – Display Campaign Case Study",
      image: seocase3,
      descriptions: [
        "For IOD Global, we executed a Google Display Campaign focused on increasing brand visibility and recall among the right audience segments. The campaign was designed to build consistent exposure through targeted placements and audience-based targeting. The strategy prioritised relevant impressions, controlled reach, and brand presence. Continuous optimisation ensured stable performance and efficient delivery aligned with the brand’s objectives while avoiding irrelevant traffic."]
    }
  ];

  const services = [

    {
      icon: seoIcon,
      title: "Google Display Ads Management",
      description:
        "With the help of Google Display ads management, we strategically use targeted visuals, smart ad placements and effective data-driven optimization to help you reach the right audience. The objective of these services is to boost conversion, brand awareness and engagement across the Google display network.",
    },

    {
      icon: socialIcon,
      title: "Google Display Network (GDN) Advertising",
      description:
        "With the help of Google Display Network advertising, we promote your business across multiple websites and apps. As a part of this service, we use targeted banners and visuals in order to increase reach, engagement, brand awareness and conversions.",
    },

    {
      icon: ppcIcon,
      title: "Brand Awareness Display Campaigns",
      description:
        "In order to increase your brand’s visibility across the Google Display Network, we create well-tailored campaigns keeping in mind the potential customers. From the use of creative creation & optimization to targeting metrics, we boost engagement and lasting impressions.",
    },

    {
      icon: webIcon,
      title: "Lead Generation Display Campaigns",
      description:
        "As a part of these campaigns, we capture high-quality prospects by working over display ads, optimized placements, compelling creatives. The objective of these campaigns is to drive form submissions, conversions, and inquiries while maximizing ROI.",
    },

    {
      icon: contentIcon,
      title: "Display Remarketing Campaigns",
      description:
        "With the help of personalized display ads, we re-engage past website visitors by reminding them of your brand through these services. Besides, we encourage return visits, conversions and inquiries across the Google Displaay Network.",
    },

    , {
      icon: ormIcon,
      title: "Responsive Display Ads",
      description:
        "With the help of these Google display ad management services, our professionals adapt headlines, campaign layouts, and images to fit any screen or placement. These services are aimed at improved engagement, wider reach, improved engagement and brand messaging along with better performance across the Google Display Network.",
    }
    , {
      icon: ormIcon,
      title: "Audience & Interest-Based Display Targeting",
      description:
        "These services are effectively design to reach users based on demographics, interests, search intent, user behaviour to ensure higher relevance, improved conversion rate, and better engagement.",
    }
    , {
      icon: ormIcon,
      title: "Creative Banner Design for Display Ads",
      description:
        "In order to grab attention of potential customers, eye-catching ad banners and communicate your message instantly and drive clicks, we create compelling visuals. These banners also include call-to-action and strong branding for maximum campaign performance.",
    }
    , {
      icon: ormIcon,
      title: "Conversion Tracking & Performance Optimization",
      description:
        "We enable our clients to track every impression, click and conversion accurately through Google display advertising. These campaigns are helpful in improving performance, reduction of costs and thereby, maximize ROI through strategic adjustments and data-driven insights.",
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
      title: "Improve Brand Awareness",
      desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
    },

    {
      icon: Icon2,
      title: "Drive Website Traffic",
      desc: "We help you convert maximum possible leads into sales and grow your business faster",
    },

    {
      icon: Icon3,
      title: "Generate Leads",
      desc: "We help your brand gain strong recognition across digital platforms globally",
    },

    {
      icon: Icon4,
      title: "Increase Measurable ROI",
      desc: "Improve your team capabilities with advanced marketing strategies and guidance",
    },

  ];

  const faqData = [
    {
      question: "Does social media marketing work for all businesses?",
      answer:
        "Social media marketing is beneficial for all-sized businesses, but results are variable based on goals, target audience, nature of business, and constant strategy execution.",
    },
    {
      question:
        "Does social media marketing work for Delhi-based businesses?",
      answer:
        "Yes! But, it depends on the audience targeting, content approach, industry, business goals, and the type of industry.",
    },
    {
      question:
        "Can social media help me get local leads in Delhi?",
      answer:
        "Yes, local leads based in Delhi can be generated through social media through location-specific content, local engagement with nearby customers and targeted ads.",
    },
    {
      question:
        "Which platforms work best for Delhi businesses?",
      answer:
        "Instagram, Google Business Profile, Facebook, and WhatsApp are ideal for Delhi-based businesses for improving local visibility and lead generation.",
    },
    {
      question:
        "Why do I need social media marketing for my business?",
      answer:
        "Customer engagement and brand visibility increase while building trust and generating quality leads in a cost-effective manner through social media marketing. ROI also increases through professional SMM services.",
    },
    {
      question:
        "How can social media marketing add value to my business?",
      answer:
        "The increased leads & conversion rate, improved credibility, brand awareness and attracting targeted customers are some of the benefits of social medial marketing that add value to your business.",
    },
    {
      question:
        "What are the real benefits of social media marketing?",
      answer:
        "From strategic planning, content creation, performance assessment to optimization of campaigns, the social media marketing agency offers customized services to achieve clients’ business goals.",
    },
    {
      question:
        "How does a social media marketing agency actually work?",
      answer:
        "With our customized social media marketing services, we help businesses in reaching targeted audiences, drive website traffic, strengthen brand credibility and boost sales effectively.",
    }
  ];

  const displayFaq = c?.faqSection?.items?.length ? c.faqSection.items : faqData;


  return (
    <div className="bg-white">
      <Banner
        title={banner?.title || "Social Media Listening & Response Management"}
        description={banner?.description || "Understand what your customers are saying about your brand online in real-time. Digicore Inc. tracks brand mentions, sentiments, and conversations to manage your reputation and drive customer satisfaction."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to SMM Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {about?.heading || "Real-time Social Media Listening & Reputation Management"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {about?.body || "Digicore Inc. is the leading Social Media Listening & Response Management agency that tracks brand feedback, customer opinions, and industry trends across all platforms. We help you listen to your audience, analyze their sentiment, scale your responses, and repeat the strategy to build customer loyalty and manage your online reputation effectively."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibility?.heading || "Why Social Media Listening is Crucial for Modern Brands?"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibility?.body || "Listening to customer feedback across social networks, review sites, and forums is essential to protect and grow your brand. With the help of Digicore Inc.'s advanced social listening tools and experts, we gather real-time data on how consumers perceive your business, allowing you to respond instantly to inquiries, handle reviews, and intercept potential PR crises before they escalate."}
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
              {performance?.label1 || "TRACK"}
            </h2>
            <h2 className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
              {performance?.label2 || "ANALYZE"}
            </h2>
            <h2 className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
              {performance?.label3 || "SCALE"}
            </h2>
            <h2 className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
              {performance?.label4 || "REPEAT"}
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
            {seoAgency?.heading || "Why Choose an Expert Social Listening & Response Agency?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto mb-16">
            {seoAgency?.body || "Tracking brand mentions manually is impossible in today's multi-platform ecosystem. Digicore Inc. uses state-of-the-art listening platforms to monitor and manage conversations on Instagram, LinkedIn, Facebook, X, and WhatsApp. Our dedicated response team ensures that customer concerns are resolved quickly, improving brand credibility and customer lifetime value."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-[#e31e24] font-heading font-extrabold mb-3">
                  The Problem
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  Most brands do not realize what their target audience or customers are discussing about their products or support online. Unanswered complaints, negative tweets, or low-star reviews build up silently, dragging down your brand value and conversion rates.
                </p>
              </div>

              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-emerald-600 font-heading font-extrabold mb-3">
                  The Solution
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  Avail professional Social Media Listening & Response Management services to track brand mentions 24/7. Digicore Inc. intercepts negative mentions, engages positive reviews, resolves support tickets, and analyzes sentiment patterns.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563] lg:pt-2">
              <p>
                Our social listening experts utilize AI platforms to crawl keywords, brand tags, and competitor data. By responding rapidly and empathetically, we transition customer complaints into positive brand interactions, improving brand credibility and sentiment scores.
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
            {discover?.description || "We provide comprehensive social listening and sentiment analysis solutions to monitor brand reputation, track competitors, and engage customers effectively."}
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {displayServices.map((service, index) => {
              // Map customized descriptions for social listening
              const customServices = [
                {
                  title: "Brand Mention Monitoring",
                  desc: "We track every mention of your brand, products, and key executives across social platforms and websites."
                },
                {
                  title: "Sentiment Analysis",
                  desc: "We analyze customer feedback to determine positive, neutral, or negative sentiments to optimize brand health."
                },
                {
                  title: "Competitor Intelligence",
                  desc: "Track competitor mentions and strategy updates to discover new market opportunities."
                },
                {
                  title: "Crisis Management & Prevention",
                  desc: "Instant alerts and response protocols to prevent negative comments or issues from scaling into public relations crises."
                },
                {
                  title: "Review Management",
                  desc: "Professional and swift responses to user reviews on Google Business, Yelp, and social profiles."
                },
                {
                  title: "Customer Support Routing",
                  desc: "Route product inquiries and complaints to support teams for immediate resolution."
                }
              ];
              const customItem = customServices[index % customServices.length];
              return (
                <ServiceCard
                  key={service.id || index}
                  icon={service.icon}
                  title={service.title || customItem.title}
                  description={service.description || customItem.desc}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Why Choose Section */}
      <section className="relative overflow-hidden w-full py-20 px-5 bg-gradient-to-br from-[#1c1c1e] to-slate-900 text-center border-t border-b border-[#2b2b2e]">
        <div className="max-w-[1200px] mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-white max-w-3xl mx-auto leading-tight">
            {whyChoose?.heading || "Ready to Protect & Grow Your Brand Reputation? Get Started Today."}
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
              src={impactData?.image ? resolveImage(impactData.image) : impact}
              alt="Impact"
              className="max-w-full h-auto rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100 object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-[#e5e7eb] space-y-8">
              {(impactData?.items?.length ? impactData.items : [
                { title: "Monitor Mentions", desc: "We deploy tools to capture every brand tag and keyword online." },
                { title: "Sentiment Assessment", desc: "NLP engines classify mentions as positive, negative, or neutral." },
                { title: "Crisis Mitigation", desc: "Flag escalations instantly and isolate negative feedback paths." },
                { title: "Active Engagement", desc: "Empathetic, brand-aligned customer communications." },
                { title: "Analytics Reporting", desc: "Understand customer satisfaction scores over time." }
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

      <Industry />
      <Casestudy />

      {/* Why Choose Section with Checklists */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 uppercase">
            {whyBusiness?.heading || "Why choose Digicore Inc. for SMM Listening and response management?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyBusiness?.description || "At Digicore Inc., we use advanced listening setups to secure, protect, and scale your brand sentiment. From dedicated response matrices to transparent reporting dashboards, our SMM systems are designed for optimal reputation security."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="why-left space-y-4">
              <ul className="space-y-3.5">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "Experienced team of reputation managers and SMM communication experts." },
                  { text: "Real-time alerts and dashboard analytics for instant brand health monitoring." },
                  { text: "Crisis prevention protocols to safeguard your brand's digital presence." },
                  { text: "Sentiment analysis powered by advanced NLP tools." },
                  { text: "Tailored response templates for transparent and empathetic communication." },
                  { text: "Comprehensive competitor intelligence and benchmark reporting." },
                  { text: "Proven experience managing reputation for diverse corporate segments." }
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
            <h2 className="text-[36px] font-heading font-extrabold text-[#1c1c1e] uppercase">
              {c?.faqSection?.heading || "SOCIAL MEDIA LISTENING FAQS"}
            </h2>
          </div>

          <div className="space-y-4">
            {displayFaq.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={"bg-white border rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all duration-300 " + (
                    isOpen ? "border-[#e31e24]/30 shadow-[0_12px_32px_rgba(227,30,36,0.08)]" : "border-slate-200 hover:border-[#e31e24]/20"
                  )}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer bg-transparent border-0 select-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-slate-900 text-[15px]">{faq.question}</span>
                    <span className={"shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 " + (
                      isOpen ? "bg-[#e31e24] text-white" : "bg-[#e31e24]/8 text-[#e31e24]"
                    )}>
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

export default SocialListening;
