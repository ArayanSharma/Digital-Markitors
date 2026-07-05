import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";

 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";

 import bgIcon from "../assets/bg-iconnew.webp";
 

import impact from "../assets/impact.webp";
 import eimage from "../assets/BannerImg/YouTubeAds.png";
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
import geoIcon from "../assets/aeo-o.webp";
import seocase from "../assets/seo-case-study-rezaries.webp";
import c1 from "../assets/ms.png";
import v1 from "../assets/v1.mp4";

import TestimonialSection from "../Components/Sections/Testimonials";
import Brands from "../Components/Sections/Brands";
import Tools from "../Components/Sections/Tools";
import Blogs from "../Components/Cards/BlogCard";
import Faq from "../Components/Sections/FAQ";
import Contacts from "../Components/Sections/Contact";
import { usePageContent, resolveImage } from "../hooks/usePageContent";






const Youtube = () => {
  const { content: c } = usePageContent("youtube");
  const banner = c?.banner;
  const aboutSection = c?.aboutSection;
  const visibilitySection = c?.visibilitySection;
  const performanceSection = c?.performanceSection;
  const seoAgencySection = c?.seoAgencySection;
  const servicesSection = c?.servicesSection;
  const whyChooseSection = c?.whyChooseSection;
  const timelineSection = c?.timelineSection;
  const whyChooseDigicoreSection = c?.whyChooseDigicoreSection;

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
    title: "Bajaj Finserv Gold Loans SEO Case Study: 400 Cr. + disbursals of gold loans",
    image: c1,
    descriptions: [
     "When Bajaj Finserv approached Techmagnate for their Gold Loans LoB, the NBFC was making an entry into a market saturated with established brands and heavy hitters. Their objective was to increase the overall volume of organic traffic and leads for their new offering. Competing against well-established players required a strong SEO strategy focused on visibility, authority, and search demand generation. Through a data-driven SEO campaign, Bajaj Finserv achieved significant growth in organic traffic, lead generation, and ultimately crossed 400 Cr.+ in gold loan disbursals."    ]
  },

  {
    title: "Bajaj Finserv Gold Loans SEO Case Study: 400 Cr. + disbursals of gold loans",
    image: c1,
    descriptions: [
    "When Bajaj Finserv approached Techmagnate for their Gold Loans LoB, the NBFC was making an entry into a market saturated with established brands and heavy hitters. Their objective was to increase the overall volume of organic traffic and leads for their new offering. The SEO strategy focused on improving rankings, expanding keyword visibility, and attracting high-intent search traffic. The campaign delivered measurable business growth, helping the brand establish a strong online presence and drive substantial loan disbursals through organic search."  ]
  },

  {
    title: "Bajaj Finserv Gold Loans SEO Case Study: 400 Cr. + disbursals of gold loans",
    image: c1,
    descriptions: [
    "Operating in a highly competitive financial sector, Bajaj Finserv needed a scalable SEO framework to support growth for its Gold Loans business. Our team implemented a comprehensive SEO roadmap covering technical optimisation, content expansion, authority building, and intent-driven keyword targeting. The result was exceptional growth in traffic, leads, and customer acquisition, contributing to more than 400 Cr.+ in gold loan disbursals." ]
  }
];


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





    
    


    const services = [
   
       {
         icon: seoIcon,
         title: "Search Engine Optimization",
         description:
           "Boost your visibility and drive targeted traffic with our data-driven search strategies. We help clients strengthen their online presence through expert SEO strategies and tailored services.",
       },
   
       {
         icon: socialIcon,
         title: "Social Media Marketing",
         description:
           "We offer tailored social media strategies to ensure your brand stands out on all social media platforms, including Instagram, Facebook, LinkedIn, YouTube, and more.",
       },
   
       {
         icon: ppcIcon,
         title: "PPC & Performance Marketing",
         description:
           "Partner with us to unlock the full potential of paid advertising, maximize your revenue and accelerate business growth with our expertly crafted, results-driven PPC campaigns.",
       },
   
       {
         icon: webIcon,
         title: "Website Design & Development",
         description:
           "We offer website design and development services to help clients have fast, responsive, user-friendly and search engine optimized websites to attract and engage audience.",
       },
   
       {
         icon: contentIcon,
         title: "Content Marketing",
         description:
           "We help businesses bring their brands to life with our expertly crafted content that tells their story to the world in an exciting and engaging way.",
       },
   
       {
         icon: ormIcon,
         title: "Online Reputation Management",
         description:
           "Our comprehensive Online Reputation Management (ORM) services are designed to help you monitor, manage, and shape your digital presence more effectively and intelligently.",
       },
   
       {
         icon: listenIcon,
         title: "Social Media Listening",
         description:
           "Monitor your online conversations like never before. We offer specialized social media listening services to help you track your brand, product or industry across social media platforms.",
       },
   
       {
         icon: croIcon,
         title: "Conversion Rate Optimisation",
         description:
           "We offer Conversion Rate Optimization (CRO) services designed specifically to elevate your website’s user experience and turn your potential customers into actual ones effortlessly.",
       },
   
       {
         icon: geoIcon,
         title: "AEO + AIO + GEO",
         description:
           "TIMING MATTERS! Our AEO+AIO+GEO services are designed to optimize search engines for the right responses based on user intent and location to provide your audience with timely responses and build trust.",
       },

     ];

  const displayServices = c?.servicesSection?.services?.length
    ? c.servicesSection.services.map((s) => ({ ...s, icon: resolveImage(s.iconUrl || s.icon) }))
    : services;

