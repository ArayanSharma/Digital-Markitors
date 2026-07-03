import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/IndustryDetails.css";

import IndustryCard from "../Components/Cards/IndustryCard";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const IndustryDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [industry, setIndustry] = useState(null);
  const [relatedIndustries, setRelatedIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const load = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const res = await fetch(`${API}/api/industries/${slug}`);
        if (!res.ok) {
          setIndustry(null);
          setNotFound(true);
          return;
        }
        const data = await res.json();
        const current = data.industry || null;
        setIndustry(current);

        // Related Industries: automatically pulled from all other active
        // industries (already sorted by sortOrder from the API).
        const allRes = await fetch(`${API}/api/industries?active=true`);
        const allData = await allRes.json();
        const all = Array.isArray(allData.industries) ? allData.industries : [];
        const others = all.filter((item) => item._id !== current?._id);
        setRelatedIndustries(others.slice(0, 4));
      } catch (err) {
        console.error("Failed to load industry:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  const handleCtaClick = () => {
    const link = industry?.buttonLink;
    if (!link) return;
    if (/^https?:\/\//.test(link)) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate(link);
    }
  };

  /* ── Loading state ── */
  if (loading) {
    return (
      <div className="ind-details-page">
        <div className="ind-details-loading">
          <div className="ind-loading-spinner" />
          <p>Loading industry…</p>
        </div>
      </div>
    );
  }

  /* ── Not found ── */
  if (notFound || !industry) {
    return (
      <div className="ind-details-page">
        <div className="ind-not-found">
          <h2>Industry Not Found</h2>
          <p>The industry you're looking for doesn't exist or has been removed.</p>
          <button className="ind-back-btn" onClick={() => navigate("/industries")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Browse All Industries
          </button>
        </div>
      </div>
    );
  }

  /* ── Industry detail ── */
  return (
    <>
      <section className="ind-details-page">
        <div className="ind-details-container">

          {/* Back button */}
          <button className="ind-back-btn" onClick={() => navigate("/industries")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </button>

          {/* Featured / banner image */}
          <div className="ind-details-hero">
            <img src={industry.image} alt={industry.title} />
          </div>

          {/* Title */}
          <h1 className="ind-details-title">{industry.title}</h1>

          {/* Full description/content */}
          {industry.description && (
            <div className="ind-details-content">{industry.description}</div>
          )}

          {/* Services offered (if available) */}
          {industry.services?.length > 0 && (
            <div className="ind-services-section">
              <h4>Services We Offer</h4>
              <div className="ind-services-grid">
                {industry.services.map((service, index) => (
                  <div className="ind-service-item" key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {industry.buttonLink && (
            <div className="ind-cta-box">
              <h3>Ready to grow your {industry.title} business?</h3>
              <button className="ind-cta-btn" onClick={handleCtaClick}>
                {industry.buttonText || "Get Started"}
              </button>
            </div>
          )}

          <div className="ind-details-divider" />
        </div>
      </section>

      {/* ── Related Industries ── */}
      {relatedIndustries.length > 0 && (
        <section className="ind-related-section">
          <div className="ind-related-header">
            <h2>Related Industries</h2>
            <div className="ind-related-line" />
          </div>

          <div className="ind-related-grid">
            {relatedIndustries.map((item) => (
              <IndustryCard key={item._id} industry={item} />
            ))}
          </div>

          <div className="ind-related-viewall">
            <button
              className="ind-related-viewall-btn"
              onClick={() => navigate("/industries")}
            >
              View All Industries
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default IndustryDetails;
