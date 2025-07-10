import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Section from './Section';
import Heading from './Heading';
import Card from './Card';
import AnimatedButton from './AnimatedButton';

function ProductsServices() {
    const [openItems, setOpenItems] = useState([false, false, false, false]);

    const toggleItem = (index) => {
        setOpenItems((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const services = [
        {
            title: "AI-Powered Data Exploration",
            image: "./service_image1.jpeg",
            description: "Nexalytica enables natural language-driven data exploration, allowing businesses to ask questions in plain English and get precise answers from their data.",
            benefits: [
                "No need for SQL or coding expertise",
                "Instant access to deep insights from your business data",
                "Secure, scalable, and designed for real-time decision-making"
            ],
            useCases: [
                "Sales teams: \"What were last quarter's top-performing products?\"",
                "Finance teams: \"How has revenue grown compared to last year?\"",
                "HR teams: \"What is the current attrition trend by department?\""
            ],
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Intelligent Reporting & Visualization",
            image: "./service_image2.jpeg",
            description: "Our AI-driven reporting system automates data visualization, providing easy-to-understand dashboards for executives, managers, and data teams.",
            benefits: [
                "Dynamic, interactive, and user-friendly dashboards",
                "AI-powered insights for predictive trend analysis",
                "Seamless integration with Power BI, Tableau, and Google Data Studio"
            ],
            useCases: [
                "Real-time performance monitoring dashboards",
                "Automated weekly and monthly business reports",
                "Predictive analytics for future trends"
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Seamless Business Integration",
            image: "./service_image3.jpeg",
            description: "Nexalytica integrates effortlessly with ERP, CRM, HR, Finance, and Cloud platforms, ensuring smooth and efficient data flow.",
            integrations: {
                "CRM": "Salesforce, HubSpot, Microsoft Dynamics",
                "ERP": "SAP, Oracle, NetSuite",
                "Databases": "MySQL, PostgreSQL, Google Cloud SQL",
                "Cloud Platforms": "AWS, Azure, Google Cloud"
            },
            benefits: [
                "No complex setup, works with your existing tools",
                "Custom integration support for enterprise clients",
                "Scalable for startups, SMEs, and large enterprises"
            ],
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Data & AI Consulting",
            image: "./service_image4.jpeg",
            description: "Data Unleashed with our expert consulting services, designed to help businesses leverage AI-driven analytics for smarter decision-making.",
            services: [
                "Implement AI-powered analytics tailored to their specific industry and objectives",
                "Streamline data workflows by automating processes and optimizing data pipelines",
                "Enhance decision-making with predictive insights, trend analysis, and AI-driven automation",
                "Ensure seamless integration with existing cloud platforms, databases, and business intelligence tools"
            ],
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <Section id="products-services" gradient="secondary" pattern>
            {/* Section Header */}
            <div className="text-center mb-16">
                <Heading level={2}>
                    Products & Services
                </Heading>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                    Empowering businesses with cutting-edge AI and data analytics solutions
                </p>
            </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Card Content */}
                            <div className="p-8">
                                {/* Image */}
                                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                                    <LazyLoadImage
                                        src={service.image}
                                        alt={service.title}
                                        effect="blur"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                </div>

                                {/* Title and Toggle */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                        {service.title}
                                    </h3>
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className={`px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-300 ${
                                            openItems[index] 
                                                ? 'bg-gradient-to-r ' + service.color + ' text-white border-transparent'
                                                : 'text-gray-300 border-gray-600 hover:border-gray-500'
                                        }`}
                                    >
                                        {openItems[index] ? 'Show Less' : 'Learn More'}
                                    </button>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Expandable Content */}
                                <div className={`overflow-hidden transition-all duration-500 ${openItems[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {/* Benefits */}
                                    {service.benefits && (
                                        <div className="mt-6">
                                            <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-300">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Use Cases */}
                                    {service.useCases && (
                                        <div className="mt-6">
                                            <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                                            <ul className="space-y-2">
                                                {service.useCases.map((useCase, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-300">{useCase}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Integrations */}
                                    {service.integrations && (
                                        <div className="mt-6">
                                            <h4 className="text-lg font-semibold text-white mb-3">Supported Integrations:</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {Object.entries(service.integrations).map(([key, value]) => (
                                                    <div key={key} className="bg-gray-700/30 rounded-lg p-3">
                                                        <span className="text-sm font-medium text-gray-400">{key}:</span>
                                                        <p className="text-gray-300 text-sm mt-1">{value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Services */}
                                    {service.services && (
                                        <div className="mt-6">
                                            <h4 className="text-lg font-semibold text-white mb-3">Our Consulting Services Help Businesses:</h4>
                                            <ul className="space-y-2">
                                                {service.services.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <svg className="w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100 2H6a4 4 0 01-4-4V5z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-300">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Gradient border effect on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
                <AnimatedButton 
                    onClick={() => window.location.href = '#contact'}
                    variant="primary"
                    className="mx-auto"
                >
                    Get Started with Nexalytica
                </AnimatedButton>
            </div>
        </Section>
    );
}

export default ProductsServices;