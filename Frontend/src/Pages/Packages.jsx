import React from "react";
import { useState } from "react";
import "../Styles/Packages.css";

import logo from "../assets/logo.png"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


import video from "../assets/video.webp";
import Gursimran from "../assets/gursimran-jassal.webp";
import Pawandeep from "../assets/pawandeep-singh.webp";
import Dheeraj from "../assets/dheeraj-kumar-director-cepl.webp";
import PackageBG from "../assets/seo-package.webp";


import {
  Phone,
  CheckCircle,
  Plus, Minus 
} from "lucide-react";

const plans = [
  { name: "STANDARD", keywords: "30 KEYWORDS" },
  { name: "PREMIUM", keywords: "50 KEYWORDS" },
  { name: "BUSINESS", keywords: "80 KEYWORDS" },
  { name: "PLATINUM", keywords: "150 KEYWORDS" },
];

const features = [
  {
    title: "Initial Review and Analysis",
    details: [
      "Local Optimization",
      "In-Depth Site Analysis",
      "Keyword Analysis",
      "Competitor Analysis",
      "Duplicate Content Check",
      "Baseline Ranking Check",
      "Keyword URL Mapping",
      "Broken Links Check",
      "Google Penalty Check",

    ],
  },
  {
    title: "On Page Optimization",
    details: [
      "Canonicalization",
      "Header Tags Optimization",
      "Internal Link Structuring & Optimization",
      "Optimization",
      "Existing Content Optimization",
      "Robots.txt Creation/Analysis",
      "XML Sitemap Analysis",
      "Google Webmaster Tools Set Up",
      "Google Analytics Setup",
      "Page Speed Optimization Analysis",
      "Fresh Web Content Suggestions",
      "Title & Meta Tags Optimization",
      "Image & Hyperlink Optimization",
      "Bing Webmaster Tools Set Up",
      "HTML Site Map Creation",
      "Optimization of robots.txt & Google",
      "Bot crawls",
      "Footer Optimization",
      "Website usability analysis",
      "Check Header Status, Meta Robots",
      "Google Cache of Pages",
      "Check Mobility Issues",
      "Custom 404 Page" ,
      "URL structure Analysis"





    ],
  },
  {
    title: "Content Marketing",
    details: ["Blog Writing",
              "PDF Creation",
              "Press Release Writing",
              "Guest Post Writing",
              "Article Writing",
              "Infographic Creation",
              "PPT Creation"
            ],
  },
  {
    title: "Off Page",
    details: ["Profile Creation",
              "Blog Submission",
              "Guest Post Submission",
              "Article Submission",
              "Company Profile Listing Social",
              "Bookmarking",
              "PDF/Doc Submission",
              "Video Submission (if available)",
              "Q & A Submissions*",
              "Infographic Submission*",
              "Press Release Promotion",
              "Press Release Submission",
              "Infographic Promotion",
              "Infographic Distribution",
              "PPT Submission",
              "PPT Promotion",
              "Blog Commenting"



      ],
  },
  {
    title: "Social Marketing",
    details: ["Social Bookmarking",
              "Social Sharing",
            "Web 2.0 Profile Creation",
            "Image Promotion & Submission",
            "Video Marketing & Submission"
    ],
  },
  {
    title: "SEO Report",
    details: ["Google Analytics Report", 
              "Ranking Report, Monthly",
              "Accomplishment Report",
        ],
  },
  {
    title: "Minimum Contract Duration",
    details: ["Minimum Contract Duration"],
  },
];


const testimonials = [
  {
    image: Gursimran,
    name: "Gursimran Jassal",
    designation: "Co-Founder - Skittles Productions",
    text: "We took SEO and digital services from  Digicore Inc and that really boosted our sales. I must say Ram and his team is very efficient and professional."
  },
  {
    image: Pawandeep,
    name: "Pawandeep Singh",
    designation: "CEO - Signature Visas",
    text: "Choosing  Digicore Inc was my best decision. Their team shortlisted the right keywords and within a few months most keywords started ranking on Google's first page."
  },
  {
    image: Dheeraj,
    name: "Dheeraj Kumar",
    designation: "Director - CEPL",
    text: "I approached  Digicore Inc to improve my company's online presence. After a few months, my website started generating quality business and leads."
  }
];

export default function Packages() {
  const [active, setActive] = useState(0);

   const [open, setOpen] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };
  
const getTotalRows = () => {
  let rows = [];

  features.forEach((feature, featureIndex) => {

    rows.push({
      type: "title",
      text: feature.title
    });

    if (open === featureIndex) {
      feature.details.forEach((detail) => {
        rows.push({
          type: "detail",
          text: detail
        });
      });
    }

  });

  return rows;
};

