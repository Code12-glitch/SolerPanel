"use client";

import React from "react";

interface ProcessDataType {
  step: string;
  title: string;
  description: string;
  icon: string;
}

const process_data: ProcessDataType[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We provide free consultations to all our clients to determine whether a Solar PV System is a suitable option for them, based on factors such as location of the property, energy usage, etc. Finally, you will receive a written quote for the Solar PV system.",
    icon: "bi bi-chat-square-text",
  },
  {
    step: "02",
    title: "Approvals",
    description:
      "We as a top solar solutions provider will secure the necessary approvals from energy suppliers before the system installation.",
    icon: "bi bi-file-earmark-check",
  },
  {
    step: "03",
    title: "Installation",
    description:
      "Upon receipt of all the essential approvals, we will arrange the system installation by a Solar Accreditation Australia (SAA) Accredited installer with a prior booking of a day and time.",
    icon: "bi bi-tools",
  },
  {
    step: "04",
    title: "Documentation",
    description:
      "After the installation, we will handle all the necessary paperwork on your behalf to secure the Government Rebate for your system./n/n Power your future with clean, renewable energy — expert solar solutions tailored to your needs.",
    icon: "bi bi-file-earmark-text",
  },
];

const SolarProcessHomeOne = () => {
  return (
    <section className="solar-process-section">
      <div className="container">

        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2>Process of getting a Solar PV System</h2>

              <p>
                Our simple four-step process makes getting your Solar PV System
                easy and hassle-free.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="solar-process-timeline">
          {process_data.map((item, index) => (
            <div
              className="solar-process-step wow fadeInUp"
              data-wow-delay={`${index * 0.2}s`}
              key={index}
            >
              {/* Timeline Number */}
              <div className="solar-process-number">
                <span>{item.step}</span>
              </div>

              {/* Connector */}
              {index !== process_data.length - 1 && (
                <div className="solar-process-line"></div>
              )}

              {/* Icon */}
              <div className="solar-process-icon">
                <i className={item.icon}></i>
              </div>

              {/* Content */}
              <div className="solar-process-content">
                <span className="solar-process-step-title">
                  Step {index + 1}
                </span>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProcessHomeOne;