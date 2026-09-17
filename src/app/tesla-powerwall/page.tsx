import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import React from "react";

export const metadata = {
  title: "Tesla Powerwall - SolerPanel",
};

const TeslaPowerwallPage = () => {
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
                    src="/assets/images/battery/TESLA-POWERSHELL.webp"
                    width={600}
                    height={500}
                    alt="Tesla Powerwall 2"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-6 col-md-6">
                <div className="battery-details-content">
                  <h1>Tesla Powerwall 2</h1>

                  <p>
                    With the release of the first-generation Powerwall almost
                    7 years ago, Tesla Energy made a big impact in the solar
                    world and pushed home energy storage into the mainstream.
                    Released in 2016, the current Powerwall 2 has been designed
                    to be more compact, easier to handle, and simpler to
                    install than the first Powerwall.
                  </p>

                  <h3>Features:</h3>

                  <div className="blog-details-list">
                    <ul>
                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        AC-Coupled Battery System with Lithium-Ion Battery Pack
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        13.5kWh Storage Capacity
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        10-year Warranty
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        Automatic, Virtual System Updates
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        Child &amp; Pet Friendly, with No Wires or Hot Vents
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        Quiet Operation
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        Can be Retrofitted to Your Existing Solar System
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        Easily Stackable for System Flexibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Full Width Content */}
              <div className="col-lg-12 col-md-12">
                <div className="battery-details-content">
                  <p>
                    Powerwall 2 comes with rectangular curves, venting on
                    either side for cooling, a bright green LED strip, a
                    simple on/off switch, IP56 rating, and can be
                    ground-mounted and wall-mounted. The Powerwall 2 uses{" "}
                    <b>
                      Lithium NMC (Nickel-Manganese-Cobalt) Battery Cells
                    </b>{" "}
                    similar to the Lithium NCA cells used in Tesla electric
                    vehicles, which are{" "}
                    <b>
                      developed by Tesla in collaboration with Panasonic.
                    </b>
                  </p>

                  <p>
                    Tesla Powerwall 2 has an{" "}
                    <b>integrated AC to DC inverter-charger;</b> hence, it can
                    be easily retrofitted to homes with an existing solar
                    installation. To function together with a solar array, the
                    Powerwall system requires a separate solar inverter.
                    However, it is compatible with &lsquo;almost&rsquo; any
                    model of inverter since it operates independently of the
                    Powerwall.
                  </p>

                  <h3>Management Systems:</h3>

                  <p>
                    Tesla Powerwall 2 is equipped with a Liquid Thermal
                    Management System that enables it to operate in a wide
                    range of temperatures from -20 to +50°C and is still the
                    only battery in the market with that technology. The
                    Powerwall is likely to derate or reduce its power output at
                    ambient temperatures above 40°C, as power derating is very
                    common among most lithium-ion-based batteries. However,
                    the liquid thermal management system helps it by expelling
                    more heat under high loads and during rapid charging,
                    which can provide a longer lifespan and better performance
                    at higher temperatures.
                  </p>

                  <p>
                    Another advantage of this system is that it enables the
                    Powerwall to charge at temperatures below freezing because
                    when the temperature is below freezing, preconditioning
                    turns on and heats the Powerwall to improve charging
                    performance. Whereas many other lithium batteries suffer
                    from severely reduced charge rates in such situations,
                    lithium battery cells cannot charge properly below 5°C due
                    to reduced diffusion rates on the anode.
                  </p>

                  <h3>Storage Capacity:</h3>

                  <p>
                    The Powerwall 2 comes with a large 13.5kWh storage
                    capacity. For more storage capacity, it can be installed
                    up to 3 modules per phase, which can provide an impressive
                    40.5kWh of total storage capacity per phase and more than
                    enough for most standard households. Hence, on a 3-phase
                    configuration, one can go up to nine units of Powerwall
                    linked together.
                  </p>

                  <p>
                    Tesla Powerwall 2 is Off-Grid Capable provided it is
                    installed in a protected location with an adequately sized
                    solar array, plus a backup generator is required in most
                    colder locations with short winter days. But for such a
                    setup, more than one Powerwall is required as its charge
                    rating is limited to a maximum of 5kW of solar (solar
                    inverter size).
                  </p>

                  <p>
                    The Tesla App is easy to interface with and common to all
                    Tesla products. It provides a seamless interface between
                    EV control, solar generation, and energy storage. It also
                    offers real-time monitoring of grid energy usage, battery
                    state of charge, solar generation historical data, and
                    useful statistics. It provides 4 different control modes.
                  </p>

                  <div className="blog-details-list">
                    <ul>
                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        <b>Self-Powered mode –</b> Increases self-consumption
                        of solar by storing excess generation.
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        <b>Vehicle charging during a power outage –</b>{" "}
                        Enables the Powerwall to dynamically adjust the charge
                        rate to prevent overloading the system during a power
                        outage.
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        <b>Time-based control –</b> Prioritises energy storage
                        or consumption based on your electricity usage tariffs
                        to reduce bills and save money.
                      </li>

                      <li>
                        <i className="bi bi-check2-circle"></i>{" "}
                        <b>Storm Watch –</b> Automatically charges the
                        Powerwall in the event of a major storm or blackout.
                      </li>
                    </ul>
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

export default TeslaPowerwallPage;