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
 
 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 
const AiSeo = () => {

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
     "When DHI International partnered with us, the objective was clear – strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved strong growth in organic traffic, keyword rankings, and search visibility – transforming SEO into a reliable lead-generation channel. When DHI International partnered with us, the objective was clear – strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved strong growth in organic traffic, keyword rankings, and search visibility – transforming SEO into a reliable lead-generation channel."    ]
  },

  {
    title: "Rizaries SEO Case Study: 613% Growth in Organic Traffic",
    image: seocase,
    descriptions: [
     "Rizaries is a Shopify-based home furnishings brand selling rugs, mats, and cushion covers. The objective was to increase organic traffic, improve keyword rankings, and scale SEO as a primary sales channel. At the start, organic visibility was limited and most keywords were ranking beyond the first page. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings, and capture high-intent non-branded searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver." ]
  },

  {
    title: "Moti Mahal Delux SEO Case Study: 100% Keyword Visibility",
    image: seocase,
    descriptions: [
      "When we started working on Moti Mahal Delux, none of the targeted franchise-related keywords were visible on Google. There were no dedicated SEO pages, limited content depth, and technical and on-page gaps restricting search visibility. Our team suggested new SEO-focused pages, created optimised content, fixed technical and on-page issues, and executed high-quality link building to strengthen authority. As a result, the website achieved 100% keyword visibility, with all targeted keywords now ranking on the first page of Google – most within the top 5 positions."  ]
  }
];

      const services = [
    
        {
          icon: seoIcon,
          title: "AI SEO STRATEGY",
          description:
            "We offer customized SEO strategies to help businesses improver their online presence, attract high-quality, relevant traffic and leave a lasting impression.",
        },
    
        {
          icon: socialIcon,
          title: "AI SEARCH CONSULTANCY",
          description:
            "We provide premium AI Search Consultancy services designed to elevate your brand’s visibility, boost rankings, and attract the right audience from around the world.",
        },
    
        {
          icon: ppcIcon,
          title: "GEO SEO",
          description:
            "GEO SEO is for those who wish to maximize their store visibility, attract high-intent shoppers across various platforms and improve their ROI.",
        },
    
        {
          icon: webIcon,
          title: "AEO SEOs",
          description:
            "Strengthening brands with robust data-driven strategies designed to boost their website’s visibility in national search results and drive high-quality traffic.",
        },
    
        {
          icon: contentIcon,
          title: "TECHNICAL",
          description:
            "Using AI-driven analysis, we optimize your site’s structure, speed and usability to ensure your customers keep returning to your site not just for the product but for the unique experience.",
        },
    
        {
          icon: ormIcon,
          title: "ChatGPT Optimization",
          description:
            "Achieve maximum visibility in specific geographic locations with our tailored GEO SEO that intelligently combines advanced local and global SEO strategies.",
        },
    
        {
          icon: listenIcon,
          title: "Perplexity Optimization",
          description:
            "Our Perplexity Optimization services are curated specifically for brands to ensure their content remains visible and credible on AI platforms like Perplexity AI.",
        },
    
        {
          icon: croIcon,
          title: "Gemini Optimization",
          description:
            "Get your content optimized for the new AI search with our Gemini Optimization Services and let your audience find and engage with your brand effortlessly.",
        },
    
        {
          icon: geoIcon,
          title: "Google AI Mode Optimization",
          description:
            "We ensure your brand stays visible, relevant and authoritative in AI-driven search with our cutting-edge Google AI Mode Optimization services.",
        },
    
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
    question: "What is AI SEO and how is it different from traditional SEO?",
    answer:
      "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
  },
  {
    question:
      "Do I still need traditional SEO if I invest in AI SEO?",
    answer:
      "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
  },
  {
    question:
      "Will AI SEO help in generating leads or only visibility?",
    answer:
      "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
  },
  {
    question:
      "How do you track performance in AI SEO?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } ,
  {
    question:
      "Is AI SEO suitable for all types of businesses?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  } 
    
];

 
  return (
    <>

     <Banner
      
      title="SEO Agency in Delhi That Drives Traffic, Trust, and Conversions"
      description="We are  Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
       backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
          AI SEO That Drives Measurable Business Growth
          </h1>

       

          <p>
          Digicore Inc. is the best AI SEO company in Delhi. We provide the most advanced AI SEO services and help businesses improve their brand visibility in AI-powered searches. We think and go beyond traditional searches – using powerful strategies to make sure your content shows up across popular AI platforms, including ChatGPT, Gemini, Perplexity and Google’s AI-powered search. At Digicore Inc., we use smart AI tools to understand what your audience is really looking for, identify the right keywords, and fine-tune your content quickly and effectively to help you gain better visibility, higher rankings, more traffic, and long-term growth for your business. Our AI SEO service models are specifically designed for ambitious businesses who wish to rise above the noise, engage the right audience and grow fearlessly in today’s digital-first world.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
             Lead Every Search with Delhi’s Most Trusted SEO Agency
            </h2>

            <p>
             In this era of AI a lot has changed, including the way people search online. Modern consumers just don’t rely on single platform for searching brands. They search across multiple touchpoints, such as Google, social media, online marketplaces, video platforms and even AI-powered recommendations. Being visible everywhere is now more important than ever. Digicore Inc. offer well-crafted AI SEO Strategies aligned with your business’ goals to ensure your brand always stays visible, relevant and a step ahead as search continues to evolve. We optimize your brand for the entire discovery ecosystem—search engines, AI platforms, social channels, marketplaces, and emerging digital touchpoints to ensure holistic visibility, stronger relevance and sustained growth.
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
           AI Is Ruling Search – Make Sure To Position <br />Your Brand To Be Discovered In This New<br /> Era
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

      <h2>Why Do I Need an AI SEO Agency</h2>

      <p>
      In this era where AI is ruling the search platforms being visible wherever your customers are looking for you have become more important than ever.
      </p>
    </div>

    <div className="seo-content">

      <div className="seo-left">

        <h3>The Problem</h3>

        <p>
Today, search is no longer just typed—it’s asked, suggested and predicted. Study reveals that over 70% of users use AI tools to conduct online search. More so, people now don’t rely on single platform for search, they use multiple channels to find what they are looking for. This makes it evident that being only on single platform will not take you anywhere in this highly competitive digital world.
        </p>

        <h3>The Solution</h3>

        <p>
AI SEO is the only solution to stay ahead, stay competitive and stay relevant in this era. Being visible across multiple platforms, including AI-powered recommendations is especially important when people are comparing options and making decisions. An AI SEO agency can help your brand stay visible in a world where algorithms are constantly evolving, platforms change quickly, and customer don’t follow a set pattern.
        </p>

      </div>

      <div className="seo-right">

        <p>
     Digicore Inc. is a leading AI SEO company in Delhi, NCR, providing top-notch AI SEO Services to businesses. We offer cutting-edge AI SEO Strategies to help brands lead in this AI-driven era with ease. By combining human insight with smart AI, we make sure your brand is seen at the right time, on the right platform and with the right message—today and always! Whether you are just starting up with your dream endeavour or are willing to take your existing brand to the next level, AI SEO is your way out to growth, success and lasting visibility in a competitive digital world. Digicore Inc. creates AI SEO strategies that work today and grow with tomorrow, ensuring your brand stays visible, relevant, and unforgettable in an ever-changing digital world. We have experience working across industries, we can help you grow and succeed in this ever-evolving digital world!
        </p>

        

      </div>

    </div>

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
Our AI SEO Services
    </h2>

    <p>
SEO is not just limited to Google Search at Digicore Inc.. We help business unlock their brand’s full digital potential by using AI-powered strategies and help them connect, engage and inspire their audience the right way and at the right platform. WE HELP BRAND STAY VISIBLE, RELEVANT and COMPETITIVE!
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
            Stop Guessing. Start Growing.
            Book Your Strategy Call Now.
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
    Digicore Inc. is a leading AI SEO company in Delhi, NCR. We craft unique AI SEO strategies for each of our clients to help them grow and thrive in highly competitive AI-driven search. We ensure your brand is visible on every platform, reaching the clients who matter most. At Digicore Inc., we use proven SEO techniques, quality content, and smart link-building to help your brand stay ahead of the competition and remain relevant all the time. Every strategy we use is guided by data, ensuring you:
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
AI SEO AGENCY
      </h2>

      <p>
       Digicore Inc. is a leading AI-first digital marketing company in Delhi NCR. We offer an extensive range of digital marketing and SEO services, including AI SEO. We utilize cutting-edge technology and most advanced tools to ensure your brand goals are met in a timely fashion. All our strategies are designed by experts and backed by data to ensure sustainable visibility and real business impact. We ensure your brand leads every search, stays visible across Google, social platforms, online marketplaces, and AI-powered discovery channels. </p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ We design future-ready strategies to ensure long-term visibility and relevance.
          </li>

          <li>
            ✔ All our strategies are curated by our highly skilled and experienced AI SEO experts.
          </li>

          <li>
            ✔ We believe in pure work – every decision is powered by real insights, analytics and performance data.
          </li>

          <li>
            ✔ We ensure your brand shows up across AI platforms, social channels and marketplaces.
          </li>

          <li>
            ✔ We design SEO strategies with today’s search in focus and tomorrow’s opportunities in sight.
          </li>

          <li>
            ✔ We deliver results you can trust and clearly measure.
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

export default AiSeo
