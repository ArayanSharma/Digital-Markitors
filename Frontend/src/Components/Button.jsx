import React from "react";
import "../Styles/Hero.css"

const Button = ({ text, outline }) => {
  return (
    <button className={outline ? "hero-btn outline" : "hero-btn"}>
      {text}
    </button>
  );
};

export default Button;