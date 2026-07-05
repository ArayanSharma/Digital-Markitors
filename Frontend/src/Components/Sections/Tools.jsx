import { useEffect, useState } from "react";

import locobuzz from "../../assets/locobuzz.webp";
import ahrefs from "../../assets/ahref.webp";
import fireball from "../../assets/fireball.webp";
import moz from "../../assets/moz-seo.webp";
import analytics from "../../assets/google-analytics.webp";
import searchConsole from "../../assets/search-console.webp";
import tagManager from "../../assets/google-tag-manager.webp";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const defaultTools = [
  { image: locobuzz, altText: "tool" },
  { image: ahrefs, altText: "tool" },
  { image: fireball, altText: "tool" },
  { image: moz, altText: "tool" },
  { image: analytics, altText: "tool" },
  { image: searchConsole, altText: "tool" },
  { image: tagManager, altText: "tool" },
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

function Tools() {
  const [tools, setTools] = useState(defaultTools);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/tools`);
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data.tools) ? data.tools : [];
        if (items.length > 0) {
          setTools(
            items.map((item) => ({
              image: normalizeMediaUrl(item.image),
              altText: item.altText || "tool",
            }))
          );
        }
      } catch (err) {
        console.error("Failed to load tools:", err);
      }
    };
    load();
  }, []);

  return (
    <section className="py-[60px] px-5 bg-white overflow-hidden max-[769px]:py-[50px] max-[769px]:px-[15px] max-[481px]:py-10 max-[481px]:px-[10px] font-body border-b border-[#e5e7eb]">
      <div className="text-center mb-10">
        <h2 className="text-[42px] max-[769px]:text-[30px] max-[481px]:text-2xl max-[481px]:leading-[1.3] font-heading font-extrabold text-[#2b2b2e] uppercase mb-4 tracking-[1px]">TOOLS WE WORK WITH</h2>
        <span className="inline-block w-[70px] h-[5px] max-[769px]:w-[50px] max-[769px]:h-1 max-[481px]:w-10 max-[481px]:h-[3px] bg-[#e31e24] rounded-[10px]"></span>
      </div>

      <div className="w-full overflow-hidden bg-[#f5f5f5] py-[50px] relative">
        <div className="flex items-center w-max gap-[30px] max-[769px]:gap-5 max-[481px]:gap-[15px] animate-scroll-right hover:[animation-play-state:paused]">
          {[...tools, ...tools].map((tool, index) => (
            <div
              className="w-[240px] min-w-[240px] h-[70px] flex justify-center items-center mx-5 bg-transparent max-[993px]:min-w-[180px] max-[993px]:h-[90px] max-[769px]:w-[180px] max-[769px]:mx-5 max-[769px]:px-3 max-[769px]:py-2 max-[481px]:w-[140px] max-[481px]:min-w-[140px] max-[481px]:h-[72px] max-[481px]:mx-3 max-[481px]:p-2 max-[481px]:rounded-lg"
              key={index}
            >
              <img
                src={tool.image}
                alt={tool.altText}
                className="w-[200px] h-[110px] max-w-[160px] max-h-[90px] object-contain [transition:transform_0.3s_ease] hover:scale-110 max-[993px]:h-[60px] max-[769px]:h-[56px] max-[769px]:max-w-[110px] max-[481px]:h-[44px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
