import React, { useState } from "react";

import Banner from "../Components/Cards/Seohero";
import ServiceCard from "../Components/Cards/ServiceCard";

import impact from "../assets/impact.webp";
import seoRimg from "../assets/real-seo-result.webp";
import graphImg from "../assets/graph-l.webp";
import Industry from "../Components/Sections/Industry";
import Casestudy from "../Components/Sections/Casestudy";

import seoIcon from "../assets/seo-o.webp";
import socialIcon from "../assets/social-o.webp";
import ppcIcon from "../assets/finger-up-o.webp";
import webIcon from "../assets/ad-o.webp";
import contentIcon from "../assets/pen-tab-o.webp";
import ormIcon from "../assets/head-s-0.webp";
import bgIcon from "../assets/bg-iconnew.webp";
import TestimonialSection from "../Components/Sections/Testimonials";
import Brands from "../Components/Sections/Brands";
import Tools from "../Components/Sections/Tools";
import Blogs from "../Components/Cards/BlogCard";
import Contacts from "../Components/Sections/Contact";
import { Plus, Minus } from "lucide-react";
import Icon1 from "../assets/h1.png";
import Icon2 from "../assets/h2.png";
import Icon3 from "../assets/h3.png";
import Icon4 from "../assets/h4.png";

import eimage from "../assets/BannerImg/PPC.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

