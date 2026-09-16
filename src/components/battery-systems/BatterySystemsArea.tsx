"use client";

import React from "react";
import battery_data from "@/data/BatteryData";

const BatterySystemsArea = () => {
  return (
    <section className="battery-systems-area">
      <div className="container">
        {battery_data.map((item, index) => (
          <div key={item.id ?? index}>
            {/* Battery system content */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BatterySystemsArea;