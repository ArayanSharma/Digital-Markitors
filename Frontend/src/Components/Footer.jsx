


import React from "react";
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          <div className="footer-logo">
            <img src={logo} alt="Digicore Inc." />
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