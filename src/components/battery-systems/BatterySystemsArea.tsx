"use client";

import battery_data from "@/data/BatteryData";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

const perView = 300;

const BatterySystemsArea = () => {
  const [next, setNext] = useState(perView);

  // Lightbox
  const [lightboxImages, setLightboxImages] = useState<StaticImageData[]>(
    []
  );
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleLoadMore = () => {
    setNext((value) => value + 3);
  };

  // Open lightbox
  const openLightbox = (
    images: StaticImageData[],
    index: number
  ) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  // Previous image
  const showPreviousImage = () => {
    setLightboxIndex((current) =>
      current === 0
        ? lightboxImages.length - 1
        : current - 1
    );
  };

  // Next image
  const showNextImage = () => {
    setLightboxIndex((current) =>
      current === lightboxImages.length - 1
        ? 0
        : current + 1
    );
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxImages.length === 0) {
        return;
      }

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImages.length]);

  // Prevent background scrolling
  useEffect(() => {
    if (lightboxImages.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxImages.length]);

  // Initialize Owl Carousel
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

      $(".project-image-carousel").each(function (
        this: HTMLElement
      ) {
        const carousel = $(this);

        // Destroy existing carousel
        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger("destroy.owl.carousel");
          carousel.removeClass("owl-loaded");
        }

        // Count images
        const imageCount = carousel.find(".project-slide").length;

        const hasMultipleImages = imageCount > 1;

        // Initialize Owl Carousel
        carousel.owlCarousel({
          items: 1,

          loop: hasMultipleImages,

          margin: 0,

          nav: hasMultipleImages,

          dots: hasMultipleImages,

          autoplay: hasMultipleImages,

          autoplayTimeout: 4000,

          autoplayHoverPause: true,

          smartSpeed: 600,

          navText: [
            '<span class="owl-prev-arrow">&#10094;</span>',
            '<span class="owl-next-arrow">&#10095;</span>',
          ],
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);

      const $ = (window as any).jQuery;

      if (!$ || !$.fn || !$.fn.owlCarousel) {
        return;
      }

      $(".project-image-carousel").each(function (
        this: HTMLElement
      ) {
        const carousel = $(this);

        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger("destroy.owl.carousel");
        }
      });
    };
  }, [next]);

  return (
    <>
      <section className="project-grid-section">
        <div className="container">

          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                {/* <h2>Battery Systems</h2> */}
              </div>
            </div>
          </div>

          {/* Battery Systems Grid */}
          <div className="project-grid">

            {battery_data.slice(0, next).map((item) => {
              const images: StaticImageData[] =
                Array.isArray(item.images)
                  ? item.images
                  : [item.images];

              return (
                <div
                  key={item.id}
                  className="project-grid-box"
                >

                  {/* Battery Images */}
                  <div className="project-thumb">

                    <div className="owl-carousel owl-theme project-image-carousel">

                      {images.map((image, imageIndex) => (
                        <div
                          key={`${item.id}-image-${imageIndex}`}
                          className="project-slide"
                          onClick={() =>
                            openLightbox(
                              images,
                              imageIndex
                            )
                          }
                          role="button"
                          tabIndex={0}
                          onKeyDown={(event) => {
                            if (
                              event.key === "Enter" ||
                              event.key === " "
                            ) {
                              openLightbox(
                                images,
                                imageIndex
                              );
                            }
                          }}
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

                  {/* Battery System Title */}
                  <div className="project-content">
                    <h4>{item.title}</h4>
                  </div>

                </div>
              );
            })}

          </div>

          {/* Load More */}
          {next < battery_data.length && (
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

      {/* ==========================================
          BATTERY LIGHTBOX
      ========================================== */}

      {lightboxImages.length > 0 && (
        <div
          className="project-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Battery system image gallery"
        >

          {/* Close */}
          <button
            type="button"
            className="project-lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close gallery"
          >
            &times;
          </button>

          {/* Previous */}
          {lightboxImages.length > 1 && (
            <button
              type="button"
              className="project-lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
            >
              &#10094;
            </button>
          )}

          {/* Image */}
          <div
            className="project-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <Image
              src={lightboxImages[lightboxIndex]}
              alt={`Battery system image ${
                lightboxIndex + 1
              }`}
              fill
              priority
              sizes="90vw"
              className="project-lightbox-image"
            />

          </div>

          {/* Next */}
          {lightboxImages.length > 1 && (
            <button
              type="button"
              className="project-lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
            >
              &#10095;
            </button>
          )}

          {/* Counter */}
          {lightboxImages.length > 1 && (
            <div className="project-lightbox-counter">
              {lightboxIndex + 1} /{" "}
              {lightboxImages.length}
            </div>
          )}

        </div>
      )}
    </>
  );
};

export default BatterySystemsArea;