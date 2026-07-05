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
  const industriesTitle = c?.industriesTitle || "Industries We Serve";
  const missionSection = c?.missionSection;
  const visionSection = c?.visionSection;

  return (
    <div className="bg-white">
      <Banner
        subtitle={hero?.subtitle}
        title={hero?.title || "B2B SEO Agency That Drives Traffic, Trust, and Conversions"}
        description={hero?.description || "To address the challenges of B2B SEO, it is ideal to partner with the trusted digital marketing agency. In order to incorporate AI-driven SEO practices, improve visibility in the digital landscape, the B2B SEO agency helps clients in attracting qualified leads. At Digicore Inc., we provide tailored experience of marketing to our clients by applying the expertise and new-age SEO practices."}
        primaryBtnText={hero?.primaryBtn?.text || "Speak to an SEO Expert"}
        secondaryBtnText={hero?.secondaryBtn?.text || "Our Services"}
        backgroundImage={hero?.image ? resolveImage(hero.image) : undefined}
      />

      {/* Overview Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[40px] max-[769px]:text-[30px] font-heading font-extrabold text-[#1c1c1e] mb-6 leading-tight">
            {aboutSection?.heading || "Our Company Overview"}
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[850px] mx-auto mb-16">
            {aboutSection?.body || `Digicore Inc. is one of the top Digital Marketing companies in India based in Kanpur. We are a complete digital marketing company that discusses and expertly applies all your strategies. Our top-notch services include everything, right from designing your business website and the best SEO services to mobile app development and online reputation management to engage your targeted and potential customers.`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-[16px] leading-[1.8] text-[#4b5563]">
              <p>
                {aboutSection?.paragraph1 || `If you are here, you already know the power and usefulness of digital marketing and SEO. With us, you can multiply that power and write a new story of success for your business. It is a fact that many times even a single glance is all you need to convert a visitor into a buyer. Here at Digicore Inc., one of the leading and affordable digital marketing service providers, we are always ready to help you leverage that opportunity.`}
              </p>
              <p>
                {aboutSection?.paragraph2 || `As a top-notch SEO company in Kanpur NCR, we consist of a team of highly dedicated professionals with many years of experience in digital marketing, SEO, SMO, content, website designing and development, and more. Our team is passionate about helping you make your business grow with leaps and bounds and giving your business website NUMBER #1 spot on the search engine results.`}
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100">
              <img 
                src={aboutSection?.image ? resolveImage(aboutSection.image) : aboutImg} 
                alt="Company Overview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Better Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-5">
             <span className="text-[#e31e24]">{betterSection?.heading || "Better than Others?"}</span>
          </h2>

          <p className="text-center text-[17px] leading-[1.8] text-[#4b5563] max-w-[800px] mx-auto mb-16">
            {betterSection?.description || `Digicore Inc. has been creating value for its domestic and global clients from the last many years. Our team of highly dedicated professionals trained in digital marketing caters to countless projects every month.`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayStats.map((item, index) => (
              <div 
                className="group bg-white rounded-[24px] p-8 border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(227,30,36,0.1)] hover:border-[#e31e24]/20 transition-all duration-300 flex flex-col items-center text-center" 
                key={item.id || index}
              >
                <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={item.icon || [dm1, dm2, dm3, dm4][index % 4]} 
                    alt={item.title} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-[18px] font-bold text-[#2b2b2e] mb-2">{item.title}</h3>
                <div className="text-[36px] font-heading font-extrabold text-[#e31e24] mb-2">{item.count}</div>
                <p className="text-[14px] leading-relaxed text-[#6b7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="w-full bg-[#1c1c1e] py-12 px-5 border-t border-b border-[#2b2b2e]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <a 
            href={`tel:${contactBanner?.phone || "9818888064"}`} 
            className="flex items-center gap-3 text-white text-[18px] hover:text-[#e31e24] transition-colors duration-200 font-semibold"
          >
            <FaPhoneAlt className="text-[#e31e24] text-xl" />
            <span>{contactBanner?.phone || "9818888064"}</span>
          </a>

          <div className="flex items-center justify-center bg-white rounded-lg px-6 py-3">
            <img
              src={contactBanner?.logo ? resolveImage(contactBanner.logo) : logo}
              alt="logo"
              className="h-24 object-contain w-auto"
            />
          </div>

          <a 
            href={`mailto:${contactBanner?.email || "support@digicore.co.in"}`} 
            className="flex items-center gap-3 text-white text-[18px] hover:text-[#e31e24] transition-colors duration-200 font-semibold"
          >
            <FaEnvelope className="text-[#e31e24] text-xl" />
            <span>{contactBanner?.email || "support@digicore.co.in"}</span>
          </a>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-[60px] h-[4px] bg-[#e31e24] mx-auto mb-[25px] rounded-[10px]"></div>

          <h2 className="text-center text-[38px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-16">
            {industriesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayIndustries.map((item, index) => (
              <div 
                className="bg-[#f8f9fa] rounded-2xl p-6 border border-slate-100 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:border-[#e31e24]/10 transition-all duration-300" 
                key={item.id || index}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fee2e2] flex items-center justify-center shrink-0">
                    <img
                      src={item.icon || seoIcon}
                      alt={item.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#2b2b2e]">{item.title}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-[#4b5563]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-24 px-5 bg-[#f4f4f5] border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto space-y-24">
          
          {/* Mission Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200">
              <img 
                src={missionSection?.image ? resolveImage(missionSection.image) : missionImg} 
                alt="Mission" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
                Our <span className="text-[#e31e24]">Mission</span>
              </h2>

              <p className="text-[18px] font-semibold text-[#2b2b2e] leading-relaxed mb-6">
                {missionSection?.intro || "It is an obvious fact that professional digital marketing services are not always expensive and expensive services are not always good."}
              </p>

              <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                {missionSection?.body || `We strive quite hard towards striking just the right balance between affordability and quality. Digicore Inc. believes in utilizing the best of both worlds – manual and automation. With a manual approach, we bring personal touch and logic behind every strategy while the other approach helps us evaluate and compare the results achieved.`}
              </p>
            </div>
          </div>

          {/* Vision Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
                Our <span className="text-[#e31e24]">Vision</span>
              </h2>

              <p className="text-[18px] font-semibold text-[#2b2b2e] leading-relaxed mb-6">
                {visionSection?.intro || "With evolving reliance on virtual platforms, every business wants to create a robust foothold in their respective market."}
              </p>

              <p className="text-[16px] leading-[1.8] text-[#4b5563]">
                {visionSection?.body || `Getting new customers and captivating their attention all the time is the key to success in the market. Hence, it becomes even more important for you to rank on the top of popular search engines. The highly professional and dedicated team of Digicore Inc. has a vision of helping their clients achieve the best search engine ranking.`}
              </p>
            </div>
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200">
              <img 
                src={visionSection?.image ? resolveImage(visionSection.image) : visionImg} 
                alt="Vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About