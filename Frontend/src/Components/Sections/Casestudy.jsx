import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Casestudy.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Casestudy() {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([]);
  const [currentCase, setCurrentCase] = useState(0);

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

  if (caseStudies.length === 0) {
    return null;
  }

  const activeCase = caseStudies[currentCase];
  const descriptions = [
    
    activeCase.fullDescription,
  ].filter(Boolean);

  return (
    <section className="case-study">
      <div className="case-container">
        <div className="case-heading">
          <h2>Case Studies</h2>
          <div className="divider"></div>
        </div>

        <div className="case-slider">
          <button className="case-arrow" onClick={prevCase}>
            ←
          </button>

          <div className="case-content">
            <h3>{activeCase.title}</h3>
            {descriptions.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <div className="case-buttons">
              <button
                className="case-btn"
                onClick={() => navigate(`/case-studies/${activeCase.slug}`)}
              >
                View Case Study
              </button>
              <button
                className="case-btn outline-btn"
                onClick={() => navigate("/case-studies")}
              >
                View Our Latest Work
              </button>
            </div>
          </div>

          <div className="case-image">
            <img
              src={activeCase.coverImage}
              alt={activeCase.title}
            />
          </div>

          <button className="case-arrow" onClick={nextCase}>
            →
          </button>
        </div>

        <div className="case-dots">
          {caseStudies.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentCase === index ? "active" : ""}`}
              onClick={() => setCurrentCase(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
