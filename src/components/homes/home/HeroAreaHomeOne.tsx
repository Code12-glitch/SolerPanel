'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


interface DataType {
  id: number;
  subtitle: string;
  title: React.JSX.Element;
  sm_des: string;
}

const hero_slider_data: DataType[] = [
  {
    id: 1,
    subtitle: "Powering a Brighter Future",
    title: <>Secure Your Battery <br /> Rebate Today!</>,
    sm_des: ''
  },
  {
    id: 2,
    subtitle: "Powering a Brighter Future",
    title: <>Secure Your Battery <br /> Rebate Today!</>,
    sm_des: ''
  },
  // update for swiper 
  {
    id: 3,
    subtitle: "Powering a Brighter Future",
    title: <>Secure Your Battery <br /> Rebate Today!</>,
    sm_des: ''
  },
  {
    id: 4,
    subtitle: "Powering a Brighter Future",
    title: <>Secure Your Battery <br /> Rebate Today!</>,
    sm_des: ''
  },
]

const HeroAreaHomeOne = () => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        // Navigation arrows
        navigation={{
          nextEl: ".hero-button-next-1",
          prevEl: ".hero-button-prev-1",
        }}
        className="slider-list owl-carousel">

        <div className="owl-nav d-none d-md-block">
          <div className="owl-prev hero-button-prev-1">
            <i className="bi bi-arrow-right"></i>
          </div>
          <div className="owl-next hero-button-next-1">
            <i className="bi bi-arrow-left"></i>
          </div>
        </div>

        {hero_slider_data.map((item, i) =>
          <SwiperSlide key={i}
            className={`slider-section hero_slider d-flex align-items-center ${i === 1 ? 'style-three' : ''}`}
            style={{ padding: '210px 0px' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="slider-content wow animate__zoomIn">
                    <h4>{item.subtitle}</h4>
                    <h1>{item.title}</h1>
                    <p>{item.sm_des}</p>
                    <div className="solar-btn slider1 wow slideInLeft">
                      <Link href="/service-details">Our Service <i className="bi bi-arrow-right"></i></Link>
                    </div>
                    <div className="solar-btn slider2  wow slideRight">
                      <Link href="/about">More About! <i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default HeroAreaHomeOne;