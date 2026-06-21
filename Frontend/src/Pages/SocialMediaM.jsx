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
 

const SocialMediaM  = () => {

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
    title: "The Moto Men Car Detailing Meta Ads Case Study: From 40% to 100% Location-Relevant Leads",
    image: seocase,
    descriptions: [
   "When The Moto Men approached us for Meta Ads, the challenge wasn’t lead volume – it was lead relevance. Many enquiries were coming from outside serviceable locations, impacting conversions and efficiency. The objective was to improve lead quality without increasing budgets or volumes. By implementing a location-first Meta Ads strategy and refining targeting and creatives, the campaigns began delivering only location-relevant, high-intent enquiries. As a result, lead quality improved significantly, conversions increased, and advertising spend became far more efficient with reduced wastage."   ]
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
     "My Plate Manage partnered with us to improve lead quality for Meta Ads campaigns after facing issues with high lead costs and low relevancy from earlier setups. While enquiries were coming in, most lacked intent and did not convert. We restructured the Meta Ads strategy with a quality-first approach, refining targeting, messaging, and lead filtering to attract genuinely interested users instead of accidental submissions. The campaign delivered stronger lead relevancy, improved conversion rates, and a more cost-effective acquisition process, helping the brand connect with the right audience consistently."    ]
  }
];
      const services = [
    
        {
          icon: seoIcon,
          title: "ESocial Media Advertising",
          description:
            "ODigicore Inc. empowers robust data-driven social media marketing services aimed at improving brand’s visibility in national search results. Our best SMM practices attract high-quality traffic and address conversion goals.",
        },
    
        {
          icon: socialIcon,
          title: "Instagram Marketing Services",
          description:
            "With AI-powered keyword research, insights and other technical social media marketing strategies, we drive real-time engagement for Instagram.",
        },
    
        {
          icon: ppcIcon,
          title: "Meta Marketing Services",
          description:
            "Keeping in mind, the metrics of Facebook, trends, analytics, and the latest social media marketing strategies, we recommend the result-driven solution to clients.",
        },
    
        {
          icon: webIcon,
          title: "LinkedIn Marketing Services",
          description:
            "From creating LinkedIn ad campaigns, executing the ads, audience targeting and segmentation to achieving measurable goals, our best social media marketing services in Delhi make brand’s growth simplified.",
        },
    
        {
          icon: contentIcon,
          title: "Video Marketing",
          description:
            "Delivering high-quality technical SEO to improve site speed, mobile performance and site architecture to help brands stand out in search visibility.",
        },
    
        ,{
          icon: ormIcon,
          title: "Influencer Marketing",
          description:
            "Helping brands tell their story in a unique way and forge deeper connections with audiences through our high-quality content marketing services.",
        }  
        ,{
          icon: ormIcon,
          title: "E-commerce Meta Ads",
          description:
            "Whether you want to promote your e-commerce business, boost sales or uncover the top strategies to attract target audience to your online store, our e-commerce social media marketing services will deliver a customized solution",
        }  
        ,{
          icon: ormIcon,
          title: "Social Listening Services",
          description:
            "Manage your brand’s reputation, evaluate the reviews of users regarding your business, and know how to implement the reputation management plan with our SMM experts. Based on the assessment, we offer you the customized solution.",
        }  
        ,{
          icon: ormIcon,
          title: "CPerformance Tracking & Analytics",
          description:
            "Our best social media marketing services are focused on telling brand’s story and connecting the brand with the wider audience through performance tracking & analytics",
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
    title: "Improve Brand Awareness",
    desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
  },

  {
    icon: Icon2 ,
    title: "Drive Website Traffic",
    desc: "We help you convert maximum possible leads into sales and grow your business faster",
  },

  {
    icon: Icon3 ,
    title: "Generate Leads",
    desc: "We help your brand gain strong recognition across digital platforms globally",
  },

  {
    icon: Icon4,
    title: "Increase Measurable ROI",
    desc: "Improve your team capabilities with advanced marketing strategies and guidance",
  },

];

