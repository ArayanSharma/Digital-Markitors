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
    {loopedIndustries.map((item, index) => (
  <div className="workindustry-card" key={`${item._id}-${index}`}>

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
