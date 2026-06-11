import React, { useEffect, useState } from "react";
import "../../Styles/TestimonialsSec.css";

import user1 from "../../assets/pawandeep-singh.webp";
import user2 from "../../assets/milan-deep.webp";
import user3 from "../../assets/seo-o.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const testimonials = [
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

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent(
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrent(
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

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
            <img src={item.image} alt="" />
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