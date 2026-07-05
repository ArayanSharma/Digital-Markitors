import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import menuImg from "../assets/menu-post.webp";
import menuImg2 from "../assets/menu-post2.webp";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";



const normalizeMediaUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  if (/^https?:\/\//.test(url)) return url;
  if (url.startsWith("/")) return `${API}${url}`;
  if (url.startsWith("uploads/")) return `${API}/${url}`;
  if (url.startsWith("./uploads/")) return `${API}/${url.slice(2)}`;
  if (url.startsWith("../uploads/")) return `${API}/${url.slice(3)}`;
  return url;
};

/* Map platform names to icon components for social links */
const socialIconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
};

const defaultHeaderData = {
  logo: { url: logo, alt: "Digicore Inc.", link: "/" },
  phone: "+91 9818888064",
  email: "hello@digitalmarkitors.com",
  ctaButton: { label: "Free Consultation", link: "/contact" },
  socialLinks: [
    { id: "fb", platform: "Facebook", url: "https://www.facebook.com/digitalmarkitors/" },
    { id: "tw", platform: "Twitter", url: "https://x.com/digitalmarkitor" },
    { id: "li", platform: "LinkedIn", url: "https://www.linkedin.com/company/digitalmarkitors/" },
    { id: "ig", platform: "Instagram", url: "https://www.instagram.com/digitalmarkitorsofficial/" },
  ],
  rootTabs: [
    {
      id: "company",
      label: "Company",
      isActive: true,
      promoImage: { url: menuImg, alt: "", link: "" },
      items: [
        { id: "about", label: "About Us", link: "/about", isActive: true },
        { id: "results", label: "SEO Results", link: "/seo-results", isActive: true },
        { id: "packages", label: "Packages", link: "/packages", isActive: true },
        { id: "career", label: "Career", link: "/career", isActive: true },
      ],
    },
    {
      id: "our-services",
      label: "Our Services",
      isActive: true,
      categories: [
        { id: "seo", name: "SEO", isActive: true, items: [], promoImage: { url: menuImg2, alt: "", link: "" } },
        { id: "smo", name: "SMO", isActive: true, items: [], promoImage: { url: menuImg, alt: "", link: "" } },
        { id: "performance", name: "Performance Marketing", isActive: true, items: [], promoImage: { url: menuImg2, alt: "", link: "" } },
        { id: "web", name: "Web Design", isActive: true, items: [], promoImage: { url: menuImg2, alt: "", link: "" } },
        { id: "orm", name: "ORM", isActive: true, items: [], promoImage: { url: menuImg2, alt: "", link: "" } },
      ],
    },
    {
      id: "industry",
      label: "Industry",
      isActive: true,
      promoImage: { url: menuImg, alt: "", link: "" },
      items: [
        { id: "education", label: "Education", link: "/Education", isActive: true },
        { id: "healthcare", label: "Healthcare", link: "/Healthcare", isActive: true },
        { id: "b2b", label: "B2B", link: "/B2B", isActive: true },
        { id: "hospitality", label: "Hospitality", link: "/Hospitality", isActive: true },
        { id: "ecommerce", label: "E-Commerce", link: "/E-Commerce", isActive: true },
        { id: "travel", label: "Travel", link: "/Travel", isActive: false },
        { id: "financial", label: "Financial & Professional", link: "/Financial-&-Professional", isActive: true },
      ],
    },
    { id: "blog", label: "Blog", type: "direct", isActive: true, directLink: "/blogs" },
    { id: "contact", label: "Contact", type: "direct", isActive: true, directLink: "/contact" },
  ],
};

const normalizeHeaderData = (data) => {
  const config = data?.config || data;
  if (!config || typeof config !== "object") return defaultHeaderData;

  return {
    ...defaultHeaderData,
    ...config,
    logo: { ...defaultHeaderData.logo, ...(config.logo || {}) },
    ctaButton: { ...defaultHeaderData.ctaButton, ...(config.ctaButton || {}) },
    socialLinks: Array.isArray(config.socialLinks) && config.socialLinks.length ? config.socialLinks : defaultHeaderData.socialLinks,
    rootTabs: Array.isArray(config.rootTabs) && config.rootTabs.length ? config.rootTabs : defaultHeaderData.rootTabs,
  };
};

