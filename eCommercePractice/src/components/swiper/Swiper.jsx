import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    src: "https://themewagon.github.io/fruitables/img/hero-img-1.png",
    title: "Fruits",
  },
  {
    src: "https://themewagon.github.io/fruitables/img/hero-img-2.jpg",
    title: "Vegetables",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={item.src} alt={item.title} />
              <div className="overlay">
                <span>{item.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
