import React, { useEffect, useState } from "react";
import { resolveImage } from "../../hooks/usePageContent";

import heroImg from "../../assets/BannerImg/SEOResults.png";

const Hero2 = ({ hero = {} }) => {
  const {
    subtitle = "We make your brand UNMISSABLE",
    title = "Turning Visibility into Growth. Turning Brands into Market Leaders",
    description = "We are Digicore Inc – The Best SEO Company in Kanpur NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing high intent commercial keywords for your business.",
    image = heroImg,
    primaryBtn = { text: "Speak to Our Experts", link: "/contact" },
    secondaryBtn = { text: "Our Services", link: "/seo-results" },
  } = hero;

  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });

  useEffect(() => {

    let start = 0;

    const interval = setInterval(() => {

      start += 1;

      setCounts({
        count1: start <= 50 ? start : 50,
        count2: start <= 52 ? start : 52,
        count3: start <= 61 ? start : 61,
        count4: start <= 44 ? start : 44,
      });

      if (start >= 61) {
        clearInterval(interval);
      }

    }, 30);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
<section className="banner-section">
  <div className="banner-container">

    <div className="banner-content">
      <p className="banner-subtitle">
        {subtitle}
      </p>

      <h1 className="banner-title">
        {title}
      </h1>

      <p className="banner-description">
        {description}
      </p>

      <div className="banner-buttons">
        <button className="banner-btn banner-primary">
          {primaryBtn.text}
        </button>

        <button className="banner-btn banner-secondary">
          {secondaryBtn.text}
        </button>
      </div>
    </div>

    <div className="banner-image">
      <img src={resolveImage(image)} alt="Digital Marketing" />
    </div>

  </div>
</section>

      
    </>
  );
};

export default Hero2;