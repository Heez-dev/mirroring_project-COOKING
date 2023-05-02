import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function ClassEventSliderComp() {

  const sliderImg = ["class1.jpg", "class2.jpg", "class3.jpg", "class4.jpg"];

  return (
    <div className='event_slider'>
      <Swiper
        id="event_slider_swiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          sliderImg.map((img)=>(
            <SwiperSlide key={img}>
              <img 
                src={require(`../img/slide/${img}`)}
                alt={`slide-${img}`}
                className='event_slider_img'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
