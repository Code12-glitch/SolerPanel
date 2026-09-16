import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import React from "react";

export const metadata = {
  title: "Alpha-ESS Battery - SolerPanel",
};

const AlphaESSPage = () => {
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
                    src="/assets/images/battery/ALPHAESS.webp"
                    width={600}
                    height={500}
                    alt="Alpha-ESS Battery"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-6 col-md-6">
                <div className="battery-details-content">
                  <h1>Alpha-ESS</h1>

                  <p>Alpha-ESS is a Chinese manufacturer based in Jiangsu, China, and makes its batteries in Suzhou, China. It was founded in 2012 and has 10+ subsidiaries providing local services and 40000+ systems actively running in over 50 countries, including Germany, Australia, Italy, South Korea and the United Kingdom.</p>

                  <p>According to a 2021 report, Alpha-ESS accounted for 15% of the global market share of the 4.5GWh of residential solar batteries shipped in 2020, next to Tesla and Pylontech. Alpha-ESS has won multiple awards for its products and has a strong reputation in the ESS market as a leading brand. It has also expanded its production lines to include portable solar generators, the commercial & industrial, with all of its products subjected to multiple international standard certificates including IEC, TÜV Rhine, KBIA, and JET.</p>

                </div>
              </div>

              {/* Full Width Content */}
              <div className="col-lg-12 col-md-12">
                <div className="battery-details-content">
                  <h3>Battery Cell:</h3>
                  <p>Alpha-ESS makes its batteries with the Lithium Iron Phosphate Cells. This makes them safe, long-lasting and able to operate under high temperatures without the risk of explosion.</p>

                  <h3>Installation:</h3>

                  <p>Alpha-ESS offers Modular Energy Storage Systems. They are compatible with both new installations (DC-coupled) and retrofits (AC-coupled), and they can be installed off-grid too. The incorporated inverter eliminates the additional cost of an inverter. For those houses with an existing Solar PV System, they can be AC-coupled to the system.</p>

                  <h3>Design:</h3>

                  <p>They are designed with aesthetically pleasing storage units in which individually purchased modules can be added to scale up net output power without requiring additional equipment or floor space. They are also compact and lightweight allowing users to maximize available installation space without making any major compromises on power storage capacity.</p>


                  <h3>Battery Management System:</h3>

                  <p>Designed for self-consumption, Alpha-ESS batteries offer a comprehensive solution that combines a hybrid inverter, a battery management system and a storage unit. This integrated system allows for the seamless addition of single modules to scale the storage capacity as needed. With the hybrid inverter, solar power generated can be directly utilized in the household or used to charge the battery. Additionally, the inverter enables the conversion of battery power into usable AC power. Alpha-ESS incorporates inverters in their batteries to eliminate additional costs for extra components.</p>

                  <h3>Warranty:</h3>

                  <p>Alpha-ESS systems come with 5 years of product warranty and 10 years of performance warranty.</p>

                  <h3>Range of Inverters and Batteries:</h3>
                  
                  <p>SMILE 5 Hybrid Inverter Single Phase Residential Series Inverter compatible with Low Voltage SMILE Batteries, SMILE5-BAT (5.7kWh Battery), SMILE-BAT-10.3P (10.3kWh Battery) and SMILE-BAT-13.3P (13.3kWh Battery). One can connect up to 6 batteries in parallel, making it expandable to 80kWh.</p>
                  
                  <p>SMILE-S6-HV Single Phase High Voltage Residential Series Invertercompatible withSMILE-BAT-8.2PH (8.2kWh Battery). One can connect up to 6 batteries in parallel, making it expandable to 49.5kWh.</p>
                  
                  <p>They both can be installed indoors/outdoors, offer 24X7 monitoring, come with UPS ability and are VPP ready.</p>



                  {/* Back Button */}
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

export default AlphaESSPage;