import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/IndustryCard.css";

// Reusable card used by both the /industries grid and the
// Related Industries section on the details page.
const IndustryCard = ({ industry }) => {
  const navigate = useNavigate();

  if (!industry) return null;

  const goToDetails = () => navigate(`/industries/${industry.slug}`);

  return (
    <div className="ind-card" onClick={goToDetails}>
      <div className="ind-card-image">
        <img src={industry.image} alt={industry.title} />
      </div>

      <div className="ind-card-body">
        <div>
          <h3>{industry.title}</h3>
          <p>{industry.description}</p>
        </div>

        <button
          className="ind-card-btn"
          onClick={(e) => {
            e.stopPropagation();
            goToDetails();
          }}
        >
          {industry.buttonText || "Read More"}
        </button>
      </div>
    </div>
  );
};

export default IndustryCard;
