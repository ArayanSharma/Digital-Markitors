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
 

const SeoService = () => {

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
  const slider = sliderRef.current;

  if (!slider) return;

  const interval = setInterval(() => {
    const card = slider.querySelector(".workindustry-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 40;

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - cardWidth) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  }, 2000);

  return () => clearInterval(interval);
}, []);

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
          title: "Enterprise SEO",
          description:
            "Offering tailored SEO strategies to help enterprises boost their online presence, attract high-quality, relevant traffic and leave a lasting impression.",
        },
    
        {
          icon: socialIcon,
          title: "Global SEO",
          description:
            "Helping brands rank higher in search engines with our Global SEO services designed for expanding reach and driving targeted traffic worldwide.",
        },
    
        {
          icon: ppcIcon,
          title: "E-commerce SEO",
          description:
            "Helping online stores maximize visibility, attract high-intent shoppers and drive sales through search engines with our tailored E-Commerce SEO solutions.",
        },
    
        {
          icon: webIcon,
          title: "National SEO",
          description:
            "Strengthening brands with robust data-driven strategies designed to boost their website’s visibility in national search results and drive high-quality traffic.",
        },
    
        {
          icon: contentIcon,
          title: "AI SEO",
          description:
            "From predictive keyword research to AI-powered insights for links and technical SEO, we create strategies that boost rankings and drive real engagement.",
        },
    
        {
          icon: ormIcon,
          title: "GEO SEO",
          description:
            "Achieve maximum visibility in specific geographic locations with our tailored GEO SEO that intelligently combines advanced local and global SEO strategies.",
        },
    
        {
          icon: listenIcon,
          title: "AEO SEO",
          description:
            "We can optimize your content for answer engines and AI-driven search results and help you stay ahead in the evolving digital world.",
        },
    
        {
          icon: croIcon,
          title: "TECHNICAL SEO",
          description:
            "Delivering high-quality technical SEO to improve site speed, mobile performance and site architecture to help brands stand out in search visibility.",
        },
    
        {
          icon: geoIcon,
          title: "Content Marketing Services",
          description:
            "Helping brands tell their story in a unique way and forge deeper connections with audiences through our high-quality content marketing services.",
        },
    
      ];
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
      const [currentCase, setCurrentCase] = useState(0);
      const caseStudies = [
  {
    title: "Rizaries SEO Case Study: 613% Growth in Organic Traffic",
    image: seocase,
    descriptions: [
     "Rizaries is a Shopify-based home furnishings brand selling rugs, mats and cushion covers. The objective was to increase organic traffic, improve keyword rankings and scale SEO as a primary sales channel. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings and capture high-intent searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver." ]
  },

  {
    title: "Education SEO Case Study: 420% Lead Growth",
    image: seocase,
    descriptions: [
     "An education institute wanted more admissions through organic search. We optimized course pages and improved technical SEO. The website generated significantly more qualified student enquiries."   ]
  },

  {
    title: "Healthcare SEO Case Study: 380% Traffic Growth",
    image: seocase,
    descriptions: [
    "A healthcare client wanted to improve visibility in local search. We implemented content clusters and local SEO. Organic traffic and appointment requests increased substantially."  ]
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
    question: "How long will it take for my website to start ranking on Google?",
    answer:
      "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
  },
  {
    question:
      "How many keywords will you work on as part of my SEO campaign?",
    answer:
      "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
  },
  {
    question:
      "Do you offer monthly, quarterly, or custom SEO payment plans?",
    answer:
      "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
  },
  {
    question:
      "What is the size of your in-house SEO and digital marketing team?",
    answer:
      "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
  },
  {
    question:
      "Which industries and types of clients do you primarily work with?",
    answer:
      "We work with diverse range of clients across industries, including education, finance, e-commerce, travel, B2B, healthcare, and so on. We have a huge clientele across Pan India. We help both startups and already established brands elevate their online presence and achieve measurable results.",
  },
  {
    question:
      "Will my website be optimized to rank in AI-powered search platforms like ChatGPT and Google AI?",
    answer:
      "Yes, we utilize the most advanced tools and cutting-edge technology to ensure your website is optimized for AI-powered search platforms as well. Our team of experts will optimise your website for AI search like ChatGPT and Google AI by targeting high-intent customer queries and creating high-quality and high-authority content. Visit our site or connect with the AI First SEO team via email or phone for more details.",
  },
  {
    question:
      "Which is the best SEO agency in Delhi, and how do I choose the right one?",
    answer:
      "Digicore Inc. is a leading AI SEO agency in Delhi NCR with proven results. We offer comprehensive SEO marketing solutions to a diverse range of clients across industries. We utilize years of experience and cutting-edge tools and technology to help you achieve desired results. You can visit our site and go through our SEO case studies to know how we have helped our clients improve their digital presence and achieve ROI-driven results to make the right choice.",
    },
    {
    question:
      "Have you worked with clients from my industry before?",
    answer:
      "Yes, we have worked with clients from your industry and we are excited to serve you with our innovative digital marketing solutions to help you leave a lasting impression across all online platforms, including social media handles.",
  },  
  {
    question:
      "How do you share SEO performance reports and how frequently will I receive them?",
    answer:
      "We provide a bi-monthly SEO performance reports to help you track key metrics such as rankings, traffic, conversions and more. If you want, we can provide you report more frequently; however, we believe that a bi-monthly reporting system is more appropriate as you get enough insights to ponder on.",
  }
  ,{
    question:
      "Can you share real client case studies and past SEO results?",
    answer:
      "Yes, we can! Aside from that, you can also visit the SEO case studies section in our website to learn more about our existing and past clients’ experience with us.",
  }
    
  ,{
    question:
      "Apart from SEO, what other digital marketing services do you provide?",
    answer:
      "We provide comprehensive digital marketing services, including SEO, SMM, PPC, Content Marketing, Performance Marketing, Website Design & Development, Online Reputation Marketing, Conversion Rate Optimisation, AEO+AIO+GEO, Display Advertising Services, Social Media Listing, Response Marketing and many more.",
  }
    
  ,{
    question:
      "My website has a high spam score. How will you reduce and fix it?",
    answer:
      "Don’t worry about that. We will fix it! We will first conduct a thorough audit to identify the issues causing it, such as low-quality backlinks, thin content or technical SEO problems. After identifying the real cause, we will implement a comprehensive cleanup SEO strategy to eliminate the issue and restore your website’s credibility and improve its search engine trustworthiness.",
  }
    
  ,{
    question:
      "I have been working with another SEO agency for over a year but my rankings haven’t improved. Can you fix this?",
    answer:
      "Well, we have no idea what strategies your previous SEO partner was using. But worry not! We will thoroughly audit your site and know what exactly is the reason for your site’s low ranking. After that, we would be in better position to tell you our exact course of action. But rest assured, Digicore Inc. is the best SEO company in Delhi. Our team of experts will help you achieve your digital marketing goals, including first page ranking & high-intent leads effortlessly. We will use the most advanced tools and technology to elevate your site’s ranking and drive measurable growth.",
  }
    
  ,{
    question:
      "How much monthly traffic and how many leads can I realistically expect from SEO?",
    answer:
      "The monthly traffic and leads you can expect from SEO depend on various factors like your industry, competition, current website authority and the scope of SEO efforts. But you don’t need to worry. Our team of experts will craft specialized digital marketing strategies tailored to your brand to ensure increased targeted traffic and high-quality leads within 3-6 months.",
  }
    
  ,{
    question:
      "If I stop SEO in the future, will my rankings remain stable?",
    answer:
      "Stopping in today’s scenario simply translates to falling behind fast. The moment you will stop implementing digital marketing strategies, your ranking will drop, let alone remaining stable. Digital marketing isn’t a one-time fix; it’s a continuous process of consistent effort and growth. With technological advancements and SEO evolution, your brand also evolves. If you will stop after a time being, you will lead to nowhere. Hence, you are advised to actively implement digital marketing effort to reap consistent outcomes. Partner with Digicore Inc. – the most reliable AI First SEO agency in Delhi to have stable ranking across platforms!",
  }
    
  ,{
    question:
      "For how long will I need to continue SEO for my website to maintain results?",
    answer:
      "As said earlier, SEO is not a one-time fix; it is a continuous process. You need to keep implementing SEO strategies in order to maintain consisting results and stay ahead across online and social media platforms. With the best AI-first digital marketing company by your side you can ensure consistent online growth and robust outcomes!",
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
           Best SEO Company in Delhi NCR
          </h1>

       

          <p>
            Digicore Inc is a leading SEO company in Delhi NCR, helping brands become unmissable on every online and social media platform. We offer end-to-end SEO solutions to ensure your brand doesn’t just exist but it shines where it matters most. In this era of AEO SEO and GEO SEO, success is not just limited to simple SEO practices. Now it is about being found, trusted and chosen.  Digicore Inc is a results-driven digital marketing & SEO agency known for outstanding SEO strategies and solutions. We empower ambitious B2B & B2C brands to rise above the noise, engage the right audience, and grow fearlessly in today’s digital-first world. We combine cutting-edge tools, customer focused content, advanced technical expertise backed by proven results with proven strategies to create digital experiences that don’t just attract attention, but also engage, convert and last longer than you can imagine.
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
              Search behaviour has changed dramatically! Consumers now search brands through multiple channels, including Google, social media platforms, marketplaces, video content and even AI-powered recommendations. To be visible everywhere is the need of this hour.  Digicore Inc – the best SEO company in Delhi, NCR, deliver tailored SEO solutions fitting to your brand’s need to ensure measurable outcomes. We build visibility that compounds over time.<br /> <br /> We manage every facet of SEO—from technical optimisations to off-site authority building to help your brand stand out in this crowded digital world, gets noticed and becomes unmissable in record time.

Our AI-focused SEO team crafts fresh, keyword-optimized web pages and blog posts aligned with user search intent, driving strong organic results and visibility across AI-driven search platforms. At  Digicore Inc, we utilize proven SEO tactics and best practices to expand your visibility, improve your content, strengthen your brand and turn clicks into lead. With effective SEO, you don’t just rank; you connect, engage and grow your business sustainably and effortlessly.
            </p>

            <div className="orange-line"></div>

          </div>

          <div className="visibility-image">
            <img src={graphImg} alt="Graph" />
          </div>

        </div>

      </section>

      <section className="counter-section">

        <div className="counter-container">

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count1}
              </span>
                <span style={{ color: "#f57c14"}}>
              %
              </span>
            </h5>

            <p>
             
of all website traffic comes from organic search
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count2}
              </span>
              <span style={{ color: "#f57c14"}}>
              %
              </span>
            </h5>

            <p>
            