const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const handlePlay = () => {
  videoRef.current.play();
  setIsPlaying(true);
};
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
    icon: "♞",
    title: "Get More Leads",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: "⌁",
    title: "Make More Sales",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: "✎",
    title: "Build Brand Awareness",
    desc: "We help your brand gain strong recognition across digital platforms globally",
  },

  {
    icon: "🏆",
    title: "Upskill Your Team",
    desc: "Improve your team capabilities with advanced marketing strategies and guidance",
  },

];

  const displayWhyChooseButtons = whyChooseSection?.buttons?.length
    ? whyChooseSection.buttons.map((b) => ({ ...b, iconUrl: resolveImage(b.iconUrl) }))
    : [
        { text: "+91 98188 88064", link: "#", iconUrl: "https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png" },
        { text: "REQUEST A CALLBACK", link: "#", iconUrl: "" },
      ];

  const displayTimelineItems = timelineSection?.items?.length
    ? timelineSection.items
    : [
        { title: "Contact Us", description: "Get in touch with us via email, phone or website." },
        { title: "Share Your Goals", description: "Tell us about your business and marketing goals." },
        { title: "Consultation", description: "Our expert will discuss strategies tailored to your business." },
        { title: "Proposal & Plan", description: "We provide a customized strategy and roadmap." },
        { title: "Partner & Grow", description: "Drive high-impact traffic and measurable growth." },
      ];

  const displayPoints = whyChooseDigicoreSection?.points?.length
    ? whyChooseDigicoreSection.points
    : [
        "We design future-ready strategies to ensure long-term visibility and relevance.",
        "All our strategies are curated by our highly skilled and experienced AI SEO experts.",
        "We believe in pure work – every decision is powered by real insights, analytics and performance data.",
        "We ensure your brand shows up across AI platforms, social channels and marketplaces.",
        "We design SEO strategies with today’s search in focus and tomorrow’s opportunities in sight.",
        "We deliver results you can trust and clearly measure.",
      ];


  return (
    <>

     <Banner

      title={banner?.title || "Google Display Ads Management Agency"}
      description={banner?.description || "We are  Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."}
      primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
      secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
      backgroundImage={banner?.backgroundImageUrl ? resolveImage(banner.backgroundImageUrl) : eimage}
    />




      <section className="about-section">

        <div className="about-container">

          <h1>
{aboutSection?.title || "Best Google Display Ads Management Agency"}
</h1>
        <div className="divider"></div>
        <p>
             {aboutSection?.description || "Digicore Inc is the best PPC company in Delhi-NCR, that delivers performance-driven Pay-Per-Click campaigns customized to attain measurable business growth. Our PPC strategy includes strong groundwork—competitor analysis, audience assessment, and clarity of conversion objectives. Our expertly designed PPC campaigns are aimed at attracting high-intent users, that eventually turn clicks into leads and sales. With consistent performance throughout the past few years, our PPC specialists focus on the optimal use of data-driven Google and Meta ad campaigns for multiple industries ranging from Ecommerce, B2B, Travel, Healthcare, Hospitality, and Education. From keyword strategy and finalizing ad copy to optimization of landing page and conversion tracking,  Digicore Inc plays a vital role in helping businesses benefit from ROI-focused PPC advertising."}

            </p>
        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
                {visibilitySection?.title || "Why PPC Is More Than Just Running Ads"}
            </h2>
            <p>
                {visibilitySection?.description || "PPC is strategic solution aimed at making for business growth consistent in digital marketing. At  Digicore Inc, a leading PPC agency in Delhi, we count on data-driven techniques to reach targeted audiences, optimally utilize every campaign element, and constantly optimize ad performance to ensure sustainable growth and higher ROI for client’s business."}
            </p>
            <div className="orange-line"></div>

          </div>

         <div className="visibility-image">
<div className="visibility-video-wrapper">

  <video
    ref={videoRef}
    src={visibilitySection?.videoUrl || v1}
    className="visibility-video"
    controls={isPlaying}
  />

  {!isPlaying && (
    <button
      className="play-btn"
      onClick={handlePlay}
    >
      ▶
    </button>
  )}

</div>
</div>

        </div>


         


          <section className="performance-section">
        
                <div className="performance-container">
        
                  <div className="performance-left">

                    <h2>{performanceSection?.items?.[0] || "TRACK"}</h2>
                    <h2>{performanceSection?.items?.[1] || "ANALYZE"}</h2>
                    <h2>{performanceSection?.items?.[2] || "SCALE"}</h2>
                    <h2>{performanceSection?.items?.[3] || "REPEAT"}</h2>

                  </div>

                  <div className="performance-right">

                    <img
                      src={performanceSection?.imageUrl ? resolveImage(performanceSection.imageUrl) : seoRimg}
                      alt="SEO Performance"
                    />
        
                  </div>
        
                </div>
        
              </section>



      </section>



            <section className="seo-agency-section">
  <div className="seo-container">

    <div className="seo-heading">
      <div className="seo-line"></div>

      <h2>
        {seoAgencySection?.title || "Why Do I Need Google Shopping Ads Management Services?"}
</h2>

<p>
{seoAgencySection?.description || "It is quite tough for businesses to generate quality leads at present due to the increased competition. PPC is one of the efficient ways to target potential customers, only if the campaign has been executed in a strategic way. Keeping in mind the increased competition, constantly upgrading algorithms, higher bid costs,  Digicore Inc, the top PPC agency in Delhi NCR employs well-planned strategy for ongoing campaign optimization. Besides, we ensure the data-driven insights, expertise in generating quality leads, driving sales, and improving the brand awareness through campaigns are aligned according to business goals of clients."}    </p>

    </div>



      {/* Services Section */}
      <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {servicesSection?.heading || "Google Display Ad Management Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {servicesSection?.description || "At  Digicore Inc, apart from offering just PPC services—we intend to become a trusted digital growth partner for business growth. After gaining prominence in the digital marketing segment, we have consistently blended AI-powered PPC strategies and data-driven solutions and connected them with the target audience."}
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


        <section className="impact-sec">
      
              <div className="impact-container">
      
              
                <div className="impact-image">

                  <div className="impact-circle"></div>

                  <img
                    src={timelineSection?.imageUrl ? resolveImage(timelineSection.imageUrl) : impact}
                    alt="Impact"
                  />

                </div>


                <div className="timeline-section">

                  <div className="timeline">

                    {displayTimelineItems.map((item, index) => (
                      <div className={`timeline-item${index === 0 ? " active" : ""}`} key={item.id || index}>

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">

                          <h3>{item.title}</h3>

                          <p>
                            {item.description}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </section>



<Industry />
    <Casestudy />
<section className="bg-white py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[#e31e24]"></div>
      <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
        {whyChooseDigicoreSection?.title || "Why Choose Digicore Inc as YOUR PPC AGENCY IN DELHI"}
      </h2>
      <p className="mt-5 text-base sm:text-lg text-slate-600 leading-8">
        {whyChooseDigicoreSection?.description || "Digicore Inc is a leading PPC company serving businesses across Delhi NCR. We help brands generate qualified leads and conversions through carefully planned, data-driven paid advertising strategies. We don’t believe in running ads randomly or chasing short term goals. Every PPC campaign is built around business goals, audience intent, and measurable outcomes. From keyword selection to bid optimisation and conversion tracking, our approach is structured, transparent, and performance-led. Our PPC strategies are designed to maximise returns, manage ad spend, and deliver consistent results across platforms like Google Ads and social media advertising. Here’s why businesses trust Digicore Inc for PPC management:"}
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <div>
        <ul className="space-y-4 text-base sm:text-lg text-slate-700">
          {displayPoints.map((point, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="mt-1 text-[#e31e24]">✔</span>
              <span>{point}</span>
            </li>
          ))}
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

 <div>

  <Faq />

 </div>

 <div>
  <Contacts />
 </div>



    </>
  )
}

export default Youtube
