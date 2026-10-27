
"use client";

import { useState } from "react";

export default function SolarRebateCalculator() {
  const [postcode, setPostcode] = useState("");
  const [systemSize, setSystemSize] = useState("6.6");
  const [installationYear, setInstallationYear] = useState("2026");
  const [showResult, setShowResult] = useState(false);

  const validPostcode = /^\d{4}$/.test(postcode);
  const validSystemSize = Number(systemSize) > 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowResult(true);

    const subject = "Solar rebate enquiry";
    const body = [
      "Solar rebate enquiry",
      "",
      `Australian postcode: ${postcode}`,
      `Solar system size: ${systemSize} kW`,
      `Expected installation year: ${installationYear}`,
    ].join("\n");
    const mailtoUrl =
      `mailto:info@solpoweraustralia.com.au` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <div className="solar-rebate-calculator">
      <div className="solar-rebate-form">
        <span className="solar-rebate-step">YOUR SOLAR SAVINGS</span>

        <h2>Calculate Your Solar Rebate</h2>

        <p>
          Enter your installation details to start estimating
          your potential solar incentive.
        </p>

        <form
          onSubmit={handleSubmit}
        >
          <div className="solar-rebate-field">
            <label htmlFor="solar-postcode">
              Australian postcode
            </label>

            <input
              id="solar-postcode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={4}
              placeholder="e.g. 2000"
              value={postcode}
              onChange={(event) => {
                setPostcode(event.target.value.replace(/\D/g, ""));
                setShowResult(false);
              }}
              required
              pattern="\d{4}"
              title="Enter a four-digit Australian postcode"
            />
          </div>

          <div className="solar-rebate-field">
            <label htmlFor="solar-system-size">
              Solar system size
            </label>

            <select
              id="solar-system-size"
              value={systemSize}
              onChange={(event) => {
                setSystemSize(event.target.value);
                setShowResult(false);
              }}
            >
              <option value="3.3">3.3 kW — small system</option>
              <option value="5">5 kW — small household</option>
              <option value="6.6">6.6 kW — typical household</option>
              <option value="10">10 kW — larger household</option>
              <option value="13.2">13.2 kW — high energy use</option>
              <option value="20">20 kW — large property</option>
            </select>
          </div>

          <div className="solar-rebate-field">
            <label htmlFor="solar-installation-year">
              Expected installation year
            </label>

            <select
              id="solar-installation-year"
              value={installationYear}
              onChange={(event) => {
                setInstallationYear(event.target.value);
                setShowResult(false);
              }}
            >
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>

          <button type="submit" className="solar-rebate-submit">
            Estimate My Solar Rebate
          </button>
        </form>

        {showResult && (
          <div
            className="solar-rebate-result"
            aria-live="polite"
          >
            {validPostcode && validSystemSize ? (
              <>
                <h3>Your email draft is ready</h3>

                <p>
                  Postcode: <strong>{postcode}</strong>
                </p>

                <p>
                  System size: <strong>{systemSize} kW</strong>
                </p>

                <p>
                  Installation year:{" "}
                  <strong>{installationYear}</strong>
                </p>

                <p>
                  Your email app should open with these details addressed
                  to info@solpoweraustralia.com.au. Review and send the
                  email to submit your enquiry. This form does not calculate
                  a rebate estimate.
                </p>
              </>
            ) : (
              <p>Please enter a valid four-digit Australian postcode.</p>
            )}
          </div>
        )}
      </div>

      <aside className="solar-rebate-side-panel">
        <div className="solar-rebate-side-icon" aria-hidden="true">
          ☀
        </div>

        <h3>Make the most of your solar investment</h3>

        <p>
          The applicable incentive can depend on your location,
          installation details and current scheme requirements.
        </p>

        <ul>
          <li>Check postcode eligibility</li>
          <li>Choose the right system size</li>
          <li>Confirm your rebate with your installer</li>
        </ul>

        <a href="/get-quote" className="solar-rebate-quote-link">
          Get a Solar Quote →
        </a>
      </aside>
    </div>
  );
}
