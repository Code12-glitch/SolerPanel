import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import React from "react";

export const metadata = {
  title: "Sungrow Battery - SolerPanel",
};

const SungrowPage = () => {
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
                    src="/assets/images/battery/SUNGROW2.webp"
                    width={600}
                    height={500}
                    alt="Sungrow Battery"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-6 col-md-6">
                <div className="battery-details-content">
                  <h1>Sungrow</h1>

                  <p>Sungrow was founded in China in 1997 by Professor Cao Renxian from Hefei University of Technology, China. Sungrow solar inverters are highly reliable and backed by excellent tech support and warranties.Sungrow hybrid inverters when matched with the noteworthy Sungrow batteries are an excellent way to get home storage for thousands of dollars less than another costly brand.</p>

                  <h3>Key Points of Sungrow Batteries:</h3>
                  <h4>High-Performance</h4>

                  <div className="blog-details-list">
                    <ul>
                      <li>
                        <i className="bi bi-check2-circle"></i> Up to 30A continuous charging and discharging current with high efficiency  </li>
                      <li>
                        <i className="bi bi-check2-circle"></i> Up to 100% usable energy</li>
                    </ul>
                  </div>
                  <h4>Safety</h4>
                  <div className="blog-details-list">
                    <ul>
                        <li><i className="bi bi-check2-circle"></i> Lithium iron phosphate battery</li>
                        <li><i className="bi bi-check2-circle"></i> Multi-stage protection design and extensive safety certification</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Full Width Content */}
              <div className="col-lg-12 col-md-12">
                <div className="battery-details-content">
                 <h4>Flexibility</h4>

                  <div className="blog-details-list">
                    <ul>
                      <li>
                        <i className="bi bi-check2-circle"></i> Extendable during lifetime</li>
                      <li>
                        <i className="bi bi-check2-circle"></i> Support 3-8 modules per unit, max. 4 units in parallel, 9–100 kWh capacity range</li>
                    </ul>
                  </div>
                  <h4>Easy Installation</h4>
                  <div className="blog-details-list">
                    <ul>
                        <li><i className="bi bi-check2-circle"></i> Compact and light, single-person installation </li>
                        <li><i className="bi bi-check2-circle"></i> Plug and play, no cables are needed between battery modules</li>
                    </ul>
                  </div>

                  <p>Sungrow High-Voltage Modular Batteries are made using Lithium Ferro Phosphate (LFP) cells which are considered the safest and longest-lasting battery cell chemistry. They are compatible with Sungrow Single-Phase (SH-RS) and Three-Phase (SH-RT) hybrid inverter range. Each battery unit comprises a base unit, a head unit containing the Battery Management System (BMS), a slide-in switchgear DC isolator, and three to eight 3.2kWh lithium battery modules.</p>

                  <p>Each battery unit comprises a minimum of 3 modules of the battery (which means the minimum size of a battery is 9.6kWh) and a maximum of 8 modules per unit (which comes to 25.6kWh). However, it can go up to 100kWh with 4 stacks of 8 modules in parallel. It is easily scalable and up to 100% usage of the stored energy. It offers high charge and discharge efficiency, minimizing energy losses during the storage and retrieval of power. It comes with 10 years of warranty.</p>

                  
                  <p>Its Battery Management System (BMS) monitors the battery against overcharging, over-discharging, short circuits, and overheating. That helps in extending the battery’s lifespan, improves safety, and provides real-time monitoring and control.</p>

                 

                  <Link
                    href="/battery"
                    className="battery-read-more mt-30"
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

export default SungrowPage;