of users never go beyond the first page of search results
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count3}
              </span>
              <span style={{ color: "#f57c14"}}>
              %
              </span>
            </h5>

            <p>
           
of users rely on Google search for finding local businesses
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count4}
              </span>
               <span style={{ color: "#f57c14"}}>
              %
              </span>
            </h5>

            <p>
           
of marketers rank SEO as a top long-term investment for growth
            </p>

          </div>

        </div>

      </section>


         <div className="about-container">
<div className="divider"></div>
          <h1>
            SEO is not just about ranking on Google — <br />it’s about connecting your brand across <br />every platform where your customers<br /> search.
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

      <h2>WHY DO I NEED AN SEO AGENCY IN DELHI?</h2>

      <p>
       In today’s digital era, Delhi has become one of the most competitive markets, and it is very difficult for new businesses to visible organically, get clients and sales. Businesses across every industry compete for the same audience, locations, and keywords. As a result, it is difficult to be visible on the first page of Google, AI answers without a targeted SEO strategy. Ranking a website is not a one-day game. It requires a clear and data based SEO strategy. A trusted and professional SEO company in Delhi can helps your business rank locally, attract high-intent commercial organic traffic, and generate consistent, quality lead.
      </p>
    </div>

    <div className="seo-content">

      <div className="seo-left">

        <h3>The Problem</h3>

        <p>
         Most businesses still rely only on traditional SEO, assuming it is enough to get visibility online. However, with AI-powered search engines like ChatGPT, Gemini, and Perplexity, users now receive direct answers instead of browsing multiple websites. As a result, many brands struggle to appear in AI-generated results, answers, and recommendations.
        </p>

        <h3>The Solution</h3>

        <p>
     SEO is the foundation that powers both AEO and GEO. When combined with structured content, clear answers, and strong authority signals, SEO helps your brand get recognized by AI engines. By aligning SEO with AEO and GEO strategies, your business becomes discoverable not just on Google—but also inside AI-generated answers, summaries, and comparisons.
        </p>

      </div>

      <div className="seo-right">

        <p>
      AI, ever-changing algorithms and shifting consumer buying behaviours are all redefining digital marketing in this era. To stay ahead, brands must adapt quickly, think strategically and remain visible across every channel. That’s when Digicore Inc., the trusted SEO company in Delhi steps in.
        </p>

        <p>
       A forward-thinking SEO agency can help you keep up with the change and cut through the noise. Whether you’re a startup looking to establish presence or an established brand aiming to scale, we can help you with unmatchable SEO strategies so that you can grow with confidence. Every strategy we deploy is guided by insights, analytics, and performance data. We have experience across multiple industries and we utilize cutting-edge tools and technology to deliver sustainable growth. Turn every click, search and interaction into real growth with Digicore Inc.!
        </p>

      </div>

    </div>

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
SEO Services in Delhi
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
    Why Choose Digicore Inc AS YOUR <br />
