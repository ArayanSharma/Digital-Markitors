import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";
import "../Styles/PPCCampaigns.css";
 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 
import impact from "../assets/impact.webp";
import SeoCaseStudies from "../Pages/SeoCaseStudies";
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
import seocase1 from "../assets/case1.png";
import seocase2 from "../assets/case2.png";
import seocase3 from "../assets/case3.png";

 import eimage from "../assets/BannerImg/PPC.png";
 
const PPC  = () => {



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
    "For IOD Global, we executed a Google Display Campaign focused on increasing brand visibility and recall among the right audience segments. The campaign was designed to build consistent exposure through targeted placements and audience-based targeting. The strategy prioritised relevant impressions, controlled reach, and brand presence. Continuous optimisation ensured stable performance and efficient delivery aligned with the brand’s objectives while avoiding irrelevant traffic."   ]
  }
];
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
    
        ,{
          icon: ormIcon,
          title: "Shopping Ads",
          description:
            "With the help of these Google display ad management services, our professionals adapt headlines, campaign layouts, and iThe high-intent shoppers are attracted by the effectively designed shopping ads that showcase products with images and prices. These optimized campaigns drive relevant traffic and sales.",
        }  
              ];

      
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
    title: "Targeted Advertising",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: Icon2 ,
    title: "Leveraging Insights",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
    title: "Continuous Optimization",
    desc: "We help your brand gain strong recognition across digital platforms globally",
  },

  {
    icon: Icon4,
    title: "Maximizing ROI",
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


 
  return (
    <>

     <Banner
      
      title="PPC Agency in Delhi That Drives Traffic, Trust, and Conversions"
      description="We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
       backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
Best PPC Company in Delhi NCR
          </h1>

       

          <p>
Digicore Inc. is the best PPC company in Delhi-NCR, that delivers performance-driven Pay-Per-Click campaigns customized to attain measurable business growth. Our PPC strategy includes strong groundwork—competitor analysis, audience assessment, and clarity of conversion objectives. Our expertly designed PPC campaigns are aimed at attracting high-intent users, that eventually turn clicks into leads and sales. With consistent performance throughout the past few years, our PPC specialists focus on the optimal use of data-driven Google and Meta ad campaigns for multiple industries ranging from Ecommerce, B2B, Travel, Healthcare, Hospitality, and Education. From keyword strategy and finalizing ad copy to optimization of landing page and conversion tracking, Digicore Inc. plays a vital role in helping businesses benefit from ROI-focused PPC advertising.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
Why PPC Is More Than Just Running Ads


            </h2>

            <p>
PPC is strategic solution aimed at making for business growth consistent in digital marketing. At Digicore Inc., a leading PPC agency in Delhi, we count on data-driven techniques to reach targeted audiences, optimally utilize every campaign element, and constantly optimize ad performance to ensure sustainable growth and higher ROI for client’s business.

            </p>

            <div className="orange-line" style={{marginBottom:"50px"}}></div>

          </div>

          <div className="visibility-image">
            <img src={graphImg} alt="Graph" />
          </div>

        </div>


      </section>
   

 

     <section className="performance-section">
  <div className="performance-container">
    <div className="performance-left">
      <h2>TRACK</h2>
      <h2>ANALYZE</h2>
      <h2>SCALE</h2>
      <h2>REPEAT</h2>
    </div>

    <div className="performance-right">
      <img src={seoRimg} alt="SEO Performance" />
    </div>
  </div>
</section>

      <section className="seo-agency-section">
  <div className="seo-container">

    <div className="seo-heading">
      <div className="seo-line"></div>

      <h2>Why Do I Need a PPC Agency in Delhi?</h2>

      <p>
  It is quite tough for businesses to generate quality leads at present due to the increased competition. PPC is one of the efficient ways to target potential customers, only if the campaign has been executed in a strategic way. Keeping in mind the increased competition, constantly upgrading algorithms, higher bid costs, Digicore Inc., the top PPC agency in Delhi NCR employs well-planned strategy for ongoing campaign optimization. Besides, we ensure the data-driven insights, expertise in generating quality leads, driving sales, and improving the brand awareness through campaigns are aligned according to business goals of clients.
      </p>
    </div>

    <div className="seo-content">

      <div className="seo-left">

        <h3>The Problem</h3>

        <p>
Most of the businesses are not able to execute PPC campaigns due to the lack of strategy or undefined goals. Weak tracking, poorly optimized landing pages, and broad match keywords, attract high clicks but the quality of leads is low. As a result, the CPC and CPL increase and this leads to exhausting budgets. Hence, PPC becomes expensive with unsustainable and unpredictable results through improper campaign optimization, budget control and performance analysis.
        </p>

        <h3>The Solution</h3>

        <p>
Being the top PPC agency in Delhi NCR, we focus on the strategically planned PPC campaigns and not just clicks. First of all, our experts analyse the market objective, thereby, craft the PPC campaign for client’ business. Alternatively, we identify the high-intent keywords focused on creating conversion. We prioritize the practical outcome through data driven arather than just predictions or sharing forecasts. At present, Google relies on automation, real-time user behaviour and AI-based bidding, hence, the PPC strategy should be aligned with the AI-automation. This will be possible with the help of top PPC agency in Delhi is hired to seek expert guidance, budget control and improved ROI goals.
        </p>

      </div>

      <div className="seo-right">

        <p>
At Digicore Inc., we ensure that PPC campaigns drive business growth, while optimally using advertising spends. Our top PPC experts find high-intent commercial keywords, optimize landing pages, and evaluate data to improve the PPC campaign’s performance at every step. Each decision is driven by ROI and long-term scalability. Being the best PPC services agency in Delhi, we address the advanced marketing resource, applying strategic thinking and innovative approaches to maximize results. With constant optimization, performance tracking, smart budget allocation, and performance tracking, we helps businesses turn PPC into a predictable, scalable, as well as a high-performing digital growth channel.
        </p>

        

      </div>

    </div>

  </div>
</section>

 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
PPC Services in Delhi
    </h2>

    <p>
At Digicore Inc., apart from offering just PPC services—we intend to become a trusted digital growth partner for business growth. After gaining prominence in the digital marketing segment, we have consistently blended AI-powered PPC strategies and data-driven solutions and connected them with the target audience.
    </p>

  </div>

  <div className="services-cards">

    <div className="services-grid">

      {services.map((service, index) => (

       <div
  key={index}
  className="services-card"
>

          {/* KEEP YOUR EXISTING ICON */}
          <div className="service-icon">
            <img
              src={service.icon}
              alt={service.title}
            />
          </div>

          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <div className="service-arrow">
            →
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

   

 <section className="why-choose-sec"   style={{
    backgroundImage: `url(${bgIcon})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>

        <div className="div-content">

          <h1 style={{fontSize:"28px"}}>
       Ready for More Traffic, Leads & Sales? Start SEO Now.
          </h1>

          <div className="choose-btns">

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

          </div>

        </div>

      </section>
    

       <section className="impact-sec" style={{ backgroundColor: "#fff" }}>
    
            <div className="impact-container">
    
            
              <div className="impact-image"  
    >
    
                <div className="impact-circle" ></div>
    
                <img
                  src={impact}
                  alt="Impact"
                   style={{
        width: "700px",
        height: "600px",
    
      }}
                />
    
              </div>
    
        
              <div className="timeline-section">
    
                <div className="timeline">
    
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
    
                </div>
    
              </div>
    
            </div>
    
          </section>
           <section className="workindustry-section">

  <div className="workindustry-heading">
    <h2>Industry we work with</h2>
    <div className="workindustry-line"></div>
  </div>

 <div className="workindustry-slider-wrapper">

    <button
      className="workindustry-slider-btn workindustry-left-btn"
      onClick={scrollLeft}
    >
      ←
    </button>

    <div
      className="workindustry-cards"
      ref={sliderRef}
    >
    {industries.map((item, index) => (
  <div className="workindustry-card" key={index}>
    
    <div className="workindustry-icon">
      <img src={item.image} alt={item.title} />
    </div>

    <h3>{item.title}</h3>

    <p>{item.desc}</p>

    <button className="workindustry-read-btn">
      Read More
    </button>

  </div>
))}
    </div>

    <button
      className="workindustry-slider-btn workindustry-right-btn"
      onClick={scrollRight}
    >
      →
    </button>

  </div>

</section>

{/* <section className="case-study" >

  <div className="case-container">


    <div className="case-heading">

     

      <h2>Case Studies</h2>
 <div className="divider"></div>
    </div>


    <div className="case-slider">

      <div className="case-content">

        <h3>
          Rizaries SEO Case Study:
          613% Growth in Organic Traffic
        </h3>

        <p>
          Rizaries is a Shopify-based home furnishings brand selling rugs,
          mats and cushion covers. The objective was to increase organic
          traffic, improve keyword rankings and scale SEO as a primary
          sales channel.
        </p>

        <p>
          We implemented a Shopify-focused SEO strategy to expand keyword
          coverage, strengthen collection and product page rankings and
          capture high-intent searches.
        </p>

        <p>
          As a result, Rizaries saw a significant rise in organic traffic
          and page-one keyword dominance, helping organic search become a
          consistent revenue driver.
        </p>

        <div className="case-buttons">

          <button className="case-btn">
            View Case Study
          </button>

          <button className="case-btn outline-btn">
            View Our Latest Work
          </button>

        </div>

      </div>

  
      <div className="case-image">

        <img
          src={seocase}
          alt="Case Study"
        />

      </div>

    </div>

    <div className="case-dots">

      <span className="dot active"></span>
      <span className="dot"></span>
      <span className="dot"></span>

    </div>

  </div>

</section> */}

 <section className="case-study">

  <div className="case-container">

    <div className="case-heading">
      <h2>Case Studies</h2>
      <div className="divider"></div>
    </div>

    <div className="case-slider">

      <button
        className="case-arrow"
        onClick={prevCase}
      >
        ←
      </button>

      <div className="case-content">

        <h3>
          {caseStudies[currentCase].title}
        </h3>

        {caseStudies[currentCase].descriptions.map(
          (item, index) => (
            <p key={index}>{item}</p>
          )
        )}

        <div className="case-buttons">

          <button className="case-btn">
            View Case Study
          </button>

          <button className="case-btn outline-btn">
            View Our Latest Work
          </button>

        </div>

      </div>

      <div className="case-image">
        <img
          src={caseStudies[currentCase].image}
          alt="Case Study"
        />
      </div>

      <button
        className="case-arrow"
        onClick={nextCase}
      >
        →
      </button>

    </div>

    <div className="case-dots">

      {caseStudies.map((_, index) => (
        <span
          key={index}
          className={`dot ${
            currentCase === index ? "active" : ""
          }`}
          onClick={() => setCurrentCase(index)}
        />
      ))}

    </div>

  </div>

</section>

 
   <section className="ppc-section">
      <div className="ppc-container">
        <h2 className="ppc-title">HOW DO WE MANAGE PPC CAMPAIGNS</h2>

        <p className="ppc-description">
          Digicore Inc. is the best PPC agency in Delhi NCR, that helps
          businesses drive measurable growth through result-driven paid
          advertising services. We deliver well-tailored PPC services for
          all-sized businesses at cost-effective plans. We focus on
          performance, and not short-term clicks or traffic. Our strategic,
          data-driven, and conversion-focused approach ensures maximum ROI
          from every ad spend. With the optimal utilization of advanced
          tools, audience insights, and AI-powered bidding strategies, we
          optimize campaigns across Google Search, Display, YouTube,
          Shopping, Performance Max, and social platforms. At Digital
          Markitors, our certified PPC experts consistently monitor, test,
          and optimize campaigns to scale results in a sustainable manner.
          With years of experience and proven success, Digicore Inc. is
          trusted as one of the best PPC agencies in Delhi for measurable
          business growth.
        </p>

        <div className="ppc-grid">
          <div className="ppc-column">
            {leftItems.map((item, index) => (
              <div className="ppc-item" key={index}>
                <span className="ppc-icon">☑</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="ppc-column">
            {rightItems.map((item, index) => (
              <div className="ppc-item" key={index}>
                <span className="ppc-icon">☑</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="dominate-section">
  <div className="dominate-heading">
    <h2>How Can We Help You Grow</h2>

    <div className="dominate-line"></div>

    <p>
Digicore Inc. is the top PPC company in Delhi and our PPC solutions are beneficial for all-sized businesses to maximize brand exposure in a short time span. We offer a strategically tailored solution to our client through exclusively planned campaigns and boost our PPC services while keeping in mind the budget allocation. Based on client’s budget limit, we strategize PPC campaigns that can boost up your advertisements on various search engines and ultimately attract targeted traffic.
    </p>
  </div>

   <div className="dominate-cards">
  {helpCards.map((item, index) => (
    <div className="dominate-card" key={index}>
      
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
Why Choose Digicore Inc. as YOUR<br />
PPC AGENCY IN DELHI
      </h2>

      <p>
Digicore Inc. is a leading PPC company serving businesses across Delhi NCR. We help brands generate qualified leads and conversions through carefully planned, data-driven paid advertising strategies. We don’t believe in running ads randomly or chasing short term goals. Every PPC campaign is built around business goals, audience intent, and measurable outcomes. From keyword selection to bid optimisation and conversion tracking, our approach is structured, transparent, and performance-led. Our PPC strategies are designed to maximise returns, manage ad spend, and deliver consistent results across platforms like Google Ads and social media advertising. Here’s why businesses trust Digicore Inc. for PPC management:</p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔   We have a team of seasoned professionals that tailors and monitors PPC campaigns
          </li>

          <li>
            ✔  Our measurable results for all-sized business are aligned with the growth-first mindset
          </li>

          <li>
            ✔ Transparency and clarity are maintained in our reporting system to keep clients ahead of their competitors
          </li>

          <li>
            ✔ All our PPC strategies are result-driven and customized to ensure client-specific outcome
          </li>

          <li>
            ✔ We employ future-ready and growth-driven approach for the success of all the PPC campaigns
          </li>
          <li>
            ✔ We have served multiple industries and known for proven expertise to deliver top results through best PPC services
          </li>
          <li>
            ✔ Our PPC services improve the performance, visibility and engagement rate of brands in a cost-effective manner
          </li>
          
        
 
        </ul>

      </div>

    
      <div className="why-right">

        <img
          src={graphImg}
          alt="Graph"
        />

      </div>

    </div>

  </div>

</section>
 
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
         <h2>SEO AGENCY DELHI FAQS</h2>
         <div className="faq-line"></div>
       </div>
 
       <div className="faq-container">
         {faqData.map((faq, index) => (
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

export default PPC
