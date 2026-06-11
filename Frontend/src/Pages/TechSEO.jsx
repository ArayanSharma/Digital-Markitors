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

 
  return (
    <>

     <Banner
      
      title="Technical SEO That Enhances Speed, Crawlability & UX"
      description="We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
       backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
   Technical SEO Services from India’s Fastest Growing SEO Agency
          </h1>

       

          <p>
   We have seasoned technical SEO experts who collaboratively work with the clients to resolve technical issues of the website. At Digicore Inc., we believe in constantly identifying, evaluating and addressing the technical issues of your website. Based on the type of issue, we offer customized technical SEO services to all-sized businesses. After removing all the issues, the website’s performance can be improved thereby, increasing its search visibility.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
           Improve your website’s performance with the top technical SEO services in Delhi


            </h2>

            <p>
       Digicore Inc., a trusted SEO agency in India with a profound experience focuses on improving website’s performance through best technical SEO services. Being the Google Premier partner, we blend SEO expertise with the world-class AI technologies to address the technical issues of our client’s website. Whether it is in terms of site visibility, user experience or speed, we focus on all the technical issues of the website comprehensively.
<br /><br />
Our team of SEO professionals comprises of technical SEO experts, data analysts, and content strategists who work harmoniously to address the critical site issues, thereby, offering optimal crawling, indexing, and better ranking. Our diverse technical SEO services include structure optimization, comprehensive site audit, site speed enhancement, and working over the mobile-friendliness of the website. Based on the customized business requirements of our clients, we tailor technical SEO services to maximize website performance while boosting its search engine rankings.


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

      <h2>Why Do I Need a Technical SEO Agency in India?</h2>
<p>At Digicore Inc., we rely on innovative SEO practices, thereby, optimally utilizing data insights, automation tools and other best-in-class services to help our clients stay ahead in the market. From driving relevant traffic to improving ROI, our technical SEO experts ensure transparent reporting and long-term website success. Despite the type of business, consistent results and customized solutions have always improved our credibility as the best SEO company for technical fixes!</p>
    </div>

   

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
Technical SEO Services
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
At Digicore Inc., our technical SEO services include data-driven approach for optimization of website performance and ensure higher search engine visibility. As a part of these services, we conduct constant audits, optimization and advanced analytics to help brands attain long-term and sustainable success.
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
TECHNICAL SEO SERVICES AGENCY
      </h2>

      <p>
 Digicore Inc. employs cutting-edge practices to customized technical SEO services for all-sized businesses. Based on the nature of business, type of technical SEO issues, long-term business goals, page speed optimization, and improved user experience, we ensure the well-tailored plan is assured to the clients. With our best technical SEO services, we implement industry-specific expertise to fix the issues of website, thereby, troubleshooting them through suitable remedies. Here are some of the reasons that make us the preferred partner for technical SEO services: </p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ We have a team of certified SEO professionals including technical SEO experts, digital marketers, and content strategists with more than a decade’s experience
          </li>

          <li>
            ✔ We offer industry-specific and comprehensive solution to fix technical issues
          </li>

          <li>
            ✔ Detailed guidance and consistent monitoring of the website help client in achieving the diverse technical SEO goals
          </li>

          <li>
            ✔ Digicore Inc. is a certified Google partner that helps you in fixing all the technical SEO issues efficiently.
          </li>

          <li>
            ✔ We offer measurable results and assure transparency and clarity in our services
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
         <h2>PPC AGENCY DELHI FAQS</h2>
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
