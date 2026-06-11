import React, { useState } from "react";
import "./../Styles/WebsiteDev.css";
import webdesign1 from "../assets/webdesign1.png";
import workImg from "../assets/webdesign2.png";

import webDesignImg from "../assets/webdesign.webp";
import processImg from "../assets/webdesign4.webp"
import video from "../assets/video.webp";
import Gursimran from "../assets/gursimran-jassal.webp";
import Pawandeep from "../assets/pawandeep-singh.webp";
import Dheeraj from "../assets/dheeraj-kumar-director-cepl.webp";
import logo from "../assets/logo.webp";
import faqImg from "../assets/faq2.webp";
import Banner from "../Components/Cards/Seohero";
import heroImg from "../assets/a.png";
import eimage from "../assets/Dimage/0.png";
 import Icon1 from "../assets/h1.png";
import Icon2 from "../assets/h2.png";
import Icon3 from "../assets/h3.png";
import Icon4 from "../assets/h4.png";



import {
  FaCheck,
  FaWordpress,
  FaMagento,
} from "react-icons/fa";

import {
  SiShopify,
  SiBigcommerce,
} from "react-icons/si";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// CMS DATA
const cmsData = [
  {
    icon: <FaWordpress />,
    title: "WordPress",
    points: [
      "Powerful Plugins",
      "Attractive Themes",
      "SEO-Friendly",
    ],
  },
  {
    icon: <SiShopify />,
    title: "Shopify",
    points: [
      "Responsive Themes",
      "Best for E-Commerce Websites",
      "SEO-Friendly",
    ],
  },
  {
  icon: <FaMagento />,
  title: "Magento",
  points: [
    "Out-of-the-Box Features",
    "SEO-Friendly",
    "Cost-Effective",
  ],
},
  {
    icon: <SiBigcommerce />,
    title: "BigCommerce",
    points: [
      "Point-of-Sale Facility",
      "Intuitive Interface",
      "SEO-Friendly",
    ],
  },
];

// HELP CARDS
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



const services = [
  "Web Design",
  "Web Development",
  "Branding",
  "SEO",
  "Ecommerce",
];

const processData = [
  {
    title: "ANALYSIS",
    desc: "We sit with you to understand your business and your objectives to design modern, unique, and unparalleled design",
  },
  {
    title: "YOUR TEAM",
    desc: "After this, we prepare a plan and discuss the recommended designs with you so that you can suggest changes if any",
  },
  {
    title: "DESIGN STAGE",
    desc: "Once you approve or finalize the design, we allocate the project to our designing team",
  },
  {
    title: "DEVELOPMENT STAGE",
    desc: "When designing team completes its work, we send the project to our experienced development team for the next step",
  },
  {
    title: "LAUNCH",
    desc: "After development, we sit with you one more time to show you the final project. Once you are satisfied, we help you launch the same",
  },
];

const testimonials = [
  {
    image: Gursimran,
    name: "Gursimran Jassal",
    designation: "Co-Founder - Skittles Productions",
    text: "We took SEO and digital services from Digicore Inc. and that really boosted our sales. I must say Ram and his team is very efficient and professional."
  },
  {
    image: Pawandeep,
    name: "Pawandeep Singh",
    designation: "CEO - Signature Visas",
    text: "Choosing Digicore Inc. was my best decision. Their team shortlisted the right keywords and within a few months most keywords started ranking on Google's first page."
  },
  {
    image: Dheeraj,
    name: "Dheeraj Kumar",
    designation: "Director - CEPL",
    text: "I approached Digicore Inc. to improve my company's online presence. After a few months, my website started generating quality business and leads."
  }
];

const faqData = [
  {
    question:
      "Why should I hire a professional web design company to design my website?",
    answer:[
      "Digicore Inc. delivers website designing and development solutions that best suit your business, its targeted customers, the marketplace, and future goals",
      "We make the right use of appropriate colour scheme, text, and navigation to make your website more user-friendly",
      "To ensure optimal success, we make the use of the latest website designing trends and technologies",
      "Our website designers and developers use the techniques to make your website SEO-friendly",
      "We can help you keep your website updated and free with our webmaster services",
    ],},

  {
    question: "How long does it take to build a new website?",
    answer:
      "The duration varies from one website to another. However, on average, it will take 6-8 weeks to complete a project. The pace of a website designing and development is typically set by several factors – how much input you provide during the initial stages, how soon the website content is ready, how often and easily you are available with the feedback to make the final changes, and so on. Apart from these factors, the functionality of your website affects the speed of project completion as well. It means more complex websites take more time to design and develop. Need professional web designing services? Get in touch with us to discuss more.",
  },
  {
    question: "How much does a new website cost?",
    answer:
      "There is no specific answer to this question. The cost of a website designing is based on the different needs of the project. Every website is different and needs different components, so we design and develop bespoke websites keeping the precise business needs in mind. In the beginning, our team will ask you so many questions to assess your needs and give you the best quote based on the assessment. So, in simple words, the cost of your website designing depends on your needs.",
  },
  {
    question: "Will my business website be mobile-friendly?",
    answer:
      "Yes! Having a mobile-friendly site of your business is more important than ever. Our team works extremely hard to ensure that your site looks amazing on different devices.",
  },
  {
    question: "Will you maintain my business website for me?",
    answer:
      "Yes, we can. Digicore Inc. offer on-going support for many of its clients. Get in touch with us to know more about the services we offer to our valuable clients.",
  },
];

