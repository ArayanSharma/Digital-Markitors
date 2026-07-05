import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";

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
// Casestudy and Industry sections removed from this page per admin changes
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

const SeoService = () => {
  const { content: c } = usePageContent("seo-service");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const video = c?.video;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const impactData = c?.impact?.timeline?.length ? c.impact : null;
  const whyBusiness = c?.whyBusiness;

  const defaultCounters = [
    {
      value: 50,
      description: "of Indian shoppers check online before making an actual purchase.",
    },
    {
      value: 52,
      description: "of Indian shoppers now start their product searches on Instagram, YouTube, or Amazon.",
    },
    {
      value: 61,
      description: "of Indian users trust Google results for brands that shine on social media platforms.",
    },
    {
      value: 44,
      description: "of young users turn to AI-generated overviews instead of scrolling through traditional search results.",
    },
  ];

  const counterItems = Array.isArray(c?.counters) && c.counters.length > 0
    ? c.counters.map((ct, index) => ({
        value: Number(ct.value) || 0,
        description: ct.description || "",
        id: ct.id || index,
      }))
    : defaultCounters;

  const [counts, setCounts] = useState(counterItems.map((item) => item.value));

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
  const slider = sliderRef.current;

  if (!slider) return;

  const interval = setInterval(() => {
    const card = slider.querySelector(".workindustry-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 40;

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - cardWidth) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  }, 2000);

  return () => clearInterval(interval);
}, []);

      useEffect(() => {
        setCounts(counterItems.map((item) => item.value));
      }, [c?.counters]);


      const services = [
    
        {
          icon: seoIcon,
          title: "Enterprise SEO",
          description:
            "Offering tailored SEO strategies to help enterprises boost their online presence, attract high-quality, relevant traffic and leave a lasting impression.",
        },
    
        {
          icon: socialIcon,
          title: "Global SEO",
          description:
            "Helping brands rank higher in search engines with our Global SEO services designed for expanding reach and driving targeted traffic worldwide.",
        },
    
        {
          icon: ppcIcon,
          title: "E-commerce SEO",
          description:
            "Helping online stores maximize visibility, attract high-intent shoppers and drive sales through search engines with our tailored E-Commerce SEO solutions.",
        },
    
        {
          icon: webIcon,
          title: "National SEO",
          description:
            "Strengthening brands with robust data-driven strategies designed to boost their website’s visibility in national search results and drive high-quality traffic.",
        },
    
        {
          icon: contentIcon,
          title: "AI SEO",
          description:
            "From predictive keyword research to AI-powered insights for links and technical SEO, we create strategies that boost rankings and drive real engagement.",
        },
    
        {
          icon: ormIcon,
          title: "GEO SEO",
          description:
            "Achieve maximum visibility in specific geographic locations with our tailored GEO SEO that intelligently combines advanced local and global SEO strategies.",
        },
    
        {
          icon: listenIcon,
          title: "AEO SEO",
          description:
            "We can optimize your content for answer engines and AI-driven search results and help you stay ahead in the evolving digital world.",
        },
    
        {
          icon: croIcon,
          title: "TECHNICAL SEO",
          description:
            "Delivering high-quality technical SEO to improve site speed, mobile performance and site architecture to help brands stand out in search visibility.",
        },
    
        {
          icon: geoIcon,
          title: "Content Marketing Services",
          description:
            "Helping brands tell their story in a unique way and forge deeper connections with audiences through our high-quality content marketing services.",
        },
    
      ];

  const displayServices = c?.services?.length
    ? c.services.map((s) => ({ ...s, icon: resolveImage(s.icon) }))
    : services;
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
      const [currentCase, setCurrentCase] = useState(0);
      const caseStudies = [
  {
    title: "Rizaries SEO Case Study: 613% Growth in Organic Traffic",
    image: seocase,
    descriptions: [
     "Rizaries is a Shopify-based home furnishings brand selling rugs, mats and cushion covers. The objective was to increase organic traffic, improve keyword rankings and scale SEO as a primary sales channel. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings and capture high-intent searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver." ]
  },

  {
    title: "Education SEO Case Study: 420% Lead Growth",
    image: seocase,
    descriptions: [
     "An education institute wanted more admissions through organic search. We optimized course pages and improved technical SEO. The website generated significantly more qualified student enquiries."   ]
  },

  {
    title: "Healthcare SEO Case Study: 380% Traffic Growth",
    image: seocase,
    descriptions: [
    "A healthcare client wanted to improve visibility in local search. We implemented content clusters and local SEO. Organic traffic and appointment requests increased substantially."  ]
  }
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

  const displayDominateCards = c?.dominate?.cards?.length
    ? c.dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
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
      "We work with diverse range of clients across industries, including education, finance, e-commerce, travel, B2B, healthcare, and so on. We have a huge clientele across Pan India. We help both startups and already established brands elevate their online presence and achieve measurable results.",
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
  ,{
    question:
      "Can you share real client case studies and past SEO results?",
    answer:
      "Yes, we can! Aside from that, you can also visit the SEO case studies section in our website to learn more about our existing and past clients’ experience with us.",
  }
    
  ,{
    question:
      "Apart from SEO, what other digital marketing services do you provide?",
    answer:
      "We provide comprehensive digital marketing services, including SEO, SMM, PPC, Content Marketing, Performance Marketing, Website Design & Development, Online Reputation Marketing, Conversion Rate Optimisation, AEO+AIO+GEO, Display Advertising Services, Social Media Listing, Response Marketing and many more.",
  }
    
  ,{
    question:
      "My website has a high spam score. How will you reduce and fix it?",
    answer:
      "Don’t worry about that. We will fix it! We will first conduct a thorough audit to identify the issues causing it, such as low-quality backlinks, thin content or technical SEO problems. After identifying the real cause, we will implement a comprehensive cleanup SEO strategy to eliminate the issue and restore your website’s credibility and improve its search engine trustworthiness.",
  }
    
  ,{
    question:
      "I have been working with another SEO agency for over a year but my rankings haven’t improved. Can you fix this?",
    answer:
      "Well, we have no idea what strategies your previous SEO partner was using. But worry not! We will thoroughly audit your site and know what exactly is the reason for your site’s low ranking. After that, we would be in better position to tell you our exact course of action. But rest assured, Digicore Inc. is the best SEO company in Delhi. Our team of experts will help you achieve your digital marketing goals, including first page ranking & high-intent leads effortlessly. We will use the most advanced tools and technology to elevate your site’s ranking and drive measurable growth.",
  }
    
  ,{
    question:
      "How much monthly traffic and how many leads can I realistically expect from SEO?",
    answer:
      "The monthly traffic and leads you can expect from SEO depend on various factors like your industry, competition, current website authority and the scope of SEO efforts. But you don’t need to worry. Our team of experts will craft specialized digital marketing strategies tailored to your brand to ensure increased targeted traffic and high-quality leads within 3-6 months.",
  }
    
  ,{
    question:
      "If I stop SEO in the future, will my rankings remain stable?",
    answer:
      "Stopping in today’s scenario simply translates to falling behind fast. The moment you will stop implementing digital marketing strategies, your ranking will drop, let alone remaining stable. Digital marketing isn’t a one-time fix; it’s a continuous process of consistent effort and growth. With technological advancements and SEO evolution, your brand also evolves. If you will stop after a time being, you will lead to nowhere. Hence, you are advised to actively implement digital marketing effort to reap consistent outcomes. Partner with Digicore Inc. – the most reliable AI First SEO agency in Delhi to have stable ranking across platforms!",
  }
    
  ,{
    question:
      "For how long will I need to continue SEO for my website to maintain results?",
    answer:
      "As said earlier, SEO is not a one-time fix; it is a continuous process. You need to keep implementing SEO strategies in order to maintain consisting results and stay ahead across online and social media platforms. With the best AI-first digital marketing company by your side you can ensure consistent online growth and robust outcomes!",
  }
    
];

  const displayFaq = c?.faq?.length ? c.faq : faqData;

  return (
    <>

     <Banner

      subtitle={banner?.subtitle}
      title={banner?.title || "SEO Agency in Delhi That Drives Traffic, Trust, and Conversions"}
      description={banner?.description || "We are  Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."}
      primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
      secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
       backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
    />




      <section className="w-full py-[100px] px-5 max-[769px]:py-[60px] bg-white">
        <div className="w-[60px] h-[4px] bg-[#e67e22] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>
        <div className="max-w-[1300px] mx-auto [text-align:center] pt-[60px] px-5 pb-20 max-[769px]:p-[50px_15px]">

          <h1 className="font-[410] text-[50px] leading-[48px] max-[993px]:text-[38.4px] max-[993px]:leading-[49.92px] max-[993px]:mb-[50px] max-[769px]:text-[27.2px] max-[769px]:leading-[38.08px] max-[769px]:mb-[35px] text-[#1B3A6B] m-0">
           {about?.heading || "Best SEO Company in Delhi NCR"}
          </h1>



          <p className="font-normal text-[18px] leading-[28px] max-[769px]:text-[16px] max-[769px]:leading-[28.8px] text-[rgb(61,61,61)]">
            {about?.body || `Digicore Inc is a leading SEO company in Delhi NCR, helping brands become unmissable on every online and social media platform. We offer end-to-end SEO solutions to ensure your brand doesn’t just exist but it shines where it matters most. In this era of AEO SEO and GEO SEO, success is not just limited to simple SEO practices. Now it is about being found, trusted and chosen.  Digicore Inc is a results-driven digital marketing & SEO agency known for outstanding SEO strategies and solutions. We empower ambitious B2B & B2C brands to rise above the noise, engage the right audience, and grow fearlessly in today’s digital-first world. We combine cutting-edge tools, customer focused content, advanced technical expertise backed by proven results with proven strategies to create digital experiences that don’t just attract attention, but also engage, convert and last longer than you can imagine.`}
          </p>

        </div>

      </section>

      <section className="w-full bg-white max-[993px]:py-[60px] max-[993px]:px-5">

        <div className="max-w-[1200px] mx-auto flex flex-col min-[993px]:flex-row justify-between items-start gap-[40px] min-[993px]:gap-[20px] min-[993px]:mx-[100px]">

          <div className="flex-1">

            <h2 className="w-full font-medium text-[24px] leading-[26px] max-[993px]:text-[42px] max-[993px]:leading-[54.6px] max-[769px]:text-[42px] max-[769px]:leading-[54.6px] text-[#1B3A6B] m-0 pb-[10px]">
              {visibility?.heading || "Lead Every Search with Delhi’s Most Trusted SEO Agency"}
            </h2>

            <p className="font-normal text-[18px] leading-[28px] max-[769px]:text-[16px] max-[769px]:leading-[27.2px] text-[rgb(61,61,61)] m-0">
              {visibility?.body || `Search behaviour has changed dramatically! Consumers now search brands through multiple channels, including Google, social media platforms, marketplaces, video content and even AI-powered recommendations. To be visible everywhere is the need of this hour.  Digicore Inc – the best SEO company in Delhi, NCR, deliver tailored SEO solutions fitting to your brand’s need to ensure measurable outcomes. We build visibility that compounds over time.`}<br /> <br />
              {!visibility?.body && "We manage every facet of SEO—from technical optimisations to off-site authority building to help your brand stand out in this crowded digital world, gets noticed and becomes unmissable in record time. Our AI-focused SEO team crafts fresh, keyword-optimized web pages and blog posts aligned with user search intent, driving strong organic results and visibility across AI-driven search platforms. At  Digicore Inc, we utilize proven SEO tactics and best practices to expand your visibility, improve your content, strengthen your brand and turn clicks into lead. With effective SEO, you don’t just rank; you connect, engage and grow your business sustainably and effortlessly."}
            </p>

            <div className="w-[120px] h-[4px] bg-[#003366] mt-[40px]"></div>

          </div>

          <div className="flex-1 flex justify-center min-[993px]:justify-end">
            <img src={visibility?.image ? resolveImage(visibility.image) : graphImg} alt="Graph" className="w-full max-w-[700px] h-auto object-cover" />
          </div>

        </div>

      </section>

      <section className="w-full py-[40px] px-[60px] bg-white">

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[70px] max-[993px]:gap-[20px]">

          {counterItems.map((item, index) => (
            <div className="flex flex-row max-[769px]:flex-col items-start gap-[20px] max-[769px]:gap-[10px]" key={item.id ?? index}>

              <h5 className="font-semibold text-[70px] max-[769px]:text-[50px] max-[481px]:text-[42px] leading-[77px] text-[rgb(61,61,61)] m-0">
                <span className="text-[rgb(61,61,61)]">
                  {counts[index] ?? item.value ?? 0}
                </span>
                <span style={{ color: "#2E75B6" }}>
                  %
                </span>
              </h5>

              <p className="font-normal text-[16px] max-[993px]:text-[20px] max-[769px]:text-[16px] leading-[28px] text-[rgb(61,61,61)] m-0">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>


         <div className="max-w-[1300px] mx-auto [text-align:center] pt-[60px] px-5 pb-20 max-[769px]:p-[50px_15px]">
<div className="w-[60px] h-[4px] bg-[#e67e22] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>
          <h1>
             {video?.title ? <h1>{video.title}</h1> : null}

          </h1>

           <section className="flex items-center justify-center">
      <div className="w-full max-w-[900px] rounded-[30px] max-[769px]:rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

        <iframe
          src={video?.url || "https://www.youtube.com/embed/RugY9uuIJhY"}
          title=" Digicore Inc Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[510px] max-[993px]:h-[420px] max-[769px]:h-[250px] border-0 block"
        ></iframe>
      </div>
    </section>
        </div>


     <section className="w-full p-0 m-0">
  <div className="grid grid-cols-[40%_60%] max-[992px]:grid-cols-1 gap-[15px] w-full">
    <div className="bg-[#003366] min-h-[290px] max-[992px]:min-h-0 flex flex-col justify-center pl-[300px] max-[992px]:px-10 max-[992px]:py-[60px] max-[992px]:pl-10 max-[769px]:px-[25px] max-[769px]:py-[50px]">
      <h2 className="m-0 font-roboto font-semibold text-[70px] leading-[100px] max-[992px]:text-[55px] max-[992px]:leading-[62px] max-[769px]:text-[42px] max-[769px]:leading-[50px] text-white uppercase">{performance?.labelTrack || "TRACK"}</h2>
      <h2 className="m-0 font-roboto font-semibold text-[70px] leading-[100px] max-[992px]:text-[55px] max-[992px]:leading-[62px] max-[769px]:text-[42px] max-[769px]:leading-[50px] text-white uppercase">{performance?.labelAnalyze || "ANALYZE"}</h2>
      <h2 className="m-0 font-roboto font-semibold text-[70px] leading-[100px] max-[992px]:text-[55px] max-[992px]:leading-[62px] max-[769px]:text-[42px] max-[769px]:leading-[50px] text-white uppercase">{performance?.labelScale || "SCALE"}</h2>
      <h2 className="m-0 font-roboto font-semibold text-[70px] leading-[100px] max-[992px]:text-[55px] max-[992px]:leading-[62px] max-[769px]:text-[42px] max-[769px]:leading-[50px] text-white uppercase">{performance?.labelRepeat || "REPEAT"}</h2>
    </div>

    <div className="min-h-[390px] max-[992px]:min-h-[350px] max-[769px]:min-h-[250px] overflow-hidden">
      <img src={performance?.image ? resolveImage(performance.image) : seoRimg} alt="SEO Performance" className="w-full h-full block object-cover" />
    </div>
  </div>
</section>



            <section className="bg-[#f5f5f5] py-[60px] px-5 max-[769px]:py-[50px] max-[769px]:px-[15px]">
  <div className="max-w-[1400px] mx-auto">

    <div className="[text-align:center] mb-[50px] max-[769px]:mb-[35px]">
      <div className="w-[55px] h-1 max-[769px]:w-[45px] bg-[#003366] mx-auto mb-[18px] rounded-[10px]"></div>

      <h2 className="text-[44.8px] max-[993px]:text-[35.2px] max-[769px]:text-[25.6px] font-bold text-[#003366] uppercase leading-[1.2] mb-[30px] max-[769px]:mb-5">{seoAgency?.heading || "WHY DO I NEED AN SEO AGENCY IN DELHI?"}</h2>

      <p className="max-w-[1100px] mx-auto [text-align:left] text-base max-[769px]:text-[0.95rem] leading-[1.8] max-[769px]:leading-[1.7] text-[#333]">
       {seoAgency?.description || "In today’s digital era, Delhi has become one of the most competitive markets, and it is very difficult for new businesses to visible organically, get clients and sales. Businesses across every industry compete for the same audience, locations, and keywords. As a result, it is difficult to be visible on the first page of Google, AI answers without a targeted SEO strategy. Ranking a website is not a one-day game. It requires a clear and data based SEO strategy. A trusted and professional SEO company in Delhi can helps your business rank locally, attract high-intent commercial organic traffic, and generate consistent, quality lead."}
      </p>
    </div>

    <div className="grid grid-cols-2 max-[993px]:gap-[40px] max-[769px]:grid-cols-1 max-[769px]:gap-[15px] gap-[70px]">

      <div>

        <h3 className="text-[2rem] max-[993px]:text-[1.7rem] max-[769px]:text-[1.4rem] text-[#003366] font-semibold mb-[15px] max-[769px]:mb-3 [&:not(:first-child)]:mt-[30px] max-[769px]:[&:not(:first-child)]:mt-5">{seoAgency?.problemTitle || "The Problem"}</h3>

        <p className="text-[17px] max-[769px]:text-[15px] leading-[1.9] max-[769px]:leading-[1.8] text-[#555] mb-[25px]">
         {seoAgency?.problemText || "Most businesses still rely only on traditional SEO, assuming it is enough to get visibility online. However, with AI-powered search engines like ChatGPT, Gemini, and Perplexity, users now receive direct answers instead of browsing multiple websites. As a result, many brands struggle to appear in AI-generated results, answers, and recommendations."}
        </p>

        <h3 className="text-[2rem] max-[993px]:text-[1.7rem] max-[769px]:text-[1.4rem] text-[#003366] font-semibold mb-[15px] max-[769px]:mb-3 [&:not(:first-child)]:mt-[30px] max-[769px]:[&:not(:first-child)]:mt-5">{seoAgency?.solutionTitle || "The Solution"}</h3>

        <p className="text-[17px] max-[769px]:text-[15px] leading-[1.9] max-[769px]:leading-[1.8] text-[#555] mb-[25px]">
     {seoAgency?.solutionText || "SEO is the foundation that powers both AEO and GEO. When combined with structured content, clear answers, and strong authority signals, SEO helps your brand get recognized by AI engines. By aligning SEO with AEO and GEO strategies, your business becomes discoverable not just on Google—but also inside AI-generated answers, summaries, and comparisons."}
        </p>

      </div>

      <div className="pt-[15px] max-[769px]:pt-0">

        <p className="text-[17px] max-[769px]:text-[15px] leading-[1.9] max-[769px]:leading-[1.8] text-[#555] mb-[25px]">
      {seoAgency?.rightParagraph1 || "AI, ever-changing algorithms and shifting consumer buying behaviours are all redefining digital marketing in this era. To stay ahead, brands must adapt quickly, think strategically and remain visible across every channel. That’s when Digicore Inc., the trusted SEO company in Delhi steps in."}
        </p>

        <p className="text-[17px] max-[769px]:text-[15px] leading-[1.9] max-[769px]:leading-[1.8] text-[#555] mb-[25px]">
       {seoAgency?.rightParagraph2 || "A forward-thinking SEO agency can help you keep up with the change and cut through the noise. Whether you’re a startup looking to establish presence or an established brand aiming to scale, we can help you with unmatchable SEO strategies so that you can grow with confidence. Every strategy we deploy is guided by insights, analytics, and performance data. We have experience across multiple industries and we utilize cutting-edge tools and technology to deliver sustainable growth. Turn every click, search and interaction into real growth with Digicore Inc.!"}
        </p>

      </div>

    </div>

  </div>
</section>


 <section>

  <div className="max-w-[1500px] mx-auto [text-align:center]">

    <div className="w-[60px] h-1 bg-[#e67e22] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-5"></div>

    <h2 className="text-[60px] max-[993px]:text-[42px] uppercase text-[#003366] font-bold mb-[40px] leading-[1.2] max-[993px]:leading-[1.3]">
{discover?.heading || "SEO Services in Delhi"}
    </h2>

    <p className="text-[22px] max-[993px]:text-[19px] max-[769px]:text-[16px] leading-[1.9] max-[769px]:leading-[1.8] text-[#444] [text-align:center]">
 {discover?.description || "At Digicore Inc., we don’t just offer SEO services—we become your trusted digital growth partner. As pioneers in the digital marketing landscape, we’ve been empowering brands with our AI-powered, data-driven SEO services and helping them connect and engage the right audience."}
    </p>

  </div>

  <div>

    <div className="grid grid-cols-3 max-[993px]:grid-cols-2 max-[769px]:grid-cols-1 gap-[24px]">

      {displayServices.map((service, index) => (

       <div
  key={service.id || index}
>

          {/* KEEP YOUR EXISTING ICON */}
          <div className="w-[55px] h-[55px] object-contain mb-[18px]">
            <img
              src={service.icon}
              alt={service.title}
            />
          </div>

          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <div>
            →
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

 <section className="why-choose-sec"   style={{
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

        
          <div className="impact-image"  
>

            <div className="impact-circle" ></div>

            <img
              src={impactData?.image ? resolveImage(impactData.image) : impact}
              alt="Impact"
               style={{
    width: "700px",
    height: "600px",

  }}
            />

          </div>


          <div className="timeline-section">

            <div className="timeline">

              {(impactData?.timeline?.length ? impactData.timeline : [
                { title: "Contact Us", description: "Reach out to us via email, phone or our website." },
                { title: "SEO and PPC", description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
                { title: "Share Your Goals:", description: "Share your challenges and objectives." },
                { title: "Consultation:", description: "Our experts will craft SEO strategies tailored to your needs." },
                { title: "Tailored Plan:", description: "Get a customized plan with clear strategies and outcomes." },
                { title: "Out Turn:", description: "Achieve measurable results in record time." },
              ]).map((item, index) => (
                <div className={`timeline-item${index === 0 ? " active" : ""}`} key={item.id || index}>

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    

  {/* Industry and Case Study sections removed per admin changes */}

<section className="dominate-section">
  <div className="dominate-heading">
    <h2>{c?.dominate?.heading || "How Can We Help You Grow"}</h2>

    <div className="dominate-line"></div>

    <p>
     {c?.dominate?.description || "Digicore Inc. is a leading SEO agency in Delhi. We help businesses evolve by providing them with the best SEO strategies and solutions designed specifically to improve visibility to the people who matter most. We combine cutting-edge SEO strategies, including technical SEO, high-quality content and strategic link building to deliver results that help brands outspace the competition and remain relevant for longer than they can imagine. We utilize a data-driven approach to ensure you:"}
    </p>
  </div>

   <div className="dominate-cards">
  {displayDominateCards.map((item, index) => (
    <div className="dominate-card" key={item.id || index}>

      <div className="dominate-icon">
        <img
          src={item.icon}
          alt={item.title}
          className="dominate-icon-img"
        />
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
    {whyBusiness?.heading || (<>Why Choose Digicore Inc AS YOUR <br />SEO COMPANY IN DELHI</>)}
      </h2>

      <p>
        {whyBusiness?.description || "Digicore Inc. is a leading SEO agency serving businesses across Delhi NCR, offering cost-effective SEO services for small, medium, and large businesses. We don’t follow short-term ranking tactics; instead, we believe in crafting strategic, data-driven and future-ready SEO solutions for brands to ensure sustainable visibility and real business impact. We utilize state-of-the-art search optimization tools and techniques to ensure your brand is discoverable wherever your audience is searching, such as Google, Social Media Handles, Marketplaces and AI-powered results. Our years of expertise and proven strategies have earned us reputation of the most sought-after SEO agency in the Delhi region. The reasons why our clients choose us are:"}      </p>

    </div>


    <div className="why-business-content">


      <div className="why-left">

        <ul>

          {(whyBusiness?.features?.length ? whyBusiness.features : [
            { text: "All our SEO strategies and solutions are tailored by a team of seasoned SEO specialists." },
            { text: "Ours is a growth-first mindset and we design solutions to drive measurable results for your business." },
            { text: "We follow a clear, transparent reporting system to ensure you are abreast of each step in the process." },
            { text: "Build result-oriented customized strategies Digicore Inc. help brands save TIME, ENERGY and EFFORT" },
            { text: "We are masters of keyword and intent-based content optimization" },
            { text: "Ours is a growth-driven, future-ready mindset" },
            { text: "Proven experience and expertise across multiple industries" },
            { text: "We help brand rank higher, earn trust, authority and long-term success in search." },
          ]).map((item, index) => (
            <li key={item.id || index}>✔ {item.text}</li>
          ))}

        </ul>

      </div>


      <div className="why-right">

        <img
          src={whyBusiness?.image ? resolveImage(whyBusiness.image) : graphImg}
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
         <h2>FAQ</h2>
         <div className="faq-line"></div>
       </div>
 
       <div className="faq-container">
         {displayFaq.map((faq, index) => (
           <div
             key={faq.id || index}
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

export default SeoService
