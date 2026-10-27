
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./BatteryRebateCalculator.module.scss";

const QUICK_SIZES = [10, 13.5, 16, 24, 32];
const CAPACITY_CAP = 50;
const TIER_LIMIT = 14;
const FIRST_TIER_RATE = 252;
const SECOND_TIER_RATE = FIRST_TIER_RATE * 0.6;
const THIRD_TIER_RATE = FIRST_TIER_RATE * 0.15;

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(amount);

const formatRate = (amount: number) =>
  new Intl.NumberFormat("en-AU", {
    maximumFractionDigits: 2,
  }).format(amount);

export default function BatteryRebateCalculator() {
  const [capacity, setCapacity] = useState(13.5);
  const [postcode, setPostcode] = useState("");

  const firstTier = Math.min(capacity, TIER_LIMIT);
  const secondTier = Math.min(
    Math.max(capacity - TIER_LIMIT, 0),
    TIER_LIMIT
  );
  const thirdTier = Math.min(
    Math.max(capacity - TIER_LIMIT * 2, 0),
    CAPACITY_CAP - TIER_LIMIT * 2
  );

  const firstAmount = firstTier * FIRST_TIER_RATE;
  const secondAmount = secondTier * SECOND_TIER_RATE;
  const thirdAmount = thirdTier * THIRD_TIER_RATE;
  const totalRebate = firstAmount + secondAmount + thirdAmount;

  const handlePostcodeChange = (value: string) => {
    setPostcode(value.replace(/\D/g, "").slice(0, 4));
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>SOLPOWER AUSTRALIA SOLAR SAVINGS</span>
          <h1>Battery Rebate Calculator</h1>
          <p>
            Estimate the federal battery incentive for your usable capacity
            using the tapered rates effective from 1 May 2026.
          </p>
        </div>
      </section>

      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <div className={styles.calculatorGrid}>
            <div className={styles.formCard}>
              <span className={styles.step}>YOUR BATTERY</span>
              <h2>How big is your battery?</h2>
              <p className={styles.description}>
                Choose the usable battery capacity in kilowatt-hours (kWh).
                Check your battery specifications if you are unsure.
              </p>

              <div className={styles.capacityHeader}>
                <label htmlFor="battery-capacity">
                  Usable battery capacity
                </label>
                <div className={styles.capacityValue}>
                  {capacity.toLocaleString("en-AU", {
                    maximumFractionDigits: 1,
                  })}{" "}
                  <span>kWh</span>
                </div>
              </div>

              <input
                id="battery-capacity"
                className={styles.slider}
                type="range"
                min="5"
                max="50"
                step="0.5"
                value={capacity}
                onChange={(event) =>
                  setCapacity(Number(event.target.value))
                }
                aria-label="Usable battery capacity in kilowatt-hours"
              />

              <div className={styles.sliderLabels}>
                <span>5 kWh</span>
                <span>50 kWh cap</span>
              </div>

              <div className={styles.quickSizes}>
                {QUICK_SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={
                      capacity === size
                        ? styles.sizeButtonActive
                        : styles.sizeButton
                    }
                    onClick={() => setCapacity(size)}
                    aria-pressed={capacity === size}
                  >
                    {size} kWh
                  </button>
                ))}
              </div>

              <div className={styles.postcodeField}>
                <label htmlFor="battery-postcode">
                  Your Australian postcode
                  <span> (optional)</span>
                </label>
                <input
                  id="battery-postcode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="e.g. 3000"
                  value={postcode}
                  onChange={(event) =>
                    handlePostcodeChange(event.target.value)
                  }
                  maxLength={4}
                />
                <small>
                  Use this when checking whether separate state incentives
                  may apply. This calculator does not calculate state rebates.
                </small>
              </div>
            </div>

            <aside className={styles.resultCard} aria-live="polite">
              <span className={styles.resultLabel}>
                ESTIMATED FEDERAL BATTERY REBATE
              </span>

              <div className={styles.totalAmount}>
                {formatCurrency(totalRebate)}
              </div>

              <p className={styles.resultDescription}>
                Estimated discount for a {capacity} kWh usable battery
              </p>

              <div className={styles.divider} />

              <div className={styles.tierHeading}>
                <h3>Rebate breakdown</h3>
                <span>Estimated value</span>
              </div>

              <div className={styles.tierRow}>
                <div>
                  <strong>First {TIER_LIMIT} kWh</strong>
                  <span>
                    {firstTier.toLocaleString("en-AU")} kWh × $
                    {formatRate(FIRST_TIER_RATE)}
                  </span>
                </div>
                <strong>{formatCurrency(firstAmount)}</strong>
              </div>

              <div className={styles.tierRow}>
                <div>
                  <strong>
                    {TIER_LIMIT}–{TIER_LIMIT * 2} kWh
                  </strong>
                  <span>
                    {secondTier.toLocaleString("en-AU")} kWh × $
                    {formatRate(SECOND_TIER_RATE)}
                  </span>
                </div>
                <strong>{formatCurrency(secondAmount)}</strong>
              </div>

              <div className={styles.tierRow}>
                <div>
                  <strong>
                    {TIER_LIMIT * 2}–{CAPACITY_CAP} kWh
                  </strong>
                  <span>
                    {thirdTier.toLocaleString("en-AU")} kWh × $
                    {formatRate(THIRD_TIER_RATE)}
                  </span>
                </div>
                <strong>{formatCurrency(thirdAmount)}</strong>
              </div>

              <div className={styles.totalRow}>
                <strong>Total estimated rebate</strong>
                <strong>{formatCurrency(totalRebate)}</strong>
              </div>

              <p className={styles.resultNote}>
                {postcode.length === 4
                  ? `Postcode ${postcode} entered. Check the applicable state scheme separately.`
                  : "Enter your postcode to help with separate state incentive checks."}
              </p>

              <Link href="/get-quote" className={styles.quoteButton}>
                Get a Battery Quote
                <span aria-hidden="true">→</span>
              </Link>

              <p className={styles.disclaimer}>
                Indicative estimate using rates effective from 1 May 2026.
                It is not a quote or confirmation of eligibility. Current
                program rules, certified capacity and certificate values
                at installation may change the result.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.informationSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>UNDERSTANDING YOUR SAVINGS</span>
            <h2>How does the battery rebate work?</h2>
            <p>
              The federal Cheaper Home Batteries Program can help reduce
              the upfront cost of an eligible installation. This
              illustration applies the tapered rates effective from
              1 May 2026 to usable battery capacity.
            </p>
          </div>

          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoNumber}>01</span>
              <h3>Usable capacity matters</h3>
              <p>
                The estimate uses certified usable capacity, rather than
                the battery&apos;s advertised or nominal capacity.
              </p>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoNumber}>02</span>
              <h3>Rates reduce by tier</h3>
              <p>
                The estimate applies the full rate to the first 14 kWh,
                then 60% to the next 14 kWh and 15% up to 50 kWh.
              </p>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoNumber}>03</span>
              <h3>Check eligibility</h3>
              <p>
                Your installer should confirm the approved battery,
                installation requirements and applicable certificate value.
              </p>
            </article>
          </div>

          <div className={styles.faq}>
            <h2>Frequently asked questions</h2>

            <details>
              <summary>Is this the final rebate amount?</summary>
              <p>
                No. This is an estimate based on the displayed 2026 rates.
                Your final incentive may differ due to eligibility,
                certified capacity and program rules at installation.
              </p>
            </details>

            <details>
              <summary>Does a larger battery get a larger rebate?</summary>
              <p>
                Additional capacity may increase the estimate at a lower
                rate above 14 kWh and again above 28 kWh. This calculator
                caps the federal estimate at 50 kWh.
              </p>
            </details>

            <details>
              <summary>Can I receive a state rebate as well?</summary>
              <p>
                Some locations may have additional incentives or loan
                programs. Availability and eligibility vary, so check
                the relevant official state or territory scheme.
              </p>
            </details>

            <details>
              <summary>When should I confirm the rebate?</summary>
              <p>
                Ask your installer to verify the current program rules,
                eligible battery capacity and expected discount before
                signing a contract.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
