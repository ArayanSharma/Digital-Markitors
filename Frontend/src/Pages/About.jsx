import React from 'react'
import heroImg from "../assets/digital-marketing-result-m.webp"
import Button from '../Components/Button'
import aboutImg from "../assets/about1.webp"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../Styles/About.css"
import Hero2 from "../Components/Sections/Hero2";
import dm1 from "../assets/dm1.webp";
import dm2 from "../assets/dm2.webp";
import dm3 from "../assets/dm3.webp";
import dm4 from "../assets/dm4.webp";
import Banner from "../Components/Cards/Seohero";
import logo from "../assets/logo.png";
import seoIcon from "../assets/seo1.webp";
import missionImg from "../assets/mission.webp";
import visionImg from "../assets/vision.webp";
import eimage from "../assets/a.png";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

const stats = [
  {
    icon: dm1,
    title: "Client",
    count: "100+",
    desc: "We are serving our flawless digital marketing services and impressive solutions to more than 165 clients worldwide.",
  },
  {
    icon: dm2,
    title: "Experience",
    count: "10+",
    desc: "Digicore Inc. is one of the leading market players with years of experience in digital marketing and related practices.",
  },
  {
    icon: dm3,
    title: "Delivered Project",
    count: "100+",
    desc: "Our team works from start to finish. We have successfully delivered more than 100 projects till now.",
  },
  {
    icon: dm4,
    title: "Offices",
    count: "3+",
    desc: "Our services are not restricted to one place only. We have branch offices in Kanpur, Noida, and Lucknow.",
  },
];

const industries = [
  {
    title: "EDUCATION",
    desc: "We provide schools, colleges, universities, edtech companies and training institutes with data-driven digital marketing strategies to build a strong institutional brand.",
  },
  {
    title: "Healthcare",
    desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.",
  },
  {
    title: "B2B",
    desc: "Our B2B digital marketing strategies are designed to help businesses generate high-quality leads, engage prospects and achieve measurable results.",
  },
  {
    title: "Hospitality",
    desc: "We offer highly specialized service-oriented digital marketing strategies to help brands stay ahead in today's highly competitive online market.",
  },
  {
    title: "eCommerce",
    desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.",
  },
  {
    title: "Travel",
    desc: "We offer a complete suite of digital marketing solutions for tour and travel companies, helping them showcase their offerings and drive bookings.",
  },
  {
    title: "FINANCIAL",
    desc: "We provide banks and other financial institutions with tailored digital marketing strategies to help them connect with their audience and drive engagement.",
  },
];

