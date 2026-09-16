"use client";

import battery_data from "@/data/BatteryPData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BatteryArea = () => {
  return (
    <section className="battery-area pt-100 pb-100">
      <div className="container">

        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50">
              <h2>Battery Systems</h2>
            </div>
          </div>
        </div>

        {/* Battery Cards */}
        <div className="battery-card-wrapper">
          {battery_data.map((item) => {
            const image = Array.isArray(item.images)
              ? item.images[0]
              : item.images;

            return (
              <div className="battery-card" key={item.id}>

                {/* LEFT - LOGO / IMAGE */}
                <div className="battery-card-logo">
                  <Image
                    src={image}
                    width={250}
                    height={180}
                    alt={item.title}
                    className="battery-logo"
                  />
                </div>

                {/* RIGHT - CONTENT */}
                <div className="battery-card-content">

                  <h3>{item.title}</h3>

                  <p>
                    {item.description ||
                      "Discover our reliable battery storage solutions designed to store solar energy and provide efficient power when you need it."}
                  </p>

                  <Link
                    href={item.link || "#"}
                    className="battery-read-more"
                  >
                    Read More
                    <span>→</span>
                  </Link>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BatteryArea;