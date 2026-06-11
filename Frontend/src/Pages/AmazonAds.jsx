
import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

import impact from "../assets/impact.webp";
 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 
import seoRimg from "../assets/real-seo-result.webp";
import heroImg from "../assets/a.png";
import graphImg from "../assets/graph-l.webp";
 import eimage from "../assets/Dimage/0.png";
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
 

const AmazonAds = () => {

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

 
  return (
    <>

     <Banner
      
      title="Amazon Seller Account Management Services"
      description="Digicore Inc. provides comprehensive account management services to Amazon sellers. With the detailed data-driven insights, inventory management is optimized by our account management experts. We focus on the consistent growth of ecommerce business by helping sellers increase their Amazon rankings."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
      backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
       Amazon Seller Account & Ads <br />Management Services
          </h1>

       

          <p>
   Digicore Inc. is one of the trusted companies known for its reliable Amazon seller account management services that improve presence of sellers in the marketplace. To address the challenges related to inventory management, updated policies, increased fees or account suspension and many other issues, our seasoned professionals help Amazon sellers in seeking the customized solution. At Digicore Inc., our best Amazon seller account management services improve the visibility of businesses and their performance in the online marketplace. From increasing the brand awareness, boosting conversion rates, increasing sales and customization of campaigns to comprehensive account management services, we address all the aspects according to the business growth goals of clients. Our professional Amazon account managers focus on the long-term account management goals of sellers and based on the same, contribute to their business growth
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
        Why Amazon seller account management services are essential for business growth?
            </h2>

            <p>
           Amazon seller account management services are aimed at improving the visibility and performance of products sold in the marketplace. At Digicore Inc., our qualified seller account management experts fix the issues that hamper the visibility and growth of brands on Amazon. Whether it is through product listing optimization, boosting conversion rates, improving search visibility in the marketplace or addressing the detailed aspects of business growth, our team employs the best-in- class practices for Amazon seller account management.
</p>

            <div className="orange-line"></div>

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

      <h2>Why do I need Amazon account <br />management service provider?</h2>

      <p>
  From saving time and efforts to aligning the seller account management goals properly, it is essential to hire an experienced professionals. At Digicore Inc., we ensure comprehensive Amazon seller account management support is offered to clients, thereby, helping them in achieving long-term success. As a part of our services, we streamline operations, optimize sales performance, and improve visibility & performance of sellers in the marketplace. At Digicore Inc., we help our clients in complying with Amazon’s updated policies and uncover the other algorithm-based changes to enhance store’s performance. Besides, we ensure that our Amazon SEO expertise and end-to-end fulfilment aspects are timely addressed through account management services. The whole idea is to provide excellent customer service while adhering to Amazon policies.
      </p>
    </div>

     <div className="seo-content">

      <div className="seo-left">

        <h3>The Problem</h3>

        <p>
       Many Amazon sellers face challenges such as profitability getting delayed, pricing wars by competitors for stealing customers with slashed price, not able to comprehend latest compliance & regulatory aspects of Amazon, and inventory management. Additionally, the execution of return policy, and addressing Amazon fees and expenses along with massive competition in the marketplace are some of the issues that need to be resolved professionally.
        </p>

        <h3>The Solution</h3>

        <p>
    At Digicore Inc., we emphasize on the use of strategically planned Amazon seller account management services to support business growth with data-based insights. With the comprehensive support extended to Amazon sellers, the account setup and optimization, inventory & order management, product listing & SEO optimization, customer services and review management are aligned together to improve sales & visibility of the brand. With our customized and well-planned Amazon seller account management services, the risk of account suspension due to non-compliance with the marketplace can be reduced.
        </p>

      </div>

      <div className="seo-right">

        <p>
     Our qualified seller account management professionals maximize profitability by handling the time- consuming task with utmost expertise. Digicore Inc. maintains transparency, customization, and ensures the expertise related to Amazon seller account management services address the business growth of clients in a short span of time. Our proactive account managers stay updated with updated algorithm changes, Amazon compliance policies, and streamline all the tasks of seller account management to help businesses focus on their growth
        </p>

      </div>

    </div>

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
Amazon Account Management Services
    </h2>

    <p>
At Digicore Inc., we focus on comprehensive Amazon seller account management services keeping in mind, the diverse goals of improved performance, visibility, and growth in the marketplace. After helping countless Amazon sellers in complying with the regulatory & operational guidelines of the marketplace, we have emerged as the trusted resource for removing hurdles hampering the growth of sellers. Our data-driven and cutting-edge methodology of Amazon seller account management services increase revenue and sales apart from improving the performance of brand online.
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

 

<section className="dominate-section">
  <div className="dominate-heading">
    <h2>How Can We Help You Grow</h2>

    <div className="dominate-line"></div>

    <p>
     Digicore Inc. is a leading SEO agency in Delhi. We help businesses evolve by providing them with the best SEO strategies and solutions designed specifically to improve visibility to the people who matter most. We combine cutting-edge SEO strategies, including technical SEO, high-quality content and strategic link building to deliver results that help brands outspace the competition and remain relevant for longer than they can imagine. We utilize a data-driven approach to ensure you:
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
How Do We Manage Amazon Seller Account
      </h2>

      <p>
 At Digicore Inc., we ensure structured, and performance driven approach is employed to manage Amazon seller accounts. With the objective to adhere to the marketplace compliance and uninterrupted business growth, our dedicated account managers begin with the complete account setup and optimization. As a part of optimization, listings, storefront design, and brand registry support are aligned with the keyword research and product visibility. The consistent account optimization adheres to the updated algorithm, thereby, monitoring the account health, policy level and customer feedback to prevent revenue loss and suspensions. Apart from the seller account management, we also manage Amazon PPC campaigns with data-driven approach to control ad spend.</p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

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

export default AmazonAds
