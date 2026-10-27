
"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import styles from "./BuildSystem.module.scss";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

const appliances = [
  { id: "aircon", name: "Air conditioner", watts: 1320, hours: 5, category: "Cooling" },
  { id: "fridge", name: "Fridge-freezer", watts: 200, hours: 12, category: "Kitchen" },
  { id: "lights", name: "LED lighting", watts: 150, hours: 5, category: "Lighting" },
  { id: "washer", name: "Washing machine", watts: 700, hours: 0.5, category: "Laundry" },
  { id: "tv", name: "Television", watts: 100, hours: 4, category: "Living" },
  { id: "pool", name: "Pool pump", watts: 750, hours: 4, category: "Outdoor" },
  { id: "dishwasher", name: "Dishwasher", watts: 1800, hours: 0.5, category: "Kitchen" },
  { id: "computer", name: "Computer", watts: 200, hours: 6, category: "Living" },
  { id: "kettle", name: "Electric kettle", watts: 2200, hours: 0.15, category: "Kitchen" },
  { id: "dryer", name: "Clothes dryer", watts: 2500, hours: 0.5, category: "Laundry" },
];

const packages = [
  { size: 6.6, price: 3990, panels: 14 },
  { size: 10, price: 5490, panels: 21 },
  { size: 13, price: 7990, panels: 27 },
];

const sizingGuides = [
  {
    title: "Start with your daily energy use",
    description:
      "Use your electricity bill as a reference, then add appliances you expect to run regularly.",
  },
  {
    title: "Account for roof conditions",
    description:
      "Roof direction, shading and available area all affect how much solar your home can generate.",
  },
  {
    title: "Plan for storage and charging",
    description:
      "Include battery storage or EV charging if you want your system estimate to account for them.",
  },
  {
    title: "Confirm the design before purchase",
    description:
      "A site assessment is needed to verify panel layout, equipment, incentives and final pricing.",
  },
];

type Usage = { quantity: number; hours: number };

