import React, { useEffect, useState } from "react";

import user1 from "../../assets/pawandeep-singh.webp";
import user2 from "../../assets/milan-deep.webp";
import user3 from "../../assets/seo-o.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const defaultTestimonials = [
  {
    image: user1,
    name: "PAWANDEEP SINGH",
    role: "Director - Signature Visas",
    review:
      "Choosing Digital markitor was my best decision..Their team identified and shortlists keywords for my company and within 3-4 months most the keywords started ranking on the first page of google. I thank Mr Ram and his team for generating extra revenue through google for me. Your SEO work is commendable.",
    rating: 5,
  },

  {
    image: user2,
    name: "MILAN DEEP",
    role: "Director",
    review:
      "I have been working with Digicore Inc. for the last 5 years. Before this I have worked with various SEO agencies for my business but I always ended up wasting my time and money. Digicore Inc. are the best SEO agency. Till date they have been consistent with their efforts and my website has been ranking on top for more than last 4 years. They are very reasonably priced. Thanks to the entire team!!!!",
    rating: 5,
  },

  {
    image: user3,
    name: "NITIN ARORA",
    role: "Founder - The Moto Men",
    review:
      "I am very happy with services offered by Digicore Inc.. They offer an extensive range of services and have in-depth knowledge of all digital marketing aspects. They are quite professional, knowledgeable, and experienced. I opted for their SEO and SMO services and I really appreciate their efforts as they provided me with the desired results within the stipulated time. So, a BIG thumbs up from my side. Thank you team.",
    rating: 5,
  },
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

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/testimonials`);
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data.testimonials) ? data.testimonials : [];
        if (items.length > 0) {
          setTestimonials(
            items.map((item) => ({
              image: normalizeMediaUrl(item.image) || user1,
              name: item.name,
              role: item.role,
              review: item.review,
              rating: item.rating || 5,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      }
    };
    load();
  }, []);

  return (
    <>


      <div className="bg-white [text-align:center] pt-10 pb-[50px] font-body">
        <h2 className="text-[42px] max-[769px]:text-[32px] font-heading font-extrabold text-[#2b2b2e] mb-[15px] uppercase">TESTIMONIALS</h2>
        <span className="block w-[60px] h-[5px] bg-[#e31e24] mx-auto rounded-[30px]"></span>
      </div>

      <section className="relative min-h-[650px] max-[769px]:min-h-[auto] flex justify-center items-center py-20 px-0 max-[769px]:px-5 max-[769px]:pb-[100px] bg-[#f4f4f5] font-body">

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".right",
            prevEl: ".left",
          }}
          className="testimonialSwiper w-full"
        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="relative w-[650px] max-w-[90%] mx-auto min-h-[420px] h-auto bg-white rounded-[40px] py-[90px] px-[70px] pb-20 [text-align:center] border-t-[5px] border-t-[#e31e24] shadow-[0_15px_40px_rgba(227,30,36,0.06)] z-[2] max-[769px]:w-full max-[769px]:max-w-full max-[769px]:min-h-[auto] max-[769px]:py-[70px] max-[769px]:px-[25px] max-[769px]:pb-[60px] max-[769px]:rounded-[30px] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(227,30,36,0.12)] hover:transition-all hover:duration-300">
                
                {/* Big quotation mark */}
                <div className="absolute top-8 left-10 text-[#e31e24] opacity-15 text-[120px] font-serif leading-none select-none">“</div>

                <div className="absolute top-[-40px] max-[769px]:top-[-35px] left-1/2 -translate-x-1/2 w-[85px] h-[85px] max-[769px]:w-[70px] max-[769px]:h-[70px] rounded-full overflow-hidden border-[4px] border-[#e31e24] bg-white shadow-md">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-[#1c1c1e] text-[26px] max-[769px]:text-[20px] font-heading font-extrabold uppercase mb-2 mt-4">{item.name}</h3>

                <h5 className="text-[#6b7280] text-[14px] max-[769px]:text-xs font-medium mb-[30px] max-[769px]:mb-5 tracking-wide">{item.role}</h5>

                <p className="text-[#4b5563] text-[15px] leading-[1.7] max-[769px]:leading-[1.6] max-w-full mx-auto whitespace-normal [overflow-wrap:anywhere] break-words">{item.review}</p>

                <div className="mt-[30px] text-[#f5a623] text-2xl max-[769px]:text-xl tracking-[4px]">
                  {"★".repeat(item.rating || 5)}{"☆".repeat(5 - (item.rating || 5))}
                </div>

                <div className="absolute bottom-[-40px] max-[769px]:bottom-[-28px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[35px] border-l-transparent max-[769px]:border-l-[25px] border-r-[35px] border-r-transparent max-[769px]:border-r-[25px] border-t-[45px] border-t-white max-[769px]:border-t-[30px]"></div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        <button className="nav-btn left absolute top-1/2 -translate-y-1/2 transition-all duration-300 w-16 h-16 max-[769px]:w-[46px] max-[769px]:h-[46px] rounded-full text-[#e31e24] border-2 border-[#e31e24]/60 shadow-[0_8px_20px_rgba(227,30,36,0.06)] bg-white text-2xl max-[769px]:text-lg cursor-pointer z-10 hover:bg-[#e31e24] hover:text-white left-[10%] min-[769px]:max-[901px]:left-[2%] max-[769px]:top-auto max-[769px]:bottom-[15px] max-[769px]:translate-y-0 max-[769px]:left-1/2 max-[769px]:ml-[-58px]">
          ←
        </button>

        <button className="nav-btn right absolute top-1/2 -translate-y-1/2 transition-all duration-300 w-16 h-16 max-[769px]:w-[46px] max-[769px]:h-[46px] rounded-full text-[#e31e24] border-2 border-[#e31e24]/60 shadow-[0_8px_20px_rgba(227,30,36,0.06)] bg-white text-2xl max-[769px]:text-lg cursor-pointer z-10 hover:bg-[#e31e24] hover:text-white right-[10%] min-[769px]:max-[901px]:right-[2%] max-[769px]:top-auto max-[769px]:bottom-[15px] max-[769px]:translate-y-0 max-[769px]:left-1/2 max-[769px]:right-auto max-[769px]:ml-3">
          →
        </button>

      </section>
    </>
  );
}
