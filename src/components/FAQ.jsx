// FAQ.jsx
import React, { useState } from "react";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    // Updated list of FAQs
    const faqs = [
        {
            question: "Is customer’s data secure?",
            answer:
                "Yes. We’re designed for EU/UK laws and comply with GDPR and Cyber Essentials standards. Only data specific to an analysis query is encrypted and sent to the AI models. All other data never leaves your servers. We have built our system in a way that we can’t access the information pertaining to businesses and/or users."
        },
        {
            question: "Does Nexalytica store data on its servers?",
            answer:
                "No. Data remains 100% on your infrastructure for full control."
        },
        {
            question: "Can Nexalytica be customised for a business in a specific sector?",
            answer:
                "Absolutely. We understand that every business has different needs so, during the discovery call, we ensure that we gather all relevant information to make the dashboard as customised as possible."
        },
        {
            question: "What support is available?",
            answer: "24/7 chat support, onboarding guides, and weekly webinars."
        },
        {
            question: "How quickly do I get insights?",
            answer:
                "For factual queries, results are generated in seconds, even for complex queries. For queries needing AI powered insights, results are generated in less than a minute."
        },
        {
            question: "How is Nexalytica different from Tableau/Power BI?",
            answer:
                "No coding required, GDPR-compliant data sovereignty, and much more cost effective."
        },
        {
            question: "What integrations does Nexalytica support?",
            answer:
                "Seamless integration with PostgreSQL, MySQL, Snowflake, and cloud platforms like AWS/Azure."
        },
        {
            question: "Can I build custom analytics templates?",
            answer:
                "Yes! Create and save templates for recurring queries (e.g., monthly sales reports)."
        },
        {
            question: "Are there hidden fees?",
            answer:
                "No. Pricing is transparent—pay only for your plan tier or queries used."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes. No long-term contracts—cancel or downgrade quarterly."
        },
        {
            question: "Does Nexalytica support predictive analytics?",
            answer:
                "Yes! Ask questions like “Predict next quarter’s sales” using built-in forecasting models."
        },
        {
            question: "What if my query returns no results?",
            answer:
                "Our AI suggests schema fixes or data quality checks. Chat support is always available too."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="
        py-14
        px-5
        text-center
        bg-gradient-to-r
        from-[#0A0F1F]
        to-[#1A3D5A]
      "
        >
            <h2
                className="
          text-2xl
          mb-4
          text-[#00E6FF]
          font-bold
        "
            >
                Frequently Asked Questions
            </h2>

            {/* FAQ list container */}
            <div
                className="
          max-w-[700px]
          mx-auto
          mt-8
          text-left
        "
            >
                {faqs.map((faq, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <div
                            key={idx}
                            className="
                border-b
                border-[rgba(108,31,96,0.3)]
                py-4
              "
                        >
                            {/* Question row */}
                            <div
                                className="
                  flex
                  items-center
                  justify-between
                  cursor-pointer
                  group
                "
                                onClick={() => toggleFAQ(idx)}
                            >
                                <h4
                                    className="
                    m-0
                    text-base
                    text-[rgba(234,234,234,0.85)]
                    transition-all
                    faq-question-text
                  "
                                >
                                    {faq.question}
                                </h4>
                                <span
                                    className={`
                    text-base
                    text-[rgba(234,234,234,0.85)]
                    transform
                    transition-transform
                    duration-300
                    ml-2
                    faq-arrow
                    ${isActive ? "rotate-90" : ""}
                  `}
                                >
                                    &gt;
                                </span>
                            </div>

                            {/* Hover Glow: we can do it via a small style block or Tailwind's arbitrary group-hover */}
                            <style>
                                {`
                  .group:hover .faq-question-text,
                  .group:hover .faq-arrow {
                    text-shadow: 0 0 5px rgba(0, 194, 255, 0.5);
                  }
                `}
                            </style>

                            {/* Answer content */}
                            {isActive && (
                                <div
                                    className="
                    mt-2
                    text-[rgba(154,217,255,0.8)]
                    leading-relaxed
                  "
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default FAQ;
