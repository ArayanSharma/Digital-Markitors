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

  if (industries.length === 0) {
    return null;
  }

  return (
 <>
   <section className="workindustry-section">

  <div className="workindustry-heading">
    <h2>INDUSTRY WE WORK WITH</h2>
    <div className="workindustry-line"></div>
  </div>

  <div className="workindustry-slider-wrapper">

    <button
      className="workindustry-slider-btn workindustry-left-btn"
      onClick={scrollLeft}
    >
      ←
    </button>

    <div
      className="workindustry-cards"
      ref={sliderRef}
    >
    {industries.map((item) => (
  <div className="workindustry-card" key={item._id}>

    <div className="workindustry-icon">
      <img src={item.image} alt={item.title} />
    </div>

    <h3>{item.title}</h3>

    <p>{item.description}</p>

    <button
      className="workindustry-read-btn"
      onClick={() => navigate(`/industries/${item.slug}`)}
    >
      {item.buttonText || "Read More"}
    </button>

  </div>
))}
    </div>

    <button
      className="workindustry-slider-btn workindustry-right-btn"
      onClick={scrollRight}
    >
      →
    </button>

  </div>

  <div className="workindustry-viewall">
    <button
      className="workindustry-viewall-btn"
      onClick={() => navigate("/industries")}
    >
      View All Industries
    </button>
  </div>

</section>
 </>
  )
}
