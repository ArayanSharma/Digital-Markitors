import React, { useEffect, useState } from "react";


import Button from "../Button";

import heroImg from "../../assets/a.jpeg";
import graphImg from "../../assets/graph-l.webp";
import seoRimg from "../../assets/real-seo-result.webp";

const Hero = () => {

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
<section
  className="banner-section"
  style={{
    backgroundImage: `url(${heroImg})`,
  }}
>
  <div className="banner-overlay"></div>

  <div className="banner-container">
    <div className="banner-content">
      <p className="banner-subtitle">
        TOP RATED AND TRUSTED BY OUR PARTNERS
      </p>

      <h1 className="banner-title">
        Digital Marketing Agency in Kanpur That Deliver Results
      </h1>

      <p className="banner-description">
        Boost your business with our trusted full-service digital marketing agency in Kanpur NCR.
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
  </div>
</section>
      <section className="about-section">

        <div className="about-container">

          <h1>
            A Results-Driven Digital Marketing Company in Kanpur for Growing Brands
          </h1>

          <div className="divider"></div>

          <p>
            Digicore Inc. is a leading digital marketing services company
            in Kanpur, created to help ambitious brands to conquer every
            searchable platform in this age of AI and response marketing.


            We utilize the most advanced and cutting-edge digital marketing
            tools and techniques to elevate your social media listings and
            online performance across platforms.


            From PPC and AI SEO to social media, content, website development,
            social listening and influencer marketing, we blend data and
            technology to help brands make smarter decisions and unlock new
            opportunities.


            Incepted in the year 2016, Digicore Inc. has been shaping the
            digital marketing space with creative solutions. We have helped
            numerous local and global brands make a solid impact in this
            AI-driven digital marketing landscape.


            We can help you as well – to evolve, elevate and lead in this
            digital-first world.
          </p>

        </div>

      </section>

      <section className="visibility-section">

        <div className="visibility-container">

          <div className="visibility-content">

            <h2>
              But what hasn't changed is the value of Visibility
            </h2>

            <p>
              The search you knew for decades has changed and nothing is same
              anymore. With the evolution of technology, the way people search,
              discover and buy has also evolved.

        

              Gone are the days when visibility meant ranking on Google alone.
              Today, people search everywhere, on every digital platform
              wherever possible, making it imperative for brands to be present
              and consistent across every platform—like Google, Instagram,
              YouTube, LinkedIn, marketplaces or even AI-generated results.
            </p>

            <p>
              Modern shoppers, especially Gen Z research products thoroughly on
              social platforms like Instagram before making a purchase.

      

              On top of that AI has changed the way people search and evaluate
              products before making a purchase, making it essential for brands
              to be future-ready by being present exactly where your audience is
              looking (that’s everywhere).

            

              And that’s when Digicore Inc. – the best digital marketing
              agency in Kanpur come in handy. At Digicore Inc., we offer
              customized digital marketing solutions to help your brand rank
              higher and stay visible across every platform your customers turn
              to.
            </p>

            <div className="orange-line"></div>

          </div>

          <div className="visibility-image">
            <img src={graphImg} alt="Graph" />
          </div>

        </div>

      </section>

      <section className="counter-section">

        <div className="counter-container">

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count1}
              </span>
            <span style={{ color: "#2E75B6 "}}>
              %
              </span>
            </h5>

            <p>
              of Indian shoppers check online before making an actual purchase.
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count2}
              </span>
            <span style={{ color: "#2E75B6 "}}>
              %
              </span>
            </h5>

            <p>
              of Indian shoppers now start their product searches on Instagram,
              YouTube, or Amazon.
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count3}
              </span>
             <span style={{ color: "#2E75B6 "}}>
              %
              </span>
            </h5>

            <p>
              of Indian users trust Google results for brands that shine on
              social media platforms.
            </p>

          </div>

          <div className="count-row">

            <h5>
              <span className="counter">
                {counts.count4}
              </span>
             <span style={{ color: "#2E75B6 "}}>
              %
              </span>
            </h5>

            <p>
              of young users turn to AI-generated overviews instead of
              scrolling through traditional search results.
            </p>

          </div>

        </div>

      </section>

      <section className="performance-section">

        <div className="performance-container">

          <div className="performance-left">

            <h2>TRACK</h2>
            <h2>ANALYZE</h2>
            <h2>SCALE</h2>
            <h2>REPEAT</h2>

          </div>

          <div className="performance-right">

            <img
              src={seoRimg}
              alt="SEO Performance"
            />

          </div>

        </div>

      </section>

<section className="discover-section">

  <div className="discover-container">

    <h4>
      If your brand isn’t discoverable,
    </h4>

    <h2 className="color-#f1781d">
      you’re already losing at search.
    </h2>

    <p>
      Being present on every platform is the need of an hour. Remember if you are not visible to your audience; you don’t exist BUT YOUR RIVALS DO! Know that search marketing is more than just ranking on Google—it’s about being found, remembered, and recommended across every platform where your audience looks for you. When it comes to making digital presence more robust, effective and impactful, Digicore Inc. is the trusted choice. We have a team of seasoned digital marketing experts who combine AI-driven strategies, advanced analytics and data-backed insights to build a foundation that drives long-term brand success. We create tailored strategies to deliver measurable results and actionable insights, helping brands grow and thrive in a competitive digital landscape. If you want your brand to become ‘impossible to miss,’ then partner with Digicore Inc. – the first-ever AI-first Digital Marketing Agency! We help your brand stand out and achieve ROI-driven growth.
    </p>

  </div>

</section>
      
    </>
  );
};

export default Hero;