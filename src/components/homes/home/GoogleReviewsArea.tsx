
"use client";

import { useEffect, useState } from "react";

type GoogleReview = {
  rating: number;
  text: string;
  published: string;
  author: string;
  authorUrl: string;
  photoUrl: string;
  reviewUrl: string;
};

type ReviewsData = {
  name: string;
  rating: number | null;
  totalReviews: number;
  googleMapsUri: string;
  reviews: GoogleReview[];
};

export default function GoogleReviewsArea() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch("/api/google-reviews", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Reviews could not be loaded");
        }

        const result: ReviewsData = await response.json();

        if (!Array.isArray(result.reviews)) {
          throw new Error("Invalid reviews response");
        }

        setData(result);
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error("Customer reviews failed to load");
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadReviews();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <section aria-live="polite">Loading customer reviews...</section>;
  }

  if (error || !data) {
    return (
      <section>
        <h2>Customer Reviews</h2>
        <p>Reviews are temporarily unavailable.</p>
        <a
          href="https://maps.app.goo.gl/sVbBVuBN4aKWnPar5"
          target="_blank"
          rel="noreferrer"
        >
          Read our reviews on Google
        </a>
      </section>
    );
  }

  return (
    <section>
      <h2>What Our Customers Say</h2>

      {data.rating !== null && (
        <p>
          Google rating: {data.rating} / 5
          {" · "}
          {data.totalReviews} reviews
        </p>
      )}

      {data.reviews.map((review, index) => (
        <article key={`${review.author}-${index}`}>
          <h3>
            {review.authorUrl ? (
              <a
                href={review.authorUrl}
                target="_blank"
                rel="noreferrer"
              >
                {review.author}
              </a>
            ) : (
              review.author
            )}
          </h3>

          <p aria-label={`${review.rating} out of 5 stars`}>
            {"★".repeat(Math.max(0, Math.min(5, review.rating)))}
          </p>

          <p>{review.text}</p>
          <small>{review.published}</small>

          {review.reviewUrl && (
            <p>
              <a
                href={review.reviewUrl}
                target="_blank"
                rel="noreferrer"
              >
                View review on Google
              </a>
            </p>
          )}
        </article>
      ))}

      <a
        href={data.googleMapsUri || "https://maps.app.goo.gl/sVbBVuBN4aKWnPar5"}
        target="_blank"
        rel="noreferrer"
      >
        View all reviews on Google
      </a>
    </section>
  );
}
