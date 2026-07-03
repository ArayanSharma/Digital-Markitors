import React, { useEffect, useState, useRef } from "react";


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
import Testimonial from "../Components/Sections/Testimonials";
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
import eimage from "../assets/BannerImg/eduction2.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";


const Education = () => {
  const { content: c } = usePageContent("Education");
  const hero = c?.hero;
  const about = c?.about;
  const visibility = c?.visibility;
  const performance = c?.performance;
  const discover = c?.discover;
  const ctaStrip = c?.ctaStrip;
  const impactSection = c?.impact;
  const industriesSection = c?.industriesSection;
  const videoSection = c?.videoSection;
  const dominate = c?.dominate;
  const whyChoose = c?.whyChoose;
  const faq = c?.faq;
  const seoAgencySection = c?.seoAgencySection;

  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) =>
      prev === displayCaseStudies.length - 1 ? 0 : prev + 1
    );
  };

  const prevCase = () => {
    setCurrentCase((prev) =>
      prev === 0 ? displayCaseStudies.length - 1 : prev - 1
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

  const displayCaseStudies = c?.caseStudies?.length
    ? c.caseStudies.map((cs) => ({
      ...cs,
      image: resolveImage(cs.image),
      descriptions: Array.isArray(cs.descriptions)
        ? cs.descriptions
        : cs.descriptions
          ? [cs.descriptions]
          : [],
    }))
    : caseStudies;

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

    , {
      icon: ormIcon,
      title: "GEO SEO",
      description:
        "Achieve maximum visibility in specific geographic locations with our tailored GEO SEO that intelligently combines advanced local and global SEO strategies.",
    }
    , {
      icon: ormIcon,
      title: "AEO SEO",
      description:
        "We can optimize your content for answer engines and AI-driven search results and help you stay ahead in the evolving digital world.",
    }
    , {
      icon: ormIcon,
      title: "TECHNICAL SEO",
      description:
        "Delivering high-quality technical SEO to improve site speed, mobile performance and site architecture to help brands stand out in search visibility.",
    }
    , {
      icon: ormIcon,
      title: "Content Marketing Services",
      description:
        "Helping brands tell their story in a unique way and forge deeper connections with audiences through our high-quality content marketing services.",
    }

  ];

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

  const displayIndustries = industriesSection?.items?.length
    ? industriesSection.items.map((i) => ({ ...i, image: resolveImage(i.image) }))
    : industries;

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

  const displayDominateCards = dominate?.cards?.length
    ? dominate.cards.map((card) => ({ ...card, icon: resolveImage(card.icon) }))
    : helpCards;

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
    , {
      question:
        "Can you share real client case studies and past SEO results?",
      answer:
        "Yes, we can! Aside from that, you can also visit the SEO case studies section in our website to learn more about our existing and past clients’ experience with us.",
    }

    , {
      question:
        "Apart from SEO, what other digital marketing services do you provide?",
      answer:
        "We provide comprehensive digital marketing services, including SEO, SMM, PPC, Content Marketing, Performance Marketing, Website Design & Development, Online Reputation Marketing, Conversion Rate Optimisation, AEO+AIO+GEO, Display Advertising Services, Social Media Listing, Response Marketing and many more.",
    }

    , {
      question:
        "My website has a high spam score. How will you reduce and fix it?",
      answer:
        "Don’t worry about that. We will fix it! We will first conduct a thorough audit to identify the issues causing it, such as low-quality backlinks, thin content or technical SEO problems. After identifying the real cause, we will implement a comprehensive cleanup SEO strategy to eliminate the issue and restore your website’s credibility and improve its search engine trustworthiness.",
    }

    , {
      question:
        "I have been working with another SEO agency for over a year but my rankings haven’t improved. Can you fix this?",
      answer:
        "Well, we have no idea what strategies your previous SEO partner was using. But worry not! We will thoroughly audit your site and know what exactly is the reason for your site’s low ranking. After that, we would be in better position to tell you our exact course of action. But rest assured, Digicore Inc. is the best SEO company in Delhi. Our team of experts will help you achieve your digital marketing goals, including first page ranking & high-intent leads effortlessly. We will use the most advanced tools and technology to elevate your site’s ranking and drive measurable growth.",
    }

    , {
      question:
        "How much monthly traffic and how many leads can I realistically expect from SEO?",
      answer:
        "The monthly traffic and leads you can expect from SEO depend on various factors like your industry, competition, current website authority and the scope of SEO efforts. But you don’t need to worry. Our team of experts will craft specialized digital marketing strategies tailored to your brand to ensure increased targeted traffic and high-quality leads within 3-6 months.",
    }

    , {
      question:
        "If I stop SEO in the future, will my rankings remain stable?",
      answer:
        "Stopping in today’s scenario simply translates to falling behind fast. The moment you will stop implementing digital marketing strategies, your ranking will drop, let alone remaining stable. Digital marketing isn’t a one-time fix; it’s a continuous process of consistent effort and growth. With technological advancements and SEO evolution, your brand also evolves. If you will stop after a time being, you will lead to nowhere. Hence, you are advised to actively implement digital marketing effort to reap consistent outcomes. Partner with Digicore Inc. – the most reliable AI First SEO agency in Delhi to have stable ranking across platforms!",
    }

    , {
      question:
        "For how long will I need to continue SEO for my website to maintain results?",
      answer:
        "As said earlier, SEO is not a one-time fix; it is a continuous process. You need to keep implementing SEO strategies in order to maintain consisting results and stay ahead across online and social media platforms. With the best AI-first digital marketing company by your side you can ensure consistent online growth and robust outcomes!",
    }

  ];

  const displayFaq = faq?.items?.length ? faq.items : faqData;
  const displayPoints = whyChoose?.points?.length
    ? whyChoose.points
    : [
      { text: "Provide your business with a dedicated account manager and team" },
      { text: "Guidance for the betterment of startup!" },
      { text: "Deliver transparent bi-monthly reports to your team" },
      { text: "Build result-oriented customized strategies" },
      { text: "Save time and money by availing our services" },
      { text: "Get a comprehensive solution for 360° digital marketing strategy" },
      { text: "Expert guidance for strengthening brand presence of a startup!" },
      { text: "Increase search friendliness of your business with SEO services!" },
    ];


  return (
    <>

      <Banner

        title={hero?.title || "EDUCATION SEO AGENCY FOR Universities, Colleges & Educational Institutes"}
        description={hero?.description || "To succeed in business, you first need to succeed in search results. Our digital marketing services connect you with your customers’ journey from end to end – from discovery to retention."}
        primaryBtnText={hero?.primaryBtnText || "Speak to an SEO Expert"}
        secondaryBtnText={hero?.secondaryBtnText || "Our Services"}

        backgroundImage={hero?.backgroundImage ? resolveImage(hero.backgroundImage) : eimage}
      />




      <section className="about-section">
        <div className="divider"></div>
        <div className="about-container">

          <h1>
            {about?.heading || "Best Healthcare SEO Company"}
          </h1>



          <p>
            {about?.description || "Digicore Inc. is a 360 digital marketing agency in Delhi that is dedicated to helping brands develop, engage, and lead, while also supporting the success of your business. Over the years, we've been at the forefront of driving digital transformation through creativity, strategy, and technology to meet our clients' impactful requirements. We offer comprehensive services that include SEO, SMM, PPC, ORM, Social Listening, Content Strategy, Website Designing, Web Development, Influencer Marketing, and more to help brands create, use technology, and make data-based decisions to achieve an opportunity to thrive. As digital behaviour continues to evolve, the way users search and discover brands has also transformed, and staying visible everywhere has become essential."}
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
              {visibility?.heading || "Lead Every Search with Delhi’s Most Trusted SEO Agency"}


            </h2>

            <p>
              {visibility?.description || (<>AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased. Today, ranking should not be only about Google; it should be about visibility wherever audiences are looking—like Google, Instagram, YouTube, LinkedIn, marketplaces, or even AI-generated results.
                <br /><br />
                From Google, Instagram and YouTube to markeplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere.</>)}

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
              {seoAgencySection?.heading || "Why Do I Need an Healthcare SEO Agency"}
            </h2>
            <p>
              {seoAgencySection?.description || "Digicore Inc. is a 360 digital marketing agency in Delhi that is dedicated to helping brands develop, engage, and lead, while also supporting the success of your business. Over the years, we've been at the forefront of driving digital transformation through creativity, strategy, and technology to meet our clients' impactful requirements."}
            </p>
          </div>
          <div className="seo-content">

            <div className="seo-left">

              <h3>{seoAgencySection?.problemTitle || "The Problem"}</h3>

              <p>
                {seoAgencySection?.problemText || "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased."}
              </p>

              <h3>{seoAgencySection?.solutionTitle || "The Solution"}</h3>

              <p>
                {seoAgencySection?.solutionText || "From Google, Instagram and YouTube to markeplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere."}
              </p>

            </div>

            <div className="seo-right">

              <p>
                {seoAgencySection?.rightParagraph1 || "AI, ever-changing algorithms and shifting consumer buying behaviours are all redefining digital marketing in this era. To stay ahead, brands must adapt quickly, think strategically and remain visible across every channel. That's when Digicore Inc., the trusted SEO company in Delhi steps in."}
              </p>
              <br />
              <p>
                {seoAgencySection?.rightParagraph2 || "A forward-thinking SEO agency can help you keep up with the change and cut through the noise. Whether you’re a startup looking to establish presence or an established brand aiming to scale, we can help you with unmatchable SEO strategies so that you can grow with confidence. Every strategy we deploy is backed by insights, analytics, and performance data. We have experience across multiple industries and we utilize cutting-edge tools and technology to deliver sustainable growth. Turn every click, search and interaction into real growth with Digicore Inc.!"}
              </p>

            </div>

          </div>


        </div>
      </section>





      <section className="why-choose-sec" style={{
        backgroundImage: `url(${ctaStrip?.backgroundImage ? resolveImage(ctaStrip.backgroundImage) : bgIcon})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

        <div className="div-content">

          <h1 style={{ fontSize: "28px" }}>
            {ctaStrip?.heading || "Scale Your Online Store with High-Performance E-commerce SEO."}
          </h1>

          <div className="choose-btns">

            <a href={ctaStrip?.whatsappLink || "#"} className="light-btn">

              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
              />

              {ctaStrip?.whatsappText || "+91 98188 88064"}

            </a>

            <a href={ctaStrip?.secondaryBtnLink || "#"} className="light-btn">
              {ctaStrip?.secondaryBtnText || "REQUEST A CALLBACK"}
            </a>

          </div>

        </div>

      </section>


      <section className="impact-sec" style={{ backgroundColor: "#fff" }}>

        <div className="impact-container">


          <div className="impact-image">

            <div className="impact-circle"></div>

            <img
              src={impactSection?.image ? resolveImage(impactSection.image) : impact}
              alt="Impact"
            />

          </div>


          <div className="timeline-section" style={{ backgroundColor: "#fff" }}>

            <div className="timeline">

              {(impactSection?.timeline?.length ? impactSection.timeline : [
                {
                  title: "Marketing companies",
                  description: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co",
                },
                {
                  title: "SEO and PPC",
                  description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
                },
                {
                  title: "Google Premier Partner",
                  description: "We are a Google Premier Partner since 2017. This means we’re are one of Top 50 PPC Companies in India from 4000 odd Digital Marketing agencies that have partnered with Google.",
                },
                {
                  title: "Search engine optimization",
                  description: "Our SEO professionals have decades of experience providing results to clients and sound knowledge of the latest search engine optimization trends.",
                },
              ]).map((item, index) => (
                <div className={`timeline-item${index === 0 ? " active" : ""}`} key={item.id || index}>

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <h3>{item.title}</h3>

                    <p>
                      {item.description}
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
          {videoSection?.title || "SEO is not just about ranking on Google — it’s about connecting your brand across every platform where your customers search."}
        </h1>



        <section className="video-section">
          <div className="video-container">
            <iframe
              src={videoSection?.videoUrl || "https://www.youtube.com/embed/RugY9uuIJhY"}
              title={videoSection?.title || " Digicore Inc Video"}
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
            {dominate?.description || "Since we Live ‘Digital’, Think ‘Digital’, Breathe ‘Digital’, and Understand ‘Digital’, each of our digital marketing solution is designed around a few yet important key elements or we better call them ‘building blocks’ for the digital business plan of our clients. We evaluate things and customize our solutions keeping your business goals, the current stage of the digital presence, and competitive landscape in mind. With our creative and result-oriented solutions, we ensure that you will:"}
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
              {whyChoose?.heading || "Why business choose Digicore Inc."}
            </h2>

            <p>
              {whyChoose?.description || "Digicore Inc., the leading digital marketing agency in Delhi extends assistance and 360 degree digital marketing strategies to all sized businesses. We have mastered industry wise excellence to become the stellar company committed towards brand building. We have adopted effective, innovative and relevant approach implement digital marketing plan. With problem solving and result-driven methods, we help clients attain their goal. Here are some of the key features of our services which make us the trusted digital marketing company in Delhi, India."}</p>

          </div>


          <div className="why-business-content">


            <div className="why-left">

              <ul>

                {displayPoints.map((point, index) => (
                  <li key={point.id || index}>✔ {point.text}</li>
                ))}

              </ul>

            </div>


            <div className="why-right">

              <img
                src={whyChoose?.image ? resolveImage(whyChoose.image) : graphImg}
                alt="Graph"
              />

            </div>

          </div>

        </div>

      </section>





      <section className="faq-section">
        <div className="faq-header">
          <h2>{faq?.heading || "PPC AGENCY DELHI FAQS"}</h2>
          <div className="faq-line"></div>
        </div>

        <div className="faq-container">
          {displayFaq.map((item, index) => (
            <div
              key={item.id || index}
              className={`faq-item ${activeIndex === index ? "active" : ""
                }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

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
                <p>{item.answer}</p>
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

export default Education
