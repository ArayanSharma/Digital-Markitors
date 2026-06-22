import {React ,useState}from 'react'
import Banner from '../Components/Cards/Seohero'
import heroImg from "../assets/a.png"
import "../Styles/Reseller.css"
import img from "../assets/seo-reseller-program.webp"
import meetingImg from "../assets/seo-reseller-program.webp"
import benefitsImg from "../assets/seo-reseller-program.webp"

import auditIcon from "../assets/seo1.webp";
import keywordIcon from "../assets/seo2.webp";
import linkIcon from "../assets/seo3.webp";
import optimizationIcon from "../assets/seo4.webp";
import contentIcon from "../assets/seo5.webp";
import reportIcon from "../assets/seo6.webp";

import video from "../assets/video.webp";
import Gursimran from "../assets/gursimran-jassal.webp";
import Pawandeep from "../assets/pawandeep-singh.webp";
import Dheeraj from "../assets/dheeraj-kumar-director-cepl.webp";
import eimage from "../assets/BannerImg/seoreseller.png";

// Logos
import logo1 from "../assets/skittles-productions.webp";
import logo2 from "../assets/asia-pacific-institute-management.webp";
import logo3 from "../assets/skittles-productions.webp";
import logo4 from "../assets/asia-pacific-institute-management.webp";
import logo5 from "../assets/skittles-productions.webp";

// Posters
import poster1 from "../assets/skittles-productions-website.webp";
import poster2 from "../assets/asia-pacific-website.webp";
import poster3 from "../assets/skittles-productions-website.webp";
import poster4 from "../assets/asia-pacific-website.webp";
import poster5 from "../assets/skittles-productions-website.webp";



import brand1 from "../assets/brand1.webp";
import brand2 from "../assets/brand1.webp";
import brand3 from "../assets/brand1.webp";
import brand4 from "../assets/brand1.webp";
import brand5 from "../assets/brand1.webp";
import brand6 from "../assets/brand1.webp";
import brand7 from "../assets/brand1.webp";
import brand8 from "../assets/brand1.webp";
import brand9 from "../assets/brand1.webp";
import brand10 from "../assets/brand1.webp";
import brand11 from "../assets/brand1.webp";
import brand12 from "../assets/brand1.webp";
import brand13 from "../assets/brand1.webp";
import brand14 from "../assets/brand1.webp";
import brand15 from "../assets/brand1.webp";
import brand16 from "../assets/brand1.webp";
import brand17 from "../assets/brand1.webp";
import brand18 from "../assets/brand1.webp";
import seo1 from "../assets/seo1.webp";
import seo2 from "../assets/seo2.webp";
import seo3 from "../assets/seo3.webp";
import seo4 from "../assets/seo4.webp";
import seo5 from "../assets/seo5.webp";
import seo6 from "../assets/seo6.webp";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
];


import {
  FaSearch,
  FaChartLine,
  FaBullseye,
  FaFilter,
  FaArrowUp,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaSearch />,
    title: "SEO",
  },
  {
    icon: <FaChartLine />,
    title: "Improved Ranking",
  },
  {
    icon: <FaBullseye />,
    title: "Relevant Traffic",
    active: true,
  },
  {
    icon: <FaFilter />,
    title: "More Leads",
  },
  {
    icon: <FaArrowUp />,
    title: "Increased ROI",
  },
];


const services = [
  {
    image: seo1,
    title: "Local SEO Reseller",
    desc: "We will assist you in achieving dominance in the local SEO market. We will monitor your website's content, social accounts, and regional & professional directories and ensure that they are kept up to date.",
  },
  {
    image:  seo2,
    title: "White Label SEO",
    desc: "Our in-house SEO experts and copywriters adhere to a set of criteria that are designed to increase the likelihood that Google and its search partners will index our material.",
  },
  {
    image: seo3,
    title: "White Label Web Designing",
    desc: "Our team of specialists will construct user-friendly, visually appealing, and SEO-compatible websites for your customers that feature interactive elements.",
  },
  {
    image:  seo4,
    title: "Link Building",
    desc: "Our in-house SEO specialists will build backlinks from websites with a high Domain Authority by engaging in genuine outreach methods.",
  },
  {
    image: seo5,
    title: "PPC Reseller",
    desc: "We can help you bring instant traffic to your website by using pay-per-click (PPC) marketing using Google Ads.",
  },
  {
    image:  seo6,
    title: "White Label SMO",
    desc: "By sticking to the tactics devised by our in-house team of skilled social media marketers, you may boost your brand's visibility.",
  },
];             

