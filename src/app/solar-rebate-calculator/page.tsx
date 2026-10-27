
import type { Metadata } from "next";
import SolarRebateCalculator from "../../components/calculators/SolarRebateCalculator";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Solar Rebate Calculator | SolPower Australia",
  description:
    "Estimate your Australian solar rebate and explore solar savings with SolPower Australia.",
};

export default function SolarRebateCalculatorPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <section className="solar-rebate-hero">
          <div className="container">
            <span className="solar-rebate-eyebrow">
              SOLERPanel SOLAR SAVINGS
            </span>

            <h1>Solar Rebate Calculator</h1>

            <p>
              Discover your estimated solar incentive and take the
              next step towards a more energy-efficient home.
            </p>
          </div>
        </section>

        <section className="solar-rebate-page-content">
          <div className="container">
            <SolarRebateCalculator />

            <div className="solar-rebate-information">
              <h2>How does the solar rebate work?</h2>

              <p>
                Eligible Australian solar installations may qualify
                for Small-scale Technology Certificates (STCs)
                under the federal Small-scale Renewable Energy Scheme.
                The value of the incentive depends on eligibility,
                system capacity, installation date and the applicable
                postcode zone.
              </p>

              <h3>What affects your estimated rebate?</h3>

              <ul>
                <li>Your Australian installation postcode.</li>
                <li>The eligible capacity of your solar system.</li>
                <li>The installation year and applicable scheme rules.</li>
                <li>The net value received for eligible certificates.</li>
              </ul>

              <p className="solar-rebate-disclaimer">
                Estimates are indicative only and are not a confirmed
                rebate or quotation. Eligibility, certificate calculations
                and certificate values must be verified before installation.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </Wrapper>
  );
}
