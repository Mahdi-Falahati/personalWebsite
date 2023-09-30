import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Grid } from "swiper/modules";

export default function Slider({ images, height, delay,slidesPerView }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView}
        grid={{
          rows: 1,
        }}
        autoplay={{
          delay: delay || 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Grid]}
        className="mySwiper"
      >
        {images.map((src, id) => {
          return (
            <SwiperSlide key={id}>
              <img src={src} className={height} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
