


import React, { useState, useEffect } from "react";
import "../Styles/Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../assets/logo.png";

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

const Footer = () => {
  const [footerLogoUrl, setFooterLogoUrl] = useState(logo);
  const [footerLogoAlt, setFooterLogoAlt] = useState("Digicore Inc.");

  useEffect(() => {
    let ignore = false;

    const fetchHeader = async () => {
      try {
        const res = await fetch(`${API}/api/header`);
        if (!res.ok) throw new Error("Unable to load footer logo.");
        const data = await res.json();
        if (ignore) return;

        const config = data?.config || data || {};
        const logoUrl = normalizeMediaUrl(config?.logo?.url || logo);
        const logoAlt = config?.logo?.alt || "Digicore Inc.";

        setFooterLogoUrl(logoUrl);
        setFooterLogoAlt(logoAlt);
      } catch (err) {
        if (!ignore) {
          console.error("Failed to fetch footer logo:", err);
          setFooterLogoUrl(logo);
          setFooterLogoAlt("Digicore Inc.");
        }
      }
    };

    fetchHeader();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          <div className="footer-logo">
            <img src={footerLogoUrl} alt={footerLogoAlt} />
          </div>

          <div className="footer-box">
            <h3>Follow Us</h3>

            <div className="footer-social">

              <a
                href="https://www.facebook.com/digitalmarkitors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com/digitalmarkitor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.linkedin.com/company/digitalmarkitors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/digitalmarkitorsofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a href="/">
                <FaPinterestP />
              </a>
            </div>
          </div>

          <div className="footer-box">
            <h3>Office Address</h3>

            <p>Digicore Inc.</p>

            <p>
               Digicore Inc.
            
           438C, Panki Road,
            Kalyanpur,    
            Kanpur 208017 UP 
            </p>
          </div>

          <div className="footer-box">
            <h3>Contact Us</h3>

            <a href="tel:+919818888064">
              <FaPhoneAlt />
              +91 9818888064
            </a>

            <a href="mailto:support@digicore.co.in">
              <FaEnvelope />
              support@digicore.co.in
            </a>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-links">

          <div>
            <h3>SEO</h3>
            <ul>
              <li>SEO Services</li>
              <li>AI SEO Services</li>
              <li>GEO</li>
              <li>AEO</li>
              <li>Technical SEO</li>
              <li>Ecommerce SEO</li>
              <li>SEO Reseller</li>
            </ul>
          </div>

          <div>
            <h3>PPC</h3>
            <ul>
              <li>PPC</li>
              <li>Google Shopping Ads</li>
              <li>Display Ads</li>
              <li>Amazon Ads</li>
              <li>Meta/Facebook Ads</li>
              <li>Instagram Ads</li>
              <li>YouTube Ads</li>
              <li>LinkedIn Ads</li>
            </ul>
          </div>

          <div>
            <h3>SMM</h3>
            <ul>
              <li>Social Media Marketing</li>
              <li>Facebook Marketing</li>
              <li>Social Media Marketing Packages</li>
            </ul>
          </div>

          <div>
            <h3>Location</h3>
            <ul>
              <li>Noida</li>
              <li>Lucknow</li>
              <li>Gurgaon</li>
            </ul>
          </div>

          <div>
            <h3>Industries</h3>
            <ul>
              <li>Education</li>
              <li>Healthcare</li>
              <li>B2B</li>
              <li>Hospitality</li>
              <li>Ecommerce</li>
              <li>Travel</li>
              <li>Financial & Professional</li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>
            <ul>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>AI Reference</li>
              <li>Terms & Conditions</li>
              <li>Career</li>
              <li>Blog</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2016-2026 Digicore Inc. - Digital Marketing Company Kanpur |
          Website designed by Digicore Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;