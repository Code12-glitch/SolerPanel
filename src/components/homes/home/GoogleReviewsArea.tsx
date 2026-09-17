"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const google_reviews = [
  {
    id: 1,
    name: "Customer Name",
    rating: 5,
    review:
      "Excellent service from start to finish. The team was professional, helpful and made the whole solar installation process easy.",
    date: "a month ago",
  },
  {
    id: 2,
    name: "Customer Name",
    rating: 5,
    review:
      "Very happy with the solar installation. The team was friendly, professional and completed the work to a high standard.",
    date: "2 months ago",
  },
  {
    id: 3,
    name: "Customer Name",
    rating: 5,
    review:
      "Great experience with the team. Everything was explained clearly and the installation was completed efficiently.",
    date: "3 months ago",
  },
  {
    id: 4,
    name: "Customer Name",
    rating: 5,
    review:
      "Fantastic service and very professional installation. Highly recommended for anyone considering solar.",
    date: "4 months ago",
  },
  {
    id: 5,
    name: "Customer Name",
    rating: 5,
    review:
      "The whole process was smooth and straightforward. Great communication and excellent customer service.",
    date: "5 months ago",
  },
  {
    id: 6,
    name: "Customer Name",
    rating: 5,
    review:
      "Very pleased with our solar system and the service we received. The team was knowledgeable and helpful throughout.",
    date: "6 months ago",
  },
];

const GoogleReviewsArea = () => {
  return (
    <section className="google-reviews-area">
      <div className="container">

        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title text-center">

              <span className="sub-title">
                GOOGLE REVIEWS
              </span>

              <h2>What Our Customers Say</h2>

              <p>
                See what our customers have to say about their experience
                with our solar solutions and installation services.
              </p>

            </div>
          </div>
        </div>

        {/* Google Rating */}
        <div className="google-rating">
          <div className="google-logo">
            <span>G</span>
          </div>

          <div className="google-rating-content">
            <h4>Google Reviews</h4>

            <div className="rating-stars">
              <span>★★★★★</span>
            </div>

            <p>Excellent customer experiences</p>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="google-reviews-slider">

          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".google-review-next",
              prevEl: ".google-review-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >

            {google_reviews.map((item) => (
              <SwiperSlide key={item.id}>

                <div className="google-review-card">

                  {/* Card Top */}
                  <div className="google-review-header">

                    <div className="review-avatar">
                      {item.name.charAt(0)}
                    </div>

                    <div className="review-user">
                      <h4>{item.name}</h4>

                      <span>{item.date}</span>
                    </div>

                    <div className="google-small-logo">
                      G
                    </div>

                  </div>

                  {/* Stars */}
                  <div className="google-review-stars">

                    {Array.from(
                      { length: item.rating },
                      (_, index) => (
                        <span key={index}>★</span>
                      )
                    )}

                  </div>

                  {/* Review */}
                  <p className="google-review-text">
                    {item.review}
                  </p>

                  <div className="google-review-source">
                    Google Review
                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

          {/* Navigation */}
          <button
            type="button"
            className="google-review-prev"
            aria-label="Previous review"
          >
            ←
          </button>

          <button
            type="button"
            className="google-review-next"
            aria-label="Next review"
          >
            →
          </button>

        </div>

        {/* Review Button */}
        <div className="google-review-button">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Google Reviews
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default GoogleReviewsArea;