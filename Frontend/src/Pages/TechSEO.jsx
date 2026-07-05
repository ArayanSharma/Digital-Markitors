import React, { useEffect, useState ,useRef} from "react";


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
import eimage from "../assets/BannerImg/TechnicalSeo.png";
 import { usePageContent, resolveImage } from "../hooks/usePageContent";

const Aeo = () => {
  const { content: c } = usePageContent("Technical-SEO");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
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
          title: "Technical SEO Audit",
          description:
            "With our expertise and updated skills, our technical SEO team focuses on the assessment of the core vitals of the website. From checking the crawlability, and indexing to aligning the site structure fixes, we look for the scope of improvement in the website.",
        },
    
        {
          icon: socialIcon,
          title: "Competitor Analysis",
          description:
            "We evaluate your website according to the site of your competitors before applying the technical SEO strategies. As a part of this process, we explore the improved conversion opportunity to attract target audience and improve brand awareness in the respective industry.",
        },
    
        {
          icon: ppcIcon,
          title: "Page Speed Optimization",
          description:
            "Ranking in the search results is majorly influenced by the page load speed. At Digicore Inc., we ensure image optimization, server optimization and code minification are properly aligned to optimize all your web pages. This helps in offering a seamless and fast user experience.",
        },
    
        {
          icon: webIcon,
          title: "Mobile Optimization",
          description:
            "The visibility of brand gets boosted through visually appealing and engaging banners through display ads. This helps brands in reaching targeted audiences and apps to drive conversion and awareness.",
        },
    
        {
          icon: contentIcon,
          title: "Structured Data Markup Implementation",
          description:
            "Search engines are able to understand the user intent with the proper structured data markup implementation. As a result, the website is shown higher on SERPs. We also ensure that click-through rates and content visibility get improved through this technical SEO services.",
        },
    
        {
          icon: ormIcon,
          title: "Penalty Recovery",
          description:
            "Website may get penalized if the algorithm updates or any SEO guidelines are not followed. With our corrective measures, we recover old rankings of the site. The performance of the website is boosted by our technical SEO experts after penalty removal.",
        } ,
        {
          icon: ormIcon,
          title: "Website Migration",
          description:
            "As a part of complicated domain migration process, the data needs to be retained without loss of rankings as well. At Digicore Inc., we update all the internal links, remove duplicate content and manage 404 pages while executing website migration process.",
        } ,
        {
          icon: ormIcon,
          title: "Backlink Audit",
          description:
            "Our comprehensive technical SEO audit of a website’s backlink profile are aimed at identifying and removing low-quality or harmful backlinks. We focus on improving search engine rankings and website authority through this technical SEO practice.",
        } ,
        {
          icon: ormIcon,
          title: "Fixing Broken Links",
          description:
            "The user experience can be hampered with the broken links on the website. This can also impact a website’s reputation negatively. Hence, our best technical SEO services are aimed at fixing the 404 error pages, broken links, and orphan pages.",
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
    title: "Discover",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: Icon2 ,
    title: "Analyze",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
    title: "Strategize",
    desc: "We help your brand gain strong recognition across digital platforms globally",
  },

  {
    icon: Icon4,
    title: "Maximizing ROI",
    desc: "Improve your team capabilities with advanced marketing strategies and guidance",
  },

];

  const displayDominateCards = c?.dominate?.cards?.length
    ? c.dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
    : helpCards;

