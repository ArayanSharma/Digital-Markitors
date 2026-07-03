import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AllCaseStudies.css";
import "../Styles/CaseStudyCard.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const CaseStudies = () => {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/api/casestudies?active=true`);
        const data = await res.json();
        setCaseStudies(Array.isArray(data.caseStudies) ? data.caseStudies : []);
      } catch (err) {
        console.error("Failed to load case studies:", err);
        setCaseStudies([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <div className="all-cs-page">
        <div className="all-cs-loading">
          <div className="all-cs-spinner" />
          <p>Loading case studies…</p>
        </div>
      </div>
    );
  }

  return (
    <section className="all-cs-page">
      <div className="all-cs-container">

        {/* Page header */}
        <div className="all-cs-header">
          <h1>Our Case Studies</h1>
          <div className="all-cs-header-line" />
          <p>
            Explore how we've helped brands grow with data-driven strategies
            and measurable results.
          </p>
        </div>

        {/* Case study grid */}
        {caseStudies.length === 0 ? (
          <div className="all-cs-empty">
            <p>No case studies available at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="all-cs-grid">
            {caseStudies.map((item) => (
              <div
                className="cs-card"
                key={item._id}
                onClick={() => navigate(`/case-studies/${item.slug}`)}
              >
                <div className="cs-card-image">
                  {item.category && (
                    <span className="cs-card-category">{item.category}</span>
                  )}
                  <img src={item.coverImage} alt={item.title} />
                </div>

                <div className="cs-card-body">
                  <div>
                    {item.clientName && (
                      <div className="cs-card-client">{item.clientName}</div>
                    )}
                    <h3>{item.title}</h3>
                    <p>{item.shortDescription}</p>
                  </div>

                  <button
                    className="cs-card-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/case-studies/${item.slug}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default CaseStudies;