SEO COMPANY IN DELHI
      </h2>

      <p>
        Digicore Inc. is a leading SEO agency serving businesses across Delhi NCR, offering cost-effective SEO services for small, medium, and large businesses. We don’t follow short-term ranking tactics; instead, we believe in crafting strategic, data-driven and future-ready SEO solutions for brands to ensure sustainable visibility and real business impact. We utilize state-of-the-art search optimization tools and techniques to ensure your brand is discoverable wherever your audience is searching, such as Google, Social Media Handles, Marketplaces and AI-powered results. Our years of expertise and proven strategies have earned us reputation of the most sought-after SEO agency in the Delhi region. The reasons why our clients choose us are:      </p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ All our SEO strategies and solutions are tailored by a team of seasoned SEO specialists.
          </li>

          <li>
            ✔ Ours is a growth-first mindset and we design solutions to drive measurable results for your business.
          </li>

          <li>
            ✔ We follow a clear, transparent reporting system to ensure you are abreast of each step in the process.
          </li>

          <li>
            ✔ Build result-oriented customized strategiesDigicore Inc. help brands save TIME, ENERGY and EFFORT
          </li>

          <li>
            ✔ We are masters of keyword and intent-based content optimization
          </li>

          <li>
            ✔ Ours is a growth-driven, future-ready mindset
          </li>

          <li>
            ✔ Proven experience and expertise across multiple industries
          </li>

          <li>
            ✔ We help brand rank higher, earn trust, authority and long-term success in search.
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

export default SeoService
