import ServiceCard from "../Components/Cards/ServiceCard";
import { React, useState } from 'react'
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
  FaWhatsapp,
} from "react-icons/fa";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

const BENEFIT_ICON_MAP = {
  FaSearch: <FaSearch />,
  FaChartLine: <FaChartLine />,
  FaBullseye: <FaBullseye />,
  FaFilter: <FaFilter />,
  FaArrowUp: <FaArrowUp />,
};

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
    image: seo2,
    title: "White Label SEO",
    desc: "Our in-house SEO experts and copywriters adhere to a set of criteria that are designed to increase the likelihood that Google and its search partners will index our material.",
  },
  {
    image: seo3,
    title: "White Label Web Designing",
    desc: "Our team of specialists will construct user-friendly, visually appealing, and SEO-compatible websites for your customers that feature interactive elements.",
  },
  {
    image: seo4,
    title: "Link Building",
    desc: "Our in-house SEO specialists will build backlinks from websites with a high Domain Authority by engaging in genuine outreach methods.",
  },
  {
    image: seo5,
    title: "PPC Reseller",
    desc: "We can help you bring instant traffic to your website by using pay-per-click (PPC) marketing using Google Ads.",
  },
  {
    image: seo6,
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
  const { content: pc } = usePageContent("Reseller");
  const banner = pc?.banner;
  const seoResellerIntro = pc?.seoResellerIntro;
  const resellerSection = pc?.resellerSection;
  const displayBenefits = pc?.benefits?.length
    ? pc.benefits.map((b) => ({ ...b, icon: BENEFIT_ICON_MAP[b.icon] || <FaSearch /> }))
    : benefits;
  const servicesSection = pc?.servicesSection;
  const displayServices = pc?.services?.length
    ? pc.services.map((s) => ({ ...s, icon: resolveImage(s.icon || s.image), description: s.description || s.desc }))
    : services.map((s) => ({ ...s, icon: s.image, description: s.desc }));
  const dmBanner = pc?.dmBanner;
  const seoTeam = pc?.seoTeam;
  const solutionsSection = pc?.solutionsSection;
  const displaySolutions = pc?.solutions?.length
    ? pc.solutions.map((s) => ({ ...s, icon: resolveImage(s.icon) }))
    : solutions;
  const seoCase = pc?.seoCase;
  const displayCaseStudies = seoCase?.caseStudies?.length
    ? seoCase.caseStudies.map((cs) => ({ ...cs, logo: resolveImage(cs.logo), poster: resolveImage(cs.poster) }))
    : caseStudies;
  const outsourcing = pc?.outsourcing;
  const otherServices = pc?.otherServices;

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

  const [active, setActive] = useState(0);
  const leftItemsFallback = [
    {
      title: "PPC Reseller",
      desc: "If you have PPC projects, don't think twice to outsource them to us. We are experts in managing the various technicalities of PPC projects to help your clients receive voluminous traffic and considerable sales.",
    },
    {
      title: "Social Media Marketing Reseller",
      desc: "It is essential to leverage the potential of different social media platforms to get more digital visibility and engage your target audience. We manage the social media pages and official profiles of your clients, making their digital presence stronger.",
    },
  ];
  const rightItemsFallback = [
    {
      title: "Web Design & Development",
      desc: "When you have the responsibility to design and build websites for your clients, you can confidently rely on our extensive skills to deliver custom website designs and development services as a trusted Reseller. We deliver cost-effective solutions without any compromise on quality front.",
    },
    {
      title: "Enterprise SEO",
      desc: "As a marketing agency you can depend on our prolific expertise in efficiently handling all aspects of Enterprise SEO projects. We deliver robust SEO solutions at enterprise level, keeping businesses highly functional at large scale.",
    },
    {
      title: "Monetary Benefits",
      desc: "You get monetary benefits. Last but not least, the monetary benefits. Of course, we all wish to improve our revenues, and opting for reputable SEO Resellers lets you have immense monetary benefits. Buying SEO tools is a pricey affair; with an SEO Reseller, you don't need to invest in expensive tools. A reputable SEO reseller company provides you with everything in their packages.",
    },
  ];
  const displayLeftItems = otherServices?.leftItems?.length ? otherServices.leftItems : leftItemsFallback;
  const displayRightItems = otherServices?.rightItems?.length ? otherServices.rightItems : rightItemsFallback;
  const additionalBanner = pc?.additionalBanner;
  const benefitsProgram = pc?.benefitsProgram;
  const testimonialsData = pc?.testimonials;
  const displayTestimonials = testimonialsData?.items?.length
    ? testimonialsData.items.map((i) => ({ ...i, image: resolveImage(i.image) }))
    : testimonials;
  const brandsData = pc?.brands;
  const displayBrands = brandsData?.brandLogos?.filter((b) => b?.url)?.length
    ? brandsData.brandLogos.filter((b) => b?.url).map((b) => resolveImage(b.url))
    : brands;
  const mapData = pc?.map;

  return (
    <div className="bg-white">
      <Banner
        subtitle={banner?.subtitle || "We make your brand UNMISSABLE"}
        title={banner?.title || "Turning Visibility into Growth. Turning Brands into Market Leaders"}
        description={banner?.description || "We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business."}
        primaryBtnText={banner?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={banner?.secondaryBtn?.text || "Our Services"}
        backgroundImage={banner?.backgroundImage ? resolveImage(banner.backgroundImage) : eimage}
      />

      {/* SEO Reseller Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>
          
          <h2 className="text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-2 leading-tight">
            {seoResellerIntro?.title || "SEO Reseller Services & Program Available for Agencies"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#e31e24] font-semibold max-w-[850px] mx-auto mb-10">
            {seoResellerIntro?.subtitle || "Join our White Label SEO Services Program to Become a 'Reseller'"}
          </p>

          <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6 text-left max-w-[950px] mx-auto">
            {seoResellerIntro?.paragraphs?.length ? (
              seoResellerIntro.paragraphs.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Reseller Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-[15px] leading-tight">
            {resellerSection?.heading || "How Can We Help You Expand Your Business With Our SEO Reseller Services?"}
          </h2>

          <div className="w-[70px] h-[4px] bg-[#e31e24] mx-auto mb-[30px] rounded-[20px]"></div>

          <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6 max-w-[950px] mx-auto mb-16">
            {resellerSection?.paragraphs?.length ? (
              resellerSection.paragraphs.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <>
                <p>
                  When looking for a partner to provide your SEO reseller services in India, picking someone genuine and trustworthy is essential. The market is swamped with innumerable SEO reseller service providers, with all of them claiming to be the best in the business. Nevertheless, picking a business associate that you can rely on to do what's right for both of you is the best choice you can make for your company. After all, you are looking for high-quality SEO reseller services that help you achieve your goals. When it comes to the best SEO Reseller company, Digicore Inc. tops the list. Digicore Inc. is one of the leading SEO reseller companies in India. We provide the most all-encompassing SEO reseller services.
                </p>

                <p>
                  Now, you can focus on expanding your SEO agency without worrying about meeting your clients' vast SEO requirements because we will handle all of that for you. We can help your newly founded SEO agency reach new heights in its development. We provide first-rate SEO services to a wide range of companies in a variety of industry sectors. We offer the best SEO reseller packages and services that are Reliable, Profitable, and Hassle-Free.
                </p>

                <p>
                  Digicore Inc.' team consists of qualified specialists who operate in the background to offer customers high-quality outcomes while they remain unaware of their involvement. With Digicore Inc., you'll have access to the very best writers, editors, and publishers. If you wish to utilize first-rate white label SEO services in India, then Digicore Inc. should be your go-to company! We can help you fulfill all your customers' needs at the most competitive prices!
                </p>
              </>
            )}
          </div>

          <div className="flex justify-center gap-6 flex-wrap pt-4 max-w-[1100px] mx-auto">
            {displayBenefits.map((item, index) => (
              <div
                key={index}
                className={`group w-[190px] h-[190px] rounded-full bg-white border border-slate-200 flex flex-col items-center justify-center text-center p-4 box-border relative overflow-hidden cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-[#e31e24] hover:border-[#e31e24] hover:shadow-[0_12px_25px_rgba(227,30,36,0.25)] hover:-translate-y-1.5 ${
                  item.active ? "border-[#e31e24]/30 shadow-[0_10px_25px_rgba(227,30,36,0.08)]" : ""
                }`}
              >
                <div className="relative z-[2] text-[#e31e24] text-3xl mb-3 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="relative z-[2] text-center font-bold text-slate-800 text-[14px] leading-tight m-0 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-[100px] px-5 bg-[#f4f4f5] text-center border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px] max-[769px]:w-[50px] max-[769px]:mb-[20px]"></div>

          <h2 className="text-[48px] max-[993px]:text-[38px] max-[769px]:text-[30px] leading-[1.1] text-[#1c1c1e] mb-[25px] font-heading font-extrabold">
            {servicesSection?.heading || "Our Services"}
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-[60px]">
            {servicesSection?.description || "We offer customized solutions to help our clients engage their audience and build a strong brand presence across all platforms."}
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {displayServices.map((service, index) => (
              <ServiceCard
                key={service.id || index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative overflow-hidden w-full py-20 px-5 bg-gradient-to-br from-[#1c1c1e] to-slate-900 border-t border-b border-[#2b2b2e]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-white leading-tight">
              {dmBanner?.heading ? (
                dmBanner.heading
              ) : (
                <>
                  We are <span className="text-[#e31e24]">Digicore Inc.</span>
                </>
              )}
            </h2>
            <p className="text-[17px] text-slate-300 max-w-2xl leading-relaxed">
              {dmBanner?.description || "We Help Businesses Reach Their Full DIGITAL Potential by Implementing Customized Yet Robust SEO Services"}
            </p>
          </div>

          <div className="shrink-0">
            <a 
              href={dmBanner?.button?.link || "https://wa.me/919818888064"} 
              className="relative overflow-hidden inline-flex items-center gap-2 text-[#22c55e] font-bold px-[38px] py-[16px] rounded-lg bg-white border border-[#22c55e]/25 shadow-[0_6px_20px_rgba(34,197,94,0.16)] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a] hover:scale-[1.03] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
              <span>{dmBanner?.button?.text || "+91 9818888064"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Team Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {seoTeam?.heading ? (
              seoTeam.heading
            ) : (
              <>
                We Have an <span className="text-[#e31e24]">Expert and Specialized SEO Team</span>
              </>
            )}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[950px] mx-auto mb-16">
            {seoTeam?.intro || "Our SEO Reseller team consists of highly seasoned industry professionals, content writers, editors, and publishers who can provide significant value to your company. Google search algorithms are always being improved to provide the greatest possible experience for users. Our SEO specialists stay current on all of the most recent algorithm upgrades to provide your clients with the best outcomes and help you STAND OUT! We only hire experts and seasoned SEO specialists, content writers, and editors in our team. Also, we conduct proper training so as to make sure they are well-versed with the minutest of the upgrades in Google algorithms. With us, you can be certain of 100% result driven SEO Reseller Services and Complete Transparency."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100">
              <img 
                src={seoTeam?.image ? resolveImage(seoTeam.image) : img} 
                alt="SEO Team" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="text-[16px] leading-[1.8] text-[#4b5563] space-y-6">
              {seoTeam?.paragraphs?.length ? (
                seoTeam.paragraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Solutions Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {solutionsSection?.heading ? (
              solutionsSection.heading
            ) : (
              <>
                OUR 360-DEGREE <span className="text-[#e31e24]">SEO RESELLER SOLUTIONS</span>
              </>
            )}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {solutionsSection?.subtitle || "We offer customized SEO Reseller solutions that are unique, industry-focused, and efficient in terms of cost. We have a team of specialists who work hard to ensure that they meet the needs of your precious customers in every possible way."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displaySolutions.map((item, index) => (
              <div 
                className="group bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(227,30,36,0.1)] hover:border-[#e31e24]/20 transition-all duration-300 flex flex-col items-start text-left" 
                key={index}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#fee2e2] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#2b2b2e] leading-tight">{item.title}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-[#4b5563]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Case Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {seoCase?.heading || "Case Studies"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-12">
            {seoCase?.description || "We have used the best SEO practices to help our clients succeed in organic search marketing. Our dedicated support all round the year, aligned with robust SEO efforts has made it easier for their target customers to find them online."}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {displayCaseStudies.map((item, index) => (
              <div
                key={index}
                className={`relative w-20 h-20 rounded-full border flex items-center justify-center p-3 cursor-pointer transition-all duration-300 ${
                  currentCase === index 
                    ? "border-[#e31e24] bg-white shadow-[0_8px_20px_rgba(227,30,36,0.15)] scale-110" 
                    : "border-slate-200 bg-slate-50 hover:border-[#e31e24]/40 hover:bg-white"
                }`}
                onClick={() => setCurrentCase(index)}
              >
                <img src={item.logo} alt={`logo-${index}`} className="max-w-full max-h-full object-contain" />
                {currentCase === index && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#e31e24] rotate-45"></div>
                )}
              </div>
            ))}
          </div>

          {displayCaseStudies[currentCase] && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="space-y-6">
                <h3 className="text-[24px] font-bold text-slate-800 border-b border-slate-200 pb-3">Rankings</h3>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold text-[14px]">
                        <th className="px-6 py-4">Keywords</th>
                        <th className="px-6 py-4">Ranking</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {displayCaseStudies[currentCase].rankings?.map((item, index) => (
                        <tr key={index} className="text-slate-700 text-sm hover:bg-slate-50/50 transition-colors duration-200">
                          <td className="px-6 py-3.5 font-medium">{item.keyword}</td>
                          <td className="px-6 py-3.5 text-[#e31e24] font-bold">{item.rank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-200/60 aspect-[16/10]">
                <img
                  src={displayCaseStudies[currentCase].poster}
                  alt="Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SEO Outsourcing Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-10 leading-tight">
            {outsourcing?.heading || "Save Your Time and Agency Cost with SEO Outsourcing"}
          </h2>

          <div className="text-[17px] leading-[1.8] text-[#4b5563] space-y-6 max-w-[950px] mx-auto text-left">
            {outsourcing?.paragraphs?.length ? (
              outsourcing.paragraphs.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Other Reseller Services Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4 leading-tight">
            {otherServices?.heading ? (
              otherServices.heading
            ) : (
              <>
                OTHER RESELLER SERVICES OF Digicore Inc. IN WHICH YOU
                <br />
                MIGHT BE INTERESTED
              </>
            )}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#e31e24] font-semibold max-w-[850px] mx-auto mb-16">
            {otherServices?.subtitle || "There are unlimited benefits to opting for SEO Resellers; here are the TOP ONES:"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100 mb-8">
                <img 
                  src={otherServices?.image ? resolveImage(otherServices.image) : meetingImg} 
                  alt="Meeting" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <ul className="space-y-4">
                {displayLeftItems.map((item, i) => (
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]" key={i}>
                    <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                    <span>
                      <strong className="text-slate-800 font-bold">{item.title}</strong> – {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side */}
            <ul className="space-y-4 lg:pt-2">
              {displayRightItems.map((item, i) => (
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]" key={i}>
                  <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                  <span>
                    <strong className="text-slate-800 font-bold">{item.title}</strong> – {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Additional CTA Banner Section */}
      <section className="relative overflow-hidden w-full py-20 px-5 bg-gradient-to-br from-[#1c1c1e] to-slate-900 border-t border-b border-[#2b2b2e]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center lg:text-left space-y-4">
            <p className="text-[20px] font-bold text-white max-w-3xl leading-relaxed">
              {additionalBanner?.description || "We Help Businesses Reach Their Full DIGITAL Potential by Implementing Customized Yet Robust SEO Services"}
            </p>
          </div>

          <div className="shrink-0">
            <a 
              href={additionalBanner?.button?.link || "https://wa.me/919818888064"} 
              className="relative overflow-hidden inline-flex items-center gap-2 text-[#22c55e] font-bold px-[34px] py-[15px] rounded-lg bg-white border border-[#22c55e]/25 shadow-[0_6px_20px_rgba(34,197,94,0.16)] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a] hover:scale-[1.03] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
              <span>{additionalBanner?.button?.text || "+91 9818888064"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Program Section */}
      <section className="w-full py-24 px-5 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {benefitsProgram?.heading ? (
              benefitsProgram.heading
            ) : (
              <>
                THE BENEFITS OF OUR <span className="text-[#e31e24]">SEO RESELLER PROGRAM</span>
              </>
            )}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {benefitsProgram?.subtitle || "Digicore Inc. offer \"on-demand\" SEO Reseller services. This means that you only pay for what you require when you require it. This, in turn, leads to reduced overhead expenses and increased profitability."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <ul className="space-y-4">
                {benefitsProgram?.items?.length ? (
                  benefitsProgram.items.map((item, i) => (
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]" key={i}>
                      <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                      <span>{item.text}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]">
                      <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                      <span>
                        <strong className="text-slate-800 font-bold">Emphasis on Quality SEO Services:</strong> Quality speaks loudly for itself. So, we not only provide you with measurable results but deliver high-quality results to boost your organic search rankings.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]">
                      <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                      <span>
                        <strong className="text-slate-800 font-bold">No Technical Jargons:</strong> We do not bore our clients by giving them boring lectures. Rather, we let our work do the talking.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]">
                      <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                      <span>
                        <strong className="text-slate-800 font-bold">Fair and Clear Costing:</strong> Our services are affordable and you always get what you have paid for. We don’t believe in ‘sticker-shocking’ hidden charges.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]">
                      <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                      <span>
                        <strong className="text-slate-800 font-bold">Reliability and Transparency:</strong> In our opinion, you must always be in the loop to how we are propagating and establishing things for your business. Hence, we keep you updated with everything.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4b5563]">
                      <span className="text-[#e31e24] text-lg font-bold shrink-0 mt-0.5">✔</span>
                      <span>
                        <strong className="text-slate-800 font-bold">360-Degree Solutions:</strong> For us, SEO is a combination of art and science. Hence, we balance various things to provide you with the best yet long-lasting results.
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100">
              <img 
                src={benefitsProgram?.image ? resolveImage(benefitsProgram.image) : benefitsImg} 
                alt="SEO Reseller Benefits" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
            {testimonialsData?.title || "Testimonials"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[900px] mx-auto mb-16">
            {testimonialsData?.subtitle || "Check out what our clients say about our top digital marketing solutions"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200 aspect-[16/10]">
              <img
                src={testimonialsData?.videoImage ? resolveImage(testimonialsData.videoImage) : video}
                alt="Video"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#e31e24] shadow-[0_4px_15px_rgba(227,30,36,0.15)]">
                  <img
                    src={displayTestimonials[active].image}
                    alt={displayTestimonials[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-slate-800 leading-tight">{displayTestimonials[active].name}</h4>
                  <p className="text-sm text-[#e31e24] mt-1 font-semibold">{displayTestimonials[active].designation}</p>
                </div>
              </div>

              <div className="relative pt-6">
                <span className="absolute -top-3 left-0 text-[60px] text-[#e31e24]/10 font-serif leading-none select-none">“</span>
                <p className="text-[16px] leading-[1.8] text-slate-600 relative z-10 italic pl-6">{displayTestimonials[active].text}</p>
                <span className="absolute bottom-0 right-0 text-[60px] text-[#e31e24]/10 font-serif leading-none select-none translate-y-6">”</span>
              </div>

              <div className="flex justify-center gap-2 pt-6">
                {displayTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      active === index ? "bg-[#e31e24] w-6" : "bg-[#e31e24]/20 hover:bg-[#e31e24]/40"
                    }`}
                    onClick={() => setActive(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full py-16 px-5 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-12">
            {brandsData?.heading ? (
              brandsData.heading
            ) : (
              <>
                SOME OF THE BRANDS <span className="text-[#e31e24]">WE WORK WITH</span>
              </>
            )}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {displayBrands.map((brand, index) => (
              <div className="h-20 flex items-center justify-center" key={index}>
                <img src={brand} alt={`brand-${index + 1}`} className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-[450px] relative border-t border-slate-200">
        <iframe
          src={mapData?.embedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1781175524873!5m2!1sen!2sus"}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}

export default Reseller;
