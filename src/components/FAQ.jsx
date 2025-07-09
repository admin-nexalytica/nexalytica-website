import React, { useState } from "react";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0); // Start with first item open

    const faqs = [
        {
            question: "Is customer's data secure?",
            answer: "Yes. We're designed for EU/UK laws and comply with GDPR and Cyber Essentials standards. Only data specific to an analysis query is encrypted and sent to the AI models. All other data never leaves your servers. We have built our system in a way that we can't access the information pertaining to businesses and/or users."
        },
        {
            question: "Does Nexalytica store data on its servers?",
            answer: "No. Data remains 100% on your infrastructure for full control."
        },
        {
            question: "Can Nexalytica be customised for a business in a specific sector?",
            answer: "Absolutely. We understand that every business has different needs so, during the discovery call, we ensure that we gather all relevant information to make the dashboard as customised as possible."
        },
        {
            question: "What support is available?",
            answer: "24/7 chat support, onboarding guides, and weekly webinars."
        },
        {
            question: "How quickly do I get insights?",
            answer: "For factual queries, results are generated in seconds, even for complex queries. For queries needing AI powered insights, results are generated in less than a minute."
        },
        {
            question: "How is Nexalytica different from Tableau/Power BI?",
            answer: "No coding required, GDPR-compliant data sovereignty, and much more cost effective."
        },
        {
            question: "What integrations does Nexalytica support?",
            answer: "Seamless integration with PostgreSQL, MySQL, Snowflake, and cloud platforms like AWS/Azure."
        },
        {
            question: "Can I build custom analytics templates?",
            answer: "Yes! Create and save templates for recurring queries (e.g., monthly sales reports)."
        },
        {
            question: "Are there hidden fees?",
            answer: "No. Pricing is transparent—pay only for your plan tier or queries used."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes. No long-term contracts—cancel or downgrade quarterly."
        },
        {
            question: "Does Nexalytica support predictive analytics?",
            answer: "Yes! Ask questions like 'Predict next quarter's sales' using built-in forecasting models."
        },
        {
            question: "What if my query returns no results?",
            answer: "Our AI suggests schema fixes or data quality checks. Chat support is always available too."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A0F1F] to-[#1A3D5A]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#00E6FF] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#9AD9FF] text-lg max-w-2xl mx-auto">
                        Everything you need to know about Nexalytica
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Questions List */}
                    <div className="space-y-3">
                        {faqs.map((faq, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => toggleFAQ(idx)}
                                    className={`
                                        w-full text-left p-4 rounded-lg transition-all duration-300
                                        ${isActive 
                                            ? 'bg-[#FF40A0]/20 border border-[#FF40A0]/50 shadow-[0_0_20px_rgba(255,64,160,0.3)]' 
                                            : 'bg-[#080216]/50 border border-[#00C2FF]/20 hover:border-[#00C2FF]/40 hover:bg-[#080216]/70'
                                        }
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`
                                            text-base font-medium transition-colors duration-300
                                            ${isActive ? 'text-[#FF40A0]' : 'text-[#00E6FF] group-hover:text-[#00F4FF]'}
                                        `}>
                                            {faq.question}
                                        </h3>
                                        <svg 
                                            className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-[#FF40A0] rotate-90' : 'text-[#00C2FF]'}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column - Active Answer */}
                    <div className="md:sticky md:top-24 h-fit">
                        <div className="bg-[#080216]/70 backdrop-blur-sm rounded-xl border border-[#FF40A0]/30 p-8 shadow-[0_0_30px_rgba(255,64,160,0.2)]">
                            {activeIndex !== null ? (
                                <>
                                    <h3 className="text-xl font-semibold text-[#FF40A0] mb-4">
                                        {faqs[activeIndex].question}
                                    </h3>
                                    <p className="text-[#9AD9FF] leading-relaxed">
                                        {faqs[activeIndex].answer}
                                    </p>
                                </>
                            ) : (
                                <p className="text-[#9AD9FF] text-center">
                                    Select a question to see the answer
                                </p>
                            )}
                        </div>

                        {/* Help Card */}
                        <div className="mt-8 bg-gradient-to-r from-[#00C2FF]/10 to-[#FF40A0]/10 rounded-xl p-6 border border-[#00C2FF]/30">
                            <h4 className="text-[#00E6FF] font-semibold mb-2">Need more help?</h4>
                            <p className="text-[#9AD9FF] text-sm mb-4">
                                Our support team is available 24/7 to assist you with any questions.
                            </p>
                            <a 
                                href="#contact"
                                className="inline-flex items-center text-[#FF40A0] hover:text-[#FF2DB4] transition-colors duration-300"
                            >
                                Contact Support
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;