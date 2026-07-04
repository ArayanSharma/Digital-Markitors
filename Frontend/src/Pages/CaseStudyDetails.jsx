import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/CaseStudyDetails.css";
import "../Styles/CaseStudyCard.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [caseStudy, setCaseStudy] = useState(null);
  const [recentCaseStudies, setRecentCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const load = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const res = await fetch(`${API}/api/casestudies/${slug}`);
        if (!res.ok) {
          setCaseStudy(null);
          setNotFound(true);
          return;
        }
        const data = await res.json();
        const current = data.caseStudy || null;
        setCaseStudy(current);

        // Recent Case Studies: automatically pulled from all other active
        // case studies (already sorted by sortOrder from the API).
        const allRes = await fetch(`${API}/api/casestudies?active=true`);
        const allData = await allRes.json();
        const all = Array.isArray(allData.caseStudies) ? allData.caseStudies : [];
        const others = all.filter((item) => item._id !== current?._id);
        setRecentCaseStudies(others.slice(0, 4));
      } catch (err) {
        console.error("Failed to load case study:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  /* ── Loading state ── */
  if (loading) {
    return (
      <div className="cs-details-page">
        <div className="cs-details-loading">
          <div className="cs-loading-spinner" />
          <p>Loading case study…</p>
        </div>
      </div>
    );
  }

  /* ── Not found ── */
  if (notFound || !caseStudy) {
    return (
      <div className="cs-details-page">
        <div className="cs-not-found">
          <h2>Case Study Not Found</h2>
          <p>The case study you're looking for doesn't exist or has been removed.</p>
          <button className="cs-back-btn" onClick={() => navigate("/case-studies")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Browse All Case Studies
          </button>
        </div>
      </div>
    );
  }

  /* ── Case study detail ── */
  return (
    <>
      <section className="cs-details-page">
        <div className="cs-details-container">

          {/* Back button */}
          <button className="cs-back-btn" onClick={() => navigate("/case-studies")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </button>

          {/* Featured image */}
          <div className="cs-details-hero">
            <img src={caseStudy.coverImage} alt={caseStudy.title} />
          </div>

          {/* Meta row */}
          <div className="cs-details-meta">
            {caseStudy.clientName && (
              <span className="cs-meta-client">{caseStudy.clientName}</span>
            )}
            {caseStudy.clientName && caseStudy.category && (
              <span className="cs-meta-dot" />
            )}
            {caseStudy.category && (
              <span className="cs-meta-category">{caseStudy.category}</span>
            )}
          </div>

          {/* Title */}
          <h1 className="cs-details-title">{caseStudy.title}</h1>

          {/* Short summary */}
          {caseStudy.shortDescription && (
            <p className="cs-details-lead">{caseStudy.shortDescription}</p>
          )}

          {/* Full content */}
          {caseStudy.fullDescription && (
            <div className="cs-details-content">{caseStudy.fullDescription}</div>
          )}

          {/* Technologies */}
          {caseStudy.technologies?.length > 0 && (
            <div className="cs-tech-list">
              {caseStudy.technologies.map((tech, index) => (
                <span key={index} className="cs-tech-chip">{tech}</span>
              ))}
            </div>
          )}

          {/* Challenge / Solution / Result */}
          {(caseStudy.challenge || caseStudy.solution || caseStudy.result) && (
            <div className="cs-details-grid">
              {caseStudy.challenge && (
                <div className="cs-details-block">
                  <h4>Challenge</h4>
                  <p>{caseStudy.challenge}</p>
                </div>
              )}
              {caseStudy.solution && (
                <div className="cs-details-block">
                  <h4>Solution</h4>
                  <p>{caseStudy.solution}</p>
                </div>
              )}
              {caseStudy.result && (
                <div className="cs-details-block">
                  <h4>Result</h4>
                  <p>{caseStudy.result}</p>
                </div>
              )}
            </div>
          )}



          <div className="cs-details-divider" />
        </div>
      </section>

      {/* ── Recent Case Studies ── */}
      {recentCaseStudies.length > 0 && (
        <section className="cs-recent-section">
          <div className="cs-recent-header">
            <h2>Recent Case Studies</h2>
            <div className="cs-recent-line" />
          </div>

          <div className="cs-recent-grid">
            {recentCaseStudies.map((item) => (
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

          <div className="cs-recent-viewall">
            <button
              className="cs-recent-viewall-btn"
              onClick={() => navigate("/case-studies")}
            >
              View All Case Studies
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default CaseStudyDetails;
