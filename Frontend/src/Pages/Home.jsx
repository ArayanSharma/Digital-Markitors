import React, { useEffect, useRef, useState } from "react";

import Hero from "../Components/Sections/Hero";
import ServiceCard from "../Components/Cards/ServiceCard";
import Testimonial from "../Components/Cards/ServiceCard";
import Blogs from "../Components/Cards/BlogCard";
import Faq from "../Components/Sections/FAQ";
import Contacts from "../Components/Sections/Contact";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../Styles/Home.css";

/* ICONS */
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
import graphImg from "../assets/graph-l (1).webp";
import impact from "../assets/impact.webp";

import TestimonialSection from "../Components/Sections/Testimonials";
import Brands from "../Components/Sections/Brands";
import Tools from "../Components/Sections/Tools";
import bgIcon from "../assets/bg-iconnew.webp";

import Icon1 from "../assets/h1.png";
import Icon2 from "../assets/h2.png";
import Icon3 from "../assets/h3.png";
import Icon4 from "../assets/h4.png";
 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";
 

const Home = () => {
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
    title: "DHI International SEO Case Study: 190% Growth in Organic Traffic",
    image: seocase,
    descriptions: [
"When DHI International partnered with us, the objective was clear: to strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved significant growth in organic traffic, keyword rankings, and overall search visibility, transforming SEO into a reliable and scalable lead-generation channel."
    ]
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
    "When we started working on Moti Mahal Delux, none of the targeted franchise-related keywords were visible on Google. There were no dedicated SEO pages, limited content depth, and technical and on-page gaps restricting search visibility. Our team suggested new SEO-focused pages, created optimised content, fixed technical and on-page issues, and executed high-quality link building to strengthen authority. As a result, the website achieved 100% keyword visibility, with all targeted keywords now ranking on the first page of Google, most within the top 5 positions."
    ]
  }
];
 

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



  const sliderRef = useRef(null);
 
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


  useEffect(() => {

    const slider = sliderRef.current;

    const autoSlide = setInterval(() => {

      if (slider) {

        slider.scrollBy({
          left: 380,
          behavior: "smooth",
        });

        /* RESET */
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 10
        ) {

          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });

        }
      }

    }, 1000);

    return () => clearInterval(autoSlide);

  }, []);

   const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === caseStudies.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (

    <div>

    
      <Hero />



   <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
      Discover Our Services in
      <br />
      Kanpur
      <br />
      for Faster Business Growth
    </h2>

    <p>
      We offer customized digital marketing solutions to help
      our clients engage their audience and build a strong
      brand presence across all platforms.
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



      <section className="impact-sec"style={{ backgroundColor: "#fff" }}>

        <div className="impact-container">

        
          <div className="impact-image">

            <div className="impact-circle"></div>

            <img
              src={impact}
              alt="Impact"
            />

          </div>

    
          <div className="timeline-section" style={{ backgroundColor: "#fff" }}>

            <div className="timeline">

              <div className="timeline-item active">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <h3>Contact Us</h3>

                  <p>
                    Get in touch with us via email, phone or website.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <h3>Share Your Goals</h3>

                  <p>
                    Tell us about your business and marketing goals.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <h3>Consultation</h3>

                  <p>
                    Our expert will discuss strategies tailored to your business.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <h3>Proposal & Plan</h3>

                  <p>
                    We provide a customized strategy and roadmap.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <h3>Partner & Grow</h3>

                  <p>
                    Drive high-impact traffic and measurable growth.
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
    <h2>DOMINATE YOUR INDUSTRY WITH US</h2>

    <div className="dominate-line"></div>

    <p>
      We are a team of highly skilled and expert digital marketers.
      All our solutions are crafted thoughtfully to ensure your
      digital presence is strong, engaging and impactful.
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
        Why Businesses Choose Digicore Inc.
      </h2>

      <p>
        Digicore Inc. is the most trusted and AI first digital marketing agency in Kanpur, India. We offer a full-spectrum of digital marketing solutions to clients across India and abroad. Whether you are a startup or an already established brand, we can help you with robust digital marketing services to make your brand unforgettable. We blend creativity, strategy, and cutting-edge technology to deliver solutions that captivate, engage and convert. All our strategies are curated to maximize your impact and ROI. We have a huge clientele because we have helped their brand stand out and leave a lasting impression in the digital landscape. Here is why you should also choose us - the best digital marketing company:
      </p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ Team of experienced digital marketing experts
          </li>

          <li>
            ✔ Result-oriented strategies tailored to your brand
          </li>

          <li>
            ✔ Transparent reporting system for every campaign
          </li>

          <li>
            ✔ Improve brand visibility across all platforms
          </li>

          <li>
            ✔ Strong SEO strategies for better search rankings
          </li>

          <li>
            ✔ Save time, effort and operational costs
          </li>

          <li>
            ✔ Convert opportunities into measurable growth
          </li>

          <li>
            ✔ Growth-focused strategies for startups & businesses
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

 <div>

  <Faq />

 </div>

 <div>
  <Contacts />
 </div>





    </div>
  );
};

export default Home;