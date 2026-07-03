import React, { useEffect, useState } from "react";
import "../../Styles/TestimonialsSec.css";

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
  },

  {
    image: user2,
    name: "MILAN DEEP",
    role: "Director",
    review:
      "I have been working with Digicore Inc. for the last 5 years. Before this I have worked with various SEO agencies for my business but I always ended up wasting my time and money. Digicore Inc. are the best SEO agency. Till date they have been consistent with their efforts and my website has been ranking on top for more than last 4 years. They are very reasonably priced. Thanks to the entire team!!!!",
  },

  {
    image: user3,
    name: "NITIN ARORA",
    role: "Founder - The Moto Men",
    review:
      "I am very happy with services offered by Digicore Inc.. They offer an extensive range of services and have in-depth knowledge of all digital marketing aspects. They are quite professional, knowledgeable, and experienced. I opted for their SEO and SMO services and I really appreciate their efforts as they provided me with the desired results within the stipulated time. So, a BIG thumbs up from my side. Thank you team.",
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


     <div className="testimonial-heading" style={{ backgroundColor: "#fff" }}>
  <h2>TESTIMONIALS</h2>
  <span></span>
</div>

<section className="testimonial-section">

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
    className="testimonialSwiper"
  >

    {testimonials.map((item, index) => (

      <SwiperSlide key={index}>

        <div className="testimonial-card">

          <div className="profile-img">
            <img src={item.image} alt={item.name} />
          </div>

          <h3>{item.name}</h3>

          <h5>{item.role}</h5>

          <p>{item.review}</p>

          <div className="stars">
            ★★★★★
          </div>

          <div className="card-pointer"></div>

        </div>

      </SwiperSlide>

    ))}

  </Swiper>

  <button className="nav-btn left">
    ←
  </button>

  <button className="nav-btn right">
    →
  </button>

</section>
    </>
  );
}
