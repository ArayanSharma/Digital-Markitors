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
import eimage from "../assets/BannerImg/SocialMediaListening&ResponseManagement.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const SocialMediaM = () => {
  const { content: c } = usePageContent("SocialMediaM");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const workSection = c?.workSection;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const impactData = c?.impact?.items?.length ? c.impact : null;
  const whyBusiness = c?.whyBusiness;

  const counterTargets = {
    count1: c?.counter?.count1 ?? 50,
    count2: c?.counter?.count2 ?? 52,
    count3: c?.counter?.count3 ?? 61,
    count4: c?.counter?.count4 ?? 44,
  };

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
    const max = Math.max(counterTargets.count1, counterTargets.count2, counterTargets.count3, counterTargets.count4);

    const interval = setInterval(() => {

      start += 1;

      setCounts({
        count1: start <= counterTargets.count1 ? start : counterTargets.count1,
        count2: start <= counterTargets.count2 ? start : counterTargets.count2,
        count3: start <= counterTargets.count3 ? start : counterTargets.count3,
        count4: start <= counterTargets.count4 ? start : counterTargets.count4,
      });

      if (start >= max) {
        clearInterval(interval);
      }

    }, 30);

    return () => clearInterval(interval);

  }, [counterTargets.count1, counterTargets.count2, counterTargets.count3, counterTargets.count4]);

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
      title: "The Moto Men Car Detailing Meta Ads Case Study: From 40% to 100% Location-Relevant Leads",
      image: seocase,
      descriptions: [
        "When The Moto Men approached us for Meta Ads, the challenge wasn’t lead volume – it was lead relevance. Many enquiries were coming from outside serviceable locations, impacting conversions and efficiency. The objective was to improve lead quality without increasing budgets or volumes. By implementing a location-first Meta Ads strategy and refining targeting and creatives, the campaigns began delivering only location-relevant, high-intent enquiries. As a result, lead quality improved significantly, conversions increased, and advertising spend became far more efficient with reduced wastage."]
    },

    {
      title: "Book My Laundry Brand Awareness & Franchise Lead Generation Case Study (Delhi NCR)",
      image: seocase,
      descriptions: [
        "When Book My Laundry partnered with us, the goal was to build strong brand awareness and generate high-quality franchise enquiries across Delhi NCR, including Noida, Ghaziabad, and Greater Noida. Earlier campaigns faced lead relevancy issues, with many accidental or low-intent enquiries. We executed a customised Meta Ads strategy using reel and static formats, supported by a custom-built lead form to filter genuine franchise interest. Alongside paid campaigns, we managed complete social media marketing to strengthen brand recall and trust across target locations. The result was a significant improvement in enquiry quality, ensuring leads were relevant, intentional, and aligned with franchise expansion goals."]
    },

    {
      title: "My Plate Manage (Dietician Binny) Meta Ads Case Study: 80% Lead Relevancy & Improved Conversions",
      image: seocase,
      descriptions: [
        "My Plate Manage partnered with us to improve lead quality for Meta Ads campaigns after facing issues with high lead costs and low relevancy from earlier setups. While enquiries were coming in, most lacked intent and did not convert. We restructured the Meta Ads strategy with a quality-first approach, refining targeting, messaging, and lead filtering to attract genuinely interested users instead of accidental submissions. The campaign delivered stronger lead relevancy, improved conversion rates, and a more cost-effective acquisition process, helping the brand connect with the right audience consistently."]
    }
  ];
  const services = [

    {
      icon: seoIcon,
      title: "ESocial Media Advertising",
      description:
        "ODigicore Inc. empowers robust data-driven social media marketing services aimed at improving brand’s visibility in national search results. Our best SMM practices attract high-quality traffic and address conversion goals.",
    },

    {
      icon: socialIcon,
      title: "Instagram Marketing Services",
      description:
        "With AI-powered keyword research, insights and other technical social media marketing strategies, we drive real-time engagement for Instagram.",
    },

    {
      icon: ppcIcon,
      title: "Meta Marketing Services",
      description:
        "Keeping in mind, the metrics of Facebook, trends, analytics, and the latest social media marketing strategies, we recommend the result-driven solution to clients.",
    },

    {
      icon: webIcon,
      title: "LinkedIn Marketing Services",
      description:
        "From creating LinkedIn ad campaigns, executing the ads, audience targeting and segmentation to achieving measurable goals, our best social media marketing services in Delhi make brand’s growth simplified.",
    },

    {
      icon: contentIcon,
      title: "Video Marketing",
      description:
        "Delivering high-quality technical SEO to improve site speed, mobile performance and site architecture to help brands stand out in search visibility.",
    },

    , {
      icon: ormIcon,
      title: "Influencer Marketing",
      description:
        "Helping brands tell their story in a unique way and forge deeper connections with audiences through our high-quality content marketing services.",
    }
    , {
      icon: ormIcon,
      title: "E-commerce Meta Ads",
      description:
        "Whether you want to promote your e-commerce business, boost sales or uncover the top strategies to attract target audience to your online store, our e-commerce social media marketing services will deliver a customized solution",
    }
    , {
      icon: ormIcon,
      title: "Social Listening Services",
      description:
        "Manage your brand’s reputation, evaluate the reviews of users regarding your business, and know how to implement the reputation management plan with our SMM experts. Based on the assessment, we offer you the customized solution.",
    }
    , {
      icon: ormIcon,
      title: "CPerformance Tracking & Analytics",
      description:
        "Our best social media marketing services are focused on telling brand’s story and connecting the brand with the wider audience through performance tracking & analytics",
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

  const displayDominateCards = c?.dominate?.cards?.length
    ? c.dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
    : helpCards;

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
        title={banner?.title || "Social Media Marketing Agency in Delhi for Brands That Want Results"}
        description={banner?.description || "Digicore Inc., the best Social Media Marketing agency in Delhi focuses on the latest trends of engaging the audience on various platforms. We improve the digital presence of your brand through our data-driven social media marketing services."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {about?.heading || "The Best Social Media Marketing Services in Delhi"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {about?.body || "In the digital landscape, it is essential for business to evolve online and adapt to the modern changes to strengthen business visibility. At Digicore Inc., we are a team of highly qualified SMM professionals that attracts potential customers further driving conversion, revenue and improved brand presence. With our result driven SMM approach, we ensure your product or services appear online every time SMM user searches for a SMM services."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibility?.heading || "Build a great digital experience with SMM Agency in Delhi"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibility?.body || (<>With the increase SMM preferences, businesses need to keep their SMM campaigns updated and optimized. Besides, to address the SMM, easily navigable and productive browsing SMM, the new-age SMM services need to be availed.
                  <br /><br />
                  Digicore Inc., the top SMM agency based in Delhi NCR instils SMM in SMM practices. SMM comprehensive strategies SMM, improving engagement and providing real-time support make SMM SMM services SMM.</>)}
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

      {/* Video Block Section */}
      <section className="w-full py-20 px-5 bg-white text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-12">
            {workSection?.title || "We balance visual aesthetics with strategic insights to build digital solutions that truly perform."}
          </h2>

          <div className="w-full max-w-[900px] mx-auto rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 aspect-[16/9]">
            <iframe
              src={workSection?.videoUrl || "https://www.youtube.com/embed/RugY9uuIJhY?si=Fo5RhkPp1OCzm0jH"}
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
            {seoAgency?.heading || "Why Do I Need an social Media Marketing Agency in Delhi?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto mb-16">
            {seoAgency?.intro || "Over 60% of active users of social media platforms who rely on business information prefer Instagram, Facebook, YouTube, X and WhatsApp. Apart from just posting the content on the respective platform, it is essential to create viral, engaging and trending posts. From reels, stories, and other content that help social media users in accessing the information on the subject of their choice has to be prioritized. At Digicore Inc., we use creative and business-oriented social media marketing strategy to generate leads, improve brand’s visibility and drive business growth. Our top social media marketing services are business-oriented and data-driven to attract high-quality traffic. We also focus on converting the leads through result-driven SMM practices."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-[#e31e24] font-heading font-extrabold mb-3">
                  {seoAgency?.problemTitle || "The Problem"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.problemBody || "At present, most of the businesses rely on in-house social media plans and post content without strategic implementation. This may show the business profile active on the respective social media platform, but, may not attract audience or deliver quality leads. Besides, the engagement rate is also low due to inconsistent content strategy. This is where social media marketing becomes tough due to the constant algorithm changes, increasing ad cost, industry competition, and other factors."}
                </p>
              </div>

              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-emerald-600 font-heading font-extrabold mb-3">
                  {seoAgency?.solutionTitle || "The Solution"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.solutionBody || "It is advisable to hire the top social media marketing professionals in Delhi who will apply expertise, creativity, and offer customized solution. At Digicore Inc., the top Social Media Marketing Agency in Delhi, we focus on the goal-specific, creative content, and engaging strategy according to the daily budget of the client. Besides, our A/B testing improves the visibility of brand, further attracting target audience on various social media platforms."}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563] lg:pt-2">
              <p>
                {seoAgency?.rightBody || "The prevalence of AI has impacted the user behaviour of users. It is not necessary that a social media marketing plan that was successful last year will perform the same way. However, when you count on Digicore Inc. to customize SMM plan, our social media marketing experts use AI tools and follow latest trends to optimize your campaign. Backed by data and insights, we address business growth factors to improve visibility of your brand through organic and paid social media marketing services."}
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
            {discover?.description || "At Digicore Inc., we offer comprehensive SMM services keeping in mind the trends, changing dynamics of social media and business goals of clients. We harness the power of AI and also focus on the modern approach to promote business through interactive and relevant content posted strategically."}
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
              src={impactData?.image ? resolveImage(impactData.image) : impact}
              alt="Impact"
              className="max-w-full h-auto rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100 object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-[#e5e7eb] space-y-8">
              {(impactData?.items?.length ? impactData.items : [
                { title: "Contact Us", desc: "Reach out to us via email, phone or our website." },
                { title: "SEO and PPC", desc: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
                { title: "Share Your Goals:", desc: "Share your challenges and objectives." },
                { title: "Consultation:", desc: "Our experts will craft SEO strategies tailored to your needs." },
                { title: "Tailored Plan:", desc: "Get a customized plan with clear strategies and outcomes." },
                { title: "Out Turn:", desc: "Achieve measurable results in record time." },
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

      {/* Dominate Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {c?.dominate?.heading || "How Can We Help You Grow"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {c?.dominate?.description || "Digicore Inc. is the top social media marketing agency in Delhi that helps all-sized business in improving their brand awareness, driving website traffic & generating leads and sales. Besides, a loyal community of users can be engaged by sharing the strategically planned content on social media platforms. Our seasoned social media marketing professionals ensure cost-effective strategies to attract potential customers through viral content. Our customized social media marketing services ensure improved brand visibility, improve customer engagement and generate measurable ROI."}
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
            {whyBusiness?.heading || (<>Why Choose Digicore Inc. as YOUR<br />SOCIAL MEDIA MARKETING AGENCY IN DELHI</>)}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyBusiness?.description || "Digicore Inc. is a trusted social media marketing agency that addresses the long-term goals of all-sized businesses in Delhi NCR. We provide cost-effective and well-tailored SMM strategies based on the social media trends, updates and requirements. We address the social media marketing goals comprehensively for platforms including Instagram, LinkedIn, X, Twitter and WhatsApp through AI-powered methodology. Our proven strategies and expertise make us the reputable social media marketing agency in Delhi. The other reasons that make our brand reliable for social media maketing include:"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="why-left space-y-4">
              <ul className="space-y-3.5">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "We have a team of experienced SMM experts to tailor social media marketing strategies and solutions." },
                  { text: "With our growth-specific mindset, we target measurable results for all-sized business through customized SMM services." },
                  { text: "Our transparent and clear reporting system keeps clients updated about the project success" },
                  { text: "Digicore Inc. offers result-oriented and customized social media marketing services to achieve effortless business growth" },
                  { text: "We achieve all our SMM targets efficiently through growth-driven and future-ready mindset" },
                  { text: "We serve multiple industries and address their SMM goals with our business excellence and expertise." },
                  { text: "Proven experience and expertise across multiple industries" },
                  { text: "We focus on helping brands in achieving improved visibility, brand engagement, and improved ROI" },
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
              {c?.faqSection?.heading || "SOCIAL MEDIA MARKETING FAQS"}
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

export default SocialMediaM;
