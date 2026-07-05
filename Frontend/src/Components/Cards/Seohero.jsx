import React from "react";

const Banner = ({
  subtitle,
  heading,
  title,
  description,
  primaryBtnText,
  primaryBtnLink = "/contact",
  secondaryBtnText,
  secondaryBtnLink = "/services",
  image,
  backgroundImage,
}) => {
  const highlightTitle = (text) => {
    if (!text) return "";
    const keywords = ["Digicore", "Results", "Visibility", "Grow", "Marketing", "SEO", "Agency", "Traffic", "Conversions", "Search", "Optimization", "B2B", "Digital", "Growth"];
    const words = text.split(" ");
    return words.map((word, idx) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      if (keywords.includes(cleanWord)) {
        return <span key={idx} className="text-[#e31e24]">{word} </span>;
      }
      return word + " ";
    });
  };

  return (
    <section
      className="relative overflow-hidden h-[450px] min-[992px]:h-[550px] min-[992px]:min-h-[550px] pt-[70px] pb-[70px] min-[992px]:pt-0 min-[992px]:pb-0 bg-[#f4f4f5] flex items-center font-body border-b border-[#e5e7eb] w-full"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(244, 244, 245, 0.85), rgba(244, 244, 245, 0.95)), url("${backgroundImage}")`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Energy blob */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#e31e24]/8 rounded-full blur-[110px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-[1200px]:flex-row items-center gap-[25px] min-[992px]:gap-[50px] max-w-[1400px] mx-auto min-[992px]:px-[30px] min-[1200px]:px-[50px] w-full">
        <div className="flex flex-col items-center min-[1200px]:items-start flex-[0_0_100%] min-[1200px]:flex-[0_0_50%] max-[1200px]:text-center min-[1200px]:text-left max-w-full min-[1200px]:max-w-[50%]">
          <p className="block text-xs md:text-sm text-[#e31e24] font-bold tracking-[2px] uppercase mb-[18px] font-heading">
            {subtitle}
          </p>
          {heading ? (
            <h3 className="text-base text-[#2b2b2e] font-semibold mb-2 font-heading">{heading}</h3>
          ) : null}

          <h1 className="text-[28px] leading-[1.2] min-[576px]:text-[36px] min-[992px]:text-[42px] min-[992px]:leading-[1.1] min-[1200px]:text-[52px] text-[#2b2b2e] font-heading font-extrabold mb-[24px] mt-0 tracking-tight">
            {highlightTitle(title)}
          </h1>

          <p className="text-base min-[1200px]:text-lg leading-[1.8] text-[#4b5563] mb-[35px] max-w-[620px]">
            {description}
          </p>

          <div className="flex gap-[18px] flex-wrap min-[992px]:flex-nowrap">
            {primaryBtnText && (
              <a href={primaryBtnLink} className="no-underline">
                <button className="px-[34px] py-[15px] text-[15px] font-bold rounded-lg border-0 bg-[#e31e24] text-white shadow-[0_6px_20px_rgba(227,30,36,0.35)] transition-all duration-300 hover:bg-[#c4151a] hover:scale-[1.03] hover:shadow-[0_12px_25px_rgba(227,30,36,0.45)] cursor-pointer">
                  {primaryBtnText}
                </button>
              </a>
            )}

            {secondaryBtnText && (
              <a href={secondaryBtnLink} className="no-underline">
                <button className="px-[34px] py-[15px] text-[15px] font-bold rounded-lg bg-transparent text-[#1c1c1e] border border-[#1c1c1e] transition-all duration-300 hover:bg-[#1c1c1e] hover:text-white hover:scale-[1.03] cursor-pointer">
                  {secondaryBtnText}
                </button>
              </a>
            )}
          </div>
        </div>

        {image ? (
          <div className="relative z-10 flex-1 min-[1200px]:flex-[0_0_50%]">
            <img src={image} alt={title || subtitle || "Banner image"} className="w-full h-auto object-cover rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-white/50" />
          </div>
        ) : null}
      </div>
    </section>
  );
};
export default Banner;