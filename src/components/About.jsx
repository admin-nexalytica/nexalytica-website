import React from "react";
import Section from './Section';
import Heading from './Heading';
import Card from './Card';

function About() {
    const features = [
        {
            icon: "🚀",
            title: "Lightning Fast",
            description: "Get insights in seconds, not hours"
        },
        {
            icon: "🤖",
            title: "AI-Powered",
            description: "Natural language to data insights"
        },
        {
            icon: "🔒",
            title: "Secure",
            description: "Enterprise-grade security standards"
        },
        {
            icon: "📊",
            title: "Visual",
            description: "Beautiful, interactive visualizations"
        }
    ];

    return (
        <Section id="about" gradient="primary" pattern>
            <div className="text-center mb-16">
                <Heading level={2}>
                    AI-Powered Business Intelligence
                </Heading>
                
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                    At Nexalytica, we believe that data should work for you, not the other way around.
                    Our cutting-edge AI-powered business intelligence platform transforms
                    <span className="text-pink-400 font-semibold"> natural language prompts </span>
                    into actionable insights, making data analysis seamless, intuitive,
                    and accessible to everyone.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
                {features.map((feature, index) => (
                    <Card key={index} delay={index * 100} className="p-4 sm:p-6">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
                            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="max-w-4xl mx-auto">
                <Card className="text-center" animate delay={500}>
                    <Heading level={3} gradient>
                        Our Mission
                    </Heading>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We aim to bridge the gap between complex data and decision-making, enabling businesses
                        to extract real-time insights without technical expertise. By leveraging
                        <span className="text-pink-400 font-semibold"> AI, Retrieval Augmented Generation,</span>
                        and automated visualization, we empower organizations to unlock the full
                        potential of their data and drive strategic growth.
                    </p>
                </Card>
            </div>
        </Section>
    );
}

export default About;
