"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import panels_data from "@/data/PanelsData";

const PanelsArea = () => {
  return (
    <section className="battery-area pt-100 pb-100">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50">
              <h2>Solar Panels</h2>
            </div>
          </div>
        </div>

        {/* Panel Cards */}
        <div className="battery-card-wrapper">
          {panels_data.map((item) => (
            <div className="battery-card" key={item.id}>
              {/* LEFT - IMAGE */}
              <div className="battery-card-logo">
                <Image
                  src={item.image}
                  width={250}
                  height={180}
                  alt={item.title}
                  className="battery-logo"
                />
              </div>

              {/* RIGHT - CONTENT */}
              <div className="battery-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {/* MANUAL BUTTONS */}
                <div className="panel-buttons">
                  {item.buttons.map((button, index) => (
                    <Link
                      key={index}
                      href={button.link}
                      className="battery-read-more"
                      target={
                        button.link.endsWith(".pdf") ? "_blank" : undefined
                      }
                      rel={
                        button.link.endsWith(".pdf")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {button.text}
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelsArea;