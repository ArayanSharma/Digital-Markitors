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
    <section className="bg-[#f4f4f5] py-[100px] px-5 font-body min-h-[70vh]">
      <div className="max-w-[1250px] mx-auto">

        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-[44px] max-[769px]:text-[32px] font-heading font-extrabold text-[#2b2b2e] mb-4 uppercase">
            Industries We Work With
          </h1>
          <div className="w-[60px] h-[5px] bg-[#e31e24] mx-auto rounded-[30px] mb-6" />
          <p className="text-[17px] leading-[1.7] text-[#4b5563] max-w-[600px] mx-auto">
            We tailor our digital marketing strategies to the unique needs
            of every industry we serve.
          </p>
        </div>

        {error && <div className="bg-red-50 text-red-500 border border-red-200 rounded-xl p-4 text-center max-w-[600px] mx-auto mb-8">{error}</div>}

        {/* Search */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            className="w-full max-w-[500px] bg-white border border-[#e5e7eb] rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#e31e24]/40 focus:ring-1 focus:ring-[#e31e24]/40 shadow-sm transition-all text-[#1c1c1e] text-[15px]"
            placeholder="Search industries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Industry grid */}
        {filteredIndustries.length === 0 ? (
          <div className="text-center py-12 text-[#6b7280]">
            <p>
              {searchTerm
                ? "No industries match your search."
                : "No industries available at the moment. Check back soon!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
