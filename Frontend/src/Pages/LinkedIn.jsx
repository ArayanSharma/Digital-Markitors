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
 import eimage from "../assets/BannerImg/LinkedInAds.png";
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

 

const LinkedIn = () => {

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
          title: "LinkedIn Ad Campaign Management",
          description:
            "As a part of LinkedIn ad campaign management, planning, execution and optimization of targeted ads is focused on by our experts. We help businesses connect with the A-class decision maker, generate high-quality leads that attract measurable ROI and improve brand visibility through these services.",
        },
    
        {
          icon: socialIcon,
          title: "Audience Targeting & Segmentation",
          description:
            "In this phase of LinkedIn marketing services, professionals based on their industry are identified and segmented by their seniority, job role and interests. This is further beneficial in execution of campaign to reach the high-intent prospects through personalized messaging. The objective of these services is to drive higher engagement and better conversion.",
        },
    
        {
          icon: ppcIcon,
          title: "LinkedIn Copywriting",
          description:
            "With the help of LinkedIn copywriting, brand-specific posts, and engaging ad copies to boost visibility of business while connecting them with professionals. The idea behind these services is to strengthen audience connection, attract engagement, build trust and provide better conversion through thought-provoking and strategic messaging.",
        },
    
        {
          icon: webIcon,
          title: "Company Page Optimization",
          description:
            "Our experienced marketers improve your LinkedIn profile by optimization of visuals, key details and strategic messaging. All these steps are aligned with the improved discoverability of your profile, strengthening brand identity and attract the right audience. Experience the improved credibility and greater engagement with Digicore Inc..",
        },
    
        {
          icon: contentIcon,
          title: "LinkedIn Lead Generation",
          description:
            "With the help of LinkedIn lead generation services, we target B2B prospects by using compelling CTAs, optimized ads, forms and outreach to connect with top decision-makers. These services are beneficial in improving lead generation and boost sales of your business.",
        },
    
        {
          icon: ormIcon,
          title: "Analytics & Performance Reporting",
          description:
            "This segment of our LinkedIn marketing services monitors campaign results, tracks key metrics and shares detailed insights. As a result, marketing strategy, improved engagement and maximized ROI are achieved through informed and data-driven decisions.",
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
      
      title="LinkedIn Marketing Agency in India"
      description="At Digicore Inc., we provide comprehensively planned LinkedIn Marketing services to build brand awareness, drive website traffic and generate quality leads. Our seasoned professionals identify your target audience, and accordingly create LinkedIn campaigns and compelling posts to improve brand presence. We offer tailored LinkedIn marketing services all-sized businesses according to their long-term business goals."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
      backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
       LinkedIn Marketing Services in India
          </h1>

       

          <p>
           The experienced LinkedIn marketing specialists at Digicore Inc. build trust and attract quality leads for diverse businesses based on their preferences. With our LinkedIn story-telling approach, we believe in engaging the targeted audience through meaningful stories aligning them with brand’s voice. Besides, our experts strategize to create reliable connections, drive business growth and strengthen credibility through experience-driven and impactful LinkedIn content. Our proven marketing strategies, consistent market presence and data-driven LinkedIn marketing services in India enable us to offer sustainable as well as value-adding results to our clients.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
          Why is LinkedIn Marketing agency beneficial for business growth?
            </h2>

            <p>
            With the help of well-tailored LinkedIn marketing services, Digicore Inc. fuels business growth through professional connections, targeting decision-makers and strengthen brand authority. Our experienced marketers optimally utilize though-leadership content, data-driven campaigns, and LinkedIn’s precise targeting increase brand visibility. Besides, we also help businesses in generating qualified B2B leads and convert connections into ROI prospects through long-term trust.
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

      <h2>Why do I need LinkedIn marketing services?</h2>

      <p>
       LinkedIn marketing services help businesses connect with the celebrities, influencers, decision-makers and the other high-intent users through top B2B leads. At Digicore Inc., we enable our clients to optimally utilize LinkedIn’s ecosystem through profile optimization, data-driven campaigns and targeted content. We ensure that our LinkedIn marketing services reach right target audience at the right time while positioning businesses ahead of their competitors. Whether it is through consistent value-driven messaging or engaging potential prospects through creative posts, our seasoned professionals focus on lead-generation and building long-term connections. Invest in the tailored services of Digicore Inc., the best LinkedIn marketing agency in India and experience the business growth, improved visibility, and achieve sustainable results.
      </p>
    </div>

   

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
LinkedIn Marketing services
    </h2>

    <p>
Apart from being the social platform, LinkedIn is the resourceful network to connect with businesses that align with your future marketing goals. From connecting with the A-level decision makers to discussing business growth plans with founders, Digicore Inc. steps in with the top LinkedIn marketing services backed by real-time updates. With our tailored marketing strategies, we ensure campaigns are consistently monitored for lead generation and help businesses build brand authority. Our experts offer measurable LinkedIn marketing results and consistently improve strategies to address sustainable business growth objectives.
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
    Why choose Digicore Inc. as your <br />
LinkedIn Marketing agency in India?
      </h2>

      <p>
     Experience the power of results-driven and focused approach of LinkedIn marketing services by choosing Digicore Inc.. Our highly qualified and experienced professionals help you in reaching the right audience, generate quality B2B and build credibility. Besides, we create compelling and meaningful content while optimizing LinkedIn company profile aligned with business growth objectives. From managing ad campaigns to tracking the performance and optimizing the content, we have turned out to be the best LinkedIn marketing agency in India known for simple yet strategic methodology.  </p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ Our highly qualified and experienced professionals tailor and execute LinkedIn marketing campaigns
          </li>

          <li>
            ✔ With our growth-first mindset, we cater to the advanced LinkedIn marketing goals of all-sized businesses
          </li>

          <li>
            ✔  We present detailed and factual report while maintaining transparency in the marketing plan to help businesses stay ahead in the market
          </li>

          <li>
            ✔ Our result-driven and data-driven LinkedIn marketing strategies help them in maximizing ROI and boost sales
          </li>

          <li>
            ✔  All our strategies are future-ready and address the sustainable business growth of clients
          </li>

          <li>
            ✔  With more than a decade’s excellence, we incorporate modern tactics to achieve bespoke marketing objectives
          </li>

          <li>
            ✔ We identify and target the right audience, generate quality leads and build awareness to address long-term business goals of clients.
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

export default LinkedIn
