"use client";

const GoogleReviewsArea = () => {
  return (
    <section className="google-reviews-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title text-center">
              <span className="sub-title">GOOGLE REVIEWS</span>

              <h2>What Our Customers Say</h2>

              <p>
                See what our customers have to say about their experience with
                our solar solutions and installation services.
              </p>
            </div>
          </div>
        </div>

        <div className="google-reviews-widget">
          <iframe
            src="https://cdn.trustindex.io/amp-widget.html#6807bf882eba589c54661be64cd"
            width="100%"
            height="465"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            title="Sol Power Australia Google Reviews"
            style={{
              border: "none",
              width: "100%",
              minHeight: "465px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsArea;