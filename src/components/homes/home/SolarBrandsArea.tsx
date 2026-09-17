"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const solar_brands = [
  {
    id: 1,
    name: "Brand 1",
    image: "/assets/images/brands/brand-1.png",
  },
  {
    id: 2,
    name: "Brand 2",
    image: "/assets/images/brands/brand-2.png",
  },
  {
    id: 3,
    name: "Brand 3",
    image: "/assets/images/brands/brand-3.png",
  },
  {
    id: 4,
    name: "Brand 4",
    image: "/assets/images/brands/brand-4.png",
  },
  {
    id: 5,
    name: "Brand 5",
    image: "/assets/images/brands/brand-5.png",
  },
  {
    id: 6,
    name: "Brand 6",
    image: "/assets/images/brands/brand-6.png",
  },
  {
    id: 7,
    name: "Brand 7",
    image: "/assets/images/brands/brand-7.png",
  },
  {
    id: 8,
    name: "Brand 8",
    image: "/assets/images/brands/brand-8.png",
  },
  {
    id: 9,
    name: "Brand 9",
    image: "/assets/images/brands/brand-9.png",
  },
  {
    id: 10,
    name: "Brand 10",
    image: "/assets/images/brands/brand-10.png",
  },
  {
    id: 11,
    name: "Brand 11",
    image: "/assets/images/brands/brand-11.png",
  },
  {
    id: 12,
    name: "Brand 12",
    image: "/assets/images/brands/brand-12.png",
  },
  {
    id: 13,
    name: "Brand 13",
    image: "/assets/images/brands/brand-13.png",
  },
  {
    id: 14,
    name: "Brand 14",
    image: "/assets/images/brands/brand-14.png",
  },
  {
    id: 15,
    name: "Brand 15",
    image: "/assets/images/brands/brand-15.png",
  },
  {
    id: 16,
    name: "Brand 16",
    image: "/assets/images/brands/brand-16.png",
  },
  {
    id: 17,
    name: "Brand 17",
    image: "/assets/images/brands/brand-17.png",
  },
  {
    id: 18,
    name: "Brand 18",
    image: "/assets/images/brands/brand-18.png",
  },
  {
    id: 19,
    name: "Brand 19",
    image: "/assets/images/brands/brand-19.png",
  },
  {
    id: 20,
    name: "Brand 20",
    image: "/assets/images/brands/brand-20.png",
  },
  {
    id: 21,
    name: "Brand 21",
    image: "/assets/images/brands/brand-21.png",
  },
  {
    id: 22,
    name: "Brand 22",
    image: "/assets/images/brands/brand-22.png",
  },
  {
    id: 23,
    name: "Brand 23",
    image: "/assets/images/brands/brand-23.png",
  },
  {
    id: 24,
    name: "Brand 24",
    image: "/assets/images/brands/brand-24.png",
  },
  {
    id: 25,
    name: "Brand 25",
    image: "/assets/images/brands/brand-25.png",
  },
  {
    id: 26,
    name: "Brand 26",
    image: "/assets/images/brands/brand-26.png",
  },
  {
    id: 27,
    name: "Brand 27",
    image: "/assets/images/brands/brand-27.png",
  },
  {
    id: 28,
    name: "Brand 28",
    image: "/assets/images/brands/brand-28.png",
  },
  {
    id: 29,
    name: "Brand 29",
    image: "/assets/images/brands/brand-29.png",
  },
  {
    id: 30,
    name: "Brand 30",
    image: "/assets/images/brands/brand-30.png",
  },
  {
    id: 31,
    name: "Brand 31",
    image: "/assets/images/brands/brand-31.png",
  },
  {
    id: 32,
    name: "Brand 32",
    image: "/assets/images/brands/brand-32.png",
  },
];

const SolarBrandsArea = () => {
  return (
    <section className="solar-brands-area">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title text-center">
              <span className="sub-title">OUR BRANDS</span>

              <h2>Our Solar Panel &amp; Inverters Brands</h2>

              <p>
                We work with reputable solar panel and inverter brands to
                provide reliable and high-quality solar solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="solar-brands-slider">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={25}
            slidesPerView={2}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            {solar_brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="solar-brand-item">
                  <Image
                    src={brand.image}
                    width={180}
                    height={90}
                    alt={brand.name}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default SolarBrandsArea;