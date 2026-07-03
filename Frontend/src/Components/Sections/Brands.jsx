import { useEffect, useState } from "react";
import "../../Styles/Brands.css";

import logo1 from "../../assets/client-latin-quarters.webp";
import logo2 from "../../assets/moti-.webp";
import logo3 from "../../assets/coco.webp";
import logo4 from "../../assets/client-dhi.webp";
import logo5 from "../../assets/client-goyal-piles-laser-centre.webp";
import logo6 from "../../assets/bangur.webp";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const defaultLogos = [
  { image: logo1, altText: "brand" },
  { image: logo2, altText: "brand" },
  { image: logo3, altText: "brand" },
  { image: logo4, altText: "brand" },
  { image: logo5, altText: "brand" },
  { image: logo6, altText: "brand" },
];

const normalizeMediaUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  if (/^https?:\/\//.test(url)) return url;
  if (url.startsWith("/")) return `${API}${url}`;
  if (url.startsWith("uploads/")) return `${API}/${url}`;
  if (url.startsWith("./uploads/")) return `${API}/${url.slice(2)}`;
  if (url.startsWith("../uploads/")) return `${API}/${url.slice(3)}`;
  return url;
};

function Brands() {
  const [logos, setLogos] = useState(defaultLogos);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/brands`);
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data.brands) ? data.brands : [];
        if (items.length > 0) {
          setLogos(
            items.map((item) => ({
              image: normalizeMediaUrl(item.image),
              altText: item.altText || "brand",
            }))
          );
        }
      } catch (err) {
        console.error("Failed to load brands:", err);
      }
    };
    load();
  }, []);

  return (
    <section className="brands">
      <div className="brands-header">
        <h2>BRANDS WE WORK WITH</h2>
        <span></span>
      </div>

      <div className="brands-slider">
        <div className="brands-track">
          {[...logos, ...logos].map((logo, index) => (
            <div
              className="brand-item"
              key={index}
            >
              <img
                src={logo.image}
                alt={logo.altText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
