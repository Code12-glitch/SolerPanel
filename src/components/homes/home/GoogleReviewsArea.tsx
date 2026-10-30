"use client";

import { useEffect, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const GOOGLE_PLACE_ID =
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "";
const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=SOLPOWER+AUSTRALIA&query_place_id=${encodeURIComponent(
  GOOGLE_PLACE_ID,
)}`;

interface GoogleReview {
  authorAttribution?: {
    displayName?: string;
    uri?: string;
  };
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: string;
}

interface PlaceReviews {
  name: string;
  rating?: number;
  userRatingCount?: number;
  reviews: GoogleReview[];
}

const GoogleReviewsArea = () => {
  const [place, setPlace] = useState<PlaceReviews | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  useEffect(() => {
    let isActive = true;

    const fetchReviews = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/google-reviews", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to load reviews (${res.status})`);
        }

        const data = await res.json();

        if (isActive) {
          setPlace({
            name: data.name ?? "SOLPOWER AUSTRALIA",
            rating: data.rating,
            userRatingCount: data.userRatingCount,
            reviews: data.reviews ?? [],
          });
        }
      } catch (err: unknown) {
        if (isActive) {
          setError(
            `Google reviews could not be loaded: ${
              err instanceof Error ? err.message : String(err)
            }.`,
          );
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void fetchReviews();
    return () => {
      isActive = false;
    };
  }, [retryCount]);

  return (
    <section className="google-reviews-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title text-center">
              <span className="sub-title">GOOGLE REVIEWS</span>
              <h2>What Our Customers Say</h2>
              <p>
                See what our customers have to say about their
                experience with our solar solutions and
                installation services.
              </p>
            </div>
          </div>
        </div>

        <div className="google-reviews-content text-center">
          <div className="google-rating">
            <div className="google-logo" aria-hidden="true">
              <span>G</span>
            </div>

            <div className="google-rating-content">
              <h4>{place?.name ?? "SOLPOWER AUSTRALIA"}</h4>
              <p>
                {place?.rating !== undefined
                  ? `${place.rating.toFixed(1)} out of 5${
                      place.userRatingCount
                        ? ` from ${place.userRatingCount} Google ratings`
                        : ""
                    }`
                  : "Read genuine customer reviews and discover what our customers say about our services."}
              </p>
            </div>
          </div>

          {isLoading && (
            <p className="google-reviews-message" role="status">
              Loading Google reviews…
            </p>
          )}

          {error && (
            <div className="google-reviews-message" role="alert">
              <p>{error}</p>
              <button
                className="google-review-retry"
                onClick={() => setRetryCount((count) => count + 1)}
                type="button"
              >
                Try Again
              </button>
            </div>
          )}

          {!isLoading && !error && place && (
            <div className="google-reviews-slider">
              {place.reviews.length > 0 ? (
                <>
                  <Swiper
                    className="google-reviews-swiper"
                    modules={[Pagination]}
                    onSwiper={setSwiper}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1200: { slidesPerView: 3 },
                    }}
                  >
                    {place.reviews.map((review, index) => {
                      const author = review.authorAttribution?.displayName;
                      const authorUri = review.authorAttribution?.uri;

                      return (
                        <SwiperSlide
                          key={`${author ?? "review"}-${index}`}
                        >
                          <article className="google-review-card">
                            <div className="google-review-header">
                              <div className="review-user">
                                <h4>
                                  {authorUri ? (
                                    <a
                                      href={authorUri}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {author || "Google user"}
                                    </a>
                                  ) : (
                                    author || "Google user"
                                  )}
                                </h4>
                                {review.relativePublishTimeDescription && (
                                  <span>
                                    {review.relativePublishTimeDescription}
                                  </span>
                                )}
                              </div>
                              <span
                                className="google-small-logo"
                                aria-label="Google"
                              >
                                G
                              </span>
                            </div>
                            {review.rating !== undefined && (
                              <div
                                className="google-review-stars"
                                role="img"
                                aria-label={`${review.rating} out of 5 stars`}
                              >
                                {"★".repeat(
                                  Math.max(
                                    0,
                                    Math.min(5, Math.round(review.rating)),
                                  ),
                                )}
                              </div>
                            )}
                            {review.text && (
                              <p className="google-review-text">
                                {review.text}
                              </p>
                            )}
                          </article>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  {place.reviews.length > 1 && (
                    <div className="google-review-controls">
                      <button
                        type="button"
                        aria-label="Previous Google review"
                        onClick={() => swiper?.slidePrev()}
                      >
                        <span aria-hidden="true">&larr;</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Next Google review"
                        onClick={() => swiper?.slideNext()}
                      >
                        <span aria-hidden="true">&rarr;</span>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <p className="google-reviews-message">
                  No Google reviews are available for this place yet.
                </p>
              )}
            </div>
          )}

          <p className="google-reviews-attribution">Reviews via Google</p>

          <div className="google-review-button">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read SOLPOWER AUSTRALIA reviews on Google"
            >
              View All Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsArea;
