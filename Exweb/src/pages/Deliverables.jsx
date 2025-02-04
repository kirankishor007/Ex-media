import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import brandingImg from "../assets/brandingImg.jpg";
import digitalImg from "../assets/digitalImg.jpg";
import contentImg from "../assets/contentImg.jpg";
import marketingImg from "../assets/marketingImg.jpg";
import socialMediaImg from "../assets/socialMediaImg.jpg";
import analyticsImg from "../assets/analyticsImg.jpg";

function Deliverables() {
  return (
    <section className="deliverables">
      <h2>Our Deliverables</h2>
      <p className="deliverables-intro">
        Transforming ideas into strategic brand experiences.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="deliverables-slider"
      >
        {/* Brand Identity */}
        <SwiperSlide>
          <div className="deliverable-card" style={{ backgroundImage: `url(${brandingImg})` }}>
            <div className="card-icon">
              <img src={brandingImg} alt="Brand Identity" />
            </div>
            <h3>Brand Identity</h3>
            <p>Logo, typography, color palette & brand strategy.</p>
          </div>
        </SwiperSlide>

        {/* Digital Strategy */}
        <SwiperSlide>
          <div className="deliverable-card" style={{ backgroundImage: `url(${digitalImg})` }}>
            <div className="card-icon">
              <img src={digitalImg} alt="Digital Strategy" />
            </div>
            <h3>Digital Strategy</h3>
            <p>Web design, UI/UX, and social media execution.</p>
          </div>
        </SwiperSlide>

        {/* Content Marketing */}
        <SwiperSlide>
          <div className="deliverable-card" style={{ backgroundImage: `url(${contentImg})` }}>
            <div className="card-icon">
              <img src={contentImg} alt="Content Marketing" />
            </div>
            <h3>Content Marketing</h3>
            <p>Storytelling, video, and brand engagement.</p>
          </div>
        </SwiperSlide>

        {/* Digital Marketing */}
        <SwiperSlide>
          <div className="deliverable-card" style={{ backgroundImage: `url(${marketingImg})` }}>
            <div className="card-icon">
              <img src={marketingImg} alt="Digital Marketing" />
            </div>
            <h3>Digital Marketing</h3>
            <p>SEO, SEM, and social media campaigns to boost online presence.</p>
          </div>
        </SwiperSlide>

        {/* Social Media */}
        <SwiperSlide>
          <div className="deliverable-card" style={{ backgroundImage: `url(${socialMediaImg})` }}>
            <div className="card-icon">
              <img src={socialMediaImg} alt="Social Media" />
            </div>
            <h3>Social Media</h3>
            <p>Engagement and growth strategies across platforms.</p>
          </div>
        </SwiperSlide>

        {/* Analytics & Insights */}
        <SwiperSlide>
          <div className="deliverable-card" style={{ backgroundImage: `url(${analyticsImg})` }}>
            <div className="card-icon">
              <img src={analyticsImg} alt="Analytics & Insights" />
            </div>
            <h3>Analytics & Insights</h3>
            <p>Data-driven insights to optimize marketing strategies.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Deliverables;