const getResolvedLink = (item) => {
  if (!item) return "/A505";
  if (item.isActive === false) return "/A505";
  return item.link || "/A505";
};

const getResolvedDirectLink = (tab) => {
  if (!tab) return "/A505";
  if (tab.isActive === false) return "/A505";
  return tab.directLink || "/A505";
};

const Header = () => {
  const [activeTab, setActiveTab] = useState("seo");
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [headerData, setHeaderData] = useState(defaultHeaderData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const fetchHeader = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${API}/api/header`);
        if (!res.ok) throw new Error("Unable to load header configuration.");

        const data = await res.json();
        if (!ignore) {
          setHeaderData(normalizeHeaderData(data));
        }
      } catch (err) {
        if (!ignore) {
          console.error("Failed to fetch header data:", err);
          setError("Unable to load header content right now.");
          setHeaderData(defaultHeaderData);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchHeader();
    return () => {
      ignore = true;
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setCompanyOpen(false);
    setServicesOpen(false);
    setIndustryOpen(false);
  };

  const resolvedHeaderData = normalizeHeaderData(headerData);

  // --- Derive values from DB or fall back to defaults ---
  const phone = resolvedHeaderData.phone || "+91 9818888064";
  const email = resolvedHeaderData.email || "hello@digitalmarkitors.com";
  const ctaLabel = resolvedHeaderData.ctaButton?.label || "Free Consultation";
  const ctaLink = resolvedHeaderData.ctaButton?.link || "/contact";
  const socialLinks = Array.isArray(resolvedHeaderData.socialLinks) && resolvedHeaderData.socialLinks.length
    ? resolvedHeaderData.socialLinks
    : defaultHeaderData.socialLinks;

  const rootTabs = Array.isArray(resolvedHeaderData.rootTabs) ? resolvedHeaderData.rootTabs : defaultHeaderData.rootTabs;
  const findTab = (tabId) => rootTabs.find((t) => t.id === tabId);

  // Company tab
  const companyTab = findTab("company");
  const companyItems = (companyTab?.items || defaultHeaderData.rootTabs.find((tab) => tab.id === "company")?.items || []).map((item) => ({
    ...item,
    link: getResolvedLink(item),
  }));
  const companyLabel = companyTab?.label || "Company";
  const companyImage = normalizeMediaUrl(companyTab?.promoImage?.url || menuImg);
  const companyActive = companyTab?.isActive !== false;

  // Industry tab
  const industryTab = findTab("industry");
  const industryItems = (industryTab?.items || defaultHeaderData.rootTabs.find((tab) => tab.id === "industry")?.items || []).map((item) => ({
    ...item,
    link: getResolvedLink(item),
  }));
  const industryLabel = industryTab?.label || "Industry";
  const industryImage = normalizeMediaUrl(industryTab?.promoImage?.url || menuImg);
  const industryActive = industryTab?.isActive !== false;

  // Services tab (categorized)
  const servicesTab = findTab("our-services");
  const servicesLabel = servicesTab?.label || "Our Services";
  const servicesActive = servicesTab?.isActive !== false;
  const servicesCategories = (servicesTab?.categories || defaultHeaderData.rootTabs.find((tab) => tab.id === "our-services")?.categories || []);

  // Direct link tabs
  const blogTab = findTab("blog");
  const blogLabel = blogTab?.label || "Blog";
  const blogLink = getResolvedDirectLink(blogTab);

  const contactTab = findTab("contact");
  const contactLabel = contactTab?.label || "Contact";
  const contactLink = getResolvedDirectLink(contactTab);

  const logoUrl = normalizeMediaUrl(resolvedHeaderData.logo?.url || defaultHeaderData.logo.url);

  // Map category id to activeTab key for the services mega menu
  const categoryTabKeys = ["seo", "smo", "performance", "web", "orm"];
  const getCategoryTabKey = (cat, idx) => cat?.id || categoryTabKeys[idx] || `cat-${idx}`;

  // Default service images per category index
  const defaultServiceImages = [menuImg2, menuImg, menuImg2, menuImg2, menuImg2];

  // Shared Tailwind class strings (ex-Header.css selectors) reused across the mega menus
  const dropdownLiClass =
    "group relative flex items-center gap-[7px] text-[17px] font-semibold cursor-pointer transition-all duration-300 [transition-timing-function:ease] text-[#1c1c1e] hover:text-[#e31e24] max-[993px]:w-full max-[993px]:border-b max-[993px]:border-[#eef0f3] max-[993px]:p-0 max-[993px]:justify-center";
  const navLinkClass = (open = false) =>
    `no-underline text-[#1c1c1e] font-semibold flex items-center gap-[5px] hover:text-[#e31e24] max-[993px]:w-full max-[993px]:flex max-[993px]:justify-center max-[993px]:items-center max-[993px]:py-5 max-[993px]:px-6 max-[993px]:text-[18px] max-[993px]:hover:text-[#e31e24] max-[993px]:hover:bg-[rgba(227,30,36,0.05)] max-[769px]:py-4 max-[769px]:px-5 max-[769px]:text-base ${open ? "max-[993px]:text-[#e31e24] max-[993px]:bg-[rgba(227,30,36,0.06)]" : "max-[993px]:text-[#1f2937]"
    }`;
  const downIconClass = (open) =>
    `down-icon text-xs transition-transform duration-300 [transition-timing-function:ease] group-hover:rotate-180 max-[993px]:ml-2 ${open ? "rotate-180" : ""
    }`;
  const megaMenuClass = (open) =>
    `mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-white grid grid-cols-[1fr_250px] gap-[50px] p-10 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] z-[9999] opacity-0 invisible transition-all duration-300 [transition-timing-function:ease] group-hover:opacity-100 group-hover:visible max-[1025px]:w-[95vw] max-[993px]:static max-[993px]:w-full max-[993px]:translate-x-0 max-[993px]:opacity-100 max-[993px]:visible max-[993px]:bg-[#f8fafc] max-[993px]:shadow-none max-[993px]:rounded-none max-[993px]:max-h-0 max-[993px]:overflow-hidden max-[993px]:px-5 max-[993px]:py-0 max-[993px]:transition-[max-height,padding] max-[993px]:duration-[400ms] max-[993px]:[transition-timing-function:ease] max-[993px]:group-hover:max-h-[1200px] max-[993px]:group-hover:py-[18px] ${open ? "opacity-100 visible max-[993px]:max-h-[1200px] max-[993px]:py-[18px]" : ""
    }`;
  const megaLinksClass = "mega-links flex flex-col gap-[10px]";
  const megaLinkAClass =
    "no-underline text-[#4b5563] text-[17px] font-medium py-[6px] transition-all duration-300 [transition-timing-function:ease] flex items-center hover:text-[#e31e24] hover:translate-x-[6px] max-[993px]:text-[#374151] max-[993px]:hover:text-[#e31e24]";
  const megaImageClass = "mega-image flex justify-center items-start max-[993px]:hidden";
  const megaImageImgClass = "w-[250px] h-[250px] object-cover rounded-2xl block";
  const servicesMegaMenuClass = (open) =>
    `absolute top-[65px] left-1/2 -translate-x-1/2 w-[950px] bg-white p-[15px] rounded-[24px] border border-[#e5eaf0] shadow-[0_20px_50px_rgba(0,0,0,0.08)] opacity-0 invisible transition-all duration-[350ms] [transition-timing-function:ease] z-[999] group-hover:opacity-100 group-hover:visible max-[1025px]:w-[95vw] max-[993px]:static max-[993px]:w-full max-[993px]:translate-x-0 max-[993px]:opacity-100 max-[993px]:visible max-[993px]:bg-[#f8fafc] max-[993px]:shadow-none max-[993px]:rounded-none max-[993px]:max-h-0 max-[993px]:overflow-hidden max-[993px]:px-5 max-[993px]:py-0 max-[993px]:transition-[max-height,padding] max-[993px]:duration-[400ms] max-[993px]:[transition-timing-function:ease] max-[993px]:group-hover:max-h-[1200px] max-[993px]:group-hover:py-[18px] ${open ? "opacity-100 visible max-[993px]:max-h-[1200px] max-[993px]:py-[18px]" : ""
    }`;
  const serviceTabsClass = "flex gap-3 mb-[18px] max-[993px]:flex-col max-[993px]:gap-0 max-[993px]:m-0";
  const serviceTabButtonClass = (active) =>
    `flex-1 border border-[#e5eaf0] bg-white py-[18px] px-[10px] rounded-[18px] cursor-pointer text-[15px] font-semibold text-[#374151] transition-all duration-300 [transition-timing-function:ease] hover:border-[#e31e24] hover:text-[#e31e24] max-[993px]:w-full max-[993px]:border-none max-[993px]:border-b max-[993px]:border-[#e5e7eb] max-[993px]:bg-transparent max-[993px]:rounded-none max-[993px]:text-center max-[993px]:p-[18px] ${active ? "text-[#e31e24] border-[#e31e24] bg-[rgba(227,30,36,0.05)] shadow-[0_6px_20px_rgba(227,30,36,0.12)]" : ""
    }`;
  const serviceContentClass =
    "border border-[#e5eaf0] rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-[30px] flex justify-between items-start animate-fade-in-up-menu max-[1025px]:flex-col max-[993px]:hidden";
  const serviceLeftClass = "flex-1";
  const serviceGridClass = "grid grid-cols-2 gap-[30px] max-[1025px]:grid-cols-1";
  const serviceGridColClass = "flex flex-col gap-[18px]";
  const serviceGridAClass =
    "no-underline text-[#374151] text-base font-medium transition-all duration-300 [transition-timing-function:ease] hover:text-[#e31e24] hover:translate-x-[6px] max-[993px]:text-[#374151] max-[993px]:hover:text-[#e31e24]";
  const serviceImageClass = "w-[260px] ml-[30px] max-[1025px]:w-full max-[1025px]:mt-5 max-[1025px]:ml-0 max-[993px]:hidden";
  const serviceImageImgClass = "w-full rounded-[18px] object-cover shadow-[0_12px_30px_rgba(37,99,235,0.12)]";

  return (
    <>
      <div className="topbar bg-[#e9e9e9] border-b border-[#cfcfcf] font-roboto font-normal text-[rgb(61,61,61)] antialiased [color-scheme:light] max-[993px]:hidden">
        <div className="mx-auto max-w-[1250px] px-5 max-[577px]:px-4 flex items-center justify-between h-[46px]">
          <div className="flex items-center gap-3">
            {loading ? (
              <span className="text-[13px] text-[#6b7280]">Loading header…</span>
            ) : (
              socialLinks.map((s) => {
                const IconComp = socialIconMap[s.platform?.toLowerCase()] || FaFacebookF;
                const bgClass =
                  {
                    facebook: "bg-[#3b5998]",
                    twitter: "bg-[#1da1f2]",
                    linkedin: "bg-[#0077b5]",
                    instagram: "bg-[#e1306c]",
                  }[s.platform?.toLowerCase()] || "bg-[#3b5998]";
                return (
                  <a
                    key={s.id}
                    href={s.url}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white no-underline text-base transition-all duration-300 [transition-timing-function:ease] hover:-translate-y-0.5 hover:opacity-90 ${bgClass}`}
                  >
                    <IconComp />
                  </a>
                );
              })
            )}
          </div>

          <div className="font-roboto font-normal text-lg leading-8 text-[rgb(61,61,61)] flex items-center gap-[18px]">
            {error ? (
              <span className="text-[13px] text-[#b45309]">{error}</span>
            ) : (
              <>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 no-underline font-roboto font-normal text-lg leading-8 text-[rgb(61,61,61)]"
                >
                  <FaPhoneAlt />
                  {phone}
                </a>

                <span>|</span>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 no-underline font-roboto font-normal text-lg leading-8 text-[rgb(61,61,61)]"
                >
                  <FaEnvelope />
                  {email}
                </a>
              </>
            )}
          </div>

          <div className="consult-btn">
            <Link to={ctaLink}>
              <button className="bg-[#e31e24] hover:bg-[#c4151a] hover:scale-[1.03] border-none py-3.5 px-[34px] max-[577px]:py-[10px] max-[577px]:px-[18px] text-base max-[577px]:text-[13px] font-bold rounded-lg cursor-pointer transition-all duration-300 [transition-timing-function:ease] font-heading text-white leading-[normal] shadow-[0_4px_15px_rgba(227,30,36,0.35)]">{ctaLabel}</button>
            </Link>
          </div>
        </div>
      </div>

      <header className={`navbar bg-white h-[100px] max-[993px]:h-[85px] max-[769px]:h-[74px] max-[481px]:h-[70px] flex items-center sticky top-0 z-[999] max-[993px]:z-[99999] ${scrolled ? "shadow-[0_4px_25px_rgba(0,0,0,0.08)]" : "shadow-[0_2px_15px_rgba(0,0,0,0.04)]"} transition-all duration-300`}>
        <div className="mx-auto max-w-[1250px] px-5 max-[769px]:px-4 max-[577px]:px-4 flex items-center justify-between w-full h-full max-[993px]:relative max-[993px]:justify-center">
          <div className="w-auto h-[130px] max-[769px]:h-[110px] max-[577px]:h-[100px] max-[481px]:h-[95px] bg-transparent! shadow-none rounded-none! flex z-[1000] max-[993px]:absolute max-[993px]:left-1/2 max-[993px]:top-1/2 max-[993px]:-translate-x-1/2 max-[993px]:-translate-y-1/2 max-[993px]:m-0! max-[993px]:w-auto max-[993px]:h-[120px] max-[993px]:justify-center max-[993px]:z-[100000]">
            <Link to={resolvedHeaderData.logo?.link || "/"} className="flex items-center p-0 h-full">
              <div
                className="logo-bg w-[380px] max-[993px]:w-[320px] max-[769px]:w-[300px] max-[577px]:w-[280px] max-[481px]:w-[260px] h-full block bg-contain bg-left max-[993px]:bg-center bg-no-repeat"
                role="img"
                aria-label={resolvedHeaderData.logo?.alt || "Digicore Inc."}
                style={{
                  backgroundImage: `url(${logoUrl})`,
                }}
              />
            </Link>
          </div>

          <div
            className="mobile-toggle hidden max-[993px]:block max-[993px]:fixed max-[993px]:left-5 max-[993px]:top-[28px] max-[769px]:left-3 max-[769px]:top-6 max-[481px]:top-[22px] max-[993px]:text-[30px] max-[769px]:text-2xl max-[481px]:text-[22px] max-[993px]:text-[#e31e24] max-[993px]:cursor-pointer max-[993px]:z-[100001] max-[993px]:transition max-[993px]:duration-300 active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav
            className={`nav-menu max-[993px]:fixed max-[993px]:top-0 max-[993px]:w-full max-[993px]:h-screen max-[993px]:bg-white max-[993px]:transition-[left] max-[993px]:duration-[400ms] max-[993px]:[transition-timing-function:ease] max-[993px]:overflow-y-auto max-[993px]:overflow-x-hidden max-[993px]:z-[100000] max-[993px]:pt-[85px] max-[769px]:pt-[74px] max-[993px]:shadow-[6px_0_40px_rgba(15,23,42,0.18)] ${menuOpen ? "max-[993px]:left-0 max-[993px]:bottom-0" : "max-[993px]:left-[-100%]"
              }`}
          >
            <ul className="flex items-center gap-[55px] list-none m-0 p-0 max-[993px]:w-full max-[993px]:flex-col max-[993px]:gap-0 max-[993px]:min-h-[calc(100dvh-85px)]">
              {/* Company dropdown */}
              <li className={dropdownLiClass} onMouseLeave={() => setCompanyOpen(false)}>
                {companyActive ? (
                  <>
                    <div
                      className={navLinkClass(companyOpen)}
                      onClick={() => setCompanyOpen(!companyOpen)}
                    >
                      {companyLabel} <FaChevronDown className={downIconClass(companyOpen)} />
                    </div>

                    <div className={megaMenuClass(companyOpen)}>
                      <div className={megaLinksClass}>
                        {companyItems.map((item) => (
                          <Link key={item.id || item.link} to={item.link} onClick={closeMenu} className={megaLinkAClass}>
                            ➜ {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className={megaImageClass}>
                        <img src={companyImage} alt="" className={megaImageImgClass} />
                      </div>
                    </div>
                  </>
                ) : (
                  <Link className={navLinkClass()} to="/A505" onClick={closeMenu}>
                    {companyLabel}
                  </Link>
                )}
              </li>

              {/* Our Services mega menu */}
              <li className={dropdownLiClass} onMouseLeave={() => setServicesOpen(false)}>
                {servicesActive ? (
                  <>
                    <div
                      className={navLinkClass(servicesOpen)}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {servicesLabel} <FaChevronDown className={downIconClass(servicesOpen)} />
                    </div>

                    <div className={servicesMegaMenuClass(servicesOpen)}>
                      <div className={serviceTabsClass}>
                        {servicesCategories.map((cat, idx) => {
                          const key = getCategoryTabKey(cat, idx);
                          return (
                            <button
                              key={cat.id || key}
                              className={serviceTabButtonClass(activeTab === key)}
                              onMouseEnter={() => setActiveTab(key)}
                              onClick={closeMenu}
                            >
                              ➜ {cat.name}
                            </button>
                          );
                        })}
                      </div>

                      {servicesCategories.map((cat, idx) => {
                        const key = getCategoryTabKey(cat, idx);
                        const items = Array.isArray(cat.items) ? cat.items : [];
                        const firstColumnItems = items.slice(0, Math.ceil(items.length / 2));
                        const secondColumnItems = items.slice(Math.ceil(items.length / 2));

                        return (
                          activeTab === key && (
                            <div key={cat.id || key} className={serviceContentClass}>
                              <div className={serviceLeftClass}>
                                <h2 className="text-[#2b2b2e] font-heading font-extrabold text-[42px] mb-[25px]">{cat.name} Services</h2>
                                <div className={serviceGridClass}>
                                  <div className={serviceGridColClass}>
                                    {firstColumnItems.map((item) => (
                                      <Link key={item.id || item.label} to={getResolvedLink(item)} className={serviceGridAClass}>➜ {item.label}</Link>
                                    ))}
                                  </div>
                                  <div className={serviceGridColClass}>
                                    {secondColumnItems.map((item) => (
                                      <Link key={item.id || item.label} to={getResolvedLink(item)} className={serviceGridAClass}>➜ {item.label}</Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className={serviceImageClass}>
                                <img src={normalizeMediaUrl(cat.promoImage?.url || defaultServiceImages[idx])} alt={cat.promoImage?.alt || ""} className={serviceImageImgClass} />
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link className={navLinkClass()} to="/A505" onClick={closeMenu}>
                    {servicesLabel}
                  </Link>
                )}
              </li>

              {/* Industry dropdown */}
              <li className={dropdownLiClass} onMouseLeave={() => setIndustryOpen(false)}>
                {industryActive ? (
                  <>
                    <div
                      className={navLinkClass(industryOpen)}
                      onClick={() => setIndustryOpen(!industryOpen)}
                    >
                      {industryLabel} <FaChevronDown className={downIconClass(industryOpen)} />
                    </div>

                    <div className={megaMenuClass(industryOpen)}>
                      <div className={megaLinksClass}>
                        {industryItems.map((item) => (
                          <Link key={item.id || item.link} to={item.link} onClick={closeMenu} className={megaLinkAClass}>
                            ➜ {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className={megaImageClass}>
                        <img src={industryImage} alt="" className={megaImageImgClass} />
                      </div>
                    </div>
                  </>
                ) : (
                  <Link className={navLinkClass()} to="/A505" onClick={closeMenu}>
                    {industryLabel}
                  </Link>
                )}
              </li>
              <li className="relative flex items-center gap-[7px] text-[17px] font-semibold cursor-pointer transition-all duration-300 [transition-timing-function:ease] text-[#111] hover:text-[#ea8215] max-[993px]:w-full max-[993px]:border-b max-[993px]:border-[#eef0f3] max-[993px]:p-0 max-[993px]:justify-center">
                <Link to={blogLink} className={navLinkClass()} onClick={closeMenu}>
                  {blogLabel}
                </Link>
              </li>

              <li className="relative flex items-center gap-[7px] text-[17px] font-semibold cursor-pointer transition-all duration-300 [transition-timing-function:ease] text-[#111] hover:text-[#ea8215] max-[993px]:w-full max-[993px]:border-b max-[993px]:border-[#eef0f3] max-[993px]:p-0 max-[993px]:justify-center">
                <Link to={contactLink} className={navLinkClass()} onClick={closeMenu}>
                  {contactLabel}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;