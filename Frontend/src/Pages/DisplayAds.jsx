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
  import eimage from "../assets/BannerImg/DisplayAds.png";
 import seocase1 from "../assets/case1.png";
import seocase2 from "../assets/case2.png";
import seocase3 from "../assets/case3.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const DisplayAds = () => {
  const { content: c } = usePageContent("display-ads");
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
          title: "Lead Generation Display Campaigns",
          description:
            "IAs a part of these campaigns, we capture high-quality prospects by working over display ads, optimized placements, compelling creatives. The objective of these campaigns is to drive form submissions, conversions, and inquiries while maximizing ROI.",
        },
    
        {
          icon: webIcon,
          title: "Display Remarketing Campaigns",
          description:
            "With the help of personalized display ads, we re-engage past website visitors by reminding them of your brand through these services. Besides, we encourage return visits, conversions and inquiries across the Google Displaay Network.",
        },
    
        {
          icon: contentIcon,
          title: "Responsive Display Ads",
          description:
            "With the help of these Google display ad management services, our professionals adapt headlines, campaign layouts, and images to fit any screen or placement. These services are aimed at improved engagement, wider reach, improved engagement and brand messaging along with better performance across the Google Display Network.",
        },
    
        {
          icon: ormIcon,
          title: "Audience & Interest-Based Display Targeting",
          description:
            "These services are effectively design to reach users based on demographics, interests, search intent, user behaviour to ensure higher relevance, improved conversion rate, and better engagement.",
        }

      ];

      const displayServices = servicesSection?.services?.length
        ? servicesSection.services.map((s, i) => ({ ...s, icon: resolveImage(s.iconUrl) || [seoIcon, socialIcon, ppcIcon, webIcon, contentIcon, ormIcon][i % 6], title: s.title, description: s.description }))
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

      title={banner?.title || "Google Display Ads Management Agency"}
      description={banner?.description || "At Digicore Inc., we help you display ads in front of your audience based on their browsing preferences. Experience the business growth through our strategically planned Google Display ads management services."}
      primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
      secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
      backgroundImage={banner?.backgroundImageUrl ? resolveImage(banner.backgroundImageUrl) : eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
        {aboutSection?.title || (<>Best Google Display Ads Management <br />Services Agency</>)}
          </h1>



          <p>
      {aboutSection?.description || "Digicore Inc. is the best Google Display Ads Management Agency that offers comprehensive display advertising plan to improve ROI of your digital marketing campaigns. We address the customized business goals of our clients while targeting the right audience. Experience the exceptional results to scale up your business with our result-driven display advertising services. Being the premier Google partner, Digicore Inc. focuses on your consistent success in the ecommerce segment and drive quality traffic to your website. Our seasoned professionals prepare captivating ads to attract high-intent shoppers according to their browsing preferences."}
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
           {visibilitySection?.title || "Why Google Display Ad management agency is a must for businesses?"}
            </h2>

            <p>
            {visibilitySection?.description || "Get your brand noticed with Digicore Inc.’ top Google display ad management services customized according to your long-term advertising goals. At every stage of digital marketing, our display advertising campaigns help you in identifying new prospects, increasing brand awareness, and addressing the requirements of potential buyers. Being the trusted Google Display Ad management agency, we create uniquely tailored ad message and creative according to the search intent, user behaviour and the browsing history of your audience. These ads are targeted to reach potential customers wherever they have been looking for your services."}</p>

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

      <h2>{seoAgencySection?.title || "Why do I need Google Display Ad management services?"}</h2>

      <p>
     {seoAgencySection?.description || "At Digicore Inc., we prioritize improved visibility and clarity of advertising. With our 360-degrees’ Google Display ad management services, we engage your targeted audience and captivate them right where they browse the most. Whether it is any specific application, website, search engine, YouTube, multiple platforms are covered in addressing the display advertising goals. Our seasoned display ad specialists play a vital role in boosting brand awareness, attracting engagement, driving conversion and nurture prospects. Digicore Inc. utilizes data-driven optimization to ensure ads perform in an exceptional manner and complements your paid media strategy. Besides, our display advertising management services offer sustainable business growth and improved ROI."}
      </p>
    </div>

     

  </div>
</section>


 <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {servicesSection?.heading || "Google Display Ad Management Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {servicesSection?.description || "Digicore Inc. offers you a cost-effective of reaching your potential customers and increase ROI through multi-layered Google display ad management services. Being the trusted paid media agency, we ensure targeting, ad placement, bidding and optimization, all the segments of display advertising are addressed by our professionals."}
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

 <section className="why-choose-sec"   style={{
    backgroundImage: `url(${whyChooseSection?.backgroundImageUrl ? resolveImage(whyChooseSection.backgroundImageUrl) : bgIcon})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>

        <div className="div-content">

          <h1>
          {whyChooseSection?.title || "Ready for More Traffic, Leads & Sales? Start SEO Now."}
          </h1>

          <div className="choose-btns">

            {whyChooseSection?.buttons?.length ? (
              whyChooseSection.buttons.map((btn, i) => (
                <a href={btn.link || "#"} className="light-btn" key={btn.id || i}>
                  {btn.iconUrl && (
                    <img src={resolveImage(btn.iconUrl)} alt="icon" />
                  )}
                  {btn.text}
                </a>
              ))
            ) : (
              <>
                <a href="#" className="light-btn">

                  <img
                    src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                    alt="whatsapp"
                  />

                  +91 98188 88064

                </a>

                <a href="#" className="light-btn">
                  REQUEST A CALLBACK
                </a>
              </>
            )}

          </div>

        </div>

      </section>
      <section className="impact-sec" style={{ backgroundColor: "#fff" }}>

        <div className="impact-container">

        
          <div className="impact-image"  
>

            <div className="impact-circle" ></div>

            <img
              src={timelineSection?.imageUrl ? resolveImage(timelineSection.imageUrl) : impact}
              alt="Impact"
               style={{
    width: "700px",
    height: "600px",

  }}
            />

          </div>

    
          <div className="timeline-section">

            <div className="timeline">

              {timelineSection?.items?.length ? (
                timelineSection.items.map((step, i) => (
                  <div className={`timeline-item ${i === 0 ? "active" : ""}`} key={step.id || i}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="timeline-item active">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                      <h3>Contact Us</h3>

                      <p>
                        Reach out to us via email, phone or our website.
                      </p>

                    </div>

                  </div>

                  <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                      <h3>SEO and PPC</h3>

                      <p>
                       We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.
                      </p>

                    </div>

                  </div>

                  <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                      <h3>Share Your Goals:</h3>

                      <p>
                       Share your challenges and objectives.
                      </p>

                    </div>

                  </div>

                  <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                      <h3>
Consultation:</h3>

                      <p>
                   Our experts will craft SEO strategies tailored to your needs.
                      </p>

                    </div>

                  </div>

                  <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                      <h3>
Tailored Plan:</h3>

                      <p>
                  Get a customized plan with clear strategies and outcomes.
                      </p>

                    </div>

                  </div>
                  <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                      <h3>
Out Turn:</h3>

                      <p>
                Achieve measurable results in record time.
                      </p>

                    </div>

                  </div>
                </>
              )}

            </div>

          </div>

        </div>

      </section>

    
  <Industry />
    <Casestudy />
 


<section className="why-business-section" style={{ backgroundColor: "#fff" }}>

  <div className="why-business-container">

  
    <div className="why-business-heading">

      <div className="divider"></div>

      <h2>
{whyChooseDigicoreSection?.title || (<>Why choose Digicore Inc. for Google Display ad <br /> management services?</>)}
      </h2>

      <p>
  {whyChooseDigicoreSection?.description || "At Digicore Inc., we employ data driven approach to implement Google Display ad management campaigns. We optimally utilize audience insights, performance analytics and conversion tracking to reach targeted users at the right time across relevant platforms. Our seasoned professionals consistently monitor clicks, impressions, and conversions to optimize creatives, ad placements and bids to attract maximum ROI. From remarkable expertise, transparent reporting and strategic A/B testing, Digicore Inc. assures improved brand visibility, measurable growth and consistent performance in the current ad spend according to your business goals. "}</p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          {whyChooseDigicoreSection?.points?.length ? (
            whyChooseDigicoreSection.points.map((point, i) => <li key={i}>✔ {point}</li>)
          ) : (
            <>
              <li>
                ✔ Our seasoned professionals with profound experience tailors and execute Google shopping ad campaigns
              </li>

              <li>
                ✔ We prioritize growth-mindset to deliver data-driven and consistent advertising results for all-sized businesses
              </li>

              <li>
                ✔  Our reporting system maintains clarity and transparency to execute all the Google display ad campaigns according to competitor analysis
              </li>

              <li>
                ✔  We focus on client-centric and result-driven approach to target advertising goals in a specified time span
              </li>

              <li>
                ✔ All our Google display ad management services are sustainable and aimed at consistent business growth
              </li>

              <li>
                ✔ Our proven expertise of Google display ad management has helped businesses of diverse segments to achieve their advertising objectives.
              </li>

              <li>
                ✔ Partner with us to improve the engagement rate, visibility and performance of your business with our cost-effective Google Display ad management services
              </li>
            </>
          )}

        </ul>

      </div>


      <div className="why-right">

        <img
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

export default DisplayAds
