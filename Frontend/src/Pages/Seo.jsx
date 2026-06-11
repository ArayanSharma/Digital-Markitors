

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
import contactImg from "../assets/contact.webp";
import logo from "../assets/logo.webp"; 
import seoIcon from "../assets/seo1.webp";
import missionImg from "../assets/mission.webp";
import visionImg from "../assets/vision.webp";



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
  return (
    <div>

      <Hero2 />
      <section className="sectionone">
      <div className="container">

        <h1 className="topheading">
          <span>Company</span> Overview
        </h1>

        <div className="shrtdesc">
          <p className="text-center">
            Digicore Inc. is one of the top Digital Marketing companies in India
            based in Kanpur. We are a complete digital marketing company that
            discusses and expertly applies all your strategies. Our top-notch
            services include everything, right from designing your business website
            and the best SEO services to mobile app development and online
            reputation management to engage your targeted and potential customers.
          </p>
        </div>

        <div className="space"></div>

        <div className="overview-row">

      
          <div className="overview-content">

            <p>
              If you are here, you already know the power and usefulness of
              digital marketing and SEO. With us, you can multiply that power
              and write a new story of success for your business. It is a fact
              that many times even a single glance is all you need to convert a
              visitor into a buyer. Here at Digicore Inc., one of the
              leading and affordable digital marketing service providers, we are
              always ready to help you leverage that opportunity.
            </p>

            <p>
              As a top-notch SEO company in Kanpur NCR, we consist of a team of
              highly dedicated professionals with years of experience in digital
              marketing, SEO, SMO, content creation, website designing,
              development, and much more. Our team is passionate about helping
              your business grow and achieve the number one position in search
              engine rankings.
            </p>

          </div>

      
          <div className="overview-image">
            <img src={aboutImg} alt="Company Overview" />
          </div>

        </div>

      </div>
    </section>



    <section className="wydmbc">
  <div className="container">

    <h2 className="wydm-title">
      What Makes Us <span>Better than Others?</span>
    </h2>

    <p className="wydm-desc">
      Digicore Inc. has been creating value for its domestic and global
      clients from the last many years. Our team of highly dedicated
      professionals trained in digital marketing caters to countless projects
      every month.
    </p>

    <div className="wydm-grid">

      <div className="wydm-item">
        <img src={dm1} alt="Client" />
        <h3>Client</h3>
        <div className="count-box">100+</div>
        <p>
          We are serving our flawless digital marketing services and
          impressive solutions to more than 165 clients worldwide.
        </p>
      </div>

      <div className="wydm-item">
        <img src={dm2} alt="Experience" />
        <h3>Experience</h3>
        <div className="count-box">10+</div>
        <p>
          Digicore Inc. is one of the leading market players with years
          of experience in digital marketing and related practices.
        </p>
      </div>

      <div className="wydm-item">
        <img src={dm3} alt="Projects" />
        <h3>Delivered Project</h3>
        <div className="count-box">100+</div>
        <p>
          Our team works from soup to nuts. We have successfully delivered
          more than 100 projects till now.
        </p>
      </div>

      <div className="wydm-item">
        <img src={dm4} alt="Offices" />
        <h3>Offices</h3>
        <div className="count-box">3+</div>
        <p>
          Our services are not restricted to one place only. We have branch
          offices in Kanpur, Noida and Lucknow.
        </p>
      </div>

    </div>

  </div>
</section>



<section className="contact-banner">
      <div className="contact-wrapper">

        <div className="contact-left">
          <FaPhoneAlt />
          <span>9818888064</span>
        </div>

        <div className="contact-center">
          <img src={logo} alt="logo" />
        </div>

        <div className="contact-right">
          <FaEnvelope />
          <span>support@digicore.co.in</span>
        </div>

      </div>
    </section>


    <section className="industries-section">
      <div className="container">
        <h2 className="section-title">
          Industries <span>We Serve</span>
        </h2>

        <div className="industries-grid ">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-header">
                <img
                  src={seoIcon}
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
        It is an obvious fact that professional digital marketing services
        are not always expensive and expensive services are not always good.
      </p>

      <div className="content-row">
        <div className="image-box">
          <img src={missionImg} alt="Mission" />
        </div>

        <div className="text-box">
          <p>
            We strive quite hard towards striking just the right balance
            between affordability and quality. Digicore Inc. believes
            in utilizing the best of both worlds – manual and automation.
            With a manual approach, we bring personal touch and logic
            behind every strategy while the other approach helps us
            evaluate and compare the results achieved.
          </p>
        </div>
      </div>
    </div>

    <div className="vision-box">
      <h2>
        Our <span>Vision</span>
      </h2>

      <p className="intro">
        With evolving reliance on virtual platforms, every business wants
        to create a robust foothold in their respective market.
      </p>

      <div className="content-row">
        <div className="text-box">
          <p>
            Getting new customers and captivating their attention all the
            time is the key to success in the market. Hence, it becomes
            even more important for you to rank on the top of popular
            search engines. The highly professional and dedicated team of
            Digicore Inc. has a vision of helping their clients
            achieve the best search engine ranking.
          </p>
        </div>

        <div className="image-box">
          <img src={visionImg} alt="Vision" />
        </div>
      </div>
    </div>

  </div>
</section>

    </div>
  )
}

export default About
