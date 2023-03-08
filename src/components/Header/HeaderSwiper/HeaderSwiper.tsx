import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './HeaderSwiper.scss'

import swiperImg from '../../../images/swiper.png';

// import required modules
import { Pagination, Navigation } from "swiper";

export default function HeaderSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay= {true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={swiperImg} alt="Swiper" /></SwiperSlide>
        <SwiperSlide><img src={swiperImg} alt="Swiper" /></SwiperSlide>
        <SwiperSlide><img src={swiperImg} alt="Swiper" /></SwiperSlide>
        <SwiperSlide><img src={swiperImg} alt="Swiper" /></SwiperSlide>
      </Swiper>
    </>
  );
}
