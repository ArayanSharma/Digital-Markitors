import React, { useEffect, useRef, useState } from "react";

import Blogs from "../Components/Cards/BlogCard";
import Contacts from "../Components/Sections/Contact";
import Testimonial from "../Components/Sections/Testimonials";

import Banner from "../Components/Cards/Seohero";
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
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const highlightTitle = (text) => {
    if (!text) return "";
    const keywords = ["Digicore", "Results", "Visibility", "Grow", "Marketing", "SEO", "Agency", "Traffic", "Conversions", "Search", "Optimization", "B2B", "Digital", "Growth", "Losing", "losing", "Losing at Search"];
    const words = text.split(" ");
    return words.map((word, idx) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      if (keywords.includes(cleanWord)) {
        return <span key={idx} className="text-[#e31e24]">{word} </span>;
      }
      return word + " ";
    });
  };

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
    <div className="font-body text-[#4b5563]">
      {/* HERO SECTION */}
      <Banner
        subtitle={pageData?.hero?.subtitle || pageData?.hero?.heading}
        title={pageData?.hero?.title || "B2B SEO Agency That Drives Traffic, Trust, and Conversions"}
        description={pageData?.hero?.description || "To address the challenges of B2B SEO, it is ideal to partner with the trusted digital marketing agency. In order to incorporate AI-driven SEO practices, improve visibility in the digital landscape, the B2B SEO agency helps clients in attracting qualified leads. At Digicore Inc., we provide tailored experience of marketing to our clients by applying the expertise and new-age SEO practices."}
        primaryBtnText={pageData?.hero?.primaryBtn?.text || "Speak to an SEO Expert"}
        primaryBtnLink={pageData?.hero?.primaryBtn?.link || "/contact"}
        secondaryBtnText={pageData?.hero?.secondaryBtn?.text || "Our Services"}
        secondaryBtnLink={pageData?.hero?.secondaryBtn?.link || "/services"}
        backgroundImage={pageData?.hero?.backgroundImage}
      />

      {/* About Section */}
      <section className="w-full py-[100px] px-5 max-[769px]:py-[60px] bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1300px] mx-auto text-center pt-[60px] px-5 pb-20 max-[769px]:p-[50px_15px]">
          <h1 className="font-heading font-extrabold text-[44px] leading-[1.2] max-[993px]:text-[36px] max-[769px]:text-[28px] text-[#2b2b2e] mb-6">
            {highlightTitle(pageData?.about?.heading || "A Results-Driven Digital Marketing Company in Kanpur for Growing Brands")}
          </h1>

          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <p className="font-normal text-[17px] leading-[1.8] text-[#4b5563]">
            {pageData?.about?.body ||
              "Digicore Inc. is a leading digital marketing services company in Kanpur, created to help ambitious brands to conquer every searchable platform in this age of AI and response marketing. We utilize the most advanced and cutting-edge digital marketing tools and techniques to elevate your social media listings and online performance across platforms. From PPC and AI SEO to social media, content, website development, social listening and influencer marketing, we blend data and technology to help brands make smarter decisions and unlock new opportunities. Incepted in the year 2016, Digicore Inc. has been shaping the digital marketing space with creative solutions. We have helped numerous local and global brands make a solid impact in this AI-driven digital marketing landscape. We can help you as well – to evolve, elevate and lead in this digital-first world."}
          </p>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="w-full py-[100px] bg-white max-[993px]:py-[60px] max-[993px]:px-5 border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[60px] lg:gap-[40px] px-5">
          <div className="flex-1">
            <h2 className="w-full font-heading font-extrabold text-[36px] leading-[1.2] max-[993px]:text-[30px] max-[769px]:text-[26px] text-[#2b2b2e] m-0 pb-[20px]">
              {highlightTitle(pageData?.visibility?.heading || "But what hasn't changed is the value of Visibility")}
            </h2>

            <p className="font-normal text-[16px] leading-[1.8] text-[#4b5563] m-0 mb-4">
              {pageData?.visibility?.paragraph1 ||
                "The search you knew for decades has changed and nothing is same anymore. With the evolution of technology, the way people search, discover and buy has also evolved. Gone are the days when visibility meant ranking on Google alone. Today, people search everywhere, on every digital platform wherever possible, making it imperative for brands to be present and consistent across every platform—like Google, Instagram, YouTube, LinkedIn, marketplaces or even AI-generated results."}
            </p>

            <p className="font-normal text-[16px] leading-[1.8] text-[#4b5563] m-0">
              {pageData?.visibility?.paragraph2 ||
                "Modern shoppers, especially Gen Z research products thoroughly on social platforms like Instagram before making a purchase. On top of that AI has changed the way people search and evaluate products before making a purchase, making it essential for brands to be future-ready by being present exactly where your audience is looking (that's everywhere). And that's when Digicore Inc. – the best digital marketing agency in Kanpur come in handy. At Digicore Inc., we offer customized digital marketing solutions to help your brand rank higher and stay visible across every platform your customers turn to."}
            </p>

            <div className="w-[100px] h-[4px] bg-[#e31e24] mt-[40px]"></div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img src={pageData?.visibility?.image || graphImg} alt="Graph" className="w-full max-w-[550px] h-auto object-cover rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-[#e5e7eb]" />
          </div>
        </div>
      </section>

      {/* Stats/Results Section */}
      <section className="w-full py-[80px] px-[60px] max-[769px]:px-[20px] bg-[#1c1c1e] text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[30px]">
          {displayCounters.map((c, i) => (
            <div className="flex flex-col items-start gap-[15px] pb-6 border-b border-[#e31e24]/15 md:border-b-0 md:border-r md:pr-6 last:border-0 last:pr-0 last:border-r-0" key={i}>
              <h5 className="font-heading font-extrabold text-[64px] max-[769px]:text-[50px] max-[481px]:text-[42px] leading-none text-white m-0 flex items-center">
                <span className="text-[#22c55e] text-3xl mr-2">▲</span>
                <span>{c.value}</span>
                <span className="text-[#e31e24] ml-1">%</span>
              </h5>
              <p className="font-normal text-[15px] leading-[1.6] text-[#f4f4f5]/80 m-0">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand values / Words Section */}
      <section className="w-full p-0 m-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 w-full">
          <div className="bg-gradient-to-br from-[#8b0000] to-[#1c1c1e] min-h-[350px] flex flex-col justify-center px-12 py-[80px] lg:pl-[120px]">
            {displayPerformanceWords.map((word, i) => (
              <h2 key={i} className="m-0 font-heading font-extrabold text-[60px] leading-[75px] max-[992px]:text-[48px] max-[992px]:leading-[58px] max-[769px]:text-[36px] max-[769px]:leading-[46px] text-white uppercase tracking-tight">
                {word}
              </h2>
            ))}
          </div>

          <div className="min-h-[390px] max-[992px]:min-h-[350px] max-[769px]:min-h-[250px] overflow-hidden">
            <img src={displayPerformanceImage} alt="SEO Performance" className="w-full h-full block object-cover" />
          </div>
        </div>
      </section>

      {/* Discover Callout Section */}
      <section className="w-full py-[100px] px-5 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto text-center px-5">
          <h4 className="text-[28px] max-[769px]:text-[22px] text-[#4b5563] font-heading font-semibold m-0 mb-2">
            {pageData?.discover?.line1 || "If your brand isn't discoverable,"}
          </h4>

          <h2 className="uppercase text-[54px] max-[993px]:text-[38px] max-[769px]:text-[30px] text-[#1c1c1e] font-heading font-extrabold mb-[40px] leading-[1.1]">
            {pageData?.discover?.line2 ? highlightTitle(pageData.discover.line2) : <>YOU'RE ALREADY <span className="text-[#e31e24]">LOSING</span> AT SEARCH.</>}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] text-center max-w-[1000px] mx-auto m-0">
            {pageData?.discover?.paragraph ||
              "Being present on every platform is the need of an hour. Remember if you are not visible to your audience; you don't exist BUT YOUR RIVALS DO! Know that search marketing is more than just ranking on Google—it's about being found, remembered, and recommended across every platform where your audience looks for you. When it comes to making digital presence more robust, effective and impactful, Digicore Inc. is the trusted choice. We have a team of seasoned digital marketing experts who combine AI-driven strategies, advanced analytics and data-backed insights to build a foundation that drives long-term brand success. We create tailored strategies to deliver measurable results and actionable insights, helping brands grow and thrive in a competitive digital landscape. If you want your brand to become 'impossible to miss,' then partner with Digicore Inc. – the first-ever AI-first Digital Marketing Agency! We help your brand stand out and achieve ROI-driven growth."}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {highlightTitle(pageData?.servicesHeading?.heading || "Discover Our Services in Kanpur for Faster Business Growth")}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {pageData?.servicesHeading?.paragraph ||
              "We offer customized digital marketing solutions to help our clients engage their audience and build a strong brand presence across all platforms."}
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {displayServices.map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-white rounded-[20px] p-8 text-center border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(227,30,36,0.12)] hover:border-[#e31e24]/20 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                  </div>

                  <h3 className="text-[20px] font-heading font-bold text-[#2b2b2e] mb-4 leading-tight">{service.title}</h3>

                  <p className="text-[15px] leading-[1.6] text-[#4b5563] mb-6">{service.description}</p>
                </div>

                <div className="w-10 h-10 bg-transparent text-[#e31e24] rounded-full flex items-center justify-center text-xl mx-auto border border-[#e31e24]/10 group-hover:bg-[#e31e24] group-hover:text-white transition-colors duration-300">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="relative py-[100px] px-5 bg-[#1c1c1e] text-center min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 28, 30, 0.9), rgba(28, 28, 30, 0.95)), url(${pageData?.whyChoose?.backgroundIcon || bgIcon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 text-center max-w-[1000px] mx-auto">
          <h1 className="text-white text-[42px] max-[769px]:text-[30px] font-heading font-extrabold leading-[1.2] mb-[40px]">
            {pageData?.whyChoose?.heading || "Stop Guessing. Start Growing. Book Your Strategy Call Now."}
          </h1>

          <div className="flex justify-center items-center gap-5 max-[769px]:flex-col">
            <a href={pageData?.whyChoose?.whatsappBtn?.link || "#"} className="flex items-center justify-center gap-[10px] bg-white hover:bg-[#f0fdf4] hover:scale-[1.03] transition-all duration-300 text-[#22c55e] h-12 px-7 rounded-lg text-base font-bold no-underline shadow-[0_4px_15px_rgba(34,197,94,0.16)] border border-[#22c55e]/25">
              <img
                src="https://tataresearch.besthr.in/digital-marketar/assets/icon/whatsapp.png"
                alt="whatsapp"
                className="w-[20px] h-[20px] rounded-full bg-[#22c55e] p-[3px] object-contain"
              />
              {pageData?.whyChoose?.whatsappBtn?.text || "+91 98188 88064"}
            </a>

            <a href={pageData?.whyChoose?.callbackBtn?.link || "#"} className="flex items-center justify-center gap-[10px] bg-transparent hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 text-white h-12 px-7 rounded-lg text-base font-bold no-underline border border-white">
              {pageData?.whyChoose?.callbackBtn?.text || "REQUEST A CALLBACK"}
            </a>
          </div>
        </div>
      </section>

      {/* Impact timeline section */}
      <section className="py-[100px] px-[7%] bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-[60px] lg:flex-row flex-col px-5">
          <div className="w-full max-w-[500px] lg:max-w-[45%]">
            <img src={pageData?.impactImage || impact} alt="Impact" className="w-full block rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-[#e5e7eb]" />
          </div>

          <div className="w-full lg:max-w-[50%] pt-10 lg:pt-0">
            <div className="relative border-l border-[#e5e7eb] pl-6 ml-3">
              {displayTimeline.map((item, index) => (
                <div key={index} className="relative mb-[40px] last:mb-0">
                  <div className="absolute left-[-31px] top-1 w-[14px] h-[14px] rounded-full border-2 border-[#e31e24] bg-white shadow-[0_0_8px_rgba(227,30,36,0.4)] z-[2]"></div>

                  <div>
                    <h3 className="mb-[8px] text-[22px] max-[769px]:text-[19px] font-heading font-bold text-[#2b2b2e] leading-tight">{item.title}</h3>

                    <p className="text-[15px] leading-[1.6] text-[#4b5563]">{item.desc}</p>
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
      <section className="py-[100px] px-[6%] bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[42px] max-[769px]:text-[30px] text-[#1c1c1e] font-heading font-extrabold mb-[15px]">
            {pageData?.dominate?.heading || "DOMINATE YOUR INDUSTRY WITH US"}
          </h2>

          <div className="w-[70px] h-[4px] bg-[#e31e24] mx-auto mb-[30px] rounded-[20px]"></div>

          <p className="max-w-[850px] mx-auto text-[17px] leading-[1.8] text-[#4b5563] mb-[60px]">
            {pageData?.dominate?.paragraph ||
              "We are a team of highly skilled and expert digital marketers. All our solutions are crafted thoughtfully to ensure your digital presence is strong, engaging and impactful."}
          </p>
        </div>

        <div className="flex justify-center gap-10 flex-wrap mt-[30px]">
          {displayHelpCards.map((item, index) => (
            <div
              className="group w-[260px] h-[260px] max-[769px]:w-[220px] max-[769px]:h-[220px] rounded-full bg-white border border-[#e5e7eb] flex flex-col items-center justify-center text-center p-6 box-border relative overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:bg-[#e31e24] hover:border-[#e31e24] hover:shadow-[0_12px_25px_rgba(227,30,36,0.25)] hover:-translate-y-1.5"
              key={index}
            >
              <div className="relative z-[2] w-12 h-12 mb-4 flex items-center justify-center transition-colors duration-300">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>

              <h3 className="relative z-[2] text-[18px] max-[769px]:text-[15px] font-heading font-bold text-[#2b2b2e] leading-tight m-0 transition-colors duration-300 group-hover:text-white group-hover:mb-[10px]">{item.title}</h3>

              <p className="relative z-[2] mt-0 text-[12px] leading-[1.5] text-white opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-90 group-hover:max-h-[120px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Businesses Choose Us Section */}
      <section className="py-[100px] px-[6%] bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]">
            <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

            <h2 className="text-[42px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-[20px]">
              {highlightTitle(pageData?.whyBusiness?.heading || "Why Businesses Choose Digicore Inc.")}
            </h2>

            <p className="max-w-[850px] mx-auto text-[17px] leading-[1.8] text-[#4b5563]">
              {pageData?.whyBusiness?.paragraph ||
                "Digicore Inc. is the most trusted and AI-first digital marketing agency in Kanpur, India. We offer a full spectrum of digital marketing solutions to clients across India and abroad. Whether you are a startup or an established brand, we provide robust marketing services that blend creativity, strategy, and technology to deliver measurable results and maximize ROI."}
            </p>
          </div>

          <div className="flex items-center gap-[60px] max-[993px]:flex-col">
            <div className="flex-1 w-full">
              <ul className="list-none p-0 flex flex-col gap-4">
                {displayBullets.map((bullet, i) => (
                  <li key={i} className="text-[16px] leading-[1.6] bg-white p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#e5e7eb]/60 transition-all duration-300 hover:translate-x-[8px] hover:border-[#e31e24]/20 flex items-start">
                    <span className="text-[#e31e24] font-bold mr-3 shrink-0">✔</span>
                    <span className="text-[#4b5563]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 text-center w-full">
              <img src={pageData?.whyBusiness?.image || graphImg} alt="Graph" className="w-full max-w-[500px] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] mx-auto border border-[#e5e7eb]" />
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <Brands />

      <Tools />

      <Blogs />

      {/* FAQ Section */}
      <section className="py-[100px] px-5 bg-white border-b border-[#e5e7eb]">
        <div className="text-center mb-[50px]">
          <h2 className="text-[42px] font-heading font-extrabold text-[#1c1c1e] mb-[10px]">FAQ</h2>
          <div className="w-12 h-1 bg-[#e31e24] mx-auto rounded-[50px]"></div>
        </div>

        <div className="max-w-[950px] mx-auto flex flex-col gap-4">
          {displayFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#e5e7eb] rounded-xl bg-white overflow-hidden shadow-sm hover:border-[#e31e24]/20 transition-all duration-300"
            >
              <button
                className="w-full bg-transparent border-0 flex justify-between items-center py-5 px-6 cursor-pointer text-left transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[16px] font-heading font-bold text-[#2b2b2e] leading-[1.5] max-w-[90%] group-hover:text-[#e31e24]">{faq.question}</span>

                {activeIndex === index ? (
                  <Minus className="w-[20px] h-[20px] shrink-0 text-[#e31e24]" />
                ) : (
                  <Plus className="w-[20px] h-[20px] shrink-0 text-[#e31e24]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[300px]" : "max-h-0"}`}
              >
                <p className="text-[15px] text-[#4b5563] leading-[1.7] pt-0 px-6 pb-6 border-t border-[#e5e7eb]/40">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
