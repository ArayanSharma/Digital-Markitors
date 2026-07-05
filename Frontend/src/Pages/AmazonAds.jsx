
import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

import impact from "../assets/impact.webp";
 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 import Industry from "../Components/Sections/Industry";
import Casestudy from "../Components/Sections/Casestudy";

import seoRimg from "../assets/real-seo-result.webp";
import heroImg from "../assets/a.png";
import graphImg from "../assets/graph-l.webp";
 import eimage from "../assets/BannerImg/AmazonAds.png";
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
import seocase1 from "../assets/case1.png";
import seocase2 from "../assets/case2.png";
import seocase3 from "../assets/case3.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const AmazonAds = () => {
  const { content: c } = usePageContent("amazon-ads");
  const banner = c?.banner;
  const aboutSection = c?.aboutSection;
  const visibilitySection = c?.visibilitySection;
  const performanceSection = c?.performanceSection;
  const seoAgencySection = c?.seoAgencySection;
  const servicesSection = c?.servicesSection;
  const whyChooseSection = c?.whyChooseSection;
  const timelineSection = c?.timelineSection;
  const whyChooseDigicoreSection = c?.whyChooseDigicoreSection;
  const faqSection = c?.faqSection;
  const helpCardsSection = c?.helpCardsSection;

  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });

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
     "For The Moto Men, we executed a Noida-focused PPC campaign to drive high-intent enquiries for premium car detailing services. Nearly 80% of the enquiries were highly relevant, aligned with both location and service intent. From these qualified enquiries, the campaign achieved a conversion rate of up to 12.5%, delivering consistent and measurable business impact. The strategy focused on precise location targeting, intent-driven keywords, and continuous optimisation to maintain lead quality while minimising wasted ad spend." ]
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
     "For IOD Global, we executed a Google Display Campaign focused on increasing brand visibility and recall among the right audience segments. The campaign was designed to build consistent exposure through targeted placements and audience-based targeting. The strategy prioritised relevant impressions, controlled reach, and brand presence. Continuous optimisation ensured stable performance and efficient delivery aligned with the brand’s objectives while avoiding irrelevant traffic."
    ]
  }
];
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
          title: "Amazon Seller & Vendor Account Setup",
          description:
            "We execute comprehensive Amazon seller and vendor account setup that includes tax compliance, verification, catalog integration, and dashboard optimization. This further helps in smooth onboarding, ensuring error-free listings, profitability and consistent business growth backed by scalable account management services.",
        },
    
        {
          icon: socialIcon,
          title: "Product Listing Creation & A+ Content Optimization",
          description:
            "Our well-optimized product listings include bullet points, keyword-rich titles, images and A+ content to improve conversion and visibility of the brand, Besides, the brand presence and consistent sales growth can be witnessed on Amazon.",
        },
    
        {
          icon: ppcIcon,
          title: "Keyword Research & Listing Optimization",
          description:
            "Based on the keyword research, we optimize listings with the high-intent terms. This improves clickthrough rates, search rankings, discoverability, and conversion and align the product with updated algorithm for consistent Amazon seller account growth.",
        },
    
        {
          icon: webIcon,
          title: "Amazon Storefront Design & Management",
          description:
            "The professional Amazon storefronts are designed and managed by our experts while focusing on the structured layouts, engaging visuals and brand-focused messaging. This helps us in boosting engagement, improving customer experience and driving higher across your seller account.",
        },
    
        {
          icon: contentIcon,
          title: "Inventory Planning & Stock Management",
          description:
            "Inventory planning and stock levels are managed through our Amazon seller account management services to address forecasting and replenishment strategies. As a result, stockouts can be prevented, healthy account metrics are maintained, overstorage fees can be reduced while ensuring smooth sales performance on Amazon.",
        },
    
        {
          icon: ormIcon,
          title: "Amazon Advertising (PPC) Management",
          description:
            "Our Amazon PPC campaigns are managed through bid optimization, performance tracking, and data-driven keyword targeting to maximize visibility while controlling the ad spend. As a result, scalable growth, profitability, and returns on advertising spend also improve.",
        } ,
        {
          icon: ormIcon,
          title: "Brand Registry & Brand Protection Support",
          description:
            "Our Amazon seller account management professionals safeguard intellectual property, eliminate counterfeit listings, strengthen long-term brand credibility while maintaining listing control.",
        } ,
        {
          icon: ormIcon,
          title: "Account Health Monitoring & Issue Resolution",
          description:
            "At Digicore Inc., our professionals evaluate account health metrics, address policy violations, regulate performance warnings and suspension risks. This helps us in complying with the updated guidelines of Amazon to maintain uninterrupted sales operations and improve seller performance.",
        } ,
        {
          icon: ormIcon,
          title: "Policy Compliance & Case Management with Amazon",
          description:
            "We communicate with the seller support and handle seller cases to manage Amazon policy compliance. Besides, submitting appeals, resolving violations and preventing suspensions, we ensure smooth account management operation without interruption and long-term business stability.",
        } ,
        {
          icon: ormIcon,
          title: "Review & Rating Management Strategy",
          description:
            "To improve feedback quality, monitor negative reviews, address cases promptly, and strengthen product credibility, we implement these services. Besides, trust and conversion performance across Amazon sell account also improve through these services.",
        } ,
        {
          icon: ormIcon,
          title: "Sales Performance Tracking & Reporting",
          description:
            "Our detailed reports and dashboards help us tracking sales performance, analyzing revenue, conversions, trends to deliver insights for smart decision-making and uninterrupted business growth of Amazon seller account is supported by these services.",
        } ,
        {
          icon: ormIcon,
          title: "Growth & Scaling Strategy",
          description:
            "Our professionals analyze performance data, expand portfolios and optimize advertising through growth and scaling strategies. This helps Amazon sellers to drive sustainable growth and long-term success in the marketplace.",
        }

      ];

      const displayServices = servicesSection?.services?.length
        ? servicesSection.services.map((s, i) => ({ ...s, icon: resolveImage(s.iconUrl) || [seoIcon, socialIcon, ppcIcon, webIcon, contentIcon, ormIcon][i % 6] }))
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
    title: "Make More Sales",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
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
    question: "In how much time can I expect Google display ads?",
    answer:
      "The initial results in terms of brand visibility reflect in a short span. However, the meaningful conversions and engagement take up to few weeks to improve through consistent optimization.",
  },
  {
    question:
      "Are Google display ads beneficial for remarketing?",
    answer:
      "Yes! Google display ads re-engage the visitors by showing them tailored ads of products & services they have browsed. This is one of the best ways to increase conversion opportunities and brand recall.",
  },
  {
    question:
      "Is it important to optimize Google display ads frequently?",
    answer:
      "Yes! In order to achieve desirable results from Google display ad management services, it is essential to optimize the campaigns regularly. The performance reviews and bid adjustments of these ads should be weekly or consistently monitored.",
  },
  {
    question:
      "Why should I choose Digicore Inc. for Google display ad management services?",
    answer:
      "At Digicore Inc., continuous ad optimization, transparent reporting and data-driven targeting helps our seasoned Google display ad specialists in delivering measurable outcome. We ensure consistent performance and tailored advertising results",
  }

];

const displayFaq = faqSection?.faqItems?.length ? faqSection.faqItems : faqData;


  return (
    <>

     <Banner

      title={banner?.title || "Amazon Seller Account Management Services"}
      description={banner?.description || "Digicore Inc. provides comprehensive account management services to Amazon sellers. With the detailed data-driven insights, inventory management is optimized by our account management experts. We focus on the consistent growth of ecommerce business by helping sellers increase their Amazon rankings."}
      primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
      secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
      backgroundImage={banner?.backgroundImageUrl ? resolveImage(banner.backgroundImageUrl) : eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
       {aboutSection?.title || (<>Amazon Seller Account & Ads <br />Management Services</>)}
          </h1>



          <p>
   {aboutSection?.description || "Digicore Inc. is one of the trusted companies known for its reliable Amazon seller account management services that improve presence of sellers in the marketplace. To address the challenges related to inventory management, updated policies, increased fees or account suspension and many other issues, our seasoned professionals help Amazon sellers in seeking the customized solution. At Digicore Inc., our best Amazon seller account management services improve the visibility of businesses and their performance in the online marketplace. From increasing the brand awareness, boosting conversion rates, increasing sales and customization of campaigns to comprehensive account management services, we address all the aspects according to the business growth goals of clients. Our professional Amazon account managers focus on the long-term account management goals of sellers and based on the same, contribute to their business growth"}
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
        {visibilitySection?.title || "Why Amazon seller account management services are essential for business growth?"}
            </h2>

            <p>
           {visibilitySection?.description || "Amazon seller account management services are aimed at improving the visibility and performance of products sold in the marketplace. At Digicore Inc., our qualified seller account management experts fix the issues that hamper the visibility and growth of brands on Amazon. Whether it is through product listing optimization, boosting conversion rates, improving search visibility in the marketplace or addressing the detailed aspects of business growth, our team employs the best-in- class practices for Amazon seller account management."}
</p>

            <div className="orange-line"></div>

          </div>

          <div className="visibility-image">
            <img src={visibilitySection?.imageUrl ? resolveImage(visibilitySection.imageUrl) : graphImg} alt="Graph" />
          </div>

        </div>

      </section>

        

     <section className="performance-section">
  <div className="performance-container">
    <div className="performance-left">
      <h2>{performanceSection?.items?.[0] || "TRACK"}</h2>
      <h2>{performanceSection?.items?.[1] || "ANALYZE"}</h2>
      <h2>{performanceSection?.items?.[2] || "SCALE"}</h2>
      <h2>{performanceSection?.items?.[3] || "REPEAT"}</h2>
    </div>

    <div className="performance-right">
      <img src={performanceSection?.imageUrl ? resolveImage(performanceSection.imageUrl) : seoRimg} alt="SEO Performance" />
    </div>
  </div>
</section>



            <section className="seo-agency-section">
  <div className="seo-container">

    <div className="seo-heading">
      <div className="seo-line"></div>

      <h2>{seoAgencySection?.heading || (<>Why do I need Amazon account <br />management service provider?</>)}</h2>

      <p>
  {seoAgencySection?.headingDescription || "From saving time and efforts to aligning the seller account management goals properly, it is essential to hire an experienced professionals. At Digicore Inc., we ensure comprehensive Amazon seller account management support is offered to clients, thereby, helping them in achieving long-term success. As a part of our services, we streamline operations, optimize sales performance, and improve visibility & performance of sellers in the marketplace. At Digicore Inc., we help our clients in complying with Amazon’s updated policies and uncover the other algorithm-based changes to enhance store’s performance. Besides, we ensure that our Amazon SEO expertise and end-to-end fulfilment aspects are timely addressed through account management services. The whole idea is to provide excellent customer service while adhering to Amazon policies."}
      </p>
    </div>

     <div className="seo-content">

      <div className="seo-left">

        <h3>{seoAgencySection?.problemTitle || "The Problem"}</h3>

        <p>
       {seoAgencySection?.problemDescription || "Many Amazon sellers face challenges such as profitability getting delayed, pricing wars by competitors for stealing customers with slashed price, not able to comprehend latest compliance & regulatory aspects of Amazon, and inventory management. Additionally, the execution of return policy, and addressing Amazon fees and expenses along with massive competition in the marketplace are some of the issues that need to be resolved professionally."}
        </p>

        <h3>{seoAgencySection?.solutionTitle || "The Solution"}</h3>

        <p>
    {seoAgencySection?.solutionDescription || "At Digicore Inc., we emphasize on the use of strategically planned Amazon seller account management services to support business growth with data-based insights. With the comprehensive support extended to Amazon sellers, the account setup and optimization, inventory & order management, product listing & SEO optimization, customer services and review management are aligned together to improve sales & visibility of the brand. With our customized and well-planned Amazon seller account management services, the risk of account suspension due to non-compliance with the marketplace can be reduced."}
        </p>

      </div>

      <div className="seo-right">

        <p>
     {seoAgencySection?.additionalDescription || "Our qualified seller account management professionals maximize profitability by handling the time- consuming task with utmost expertise. Digicore Inc. maintains transparency, customization, and ensures the expertise related to Amazon seller account management services address the business growth of clients in a short span of time. Our proactive account managers stay updated with updated algorithm changes, Amazon compliance policies, and streamline all the tasks of seller account management to help businesses focus on their growth"}
        </p>

      </div>

    </div>

  </div>
</section>


 <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {servicesSection?.heading || "Amazon Account Management Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {servicesSection?.description || "At Digicore Inc., we focus on comprehensive Amazon seller account management services keeping in mind, the diverse goals of improved performance, visibility, and growth in the marketplace. After helping countless Amazon sellers in complying with the regulatory & operational guidelines of the marketplace, we have emerged as the trusted resource for removing hurdles hampering the growth of sellers. Our data-driven and cutting-edge methodology of Amazon seller account management services increase revenue and sales apart from improving the performance of brand online."}
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

      <section
        className="relative py-[100px] px-5 bg-[#1c1c1e] text-center min-h-[300px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 28, 30, 0.9), rgba(28, 28, 30, 0.95)), url(${whyChooseSection?.backgroundImageUrl ? resolveImage(whyChooseSection.backgroundImageUrl) : bgIcon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 text-center max-w-[1000px] mx-auto">
          <h1 className="text-white text-[42px] max-[769px]:text-[30px] font-heading font-extrabold leading-[1.2] mb-[40px] uppercase">
            {whyChooseSection?.title || "Ready for More Traffic, Leads & Sales? Start SEO Now."}
          </h1>

          <div className="flex justify-center items-center gap-5 max-[769px]:flex-col">
            <a
              href={whyChooseSection?.buttons?.[0]?.link || "https://wa.me/919818888064"}
              className="flex items-center justify-center gap-[10px] bg-white hover:bg-[#f0fdf4] hover:scale-[1.03] transition-all duration-300 text-[#22c55e] h-12 px-7 rounded-lg text-base font-bold no-underline shadow-[0_4px_15px_rgba(34,197,94,0.16)] border border-[#22c55e]/25"
            >
              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
                className="w-[20px] h-[20px] rounded-full bg-[#22c55e] p-[3px] object-contain"
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
      <section className="impact-sec" style={{ backgroundColor: "#fff" }}>

        <div className="impact-container">

          <div className="impact-image bg-white rounded-[24px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-[#e5e7eb]/80 p-5 md:p-6 flex items-center justify-center max-w-[500px] w-full">
            <img
              src={timelineSection?.imageUrl ? resolveImage(timelineSection.imageUrl) : impact}
              alt="Impact"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="timeline-section">

            <div className="timeline relative">
              <div className="absolute left-[8px] top-2 bottom-2 w-[2px] bg-[#e31e24] z-[1]"></div>

              {timelineSection?.items?.length ? (
                timelineSection.items.map((step, i) => (
                  <div className="timeline-item" key={step.id || i}>
                    <div className="relative z-[2] mt-2 flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#e31e24] bg-white shrink-0">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#e31e24]"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-[20px] font-heading font-extrabold text-[#2b2b2e] mb-1">{step.title}</h3>
                      <p className="text-[#4b5563] text-[15px] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="timeline-item">
                    <div className="relative z-[2] mt-2 flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#e31e24] bg-white shrink-0">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#e31e24]"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-[20px] font-heading font-extrabold text-[#2b2b2e] mb-1">Contact Us</h3>
                      <p className="text-[#4b5563] text-[15px] leading-relaxed">
                        Get in touch with us via email, phone or website.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="relative z-[2] mt-2 flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#e31e24] bg-white shrink-0">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#e31e24]"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-[20px] font-heading font-extrabold text-[#2b2b2e] mb-1">Share Your Goals</h3>
                      <p className="text-[#4b5563] text-[15px] leading-relaxed">
                        Tell us about your business and marketing goals.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="relative z-[2] mt-2 flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#e31e24] bg-white shrink-0">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#e31e24]"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-[20px] font-heading font-extrabold text-[#2b2b2e] mb-1">Consultation</h3>
                      <p className="text-[#4b5563] text-[15px] leading-relaxed">
                        Our expert will discuss strategies tailored to your business.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="relative z-[2] mt-2 flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#e31e24] bg-white shrink-0">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#e31e24]"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-[20px] font-heading font-extrabold text-[#2b2b2e] mb-1">Proposal & Plan</h3>
                      <p className="text-[#4b5563] text-[15px] leading-relaxed">
                        We provide a customized strategy and roadmap.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="relative z-[2] mt-2 flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#e31e24] bg-white shrink-0">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#e31e24]"></div>
                    </div>
                    <div className="timeline-content">
                      <h3 className="text-[20px] font-heading font-extrabold text-[#2b2b2e] mb-1">Partner & Grow</h3>
                      <p className="text-[#4b5563] text-[15px] leading-relaxed">
                        Drive high-impact traffic and measurable growth.
                      </p>
                    </div>
                  </div>
                </>
              )}

            </div>

          </div>

        </div>

      </section>

    
<section className="bg-slate-50 py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
        {helpCardsSection?.heading || "How Can We Help You Grow"}
      </h2>
      <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#e31e24]"></div>
      <p className="mt-6 text-base sm:text-lg text-slate-600 leading-8">
        Digicore Inc. is a leading SEO agency in Delhi. We help businesses evolve by providing them with the best SEO strategies and solutions designed specifically to improve visibility to the people who matter most. We combine cutting-edge SEO strategies, including technical SEO, high-quality content and strategic link building to deliver results that help brands outspace the competition and remain relevant for longer than they can imagine. We utilize a data-driven approach to ensure you:
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {((helpCardsSection?.helpCards && helpCardsSection.helpCards.length > 0) ? helpCardsSection.helpCards : helpCards).map((item, index) => (
        <div key={index} className="rounded-[32px] bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
          <div className="mb-5 h-16 w-16 flex items-center justify-center rounded-3xl bg-[#f7f7fb]">
            <img
              src={resolveImage(item.iconUrl) || item.icon}
              alt={item.title}
              className="h-10 w-10 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
          <p className="text-slate-600 leading-7">{item.desc || item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[#e31e24]"></div>
      <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
        {whyChooseDigicoreSection?.title || "How Do We Manage Amazon Seller Account"}
      </h2>
      <p className="mt-5 text-base sm:text-lg text-slate-600 leading-8">
        {whyChooseDigicoreSection?.description || "At Digicore Inc., we ensure structured, and performance driven approach is employed to manage Amazon seller accounts. With the objective to adhere to the marketplace compliance and uninterrupted business growth, our dedicated account managers begin with the complete account setup and optimization. As a part of optimization, listings, storefront design, and brand registry support are aligned with the keyword research and product visibility. The consistent account optimization adheres to the updated algorithm, thereby, monitoring the account health, policy level and customer feedback to prevent revenue loss and suspensions. Apart from the seller account management, we also manage Amazon PPC campaigns with data-driven approach to control ad spend."}
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <div>
        <ul className="space-y-4 text-base sm:text-lg text-slate-700">
          {whyChooseDigicoreSection?.points?.length ? (
            whyChooseDigicoreSection.points.map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1 text-[#e31e24]">✔</span>
                <span>{point}</span>
              </li>
            ))
          ) : ([
              "Our seasoned professionals with profound experience tailors and execute Google shopping ad campaigns",
              "We prioritize growth-mindset to deliver data-driven and consistent advertising results for all-sized businesses",
              "Our reporting system maintains clarity and transparency to execute all the Google display ad campaigns according to competitor analysis",
              "We focus on client-centric and result-driven approach to target advertising goals in a specified time span",
              "All our Google display ad management services are sustainable and aimed at consistent business growth",
              "Our proven expertise of Google display ad management has helped businesses of diverse segments to achieve their advertising objectives.",
              "Partner with us to improve the engagement rate, visibility and performance of your business with our cost-effective Google Display ad management services",
            ].map((bullet, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="mt-1 text-[#e31e24]">✔</span>
                <span>{bullet}</span>
              </li>
            )))}
        </ul>
      </div>

      <div className="rounded-[32px] bg-slate-50 p-5 shadow-sm">
        <img
          className="w-full rounded-[28px] object-cover"
          src={whyChooseDigicoreSection?.imageUrl ? resolveImage(whyChooseDigicoreSection.imageUrl) : graphImg}
          alt="Graph"
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
         <h2>{faqSection?.heading || "FAQ"}</h2>
         <div className="faq-line"></div>
       </div>

       <div className="faq-container">
         {displayFaq.map((faq, index) => (
           <div
             key={index}
             className={`faq-item ${
               activeIndex === index ? "active" : ""
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
               className={`faq-answer ${
                 activeIndex === index ? "show" : ""
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

export default AmazonAds
