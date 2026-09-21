"use client";

import grid_data from "@/data/GridData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const perView = 100;

const GridSystemsArea = () => {
  const [next, setNext] = useState(perView);

  const handleLoadMore = () => {
    setNext((value) => value + 3);
  };

  useEffect(() => {
    const initializeCarousel = () => {
      const $ = (window as any).jQuery;

      if (!$) {
        console.error("jQuery is not loaded.");
        return;
      }

      if (!$.fn || !$.fn.owlCarousel) {
        console.error("Owl Carousel is not loaded.");
        return;
      }

      $(".project-image-carousel").each(function (this: HTMLElement) {
        const carousel = $(this);

        // Destroy existing Owl Carousel instance
        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger("destroy.owl.carousel");
          carousel.removeClass("owl-loaded");
        }

        // Initialize Owl Carousel
        carousel.owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          smartSpeed: 600,

          navText: [
            '<span class="owl-prev-arrow">&#10094;</span>',
            '<span class="owl-next-arrow">&#10095;</span>',
          ],
        });
      });
    };

    // Give jQuery/Owl Carousel time to load
    const timer = setTimeout(initializeCarousel, 100);

    return () => {
      clearTimeout(timer);

      const $ = (window as any).jQuery;

      if (!$ || !$.fn || !$.fn.owlCarousel) {
        return;
      }

      $(".project-image-carousel").each(function (this: HTMLElement) {
        const carousel = $(this);

        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger("destroy.owl.carousel");
        }
      });
    };
  }, [next]);

  return (
    <section className="project-grid-section">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              {/* <h2>Grid Connected Systems</h2> */}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {grid_data.slice(0, next).map((item) => {
            const images = Array.isArray(item.images)
              ? item.images
              : [item.images];

            return (
              <div key={item.id} className="project-grid-box">
                {/* Project Images */}
                <div className="project-thumb">
                  <div className="owl-carousel owl-theme project-image-carousel">
                    {images.map((image, imageIndex) => (
                      <div
                        key={`${item.id}-image-${imageIndex}`}
                        className="project-slide"
                      >
                        <Image
                          src={image}
                          width={600}
                          height={400}
                          alt={`${item.title} - Image ${imageIndex + 1}`}
                          className="project-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <div className="project-content">
                  <h4>{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        {next < grid_data.length && (
          <div className="load-more text-center">
            <button
              type="button"
              className="load-more-btn"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GridSystemsArea;