"use client";

import React from "react";
import Link from "next/link";

const solar_packages = [
  {
    id: 1,
    size: "6.6kW",
    title: "Solar Package",
    description:
      "A reliable solar solution designed for everyday household energy needs.",
  },
  {
    id: 2,
    size: "10.56kW",
    title: "Solar Package",
    description:
      "A larger solar system designed to provide greater energy generation.",
  },
  {
    id: 3,
    size: "13.2kW",
    title: "Solar Package",
    description:
      "A high-capacity solar solution for homes with higher energy requirements.",
  },
  {
    id: 4,
    size: "19.8kW",
    title: "Solar Package",
    description:
      "A powerful solar solution suitable for larger homes and energy demands.",
  },
];

const SolarPackagesArea = () => {
  return (
    <section className="solar-packages-area">
      <div className="container">

        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title text-center">
              <span className="sub-title">OUR PACKAGES</span>

              <h2>Solar Packages</h2>

              <p>
                Choose a solar package that suits your energy needs and take
                the next step towards clean, renewable energy.
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="row">
          {solar_packages.map((item) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6"
              key={item.id}
            >
              <div className="solar-package-card">

                {/* Top */}
                <div className="solar-package-top">
                  <span>SOLAR</span>

                  <h3>{item.size}</h3>

                  <div className="solar-package-line"></div>

                  <h4>{item.title}</h4>
                </div>

                {/* Description */}
                <div className="solar-package-body">
                  <p>{item.description}</p>

                  <ul>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      Quality solar solution
                    </li>

                    <li>
                      <i className="bi bi-check2-circle"></i>
                      Professional installation
                    </li>

                    <li>
                      <i className="bi bi-check2-circle"></i>
                      Expert support
                    </li>
                  </ul>
                </div>

                {/* Button */}
                <div className="solar-package-footer">
                  <Link
                    href="/get-quote"
                    className="solar-package-btn"
                  >
                    Get a Free Quote
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolarPackagesArea;