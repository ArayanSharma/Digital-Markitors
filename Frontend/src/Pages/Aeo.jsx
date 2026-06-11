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
import eimage from "../assets/Dimage/0.png";
 
 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 
const Aeo = () => {

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
    "Rizaries is a Shopify-based home furnishings brand selling rugs, mats, and cushion covers. The objective was to increase organic traffic, improve keyword rankings, and scale SEO as a primary sales channel. At the start, organic visibility was limited and most keywords were ranking beyond the first page. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings, and capture high-intent non-branded searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver."
    ]
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
          title: "Understand AI Search",
          description:
            "After auditing the website’s visibility on AI platforms, we create informative, yet problem-solving content with improved citations while checking the competitors’ positioning to deliver AI optimized search results.",
        },
    
        {
          icon: socialIcon,
          title: "Question-Based Content Optimization",
          description:
            "Unlike the traditional content focusing on the business information, our AEO SEO experts cover possible queries asked by the users. Depending on the nature of business, we figure out how the website should cover the relevant business details related to the localized questions.",
        },
    
        {
          icon: ppcIcon,
          title: "Featured Snippet Optimization",
          description:
            "We prepare featured snippets under 50 words, bulleted information, avoiding jargons, and maintaining conversational language to make AEO SEO services beneficial for business growth.",
        },
    
        {
          icon: webIcon,
          title: "Schema & Structured Data Implementation",
          description:
            "Our strategically planned Schema Markup enables the search engine to interpret the business information accurately. This improves the quality of search results when product schema, FAQ and local target audience are worked over.",
        },
    
        {
          icon: contentIcon,
          title: "Voice Search Optimization",
          description:
            "Our best AEO SEO services ensure the content is optimized in conversational and engaging style to address voice-based queries. This improves brand’s visibility in AI search results and voice searches.",
        },
    
        {
          icon: ormIcon,
          title: "Technical SEO",
          description:
            "We resolve all the technical SEO issues of the website according to Google’s AI Parameters to index webpages and crawling properly.",
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
    title: "Increased sales",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
    title: "Improved Brand Awareness",
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
    question: "What is Aeo, and why does my business need it now?",
    answer:
      "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
  },
  {
    question:
      "if my website already ranks on Google, why should I invest in Aeo",
    answer:
      "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
  },
  {
    question:
      "How long does it take to see results from Aeo SEO services?",
    answer:
      "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
  },
  {
    question:
      "Is Aeo SEO suitable for small and mid-sized businesses?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } ,
  {
    question:
      "Can Aeo actually generate leads, or is it only for visibility?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
   ,
  {
    question:
      "How does Digital Makitors track Aeo performance?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
   ,
  {
    question:
      "Is Aeo SEO effective for service-based businesses like agencies or consultants?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
    
];

 
  return (
    <>

     <Banner
      
      title="AEO SEO Agency That Improve visibility, Traffic, and Conversion"
      description="Being the best SEO company in Delhi NCR – Digicore Inc. integrates AI-powered solutions to improve the visibility of brands in AI-generated search results through best AEO SEO practices."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
       backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
   AEO SEO AGENCY FOR AIO
          </h1>

       

          <p>
     At Digicore Inc., we emphasize on the growing requirements of digital marketing. To address the queries of users directly, our AEO SEO services are aimed at improving the search visibility of websites. Be it the structured content, informative snippet, summaries available on Google or AI-powered platforms, the whole idea of AEO is to provide direct answers to the users. However, it is important for the search engine to interpret the optimized information precisely. This is where the expertise of Digicore Inc. helps clients in improving the quality of answers shared online. We ensure that the top AEO SEO services boost the quality of structured answers, provide content clarity and thereby, improving the credibility of the brand.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
            Stay on top in the search results with AEO SEO Agency

            </h2>

            <p>
        With the rapidly evolving changes in the digital marketing segment, AI SEO practices add clarity to the search results. We blend our decade’s excellence and the new-age AI standards to improve the visibility of website on the multiple search platforms and AI websites. We constantly help our clients to connect with the potential customers by interpreting their queries through exact information. Apart from the traditional SEO services, we are integrating the power of AI to drive conversion efficiently. Being the top AEO SEO agency in Delhi, Digicore Inc. focuses on consistently improving the brand’s ranking by understanding the query of users and optimizing the search results, accordingly. Our organic search results are not limited to multiple leads, instead, focused and result-driven approach of AEO services are offered to the clients. In short, knowing what customers are looking for in your brand is clearly optimized through diverse AEO services.


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
      Understanding AEO SEO services and <br />their relevance in digital marketing
          </h1>

          <p>Digicore Inc., the leading SEO company in Delhi has always delivered beyond the expectations of clients. Whether it is through the top practices of keyword research, SEO services or the other digital marketing services, the objective is to improve the ranking and visibility of website consistently. Currently, we have harnessed the power of AI-SEO solutions to help brands lead the search results. Our AEO SEO services help businesses get noticed by their potential customers.</p>

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

      <h2>Why is AEO SEO necessary for all-sized businesses?</h2>
<p>Digicore Inc. is a leading SEO company in Delhi, NCR. We help brands in their journey from being invisible to become unmissable. We deliver AI-powered SEO strategies that help brands lead the market and stay ahead in a constantly evolving digital landscape.</p>
    </div>

    <div className="seo-content">

      <div className="seo-left">

        <h3>The Problem</h3>

        <p>
Most of the businesses often face challenges in improving brand’s visibility in AI-search results. The need to provide direct answers to users relying on AI-platforms like ChatGPT, Gemini or Perplexity, for brand information.
        </p>

        <h3>The Solution</h3>

        <p>
We provide customized Answer Engine Optimization (AEO) services by structuring content for commonly asked questions. We focus on direct answers and authoritative signals to improve the visibility and trust factor of brand in AI-generated responses.
<br /><br />
Digicore Inc. follows updated algorithms, user behaviour shifts and AI-search optimization to improve brand’s visibility. We help brands by implementing the well-tailored AEO SEO plan. Our experts also ensure the brand is discoverable on AI-search websites and applications.
        </p>

      </div>

      <div className="seo-right">

        <p>
Our AEO SEO service targets long-term visibility to improve content clarity and credibility. All our strategies are backed by real-time search behavior, performance insights and structured content. We focus on boosting your brand's potential and prospects for AI-search visibility.
<br /><br />
Our top AEO SEO services are aligned with the client’s business growth goals of different industries.
<br /><br />
Apart from the excellent and consistent record in serving all-sized businesses, we also integrate the power of AI.
<br /><br />
We complement AEO SEO practices with our unmatched and ethical digital marketing services, backed by insights, analytics, and performance data.
<br /><br />
We emphasize on the sustainable growth of brands by aligning SEO with AEO and GEO strategies.
<br /><br />
Our data-driven approach improves brand’s search visibility in AI-generated summaries, comparisons and answers.


        </p>

        

      </div>

    </div>

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
AEO SEO Services
    </h2>

    <p>
At Digicore Inc., we don’t just offer SEO services—we become your trusted digital growth partner. As pioneers in the digital marketing landscape, we’ve been empowering brands with our AI-powered, data-driven SEO services and helping them connect and engage the right audience.
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

   <section className="workindustry-section">

  <div className="workindustry-heading">
    <h2>INDUSTRY WE WORK WITH</h2>
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
    



<section className="dominate-section">
  <div className="dominate-heading">
    <h2>How Can We Help You Grow</h2>

    <div className="dominate-line"></div>

    <p>
 Digicore Inc. is a top AEO SEO agency in India known for its business excellence and result-driven approach. Our seasoned SEO professionals provide customized solutions aimed at improving online visibility of the brand. Apart from using the best-in-class and ethical SEO practices, we recommend the top AEO plan to our client based on their business requirements. We offer the best AEO SEO services by incorporating technical SEO, refining the content clarity, strategic link building and delivering the answer-focused content. We rely on data-driven and the other cutting-edge AEO SEO practices to make clients’ business growth consistent & efficient.
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
AEO SEO AGENCY
      </h2>

      <p>
  Digital Marketing is a Delhi-based AEO SEO company that leverages the power of AI to provide comprehensive digital marketing services. We focus on the long-term SEO practices rather than assuring the short-term brand positioning or better rankings. Our data-driven and cutting-edge AEO SEO services ensure consistent higher visibility in the search results and on AI platforms. Our 360-degree search optimization helps brands in connecting with their audience irrespective of the diverse platforms used. From Google to social media, AI-search applications to online marketplaces, we blend best AEO SEO strategies and industry-wise excellence to enhance the visibility of business. Our transparent and sure-shot search optimization practices have helped us in gaining the trust of our clients. The list of reasons that contribute to our credibility and prominence in the digital marketing landscape include: </p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ Seasoned SEO specialists with extensive experience customize the SEO solutions according to the clients’ business requirements.
          </li>

          <li>
            ✔ We ensure the measurable results are blended with the latest SEO practices to optimally improve brand’s visibility.
          </li>

          <li>
            ✔  Our transparency, clarity and goal-focused approach keeps the clients updated through data-driven report of AEO SEO progress.
          </li>

          <li>
            ✔ We ensure result-driven and customized AEO SEO services to efficiently address the business goals.
          </li>

          <li>
            ✔ Our high-quality keyword research and answer-focused content optimization makes us the reliable AEO SEO experts.
          </li>

          <li>
            ✔ We serve diverse industry while targeting the competitors positioning to improve the visibility of brand through AI-powered SEO services.
          </li>
          <li>
            ✔ Our AI-integrated SEO practices help businesses in improving trust-factor, higher ranks and prominent authority and consistent business growth.
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

export default Aeo