const PPC = () => {
  const { content: c } = usePageContent("PPC");
  const banner = c?.banner;
  const aboutSection = c?.aboutSection;
  const visibilitySection = c?.visibilitySection;
  const performanceSection = c?.performanceSection;
  const whyPPCSection = c?.whyPPCSection;
  const whyChooseSection = c?.whyChooseSection;
  const timelineSection = c?.timelineSection?.items?.length ? c.timelineSection : null;
  const ppcManagementSection = c?.ppcManagementSection;
  const helpCardsSection = c?.helpCardsSection;
  const whyChooseDigicoreSection = c?.whyChooseDigicoreSection;

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      icon: seoIcon,
      title: "Paid Search",
      description:
        "Paid advertising is beneficial in improving visibility of the brand, while focusing on high-intent keywords, and thereby, addressing measurable leads and sales through well-designed and monitored PPC campaigns strategized by experts.",
    },
    {
      icon: socialIcon,
      title: "Performance Max",
      description:
        "Performance Max optimally utilizes automation and AI in order to maximize conversions across Google platforms. It also optimizes ads, bids, and audiences to attract better ROI.",
    },
    {
      icon: ppcIcon,
      title: "Demand Generation",
      description:
        "Demand generation builds awareness and interest and uses data-driven PPC campaigns. The idea is to engage audiences initially and convert traffic into high-quality leads constantly.",
    },
    {
      icon: webIcon,
      title: "Display Ads",
      description:
        "The visibility of brand gets boosted through visually appealing and engaging banners through display ads. This helps brands in reaching targeted audiences and apps to drive conversion and awareness.",
    },
    {
      icon: contentIcon,
      title: "Youtube Campaigns",
      description:
        "The compelling video ads attract audience and increase brand awareness, while driving consideration through YouTube campaigns. These PPC campaigns are helpful in generating conversions across devices effectively.",
    },
    {
      icon: ormIcon,
      title: "Shopping Ads",
      description:
        "With the help of these Google display ad management services, our professionals adapt headlines, campaign layouts, and the high-intent shoppers are attracted by the effectively designed shopping ads that showcase products with images and prices. These optimized campaigns drive relevant traffic and sales.",
    },
  ];

  const displayServices = c?.services?.length
    ? c.services.map((s) => ({ ...s, icon: resolveImage(s.iconUrl) }))
    : services;

  const leftItems = [
    "Goal-Oriented Campaign Planning - We integrate PPC strategies to fit specific business objectives, audience, and desired leads or revenue from inception.",
    "Intent-Driven Keyword Strategy: We identify the keywords according to user intent and conversion rates to attract the right traffic and minimize the waste of clickthrough's.",
    "High-Converting Ad Copy & Creatives – Engaging ad messaging draws the desired audience and weeds out poor-quality traffic.",
    "Strategic Budget & Bid Management - Effective budget allocation and AI-driven bidding strategies will result in maximized performance relative to cost.",
  ];

  const rightItems = [
    "Advanced Conversion Tracking Setup - We measure valuable actions such as leads, calls, sales, and form submits – not just clicks.",
    "Continuous Optimisation - Ongoing analysis and optimization ensure improved ROI or scalable results.",
    "Platform-Specific Execution- These are campaigns that are specific to Google Search, Google Display, YouTube, Shopping, Performance Max, as well as Social Ads.",
    "Transparent Reporting & Insights - Honest reports help understand spending, performance, and growth opportunities, without hiding information.",
  ];

  const displayLeftItems = ppcManagementSection?.leftItems?.length ? ppcManagementSection.leftItems : leftItems;
  const displayRightItems = ppcManagementSection?.rightItems?.length ? ppcManagementSection.rightItems : rightItems;

  const helpCards = [
    { icon: Icon1, title: "Targeted Advertising", desc: "We ensure your business get more and more leads through our expertly managed digital marketing services" },
    { icon: Icon2, title: "Leveraging Insights", desc: "We help you convert maximum possible leads into sales and grow your business faster" },
    { icon: Icon3, title: "Continuous Optimization", desc: "We help your brand gain strong recognition across digital platforms globally" },
    { icon: Icon4, title: "Maximizing ROI", desc: "Improve your team capabilities with advanced marketing strategies and guidance" },
  ];

  const displayHelpCards = helpCardsSection?.helpCards?.length
    ? helpCardsSection.helpCards.map((h) => ({ ...h, icon: resolveImage(h.iconUrl) }))
    : helpCards;

  const faqData = [
    { question: "Does social media marketing work for all businesses?", answer: "Social media marketing is beneficial for all-sized businesses, but results are variable based on goals, target audience, nature of business, and constant strategy execution." },
    { question: "Does social media marketing work for Delhi-based businesses?", answer: "Yes! But, it depends on the audience targeting, content approach, industry, business goals, and the type of industry." },
    { question: "Can social media help me get local leads in Delhi?", answer: "Yes, local leads based in Delhi can be generated through social media through location-specific content, local engagement with nearby customers and targeted ads." },
    { question: "Which platforms work best for Delhi businesses?", answer: "Instagram, Google Business Profile, Facebook, and WhatsApp are ideal for Delhi-based businesses for improving local visibility and lead generation." },
    { question: "Why do I need social media marketing for my business?", answer: "Customer engagement and brand visibility increase while building trust and generating quality leads in a cost-effective manner through social media marketing. ROI also increases through professional SMM services." },
    { question: "How can social media marketing add value to my business?", answer: "The increased leads & conversion rate, improved credibility, brand awareness and attracting targeted customers are some of the benefits of social medial marketing that add value to your business." },
    { question: "What are the real benefits of social media marketing?", answer: "From strategic planning, content creation, performance assessment to optimization of campaigns, the social media marketing agency offers customized services to achieve clients’ business goals." },
    { question: "How does a social media marketing agency actually work?", answer: "With our customized social media marketing services, we help businesses in reaching targeted audiences, drive website traffic, strengthen brand credibility and boost sales effectively." },
  ];

  const displayFaq = c?.faqSection?.faqItems?.length ? c.faqSection.faqItems : faqData;

  const performanceLabels = performanceSection?.items?.length ? performanceSection.items : ["TRACK", "ANALYZE", "SCALE", "REPEAT"];

  return (
    <div className="bg-white">
      <Banner
        subtitle={banner?.subtitle}
        title={banner?.title || "PPC Agency in Delhi That Drives Traffic, Trust, and Conversions"}
        description={banner?.description || "We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImageUrl ? resolveImage(banner.backgroundImageUrl) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {aboutSection?.title || "Best PPC Company in Delhi NCR"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {aboutSection?.description || "Digicore Inc. is the best PPC company in Delhi-NCR, that delivers performance-driven Pay-Per-Click campaigns customized to attain measurable business growth. Our PPC strategy includes strong groundwork—competitor analysis, audience assessment, and clarity of conversion objectives. Our expertly designed PPC campaigns are aimed at attracting high-intent users, that eventually turn clicks into leads and sales. With consistent performance throughout the past few years, our PPC specialists focus on the optimal use of data-driven Google and Meta ad campaigns for multiple industries ranging from Ecommerce, B2B, Travel, Healthcare, Hospitality, and Education. From keyword strategy and finalizing ad copy to optimization of landing page and conversion tracking, Digicore Inc. plays a vital role in helping businesses benefit from ROI-focused PPC advertising."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibilitySection?.title || "Why PPC Is More Than Just Running Ads"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibilitySection?.description || "PPC is strategic solution aimed at making for business growth consistent in digital marketing. At Digicore Inc., a leading PPC agency in Delhi, we count on data-driven techniques to reach targeted audiences, optimally utilize every campaign element, and constantly optimize ad performance to ensure sustainable growth and higher ROI for client’s business."}
              </p>
            </div>

            <div className="w-[120px] h-[4px] bg-[#e31e24] mt-10"></div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200">
            <img
              src={visibilitySection?.imageUrl ? resolveImage(visibilitySection.imageUrl) : graphImg}
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
            {performanceLabels.map((label, i) => (
              <h2
                key={i}
                className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight"
              >
                {label}
              </h2>
            ))}
          </div>

          <div className="min-h-[390px] max-[992px]:min-h-[350px] max-[769px]:min-h-[250px] overflow-hidden">
            <img
              src={performanceSection?.imageUrl ? resolveImage(performanceSection.imageUrl) : seoRimg}
              alt="SEO Performance"
              className="w-full h-full block object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why PPC / Problem-Solution Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[55px] h-1 bg-[#e31e24] mx-auto mb-[18px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-8 uppercase leading-tight">
            {whyPPCSection?.heading || "Why Do I Need a PPC Agency in Delhi?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto mb-16">
            {whyPPCSection?.headingDescription || "It is quite tough for businesses to generate quality leads at present due to the increased competition. PPC is one of the efficient ways to target potential customers, only if the campaign has been executed in a strategic way. Keeping in mind the increased competition, constantly upgrading algorithms, higher bid costs, Digicore Inc., the top PPC agency in Delhi NCR employs well-planned strategy for ongoing campaign optimization. Besides, we ensure the data-driven insights, expertise in generating quality leads, driving sales, and improving the brand awareness through campaigns are aligned according to business goals of clients."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-[#e31e24] font-heading font-extrabold mb-3">
                  {whyPPCSection?.problemTitle || "The Problem"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {whyPPCSection?.problemDescription || "Most of the businesses are not able to execute PPC campaigns due to the lack of strategy or undefined goals. Weak tracking, poorly optimized landing pages, and broad match keywords, attract high clicks but the quality of leads is low. As a result, the CPC and CPL increase and this leads to exhausting budgets. Hence, PPC becomes expensive with unsustainable and unpredictable results through improper campaign optimization, budget control and performance analysis."}
                </p>
              </div>

              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-emerald-600 font-heading font-extrabold mb-3">
                  {whyPPCSection?.solutionTitle || "The Solution"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {whyPPCSection?.solutionDescription || "Being the top PPC agency in Delhi NCR, we focus on the strategically planned PPC campaigns and not just clicks. First of all, our experts analyse the market objective, thereby, craft the PPC campaign for client’ business. Alternatively, we identify the high-intent keywords focused on creating conversion. We prioritize the practical outcome through data driven arather than just predictions or sharing forecasts. At present, Google relies on automation, real-time user behaviour and AI-based bidding, hence, the PPC strategy should be aligned with the AI-automation. This will be possible with the help of top PPC agency in Delhi is hired to seek expert guidance, budget control and improved ROI goals."}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563] lg:pt-2">
              <p>
                {whyPPCSection?.additionalDescription || "At Digicore Inc., we ensure that PPC campaigns drive business growth, while optimally using advertising spends. Our top PPC experts find high-intent commercial keywords, optimize landing pages, and evaluate data to improve the PPC campaign’s performance at every step. Each decision is driven by ROI and long-term scalability. Being the best PPC services agency in Delhi, we address the advanced marketing resource, applying strategic thinking and innovative approaches to maximize results. With constant optimization, performance tracking, smart budget allocation, and performance tracking, we helps businesses turn PPC into a predictable, scalable, as well as a high-performing digital growth channel."}
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
            PPC Services in Delhi
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            At Digicore Inc., apart from offering just PPC services—we intend to become a trusted digital growth partner for business growth. After gaining prominence in the digital marketing segment, we have consistently blended AI-powered PPC strategies and data-driven solutions and connected them with the target audience.
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
      <section
        className="relative py-[100px] px-5 bg-[#1c1c1e] text-center min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 28, 30, 0.9), rgba(28, 28, 30, 0.95)), url(${whyChooseSection?.backgroundImageUrl ? resolveImage(whyChooseSection.backgroundImageUrl) : bgIcon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 text-center max-w-[1000px] mx-auto">
          <h1 className="text-white text-[42px] max-[769px]:text-[30px] font-heading font-extrabold leading-[1.2] mb-[40px]">
            {whyChooseSection?.title || "Ready for More Traffic, Leads & Sales? Start SEO Now."}
          </h1>

          <div className="flex justify-center items-center gap-5 max-[769px]:flex-col">
            <a
              href={whyChooseSection?.buttons?.[0]?.link || "#"}
              className="flex items-center justify-center gap-[10px] bg-white hover:bg-[#f0fdf4] hover:scale-[1.03] transition-all duration-300 text-[#22c55e] h-12 px-7 rounded-lg text-base font-bold no-underline shadow-[0_4px_15px_rgba(34,197,94,0.16)] border border-[#22c55e]/25"
            >
              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
                className="w-[20px] h-[20px] invert brightness-200"
              />
              {whyChooseSection?.buttons?.[0]?.text || "+91 98188 88064"}
            </a>

            <a
              href={whyChooseSection?.buttons?.[1]?.link || "#"}
              className="flex items-center justify-center gap-[10px] bg-transparent hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 text-white h-12 px-7 rounded-lg text-base font-bold no-underline border border-white"
            >
              {whyChooseSection?.buttons?.[1]?.text || "REQUEST A CALLBACK"}
            </a>
          </div>
        </div>
      </section>

      {/* Impact Timeline Section */}
      <section className="py-[100px] px-[7%] bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-[60px] lg:flex-row flex-col px-5">
          <div className="w-full max-w-[500px] lg:max-w-[45%]">
            <img
              src={timelineSection?.imageUrl ? resolveImage(timelineSection.imageUrl) : impact}
              alt="Impact"
              className="w-full block rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-[#e5e7eb]"
            />
          </div>

          <div className="w-full lg:max-w-[50%] pt-10 lg:pt-0">
            <div className="relative border-l border-[#e5e7eb] pl-6 ml-3">
              {(timelineSection?.items?.length ? timelineSection.items : [
                { title: "Contact Us", description: "Reach out to us via email, phone or our website." },
                { title: "SEO and PPC", description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
                { title: "Share Your Goals", description: "Share your challenges and objectives." },
                { title: "Consultation", description: "Our experts will craft SEO strategies tailored to your needs." },
                { title: "Tailored Plan", description: "Get a customized plan with clear strategies and outcomes." },
                { title: "Out Turn", description: "Achieve measurable results in record time." },
              ]).map((item, index) => (
                <div key={item.id || index} className="relative mb-[40px] last:mb-0">
                  <div className="absolute left-[-31px] top-1 w-[14px] h-[14px] rounded-full border-2 border-[#e31e24] bg-white shadow-[0_0_8px_rgba(227,30,36,0.4)] z-[2]"></div>

                  <div>
                    <h3 className="mb-[8px] text-[22px] max-[769px]:text-[19px] font-heading font-bold text-[#2b2b2e] leading-tight">{item.title}</h3>
                    <p className="text-[15px] leading-[1.6] text-[#4b5563]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <Industry />

      {/* Case Study Section */}
      <Casestudy />

      {/* PPC Management Checklist Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 uppercase leading-tight">
            {ppcManagementSection?.title || "HOW DO WE MANAGE PPC CAMPAIGNS"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto mb-16">
            {ppcManagementSection?.description || `Digicore Inc. is the best PPC agency in Delhi NCR, that helps businesses drive measurable growth through result-driven paid advertising services. We deliver well-tailored PPC services for all-sized businesses at cost-effective plans. We focus on performance, and not short-term clicks or traffic. Our strategic, data-driven, and conversion-focused approach ensures maximum ROI from every ad spend. With the optimal utilization of advanced tools, audience insights, and AI-powered bidding strategies, we optimize campaigns across Google Search, Display, YouTube, Shopping, Performance Max, and social platforms. At Digital Markitors, our certified PPC experts consistently monitor, test, and optimize campaigns to scale results in a sustainable manner. With years of experience and proven success, Digicore Inc. is trusted as one of the best PPC agencies in Delhi for measurable business growth.`}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            <div className="flex flex-col gap-4">
              {displayLeftItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-[15px] leading-[1.6] bg-white p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#e5e7eb]/60 transition-all duration-300 hover:translate-x-[8px] hover:border-[#e31e24]/20">
                  <span className="text-[#e31e24] font-bold mr-1 shrink-0">☑</span>
                  <p className="text-[#4b5563] m-0">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {displayRightItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-[15px] leading-[1.6] bg-white p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#e5e7eb]/60 transition-all duration-300 hover:translate-x-[8px] hover:border-[#e31e24]/20">
                  <span className="text-[#e31e24] font-bold mr-1 shrink-0">☑</span>
                  <p className="text-[#4b5563] m-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dominate Section */}
      <section className="w-full py-24 px-5 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {helpCardsSection?.heading || "How Can We Help You Grow"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            Digicore Inc. is the top PPC company in Delhi and our PPC solutions are beneficial for all-sized businesses to maximize brand exposure in a short time span. We offer a strategically tailored solution to our client through exclusively planned campaigns and boost our PPC services while keeping in mind the budget allocation. Based on client’s budget limit, we strategize PPC campaigns that can boost up your advertisements on various search engines and ultimately attract targeted traffic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayHelpCards.map((item, index) => (
              <div
                className="group bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(227,30,36,0.1)] hover:border-[#e31e24]/20 transition-all duration-300 flex flex-col items-center text-center"
                key={index}
              >
                <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-[18px] font-bold text-[#2b2b2e] mb-3">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#4b5563]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section with Checklists */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 uppercase">
            {whyChooseDigicoreSection?.title || (<>Why Choose Digicore Inc. as YOUR<br />PPC AGENCY IN DELHI</>)}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyChooseDigicoreSection?.description || "Digicore Inc. is a leading PPC company serving businesses across Delhi NCR. We help brands generate qualified leads and conversions through carefully planned, data-driven paid advertising strategies. We don’t believe in running ads randomly or chasing short term goals. Every PPC campaign is built around business goals, audience intent, and measurable outcomes. From keyword selection to bid optimisation and conversion tracking, our approach is structured, transparent, and performance-led. Our PPC strategies are designed to maximise returns, manage ad spend, and deliver consistent results across platforms like Google Ads and social media advertising. Here’s why businesses trust Digicore Inc. for PPC management:"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <ul className="space-y-3.5">
                {(whyChooseDigicoreSection?.points?.length ? whyChooseDigicoreSection.points : [
                  "We have a team of seasoned professionals that tailors and monitors PPC campaigns",
                  "Our measurable results for all-sized business are aligned with the growth-first mindset",
                  "Transparency and clarity are maintained in our reporting system to keep clients ahead of their competitors",
                  "All our PPC strategies are result-driven and customized to ensure client-specific outcome",
                  "We employ future-ready and growth-driven approach for the success of all the PPC campaigns",
                  "We have served multiple industries and known for proven expertise to deliver top results through best PPC services",
                  "Our PPC services improve the performance, visibility and engagement rate of brands in a cost-effective manner",
                ]).map((point, index) => (
                  point && (
                    <li key={index} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563] bg-white p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#e5e7eb]/60 transition-all duration-300 hover:translate-x-[8px] hover:border-[#e31e24]/20">
                      <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                      <span>{point}</span>
                    </li>
                  )
                ))}
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200">
              <img
                src={whyChooseDigicoreSection?.imageUrl ? resolveImage(whyChooseDigicoreSection.imageUrl) : graphImg}
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
      <section className="w-full py-24 px-5 bg-white border-t border-b border-[#e5e7eb]">
        <div className="max-w-[850px] mx-auto">
          <div className="text-center mb-12">
            <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
            <h2 className="text-[36px] font-heading font-extrabold text-[#1c1c1e] uppercase">
              {c?.faqSection?.title || "PPC AGENCY DELHI FAQS"}
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
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? "bg-[#e31e24] text-white" : "bg-[#e31e24]/8 text-[#e31e24]"
                      }`}
                    >
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
};

export default PPC;
