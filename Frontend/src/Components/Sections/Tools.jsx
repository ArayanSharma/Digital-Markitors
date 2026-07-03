import { useEffect, useState } from "react";
import "../../Styles/Tools.css";

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
    <section className="tools-section">
      <div className="tools-header">
        <h2>TOOLS WE WORK WITH</h2>
        <span></span>
      </div>

      <div className="tools-slider">
        <div className="tools-track">
          {[...tools, ...tools].map((tool, index) => (
            <div className="tool-card" key={index}>
              <img src={tool.image} alt={tool.altText} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
