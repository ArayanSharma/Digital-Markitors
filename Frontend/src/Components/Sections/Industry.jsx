import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../../Styles/Industry.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Industry() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch(`${API}/api/industries?active=true`);
        if (!res.ok) return;
        const data = await res.json();
        setIndustries(Array.isArray(data.industries) ? data.industries : []);
      } catch (err) {
        console.error("Failed to load industries:", err);
      }
    };

    fetchIndustries();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || industries.length === 0) return;

    let isPaused = false;

    const loopIfNeeded = () => {
      const half = slider.scrollWidth / 2;
      if (slider.scrollLeft >= half) {
        slider.scrollLeft -= half;
      }
    };

    const autoScroll = () => {
      if (isPaused) return;
      slider.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const intervalId = setInterval(autoScroll, 1500);

    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };

    slider.addEventListener('scroll', loopIfNeeded);
    slider.addEventListener('mouseenter', pause);
    slider.addEventListener('mouseleave', resume);
    slider.addEventListener('touchstart', pause);
    slider.addEventListener('touchend', resume);

    return () => {
      clearInterval(intervalId);
      slider.removeEventListener('scroll', loopIfNeeded);
      slider.removeEventListener('mouseenter', pause);
      slider.removeEventListener('mouseleave', resume);
      slider.removeEventListener('touchstart', pause);
      slider.removeEventListener('touchend', resume);
    };
  }, [industries]);

  if (industries.length === 0) {
    return null;
  }

  // Duplicate the cards so the track has room to scroll and can loop
  // seamlessly even when there are only a few industries (e.g. 3).
  const loopedIndustries = [...industries, ...industries];

  return (
    <>
      <section className="workindustry-section bg-white py-[80px] font-body border-b border-[#e5e7eb]">

        <div className="workindustry-heading text-center mb-10">
          <h2 className="text-[42px] max-[769px]:text-[32px] font-heading font-extrabold text-[#2b2b2e] mb-4 uppercase">INDUSTRY WE WORK WITH</h2>
          <div className="w-[60px] h-[5px] bg-[#e31e24] mx-auto rounded-[30px]"></div>
        </div>

        <div className="workindustry-slider-wrapper relative max-w-[1250px] mx-auto px-10 flex items-center">

          <button
            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#e31e24]/40 text-[#e31e24] bg-white text-xl cursor-pointer hover:bg-[#e31e24] hover:text-white transition-all duration-300 z-10 shrink-0 mr-4 shadow-sm"
            onClick={scrollLeft}
          >
            ←
          </button>

          <div
            className="workindustry-cards flex overflow-x-auto gap-6 py-6 scroll-smooth scrollbar-none w-full"
            ref={sliderRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {loopedIndustries.map((item, index) => (
              <div className="workindustry-card min-w-[280px] md:min-w-[320px] bg-white rounded-[20px] p-6 text-center border border-[#e5e7eb]/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(227,30,36,0.1)] hover:border-[#e31e24]/20" key={`${item._id}-${index}`}>
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center mb-5 mx-auto">
                    <img src={item.image} alt={item.title} className="w-8 h-8 object-contain" />
                  </div>

                  <h3 className="text-[20px] font-heading font-bold text-[#2b2b2e] mb-3">{item.title}</h3>

                  <p className="text-[14px] leading-[1.6] text-[#4b5563] mb-6">{item.description}</p>
                </div>

                <button
                  className="bg-[#e31e24] hover:bg-[#c4151a] text-white text-[14px] font-bold py-2.5 px-6 rounded-lg border-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  onClick={() => navigate(`/industries/${item.slug}`)}
                >
                  {item.buttonText || "Read More"}
                </button>
              </div>
            ))}
          </div>

          <button
            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#e31e24]/40 text-[#e31e24] bg-white text-xl cursor-pointer hover:bg-[#e31e24] hover:text-white transition-all duration-300 z-10 shrink-0 ml-4 shadow-sm"
            onClick={scrollRight}
          >
            →
          </button>

        </div>

        <div className="workindustry-viewall text-center mt-12">
          <button
            className="bg-[#e31e24] hover:bg-[#c4151a] text-white text-[15px] font-bold py-3.5 px-8 rounded-lg border-0 cursor-pointer shadow-[0_4px_15px_rgba(227,30,36,0.35)] transition-all duration-300 hover:scale-[1.03] uppercase tracking-wider"
            onClick={() => navigate("/industries")}
          >
            View All Industries
          </button>
        </div>

      </section>
    </>
  );
}
