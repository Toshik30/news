import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { DATA_IMAGES } from '../../selectors/dataImages';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel () {
  return (
    <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{delay: 2500, disableOnInteraction: false}}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        {DATA_IMAGES.map((item, index) => (
            <SwiperSlide key={index}><img src={item} alt='img'/></SwiperSlide>
        ))}
    </Swiper>
  )
}
