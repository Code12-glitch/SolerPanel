"use client";

import React, { useState } from "react";

const QuoteArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Quote Form Data:", formData);

    alert("Thank you! Your quote request has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="get-quote-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="get-quote-wrapper">

              {/* Heading */}
              <div className="section-title text-center">
                <h2>Get Quote</h2>
              </div>

              {/* Form */}
              <div className="get-quote-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* Name */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">
                          Your Name<span>*</span>
                        </label>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">
                          Your Email<span>*</span>
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">
                          Subject<span>*</span>
                        </label>

                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message..."
                          rows={6}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        className="quote-submit-btn"
                      >
                        Get Quote
                        <i className="bi bi-arrow-up-right"></i>
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteArea;