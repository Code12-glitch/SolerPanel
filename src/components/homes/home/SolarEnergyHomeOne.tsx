"use client";

import React, { useState } from "react";
import Image from "next/image";

import solar_image from "@/assets/images/solar-panels-and-power-lines-at-sunset.jpg";

interface DataType {
  tab_id: string;
  tab_name: string;
  sm_info: string;
  feature_list: string[];
  sm_info_2: string;
}

const tab_data: DataType[] = [
  {
    tab_id: "",
    tab_name: "",
    sm_info:
      "Solar energy is a clean, renewable power source harnessed from the sun. It’s environmentally friendly, producing no harmful emissions of pollutants.",

    feature_list: [
      "One of its key benefits is that it’s free and abundant, available almost everywhere around the world.",
      "Unlike traditional energy sources, it doesn’t rely on fossil fuels, making it a sustainable option for the future.",
      "Solar power represents the future of energy.",
      "Over time, the cost of installing solar panels has dropped significantly, thanks to advancements in technology and increased production by manufacturers at larger scales.",
      "For most homes in Australia, solar panels are an affordable investment.",
      "The government also offers state rebates for solar batteries and panels along with different rebates for new solar panel installation.",
    ],

    sm_info_2:
      "Are you looking for a provider offering solar services near me? SOLPOWER AUSTRALIA is one of the leading local solar power companies, ready to help both commercial and residential clients with solar support.",
  },
];

const SolarEnergyHomeOne = ({ style = false }: { style?: boolean }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className={`about-section ${style ? "style-three" : ""}`}>
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-6 col-md-12">
            <div className="wow slideInLeft">
              <div className="about-thumb">
                <Image
                  src={solar_image}
                  style={{
                    height: "auto",
                    width: "100%",
                  }}
                  alt="Solar panels and power lines at sunset"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 col-md-12">
            <div className="about-section-title">
              <div className="about-section-main-title wow slideInRight">
                <h2>What is solar energy and is it expensive?</h2>
              </div>
            </div>

            {/* Tabs */}
            <div className="tab">
              <ul
                className="nav nav-pills tabs active wow slideInRight"
                id="pills-tab"
                role="tablist"
              >
                {tab_data.map((item, index) => (
                  <li
                    key={index}
                    className={`nav-item ${
                      currentTab === index ? "current" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                    role="presentation"
                  >
                    <button
                      className={`nav-link tab_items ${
                        currentTab === index ? "active" : ""
                      }`}
                      id={`pills-${item.tab_id}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#pills-${item.tab_id}`}
                      type="button"
                      role="tab"
                      aria-controls={`pills-${item.tab_id}`}
                      aria-selected={currentTab === index}
                    >
                      {item.tab_name}
                      <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              <div className="tab-content" id="pills-tabContent">
                {tab_data.map((item, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      index === currentTab ? "show active" : ""
                    }`}
                    id={`pills-${item.tab_id}`}
                    role="tabpanel"
                    aria-labelledby={`pills-${item.tab_id}-tab`}
                  >
                    <div className="tabs_item">
                      <div className="tabs-items-content">
                        {/* Main Description */}
                        <div className="about-content-discription wow slideInLeft">
                          <p>{item.sm_info}</p>
                        </div>

                        {/* Feature List */}
                        <div className="about-content-discription wow slideInLeft">
                          <div className="blog-details-list">
                            <ul>
                              {item.feature_list.map((feature, i) => (
                                <li key={i}>
                                  <i className="bi bi-check2-circle"></i>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Second Description */}
                        <div className="about-content-discription wow slideInLeft">
                          <p>{item.sm_info_2}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarEnergyHomeOne;
