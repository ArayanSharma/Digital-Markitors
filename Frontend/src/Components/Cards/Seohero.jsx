import React from "react";

const Banner = ({
  subtitle,
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  image,
  backgroundImage,
}) => {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-container">
        <div className="banner-content">
          <p className="banner-subtitle">{subtitle}</p>

          <h1 className="banner-title">{title}</h1>

          <p className="banner-description">{description}</p>

          <div className="banner-buttons">
            <button className="banner-btn banner-primary">
              {primaryBtnText}
            </button>

            <button className="banner-btn banner-secondary">
              {secondaryBtnText}
            </button>
          </div>
        </div>

        <div className="banner-image">
          <img src={image}  />
        </div>
      </div>
    </section>
  );
};
export default Banner;