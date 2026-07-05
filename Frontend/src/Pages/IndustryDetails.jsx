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
      <div className="bg-[#f4f4f5] min-h-[70vh] flex items-center justify-center font-body text-[#4b5563]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#e31e24] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading industry…</p>
        </div>
      </div>
    );
  }

  /* ── Not found ── */
  if (notFound || !industry) {
    return (
      <div className="bg-[#f4f4f5] min-h-[70vh] flex items-center justify-center font-body text-[#4b5563]">
        <div className="text-center px-5">
          <h2 className="text-2xl font-heading font-extrabold text-[#2b2b2e] mb-4">Industry Not Found</h2>
          <p className="mb-6">The industry you're looking for doesn't exist or has been removed.</p>
          <button className="flex items-center gap-2 bg-[#e31e24] hover:bg-[#c4151a] text-white font-bold py-2.5 px-6 rounded-lg border-0 cursor-pointer transition-all duration-300 mx-auto" onClick={() => navigate("/industries")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
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
      <section className="bg-[#f4f4f5] py-[80px] px-5 font-body">
        <div className="max-w-[850px] mx-auto">

          {/* Back button */}
          <button className="flex items-center gap-2 bg-transparent text-[#e31e24] hover:text-[#c4151a] font-bold border-0 cursor-pointer mb-8 transition-colors duration-300" onClick={() => navigate("/industries")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </button>

          {/* Featured / banner image */}
          <div className="w-full h-auto max-h-[420px] rounded-2xl overflow-hidden border border-[#e5e7eb] mb-8 shadow-sm">
            <img src={industry.image} alt={industry.title} className="w-full h-full object-cover block" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#2b2b2e] mb-6 text-center uppercase">{industry.title}</h1>

          {/* Full description/content */}
          {industry.description && (
            <div className="text-[#4b5563] text-[16px] leading-[1.8] mb-10 whitespace-pre-wrap bg-white p-8 rounded-2xl border border-[#e5e7eb]/60 shadow-sm">{industry.description}</div>
          )}

          {/* Services offered (if available) */}
          {industry.services?.length > 0 && (
            <div className="mb-12">
              <h4 className="text-xl font-heading font-bold text-[#1c1c1e] mb-6 text-center">Services We Offer</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.services.map((service, index) => (
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#e5e7eb]/60 text-[#4b5563] shadow-sm font-semibold" key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#e31e24] shrink-0">
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
            <div className="bg-[#1c1c1e] text-white p-8 rounded-2xl text-center relative overflow-hidden border border-[#e31e24]/10 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/10 to-transparent pointer-events-none"></div>
              <h3 className="text-xl font-heading font-bold mb-6 text-white relative z-10">Ready to grow your {industry.title} business?</h3>
              <button className="bg-[#e31e24] hover:bg-[#c4151a] text-white font-bold py-3 px-8 rounded-lg border-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer shadow-[0_4px_15px_rgba(227,30,36,0.35)] relative z-10" onClick={handleCtaClick}>
                {industry.buttonText || "Get Started"}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── Related Industries ── */}
      {relatedIndustries.length > 0 && (
        <section className="bg-white py-[100px] px-5 border-t border-[#e5e7eb] font-body">
          <div className="text-center mb-12">
            <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#2b2b2e] mb-4 uppercase">Related Industries</h2>
            <div className="w-[60px] h-[5px] bg-[#e31e24] mx-auto rounded-[30px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1250px] mx-auto mb-12 justify-items-center">
            {relatedIndustries.map((item) => (
              <IndustryCard key={item._id} industry={item} />
            ))}
          </div>

          <div className="text-center">
            <button
              className="bg-[#e31e24] hover:bg-[#c4151a] text-white text-[15px] font-bold py-3.5 px-8 rounded-lg border-0 cursor-pointer shadow-[0_4px_15px_rgba(227,30,36,0.35)] transition-all duration-300 hover:scale-[1.03] uppercase tracking-wider"
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
