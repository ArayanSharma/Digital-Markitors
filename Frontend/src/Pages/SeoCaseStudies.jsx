import React, { useEffect, useState } from "react";
import "../Styles/SeoCaseStudies.css";

import case1 from "../assets/case1.png";
import case2 from "../assets/case2.png";
import case3 from "../assets/case3.png";

const caseStudies = [
  {
    title:
      "The Moto Men – High-Intent Google Ads Leads with 12.5% Conversion",
    description:
      "For The Moto Men, we executed a Noida-focused PPC campaign to drive high-intent enquiries for premium car detailing services. Nearly 80% of the enquiries were highly relevant, aligned with both location and service intent. The campaign achieved a conversion rate of up to 12.5%.",
    image: case1,
  },
  {
    title:
      "Trusted Hair Transplant Clinic – PPC Performance Case Study (14.52% Conversion)",
    description:
      "We executed a high-intent Google Search Ads campaign for a hair transplant clinic, targeting users actively searching for treatment-related queries. The campaign delivered a conversion rate of 14.52%, indicating strong intent alignment and effective ad optimisation.",
    image: case2,
  },
  {
    title: "IOD Global – Display Campaign Case Study",
    description:
      "For IOD Global, we executed a Google Display Campaign focused on increasing brand visibility and recall among the right audience segments. The campaign was designed to build consistent exposure through targeted placements and audience-based targeting.",
    image: case3,
  },
];

const SeoCaseStudies = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % caseStudies.length);
    }, 2000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="seo-case-section">
      <div className="container">
        <h2 className="section-title">SEO CASE STUDIES</h2>
        <div className="title-line"></div>

        <div className="case-wrapper">
          <div className="case-content">
            <h3>{caseStudies[current].title}</h3>

            <p>{caseStudies[current].description}</p>

            <div className="case-buttons">
              <button>VIEW CASE STUDY</button>
              <button>VIEW OUR LATEST WORK</button>
            </div>
          </div>

          <div className="case-image">
            <img
              src={caseStudies[current].image}
              alt={caseStudies[current].title}
            />
          </div>
        </div>

        <div className="slider-dots">
          {caseStudies.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoCaseStudies;