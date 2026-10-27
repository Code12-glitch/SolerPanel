"use client";

import Link from "next/link";

const savingsOptions = [
  {
    number: "01",
    title: "Solar Rebate Calculator",
    description:
      "Discover your estimated solar rebate based on your Australian postcode, system size and installation year.",
    href: "/solar-rebate-calculator",
    icon: "solar",
    button: "Open Calculator",
  },
  {
    number: "02",
    title: "Battery Rebate Calculator",
    description:
      "Estimate your potential battery rebate based on your battery's usable capacity and installation year.",
    href: "/battery-rebate-calculator",
    icon: "battery",
    button: "Open Calculator",
  },
  {
    number: "03",
    title: "Build Your System",
    description:
      "Estimate your household energy use and explore a solar, battery and EV charging setup for your home.",
    href: "/build",
    icon: "system",
    button: "Open Calculator",
  },
] as const;

type SavingsIconType = "solar" | "battery" | "system";

function SavingsIcon({ type }: { type: SavingsIconType }) {
  if (type === "solar") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle
          cx="45"
          cy="16"
          r="8"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M45 3V1M45 31v-2M58 16h3M29 16h3M54 7l2-2M34 27l2-2M54 25l2 2M34 5l2 2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M8 31h42L43 49H13L8 31Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="m20 31 2 18m15-18-2 18M10 40h37M28 49v7m-9 0h18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "battery") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect
          x="12"
          y="17"
          width="40"
          height="38"
          rx="5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M24 17v-5h16v5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="m35 23-12 16h9l-3 10 12-17h-9l3-9Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M7 29 32 8l25 21"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 27v28h36V27M25 55V39h14v16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 29h7m-7 5h7m6-5h7m-7 5h7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SolarSavingsHomeOne = () => {
  return (
    <section
      className="solar-savings-area"
      id="solar-savings"
      aria-labelledby="solar-savings-heading"
    >
      <div className="container">
        <div className="solar-savings-heading section-title text-center">
          <span className="solar-savings-eyebrow">
            MAKE THE MOST OF SOLAR
          </span>

          <h2 id="solar-savings-heading">Solar Savings</h2>

          <p>
            Explore your rebates and design your ideal solar system.
            Use our tools to take the next step towards smarter energy
            savings.
          </p>
        </div>

        <div className="row g-4 solar-savings-grid">
          {savingsOptions.map((option) => (
            <div className="col-lg-4 col-md-6" key={option.number}>
              <article className="solar-savings-card">
                <div className="solar-savings-card-top">
                  <span className="solar-savings-number">
                    {option.number}
                  </span>

                  <div className="solar-savings-icon">
                    <SavingsIcon type={option.icon} />
                  </div>
                </div>

                <h3>{option.title}</h3>

                <p>{option.description}</p>

                <Link
                  href={option.href}
                  className="solar-savings-link"
                  aria-label={option.button}
                >
                  {option.button}
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarSavingsHomeOne;
