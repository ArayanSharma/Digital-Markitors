import React, { useEffect, useState ,useRef} from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";

 import i1 from "../assets/i1.png";
 import i2 from "../assets/i2.png";
 import i3 from "../assets/i3.png";

 import bgIcon from "../assets/bg-iconnew.webp";
 

import impact from "../assets/impact.webp";
 import eimage from "../assets/BannerImg/YouTubeAds.png";
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
import c1 from "../assets/ms.png";
import v1 from "../assets/v1.mp4";

import TestimonialSection from "../Components/Sections/Testimonials";
import Brands from "../Components/Sections/Brands";
import Tools from "../Components/Sections/Tools";
import Blogs from "../Components/Cards/BlogCard";
import Faq from "../Components/Sections/FAQ";
import Contacts from "../Components/Sections/Contact";






const Youtube = () => {
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
    title: "Bajaj Finserv Gold Loans SEO Case Study: 400 Cr. + disbursals of gold loans",
    image: c1,
    descriptions: [
     "When Bajaj Finserv approached Techmagnate for their Gold Loans LoB, the NBFC was making an entry into a market saturated with established brands and heavy hitters. Their objective was to increase the overall volume of organic traffic and leads for their new offering. Competing against well-established players required a strong SEO strategy focused on visibility, authority, and search demand generation. Through a data-driven SEO campaign, Bajaj Finserv achieved significant growth in organic traffic, lead generation, and ultimately crossed 400 Cr.+ in gold loan disbursals."    ]
  },

  {
    title: "Bajaj Finserv Gold Loans SEO Case Study: 400 Cr. + disbursals of gold loans",
    image: c1,
    descriptions: [
    "When Bajaj Finserv approached Techmagnate for their Gold Loans LoB, the NBFC was making an entry into a market saturated with established brands and heavy hitters. Their objective was to increase the overall volume of organic traffic and leads for their new offering. The SEO strategy focused on improving rankings, expanding keyword visibility, and attracting high-intent search traffic. The campaign delivered measurable business growth, helping the brand establish a strong online presence and drive substantial loan disbursals through organic search."  ]
  },

  {
    title: "Bajaj Finserv Gold Loans SEO Case Study: 400 Cr. + disbursals of gold loans",
    image: c1,
    descriptions: [
    "Operating in a highly competitive financial sector, Bajaj Finserv needed a scalable SEO framework to support growth for its Gold Loans business. Our team implemented a comprehensive SEO roadmap covering technical optimisation, content expansion, authority building, and intent-driven keyword targeting. The result was exceptional growth in traffic, leads, and customer acquisition, contributing to more than 400 Cr.+ in gold loan disbursals." ]
  }
];


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
const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const handlePlay = () => {
  videoRef.current.play();
  setIsPlaying(true);
};
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
    icon: "♞",
    title: "Get More Leads",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: "⌁",
    title: "Make More Sales",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: "✎",
    title: "Build Brand Awareness",
    desc: "We help your brand gain strong recognition across digital platforms globally",
  },

  {
    icon: "🏆",
    title: "Upskill Your Team",
    desc: "Improve your team capabilities with advanced marketing strategies and guidance",
  },

];




  return (
    <>

     <Banner
      
      title="Google Display Ads Management Agency"
      description="We are  Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
      backgroundImage={eimage}
    />




      <section className="about-section">

        <div className="about-container">

          <h1>
Best Google Display Ads Management Agency
</h1>
        <div className="divider"></div>
        <p>
             Digicore Inc is the best PPC company in Delhi-NCR, that delivers performance-driven Pay-Per-Click campaigns customized to attain measurable business growth. Our PPC strategy includes strong groundwork—competitor analysis, audience assessment, and clarity of conversion objectives. Our expertly designed PPC campaigns are aimed at attracting high-intent users, that eventually turn clicks into leads and sales. With consistent performance throughout the past few years, our PPC specialists focus on the optimal use of data-driven Google and Meta ad campaigns for multiple industries ranging from Ecommerce, B2B, Travel, Healthcare, Hospitality, and Education. From keyword strategy and finalizing ad copy to optimization of landing page and conversion tracking,  Digicore Inc plays a vital role in helping businesses benefit from ROI-focused PPC advertising.

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
                PPC is strategic solution aimed at making for business growth consistent in digital marketing. At  Digicore Inc, a leading PPC agency in Delhi, we count on data-driven techniques to reach targeted audiences, optimally utilize every campaign element, and constantly optimize ad performance to ensure sustainable growth and higher ROI for client’s business.
            </p>
            <div className="orange-line"></div>

          </div>

         <div className="visibility-image">
<div className="visibility-video-wrapper">

  <video
    ref={videoRef}
    src={v1}
    className="visibility-video"
    controls={isPlaying}
  />

  {!isPlaying && (
    <button
      className="play-btn"
      onClick={handlePlay}
    >
      ▶
    </button>
  )}

</div>
</div>

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
        
                    <img
                      src={seoRimg}
                      alt="SEO Performance"
                    />
        
                  </div>
        
                </div>
        
              </section>



      </section>



            <section className="seo-agency-section">
  <div className="seo-container">

    <div className="seo-heading">
      <div className="seo-line"></div>

      <h2>
        Why Do I Need Google Shopping Ads Management Services?
</h2>

<p>
It is quite tough for businesses to generate quality leads at present due to the increased competition. PPC is one of the efficient ways to target potential customers, only if the campaign has been executed in a strategic way. Keeping in mind the increased competition, constantly upgrading algorithms, higher bid costs,  Digicore Inc, the top PPC agency in Delhi NCR employs well-planned strategy for ongoing campaign optimization. Besides, we ensure the data-driven insights, expertise in generating quality leads, driving sales, and improving the brand awareness through campaigns are aligned according to business goals of clients.    </p>

    </div>



<section className="discover-services">

        <div className="discover-container">

          <div className="divider"></div>

          <h2>
            Google Display Ad Management Services
          </h2>

          <p>
At  Digicore Inc, apart from offering just PPC services—we intend to become a trusted digital growth partner for business growth. After gaining prominence in the digital marketing segment, we have consistently blended AI-powered PPC strategies and data-driven solutions and connected them with the target audience.</p>
 </div>

      </section>
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
  </div>
</section>


  
      <section className="why-choose-sec"  style={{
          backgroundImage: `url(${bgIcon})`}}>

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


        <section className="impact-sec">
      
              <div className="impact-container">
      
              
                <div className="impact-image">
      
                  <div className="impact-circle"></div>
      
                  <img
                    src={impact}
                    alt="Impact"
                  />
      
                </div>
      
          
                <div className="timeline-section">
      
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
<div className="workindustry-line"></div>
  <div className="workindustry-heading">
    <h2>Industry we work with
</h2>
    
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













<section className="why-business-section">

  <div className="why-business-container">

  
    <div className="why-business-heading">

      <div className="divider"></div>

      <h2>
Why Choose  Digicore Inc as YOUR
PPC AGENCY IN DELHI      </h2>

      <p>
 Digicore Inc is a leading PPC company serving businesses across Delhi NCR. We help brands generate qualified leads and conversions through carefully planned, data-driven paid advertising strategies. We don’t believe in running ads randomly or chasing short term goals. Every PPC campaign is built around business goals, audience intent, and measurable outcomes. From keyword selection to bid optimisation and conversion tracking, our approach is structured, transparent, and performance-led. Our PPC strategies are designed to maximise returns, manage ad spend, and deliver consistent results across platforms like Google Ads and social media advertising. Here’s why businesses trust  Digicore Inc for PPC management:  </p>
    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔  We design future-ready strategies to ensure long-term visibility and relevance.
          </li>

          <li>
            ✔  All our strategies are curated by our highly skilled and experienced AI SEO experts.
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

 <div>

  <Faq />

 </div>

 <div>
  <Contacts />
 </div>



    </>
  )
}

export default Youtube
