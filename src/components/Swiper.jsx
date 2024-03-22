import React, { useRef } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../Styles/Swiperstyle.css";

export default function MySwiper({SliderData,color}) {

 
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <SwiperReact
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
        ref={swiperRef}
        loop={true}
        style={{backgroundColor:{color}}}
      >
        {
          SliderData?.map((ele,ind)=>
          <SwiperSlide
          style={{backgroundColor:{color}}}
          >
           <div id='slider-container'>
              <div>
                  <h1>{ele.no}</h1>
                  <h3>{ele.title}</h3>
                  <p>{ele.desc}</p>
              </div>
              <div>
                  <img src={ele.img} alt="" />
              </div>
           </div>
          </SwiperSlide>
          )
        }
      </SwiperReact>
      {/* Next and Previous buttons */}
      <button
        className="swiper-button-prev"
        onClick={handlePrevSlide}
      >
        {/* {"<"} */}
      </button>
      <button
        className="swiper-button-next"
        onClick={handleNextSlide}
      ></button>
    </div>
  );
}
