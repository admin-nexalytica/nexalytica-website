// About.jsx
import React from "react";
import "./About.css";

function About() {
    return (
        <section id="about" className="about-section">
            <h2>AI-Powered Business Intelligence</h2>
            <p>
                At Nexalytica, we believe that data should work for you, not the other way around.
                Our cutting-edge AI-powered business intelligence platform transforms
                <span className="highlight"> natural language prompts </span>
                into actionable insights, making data analysis seamless, intuitive,
                and accessible to everyone.
            </p>

            <h3>Our Mission</h3>
            <p>
                We aim to bridge the gap between complex data and decision-making, enabling businesses
                to extract real-time insights without technical expertise. By leveraging
                <span className="highlight"> AI, Retrieval Augmented Generation,</span>
                and automated visualization, we empower organizations to unlock the full
                potential of their data and drive strategic growth.
            </p>
        </section>
    );
}

export default About;