export default function BuildSystemPage() {
  const [step, setStep] = useState(0);
  const [usage, setUsage] = useState<Record<string, Usage>>({});
  const [roofArea, setRoofArea] = useState(80);
  const [orientation, setOrientation] = useState("North");
  const [shading, setShading] = useState("None");
  const [battery, setBattery] = useState(0);
  const [evCharger, setEvCharger] = useState(false);
  const [quoteDraftOpened, setQuoteDraftOpened] = useState(false);

  const dailyKwh = useMemo(
    () =>
      appliances.reduce((total, appliance) => {
        const item = usage[appliance.id];
        if (!item) return total;
        return total + (appliance.watts * item.hours * item.quantity) / 1000;
      }, 0),
    [usage]
  );

  const peakKw = appliances.reduce((total, appliance) => {
    const item = usage[appliance.id];
    return total + (item ? appliance.watts * item.quantity : 0);
  }, 0) / 1000;

  const orientationFactor =
    orientation === "North" ? 1 :
    orientation === "East / West" ? 0.85 : 0.65;

  const shadeFactor =
    shading === "Heavy" ? 0.65 :
    shading === "Partial" ? 0.85 : 1;

  const recommendedKw = Math.max(
    6.6,
    Math.ceil((dailyKwh / (4 * orientationFactor * shadeFactor)) * 10) / 10
  );

  const selectedPackage =
    packages.find((item) => item.size >= recommendedKw) ?? packages[2];
  const packageLimitExceeded = recommendedKw > packages[packages.length - 1].size;

  const panelCount = Math.min(
    Math.floor((roofArea * 0.75) / 2),
    selectedPackage.panels
  );
  const roofLimitsPanelCount = panelCount < selectedPackage.panels;

  const solarPrice = selectedPackage.price;
  const batteryPrice = battery * 850;
  const evPrice = evCharger ? 1200 : 0;
  const estimatedTotal = solarPrice + batteryPrice + evPrice;

  function updateAppliance(
    id: string,
    field: "quantity" | "hours",
    value: number
  ) {
    setUsage((previous) => {
      const current = previous[id] ?? {
        quantity: 1,
        hours: appliances.find((item) => item.id === id)?.hours ?? 1,
      };

      if (value <= 0 && field === "quantity") {
        const next = { ...previous };
        delete next[id];
        return next;
      }

      return {
        ...previous,
        [id]: {
          ...current,
          [field]: field === "quantity"
            ? Math.min(20, Math.max(1, value))
            : Math.min(24, Math.max(0, value)),
        },
      };
    });
  }

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = "Solar system builder quote request";
    const message = [
      "Solar system builder quote request",
      "",
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Postcode: ${formData.get("postcode")}`,
      "",
      `Solar package: ${selectedPackage.size} kW`,
      `Calculated system size: ${recommendedKw} kW`,
      `Indicative panel count: ${panelCount}`,
      `Estimated daily appliance use: ${dailyKwh.toFixed(1)} kWh`,
      `Roof area: ${roofArea} m²`,
      `Roof orientation: ${orientation}`,
      `Roof shading: ${shading}`,
      `Battery: ${battery ? `${battery} kWh` : "Not selected"}`,
      `EV charger: ${evCharger ? "Included" : "Not selected"}`,
      `Indicative system estimate: $${estimatedTotal.toLocaleString("en-AU")}`,
    ].join("\n");

    const mailtoUrl =
      "mailto:info@solpoweraustralia.com.au" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    setQuoteDraftOpened(true);
    window.location.href = mailtoUrl;
  }

  const steps = ["Appliances", "Your roof", "Battery & EV", "Your system"];

  return (
    <Wrapper>
      <HeaderOne />
      <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>SOLPOWER AUSTRALIA</span>
        <h1>Solar System Size Calculator</h1>
        <p>
          Estimate your household energy use, explore a suitable solar system
          size, and add battery storage or EV charging to your plan.
        </p>
      </section>

      <section className={styles.sizingGuide} aria-labelledby="sizing-guide-heading">
        <div className={styles.guideContainer}>
          <div className={styles.guideHeading}>
            <span className={styles.eyebrow}>PLAN YOUR SYSTEM</span>
            <h2 id="sizing-guide-heading">What goes into your estimate?</h2>
          </div>
          <div className={styles.guideGrid}>
            {sizingGuides.map((guide, index) => (
              <article className={styles.guideCard} key={guide.title}>
                <span className={styles.guideNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.layout}>
        <section className={styles.builder}>
          <div className={styles.progress}>
            {steps.map((label, index) => (
              <button
                key={label}
                type="button"
                className={step === index ? styles.activeStep : ""}
                onClick={() => setStep(index)}
              >
                <span>{index + 1}</span>
                {label}
              </button>
            ))}
          </div>

          {step === 0 && (
            <div className={styles.section}>
              <h2>What appliances do you use?</h2>
              <p>Select your appliances and estimate their daily usage.</p>

              <div className={styles.applianceGrid}>
                {appliances.map((item) => {
                  const selected = usage[item.id];

                  return (
                    <article className={styles.appliance} key={item.id}>
                      <div>
                        <span className={styles.category}>{item.category}</span>
                        <h3>{item.name}</h3>
                        <p>{item.watts.toLocaleString()} W typical power</p>
                      </div>

                      {selected ? (
                        <div className={styles.controls}>
                          <label>
                            Quantity
                            <input
                              type="number"
                              min="1"
                              max="20"
                              value={selected.quantity}
                              onChange={(e) =>
                                updateAppliance(
                                  item.id, "quantity", Number(e.target.value)
                                )
                              }
                            />
                          </label>
                          <label>
                            Hours/day
                            <input
                              type="number"
                              min="0"
                              max="24"
                              step="0.25"
                              value={selected.hours}
                              onChange={(e) =>
                                updateAppliance(
                                  item.id, "hours", Number(e.target.value)
                                )
                              }
                            />
                          </label>
                          <button
                            type="button"
                            className={styles.remove}
                            onClick={() =>
                              setUsage((previous) => {
                                const next = { ...previous };
                                delete next[item.id];
                                return next;
                              })
                            }
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className={styles.add}
                          onClick={() =>
                            setUsage((previous) => ({
                              ...previous,
                              [item.id]: {
                                quantity: 1,
                                hours: item.hours,
                              },
                            }))
                          }
                        >
                          + Add appliance
                        </button>
                      )}
                    </article>
                  );
                })}
              </div>

              <div className={styles.usage}>
                <span>Estimated daily consumption</span>
                <strong>{dailyKwh.toFixed(1)} kWh/day</strong>
                <span>Peak connected load: {peakKw.toFixed(2)} kW</span>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className={styles.section}>
              <h2>Tell us about your roof</h2>
              <p>Your available roof space and sunlight affect system sizing.</p>

              <label className={styles.field}>
                Approximate usable roof area
                <strong>{roofArea} m²</strong>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="5"
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                />
              </label>

              <label className={styles.field}>
                Main roof orientation
                <select
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                >
                  <option>North</option>
                  <option>East / West</option>
                  <option>South</option>
                </select>
              </label>

              <label className={styles.field}>
                Roof shading
                <select
                  value={shading}
                  onChange={(e) => setShading(e.target.value)}
                >
                  <option>None</option>
                  <option>Partial</option>
                  <option>Heavy</option>
                </select>
              </label>

              <div className={styles.notice}>
                Roof area is an estimate. A professional site assessment
                is needed to confirm the number of panels that will fit.
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.section}>
              <h2>Make your system work harder</h2>
              <p>Add battery storage or home EV charging to your setup.</p>

              <label className={styles.field}>
                Battery storage
                <select
                  value={battery}
                  onChange={(e) => setBattery(Number(e.target.value))}
                >
                  <option value={0}>No battery</option>
                  <option value={5}>5 kWh</option>
                  <option value={10}>10 kWh</option>
                  <option value={13.5}>13.5 kWh</option>
                  <option value={20}>20 kWh</option>
                  <option value={30}>30 kWh</option>
                </select>
              </label>

              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={evCharger}
                  onChange={(e) => setEvCharger(e.target.checked)}
                />
                <span>
                  <strong>Add an EV charger</strong>
                  <small>Include an estimated charger allowance.</small>
                </span>
              </label>
            </div>
          )}

          {step === 3 && (
            <div className={styles.section}>
              <h2>Your suggested system</h2>
              <p>Here is an initial estimate based on your selections.</p>

              <div className={styles.resultGrid}>
                <article>
                  <span>Suggested package</span>
                  <strong>{selectedPackage.size} kW</strong>
                </article>
                <article>
                  <span>Calculated system size</span>
                  <strong>{recommendedKw} kW</strong>
                </article>
                <article>
                  <span>Indicative panel count</span>
                  <strong>{panelCount}</strong>
                </article>
                <article>
                  <span>Daily appliance use</span>
                  <strong>{dailyKwh.toFixed(1)} kWh</strong>
                </article>
                <article>
                  <span>Battery capacity</span>
                  <strong>{battery ? `${battery} kWh` : "Not selected"}</strong>
                </article>
              </div>

              <div className={styles.notice}>
                This is an indicative estimate, not live pricing or a formal
                quote. Your installer must confirm equipment, rebates, roof
                suitability and installation costs.
              </div>
              {packageLimitExceeded && (
                <div className={styles.notice} role="status">
                  Your estimated system size is above the largest package
                  shown. The displayed package and price may not cover your
                  calculated usage; request a tailored design.
                </div>
              )}
              {roofLimitsPanelCount && (
                <div className={styles.notice} role="status">
                  The selected roof area limits the indicative panel count.
                  A site assessment is needed to confirm whether the suggested
                  package will fit.
                </div>
              )}

              <h3>Request your tailored quote</h3>
              <form
                className={styles.quoteForm}
                onSubmit={handleQuoteSubmit}
              >
                <input name="name" autoComplete="name" placeholder="Full name" required />
                <input name="email" type="email" autoComplete="email" placeholder="Email address" required />
                <input name="phone" type="tel" autoComplete="tel" placeholder="Phone number" required />
                <input name="postcode" inputMode="numeric" autoComplete="postal-code" placeholder="Australian postcode" required />
                <button type="submit">Request my quote</button>
              </form>
              {quoteDraftOpened && (
                <p className={styles.quoteConfirmation} role="status">
                  Your email app should open with your quote request addressed
                  to info@solpoweraustralia.com.au. Review and send the email
                  to submit your enquiry.
                </p>
              )}
            </div>
          )}

          <div className={styles.navigation}>
            <button
              type="button"
              className={styles.back}
              disabled={step === 0}
              onClick={() => setStep((current) => current - 1)}
            >
              Back
            </button>
            <span>Step {step + 1} of {steps.length}</span>
            {step < steps.length - 1 && (
              <button
                type="button"
                className={styles.next}
                onClick={() => setStep((current) => current + 1)}
              >
                Continue →
              </button>
            )}
          </div>
        </section>

        <aside className={styles.summary}>
          <span className={styles.eyebrow}>YOUR SYSTEM</span>
          <h2>System summary</h2>
          <div className={styles.summaryLine}>
            <span>Solar package</span>
            <strong>{selectedPackage.size} kW</strong>
          </div>
          <div className={styles.summaryLine}>
            <span>Calculated size</span>
            <strong>{recommendedKw} kW</strong>
          </div>
          <div className={styles.summaryLine}>
            <span>Solar panels</span>
            <strong>{panelCount}</strong>
          </div>
          <div className={styles.summaryLine}>
            <span>Battery</span>
            <strong>{battery ? `${battery} kWh` : "—"}</strong>
          </div>
          <div className={styles.summaryLine}>
            <span>EV charger</span>
            <strong>{evCharger ? "Included" : "—"}</strong>
          </div>
          <hr />
          <span className={styles.estimateLabel}>Indicative package estimate</span>
          <strong className={styles.price}>
            ${estimatedTotal.toLocaleString("en-AU")}
          </strong>
          <p>
            Illustrative pricing only, based on the displayed package.
            Rebates, equipment and site conditions can change the final price.
          </p>
          {packageLimitExceeded && (
            <p className={styles.summaryWarning}>
              Your calculated size exceeds the largest package shown.
            </p>
          )}
          <button
            type="button"
            className={styles.next}
            onClick={() => setStep(3)}
          >
            View system & quote
          </button>
        </aside>
      </div>
      <section className={styles.faqSection} aria-labelledby="builder-faq-heading">
        <div className={styles.faqContainer}>
          <h2 id="builder-faq-heading">Solar system sizing FAQs</h2>
          <details>
            <summary>How is my recommended system size estimated?</summary>
            <p>
              The planner estimates daily appliance use from your selections
              and adjusts the result for roof direction and shading. Actual
              generation varies with location, weather, panel layout and
              equipment.
            </p>
          </details>
          <details>
            <summary>Does this estimate include a confirmed rebate or quote?</summary>
            <p>
              No. Prices and system recommendations are indicative only.
              Eligibility, current incentives and installation requirements
              should be confirmed with SolPower Australia before purchase.
            </p>
          </details>
          <details>
            <summary>How can I estimate a battery incentive?</summary>
            <p>
              Use the{" "}
              <Link href="/battery-rebate-calculator">
                battery rebate calculator
              </Link>
              {" "}for an indicative federal estimate, then confirm current
              program eligibility and state support with your installer.
            </p>
          </details>
        </div>
      </section>
      </main>
      <FooterOne />
    </Wrapper>
  );
}
