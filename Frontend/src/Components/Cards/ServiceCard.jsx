import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-white py-[35px] px-7 max-[769px]:py-7 max-[769px]:px-[22px] rounded-3xl max-[501px]:rounded-[18px] shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition-all duration-[400ms] ease-in-out cursor-pointer flex flex-col min-h-[420px] max-[993px]:min-h-[auto] relative overflow-hidden hover:-translate-y-[10px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">

      <span className="absolute top-0 left-0 w-0 h-1 bg-[#f57c14] transition-[width] duration-[400ms] ease-in-out group-hover:w-full" aria-hidden="true"></span>

      <img
        src={icon}
        alt={title}
        className="w-[60px] h-[60px] max-[769px]:w-[50px] max-[769px]:h-[50px] object-contain mb-[25px] transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.08]"
      />

      <h3 className="text-[30px] max-[993px]:text-2xl max-[769px]:text-[22px] max-[501px]:text-xl font-bold text-[#111] leading-[1.4] mb-[18px]">{title}</h3>

      <p className="text-[19px] max-[993px]:text-[17px] max-[769px]:text-base max-[501px]:text-[15px] leading-[1.8] max-[769px]:leading-[1.7] text-[#555] flex-1">{description}</p>

      <span className="text-4xl max-[769px]:text-[30px] text-[#f57c14] font-bold mt-[25px] transition-transform duration-300 ease-in-out group-hover:translate-x-[10px]">
        →
      </span>

    </div>
  );
};

export default ServiceCard;