const About = () => {
  const { content: c } = usePageContent("about");
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") console.debug("About page content (hook):", c);
  }, [c]);
  const hero = c?.hero;
  const aboutSection = c?.aboutSection;
  const betterSection = c?.betterSection;
  const rawStats = c?.stats?.length ? c.stats : stats;
  const displayStats = rawStats.map((s) => ({ ...s, icon: resolveImage(s.icon) }));

  if (process.env.NODE_ENV !== "production") console.debug("displayStats:", displayStats);
  const contactBanner = c?.contactBanner;
  const displayIndustries = c?.industries?.length
    ? c.industries.map((i) => ({ ...i, icon: resolveImage(i.icon) }))
    : industries;
  const missionSection = c?.missionSection;
  const visionSection = c?.visionSection;

  return (
    <div>

     <Banner

      subtitle={hero?.subtitle}
      title={hero?.title || "B2B SEO Agency That Drives Traffic, Trust, and Conversions"}
      description={hero?.description || "To address the challenges of B2B SEO, it is ideal to partner with the trusted digital marketing agency. In order to incorporate AI-driven SEO practices, improve visibility in the digital landscape, the B2B SEO agency helps clients in attracting qualified leads. At Digicore Inc., we provide tailored experience of marketing to our clients by applying the expertise and new-age SEO practices."}
      primaryBtnText={hero?.primaryBtn?.text || "Speak to an SEO Expert"}
      secondaryBtnText={hero?.secondaryBtn?.text || "Our Services"}
       backgroundImage={hero?.image ? resolveImage(hero.image) : undefined}
    />

      <section className="sectionone">
        <div className="container">

          <h1 className="topheading">
             {aboutSection?.heading || "Osdf"}
          </h1>

          <div className="shrtdesc">
            <p className="text-center">
              {aboutSection?.body || `Digicore Inc. is one of the top Digital Marketing companies in India
              based in Kanpur. We are a complete digital marketing company that
              discusses and expertly applies all your strategies. Our top-notch
              services include everything, right from designing your business website
              and the best SEO services to mobile app development and online
              reputation management to engage your targeted and potential customers.`}
            </p>
          </div>

          <div className="space"></div>

          <div className="overview-row">

            <div className="overview-content">

              <p>
                {aboutSection?.paragraph1 || `If you are here, you already know the power and usefulness of
                digital marketing and SEO. With us, you can multiply that power
                and write a new story of success for your business. It is a fact
                that many times even a single glance is all you need to convert a
                visitor into a buyer. Here at Digicore Inc., one of the
                leading and affordable digital marketing service providers, we are
                always ready to help you leverage that opportunity.`}
              </p>

              <p>
                {aboutSection?.paragraph2 || `As a top-notch SEO company in Kanpur NCR, we consist of a team of highly dedicated professionals with many years of experience in digital marketing, SEO, SMO, content, website designing and development, and more. Our team is passionate about helping you make your business grow with leaps and bounds and giving your business website NUMBER #1 spot on the search engine results.`}
              </p>

            </div>
            <div className="overview-image">
              <img src={aboutSection?.image ? resolveImage(aboutSection.image) : aboutImg} alt="Company Overview" />
            </div>

          </div>

        </div>
      </section>

      <section className="wydmbc">
        <div className="container">

          <h2 className="wydm-title">
            What Makes Us <span>{betterSection?.heading || "Better than Others?"}</span>
          </h2>

          <p className="wydm-desc">
            {betterSection?.description || `Digicore Inc. has been creating value for its domestic and global
            clients from the last many years. Our team of highly dedicated
            professionals trained in digital marketing caters to countless projects
            every month.`}
          </p>

          <div className="wydm-grid">

            {displayStats.map((item, index) => (
              <div className="wydm-item" key={item.id || index}>
                <img src={item.icon || [dm1, dm2, dm3, dm4][index % 4]} alt={item.title} />
                <h3>{item.title}</h3>
                <div className="count-box">{item.count}</div>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="contact-banner">
        <div className="contact-wrapper">

          <div className="contact-left">
            <FaPhoneAlt />
            <span>{contactBanner?.phone || "9818888064"}</span>
          </div>

          <div className="contact-center">
            <img src={contactBanner?.logo ? resolveImage(contactBanner.logo) : logo} alt="logo" />
          </div>

          <div className="contact-right">
            <FaEnvelope />
            <span>{contactBanner?.email || "support@digicore.co.in"}</span>
          </div>

        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <h2 className="section-title">
            Industries <span>We Serve</span>
          </h2>

          <div className="industries-grid ">
            {displayIndustries.map((item, index) => (
              <div className="industry-card" key={item.id || index}>
                <div className="industry-header">
                  <img
                    src={item.icon || seoIcon}
                    alt={item.title}
                    className="industry-icon"
                  />
                  <h3>{item.title}</h3>
                </div>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ourmission">
        <div className="mission-wrapper">

          <div className="mission-box">
            <h2>
              Our <span>Mission</span>
            </h2>

            <p className="intro">
              {missionSection?.intro || "It is an obvious fact that professional digital marketing services are not always expensive and expensive services are not always good."}
            </p>

            <div className="content-row">
              <div className="image-box">
                <img src={missionSection?.image ? resolveImage(missionSection.image) : missionImg} alt="Mission" />
              </div>

              <div className="text-box">
                <p>
                  {missionSection?.body || `We strive quite hard towards striking just the right balance
                  between affordability and quality. Digicore Inc. believes
                  in utilizing the best of both worlds – manual and automation.
                  With a manual approach, we bring personal touch and logic
                  behind every strategy while the other approach helps us
                  evaluate and compare the results achieved.`}
                </p>
              </div>
            </div>
          </div>

          <div className="vision-box">
            <h2>
              Our <span>Vision</span>
            </h2>

            <p className="intro">
              {visionSection?.intro || "With evolving reliance on virtual platforms, every business wants to create a robust foothold in their respective market."}
            </p>

            <div className="content-row">
              <div className="text-box">
                <p>
                  {visionSection?.body || `Getting new customers and captivating their attention all the
                  time is the key to success in the market. Hence, it becomes
                  even more important for you to rank on the top of popular
                  search engines. The highly professional and dedicated team of
                  Digicore Inc. has a vision of helping their clients
                  achieve the best search engine ranking.`}
                </p>
              </div>

              <div className="image-box">
                <img src={visionSection?.image ? resolveImage(visionSection.image) : visionImg} alt="Vision" />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About