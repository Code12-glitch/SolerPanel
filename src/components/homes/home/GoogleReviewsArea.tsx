"use client";

import { useEffect } from "react";

const GoogleReviewsArea = () => {
  useEffect(() => {
    const scriptId = "trustindex-google-reviews";

    // Prevent loading the script more than once
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");

    script.id = scriptId;
    script.src =
      "https://cdn.trustindex.io/loader.js?6807bf882eba589c54661be64cd";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);

      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

        {/* Trustindex Google Reviews */}
        <div className="google-reviews-widget">
          <div
            data-widget-id="6807bf882eba589c54661be64cd"
          />
        </div>

      </div>
    </section>
  );
};

export default GoogleReviewsArea;