const faqData = [
  {
    question: "What is the cost of technical SEO services?",
    answer:
      "The complexity of the website and the scope of improving the technical errors are evaluated to finalize the cost of technical SEO services. Besides, the competitive nature of business and industry-wise excellence required to fix the technical issues also influence the final cost estimate. For a further breakdown and exact price related to technical SEO services, you can connect with our experts.",
  },
  {
    question:
      "Can I expect faster results through technical SEO services?",
    answer:
      "The factors including the current state of the website, effectiveness of the implemented strategies and the current scope of improvement of website influence the final result derived from technical SEO services. On an average, the noticeable results can be seen in 3-4 weeks, but, at times, it may take up to several months to deliver significant outcome. But, our technical SEO experts focus on long-term and sustainable results by fixing all the issues of the website.",
  },
  {
    question:
      "Are technical SEO services included in On-page optimization?",
    answer:
      "Even though technical SEO and on-page optimization are interlinked, but, different components of SEO. On-page optimization focuses on aligning the HTML elements visible on the web page including meta descriptions, titles, headings, keywords and internal linking. On the other hand, technical SEO improves site speed, mobile friendliness, URL structure, sitemap, structured data and robots.txt. Hence, technical SEO services are different from on-page optimization even though, the two improve the visibility of website on SERPs.",
  },
  {
    question:
      "How is the success of technical SEO measured?",
    answer:
      "The improved search engine rankings, increased organic traffic, reduced crawl errors or broken links and faster page load times are some of the key metrics that help us in measuring the success derived from technical SEO services.",
  } ,
  {
    question:
      "What is crawl error and how can it affect my website?",
    answer:
      "At times, search engines are not able to access few web pages of your site, this leads to the crawl errors. As a result of these errors, the indexing opportunities may be lost and often result in lower rankings.",
  } 
   ,
  {
    question:
      "What is the impact of mobile-friendliness on website’s SEO rankings?",
    answer:
      "Mobile-friendliness of website boosts the ranking of website in search engines. But, if the user experience of website is poor on mobile, then, it can lead to low rank and a higher bounce rate.",
  } 
   ,
  {
    question:
      "ICan you handle website migration with technical SEO services?",
    answer:
      "Yes! We optimize technical elements like URLs, redirects, and sitemaps to ensure smooth website migration. This step of technical SEO services restores your website’s ranking while eliminating SEO related issues.",
  } 

];

  const displayFaqItems = c?.faqSection?.faq?.length ? c.faqSection.faq : faqData;

  return (
    <div className="bg-white">
      <Banner
        subtitle={banner?.subtitle}
        title={banner?.title || "Technical SEO That Enhances Speed, Crawlability & UX"}
        description={banner?.description || "We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
          
          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {about?.heading || "Technical SEO Services from India’s Fastest Growing SEO Agency"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {about?.body || "We have seasoned technical SEO experts who collaboratively work with the clients to resolve technical issues of the website. At Digicore Inc., we believe in constantly identifying, evaluating and addressing the technical issues of your website. Based on the type of issue, we offer customized technical SEO services to all-sized businesses. After removing all the issues, the website’s performance can be improved thereby, increasing its search visibility."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibility?.heading || "Improve your website’s performance with the top technical SEO services in Delhi"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibility?.body || "Digicore Inc., a trusted SEO agency in India with a profound experience focuses on improving website’s performance through best technical SEO services. Being the Google Premier partner, we blend SEO expertise with the world-class AI technologies to address the technical issues of our client’s website. Whether it is in terms of site visibility, user experience or speed, we focus on all the technical issues of the website comprehensively. Our team of SEO professionals comprises of technical SEO experts, data analysts, and content strategists who work harmoniously to address the critical site issues, thereby, offering optimal crawling, indexing, and better ranking. Our diverse technical SEO services include structure optimization, comprehensive site audit, site speed enhancement, and working over the mobile-friendliness of the website. Based on the customized business requirements of our clients, we tailor technical SEO services to maximize website performance while boosting its search engine rankings."}
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
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[55px] h-1 bg-[#e31e24] mx-auto mb-[18px] rounded-[10px]"></div>

          <h2 className="text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-8 uppercase leading-tight">
            {seoAgency?.heading || "Why Do I Need a Technical SEO Agency in India?"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto">
            {seoAgency?.description || "At Digicore Inc., we rely on innovative SEO practices, thereby, optimally utilizing data insights, automation tools and other best-in-class services to help our clients stay ahead in the market. From driving relevant traffic to improving ROI, our technical SEO experts ensure transparent reporting and long-term website success. Despite the type of business, consistent results and customized solutions have always improved our credibility as the best SEO company for technical fixes!"}
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {discover?.heading || "Technical SEO Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {discover?.description || "At Digicore Inc., apart from offering just PPC services—we intend to become a trusted digital growth partner for business growth. After gaining prominence in the digital marketing segment, we have consistently blended AI-powered PPC strategies and data-driven solutions and connected them with the target audience."}
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

      <Industry />
      <Casestudy />

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
            {c?.dominate?.heading || "How Can We Help You Grow"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {c?.dominate?.description || "At Digicore Inc., our technical SEO services include data-driven approach for optimization of website performance and ensure higher search engine visibility. As a part of these services, we conduct constant audits, optimization and advanced analytics to help brands attain long-term and sustainable success."}
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
            {whyBusiness?.heading || (<>Why Choose Digicore Inc. as YOUR<br />TECHNICAL SEO SERVICES AGENCY</>)}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyBusiness?.description || "Digicore Inc. employs cutting-edge practices to customized technical SEO services for all-sized businesses. Based on the nature of business, type of technical SEO issues, long-term business goals, page speed optimization, and improved user experience, we ensure the well-tailored plan is assured to the clients. With our best technical SEO services, we implement industry-specific expertise to fix the issues of website, thereby, troubleshooting them through suitable remedies. Here are some of the reasons that make us the preferred partner for technical SEO services: "}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="why-left space-y-4">
              <ul className="space-y-3.5">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "We have a team of certified SEO professionals including technical SEO experts, digital marketers, and content strategists with more than a decade’s experience" },
                  { text: "We offer industry-specific and comprehensive solution to fix technical issues" },
                  { text: "Detailed guidance and consistent monitoring of the website help client in achieving the diverse technical SEO goals" },
                  { text: "Digicore Inc. is a certified Google partner that helps you in fixing all the technical SEO issues efficiently." },
                  { text: "We offer measurable results and assure transparency and clarity in our services" },
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
              {c?.faqSection?.heading || "TECHNICAL SEO FAQS"}
            </h2>
          </div>

          <div className="space-y-4">
            {displayFaqItems.map((faq, index) => {
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
