"use client";

import React, { useState } from "react";

const faq_data = [
  {
    id: 1,
    question: "What does Solpower Australia do?",
    answer:
      "Solpower Australia designs, supplies and installs quality solar solutions for homes and businesses across Australia. We support from initial quote right through to installation and help with rebate paperwork to lower your power bills.",
  },
  {
    id: 2,
    question: "Do you offer tailored solar systems?",
    answer:
      "Yes — we customise solar systems based on your energy needs, location and budget. Our team will assess your usage, recommend suitable panel, inverter and battery options, and ensure you get the best return.",
  },
  {
    id: 3,
    question: "Can Solpower handle approvals and paperwork?",
    answer:
      "Absolutely. Solpower manages the necessary energy provider approvals and rebate documentation for you. This helps make the installation process simpler and reduces the paperwork you need to manage.",
  },
  {
    id: 4,
    question: "What products and brands do you use?",
    answer:
      "We work with reputable solar panel, inverter and battery brands known for reliability and performance in Australia. Components are selected based on factors such as quality, warranty, efficiency and suitability for local conditions.",
  },
];

const FAQArea = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const handleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-area">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title text-center">

              <span className="sub-title">
                FAQ'S
              </span>

              <h2>Frequently Asked Questions</h2>

              <p>
                Find answers to some of the most common questions about our
                solar systems, installation process and services.
              </p>

            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10">

            <div className="faq-wrapper">

              {faq_data.map((item) => (
                <div
                  className={`faq-item ${
                    activeId === item.id ? "active" : ""
                  }`}
                  key={item.id}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => handleFAQ(item.id)}
                    aria-expanded={activeId === item.id}
                  >
                    <span>{item.question}</span>

                    <span className="faq-icon">
                      {activeId === item.id ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`faq-answer ${
                      activeId === item.id ? "show" : ""
                    }`}
                  >
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQArea;