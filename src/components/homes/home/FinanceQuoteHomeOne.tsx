"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import finance_logo from "@/assets/images/plenti-1.png";

const FinanceQuoteHomeOne = () => {
  return (
    <section className="finance-quote-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Finance Partners */}
          <div className="col-lg-8 col-md-12">
            <div className="finance-partners-content">

              <div className="section-title">
                <span className="sub-title">FINANCE</span>

                <h2>Our Finance Partners</h2>

                <p>
                  We work with trusted finance partners to help make your
                  solar investment more accessible. Speak with our team
                  about available finance options for your solar system.
                </p>
              </div>

              <div className="finance-partners-logos">
                <div className="finance-partner-logo">
                  <Image
                    src={finance_logo}
                    width={180}
                    height={80}
                    alt="Plenti Finance"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Get Quote */}
          <div className="col-lg-4 col-md-12">
            <div className="finance-quote-button">

              <h3>Ready to Go Solar?</h3>

              <p>
                Get a personalised quote for your home or business.
              </p>

              <Link
                href="/get-quote"
                className="get-quote-btn"
              >
                Get a Quote
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinanceQuoteHomeOne;