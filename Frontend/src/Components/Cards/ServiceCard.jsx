import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-[20px] p-8 text-center border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(227,30,36,0.12)] hover:border-[#e31e24]/20 flex flex-col justify-between h-full">
      <div>
        <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>

        <h3 className="text-[20px] font-heading font-bold text-[#2b2b2e] mb-4 leading-tight">{title}</h3>

        <p className="text-[15px] leading-[1.6] text-[#4b5563] mb-6">{description}</p>
      </div>

      <div className="w-10 h-10 bg-transparent text-[#e31e24] rounded-full flex items-center justify-center text-xl mx-auto border border-[#e31e24]/10 group-hover:bg-[#e31e24] group-hover:text-white transition-colors duration-300">
        →
      </div>
    </div>
  );
};

export default ServiceCard;