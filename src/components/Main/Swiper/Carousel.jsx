import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  './style.scss'
import { DATA_IMAGES } from '../../selectors/dataImages';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel () {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
        loop={true}
        autoplay={{delay: 2500, disableOnInteraction: false}}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1240: {
            slidesPerView: 6,
            spaceBetween: 30
          }
        }}
    >
        {DATA_IMAGES.map((item, index) => (
            <SwiperSlide className="custom_slide" key={index}><img src={item} alt='img'/></SwiperSlide>
        ))}
    </Swiper>
  )
}
