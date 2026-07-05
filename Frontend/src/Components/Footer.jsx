import React, { useEffect, useState } from "react";


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
    <footer className="bg-[#1c1c1e] text-white pt-[50px] border-t border-[#e31e24] font-body">
      <div className="mx-auto max-w-[1200px] px-5">

        <div className="grid grid-cols-[1.2fr_1fr_1.3fr_1fr] gap-10 items-start max-[1201px]:grid-cols-2 max-[993px]:gap-[30px] max-[993px]:text-center max-[769px]:pb-[30px] max-[481px]:gap-5">

          <div className="max-[993px]:col-span-2 max-[993px]:text-center">
            <img
              src={logoSrc}
              alt={data.companyName}
              crossOrigin="anonymous"
              className="w-[150px] max-[993px]:max-w-[180px] max-[993px]:h-auto max-[769px]:w-[160px] max-[481px]:max-w-[150px]"
            />
          </div>

          <div>
            <h3 className="text-white text-[19px] font-heading font-bold mb-4 uppercase max-[769px]:text-base">Follow Us</h3>

            <div className="flex gap-3 max-[993px]:justify-center">
              {Object.entries(data.socialLinks || {})
                .filter(([, url]) => url)
                .map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[42px] h-[42px] border border-[#e31e24]/30 text-[#e31e24] rounded-lg flex items-center justify-center no-underline transition-all duration-300 [transition-timing-function:ease] hover:bg-[#e31e24] hover:text-white hover:border-[#e31e24]"
                  >
                    {socialIcons[key]}
                  </a>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-[19px] font-heading font-bold mb-4 uppercase max-[769px]:text-base">Office Address</h3>

            <p className="text-[16px] leading-[1.9] text-[#d3d3d3]">{data.companyName}</p>

            <p style={{ whiteSpace: "pre-line" }} className="text-[16px] leading-[1.9] text-[#d3d3d3]">
              {data.address}
            </p>
          </div>

          <div>
            <h3 className="text-white text-[19px] font-heading font-bold mb-4 uppercase max-[769px]:text-base">Contact Us</h3>

            <a
              href={`tel:${data.phone}`}
              className="flex items-center gap-[10px] text-[#d3d3d3] no-underline mb-[18px] text-[16px] hover:text-[#e31e24]"
            >
              <FaPhoneAlt />
              {data.phone}
            </a>

            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-[10px] text-[#d3d3d3] no-underline mb-[18px] text-[16px] hover:text-[#e31e24]"
            >
              <FaEnvelope />
              {data.email}
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-[rgb(61,61,61)] my-5"></div>

        <div className="grid grid-cols-6 gap-[50px] pb-0 max-[1201px]:grid-cols-3 max-[993px]:gap-[30px] max-[769px]:flex max-[769px]:flex-wrap max-[769px]:gap-[15px] max-[481px]:gap-5 max-[481px]:grid-cols-1 max-[481px]:text-center">
          {(data.linkColumns || []).map((column, i) => (
            <div
              key={column._id || i}
              className="max-[769px]:w-[calc(50%-8px)] max-[769px]:bg-[#2b2b2e]/60 max-[769px]:rounded-[10px] max-[769px]:p-[15px] max-[481px]:w-full"
            >
              <h3 className="text-white text-[18px] font-heading font-bold mb-4 uppercase max-[769px]:text-base max-[769px]:mb-3 max-[769px]:text-[#e31e24] max-[481px]:cursor-pointer">
                {column.title}
              </h3>
              <ul className="list-none max-[769px]:p-0 max-[769px]:m-0">
                {column.links.map((link, j) => (
                  <li
                    key={link._id || j}
                    className="text-[#d3d3d3] text-[15px] cursor-pointer transition-all duration-300 [transition-timing-function:ease] leading-[2] hover:text-[#e31e24] hover:pl-1 max-[769px]:text-[13px] max-[769px]:leading-[1.8]"
                  >
                    <a href={link.url} className="text-inherit no-underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#141416] border-t border-white/5 [text-align:center] py-[19px] px-[15px] max-[769px]:p-[15px]">
        <p className="text-white/60 font-roboto text-sm font-medium leading-[22px] max-[769px]:text-[12px] max-[769px]:leading-[1.6]">
          {data.copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;