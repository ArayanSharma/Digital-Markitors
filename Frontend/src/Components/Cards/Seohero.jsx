  import React from "react";

  const Banner = ({
    subtitle,
    heading,
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
            ? `url("${backgroundImage}")`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-container">
          <div className="banner-content">
            <p className="banner-subtitle">{subtitle}</p>
            {heading ? <h3 className="banner-heading">{heading}</h3> : null}

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

          {image ? (
            <div className="banner-image">
              <img src={image} alt={title || subtitle || "Banner image"} />
            </div>
          ) : null}
        </div>
      </section>
    );
  };
  export default Banner;