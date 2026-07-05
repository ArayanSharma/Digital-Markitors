import { useEffect, useState } from "react";

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
    <section className="bg-white py-[60px] px-0 max-[769px]:py-[50px] max-[769px]:px-[15px] max-[481px]:py-10 max-[481px]:px-[10px] overflow-hidden font-body border-b border-[#e5e7eb]">
      <div className="text-center mb-10">
        <h2 className="text-[#2b2b2e] text-[42px] max-[769px]:text-[30px] max-[481px]:text-2xl font-heading font-extrabold uppercase mb-4 max-[769px]:leading-[1.3] max-[481px]:leading-[1.4]">BRANDS WE WORK WITH</h2>
        <span className="inline-block w-[70px] max-[769px]:w-[50px] max-[481px]:w-10 h-[5px] max-[769px]:h-1 max-[481px]:h-[3px] bg-[#e31e24] rounded-[10px]"></span>
      </div>

      <div className="w-full overflow-hidden bg-[#f5f5f5] py-[50px]">
        <div className="flex justify-center items-center w-max gap-[30px] max-[769px]:gap-5 max-[481px]:gap-[15px] animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              className="w-[240px] min-w-[240px] h-[70px] mx-6 max-[769px]:w-[180px] max-[769px]:min-w-[180px] max-[769px]:h-[90px] max-[769px]:mx-5 max-[769px]:p-[8px_12px] max-[481px]:w-[140px] max-[481px]:min-w-[140px] max-[481px]:h-[72px] max-[481px]:p-2 max-[481px]:rounded-lg flex justify-center items-center"
              key={index}
            >
              <img
                src={logo.image}
                alt={logo.altText}
                className="w-[200px] h-[110px] max-[769px]:h-[56px] max-[481px]:h-[44px] object-contain transition-transform duration-300 ease-in-out hover:scale-[1.08]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
