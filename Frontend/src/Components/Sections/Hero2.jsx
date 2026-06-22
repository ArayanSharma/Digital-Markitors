import React, { useEffect, useState } from "react";


import Button from "../Button";

import heroImg from "../../assets/BannerImg/SEOResults.png";


const Hero2 = () => {

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
      We make your brand UNMISSABLE
      </p>

      <h1 className="banner-title">
       Turning Visibility into Growth. Turning Brands into Market Leaders
      </h1>

      <p className="banner-description">
       We are  Digicore Inc – The Best SEO Company in Kanpur NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business.
      </p>

      <div className="banner-buttons">
        <button className="banner-btn banner-primary">
          Speak to Our Experts
        </button>

        <button className="banner-btn banner-secondary">
          Our Services
        </button>
      </div>
    </div>

    <div className="banner-image">
      <img src={heroImg} alt="Digital Marketing" />
    </div>

  </div>
</section>

      
    </>
  );
};

export default Hero2;