const faqData = [
  {
    question: "Does social media marketing work for all businesses?",
    answer:
      "Social media marketing is beneficial for all-sized businesses, but results are variable based on goals, target audience, nature of business, and constant strategy execution.",
  },
  {
    question:
      "Does social media marketing work for Delhi-based businesses?",
    answer:
      "Yes! But, it depends on the audience targeting, content approach, industry, business goals, and the type of industry.",
  },
  {
    question:
      "Can social media help me get local leads in Delhi?",
    answer:
      "Yes, local leads based in Delhi can be generated through social media through location-specific content, local engagement with nearby customers and targeted ads.",
  },
  {
    question:
      "Which platforms work best for Delhi businesses?",
    answer:
      "Instagram, Google Business Profile, Facebook, and WhatsApp are ideal for Delhi-based businesses for improving local visibility and lead generation.",
  },
  {
    question:
      "Why do I need social media marketing for my business?",
    answer:
      "Customer engagement and brand visibility increase while building trust and generating quality leads in a cost-effective manner through social media marketing. ROI also increases through professional SMM services.",
  },
  {
    question:
      "How can social media marketing add value to my business?",
    answer:
      "The increased leads & conversion rate, improved credibility, brand awareness and attracting targeted customers are some of the benefits of social medial marketing that add value to your business.",
  },
  {
    question:
      "What are the real benefits of social media marketing?",
    answer:
      "From strategic planning, content creation, performance assessment to optimization of campaigns, the social media marketing agency offers customized services to achieve clients’ business goals.",
    },
    {
    question:
      "How does a social media marketing agency actually work?",
    answer:
      "With our customized social media marketing services, we help businesses in reaching targeted audiences, drive website traffic, strengthen brand credibility and boost sales effectively.",
  }  
];


 
  return (
    <>

     <Banner
      
      title="Social Media Marketing Agency in Delhi for Brands That Want Results"
      description="Digicore Inc., the best Social Media Marketing agency in Delhi focuses on the latest trends of engaging the audience on various platforms. We improve the digital presence of your brand through our data-driven social media marketing services."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
       backgroundImage={eimage}
    />




      <section className="about-section">
 <div className="divider"></div>
        <div className="about-container">

          <h1>
Best Social Media Marketing Company in Delhi
          </h1>

       

          <p>
Being the best social media marketing agency based in Delhi known for our customized strategies, we are preferred by all-sized businesses and startups. To get our client’s brand consistently succeed in the social media segment, we prioritize social listening, response management, and social media marketing. Among our chief objectives, we maximize revenue by identifying the strategies of sales conversion. Being the top social media marketing agency in Delhi, our seasoned professionals employ best practices to target the potential customers through two-way communication. At Digicore Inc., we blend expertise, updated knowledge and strategic execution to identify the type of content that works for the clients. From telling the brand story, providing business insights to creation of best content, our social media marketing services are aimed at driving quality leads.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
Improve your digital presence with Delhi’s most trusted SMM agency


            </h2>

            <p>
It is important to work on active and positive brand image to reach targeted audience from the 3 billion social media users. The scope of getting the content viral with the help of content shared among the contacts is always high on social media platforms, we address the best strategies customized according to the nature of business. With our exclusively planned social media marketing services, we ensure the industry-wise standards, platform specific techniques and trends to attract targeted audience.

            </p>

            <div className="orange-line" style={{marginBottom:"50px"}}></div>

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
            <span style={{ color: "#2E75B6"}}>
              %
              </span>
            </h5>

            <p>
              of Indian shoppers check online before making an actual purchase.
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count2}
              </span>
            <span style={{ color: "#2E75B6"}}>
              %
              </span>
            </h5>

            <p>
              of Indian shoppers now start their product searches on Instagram,
              YouTube, or Amazon.
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count3}
              </span>
             <span style={{ color: "#2E75B6"}}>
              %
              </span>
            </h5>

            <p>
              of Indian users trust Google results for brands that shine on
              social media platforms.
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count4}
              </span>
             <span style={{ color: "#2E75B6"}}>
              %
              </span>
            </h5>

            <p>
              of young users turn to AI-generated overviews instead of
              scrolling through traditional search results.
            </p>

          </div>

        </div>

      </section>

<div className="about-container">
<div className="divider"></div>
          <h1>
          OUR SOCIAL MEDIA WORK
          </h1>
<p>We are one of the best social media marketing agencies in Delhi, assisting small businesses, medium enterprises, and big brands to flourish in the digital marketing space. We specialize in social media management, social listening and response management, Google advertisements, and a variety of other services.</p>
          

           <section className="video-section">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/RugY9uuIJhY?si=Fo5RhkPp1OCzm0jH" 
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

      <h2>
