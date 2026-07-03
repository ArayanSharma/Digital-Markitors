import React from "react";
import "../../Styles/ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">

      <img
        src={icon}
        alt={title}
        className="service-icon"
      />

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="service-arrow">
        →
      </span>

    </div>
  );
};

export default ServiceCard;