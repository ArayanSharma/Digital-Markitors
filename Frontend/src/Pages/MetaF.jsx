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

const  MetaF = () => {

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
    title: "The Moto Men Car Detailing Meta Ads Case Study: From 40% to 100% Location-Relevant Leads",
    image: seocase,
    descriptions: [
    "When The Moto Men approached us for Meta Ads, the challenge wasn’t lead volume – it was lead relevance. Many enquiries were coming from outside serviceable locations, impacting conversions and efficiency. The objective was to improve lead quality without increasing budgets or volumes. By implementing a location-first Meta Ads strategy and refining targeting and creatives, the campaigns began delivering only location-relevant, high-intent enquiries. As a result, lead quality improved significantly, conversions increased, and advertising spend became far more efficient with reduced wastage."  ]
  },

  {
    title: "Book My Laundry Brand Awareness & Franchise Lead Generation Case Study (Delhi NCR)",
    image: seocase,
    descriptions: [
     "When Book My Laundry partnered with us, the goal was to build strong brand awareness and generate high-quality franchise enquiries across Delhi NCR, including Noida, Ghaziabad, and Greater Noida. Earlier campaigns faced lead relevancy issues, with many accidental or low-intent enquiries. We executed a customised Meta Ads strategy using reel and static formats, supported by a custom-built lead form to filter genuine franchise interest. Alongside paid campaigns, we managed complete social media marketing to strengthen brand recall and trust across target locations. The result was a significant improvement in enquiry quality, ensuring leads were relevant, intentional, and aligned with franchise expansion goals." ]
  },

  {
    title: "My Plate Manage (Dietician Binny) Meta Ads Case Study: 80% Lead Relevancy & Improved Conversions",
    image: seocase,
    descriptions: [
    "My Plate Manage partnered with us to improve lead quality for Meta Ads campaigns after facing issues with high lead costs and low relevancy from earlier setups. While enquiries were coming in, most lacked intent and did not convert. We restructured the Meta Ads strategy with a quality-first approach, refining targeting, messaging, and lead filtering to attract genuinely interested users instead of accidental submissions. The campaign delivered stronger lead relevancy, improved conversion rates, and a more cost-effective acquisition process, helping the brand connect with the right audience consistently." ]
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
          title: "Merchant Center Setup",
          description:
            "Paid advertising is beneficial in improving visibility of the brand, while focusing on high-intent keywords, and thereby, addressing measurable leads and sales through well-designed and monitored PPC campaigns strategized by experts.",
        },
    
        {
          icon: socialIcon,
          title: "Campaign Setup",
          description:
            "Performance Max optimally utilizes automation and AI in order to maximize conversions across Google platforms. It also optimizes ads, bids, and audiences to attract better ROI.",
        },
    
        {
          icon: ppcIcon,
          title: "Feed Optimisation",
          description:
            "Demand generation builds awareness and interest and uses data-driven PPC campaigns. The idea is to engage audiences initially and convert traffic into high-quality leads constantly.",
        },
    
        {
          icon: webIcon,
          title: "Performance Max",
          description:
            "The visibility of brand gets boosted through visually appealing and engaging banners through display ads. This helps brands in reaching targeted audiences and apps to drive conversion and awareness.",
        },
    
        {
          icon: contentIcon,
          title: "Smart Product Targeting",
          description:
            "The compelling video ads attract audience and increase brand awareness, while driving consideration through YouTube campaigns. These PPC campaigns are helpful in generating conversions across devices effectively.",
        },
    
        {
          icon: ormIcon,
          title: "Reporting & Insights",
          description:
            "The high-intent shoppers are attracted by the effectively designed shopping ads that showcase products with images and prices. These optimized campaigns drive relevant traffic and sales.",
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
      
      title="Google Shopping Ads Management Services"
      description="We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
      backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
     Best Google Shopping Ads Agency
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

      <h2>Why Do I Need Google Shopping Ads <br />Management Services?</h2>

      <p>
It is quite tough for businesses to generate quality leads at present due to the increased competition. PPC is one of the efficient ways to target potential customers, only if the campaign has been executed in a strategic way. Keeping in mind the increased competition, constantly upgrading algorithms, higher bid costs, Digicore Inc., the top PPC agency in Delhi NCR employs well-planned strategy for ongoing campaign optimization. Besides, we ensure the data-driven insights, expertise in generating quality leads, driving sales, and improving the brand awareness through campaigns are aligned according to business goals of clients.
      </p>
    </div>

    

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
Google Shopping Ads Services
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
            ✔ We have a team of seasoned professionals that tailors and monitors PPC campaigns
          </li>

          <li>
            ✔ Our measurable results for all-sized business are aligned with the growth-first mindset
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

export default  MetaF
