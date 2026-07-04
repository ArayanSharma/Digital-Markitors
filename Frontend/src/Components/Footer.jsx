import React, { useEffect, useState } from "react";
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

const API_BASE = "http://localhost:5000";

const socialIcons = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  pinterest: <FaPinterestP />,
};

const defaultFooter = {
  logo: "",
  companyName: "Digicore Inc.",
  address: "Digicore Inc. 438C, Panki Road, Kalyanpur, Kanpur 208017 UP",
  phone: "+91 9818888064",
  email: "support@digicore.co.in",
  socialLinks: {
    facebook: "https://www.facebook.com/digitalmarkitors/",
    twitter: "https://x.com/digitalmarkitor",
    linkedin: "https://www.linkedin.com/company/digitalmarkitors/",
    instagram: "https://www.instagram.com/digitalmarkitorsofficial/",
    pinterest: "",
  },
  linkColumns: [
    {
      title: "SEO",
      links: [
        { label: "SEO Services", url: "#" },
        { label: "AI SEO Services", url: "#" },
        { label: "GEO", url: "#" },
        { label: "AEO", url: "#" },
        { label: "Technical SEO", url: "#" },
        { label: "Ecommerce SEO", url: "#" },
        { label: "SEO Reseller", url: "#" },
      ],
    },
    {
      title: "PPC",
      links: [
        { label: "PPC", url: "#" },
        { label: "Google Shopping Ads", url: "#" },
        { label: "Display Ads", url: "#" },
        { label: "Amazon Ads", url: "#" },
        { label: "Meta/Facebook Ads", url: "#" },
        { label: "Instagram Ads", url: "#" },
        { label: "YouTube Ads", url: "#" },
        { label: "LinkedIn Ads", url: "#" },
      ],
    },
    {
      title: "SMM",
      links: [
        { label: "Social Media Marketing", url: "#" },
        { label: "Facebook Marketing", url: "#" },
        { label: "Social Media Marketing Packages", url: "#" },
      ],
    },
    {
      title: "Location",
      links: [
        { label: "Noida", url: "#" },
        { label: "Lucknow", url: "#" },
        { label: "Gurgaon", url: "#" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Education", url: "#" },
        { label: "Healthcare", url: "#" },
        { label: "B2B", url: "#" },
        { label: "Hospitality", url: "#" },
        { label: "Ecommerce", url: "#" },
        { label: "Travel", url: "#" },
        { label: "Financial & Professional", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", url: "#" },
        { label: "Privacy Policy", url: "#" },
        { label: "AI Reference", url: "#" },
        { label: "Terms & Conditions", url: "#" },
        { label: "Career", url: "#" },
        { label: "Blog", url: "#" },
      ],
    },
  ],
  copyrightText:
    "© 2016-2026 Digicore Inc. - Digital Marketing Company Kanpur | Website designed by Digicore Inc.",
};

const Footer = () => {
  const [data, setData] = useState(defaultFooter);

  useEffect(() => {
    fetch(`${API_BASE}/api/footer`)
      .then((res) => res.json())
      .then((json) => {
        if (json.footer) setData((prev) => ({ ...prev, ...json.footer }));
      })
      .catch(() => {});
  }, []);

  const logoSrc = data.logo
    ? data.logo.startsWith("http")
      ? data.logo
      : `${API_BASE}${data.logo}`
    : logo;

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          <div className="footer-logo">
            <img src={logoSrc} alt={data.companyName} crossOrigin="anonymous" />
          </div>

          <div className="footer-box">
            <h3>Follow Us</h3>

            <div className="footer-social">
              {Object.entries(data.socialLinks || {})
                .filter(([, url]) => url)
                .map(([key, url]) => (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                    {socialIcons[key]}
                  </a>
                ))}
            </div>
          </div>

          <div className="footer-box">
            <h3>Office Address</h3>

            <p>{data.companyName}</p>

            <p style={{ whiteSpace: "pre-line" }}>{data.address}</p>
          </div>

          <div className="footer-box">
            <h3>Contact Us</h3>

            <a href={`tel:${data.phone}`}>
              <FaPhoneAlt />
              {data.phone}
            </a>

            <a href={`mailto:${data.email}`}>
              <FaEnvelope />
              {data.email}
            </a>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-links">
          {(data.linkColumns || []).map((column, i) => (
            <div key={column._id || i}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link, j) => (
                  <li key={link._id || j}>
                    <a href={link.url} style={{ color: "inherit", textDecoration: "none" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>{data.copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;