import React, { useState, useEffect } from "react";
import "../Styles/Header.css";
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

  return (
    <>
      <div className="topbar">
        <div className="container topbar-container">
          <div className="social-icons">
            {loading ? (
              <span style={{ fontSize: "13px", color: "#6b7280" }}>Loading header…</span>
            ) : (
              socialLinks.map((s) => {
                const IconComp = socialIconMap[s.platform?.toLowerCase()] || FaFacebookF;
                return (
                  <a key={s.id} href={s.url}>
                    <IconComp />
                  </a>
                );
              })
            )}
          </div>

          <div className="contact-info" >
            {error ? (
              <span style={{ fontSize: "13px", color: "#b45309" }}>{error}</span>
            ) : (
              <>
                <a href={`tel:${phone.replace(/\s/g, "")}`} style={{
                  fontFamily: "Roboto, sans-serif", fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "rgb(61, 61, 61)"
                }}>
                  <FaPhoneAlt />
                  {phone}
                </a>

                <span>|</span>

                <a href={`mailto:${email}`} style={{
                  fontFamily: "Roboto, sans-serif", fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "rgb(61, 61, 61)"
                }}>
                  <FaEnvelope />
                  {email}
                </a>
              </>
            )}
          </div>

          <div className="consult-btn">
            <Link to={ctaLink}>
              <button>{ctaLabel}</button>
            </Link>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container navbar-container">
          <div className="logo" >
            <Link to={resolvedHeaderData.logo?.link || "/"}>
              <div
                className="logo-bg"
                role="img"
                aria-label={resolvedHeaderData.logo?.alt || "Digicore Inc."}
                style={{
                  backgroundImage: `url(${logoUrl})`,
                }}
              />
            </Link>
          </div>

          <div
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <ul>
              {/* Company dropdown */}
              <li
                className={`dropdown ${companyOpen ? "open" : ""}`}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                {companyActive ? (
                  <>
                    <div
                      className="nav-link"
                      onClick={() => setCompanyOpen(!companyOpen)}
                    >
                      {companyLabel} <FaChevronDown className={`down-icon ${companyOpen ? "open" : ""}`} />
                    </div>

                    <div className="mega-menu">
                      <div className="mega-links">
                        {companyItems.map((item) => (
                          <Link key={item.id || item.link} to={item.link} onClick={closeMenu}>
                            ➜ {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className="mega-image">
                        <img src={companyImage} alt="" />
                      </div>
                    </div>
                  </>
                ) : (
                  <Link className="nav-link" to="/A505" onClick={closeMenu}>
                    {companyLabel}
                  </Link>
                )}
              </li>

              {/* Our Services mega menu */}
              <li
                className={`dropdown services-dropdown ${servicesOpen ? "open" : ""}`}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicesActive ? (
                  <>
                    <div
                      className="nav-link"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {servicesLabel} <FaChevronDown className={`down-icon ${servicesOpen ? "open" : ""}`} />
                    </div>

                    <div className="services-mega-menu">
                      <div className="service-tabs">
                        {servicesCategories.map((cat, idx) => {
                          const key = getCategoryTabKey(cat, idx);
                          return (
                            <button
                              key={cat.id || key}
                              className={activeTab === key ? "active" : ""}
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
                            <div key={cat.id || key} className="service-content">
                              <div className="service-left">
                                <h2>{cat.name} Services</h2>
                                <div className="service-grid">
                                  <div>
                                    {firstColumnItems.map((item) => (
                                      <Link key={item.id || item.label} to={getResolvedLink(item)}>➜ {item.label}</Link>
                                    ))}
                                  </div>
                                  <div>
                                    {secondColumnItems.map((item) => (
                                      <Link key={item.id || item.label} to={getResolvedLink(item)}>➜ {item.label}</Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="service-image">
                                <img src={normalizeMediaUrl(cat.promoImage?.url || defaultServiceImages[idx])} alt={cat.promoImage?.alt || ""} />
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link className="nav-link" to="/A505" onClick={closeMenu}>
                    {servicesLabel}
                  </Link>
                )}
              </li>

              {/* Industry dropdown */}
              <li
                className={`dropdown ${industryOpen ? "open" : ""}`}
                onMouseLeave={() => setIndustryOpen(false)}
              >
                {industryActive ? (
                  <>
                    <div
                      className="nav-link"
                      onClick={() => setIndustryOpen(!industryOpen)}
                    >
                      {industryLabel} <FaChevronDown className={`down-icon ${industryOpen ? "open" : ""}`} />
                    </div>

                    <div className="mega-menu">
                      <div className="mega-links">
                        {industryItems.map((item) => (
                          <Link key={item.id || item.link} to={item.link} onClick={closeMenu}>
                            ➜ {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className="mega-image">
                        <img src={industryImage} alt="" />
                      </div>
                    </div>
                  </>
                ) : (
                  <Link className="nav-link" to="/A505" onClick={closeMenu}>
                    {industryLabel}
                  </Link>
                )}
              </li>
              <li>
                <Link to={blogLink} className="nav-link" onClick={closeMenu}>
                  {blogLabel}
                </Link>
              </li>

              <li>
                <Link to={contactLink} className="nav-link" onClick={closeMenu}>
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