const caseStudies = [
  {
    logo: logo1,
    poster: poster1,
    rankings: [
      { keyword: "Keyword 1", rank: 1 },
      { keyword: "Keyword 2", rank: 2 },
      { keyword: "Keyword 3", rank: 3 },
      { keyword: "Keyword 4", rank: 4 },
      { keyword: "Keyword 5", rank: 5 },
    ],
  },

  {
    logo: logo2,
    poster: poster2,
    rankings: [
      { keyword: "MBA College", rank: 1 },
      { keyword: "PGDM Delhi", rank: 2 },
      { keyword: "Best PGDM", rank: 2 },
      { keyword: "MBA Admission", rank: 3 },
      { keyword: "MBA Institute", rank: 4 },
    ],
  },

  {
    logo: logo3,
    poster: poster3,
    rankings: [
      { keyword: "PGDM in IB", rank: 1 },
      { keyword: "PGDM Banking", rank: 2 },
      { keyword: "PGDM Marketing", rank: 2 },
      { keyword: "Executive PGDM", rank: 3 },
      { keyword: "PGDM Course", rank: 5 },
    ],
  },

  {
    logo: logo4,
    poster: poster4,
    rankings: [
      { keyword: "School Delhi", rank: 1 },
      { keyword: "Best School", rank: 2 },
      { keyword: "CBSE School", rank: 2 },
      { keyword: "Admissions", rank: 3 },
      { keyword: "Top School", rank: 4 },
    ],
  },

  {
    logo: logo5,
    poster: poster5,
    rankings: [
      { keyword: "Testing Lab", rank: 1 },
      { keyword: "Analytical Lab", rank: 2 },
      { keyword: "Lab Services", rank: 3 },
      { keyword: "Calibration Lab", rank: 4 },
      { keyword: "NABL Lab", rank: 5 },
    ],
  },
];




