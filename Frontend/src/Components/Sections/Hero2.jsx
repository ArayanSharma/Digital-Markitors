import React, { useEffect, useState } from "react";
import { resolveImage } from "../../hooks/usePageContent";

import heroImg from "../../assets/BannerImg/SEOResults.png";

const Hero2 = ({ hero = {} }) => {
  const {
    subtitle = "We make your brand UNMISSABLE",
    title = "Turning Visibility into Growth. Turning Brands into Market Leaders",
    description = "We are Digicore Inc – The Best SEO Company in Kanpur NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing high intent commercial keywords for your business.",
    image = heroImg,
    backgroundImage,
    primaryBtn = { text: "Speak to Our Experts", link: "/contact" },
    secondaryBtn = { text: "Our Services", link: "/seo-results" },
  } = hero;

  const resolvedImage = resolveImage(image);
  const resolvedBackgroundImage = resolveImage(backgroundImage || image);

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
    <>
      <section
        className="relative overflow-hidden flex items-center h-[550px] bg-[#f4f4f5] bg-no-repeat bg-cover [background-position:right_center] max-[769px]:h-[450px] max-[769px]:py-[70px] max-[769px]:px-5 max-[769px]:bg-center border-b border-[#e5e7eb] font-body"
        style={{
          backgroundImage: resolvedBackgroundImage
            ? `linear-gradient(to right, rgba(244, 244, 245, 1) 35%, rgba(244, 244, 245, 0.7) 65%, rgba(244, 244, 245, 0.1) 100%), url("${resolvedBackgroundImage}")`
            : "none",
        }}
      >
        {/* Energy blob */}
        <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#e31e24]/8 rounded-full blur-[110px] pointer-events-none z-0"></div>

        <div className="w-full max-w-[1400px] h-full mx-auto px-[50px] flex items-center justify-between relative z-[2] max-[993px]:flex-col max-[993px]:[text-align:center] max-[993px]:gap-[50px] max-[993px]:px-[30px] max-[769px]:gap-[25px] max-[769px]:px-0 max-[769px]:h-auto">

          <div className="flex-[0_0_100%] max-w-[800px] max-[993px]:max-w-full">
            <p className="block text-xs md:text-sm text-[#e31e24] font-bold tracking-[2px] uppercase mb-[18px] font-heading">
              {subtitle}
            </p>

            <h1 className="text-[#2b2b2e] text-[28px] leading-[1.2] min-[576px]:text-[36px] min-[992px]:text-[42px] min-[992px]:leading-[1.1] min-[1200px]:text-[52px] font-heading font-extrabold mb-6 tracking-tight max-w-[750px]">
              {highlightTitle(title)}
            </h1>

            <p className="max-w-[700px] mb-[35px] font-normal text-base md:text-lg leading-[1.8] text-[#4b5563] max-[993px]:text-base">
              {description}
            </p>

            <div className="flex gap-[18px] max-[769px]:flex-col max-[769px]:justify-center max-[769px]:flex-wrap">
              <button className="border-0 cursor-pointer no-underline text-[15px] font-bold py-[15px] px-[34px] rounded-lg transition-all duration-300 hover:scale-[1.03] max-[769px]:w-full bg-[#e31e24] text-white shadow-[0_6px_20px_rgba(227,30,36,0.35)] hover:bg-[#c4151a]">
                {primaryBtn.text}
              </button>

              <button className="cursor-pointer no-underline text-[15px] font-bold py-[15px] px-[34px] rounded-lg transition-all duration-300 hover:scale-[1.03] max-[769px]:w-full bg-transparent text-[#1c1c1e] border border-[#1c1c1e] hover:bg-[#1c1c1e] hover:text-white">
                {secondaryBtn.text}
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero2;