const Woocommerce = () => {

const [active, setActive] = useState(0);

const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div>

        <Banner
      
      title="WordPress Website Development Services"
      description="At Digicore Inc., we provide well-tailored WordPress development website to help you address the intricate content management system effortlessly. With the help of our seasoned web developers, we facilitate with you all the advanced resources including WordPress setup, custom theme selection and plugins."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
      backgroundImage={eimage}
    />



      <div className="top-content">
            <h1>
              Complete WordPress Website Development Services <strong>for Every Business</strong>
              
             
            </h1>

            <p>
Our robust custom WordPress solutions cater to a variety of corporate websites and WooCommerce stores requirements for all-sized businesses            </p>
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

      {/* WEB DESIGN SECTION */}
      <section className="web-design">
        <div className="container">
          <div className="top-content">
            <h1>
              Elevate your business growth with our affordable and custom web designing services

              
            </h1>

            <p>
              At Digicore Inc., we are focused on improving the web presence of our clients with a highly responsive website. With our cutting-edge, unique and well-planned web designing & development solutions, we ensure improved navigability, higher conversion rate, better engagement, and enhanced user experience.
            </p>
          </div>

          <div className="content-grid">
            <div className="image-section">
              <div className="line"></div>

              <img src={webdesign1} alt="Web Design" />
            </div>

            <div className="text-section">
              <h2>
                Redefine your business with our custom Wordpress web design services
                
              </h2>

              <p>
               Planning to achieve your short-term and long-term business growth goals with exclusively designed website? Partner with Digicore Inc. and connect with our experienced and proactive web designers to avail exceptional and innovative web design solutions. Our end-to-end web designing solutions are cost-effective and client-centric.
              </p>

              <p>
                We work with you collaboratively to address creative, modern and engaging web designing requirements based on your industry. Our seasoned web designers stay updated with trends and recommend the attractive web designing after competitor analysis. To help you stay ahead in the market, Digicore Inc. ensures an in-depth market research to provide you the customized web design & development solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CMS SECTION */}
      <section className="cms-section">
        <div className="container">
          <div className="cms-header">
            <h2>
              Flexible WordPress Development{" "}
              <span>with the Best tools & platforms</span>
            </h2>

            <p>
              Let your virtual face of your business, the official website appeal your audience with our exclusively recommended web design & development solutions. At Digicore Inc., we ensure that CMS or content management system of your website aligns with your business goals. This helps us in ensuring the uninterrupted and smooth performance of the website.
            </p>
          </div>

          <div className="cms-grid">
            {cmsData.map((item, index) => (
              <div className="cms-card" key={index}>
                <div className="cms-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>
                      <FaCheck />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-work">
  <div className="container">
    <div className="work-header">
      <h2>
        Our <span>Work</span>
      </h2>

      <p>
        Digital Markitor's website designing team has had the great pleasure
        of working with various high-profile and well-known clients.
      </p>
    </div>

    <div className="work-content">
      <div className="work-image">
        <img src={workImg} alt="Our Work" />
      </div>

      <div className="work-details">
        <h3>Panache Worldwide</h3>

        <ul>
          <li>Website Design</li>
          <li>Responsive Html5 & Css3</li>
          <li>Custom WordPress Development</li>
          <li>WHMCS Integration</li>
          <li>National and Local SEO</li>
        </ul>

        <a href="/" className="view-work">
          View All Work
        </a>
      </div>
    </div>
  </div>
</section>



<section className="built-section">
  <div className="built-container">
    <h2>
      Our Work Includes <span>600+ Websites Built</span>
    </h2>

    <p>
      It is because our team understands that perfect website design harmonizes
      the right layout, colours, and airtight coding work to enhance leads,
      conversions, and sales. We can take care of your business website from
      soup to nuts with our following services:
    </p>
<div className="built-grid">
  {services.map((title, index) => (
    <div className="built-card" key={index}>
      <img src={webDesignImg} alt={title} />
      <h3>{title}</h3>
    </div>
  ))}
</div>
</div>
</section>

      
<section className="connect-section">
  <div className="connect-overlay">
    <div className="connect-container">
      <div className="connect-content">
        <h2>
          Let's <span>connect</span>
        </h2>

        <p>
          Need Dynamic Web Designing Solutions? Contact us to discuss your
          needs and business objectives
        </p>
      </div>

      <form className="connect-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
</section>

<section className="process-section">
  <div className="container">
    <div className="process-header">
      <h2>
        Our Website Designing <span>Process</span>
      </h2>

      <p>
        We, Digicore Inc., take pride in our exceptional work. For us,
        designing and developing a website is not only for customer
        satisfaction but about helping our clients stand out.
      </p>
    </div>

    <div className="process-wrapper">
      <div className="process-image">
        <img src={processImg} alt="Process" />
      </div>

      <div className="process-content">
        {processData.map((item, index) => (
          <div className="process-item" key={index}>
            <div className="process-icon"></div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
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


<section className="custom-faq-section">
  <div className="custom-faq-container">
    <div className="custom-faq-header">
      <h2>FAQ</h2>

      <p>
        Have Doubts? All Your Website Designing and Development Questions
        Are Answered Here
      </p>
    </div>

    <div className="custom-faq-wrapper">
      <div className="custom-faq-left">
        <img src={faqImg} alt="FAQ" />
      </div>

      <div className="custom-faq-right">
        {faqData.map((item, index) => (
          <div className="custom-faq-card" key={index}>
            <div
              className="custom-faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>

              <span className="custom-faq-icon">
                {activeFAQ === index ? "−" : "+"}
              </span>
            </div>

            {activeFAQ === index && (
              <div className="custom-faq-answer">
                {Array.isArray(item.answer) ? (
                  <ul className="custom-faq-list">
                    {item.answer.map((point, i) => (
                      <li key={i}>
                        <FaCheck />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default Woocommerce;