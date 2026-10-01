"use client";

import Script from "next/script";

const GoogleReviewsArea = () => {
  return (
    <section className="google-reviews-area">
      <div className="container">

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

        {/* Trustindex Google Reviews */}
        <div className="google-reviews-widget">
          {/* Trustindex widget code goes here */}
        </div>

        <Script
          src="https://cdn.trustindex.io/loader.js?6807bf882eba589c54661be64cd"
          strategy="afterInteractive"
        />

      </div>
    </section>
  );
};

export default GoogleReviewsArea;