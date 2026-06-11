import "../../Styles/Tools.css";

import locobuzz from "../../assets/locobuzz.webp";
import ahrefs from "../../assets/ahref.webp";
import fireball from "../../assets/fireball.webp";
import moz from "../../assets/moz-seo.webp";
import analytics from "../../assets/google-analytics.webp";
import searchConsole from "../../assets/search-console.webp";
import tagManager from "../../assets/google-tag-manager.webp";


function Tools() {
  const tools = [
    locobuzz,
    ahrefs,
    fireball,
    moz,
    analytics,
    searchConsole,
    tagManager,
  ];

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
              <img src={tool} alt="tool" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;