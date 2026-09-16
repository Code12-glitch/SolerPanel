"use client";

import project_data from "@/data/ProjectData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const categories = [
  "All",
  ...Array.from(new Set(project_data.map((item) => item.category))),
];

const perView = 6;

const ProjectGridArea = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(project_data);
  const [next, setNext] = useState(perView);

  // Filter Projects
  const filterItems = (category: string) => {
    setActiveCategory(category);
    setNext(perView);

    if (category === "All") {
      setItems(project_data);
      return;
    }

    setItems(
      project_data.filter(
        (item) => item.category === category
      )
    );
  };

  // Load More
  const handleLoadMore = () => {
    setNext((value) => value + 3);
  };

  /*
   * Initialize ONLY the image carousels
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = (window as any).jQuery;

      if (!$) {
        console.error("jQuery is not loaded.");
        return;
      }

      if (!$.fn || !$.fn.owlCarousel) {
        console.error("Owl Carousel is not loaded.");
        return;
      }

      $(".project-image-carousel").each(function () {
        const carousel = $(this);

        // Destroy existing instance
        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger("destroy.owl.carousel");
        }

        // Initialize image carousel
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
    }, 300);

    return () => {
      clearTimeout(timer);

      const $ = (window as any).jQuery;

      if (!$ || !$.fn || !$.fn.owlCarousel) {
        return;
      }

      $(".project-image-carousel").each(function () {
        const carousel = $(this);

        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger("destroy.owl.carousel");
        }
      });
    };
  }, [items, next]);

  return (
    <section className="project-grid-section">
      <div className="container">

        {/* =====================================
            Portfolio Filter
        ====================================== */}
        <div className="row">
          <div className="col-lg-12">
            <div className="protfolio-nav text-center">
              <div className="protfolio-menu">
                <ul className="menu-filtering">

                  {categories.map((category) => (
                    <li
                      key={category}
                      onClick={() => filterItems(category)}
                      className={
                        category === activeCategory
                          ? "active current_menu_item"
                          : "current_menu_item"
                      }
                    >
                      {category}
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            3 COLUMN PROJECT GRID
        ====================================== */}
        <div className="project-grid">

          {items.slice(0, next).map((item) => {
            const images = Array.isArray(item.images)
              ? item.images
              : [item.images];

            return (
              <div
                key={item.id}
                className="project-grid-box"
              >

                {/* Project Image */}
                <div className="project-thumb">

                  {/* Inner image carousel only */}
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
                          alt={`${item.title} - Image ${
                            imageIndex + 1
                          }`}
                          className="project-image"
                        />
                      </div>
                    ))}

                  </div>

                </div>

                {/* Project Content */}
                <div className="project-content">

                  <h4>{item.title}</h4>

                  <span>{item.category}</span>

                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================
            Load More
        ====================================== */}
        {next < items.length && (
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

export default ProjectGridArea;