const rows = getTotalRows();
  return (
<>



<section className="banner-seo">
  <img
    src={PackageBG}
    alt="SEO Packages"
  />

  <div className="abstext2">
    <div className="container">
      <div className="textcntnr">

        <h1 className="largetext">
          Affordable SEO Packages Plans & Pricing
          Delhi, India
        </h1>

        <div className="smalltext">
          Take full advantage of  Digicore Inc’
          affordable yet professional SEO services to get
          more organic traffic on your website and grow
          your business immensely.
        </div>

        <ul>
          <li>
            ROI-Driven SEO pricing packages that assure
            you top rankings
          </li>

          <li>
            Absolute adherence to Webmaster guidelines
          </li>

          <li>
            Handpicked monthly SEO packages in India
            starting @ 15000*
          </li>
        </ul>

      </div>
    </div>
  </div>
</section>


<section className="seo-packages">
  <div className="seo-container">
    <h2 className="seo-title">
      Get the Best and Result-Oriented{" "}
      <span>SEO Packages in India and Plans with Us</span>
    </h2>

    <p className="seo-description">
      Our SEO services are quite economical when compared with others.
       Digicore Inc, as the top digital marketing company in Delhi
      offer market-centric and result-oriented SEO services. We use White
      Hat techniques to ensure that your website’s ranking grows organically.
    </p>
  </div>
</section>


<div className="pricing-container">

  {/* Left Sidebar */}
  <aside className="feature-section">
    <h1>GENERATE LEADS <br /> ONLINE</h1>
    <p>THAT WORKS FOR YOUR BUSINESS</p>

    <button className="call-btn">
      <Phone size={18} />
      <span>9818888064</span>
    </button>

   <div className="accordion-wrapper">

  {features.map((item, index) => (

    <div key={index}>

      <div
        className="accordion-header"
        onClick={() => toggleAccordion(index)}
      >

        <span>{item.title}</span>

        {open === index ? (
          <Minus size={18}/>
        ) : (
          <Plus size={18}/>
        )}

      </div>

      {open === index && (

        item.details.map((detail, i) => (

          <div
            key={i}
            className="detail-row"
          >
            {detail}
          </div>

        ))

      )}

    </div>

  ))}

</div>
  </aside>

  {/* Pricing Cards */}
  <section className="plans">
    {plans.map((plan, index) => (
      <div
        key={index}
        className={`plan-card ${
          selectedPlan === index ? "selected" : ""
        }`}
        onMouseEnter={() => setSelectedPlan(index)}
      >

        <div className="plan-header">
          <h4>{plan.name}</h4>
          <p>UPTO</p>
          <h2>{plan.keywords}</h2>
          <h5>6 MONTHS</h5>
        </div>

        <button className="enquire-btn">
          Enquire Now
        </button>

     <div className="checks">

  {rows.map((row, i) => (

    <div
      key={i}
      className={`check-row ${row.type}`}
    >
      <CheckCircle size={25}/>
    </div>

  ))}

</div>
        <button className="bottom-btn">
          Enquire Now
        </button>

      </div>
    ))}
  </section>

</div>






      <section className="packages">
      
      </section>

      <section className="whychooseus">
        <div className="container">
          <h3 className="topheading">
            <span>Fulfill Your Dream of </span>
            Number #1 Ranking <br />
            with Our Local SEO Packages
          </h3>

          <div className="shrtdesc">
            <p className="text-center">
               Digicore Inc is one of the most reliable SEO companies in
              Delhi, India. Since our inception, we have worked on numerous
              challenging projects for both domestic and international clients.
              Our growing experience, expertise, and commitment to staying ahead
              of the competition help us deliver exceptional results.
            </p>

            <p className="text-center">
              Whether you are an established market leader or a budding startup,
              generating calls and leads is essential for business success. If
              you're unsure where to begin, it's time to grow locally. Choose
              our affordable Local SEO Packages and let us enhance your
              website’s online visibility, credibility, and ability to attract
              more targeted customers.
            </p>
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
          <span>hello@digitalmarkitors.com</span>
        </div>

      </div>
    </section>

    <section className="testimonials">
      <div className="container">
        <h2 className="title">Testimonials</h2>

        <p className="subtitle">
          Check out what our clients say about our top digital marketing
          solutions
        </p>

        <div className="testimonial-wrapper">
        
          <div className="video-box">
            <img
              src={video}
              alt="Video"
            />
          </div>

        
          <div className="testimonial-content">
            <div className="profile-card">
              <div className="profile-image">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                />
              </div>

              <h4>{testimonials[active].name}</h4>

              <p>{testimonials[active].designation}</p>
            </div>

            <div className="quote-box">
              <span className="quote-left">❝</span>

              <p>{testimonials[active].text}</p>

              <span className="quote-right">❞</span>

              <div className="dots">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={active === index ? "active" : ""}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    

      
    </>
  );
}