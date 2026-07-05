import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Casestudy.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Casestudy() {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([]);
  const [currentCase, setCurrentCase] = useState(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await fetch(`${API}/api/casestudies?active=true`);
        if (!res.ok) return;
        const data = await res.json();
        setCaseStudies(Array.isArray(data.caseStudies) ? data.caseStudies : []);
      } catch (err) {
        console.error("Failed to load case studies:", err);
      }
    };

    fetchCaseStudies();
  }, []);

  const prevCase = () => {
    setCurrentCase((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
  };

  const nextCase = () => {
    setCurrentCase((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (caseStudies.length === 0) return;

    const intervalId = setInterval(() => {
      if (isPaused.current) return;
      setCurrentCase((prev) =>
        prev === caseStudies.length - 1 ? 0 : prev + 1
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [caseStudies]);

  if (caseStudies.length === 0) {
    return null;
  }

  const activeCase = caseStudies[currentCase];
  const descriptions = [
    
    activeCase.fullDescription,
  ].filter(Boolean);

  return (
    <section className="case-study bg-[#f4f4f5] py-[100px] border-b border-[#e5e7eb] font-body">
      <div className="case-container max-w-[1250px] mx-auto px-5 md:px-12">
        
        <div className="case-heading text-center mb-12">
          <h2 className="text-[42px] max-[769px]:text-[32px] font-heading font-extrabold text-[#2b2b2e] mb-4 uppercase">Case Studies</h2>
          <div className="w-[60px] h-[5px] bg-[#e31e24] mx-auto rounded-[30px]"></div>
        </div>

        <div
          className="case-slider flex flex-col lg:flex-row items-center justify-between gap-[40px] relative bg-white rounded-[24px] p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-[#e5e7eb]/60"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          <button className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-[#e31e24]/40 text-[#e31e24] bg-white text-xl cursor-pointer hover:bg-[#e31e24] hover:text-white transition-all duration-300 z-10 shadow-sm" onClick={prevCase}>
            ←
          </button>

          <div className="case-content flex-1 max-[992px]:text-center pr-0 lg:pr-8">
            <h3 className="text-2xl font-heading font-extrabold text-[#1c1c1e] mb-4 leading-snug">{activeCase.title}</h3>
            {descriptions.map((item, index) => (
              <p key={index} className="text-[#4b5563] text-[15px] leading-[1.7] mb-6">{item}</p>
            ))}

            <div className="case-buttons flex flex-wrap gap-4 max-[992px]:justify-center">
              <button
                className="bg-[#e31e24] hover:bg-[#c4151a] text-white text-[15px] font-bold py-3 px-6 rounded-lg border-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer shadow-[0_4px_15px_rgba(227,30,36,0.35)]"
                onClick={() => navigate(`/case-studies/${activeCase.slug}`)}
              >
                View Case Study
              </button>
              <button
                className="bg-transparent text-[#1c1c1e] border border-[#1c1c1e] text-[15px] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-[#1c1c1e] hover:text-white hover:scale-[1.03] cursor-pointer"
                onClick={() => navigate("/case-studies")}
              >
                View Our Latest Work
              </button>
            </div>
          </div>

          <div className="case-image flex-1 w-full max-w-[500px]">
            <img
              src={activeCase.coverImage}
              alt={activeCase.title}
              className="w-full h-auto object-cover rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-[#e5e7eb]"
            />
          </div>

          <button className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-[#e31e24]/40 text-[#e31e24] bg-white text-xl cursor-pointer hover:bg-[#e31e24] hover:text-white transition-all duration-300 z-10 shadow-sm" onClick={nextCase}>
            →
          </button>
        </div>

        {/* Mobile slide buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#e31e24]/40 text-[#e31e24] bg-white text-xl cursor-pointer hover:bg-[#e31e24] hover:text-white transition-all duration-300" onClick={prevCase}>
            ←
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#e31e24]/40 text-[#e31e24] bg-white text-xl cursor-pointer hover:bg-[#e31e24] hover:text-white transition-all duration-300" onClick={nextCase}>
            →
          </button>
        </div>

        <div className="case-dots flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentCase === index ? "bg-[#e31e24] w-6" : "bg-[#d1d5db]"}`}
              onClick={() => setCurrentCase(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
