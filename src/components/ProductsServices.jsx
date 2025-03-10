// ProductsServices.jsx
import React from "react";
import "./ProductsServices.css";

function ProductsServices() {
    return (
        <section id="products-services" className="products-services-section">
            <h2>Products &amp; Services</h2>
            <div className="products-list">

                {/* 1. AI-Powered Data Exploration */}
                <div className="product-item">
                    <img
                        src="./service_image1.jpeg"
                        alt="AI-Powered Data Exploration"
                    />
                    <h3>AI-Powered Data Exploration</h3>
                    <p>
                        <strong>What It Does:</strong> Nexalytica enables natural language-driven data exploration,
                        allowing businesses to ask questions in plain English and get precise answers from their data.
                    </p>
                    <p><strong>Key Benefits:</strong></p>
                    <ul className="icon-pink">
                        <li>No need for SQL or coding expertise.</li>
                        <li>Instant access to deep insights from your business data.</li>
                        <li>Secure, scalable, and designed for real-time decision-making.</li>
                    </ul>
                    <p><strong>Use Cases:</strong></p>
                    <ul className="icon-blue">
                        <li>Sales teams: “What were last quarter’s top-performing products?”</li>
                        <li>Finance teams: “How has revenue grown compared to last year?”</li>
                        <li>HR teams: “What is the current attrition trend by department?”</li>
                    </ul>
                </div>

                {/* 2. Intelligent Reporting and Visualization */}
                <div className="product-item">
                    <img
                        src="./service_image2.jpeg"
                        alt="Intelligent Reporting & Visualization"
                    />
                    <h3>Intelligent Reporting &amp; Visualization</h3>
                    <p>
                        <strong>What It Does:</strong> Our AI-driven reporting system automates data visualization,
                        providing easy-to-understand dashboards for executives, managers, and data teams.
                    </p>
                    <p><strong>Key Benefits:</strong></p>
                    <ul className="icon-blue">
                        <li>Dynamic, interactive, and user-friendly dashboards.</li>
                        <li>AI-powered insights for predictive trend analysis.</li>
                        <li>Seamless integration with Power BI, Tableau, and Google Data Studio.</li>
                    </ul>
                    <p><strong>Use Cases:</strong></p>
                    <ul className="icon-purple">
                        <li>Sales teams: “What were last quarter’s top-performing products?”</li>
                        <li>Finance teams: “How has revenue grown compared to last year?”</li>
                        <li>HR teams: “What is the current attrition trend by department?”</li>
                    </ul>
                </div>

                {/* 3. Seamless Business Integration */}
                <div className="product-item">
                    <img
                        src="./service_image3.jpeg"
                        alt="Seamless Business Integration"
                    />
                    <h3>Seamless Business Integration</h3>
                    <p>
                        <strong>What It Does:</strong> Nexalytica integrates effortlessly with ERP, CRM, HR, Finance,
                        and Cloud platforms, ensuring smooth and efficient data flow.
                    </p>
                    <p>
                        <strong>Supported Integrations</strong>
                        <ul className="icon-blue">
                            <li>CRM: Salesforce, HubSpot, Microsoft Dynamics</li>
                            <li>ERP: SAP, Oracle, NetSuite</li>
                            <li>Databases: MySQL, PostgreSQL, Google Cloud SQL</li>
                            <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
                        </ul>
                        <strong>Key Benefits</strong>
                        <ul className="icon-pink">
                            <li>No complex setup, works with your existing tools</li>
                            <li>Custom integration support for enterprise clients.</li>
                            <li>Scalable for startups, SMEs, and large enterprises.</li>
                        </ul>
                    </p>
                </div>

                {/* 4. Data & AI Consulting */}
                <div className="product-item">
                    <img
                        src="./service_image4.jpeg"
                        alt="Data & AI Consulting"
                    />
                    <h3>Data &amp; AI Consulting</h3>
                    <p>
                        <strong>Data Unleashed:</strong> with our expert consulting services, designed to help businesses leverage
                        AI-driven analytics for smarter decision-making. We work closely with organizations to develop customized
                        data strategies, ensuring they maximize efficiency, scalability, and value from their data assets.
                    </p>
                    <p><strong>Our consulting services help businesses:</strong></p>
                    <ul className="icon-purple">
                        <li><strong>Implement AI-powered analytics</strong> tailored to their specific industry and objectives.</li>
                        <li><strong>Streamline data workflows</strong> by automating processes and optimizing data pipelines.</li>
                        <li><strong>Enhance decision-making</strong> with predictive insights, trend analysis, and AI-driven automation.</li>
                        <li><strong>Ensure seamless integration</strong> with existing cloud platforms, databases, and business intelligence tools.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProductsServices;
