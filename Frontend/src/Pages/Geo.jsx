import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

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
import { Plus, Minus } from "lucide-react";
import Icon1 from "../assets/h1.png";
import Icon2 from "../assets/h2.png";
import Icon3 from "../assets/h3.png";
import Icon4 from "../assets/h4.png";
import eimage from "../assets/Dimage/0.png";
 

const Geo = () => {

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
          title: "GENERATIVE AI RESULT & CITATION ANALYSIS",
          description:
            "We analyze AI-generated results to uncover visibility gaps, identify citation opportunities, and improve how AI engines reference and recommend your content.",
        },
    
        {
          icon: socialIcon,
          title: "AI-friendly Keyword Enhancement",
          description:
            "We optimize keywords for real user intent and AI understanding so that your content never gets overlooked in relevant AI answers and recommendations.",
        },
    
        {
          icon: ppcIcon,
          title: "Topical Authority Building",
          description:
            "With Topical Authority Building, we position your brand as the go-to expert so that AI systems and other search platforms rank it first in front of your audience.",
        },
    
        {
          icon: webIcon,
          title: "AIO CONTENT & STRUCTURED Q&A",
          description:
            "We create clear, easy to understand, AI-ready answers to the questions your audience is asking so AI systems understand, trust and recommend your content first.",
        },
    
        {
          icon: contentIcon,
          title: "TECHNICAL SEO",
          description:
            "We leverage AI to optimize your site’s structure, speed and usability to create a seamless experience that attract high-intent audience to your site.",
        },
    
        {
          icon: ormIcon,
          title: "SCHEMA & STRUCTURED DATA IMPLEMENTATION",
          description:
            "We simplify your website’s content for AI and search engines using precise structured markup, helping your pages appear in rich results, featured snippets and AI-generated answers.",
        },
    
        {
          icon: listenIcon,
          title: "DIGITAL PR & LINK-BUILDING",
          description:
            "Digicore Inc. help your brand earn authoritative mentions and backlinks so that search engines and AI systems recognize your expertise and trustworthiness.",
        },
    
        {
          icon: croIcon,
          title: "Brand Mentions & EEAT Signals",
          description:
            "Our Brand Mentions & EEAT services boost your credibility and authority to ensure both AI and other search platforms recognize and trust your brand.",
        },
    
        {
          icon: geoIcon,
          title: "PERFORMANCE TRACKING",
          description:
            "Digicore Inc.’ experts monitor your SEO, content and AI visibility in real time to ensure your website performs its best at all times.",
        },
    
      ];

      
    const industries = [

    {
      icon: "⏱",
      title: "B2B",
      desc: "We combine in-depth keyword research, competitive analysis and content optimization to ensure your brand appears in front of the audiences that matter most.",
    },

    {
      icon: "💼",
      title: "Financial & Professional",
      desc: "We optimize your website for search engines with authoritative content & high-intent keywords so you can build credibility, attract leads and drive engagement.",
    },

    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Providing AI-driven SEO Strategies to help marketplaces and retailers with improved rankings, increased sales and elevated brand’s online presence.",
    },

    {
      icon: "🛒",
      title: "E-Commerce",
      desc: "Providing AI-driven SEO Strategies to help marketplaces and retailers with improved rankings, increased sales and elevated brand’s online presence.",
    },

    {
      icon: "✈",
      title: "Travel",
      desc: "We offer specialized SEO solutions to help travel brands stand out in a crowded digital world and create the right experience for their customers.",
    },

    {
      icon: "🏨",
      title: "Hospitality",
      desc: "Offering high-quality SEO services tailored to the hospitality sector to help them stand out in search results, attract the right audience and drive bookings.",
    },

  ];

 const helpCards = [

  {
    icon: Icon1,
    title: "Get Measurable Results",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: Icon2 ,
    title: "Drive High-Intent Traffic",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
    title: "Build Brand Authority",
    desc: "We help your brand gain strong recognition across digital platforms globally",
  },

  {
    icon: Icon4,
    title: "Get Maximum Visibility",
    desc: "Improve your team capabilities with advanced marketing strategies and guidance",
  },

];

