import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable card used by both the /industries grid and the
// Related Industries section on the details page.
const IndustryCard = ({ industry }) => {
  const navigate = useNavigate();

  if (!industry) return null;

  const goToDetails = () => navigate(`/industries/${industry.slug}`);

  return (
    <div
      className="group bg-white rounded-[20px] overflow-hidden border-t-[5px] border-t-[#e31e24] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-[350ms] ease-in-out cursor-pointer w-full max-w-[380px] flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(227,30,36,0.12)]"
      onClick={goToDetails}
    >
      <div className="w-full h-[200px] max-[481px]:h-[170px] overflow-hidden bg-[#fee2e2]/20">
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover block transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.06]"
        />
      </div>

      <div className="py-[26px] px-6 max-[481px]:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[21px] max-[481px]:text-[18px] font-heading font-extrabold text-[#2b2b2e] mb-3 leading-[1.3]">{industry.title}</h3>
          <p className="text-[14.5px] text-[#4b5563] leading-[1.7] mb-5 [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">{industry.description}</p>
        </div>

        <button
          className="self-start border-2 border-[#e31e24] rounded-[50px] bg-transparent text-[#e31e24] py-[10px] px-6 text-sm font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e31e24] hover:text-white hover:scale-[1.03]"
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
