import React, { useEffect, useRef, useState } from "react";

import Blogs from "../Components/Cards/BlogCard";
import Contacts from "../Components/Sections/Contact";
import Testimonial from "../Components/Sections/Testimonials";

import Banner from "../Components/Cards/Seohero";

import "../Styles/Home.css";
import "../Styles/Brands.css";
import "../Styles/Tools.css";
import Industry from "../Components/Sections/Industry";
import Casestudy from "../Components/Sections/Casestudy";

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
 
import seoRimg from "../assets/real-seo-result.webp";

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
import "../Styles/faq.css";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "../Styles/BlogCard.css";
import "../Styles/TestimonialsSec.css";

const Home = () => {
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const [pageData, setPageData] = useState(null);

  const normalizeMediaUrl = (url) => {
    if (!url || typeof url !== "string") return url;
    let finalUrl = url;
    if (!/^https?:\/\//.test(finalUrl)) {
      if (finalUrl.startsWith("/")) finalUrl = `${API}${finalUrl}`;
      else if (finalUrl.startsWith("uploads/")) finalUrl = `${API}/${finalUrl}`;
      else if (finalUrl.startsWith("./uploads/")) finalUrl = `${API}/${finalUrl.slice(2)}`;
      else if (finalUrl.startsWith("../uploads/")) finalUrl = `${API}/${finalUrl.slice(3)}`;
    }
    try {
      return encodeURI(finalUrl);
    } catch {
      return finalUrl;
    }
  };

  useEffect(() => {
    fetch(`${API}/api/pages/home?ts=${Date.now()}`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;
        const content = data.content || data;
        const normalizedData = {
          ...content,
          hero: content.hero
            ? {
                ...content.hero,
                backgroundImage: normalizeMediaUrl(content.hero.backgroundImage),
              }
            : undefined,
          visibility: content.visibility
            ? { ...content.visibility, image: normalizeMediaUrl(content.visibility.image) }
            : undefined,
          performance: content.performance
            ? { ...content.performance, image: normalizeMediaUrl(content.performance.image) }
            : undefined,
          impactImage: normalizeMediaUrl(content.impactImage),
          industries: content.industries
            ? content.industries.map((item) => ({
                ...item,
                image: normalizeMediaUrl(item.image),
              }))
            : content.industries,
          caseStudies: content.caseStudies
            ? content.caseStudies.map((item) => ({
                ...item,
                image: normalizeMediaUrl(item.image),
              }))
            : content.caseStudies,
          whyBusiness: content.whyBusiness
            ? {
                ...content.whyBusiness,
                image: normalizeMediaUrl(content.whyBusiness.image),
              }
            : undefined,
        };
        setPageData(normalizedData);
      })
      .catch((err) => console.error("Failed to load home page data:", err));
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  /* ---- default fallback data ---- */

  const defaultHelpCards = [
    { icon: Icon1, title: "Get More Leads", desc: "We ensure your business get more and more leads through our expertly managed digital marketing services" },
    { icon: Icon2, title: "Make More Sales", desc: "We help you convert maximum possible leads into sales and grow your business faster" },
    { icon: Icon3, title: "Build Brand Awareness", desc: "We help your brand gain strong recognition across digital platforms globally" },
    { icon: Icon4, title: "Upskill Your Team", desc: "Improve your team capabilities with advanced marketing strategies and guidance" },
  ];

  const defaultServices = [
    { icon: seoIcon, title: "Search Engine Optimization", description: "Boost your visibility and drive targeted traffic with our data-driven search strategies. We help clients strengthen their online presence through expert SEO strategies and tailored services." },
    { icon: socialIcon, title: "Social Media Marketing", description: "We offer tailored social media strategies to ensure your brand stands out on all social media platforms, including Instagram, Facebook, LinkedIn, YouTube, and more." },
    { icon: ppcIcon, title: "PPC & Performance Marketing", description: "Partner with us to unlock the full potential of paid advertising, maximize your revenue and accelerate business growth with our expertly crafted, results-driven PPC campaigns." },
    { icon: webIcon, title: "Website Design & Development", description: "We offer website design and development services to help clients have fast, responsive, user-friendly and search engine optimized websites to attract and engage audience." },
    { icon: contentIcon, title: "Content Marketing", description: "We help businesses bring their brands to life with our expertly crafted content that tells their story to the world in an exciting and engaging way." },
    { icon: ormIcon, title: "Online Reputation Management", description: "Our comprehensive Online Reputation Management (ORM) services are designed to help you monitor, manage, and shape your digital presence more effectively and intelligently." },
    { icon: listenIcon, title: "Social Media Listening", description: "Monitor your online conversations like never before. We offer specialized social media listening services to help you track your brand, product or industry across social media platforms." },
    { icon: croIcon, title: "Conversion Rate Optimisation", description: "We offer Conversion Rate Optimization (CRO) services designed specifically to elevate your website's user experience and turn your potential customers into actual ones effortlessly." },
    { icon: geoIcon, title: "AEO + AIO + GEO", description: "TIMING MATTERS! Our AEO+AIO+GEO services are designed to optimize search engines for the right responses based on user intent and location to provide your audience with timely responses and build trust." },
  ];

  const defaultIndustries = [
    { image: i1, title: "Healthcare", desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.", readMoreLink: "#" },
    { image: i2, title: "E-Commerce", desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.", readMoreLink: "#" },
    { image: i3, title: "Travel", desc: "We offer a complete suite of digital marketing solutions for travel brands, helping them showcase their offerings in a unique way and drive bookings.", readMoreLink: "#" },
    { image: i1, title: "Healthcare", desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.", readMoreLink: "#" },
    { image: i2, title: "E-Commerce", desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.", readMoreLink: "#" },
    { image: i3, title: "Travel", desc: "We offer a complete suite of digital marketing solutions for travel brands, helping them showcase their offerings in a unique way and drive bookings.", readMoreLink: "#" },
  ];

  const defaultCaseStudies = [
    {
      title: "DHI International SEO Case Study: 190% Growth in Organic Traffic",
      image: seocase,
      descriptions: ["When DHI International partnered with us, the objective was clear: to strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved significant growth in organic traffic, keyword rankings, and overall search visibility, transforming SEO into a reliable and scalable lead-generation channel."],
      viewCaseStudyBtn: { text: "View Case Study", link: "#" },
      viewLatestWorkBtn: { text: "View Our Latest Work", link: "#" },
    },
    {
      title: "Rizaries SEO Case Study: 613% Growth in Organic Traffic",
      image: seocase,
      descriptions: ["Rizaries is a Shopify-based home furnishings brand selling rugs, mats, and cushion covers. The objective was to increase organic traffic, improve keyword rankings, and scale SEO as a primary sales channel. At the start, organic visibility was limited and most keywords were ranking beyond the first page. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings, and capture high-intent non-branded searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver."],
      viewCaseStudyBtn: { text: "View Case Study", link: "#" },
      viewLatestWorkBtn: { text: "View Our Latest Work", link: "#" },
    },
    {
      title: "Moti Mahal Delux SEO Case Study: 100% Keyword Visibility",
      image: seocase,
      descriptions: ["When we started working on Moti Mahal Delux, none of the targeted franchise-related keywords were visible on Google. There were no dedicated SEO pages, limited content depth, and technical and on-page gaps restricting search visibility. Our team suggested new SEO-focused pages, created optimised content, fixed technical and on-page issues, and executed high-quality link building to strengthen authority. As a result, the website achieved 100% keyword visibility, with all targeted keywords now ranking on the first page of Google, most within the top 5 positions."],
      viewCaseStudyBtn: { text: "View Case Study", link: "#" },
      viewLatestWorkBtn: { text: "View Our Latest Work", link: "#" },
    },
  ];

  const defaultFaqs = [
    { question: "Will I have a dedicated point of contact or account manager?", answer: "Of course, you will! At Digicore Inc., we assign a dedicated account manager to every client to ensure seamless communication, personalized support and a smooth execution of all campaigns. He/she will be your primary point of contact for all communication and strategic discussions." },
    { question: "Does your team have experience in my specific industry (e.g., healthcare, e-commerce, SaaS)?", answer: "Yes! Our team includes seasoned digital marketing experts with extensive experience across a wide range of industries, including yours. We take care of everything from crafting data-driven SEO strategies to executing full-scale digital campaigns. To know how we have helped clients achieve measurable growth and outstanding results across sectors, please explore our portfolio of detailed case studies on the Case Studies page." },
    { question: "Is your team in-house, or do you outsource any work?", answer: "We have a team of in-house experts. All core strategies, executions and reporting are handled by our in-house experts to maintain quality control. However, for highly specialized tasks, we do outsource to trusted experts." },
    { question: "How does your team stay updated with the latest digital marketing trends and algorithm changes?", answer: "We do conduct regular trainings and workshops for our team. Aside from that, our team members also attend industry conferences and seminars to stay abreast about the latest digital marketing trends and algorithm changes." },
    { question: "How do you measure the success of a campaign?", answer: "We begin by defining Key Performance Indicators (KPIs) relevant to your goals, such as ROI, cost per acquisition, conversion rate, organic traffic and so on. In addition to that, we utilize cutting-edge tools, such as Google Analytics and marketing automation platforms for tracking performance and ensure every campaign stays aligned with your goal." },
    { question: "Can you guarantee specific rankings or results?", answer: "We don't guarantee anything, we put in our best efforts, strategic expertise and experience into action to deliver sure shot results. We focus on delivering measurable, long-term results rather than promising something unrealistic." },
    { question: "Do you have experience working within my specific industry?", answer: "Yes, we do have experience of working in your industry. We have partnered with businesses across various sectors, including healthcare, education, travel, retail and so on. Some of our success stories are already there on our Case Studies page. Please visit the same to know how we can help you grow and sustain in this overly crowded digital realm." },
    { question: "What is your process for creating a customized digital marketing strategy?", answer: "At Digicore Inc., the process of creating a customized digital marketing strategy begins with understanding your business, current challenges and your digital marketing goals. The insights gained from primary consultation are then used to curate a bespoke strategy tailored specifically to your brand, which are then shared with you for inputs and approval." },
    { question: "How often will we communicate, and what methods do you use?", answer: "It depends on the intricacy of the project and the specific goals you want to achieve. Usually, we provide detailed reports and schedule video conferences on bi-monthly basis; however, we can tailor the frequency (if needed)." },
  ];

  const defaultCounters = [
    { value: 55, label: "of Indian shoppers check online before making an actual purchase." },
    { value: 68, label: "of Indian shoppers now start their product searches on Instagram, YouTube, or Amazon." },
    { value: 88, label: "of Indian users trust Google results for brands that shine on social media platforms." },
    { value: 76, label: "of young users turn to AI-generated overviews instead of scrolling through traditional search results." },
  ];

  const defaultTimeline = [
    { title: "Contact Us", desc: "Get in touch with us via email, phone or website." },
    { title: "Share Your Goals", desc: "Tell us about your business and marketing goals." },
    { title: "Consultation", desc: "Our expert will discuss strategies tailored to your business." },
    { title: "Proposal & Plan", desc: "We provide a customized strategy and roadmap." },
    { title: "Partner & Grow", desc: "Drive high-impact traffic and measurable growth." },
  ];

  const defaultBullets = [
    "Team of experienced digital marketing experts",
    "Result-oriented strategies tailored to your brand",
    "Transparent reporting system for every campaign",
    "Improve brand visibility across all platforms",
    "Strong SEO strategies for better search rankings",
    "Save time, effort and operational costs",
    "Convert opportunities into measurable growth",
    "Growth-focused strategies for startups & businesses",
  ];

  /* ---- computed display values from DB or fallback ---- */

  const fallbackHelpIcons = [Icon1, Icon2, Icon3, Icon4];

  const displayCounters = pageData?.counters?.length > 0 ? pageData.counters : defaultCounters;

  const displayPerformanceWords = pageData?.performance?.words?.length > 0 ? pageData.performance.words : ["TRACK", "ANALYZE", "SCALE", "REPEAT"];
  const displayPerformanceImage = pageData?.performance?.image || seoRimg;

  const displayServices = pageData?.services?.length > 0 ? pageData.services : defaultServices;

  const displayHelpCards = pageData?.helpCards?.length > 0
    ? pageData.helpCards.map((h, i) => ({ ...h, icon: h.icon || fallbackHelpIcons[i] }))
    : defaultHelpCards;

  const displayTimeline = pageData?.timeline?.length > 0 ? pageData.timeline : defaultTimeline;

  const displayIndustries = pageData?.industries?.length > 0 ? pageData.industries : defaultIndustries;

  const displayCaseStudies = pageData?.caseStudies?.length > 0
    ? pageData.caseStudies.map((c) => ({
        ...c,
        image: c.image || seocase,
        descriptions: [c.description],
        viewCaseStudyBtn: c.viewCaseStudyBtn || { text: "View Case Study", link: "#" },
        viewLatestWorkBtn: c.viewLatestWorkBtn || { text: "View Our Latest Work", link: "#" },
      }))
    : defaultCaseStudies;

  const displayBullets = pageData?.whyBusinessBullets?.length > 0
    ? pageData.whyBusinessBullets.map((b) => b.text || b)
    : defaultBullets;

  const displayFaqs = pageData?.faqs?.length > 0 ? pageData.faqs : defaultFaqs;

  const heroBackgroundImage = pageData?.hero?.backgroundImage || null;

  /* ---- case study slider ---- */

  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) => (prev === displayCaseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev === 0 ? displayCaseStudies.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) =>
        prev === displayCaseStudies.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [displayCaseStudies.length]);

  /* ---- industry slider ---- */

  const sliderRef = useRef(null);

  const scrollRight = () => {
    const card = sliderRef.current.querySelector(".workindustry-card");
    if (card) {
      const cardWidth = card.offsetWidth + 40;
      sliderRef.current.scrollBy({ left: cardWidth * 3, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    const card = sliderRef.current.querySelector(".workindustry-card");
    if (card) {
      const cardWidth = card.offsetWidth + 40;
      sliderRef.current.scrollBy({ left: -(cardWidth * 3), behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const autoSlide = setInterval(() => {
      if (slider) {
        slider.scrollBy({ left: 380, behavior: "smooth" });
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 1000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <Banner
        subtitle={pageData?.hero?.subtitle || pageData?.hero?.heading}
        heading={pageData?.hero?.heading}
        title={pageData?.hero?.title || "B2B SEO Agency That Drives Traffic, Trust, and Conversions"}
        description={pageData?.hero?.description || "To address the challenges of B2B SEO, it is ideal to partner with the trusted digital marketing agency. In order to incorporate AI-driven SEO practices, improve visibility in the digital landscape, the B2B SEO agency helps clients in attracting qualified leads. At Digicore Inc., we provide tailored experience of marketing to our clients by applying the expertise and new-age SEO practices."}
        primaryBtnText={pageData?.hero?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={pageData?.hero?.secondaryBtn?.text || "Our Services"}
        backgroundImage={heroBackgroundImage}
      />

      <section className="about-section">
        <div className="about-container">
          <h1>
            {pageData?.about?.heading || "A Results-Driven Digital Marketing Company in Kanpur for Growing Brands"}
          </h1>

          <div className="divider"></div>

          <p>
            {pageData?.about?.body ||
              "Digicore Inc. is a leading digital marketing services company in Kanpur, created to help ambitious brands to conquer every searchable platform in this age of AI and response marketing. We utilize the most advanced and cutting-edge digital marketing tools and techniques to elevate your social media listings and online performance across platforms. From PPC and AI SEO to social media, content, website development, social listening and influencer marketing, we blend data and technology to help brands make smarter decisions and unlock new opportunities. Incepted in the year 2016, Digicore Inc. has been shaping the digital marketing space with creative solutions. We have helped numerous local and global brands make a solid impact in this AI-driven digital marketing landscape. We can help you as well – to evolve, elevate and lead in this digital-first world."}
          </p>
        </div>
      </section>

      <section className="visibility-section">
        <div className="visibility-container">
          <div className="visibility-content">
            <h2>
              {pageData?.visibility?.heading || "But what hasn't changed is the value of Visibility"}
            </h2>

            <p>
              {pageData?.visibility?.paragraph1 ||
                "The search you knew for decades has changed and nothing is same anymore. With the evolution of technology, the way people search, discover and buy has also evolved. Gone are the days when visibility meant ranking on Google alone. Today, people search everywhere, on every digital platform wherever possible, making it imperative for brands to be present and consistent across every platform—like Google, Instagram, YouTube, LinkedIn, marketplaces or even AI-generated results."}
            </p>

            <p>
              {pageData?.visibility?.paragraph2 ||
                "Modern shoppers, especially Gen Z research products thoroughly on social platforms like Instagram before making a purchase. On top of that AI has changed the way people search and evaluate products before making a purchase, making it essential for brands to be future-ready by being present exactly where your audience is looking (that's everywhere). And that's when Digicore Inc. – the best digital marketing agency in Kanpur come in handy. At Digicore Inc., we offer customized digital marketing solutions to help your brand rank higher and stay visible across every platform your customers turn to."}
            </p>

            <div className="orange-line"></div>
          </div>

          <div className="visibility-image">
            <img src={pageData?.visibility?.image || graphImg} alt="Graph" />
          </div>
        </div>
      </section>

      <section className="counter-section">
        <div className="counter-container">
          {displayCounters.map((c, i) => (
            <div className="count-row" key={i}>
              <h5>
                <span className="counter">{c.value}</span>
                <span style={{ color: "#2E75B6 " }}>%</span>
              </h5>
              <p>{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="performance-section">
        <div className="performance-container">
          <div className="performance-left">
            {displayPerformanceWords.map((word, i) => (
              <h2 key={i}>{word}</h2>
            ))}
          </div>

          <div className="performance-right">
            <img src={displayPerformanceImage} alt="SEO Performance" />
          </div>
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-container">
          <h4>
            {pageData?.discover?.line1 || "If your brand isn't discoverable,"}
          </h4>

          <h2 className="color-#f1781d">
            {pageData?.discover?.line2 || "you're already losing at search."}
          </h2>

          <p>
            {pageData?.discover?.paragraph ||
              "Being present on every platform is the need of an hour. Remember if you are not visible to your audience; you don't exist BUT YOUR RIVALS DO! Know that search marketing is more than just ranking on Google—it's about being found, remembered, and recommended across every platform where your audience looks for you. When it comes to making digital presence more robust, effective and impactful, Digicore Inc. is the trusted choice. We have a team of seasoned digital marketing experts who combine AI-driven strategies, advanced analytics and data-backed insights to build a foundation that drives long-term brand success. We create tailored strategies to deliver measurable results and actionable insights, helping brands grow and thrive in a competitive digital landscape. If you want your brand to become 'impossible to miss,' then partner with Digicore Inc. – the first-ever AI-first Digital Marketing Agency! We help your brand stand out and achieve ROI-driven growth."}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="discover-services">
        <div className="discover-container">
          <div className="divider"></div>

          <h2>
            {pageData?.servicesHeading?.heading || "Discover Our Services in\nKanpur\nfor Faster Business Growth"}
          </h2>

          <p>
            {pageData?.servicesHeading?.paragraph ||
              "We offer customized digital marketing solutions to help our clients engage their audience and build a strong brand presence across all platforms."}
          </p>
        </div>

        <div className="services-cards">
          <div className="services-grid">
            {displayServices.map((service, index) => (
              <div key={index} className="services-card">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="why-choose-sec"
        style={{
          backgroundImage: `url(${pageData?.whyChoose?.backgroundIcon || bgIcon})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="div-content">
          <h1>
            {pageData?.whyChoose?.heading || "Stop Guessing. Start Growing. Book Your Strategy Call Now."}
          </h1>

          <div className="choose-btns">
            <a href={pageData?.whyChoose?.whatsappBtn?.link || "#"} className="light-btn">
              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
              />
              {pageData?.whyChoose?.whatsappBtn?.text || "+91 98188 88064"}
            </a>

            <a href={pageData?.whyChoose?.callbackBtn?.link || "#"} className="light-btn">
              {pageData?.whyChoose?.callbackBtn?.text || "REQUEST A CALLBACK"}
            </a>
          </div>
        </div>
      </section>

      {/* Impact section */}
      <section className="impact-sec" style={{ backgroundColor: "#fff" }}>
        <div className="impact-container">
          <div className="impact-image">
            <div className="impact-circle"></div>

            <img src={pageData?.impactImage || impact} alt="Impact" />
          </div>

          <div className="timeline-section" style={{ backgroundColor: "#fff" }}>
            <div className="timeline">
              {displayTimeline.map((item, index) => (
                <div key={index} className={`timeline-item${index === 0 ? " active" : ""}`}>
                  <div className="timeline-dot"></div>

                  <div className="timeline-content">
                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section */}
       <Industry />

      {/* Case Study Section */}
        <Casestudy />

      {/* Dominate Section */}
      <section className="dominate-section">
        <div className="dominate-heading">
          <h2>
            {pageData?.dominate?.heading || "DOMINATE YOUR INDUSTRY WITH US"}
          </h2>

          <div className="dominate-line"></div>

          <p>
            {pageData?.dominate?.paragraph ||
              "We are a team of highly skilled and expert digital marketers. All our solutions are crafted thoughtfully to ensure your digital presence is strong, engaging and impactful."}
          </p>
        </div>

        <div className="dominate-cards">
          {displayHelpCards.map((item, index) => (
            <div className="dominate-card" key={index}>
              <div className="dominate-icon">
                <img src={item.icon} alt={item.title} className="dominate-icon-img" />
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Businesses Choose Us Section */}
      <section
        className="why-business-section"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="why-business-container">
          <div className="why-business-heading">
            <div className="divider"></div>

            <h2>
              {pageData?.whyBusiness?.heading || "Why Businesses Choose Digicore Inc."}
            </h2>

            <p>
              {pageData?.whyBusiness?.paragraph ||
                "Digicore Inc. is the most trusted and AI-first digital marketing agency in Kanpur, India. We offer a full spectrum of digital marketing solutions to clients across India and abroad. Whether you are a startup or an established brand, we provide robust marketing services that blend creativity, strategy, and technology to deliver measurable results and maximize ROI. Our tailored approaches help brands stand out and achieve sustained growth in the digital landscape."}
            </p>
          </div>

          <div className="why-business-content">
            <div className="why-left">
              <ul>
                {displayBullets.map((bullet, i) => (
                  <li key={i}>✔ {bullet}</li>
                ))}
              </ul>
            </div>

            <div className="why-right">
              <img src={pageData?.whyBusiness?.image || graphImg} alt="Graph" />
            </div>
          </div>
        </div>
      </section>

    <Testimonial />

    <Brands />

   <Tools />

   <Blogs />

      <div>
        {/* Faq Section */}
        <section className="faq-section">
          <div className="faq-header">
            <h2>FAQ</h2>
            <div className="faq-line"></div>
          </div>

          <div className="faq-container">
            {displayFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
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
                  className={`faq-answer ${activeIndex === index ? "show" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