const faqData = [
  {
    question: "What is GEO, and why does my business need it now?",
    answer:
      "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
  },
  {
    question:
      "if my website already ranks on Google, why should I invest in GEO",
    answer:
      "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
  },
  {
    question:
      "How long does it take to see results from GEO SEO services?",
    answer:
      "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
  },
  {
    question:
      "Is GEO SEO suitable for small and mid-sized businesses?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } ,
  {
    question:
      "Can GEO actually generate leads, or is it only for visibility?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
   ,
  {
    question:
      "How does Digital Makitors track GEO performance?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
   ,
  {
    question:
      "Is GEO SEO effective for service-based businesses like agencies or consultants?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
    
];

 
  return (
    <>

     <Banner
      
      title="GEO SEO Agency That Drives Traffic, Trust, and Conversions"
      description="Digicore Inc. is the best GEO SEO agency in India. We provide highest quality GEO SEO services in the region, ensure your success and growth in this new, AI-powered search era."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
       backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
     GEO SEO - Optimizing Brands For Platforms That Matter
          </h1>

       

          <p>
      Search is no longer limited to links. Today, it is shaped by intelligence. At Digicore Inc., we operate beyond traditional SEO, beyond links, beyond keywords to create authority that sustains an AI-first search world. Digicore Inc. is a renowned GEO SEO agency in Delhi, NCR. We focus on AI Optimization (AIO) so platforms like Google’s Search Generative Experience and ChatGPT don’t just notice your brand, but they also understand what makes you stand out so as to present it to the right audience. In this era where Artificial Intelligence is redefining how customers search, keywords alone are not just enough. You need clarity, credibility and contextual relevance to stand out in this highly competitive market. We align your content with how AI engines like ChatGPT, Gemini and Perplexity understand and respond to user queries to ensure you brand becomes easily discoverable and chosen by AI-driven search engines.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
             Become Visible, Trusted & Relevant With Digicore Inc. – Most Trusted GEO SEO Agency in India
            </h2>

            <p>
             Search behavior is changing very quickly. Instead of clicking multiple links, users today prefer AI assistants and generative search results. This makes investing in GEO SEO services crucial than ever. GEO SEO makes your business discoverable in the AI-first search environment. It ensures that AI not only finds you but also recognizes your authority and relevance. Using GEO SEO techniques, we optimize your content so it is accurately understood, trusted and presented by AI-powered search engines, answer engines and large language models. Unlike traditional SEO, which focuses only on rankings and keywords, GEO SEO ensures your brand and content are understood, cited and recommended by generative AI systems.
            </p>

            <div className="orange-line"></div>

          </div>

          <div className="visibility-image">
            <img src={graphImg} alt="Graph" />
          </div>

        </div>

      </section>

      


         <div className="about-container">
<div className="divider"></div>
          <h1>
         GENERATIVE SEARCH KEEPS YOUR BRAND ALIVE AND RESONANT IN THE AI ERA, TRANSFORMING VISIBILITY INTO TRUST AND TRUST INTO LASTING GROWTH.
          </h1>

          

           <section className="video-section">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/RugY9uuIJhY"
          title=" Digicore Inc Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
        </div>


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

      <h2>Why You Need a GEO SEO Agency</h2>

    </div>

    <div className="seo-content">

      <div className="seo-left">

        <h3>The Problem</h3>

        <p>
Traditional SEO is not just enough to thrive in this new, AI-driven search era. With only traditional SEO, you risk becoming invisible on places where your customers are searching – that’s AI-powered engines. AI-powered engines may not even look your content, significantly impacting your visibility, credibility and long-term growth.
        </p>

        <h3>The Solution</h3>

        <p>
The solution is simple and clear – evolve beyond traditional SEO. GEO SEO is your only support system here. Optimizing content for how AI engines understand, evaluate and recommend information is now more than necessary in the era. The best GEO SEO agency in Delhi can help your brand stay discoverable, build authority and attract high-intent audience in this AI-first world.
        </p>

      </div>

      <div className="seo-right">

        <p>
  The way people discover information is changing. AI-powered search engines like ChatGPT, Gemini, and Google’s Search Generative Experience do more than just showing links. They understand what people are really looking for. They summarize information and even suggest solutions – fundamentally changing how search works. Businesses that rely only on traditional SEO are sure to lose the game.
<br /><br />
Traditional SEO isn’t enough to keep your brand visible in this new, AI-first world. A trustworthy GEO SEO agency in Delhi ensures your content is written not just for people, but also it is created to be comprehended, trusted and recommended by AI systems. At Digicore Inc., we help businesses stay visible across AI-driven platforms along with traditional search engines. We build real authority so AI recognizes your expertise and relevance and attract the right traffic to your site.
        </p>

        

      </div>

    </div>

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
Our GEO SEO Services
    </h2>

    <p>
Our GEO SEO services are designed to help your brand stay visible, credible and recommended on AI-powered search engines, including ChatGPT, Gemini and Google’s Search Generative Experience. We will optimize your digital presence so AI engines know your brand and what it makes it valuable.
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

          <h1>
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

<section className="dominate-section">
  <div className="dominate-heading">
    <h2>How Can We Help You Grow</h2>

    <div className="dominate-line"></div>

    <p>
  Digicore Inc. is a trustworthy GEO SEO company in the Delhi-NCR region. We help businesses thrive in the AI-first search era. We utilize cutting-edge SEO strategies, AI-driven insights and authoritative content optimization to boost your brand’s visibility, drive high-intent traffic and improve its credibility across both AI-driven and traditional search platforms. We build future-ready strategies that bring sure shot results and ensure your long-term success, visibility, credibility and relevance across multiple platforms, including ChatGPT, Perplexity and Google’s Search Generative Experience. We make sure you stay ahead of the competition today, tomorrow and in the future. With us, you will:
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
  Why Choose Digicore Inc. as YOUR
GEO SEO AGENCY
      </h2>

      <p>
      Digicore Inc. is a leading GEO SEO Company in Delhi. Businesses choose us because we think outside-the-box and go beyond traditional optimization techniques. Using high-quality GEO SEO techniques, we make your brand unmissable, trusted and recommended across AI-driven and traditional search engines. We combine AI-driven insights, high-intent keyword strategies, structured content and authoritative link-building to deliver measurable results that drive traffic, leads and long-term growth. Ours is a future-ready approach that allow us to make your brand highly visible, trusted by AI systems and consistently recommended to the right audience, ensuring long-term growth and success. </p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ We are a team of highly expert and professional GEO SEO specialists
          </li>

          <li>
            ✔ We build strategies that keep your brand visible, relevant and future-ready
          </li>

          <li>
            ✔  All our strategies are backed by real insights, analytics and performance data
          </li>

          <li>
            ✔ Our strategies are curated for today’s search and tomorrow’s growth
          </li>

          <li>
            ✔ We help businesses move forward in this AI-powered search era
          </li>

          <li>
            ✔ Measurable results are guaranteed with us that drive real business growth
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
         <h2>FAQ</h2>
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

export default Geo
