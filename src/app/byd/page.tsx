import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import React from "react";

export const metadata = {
  title: "BYD Battery - SolerPanel",
};

const BYDPage = () => {
  return (
    <Wrapper>
      <HeaderOne />

      <main>
        <section className="battery-details-area pt-100 pb-100">
          <div className="container">
            <div className="row align-items-center">

              {/* Image */}
              <div className="col-lg-6 col-md-6">
                <div className="battery-details-image">
                  <Image
                    src="/assets/images/battery/BYD.webp"
                    width={600}
                    height={500}
                    alt="BYD Battery"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-6 col-md-6">
                <div className="battery-details-content">
                  <h1>BYD</h1>

                  <p>Founded in 1995, Build Your Dreams (BYD) is a pioneer in battery technology. The BYD company, based in Shenzhen China, is focused on four different industry sectors; Automotive, Rail Transit, Electronics and New Energy which encompasses solar and battery systems. BYD produces a variety of different lithium chemistries, however, the LFP or Lithium Ferro Phosphate, is the chemistry of choice for all stationary applications due to the increased safety and stability.</p>
                  <p>BYD’s new Battery-Box Premium range is available in three main variants; the high voltage HVS & HVM range, and two lower voltage 48V options, the LVS and the LVL Premium.</p>
                  
                </div>
              </div>

              {/* Full Width Content */}
              <div className="col-lg-12 col-md-12">
              
                <div className="battery-details-content">
                    <h3>Battery-Box Premium HVS / HVM</h3>
                  <p>The Battery-Box Premium HVS is BYD’s award-winning cobalt-free lithium iron phosphate (LFP) battery and consists of 2 to 5 HVS battery modules connected in series. This enables a usable capacity of 5.1 to 12.8 kWh to be achieved. If even more capacity is required, the direct parallel connection of up to 3 identical Battery-Box Premium HVS enables a maximum capacity of 38.4 kWh. Later scaling is possible by adding further HVS modules or parallel HVS towers. Thanks to the patented modular plug-in design, no internal cabling is required, which makes the high-voltage storage system particularly user-friendly. Thanks to its compatibility with leading 1-phase and 3-phase inverters, the battery storage system offers a high degree of flexibility, meets the highest safety standards and offers a long service life and high performance. The high discharge capacity, backup power and off-grid capability enable the system operator to make their home self-sufficient. This makes this home storage system the perfect option for anyone who wants to optimize their self-consumption and increase their self-sufficiency.</p>

                 

                  <p>The Battery-Box Premium HVM is the big brother of the HVS storage system. A Battery-Box Premium HVM consists of 3 to 8 HVM 2.76 kWh battery modules, which are connected in series to achieve a usable capacity of 8.28 to 22,08 kWh. In addition, the direct parallel connection of up to 3 identical Battery-Box Premium HVM enables a maximum capacity of 66.24 kWh. As with the HVS, scalability is possible at any time by adding further HVM modules or parallel HVM towers. Apart from the capacity, the Battery-Box Premium HVM differs only slightly from the HVS.</p>


                  <h3>Battery-Box Premium LVS</h3>

                  <p>In contrast to the HVS/HVM, the Battery-Box Premium LVS is a low-voltage battery storage system. The main difference between the HVS/HVM and the LVS/LVL is the voltage level, which is lower for low-voltage batteries. A Battery-Box Premium LVS contains between 1 and 6 LVS battery modules stacked in parallel and can achieve a usable capacity of 4 to 24 kWh. At the same time, up to 16 Battery-Box LVS 16.0 can be connected in parallel to achieve a maximum total capacity of 256 kWh. After commissioning, the LVS can be flexibly scaled by adding further LVS modules or parallel towers.</p>

                  <h3>Battery-Box Premium LVL (2021)</h3>

                  <p>The BYD Battery-Box Premium LVL is a lithium iron phosphate (LFP) battery for use with an external inverter. The Battery-Box Premium LVL can be scaled to meet all project requirements, no matter how large they may be. Starting with a capacity of 15.36 kWh with the LVL15.4, the battery can be expanded to a maximum of 983 kWh by connecting up to 64 batteries in parallel (via a battery management unit). The LVL (2021) version is fully compatible with older LVL versions and brings additional benefits such as even easier installation, space savings by stacking 2 LVL 15.4, powerful emergency/backup power and off-grid functionality.</p>

                  <div className="battery-details-content">
  <Image
    src="/assets/images/batterybox.webp"
    width={606}
    height={400}
    alt="BYD Battery"
    style={{
      width: "100%",
      height: "auto",
    }}
  />
</div>

                  <Link
                    href="/battery"
                    className="battery-read-more"
                  >
                    ← Back to Battery Systems
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default BYDPage;