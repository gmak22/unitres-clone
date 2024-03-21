import React, { useRef } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../Styles/Swiperstyle.css";

export default function MySwiper() {

  const SliderData = [
    {
      img:`https://www.unitrestech.com/assets/images/frame4_s1.png`,
      no:`01`,
      title:`Software Type`,
      desc:`
      . Web, mobile, and desktop app modernization
      . Enterprise application modernization (ERP, CRM, BPA, HCM, SCM, PPM, BI, data warehouses) & SaaS modernization.
      . IoT, big data applications, blockchain, AI/ML modernization`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame4_s2.png`,
      no:`02`,
      title:`Platforms`,
      desc:`
      . Dynamics 365
      . Salesforce
      . Magento
      . SharePoint
      . ServiceNow and other platforms`
    },
    {
      img:`https://www.unitrestech.com/assets/images/frame4_s3.png`,
      no:`03`,
      title:`Installed on`,
      desc:`
      . Cloud-based, on-premise, and hybrid servers.
      . Computers, laptops, mobile devices, and wearables.`
    }
  ]
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
        loop={true} // Enable loop mode
      >
        {
          SliderData.map((ele,ind)=>
          <SwiperSlide>
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
