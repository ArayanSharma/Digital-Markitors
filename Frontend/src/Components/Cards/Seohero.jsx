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
      className="relative overflow-hidden min-h-[450px] lg:min-h-[550px] py-[5px] bg-[#f4f4f5] flex items-center font-body border-b border-[#e5e7eb] w-full"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(to right, rgba(244, 244, 245, 1) 35%, rgba(244, 244, 245, 0.7) 65%, rgba(244, 244, 245, 0.1) 100%), url("${backgroundImage}")`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#e31e24]/8 rounded-full blur-[110px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start text-left max-w-3xl mx-auto lg:mx-0">
            <p className="block text-xs md:text-sm text-[#e31e24] font-bold tracking-[2px] uppercase mb-[18px] font-heading">
              {subtitle}
            </p>
            {heading ? (
              <h3 className="text-base text-slate-900 font-semibold mb-2 font-heading">{heading}</h3>
            ) : null}

            <h1 className="text-[28px] leading-[1.2] sm:text-[36px] lg:text-[42px] lg:leading-[1.1] xl:text-[52px] text-slate-900 font-heading font-extrabold mb-[24px] mt-0 tracking-tight">
              {highlightTitle(title)}
            </h1>

            <p className="text-base lg:text-lg leading-[1.8] text-slate-700 mb-[35px] max-w-[620px]">
              {description}
            </p>

            <div className="flex gap-[18px] flex-wrap lg:flex-nowrap">
              {primaryBtnText && (
                <a href={primaryBtnLink} className="no-underline">
                  <button className="px-[34px] py-[15px] text-[15px] font-bold rounded-lg border-0 bg-[#e31e24] text-white shadow-[0_6px_20px_rgba(227,30,36,0.35)] transition-all duration-300 hover:bg-[#c4151a] hover:scale-[1.03] hover:shadow-[0_12px_25px_rgba(227,30,36,0.45)] cursor-pointer">
                    {primaryBtnText}
                  </button>
                </a>
              )}

              {secondaryBtnText && (
                <a href={secondaryBtnLink} className="no-underline">
                  <button className="px-[34px] py-[15px] text-[15px] font-bold rounded-lg bg-transparent text-slate-900 border border-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-[1.03] cursor-pointer">
                    {secondaryBtnText}
                  </button>
                </a>
              )}
            </div>
          </div>

          {image ? (
            <div className="relative z-10 w-full max-w-[520px] mx-auto">
              <img src={image} alt={title || subtitle || "Banner image"} className="w-full h-auto object-cover rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-white/50" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default Banner;