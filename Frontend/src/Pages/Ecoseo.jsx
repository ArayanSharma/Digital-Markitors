import React, { useEffect, useState, useRef } from "react";


import Banner from "../Components/Cards/Seohero";

import ServiceCard from "../Components/Cards/ServiceCard";
import "../Styles/faq.css";

import impact from "../assets/impact.webp";

import seoRimg from "../assets/real-seo-result.webp";
import heroImg from "../assets/a.png";
import graphImg from "../assets/graph-l.webp";
import Industry from "../Components/Sections/Industry";
import Casestudy from "../Components/Sections/Casestudy";

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
import eimage from "../assets/BannerImg/Ecommerce.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const Ecoseo = () => {
  const { content: c } = usePageContent("Eco-SEO");
  const banner = c?.banner;
  const about = c?.about;
  const visibility = c?.visibility;
  const performance = c?.performance;
  const seoAgency = c?.seoAgency;
  const discover = c?.discover;
  const whyChoose = c?.whyChoose;
  const impactData = c?.impact;
  const video = c?.video;
  const dominate = c?.dominate;
  const whyBusiness = c?.whyBusiness;
  const faqSection = c?.faqSection;

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
        "When DHI International partnered with us, the objective was clear – strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved strong growth in organic traffic, keyword rankings, and search visibility – transforming SEO into a reliable lead-generation channel."]
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
        "When we started working on Moti Mahal Delux, none of the targeted franchise-related keywords were visible on Google. There were no dedicated SEO pages, limited content depth, and technical and on-page gaps restricting search visibility. Our team suggested new SEO-focused pages, created optimised content, fixed technical and on-page issues, and executed high-quality link building to strengthen authority. As a result, the website achieved 100% keyword visibility, with all targeted keywords now ranking on the first page of Google – most within the top 5 positions."]
    }
  ];
  const services = [

    {
      icon: seoIcon,
      title: "Ecommerce Strategy",
      description:
        "After a comprehensive SEO audit, we recommend the tailored Ecommerce SEO services to our clients. The process involves product optimization, content optimization, and modern practices to improve website’s visibility.",
    },

    {
      icon: socialIcon,
      title: "Ecommerce SEO",
      description:
        "The process involves product optimization, link building, on-page optimization, and customized white-hat SEO strategies to improve the organic traffic of the website.",
    },

    {
      icon: ppcIcon,
      title: "PShopping Ads",
      description:
        "With our well-optimized shopping ads, we ensure that the product visibility gets increased and high-intent buyers are attracted to your marketplace. We focus on improving organic traffic, boosted online sales and improved click-through rates.",
    },

    {
      icon: webIcon,
      title: "Meta Shopping Ads",
      description:
        "To improve the visibility of your products on Facebook and Instagram, our Meta Shopping ads target high-intent audience while increasing the product discovery through data-driven campaigns.",
    },

    {
      icon: contentIcon,
      title: "Content Optimisation",
      description:
        "We optimize categories, metadata, and product pages by using the high-search volume keywords in content optimisation. These services ensure improved user experience, better conversion & organic traffic and increased brand visibility.",
    },

    {
      icon: ormIcon,
      title: "Technical SEO",
      description:
        "The comprehensive technical SEO audit helps us in understanding the scope of improvement in the website related to page speed, site structure, mobile friendliness and indexing. Based on the observations, we recommend the tailored SEO strategies to improve the visibility of website and provide seamless shopping experience to users.",
    }];

  const displayServices = c?.services?.length
    ? c.services.map((s) => ({ ...s, icon: resolveImage(s.icon) }))
    : services;


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
      icon: Icon2,
      title: "Make More Sales",
      desc: "We help you convert maximum possible leads into sales and grow your business faster",
    },

    {
      icon: Icon3,
      title: "Build Brand Awareness",
      desc: "We help your brand gain strong recognition across digital platforms globally",
    },

    {
      icon: Icon4,
      title: "Upskill Your Team",
      desc: "Improve your team capabilities with advanced marketing strategies and guidance",
    },

  ];

  const displayDominateCards = c?.dominate?.cards?.length
    ? c.dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
    : helpCards;

  const faqData = [
    {
      question: "What is Ecommerce SEO and why is it necessary for businesses?",
      answer:
        "The visibility of online store increases and organic traffic increases while improving the user experience when the Ecommerce SEO services are availed. The brand credibility, sales and conversion rate of business also improve through the consistent optimization.",
    },
    {
      question:
        "How soon can I expect results from Ecommerce SEO?",
      answer:
        "The timeline of SEO results is variable depending on the distinct business goals, scope of optimisation and long-term growth of Ecommerce businesses.",
    },
    {
      question:
        "What are the services offered by the best Ecommerce SEO agency in Delhi?",
      answer:
        "The best Ecommerce SEO agency in Delhi, Digicore Inc. provides on-page optimisation, product page optimisation, technical SEO audit, and link building services for improved visibility and consistent business growth.",
    },
    {
      question:
        "How does Digicore Inc. ensure growth with Ecommerce SEO?",
      answer:
        "At Digicore Inc., our seasoned professionals provide tailored Ecommerce SEO strategies to improve product visibility. We consistently track performance metrics, and boost organic traffic to increase conversion rate and revenue growth.",
    }
  ];

  const displayFaq = c?.faqSection?.faq?.length ? c.faqSection.faq : faqData;


  return (
    <>

      <Banner

        title={banner?.title || "Best Ecommerce SEO Agency to convert traffic, drive revenue and build brand credibility"}
        description={banner?.description || "Digitization of business is rapidly evolving to improve the user experience. No matter which stream of business you are in, reaching your target audience efficiently is crucial. This is where Digicore Inc., the best Ecommerce SEO company helps your company in top search results through tailored services."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />




      <section className="about-section">
        <div className="divider"></div>
        <div className="about-container">

          <h1>
            {about?.heading || "Best ECOMMERCE SEO Agency"}
          </h1>



          <p>
            {about?.body || "In the digital landscape, it is essential for business to evolve online and adapt to the modern changes to strengthen business visibility. At Digicore Inc., we are a team of highly qualified Ecommerce SEO professionals that attracts potential customers further driving conversion, revenue and improved brand presence. With our result driven approach, we ensure your product or services appear online every time the user searches for a reliable brand. Being the trusted Ecommerce SEO agency with more than a decade’s experience and a consistent track record to deliver tailored SEO services, we continue to incorporate modern tools. From the optimal use of AI, and voice search optimization to image based searches, we cater to diverse ecommerce SEO requirements."}
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
              {visibility?.heading || "Build a great digital experience with Best Ecommerce SEO agency"}


            </h2>

            <p>
              {visibility?.body || (<>With the increase in the online shopping preferences, businesses need to keep their website updated and SEO-friendly. Besides, to address the efficient, easily navigable and productive browsing requirements of users, the new-age ecommerce SEO services need to be availed.
                <br /><br />
                Digicore Inc., the top Ecommerce SEO agency based in Delhi instils the power of AI in the SEO practices. The comprehensive strategies aimed at addressing smart search suggestions, improving engagement and providing real-time support make our ecommerce SEO services reliable.</>)}


            </p>

            <div className="orange-line" style={{ marginBottom: "50px" }}></div>

          </div>

          <div className="visibility-image">
            <img src={visibility?.image ? resolveImage(visibility.image) : graphImg} alt="Graph" />
          </div>

        </div>

      </section>


      <section className="performance-section">
        <div className="performance-container">
          <div className="performance-left">
            <h2>{performance?.labelTrack || "TRACK"}</h2>
            <h2>{performance?.labelAnalyze || "ANALYZE"}</h2>
            <h2>{performance?.labelScale || "SCALE"}</h2>
            <h2>{performance?.labelRepeat || "REPEAT"}</h2>
          </div>

          <div className="performance-right">
            <img src={performance?.image ? resolveImage(performance.image) : seoRimg} alt="SEO Performance" />
          </div>
        </div>
      </section>



      <section className="seo-agency-section">
        <div className="seo-container">

          <div className="seo-heading">
            <div className="seo-line"></div>

            <h2>
              {seoAgency?.heading || "Why Do I Need an E-commerce SEO Agency For My Online Store"}</h2>
            <p>{seoAgency?.description || "Digicore Inc. is the best Ecommerce SEO company in Delhi that helps clients in adapting new trends and buyer behaviour through data-driven services. We help all sized businesses in improving online visibility, optimize the website according to the search intent and incorporate the modern tools in the customized Ecommerce SEO services."}</p>
          </div>
          <div className="seo-content">

            <div className="seo-left">

              <h3>{seoAgency?.problemTitle || "The Problem"}</h3>

              <p>
                {seoAgency?.problemText || "Website has poor online visibility, lesser product discoverability, and low organic traffic that totally affects user experience."}
              </p>

              <h3>{seoAgency?.solutionTitle || "The Solution"}</h3>

              <p>
                {seoAgency?.solutionText || "With the modern approach involving AI and the other advanced tools, Ecommerce SEO services address the visibility and product optimization. At Digicore Inc., we focus on improved engagement and brand building through 360-degree SEO methodology for ecommerce business."}
              </p>

            </div>

            <div className="seo-right">

              <p>
                {seoAgency?.rightParagraph || (<>We leverage the power of AI, visual search, smart search recommendations and optimize your Ecommerce business. At Digicore Inc., our professionals ensure the organic traffic, conversion and sales of your business increase consistently through the top Ecommerce SEO services. Considering the changing buyer preferences, we count on AI to innovate SEO tactics in Ecommerce.
                  <br /><br />
                  Be it the diverse and increased customer expectations, data overload or accessibility to various tools and platforms, our AI driven and future-ready methodology delivers the sustainable growth for Ecommerce businesses. Digicore Inc. believes in transforming the user’s journey while accessing the online marketplace with a variety of products through website optimization. From personalized product recommendations, AI chatbots & virtual assistants, smart site search, and inventory optimization to fraud detection, our best Ecommerce SEO services assure smooth user experience. </>)}</p>



            </div>

          </div>


        </div>
      </section>


      <section className="discover-services">

        <div className="discover-container">

          <div className="divider"></div>

          <h2>
            {discover?.heading || (<>AI Powered Ecommerce SEO <br />Services</>)}
          </h2>

          <p>
            {discover?.description || "Improve your brand visibility, product discoverability and boost sales through smart Ecommerce SEO services backed by AI and the modern tools. Partner with Digicore Inc. to optimally utilize the benefits of Artificial Intelligence, personalization and intelligent automation in Ecommerce. Optimize your Ecommerce business through the strategic implementation of AI-powered content creation and advanced SEO applications."}
          </p>

        </div>

        <div className="services-cards">

          <div className="services-grid">

            {displayServices.map((service, index) => (

              <div
                key={service.id || index}
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



      <section className="why-choose-sec" style={{
        backgroundImage: `url(${whyChoose?.backgroundImage ? resolveImage(whyChoose.backgroundImage) : bgIcon})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

        <div className="div-content">

          <h1 style={{ fontSize: "28px" }}>
            {whyChoose?.heading || "Scale Your Online Store with High-Performance E-commerce SEO."}
          </h1>

          <div className="choose-btns">

            <a href={whyChoose?.button1?.link || "#"} className="light-btn">

              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
              />

              {whyChoose?.button1?.text || "+91 98188 88064"}

            </a>

            <a href={whyChoose?.button2?.link || "#"} className="light-btn">
              {whyChoose?.button2?.text || "REQUEST A CALLBACK"}
            </a>

          </div>

        </div>

      </section>


      <section className="impact-sec" style={{ backgroundColor: "#fff" }}>

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

              {(impactData?.items?.length ? impactData.items : [
                {
                  title: "Marketing companies",
                  desc: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co",
                },
                {
                  title: "SEO and PPC",
                  desc: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
                },
                {
                  title: "Google Premier Partner",
                  desc: "We are a Google Premier Partner since 2017. This means we’re are one of Top 50 PPC Companies in India from 4000 odd Digital Marketing agencies that have partnered with Google.",
                },
                {
                  title: "Search engine optimization",
                  desc: "Our SEO professionals have decades of experience providing results to clients and sound knowledge of the latest search engine optimization trends.",
                },
              ]).map((item, index) => (
                <div className={`timeline-item${index === 0 ? " active" : ""}`} key={item.id || index}>

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <h3>{item.title}</h3>

                    <p>
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>



      <div className="about-container">
        <div className="divider"></div>
        <h1>
          {video?.title || "SEO is not just about ranking on Google — it’s about connecting your brand across every platform where your customers search."}
        </h1>



        <section className="video-section">
          <div className="video-container">
            <iframe
              src={video?.url || "https://www.youtube.com/embed/RugY9uuIJhY"}
              title=" Digicore Inc Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      <section className="dominate-section">
        <div className="dominate-heading">
          <h2>{dominate?.heading || "How We Grow Your E-commerce Sales & Revenue"}</h2>

          <div className="dominate-line"></div>

          <p>
            {dominate?.description || "At Digicore Inc., we ensure data-driven Ecommerce SEO services to increases sales and revenue of all-sized Ecommerce businesses. With an objective to improve visibility, enhance traffic quality, and boost conversion rate, we optimize product pages and categories while fixing the technical issues of the website. Our professionals utilize conversion based UX improvements to improve the user experience and help then find the right product. Connect with us to benefit from competitor analysis, performance tracking and scalable SEO strategies for consistent ecommerce revenue growth."}
          </p>
        </div>

        <div className="dominate-cards">
          {displayDominateCards.map((item, index) => (
            <div className="dominate-card" key={item.id || index}>

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
              {whyBusiness?.heading || "Why Business Choose Digicore Inc. for Ecommerce SEO services?"}
            </h2>

            <p>
              {whyBusiness?.description || "Digicore Inc. has an extensive industrial experience in Ecommerce SEO services with a consistent record of providing tailored services. With a comprehensive Ecommerce SEO audit, we ensure all the aspects of store optimization are properly aligned with the business goals of clients. From technical website analysis, link building, on-page optimisation and category & product optimisation to consistent performance tracking, our best Ecommerce SEO services address all the aspects. Experience the maximum transparency, client centric approach and choose affordable Ecommerce SEO packages by partnering with us!"}</p>

          </div>


          <div className="why-business-content">


            <div className="why-left">

              <ul>

                {(whyBusiness?.features?.length ? whyBusiness.features : [
                  { text: "We provide customized Ecommerce SEO strategies" },
                  { text: "keeping in mind the business goals and target audience of clients" },
                  { text: "We assure maximum transparency by informing clients about the status and measurable results." },
                  { text: "Our SEO professionals strictly adhere to the white hat SEO guidelines" },
                  { text: "We provide constant support and optimisation services for sustainable business growth" },
                  { text: "Fully-managed Ecommerce SEO services we offer are competitively priced according to diverse business requirements and budget" },
                  { text: "Result-driven Ecommerce SEO strategies with proven results and improved visibility are assured to clients" },
                  { text: "Save time and money by availing our professional Ecommerce SEO services" },
                  { text: "Strengthen your brand presence and improve mobile friendliness of your website" },
                ]).map((item, index) => (
                  <li key={item.id || index}>✔ {item.text}</li>
                ))}

              </ul>

            </div>


            <div className="why-right">

              <img
                src={whyBusiness?.image ? resolveImage(whyBusiness.image) : graphImg}
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
          <h2>{faqSection?.heading || "PPC AGENCY DELHI FAQS"}</h2>
          <div className="faq-line"></div>
        </div>

        <div className="faq-container">
          {displayFaq.map((faq, index) => (
            <div
              key={faq.id || index}
              className={`faq-item ${activeIndex === index ? "active" : ""
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
                className={`faq-answer ${activeIndex === index ? "show" : ""
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

export default Ecoseo
