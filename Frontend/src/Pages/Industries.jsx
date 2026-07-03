import React, { useEffect, useState } from "react";
import "../Styles/AllIndustries.css";

import IndustryCard from "../Components/Cards/IndustryCard";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Industries = () => {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API}/api/industries?active=true`);
        if (!res.ok) throw new Error(`Failed to load industries (${res.status})`);
        const data = await res.json();
        setIndustries(Array.isArray(data.industries) ? data.industries : []);
      } catch (err) {
        console.error("Failed to load industries:", err);
        setError("Couldn't load industries right now. Please try again shortly.");
        setIndustries([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filteredIndustries = industries.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.title?.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <div className="all-ind-page">
        <div className="all-ind-loading">
          <div className="all-ind-spinner" />
          <p>Loading industries…</p>
        </div>
      </div>
    );
  }

  return (
    <section className="all-ind-page">
      <div className="all-ind-container">

        {/* Page header */}
        <div className="all-ind-header">
          <h1>Industries We Work With</h1>
          <div className="all-ind-header-line" />
          <p>
            We tailor our digital marketing strategies to the unique needs
            of every industry we serve.
          </p>
        </div>

        {error && <div className="all-ind-error">{error}</div>}

        {/* Search */}
        <div className="all-ind-search-wrap">
          <input
            type="text"
            className="all-ind-search"
            placeholder="Search industries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Industry grid */}
        {filteredIndustries.length === 0 ? (
          <div className="all-ind-empty">
            <p>
              {searchTerm
                ? "No industries match your search."
                : "No industries available at the moment. Check back soon!"}
            </p>
          </div>
        ) : (
          <div className="all-ind-grid">
            {filteredIndustries.map((industry) => (
              <IndustryCard key={industry._id} industry={industry} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Industries;
