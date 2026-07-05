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
 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 
import seocase1 from "../assets/case1.png";
import seocase2 from "../assets/case2.png";
import seocase3 from "../assets/case3.png";

import eimage from "../assets/Dimage/0.png";
 import { usePageContent, resolveImage } from "../hooks/usePageContent";


const InfluencerM  = () => {
  const { content: c } = usePageContent("InfluencerM");
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
    
        ,{
          icon: ormIcon,
          title: "Responsive Display Ads",
          description:
            "With the help of these Google display ad management services, our professionals adapt headlines, campaign layouts, and images to fit any screen or placement. These services are aimed at improved engagement, wider reach, improved engagement and brand messaging along with better performance across the Google Display Network.",
        }  
        ,{
          icon: ormIcon,
          title: "Audience & Interest-Based Display Targeting",
          description:
            "These services are effectively design to reach users based on demographics, interests, search intent, user behaviour to ensure higher relevance, improved conversion rate, and better engagement.",
        }  
        ,{
          icon: ormIcon,
          title: "Creative Banner Design for Display Ads",
          description:
            "In order to grab attention of potential customers, eye-catching ad banners and communicate your message instantly and drive clicks, we create compelling visuals. These banners also include call-to-action and strong branding for maximum campaign performance.",
        }  
        ,{
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
    "For IOD Global, we executed a Google Display Campaign focused on increasing brand visibility and recall among the right audience segments. The campaign was designed to build consistent exposure through targeted placements and audience-based targeting. The strategy prioritised relevant impressions, controlled reach, and brand presence. Continuous optimisation ensured stable performance and efficient delivery aligned with the brand’s objectives while avoiding irrelevant traffic."   ]
  }
];
 const helpCards = [

  {
    icon: Icon1,
    title: "Improve Brand Awareness",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: Icon2 ,
    title: "Drive Website Traffic",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
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
        title={banner?.title || "Google Display Ads Management Agency"}
        description={banner?.description || "At Digicore Inc., we help you display ads in front of your audience based on their browsing preferences. Experience the business growth through our strategically planned Google Display ads management services."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* About Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
          
          <h1 className="text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {about?.heading || "Best Google Display Ads Management Services Agency"}
          </h1>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto">
            {about?.body || "Digicore Inc. is the best Google Display Ads Management Agency that offers comprehensive display advertising plan to improve ROI of your digital marketing campaigns. We address the customized business goals of our clients while targeting the right audience. Experience the exceptional results to scale up your business with our result-driven display advertising services. Being the premier Google partner, Digicore Inc. focuses on your consistent success in the ecommerce segment and drive quality traffic to your website. Our seasoned professionals prepare captivating ads to attract high-intent shoppers according to their browsing preferences."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
              {visibility?.heading || "Why Google Display Ad management agency is a must for businesses?"}
            </h2>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              <p>
                {visibility?.body || (<>In order to display your business ads to potential customers based on their browsing pattern, Google Display ads management has to be prioritized. In order to capture interest of prospects across multiple websites and apps, it is a must for business to customize digital marketing campaigns with the assistance SMM experts.
                <br /><br />
                Digicore Inc., the top Google Display Ad management agency NCR ensures target-oriented layouts. Our conversion tracking and bid optimization strategies help clients in generating inquiries, traffic and sales.</>)}
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
            {seoAgency?.heading || "Why Do I Need Google Display ads Management Agency NCR?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[1000px] mx-auto mb-16">
            {seoAgency?.intro || "More than 80% of active internet users browsing online check multiple websites, apps and official profiles before making purchase decision. Apart from display of target-oriented ads, display network optimization is a must. At Digicore Inc., we use responsive display campaign strategies to boost impressions and drive leads. Our Google display advertising practices are scalable and custom-built to deliver conversions within the estimated budget."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-[#e31e24] font-heading font-extrabold mb-3">
                  {seoAgency?.problemTitle || "The Problem"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.problemBody || "Most brands design and run banner ads without analyzing user intent, target demographics, and screen sizes. While SMM or paid ad campaigns may be active, they often fail to capture relevant leads. Inefficient bid management and poor creative layout also drive up the cost per click."}
                </p>
              </div>

              <div>
                <h3 className="text-[26px] max-[769px]:text-[20px] text-emerald-600 font-heading font-extrabold mb-3">
                  {seoAgency?.solutionTitle || "The Solution"}
                </h3>
                <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                  {seoAgency?.solutionBody || "It is ideal to hire display advertising experts who understand the nuances of Google Display Network (GDN). Digicore Inc. builds responsive banner ads, utilizes demographics targeting, and optimizes placements to match interests. This improves relevance and maximizes conversions."}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563] lg:pt-2">
              <p>
                {seoAgency?.rightBody || "Behavioral SMM and search algorithm updates have transformed consumer preferences. Our display campaign specialists harness audience demographics, device data, and placement insights to refine display bids. Backed by A/B test methodologies, we target quality prospects and ensure long-term SMM campaign efficiency."}
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
            {discover?.description || "At Digicore Inc., we offer customized display ads management services to help businesses scale up their visibility, impressions, and ROI. Our campaigns utilize precise placement and bid adjustments to target high-intent shoppers across the web."}
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
            {whyChoose?.heading || "Ready for More Traffic, Leads & Sales? Start Google Display Ads Now."}
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

      {/* Why Choose Section with Checklists */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 uppercase">
            {whyBusiness?.heading || "Why choose Digicore Inc. for Google Display ad management services?"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {whyBusiness?.description || "At Digicore Inc., we employ data driven approach to implement Google Display ad management campaigns. We optimally utilize audience insights, performance analytics and conversion tracking to reach targeted users at the right time across relevant platforms. Our seasoned professionals consistently monitor clicks, impressions, and conversions to optimize creatives, ad placements and bids to attract maximum ROI. From remarkable expertise, transparent reporting and strategic A/B testing, Digicore Inc. assures improved brand visibility, measurable growth and consistent performance in the current ad spend according to your business goals."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="why-left space-y-4">
              <ul className="space-y-3.5">
                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "Our team of seasoned professionals with in-depth knowledge of Google display advertising customizes campaigns for measurable growth" },
                  { text: "We prioritize growth-mindset to deliver data-driven and consistent advertising results for all-sized businesses" },
                  { text: "Our reporting system maintains clarity and transparency to execute all the Google display ad campaigns according to competitor analysis" },
                  { text: "We focus on client-centric and result-driven approach to target advertising goals in a specified time span" },
                  { text: "All our Google display ad management services are sustainable and aimed at consistent business growth" },
                  { text: "Our proven expertise of Google display ad management has helped businesses of diverse segments to achieve their advertising objectives." },
                  { text: "Partner with us to improve the engagement rate, visibility and performance of your business with our cost-effective Google Display ad management services" },
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
              {c?.faqSection?.heading || "DISPLAY ADS MARKETING FAQS"}
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

export default InfluencerM;
