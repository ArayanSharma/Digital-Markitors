import React, { useState } from "react";
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

const Header = () => {
const [activeTab, setActiveTab] = useState("seo");
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
  setMenuOpen(false);
  setCompanyOpen(false);
  setServicesOpen(false);
  setIndustryOpen(false);
};
const [companyOpen, setCompanyOpen] = useState(false);
const [servicesOpen, setServicesOpen] = useState(false);
const [industryOpen, setIndustryOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container topbar-container">
          <div className="social-icons">
            <a href="https://www.facebook.com/digitalmarkitors/">
              <FaFacebookF />
            </a>

            <a href="https://x.com/digitalmarkitor">
              <FaTwitter />
            </a>

            <a href="https://www.linkedin.com/company/digitalmarkitors/">
              <FaLinkedinIn />
            </a>

            <a href="https://www.instagram.com/digitalmarkitorsofficial/">
              <FaInstagram />
            </a>
          </div>

          <div className="contact-info" >
            <a href="tel:+919818888064" style={{ fontFamily: "Roboto, sans-serif",fontWeight: 400,
  fontSize: "18px",
  lineHeight: "32px",
  color: "rgb(61, 61, 61)"}}>
              <FaPhoneAlt />
              +91 9818888064
            </a>

            <span>|</span>

            <a href="mailto:hello@digitalmarkitors.com" style={{ fontFamily: "Roboto, sans-serif",fontWeight: 400,
  fontSize: "18px",
  lineHeight: "32px",
  color: "rgb(61, 61, 61)"}}>
              <FaEnvelope />
              hello@digitalmarkitors.com
            </a>
          </div>

          <div className="consult-btn">
            <Link to="/contact">
              <button>Free Consultation</button>
            </Link>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container navbar-container">
         <div className="logo">
  <Link to="/">
    <img src={logo} alt="Digicore Inc." />
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
            <li className="dropdown">
  <div
    className="nav-link"
    onClick={() => setCompanyOpen(!companyOpen)}
  >
    Company <FaChevronDown className="down-icon" />
  </div>

                <div
  className="mega-menu"
  style={{
    display: companyOpen ? "grid" : "none"
  }}
>
                  <div className="mega-links">
                   <Link to="/about" onClick={closeMenu}>
  ➜ About Us
</Link>
                    <Link to="/seo-results" onClick={closeMenu}>➜ SEO Results</Link>
                    <Link to="/packages" onClick={closeMenu}>➜ Packages</Link>
                    <Link to="/career" onClick={closeMenu}>➜ Career</Link>
                  </div>

                  <div className="mega-image">
                    <img src={menuImg} alt="" />
                  </div>
                </div>
              </li>

              <li className="dropdown services-dropdown">
              <div
  className="nav-link"
  onClick={() => setServicesOpen(!servicesOpen)}
  
>
  Our Services <FaChevronDown className="down-icon" />
</div>

             <div
  className="services-mega-menu"
  style={{
    display: servicesOpen ? "grid" : "none"
  }}
>
                  <div className="service-tabs">
                    <button
                      className={activeTab === "seo" ? "active" : ""}
                      onMouseEnter={() => setActiveTab("seo")}
                      onClick={closeMenu}
                    >
                      ➜ SEO
                    </button>

                    <button
                      className={activeTab === "smo" ? "active" : ""}
                      onMouseEnter={() => setActiveTab("smo")}
                      onClick={closeMenu}
                    >
                      ➜ SMO
                    </button>

                    <button
                      className={activeTab === "performance" ? "active" : ""}
                      onMouseEnter={() => setActiveTab("performance")}
                      onClick={closeMenu}
                    >
                      ➜ Performance Marketing
                    </button>

                    <button
                      className={activeTab === "web" ? "active" : ""}
                      onMouseEnter={() => setActiveTab("web")}
                      onClick={closeMenu}
                    >
                      ➜ Web Design
                    </button>

                    <button
                      className={activeTab === "orm" ? "active" : ""}
                      onMouseEnter={() => setActiveTab("orm")}
                      onClick={closeMenu}
                    >
                      ➜ ORM
                    </button>
                  </div>

                  {activeTab === "seo" && (
                    <div className="service-content">
                      <div className="service-left">
                        <h2>SEO Services</h2>

                        <div className="service-grid">
                          <div>
                            <Link to="/seo-service">➜ SEO Services</Link>
                            <Link to="/ai-seo">➜ AI SEO Services</Link>
                            <Link to="/GEO">➜ GEO</Link>
                            <Link to="/AEO">➜ AEO</Link>
                            <Link to="/Technical-SEO">➜ Technical SEO</Link>
                          </div>

                          <div>
                            <Link to="/Eco-SEO">➜ Ecommerce SEO</Link>
                            <Link to="/">➜ SEO Audit</Link>
                            <Link to="/">➜ Link Building</Link>
                            <Link to="/Reseller">➜ SEO Reseller</Link>
                          </div>
                        </div>
                      </div>

                      <div className="service-image">
                        <img src={menuImg2} alt="" />
                      </div>
                    </div>
                  )}

                  {activeTab === "smo" && (
                    <div className="service-content">
                      <div className="service-left">
                        <h2>SMO Services</h2>

                        <div className="service-grid">
                          <div>
                            <Link to="/social-media-marketing">➜ Social Media Marketing</Link>
                            <Link to="/">➜  Content Creation</Link>
                            <Link to="/influencer-marketing">➜ Influencer Marketing</Link>
                            <Link to="/social-listening">➜ Social Media Listening & Response Management</Link>
                          </div>

                          
                        </div>
                      </div>

                      <div className="service-image">
                        <img src={menuImg} alt="" />
                      </div>
                    </div>
                  )}

                  {activeTab === "performance" && (
                    <div className="service-content">
                      <div className="service-left">
                        <h2>Performance Marketing</h2>

                        <div className="service-grid">
                          <div>
                            <Link to="/PPC">➜ PPC</Link>
                            <Link to="/google-shopping-ads">➜ Google Shopping Ads</Link>
                            <Link to="/display-ads">➜ Display Ads</Link>
                            <Link to="/amazon-ads">➜ Amazon Ads</Link>
                            <Link to="/meta-facebook-ads">➜ Meta/Facebook Ads</Link>
                          </div>

                          <div>
                            <Link to="/instagram-ads">➜ Instagram Ads</Link>
                            <Link to="/youtube">➜ YouTube Ads</Link>
                            <Link to="/linkedin-ads">➜ LinkedIn Ads</Link>
                          </div>
                        </div>
                      </div>

                      <div className="service-image">
                        <img src={menuImg2} alt="" />
                      </div>
                    </div>
                  )}

                  {activeTab === "web" && (
                    <div className="service-content">
                      <div className="service-left">
                        <h2>Web Design</h2>

                        <div className="service-grid">
                          <div>
                            <Link to="/website-development">➜ Website Development </Link>
                            <Link to="/wordpress-development">➜ WordPress Development</Link>
                            <Link to="/shopify-development">➜ Shopify Development</Link>
                            <Link to="/laravel-development">➜ Laravel Development</Link>
                            <Link to="/woocommerce-development">➜ Woocommerce Development</Link>
                          </div>

                          <div>
                            <Link to="/Wix-Development">➜ Wix Development</Link>
                            <Link to="/Website-Maintenance-Services">➜ Website Maintenance Services</Link>
                          </div>
                        </div>
                      </div>

                      <div className="service-image">
                        <img src={menuImg2} alt="" />
                      </div>
                    </div>
                  )}

                  {activeTab === "orm" && (
                    <div className="service-content">
                      <div className="service-left">
                        <h2>ORM Services</h2>

                        
                      </div>
 
                    </div>
                  )}
                </div>
              </li>

<li className="dropdown">
  <div
    className="nav-link"
    onClick={() => setIndustryOpen(!industryOpen)}
  >
    Industry <FaChevronDown className="down-icon" onClick={closeMenu}/>
  </div>

  <div
    className="mega-menu"
    style={{
      display: industryOpen ? "grid" : "none"
    }}
  >
    <div className="mega-links">
      <Link to="/Education" onClick={closeMenu}>➜ Education</Link>
      <Link to="/Healthcare" onClick={closeMenu}>➜ Healthcare</Link>
      <Link to="/B2B" onClick={closeMenu}>➜ B2B</Link>
      <Link to="/Hospitality" onClick={closeMenu}>➜ Hospitality</Link>
      <Link to="/E-Commerce" onClick={closeMenu}>➜ E-Commerce</Link>
      <Link to="/Travel" onClick={closeMenu}>➜ Travel</Link>
      <Link to="/Financial-&-Professional" onClick={closeMenu}>➜ Financial & Professional</Link>
    </div>

    <div className="mega-image">
      <img src={menuImg} alt="" />
    </div>
  </div>
</li>              <li>
                <Link to="/seo-results" className="nav-link" onClick={closeMenu}>
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
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