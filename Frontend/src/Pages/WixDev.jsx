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
import eimage from "../assets/BannerImg/WixDevelopment.png";
 
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
import { usePageContent, resolveImage } from "../hooks/usePageContent";

const CMS_ICON_MAP = {
  WordPress: <FaWordpress />,
  Shopify: <SiShopify />,
  Magento: <FaMagento />,
  BigCommerce: <SiBigcommerce />,
};

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

const WixDev = () => {

const [active, setActive] = useState(0);

const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const { content: c } = usePageContent("Wix-Development");
  const hero = c?.hero;
  const topContent = c?.topContent;
  const displayHelpCards = c?.helpCards?.length
    ? c.helpCards.map((i) => ({ ...i, icon: resolveImage(i.icon) }))
    : helpCards;
  const webDesign = c?.webDesign;
  const cmsSection = c?.cmsSection;
  const displayCms = c?.cmsData?.length
    ? c.cmsData.map((item) => ({ ...item, icon: CMS_ICON_MAP[item.icon] || <FaWordpress /> }))
    : cmsData;
  const ourWork = c?.ourWork;
  const builtSection = c?.builtSection;
  const displayServices = c?.services?.length
    ? c.services.map((s) => ({ title: s.title, image: s.image ? resolveImage(s.image) : webDesignImg }))
    : services.map((title) => ({ title, image: webDesignImg }));
  const connectSection = c?.connectSection;
  const processHeader = c?.processHeader;
  const displayProcessData = c?.processData?.length ? c.processData : processData;
  const testimonialHeader = c?.testimonialHeader;
  const displayTestimonials = c?.testimonials?.length
    ? c.testimonials.map((i) => ({ ...i, image: resolveImage(i.image) }))
    : testimonials;
  const contactBanner = c?.contactBanner;
  const faqHeader = c?.faqHeader;
  const displayFaq = c?.faqData?.length
    ? c.faqData.map((item) => ({
        question: item.question,
        answer: item.isList ? item.answerList || [] : item.answer,
      }))
    : faqData;

  return (
    <div>

        <Banner

      title={hero?.title || "WordPress Website Development Services"}
      description={hero?.description || "At Digicore Inc., we provide well-tailored WordPress development website to help you address the intricate content management system effortlessly. With the help of our seasoned web developers, we facilitate with you all the advanced resources including WordPress setup, custom theme selection and plugins."}
      primaryBtnText={hero?.primaryBtn?.text || "Speak to an SEO Expert"}
      secondaryBtnText={hero?.secondaryBtn?.text || "Our Services"}
      backgroundImage={hero?.backgroundImage ? resolveImage(hero.backgroundImage) : eimage}
    />



      <div className="top-content">
            <h1>
              Complete WordPress Website Development Services <strong>{topContent?.title || "for Every Business"}</strong>


            </h1>

            <p>
              {topContent?.description || "Our robust custom WordPress solutions cater to a variety of corporate websites and WooCommerce stores requirements for all-sized businesses"}
            </p>
          </div>

     <section className="bg-[#f8fafc] py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {displayHelpCards.map((item, index) => (
        <div
          className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          key={item.id || index}
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff5f5]">
            <img
              src={item.icon}
              alt={item.title}
              className="h-8 w-8 object-contain"
            />
          </div>

          <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WEB DESIGN SECTION */}
      <section className="web-design">
        <div className="container">
          <div className="top-content">
            <h1>
              {webDesign?.title || "Elevate your business growth with our affordable and custom web designing services"}


            </h1>

            <p>
              {webDesign?.description || "At Digicore Inc., we are focused on improving the web presence of our clients with a highly responsive website. With our cutting-edge, unique and well-planned web designing & development solutions, we ensure improved navigability, higher conversion rate, better engagement, and enhanced user experience."}
            </p>
          </div>

          <div className="content-grid">
            <div className="image-section">
              <div className="line"></div>

              <img src={webDesign?.image ? resolveImage(webDesign.image) : webdesign1} alt="Web Design" />
            </div>

            <div className="text-section">
              <h2>
                {webDesign?.title2 || "Redefine your business with our custom Wordpress web design services"}

              </h2>

              <p>
                {webDesign?.bodyText1 || "Planning to achieve your short-term and long-term business growth goals with exclusively designed website? Partner with Digicore Inc. and connect with our experienced and proactive web designers to avail exceptional and innovative web design solutions. Our end-to-end web designing solutions are cost-effective and client-centric."}
              </p>

              <p>
                {webDesign?.bodyText2 || "We work with you collaboratively to address creative, modern and engaging web designing requirements based on your industry. Our seasoned web designers stay updated with trends and recommend the attractive web designing after competitor analysis. To help you stay ahead in the market, Digicore Inc. ensures an in-depth market research to provide you the customized web design & development solutions."}
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
              <span>{cmsSection?.title || "with the Best tools & platforms"}</span>
            </h2>

            <p>
              {cmsSection?.description || "Let your virtual face of your business, the official website appeal your audience with our exclusively recommended web design & development solutions. At Digicore Inc., we ensure that CMS or content management system of your website aligns with your business goals. This helps us in ensuring the uninterrupted and smooth performance of the website."}
            </p>
          </div>

          <div className="cms-grid">
            {displayCms.map((item, index) => (
              <div className="cms-card" key={item.id || index}>
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
        Our <span>{ourWork?.title || "Work"}</span>
      </h2>

      <p>
        {ourWork?.description || "Digital Markitor's website designing team has had the great pleasure of working with various high-profile and well-known clients."}
      </p>
    </div>

    <div className="work-content">
      <div className="work-image">
        <img src={ourWork?.image ? resolveImage(ourWork.image) : workImg} alt="Our Work" />
      </div>

      <div className="work-details">
        <h3>{ourWork?.workTitle || "Panache Worldwide"}</h3>

        <ul>
          {ourWork?.bullets?.length ? (
            ourWork.bullets.map((b, i) => <li key={i}>{b}</li>)
          ) : (
            <>
              <li>Website Design</li>
              <li>Responsive Html5 & Css3</li>
              <li>Custom WordPress Development</li>
              <li>WHMCS Integration</li>
              <li>National and Local SEO</li>
            </>
          )}
        </ul>

        <a href={ourWork?.button?.link || "/"} className="view-work">
          {ourWork?.button?.text || "View All Work"}
        </a>
      </div>
    </div>
  </div>
</section>



<section className="built-section">
  <div className="built-container">
    <h2>
      Our Work Includes <span>{builtSection?.title || "600+ Websites Built"}</span>
    </h2>

    <p>
      {builtSection?.description || "It is because our team understands that perfect website design harmonizes the right layout, colours, and airtight coding work to enhance leads, conversions, and sales. We can take care of your business website from soup to nuts with our following services:"}
    </p>
<div className="built-grid">
  {displayServices.map((item, index) => (
    <div className="built-card" key={item.id || index}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  ))}
</div>
</div>
</section>

      


<section className="process-section">
  <div className="container">
    <div className="process-header">
      <h2>
        Our Website Designing <span>{processHeader?.title || "Process"}</span>
      </h2>

      <p>
        {processHeader?.description || "We, Digicore Inc., take pride in our exceptional work. For us, designing and developing a website is not only for customer satisfaction but about helping our clients stand out."}
      </p>
    </div>

    <div className="process-wrapper">
      <div className="process-image">
        <img src={processHeader?.image ? resolveImage(processHeader.image) : processImg} alt="Process" />
      </div>

      <div className="process-content">
        {displayProcessData.map((item, index) => (
          <div className="process-item" key={item.id || index}>
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
        <h2 className="title">{testimonialHeader?.title || "Testimonials"}</h2>

        <p className="subtitle">
          {testimonialHeader?.subtitle || "Check out what our clients say about our top digital marketing solutions"}
        </p>

        <div className="testimonial-wrapper">

          <div className="video-box" style={{ overflow: "hidden" }}>
            {testimonialHeader?.videoUpload || (testimonialHeader?.videoUrl && !testimonialHeader.videoUrl.includes("youtube.com") && !testimonialHeader.videoUrl.includes("youtu.be")) ? (
              <video
                src={testimonialHeader?.videoUpload ? resolveImage(testimonialHeader.videoUpload) : testimonialHeader?.videoUrl}
                controls
                className="w-full h-full object-cover"
                poster={testimonialHeader?.videoImage ? resolveImage(testimonialHeader.videoImage) : video}
                style={{ width: "100%", height: "100%", borderRadius: "20px", display: "block", minHeight: "280px" }}
              />
            ) : testimonialHeader?.videoUrl ? (
              <iframe
                src={testimonialHeader.videoUrl.includes("embed") ? testimonialHeader.videoUrl : testimonialHeader.videoUrl.replace("watch?v=", "embed/")}
                title="Testimonial Video"
                className="w-full h-full"
                allowFullScreen
                style={{ width: "100%", height: "100%", minHeight: "280px", border: "none", borderRadius: "20px" }}
              />
            ) : (
              <img
                src={testimonialHeader?.videoImage ? resolveImage(testimonialHeader.videoImage) : video}
                alt="Video"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              />
            )}
          </div>


          <div className="testimonial-content">
            <div className="profile-card">
              <div className="profile-image">
                <img
                  src={displayTestimonials[active].image}
                  alt={displayTestimonials[active].name}
                />
              </div>

              <h4>{displayTestimonials[active].name}</h4>

              <p>{displayTestimonials[active].designation}</p>
            </div>

            <div className="quote-box">
              <span className="quote-left">❝</span>

              <p>{displayTestimonials[active].text}</p>

              <span className="quote-right">❞</span>

              <div className="dots">
                {displayTestimonials.map((_, index) => (
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


<section className="custom-faq-section">
  <div className="custom-faq-container">
    <div className="custom-faq-header">
      <h2>{faqHeader?.title || "FAQ"}</h2>

      <p>
        {faqHeader?.subtitle || "Have Doubts? All Your Website Designing and Development Questions Are Answered Here"}
      </p>
    </div>

    <div className="custom-faq-wrapper">
      <div className="custom-faq-left">
        <img src={faqHeader?.image ? resolveImage(faqHeader.image) : faqImg} alt="FAQ" />
      </div>

      <div className="custom-faq-right">
        {displayFaq.map((item, index) => (
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

export default WixDev;