Why Do I Need an social Media Marketing Agency in Delhi?</h2>
<p>Over 60% of active users of social media platforms who rely on business information prefer Instagram, Facebook, YouTube, X and WhatsApp. Apart from just posting the content on the respective platform, it is essential to create viral, engaging and trending posts. From reels, stories, and other content that help social media users in accessing the information on the subject of their choice has to be prioritized. At Digicore Inc., we use creative and business-oriented social media marketing strategy to generate leads, improve brand’s visibility and drive business growth. Our top social media marketing services are business-oriented and data-driven to attract high-quality traffic. We also focus on converting the leads through result-driven SMM practices.</p>
    </div>
 <div className="seo-content">

      <div className="seo-left">

        <h3>The Problem</h3>

        <p>
At present, most of the businesses rely on in-house social media plans and post content without strategic implementation. This may show the business profile active on the respective social media platform, but, may not attract audience or deliver quality leads. Besides, the engagement rate is also low due to inconsistent content strategy. This is where social media marketing becomes tough due to the constant algorithm changes, increasing ad cost, industry competition, and other factors.
        </p>

        <h3>The Solution</h3>

        <p>
It is advisable to hire the top social media marketing professionals in Delhi who will apply expertise, creativity, and offer customized solution. At Digicore Inc., the top Social Media Marketing Agency in Delhi, we focus on the goal-specific, creative content, and engaging strategy according to the daily budget of the client. Besides, our A/B testing improves the visibility of brand, further attracting target audience on various social media platforms.
        </p>

      </div>

      <div className="seo-right">

        <p>
The prevalence of AI has impacted the user behaviour of users. It is not necessary that a social media marketing plan that was successful last year will perform the same way. However, when you count on Digicore Inc. to customize SMM plan, our social media marketing experts use AI tools and follow latest trends to optimize your campaign. Backed by data and insights, we address business growth factors to improve visibility of your brand through organic and paid social media marketing services.</p>

        

      </div>

    </div>
   

  </div>
</section>


 <section className="discover-services">

  <div className="discover-container">

    <div className="divider"></div>

    <h2>
Our Social Media Marketing <br />Services in Delhi
    </h2>

    <p>
At Digicore Inc., we offer comprehensive SMM services keeping in mind the trends, changing dynamics of social media and business goals of clients. We harness the power of AI and also focus on the modern approach to promote business through interactive and relevant content posted strategically.
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

          <h1 style={{fontSize:"28px"}}>
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
    <h2>Industry we work with</h2>
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
Digicore Inc. is the top social media marketing agency in Delhi that helps all-sized business in improving their brand awareness, driving website traffic & generating leads and sales. Besides, a loyal community of users can be engaged by sharing the strategically planned content on social media platforms. Our seasoned social media marketing professionals ensure cost-effective strategies to attract potential customers through viral content. Our customized social media marketing services ensure improved brand visibility, improve customer engagement and generate measurable ROI.
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
SOCIAL MEDIA MARKETING AGENCY IN DELHI
      </h2>

      <p>
Digicore Inc. is a trusted social media marketing agency that addresses the long-term goals of all-sized businesses in Delhi NCR. We provide cost-effective and well-tailored SMM strategies based on the social media trends, updates and requirements. We address the social media marketing goals comprehensively for platforms including Instagram, LinkedIn, X, Twitter and WhatsApp through AI-powered methodology. Our proven strategies and expertise make us the reputable social media marketing agency in Delhi. The other reasons that make our brand reliable for social media maketing include:</p>

    </div>

  
    <div className="why-business-content">

  
      <div className="why-left">

        <ul>

          <li>
            ✔ We have a team of experienced SMM experts to tailor social media marketing strategies and solutions.
          </li>

          <li>
            ✔ With our growth-specific mindset, we target measurable results for all-sized business through customized SMM services.
          </li>

          <li>
            ✔ Our transparent and clear reporting system keeps clients updated about the project success
          </li>

          <li>
            ✔ Digicore Inc. offers result-oriented and customized social media marketing services to achieve effortless business growth
          </li>

          <li>
            ✔ We achieve all our SMM targets efficiently through growth-driven and future-ready mindset
          </li>
          <li>
            ✔  We serve multiple industries and address their SMM goals with our business excellence and expertise.
          </li>
          <li>
            ✔ Proven experience and expertise across multiple industries
          </li>
          <li>
            ✔ We focus on helping brands in achieving improved visibility, brand engagement, and improved ROI
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
         <h2>SEO AGENCY DELHI FAQS</h2>
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

export default SocialMediaM
