import "../../Styles/Brands.css";

import logo1 from "../../assets/client-latin-quarters.webp";
import logo2 from "../../assets/moti-.webp";
import logo3 from "../../assets/coco.webp";
import logo4 from "../../assets/client-dhi.webp";
import logo5 from "../../assets/client-goyal-piles-laser-centre.webp";
import logo6 from "../../assets/bangur.webp";

function Brands() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
  ];

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
                src={logo}
                alt="brand"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;