const solutions = [
  {
    icon: auditIcon,
    title: "Website Audit",
    description:
      "Before our specialists begin to work, they first audit your clients' websites so as to make sure the right strategies are curated to help your clients attain their goals and help you STAND OUT!",
  },
  {
    icon: keywordIcon,
    title: "Keyword Research and Analysis",
    description:
      "At the core of our services are our comprehensive and painstaking research and analysis of keywords. We are better able to identify our audience with the assistance of the keywords that we target, which in turn helps us bring relevant traffic to your website.",
  },
  {
    icon: linkIcon,
    title: "Link Building",
    description:
      "It is one of the most important and effective strategies to have a positive impact on the performance of your clients' websites in the online environment. When it comes to link building, we are fully aware of both what should and should not be done.",
  },
  {
    icon: optimizationIcon,
    title: "Keyword and URL Optimization",
    description:
      "We will assist you in optimizing the keywords and URLs of your client's website in order to maximize the possibility that it will be discovered by search engines while also including keywords that are relevant to your services.",
  },
  {
    icon: contentIcon,
    title: "SEO Optimized Content",
    description:
      "The readability of the content is a crucial aspect of search engine optimization. Our team of expert content writers will generate and optimize content for your client's website to make it more readable, hence boosting the time each visitor spends on your website.",
  },
  {
    icon: reportIcon,
    title: "Reporting and Analysis",
    description:
      "Data plays an indispensable role in the success of any company. As an established SEO Reseller Company, we keep things transparent by providing you with monthly reports on analytics, visibility, and conversions.",
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

const Reseller = () => {

     const [currentCase, setCurrentCase] = useState(2);

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

    const [active, setActive] = useState(0);

  return (
    <div>

          <Banner
      subtitle="We make your brand UNMISSABLE"
      title="Turning Visibility into Growth. Turning Brands into Market Leaders"
      description="We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."
      primaryBtnText="Speak to an SEO Expert"
      secondaryBtnText="Our Services"
    backgroundImage={eimage}
    />

   <section className="seo-reseller-section">
      <div className="seo-reseller-container">
        <h2 className="seo-title">
          SEO Reseller Services & Program Available for Agencies
        </h2>

        <p className="seo-subtitle">
          Join our White Label SEO Services Program to Become a ‘Reseller’
        </p>

        <div className="seo-content">
          <p>
            When looking for a partner to provide your SEO reseller services in
            India, picking someone genuine and trustworthy is essential. The
            market is swamped with innumerable SEO reseller service providers,
            with all of them claiming to be the best in the business.
            Nevertheless, picking a business associate that you can rely on to
            do what’s right for both of you is the best choice you can make for
            your company. After all, you are looking for high-quality SEO
            reseller services that help you achieve your goals. When it comes to
            the best SEO Reseller company, Digicore Inc. tops the list.
            Digicore Inc. is one of the leading SEO reseller companies in
            India. We provide the most all-encompassing SEO reseller services.
          </p>

          <p>
            Now, you can focus on expanding your SEO agency without worrying
            about meeting your clients’ vast SEO requirements because we will
            handle all of that for you. We can help your newly founded SEO
            agency reach new heights in its development. We provide first-rate
            SEO services to a wide range of companies in a variety of industry
            sectors. We offer the best SEO reseller packages and services that
            are Reliable, Profitable, and Hassle-Free.
          </p>

          <p>
            Digicore Inc.’ team consists of qualified specialists who
            operate in the background to offer customers high-quality outcomes
            while they remain unaware of their involvement. With Digital
            Markitors, you’ll have access to the very best writers, editors,
            and publishers. If you wish to utilize first-rate white label SEO
            services in India, then Digicore Inc. should be your go-to
            company! We can help you fulfill all your customers’ needs at the
            most competitive prices!
          </p>
        </div>
      </div>
    </section>


    <section className="reseller-section">
      <div className="reseller-container">
        <h2>
          How Can We Help You Expand Your Business With Our SEO Reseller
          Services?
        </h2>

        <p>
          When looking for a partner to provide your SEO reseller services in India, picking someone genuine and trustworthy is essential. The market is swamped with innumerable SEO reseller service providers, with all of them claiming to be the best in the business. Nevertheless, picking a business associate that you can rely on to do what's right for both of you is the best choice you can make for your company. After all, you are looking for high-quality SEO reseller services that help you achieve your goals. When it comes to the best SEO Reseller company, Digicore Inc. tops the list. Digicore Inc. is one of the leading SEO reseller companies in India. We provide the most all-encompassing SEO reseller services
        </p>

        <p>
          Now, you can focus on expanding your SEO agency without worrying about meeting your clients' vast SEO requirements because we will handle all of that for you. We can help your newly founded SEO agency reach new heights in its development. We provide first-rate SEO services to a wide range of companies in a variety of industry sectors. We offer the best SEO reseller packages and services that are Reliable, Profitable, and Hassle-Free.
        </p>

        <p>
          Digicore Inc.' team consists of qualified specialists who operate in the background to offer customers high-quality outcomes while they remain unaware of their involvement. With Digicore Inc., you'll have access to the very best writers, editors, and publishers. If you wish to utilize first-rate white label SEO services in India, then Digicore Inc. should be your go-to company! We can help you fulfill all your customers' needs at the most competitive prices!
        </p>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`benefit-card ${item.active ? "active" : ""}`}
            >
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>





    <section className="reseller-services">
      <div className="container">
        <h2 className="services-heading">
          Our Result Oriented <span>SEO Reseller Services</span>
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.image}
                alt={service.title}
                className="service-icon"
              />

              <h3>{service.title}</h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="dm-banner">
  <div className="dm-banner-content">
    <div className="dm-left">
      <h2>
        We are <span>Digicore Inc.</span>
      </h2>

      <p>
        We Help Businesses Reach Their Full DIGITAL Potential by
        Implementing Customized Yet Robust SEO Services
      </p>
    </div>

    <div className="dm-right">
      <a href="tel:+919818888064" className="dm-call-btn">
        +91 9818888064
      </a>
    </div>
  </div>
</section>




<section className="seo-team-section">
      <div className="seo-team-container">
        <h2 className="seo-team-heading">
          We Have an <span>Expert and Specialized SEO Team</span>
        </h2>

        <p className="seo-team-intro">
          Our SEO Reseller team consists of highly seasoned industry
          professionals, content writers, editors, and publishers who can
          provide significant value to your company. Google search algorithms
          are always being improved to provide the greatest possible experience
          for users. Our SEO specialists stay current on all of the most recent
          algorithm upgrades to provide your clients with the best outcomes and
          help you STAND OUT! We only hire experts and seasoned SEO specialists,
          content writers, and editors in our team. Also, we conduct proper
          training so as to make sure they are well-versed with the minutest of
          the upgrades in Google algorithms. With us, you can be certain of 100%
          result driven SEO Reseller Services and Complete Transparency.
        </p>

        <div className="seo-team-content">
          <div className="seo-team-image">
            <img src={img} alt="SEO Team" />
          </div>

          <div className="seo-team-text">
            <p>
              We have the essential knowledge, experience, and expertise to
              ensure that your SEO plans operate as expected for your clients
              and help them rank higher and bring relevant traffic to their
              website regardless of their industry, business size, degree of
              competition, or goal.
            </p>

            <p>
              Our only objective is to position ourselves as India's most
              knowledgeable and trustworthy SEO agency, and by taking a unique
              approach to our work, we are able to continue delivering
              outstanding results for your business.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="seo-solutions">
      <div className="container">
        <h2 className="solutions-heading">
          OUR 360-DEGREE <span>SEO RESELLER SOLUTIONS</span>
        </h2>

        <p className="solutions-subtitle">
          We offer customized SEO Reseller solutions that are unique,
          industry-focused, and efficient in terms of cost. We have a team of
          specialists who work hard to ensure that they meet the needs of your
          precious customers in every possible way.
        </p>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-header">
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
              </div>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="seo-case-section">
  <div className="seo-case-container">
    <h2 className="seo-case-heading">Case Studies</h2>

    <p className="seo-case-description">
      We have used the best SEO practices to help our clients succeed in
      organic search marketing. Our dedicated support all round the year,
      aligned with robust SEO efforts has made it easier for their target
      customers to find them online.
    </p>

    <div className="seo-case-logos">
      {caseStudies.map((item, index) => (
        <div
          key={index}
          className={`seo-logo-circle ${
            currentCase === index ? "active" : ""
          }`}
          onClick={() => setCurrentCase(index)}
        >
          <img src={item.logo} alt={`logo-${index}`} />

          {currentCase === index && (
            <div className="seo-active-pointer"></div>
          )}
        </div>
      ))}
    </div>

    <div className="seo-case-content">
      <div className="seo-case-table">
        <h3>Rankings</h3>

        <table>
          <thead>
            <tr>
              <th>Keywords</th>
              <th>Ranking</th>
            </tr>
          </thead>

          <tbody>
            {caseStudies[currentCase].rankings.map((item, index) => (
              <tr key={index}>
                <td>{item.keyword}</td>
                <td>{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="seo-case-image">
        <img
          src={caseStudies[currentCase].poster}
          alt="Case Study"
        />
      </div>
    </div>
  </div>
</section>

    <section className="seo-outsourcing-section">
  <div className="seo-outsourcing-container">
    <h2>
      Save Your Time and Agency Cost with SEO Outsourcing
    </h2>

    <p>
      Every business wants to be on the top of search engine results. But how
      many of them actually get that spot? Maybe very little! It is because
      your presence on the 1st page completely depends on your SEO efforts and
      strategies. SEO is the most essential part of any digital marketing plan.
      It includes several things including keyword research, content
      optimization, On-page SEO, link building, analytics, and much more.
      Our industry-focused and ROI-oriented SEO services are the best to
      increase your website visibility, traffic, conversions, and revenue.
      Simply put, our SEO services will help you tell search engines who you
      are, what you are selling, why your products/services matter, etc.
    </p>

    <p>
      No other digital marketing tactic is better than SEO if done correctly.
      We are saying this because your conversion rate can be between 14% and
      28% if you choose professional SEO agency just like Digicore Inc..
      Opt for our services and we will help you leave your competitors behind
      by getting the spot on the 1st page. If you do not want to harm your
      business, drop current ranking, and keep technical issues at bay, it is
      important to stay away from wrong SEO strategies and plan.
    </p>
  </div>
</section>


<section className="other-reseller-services">
  <div className="container">
    <h2>
      OTHER RESELLER SERVICES OF Digicore Inc. IN WHICH YOU
      <br />
      MIGHT BE INTERESTED
    </h2>

    <p className="section-subtitle">
      There are unlimited benefits to opting for SEO Resellers; here are the
      TOP ONES:
    </p>

    <div className="services-content">
      {/* Left Side */}
      <div className="left-column">
        <img src={meetingImg} alt="Meeting" />

        <div className="service-item">
          <span>☑</span>
          <p>
            <strong>PPC Reseller</strong> – If you have PPC projects, don't
            think twice to outsource them to us. We are experts in managing the
            various technicalities of PPC projects to help your clients receive
            voluminous traffic and considerable sales.
          </p>
        </div>

        <div className="service-item">
          <span>☑</span>
          <p>
            <strong>Social Media Marketing Reseller</strong> – It is essential
            to leverage the potential of different social media platforms to get
            more digital visibility and engage your target audience. We manage
            the social media pages and official profiles of your clients,
            making their digital presence stronger.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-column">
        <div className="service-item">
          <span>☑</span>
          <p>
            <strong>Web Design & Development</strong> – When you have the
            responsibility to design and build websites for your clients, you
            can confidently rely on our extensive skills to deliver custom
            website designs and development services as a trusted Reseller.
            We deliver cost-effective solutions without any compromise on
            quality front.
          </p>
        </div>

        <div className="service-item">
          <span>☑</span>
          <p>
            <strong>Enterprise SEO</strong> – As a marketing agency you can
            depend on our prolific expertise in efficiently handling all aspects
            of Enterprise SEO projects. We deliver robust SEO solutions at
            enterprise level, keeping businesses highly functional at large
            scale.
          </p>
        </div>

        <div className="service-item">
          <span>☑</span>
          <p>
            You get monetary benefits. Last but not least, the monetary
            benefits. Of course, we all wish to improve our revenues, and
            opting for reputable SEO Resellers lets you have immense monetary
            benefits. Buying SEO tools is a pricey affair; with an SEO
            Reseller, you don't need to invest in expensive tools. A reputable
            SEO reseller company provides you with everything in their
            packages.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="dm-banner">
  <div className="dm-banner-content">
    <div className="dm-left">

      <p>
        We Help Businesses Reach Their Full DIGITAL Potential by
        Implementing Customized Yet Robust SEO Services
      </p>
    </div>

    <div className="dm-right">
      <a href="tel:+919818888064" className="dm-call-btn">
        +91 9818888064
      </a>
    </div>
  </div>
</section>


<section className="benefits-program-section">
  <div className="container">
    <h2 className="benefits-heading">
      THE BENEFITS OF OUR <span>SEO RESELLER PROGRAM</span>
    </h2>

    <p className="benefits-subtitle">
      Digicore Inc. offer "on-demand" SEO Reseller services. This means
      that you only pay for what you require when you require it. This, in
      turn, leads to reduced overhead expenses and increased profitability.
    </p>

    <div className="benefits-content">
      <div className="benefits-left">
        <div className="benefit-item">
          <span>☑</span>
          <p>
            <strong>Emphasis on Quality SEO Services:</strong> Quality speaks
            loudly for itself. So, we not only provide you with measurable
            results but deliver high-quality results to boost your organic
            search rankings.
          </p>
        </div>

        <div className="benefit-item">
          <span>☑</span>
          <p>
            <strong>No Technical Jargons:</strong> We do not bore our clients
            by giving them boring lectures. Rather, we let our work do the
            talking.
          </p>
        </div>

        <div className="benefit-item">
          <span>☑</span>
          <p>
            <strong>Fair and Clear Costing:</strong> Our services are affordable
            and you always get what you have paid for. We don’t believe in
            ‘sticker-shocking’ hidden charges.
          </p>
        </div>

        <div className="benefit-item">
          <span>☑</span>
          <p>
            <strong>Reliability and Transparency:</strong> In our opinion, you
            must always be in the loop to how we are propagating and
            establishing things for your business. Hence, we keep you updated
            with everything.
          </p>
        </div>

        <div className="benefit-item">
          <span>☑</span>
          <p>
            <strong>360-Degree Solutions:</strong> For us, SEO is a combination
            of art and science. Hence, we balance various things to provide you
            with the best yet long-lasting results.
          </p>
        </div>
      </div>

      <div className="benefits-right">
        <img src={benefitsImg} alt="SEO Reseller Benefits" />
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

<section className="brands-section">
      <div className="container">
        <h2 className="brands-heading">
          SOME OF THE BRANDS <span>WE WORK WITH</span>
        </h2>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand} alt={`brand-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1781175524873!5m2!1sen!2sus"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  />
</div>

      
    </div>
  )
}

export default Reseller