import React, { useState } from "react";

function ProductsServices() {
    // Track each service's open/closed state
    // Example: [true, false, false, false] means
    // the 1st service is expanded, others are collapsed.
    const [openItems, setOpenItems] = useState([false, false, false, false]);

    // Toggles the visibility of a specific service's content
    const toggleItem = (index) => {
        setOpenItems((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section
            id="products-services"
            className="
        py-14
        px-5
        text-center
        bg-gradient-to-r
        from-[#1B0530]
        to-[#3D0140]
      "
        >
            <h2
                className="
          text-2xl
          md:text-3xl
          font-bold
          mb-4
          text-[#00E6FF]
        "
            >
                Products &amp; Services
            </h2>

            {/* Container for product items */}
            <div
                className="
          mt-8
          flex
          flex-wrap
          gap-6
          justify-center
        "
            >
                {/* 1. AI-Powered Data Exploration */}
                <div
                    className="
            bg-[#080216ee]
            p-6
            rounded-lg
            text-left
            text-white
            basis-[300px]
            flex-1
            max-w-[300px]
            transition
            duration-300
            relative
            /* Image hover scale & glow */
            hover:[&>img]:scale-105
            hover:[&>img]:shadow-[0_0_15px_#00E6FF]
          "
                >
                    <img
                        src="./service_image1.jpeg"
                        alt="AI-Powered Data Exploration"
                        className="
              w-full
              h-auto
              mb-4
              rounded
              transition-transform
              duration-300
              ease-in-out
            "
                    />

                    {/* Heading & Toggle Button */}
                    <div className="flex items-center justify-between mb-2">
                        <h3
                            className="
                text-center
                text-[#00E6FF]
                text-lg
                md:text-xl
                font-bold
              "
                        >
                            AI-Powered Data Exploration
                        </h3>
                        <button
                            onClick={() => toggleItem(0)}
                            className="
                ml-2
                text-sm
                text-[#00E6FF]
                px-2
                py-1
                border
                border-[#00E6FF]
                rounded
                hover:bg-[#00E6FF]
                hover:text-[#080216]
                transition-colors
                duration-300
              "
                        >
                            {openItems[0] ? "Hide" : "Details"}
                        </button>
                    </div>

                    {/* Conditionally render the details */}
                    {openItems[0] && (
                        <div>
                            <p className="text-[#9AD9FF] leading-relaxed mb-4">
                                <strong>What It Does:</strong> Nexalytica enables natural
                                language-driven data exploration, allowing businesses to ask
                                questions in plain English and get precise answers from their
                                data.
                            </p>

                            <p className="text-[#9AD9FF] leading-relaxed font-semibold">
                                Key Benefits:
                            </p>
                            <ul className="mb-4">
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#FF40A0]
                    before:[text-shadow:0_0_6px_#FF40A0]
                    before:text-xl
                  "
                                >
                                    No need for SQL or coding expertise.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#FF40A0]
                    before:[text-shadow:0_0_6px_#FF40A0]
                    before:text-xl
                  "
                                >
                                    Instant access to deep insights from your business data.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#FF40A0]
                    before:[text-shadow:0_0_6px_#FF40A0]
                    before:text-xl
                  "
                                >
                                    Secure, scalable, and designed for real-time decision-making.
                                </li>
                            </ul>

                            <p className="text-[#9AD9FF] leading-relaxed font-semibold">
                                Use Cases:
                            </p>
                            <ul className="mb-2">
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    Sales teams: “What were last quarter’s top-performing products?”
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    Finance teams: “How has revenue grown compared to last year?”
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    HR teams: “What is the current attrition trend by department?”
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* 2. Intelligent Reporting and Visualization */}
                <div
                    className="
            bg-[#080216ee]
            p-6
            rounded-lg
            text-left
            text-white
            basis-[300px]
            flex-1
            max-w-[300px]
            transition
            duration-300
            relative
            hover:[&>img]:scale-105
            hover:[&>img]:shadow-[0_0_15px_#00E6FF]
          "
                >
                    <img
                        src="./service_image2.jpeg"
                        alt="Intelligent Reporting & Visualization"
                        className="
              w-full
              h-auto
              mb-4
              rounded
              transition-transform
              duration-300
              ease-in-out
            "
                    />

                    {/* Heading & Toggle Button */}
                    <div className="flex items-center justify-between mb-2">
                        <h3
                            className="
                text-center
                text-[#00E6FF]
                text-lg
                md:text-xl
                font-bold
              "
                        >
                            Intelligent Reporting &amp; Visualization
                        </h3>
                        <button
                            onClick={() => toggleItem(1)}
                            className="
                            
                ml-2
                text-sm
                text-[#00E6FF]                
                px-2
                py-1
                border
                border-[#00E6FF]
                rounded
                hover:bg-[#00E6FF]
                hover:text-[#080216]
                transition-colors
                duration-300
              "
                        >
                            {openItems[1] ? "Hide" : "Details"}
                        </button>
                    </div>

                    {openItems[1] && (
                        <div>
                            <p className="text-[#9AD9FF] leading-relaxed mb-4">
                                <strong>What It Does:</strong> Our AI-driven reporting system
                                automates data visualization, providing easy-to-understand
                                dashboards for executives, managers, and data teams.
                            </p>

                            <p className="text-[#9AD9FF] leading-relaxed font-semibold">
                                Key Benefits:
                            </p>
                            <ul className="mb-4">
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    Dynamic, interactive, and user-friendly dashboards.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    AI-powered insights for predictive trend analysis.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    Seamless integration with Power BI, Tableau, and Google Data
                                    Studio.
                                </li>
                            </ul>

                            <p className="text-[#9AD9FF] leading-relaxed font-semibold">
                                Use Cases:
                            </p>
                            <ul className="mb-2">
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#AF52FF]
                    before:[text-shadow:0_0_6px_#AF52FF]
                    before:text-xl
                  "
                                >
                                    Sales teams: “What were last quarter’s top-performing
                                    products?”
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#AF52FF]
                    before:[text-shadow:0_0_6px_#AF52FF]
                    before:text-xl
                  "
                                >
                                    Finance teams: “How has revenue grown compared to last year?”
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#AF52FF]
                    before:[text-shadow:0_0_6px_#AF52FF]
                    before:text-xl
                  "
                                >
                                    HR teams: “What is the current attrition trend by department?”
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* 3. Seamless Business Integration */}
                <div
                    className="
            bg-[#080216ee]
            p-6
            rounded-lg
            text-left
            text-white
            basis-[300px]
            flex-1
            max-w-[300px]
            transition
            duration-300
            relative
            hover:[&>img]:scale-105
            hover:[&>img]:shadow-[0_0_15px_#00E6FF]
          "
                >
                    <img
                        src="./service_image3.jpeg"
                        alt="Seamless Business Integration"
                        className="
              w-full
              h-auto
              mb-4
              rounded
              transition-transform
              duration-300
              ease-in-out
            "
                    />

                    {/* Heading & Toggle Button */}
                    <div className="flex items-center justify-between mb-2">
                        <h3
                            className="
                text-center
                text-[#00E6FF]
                text-lg
                md:text-xl
                font-bold
              "
                        >
                            Seamless Business Integration
                        </h3>
                        <button
                            onClick={() => toggleItem(2)}
                            className="
                ml-2
                text-sm
                text-[#00E6FF]
                px-2
                py-1
                border
                border-[#00E6FF]
                rounded
                hover:bg-[#00E6FF]
                hover:text-[#080216]
                transition-colors
                duration-300
              "
                        >
                            {openItems[2] ? "Hide" : "Details"}
                        </button>
                    </div>

                    {openItems[2] && (
                        <div>
                            <p className="text-[#9AD9FF] leading-relaxed mb-4">
                                <strong>What It Does:</strong> Nexalytica integrates effortlessly
                                with ERP, CRM, HR, Finance, and Cloud platforms, ensuring smooth
                                and efficient data flow.
                            </p>

                            <p className="text-[#9AD9FF] leading-relaxed font-semibold">
                                Supported Integrations
                            </p>
                            <ul className="mb-4">
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    CRM: Salesforce, HubSpot, Microsoft Dynamics
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    ERP: SAP, Oracle, NetSuite
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    Databases: MySQL, PostgreSQL, Google Cloud SQL
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#00C6FF]
                    before:[text-shadow:0_0_6px_#00C6FF]
                    before:text-xl
                  "
                                >
                                    Cloud Platforms: AWS, Azure, Google Cloud
                                </li>
                            </ul>

                            <p className="text-[#9AD9FF] leading-relaxed font-semibold">
                                Key Benefits
                            </p>
                            <ul className="mb-2">
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#FF40A0]
                    before:[text-shadow:0_0_6px_#FF40A0]
                    before:text-xl
                  "
                                >
                                    No complex setup, works with your existing tools
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#FF40A0]
                    before:[text-shadow:0_0_6px_#FF40A0]
                    before:text-xl
                  "
                                >
                                    Custom integration support for enterprise clients.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#FF40A0]
                    before:[text-shadow:0_0_6px_#FF40A0]
                    before:text-xl
                  "
                                >
                                    Scalable for startups, SMEs, and large enterprises.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* 4. Data & AI Consulting */}
                <div
                    className="
            bg-[#080216ee]
            p-6
            rounded-lg
            text-left
            text-white
            basis-[300px]
            flex-1
            max-w-[300px]
            transition
            duration-300
            relative
            hover:[&>img]:scale-105
            hover:[&>img]:shadow-[0_0_15px_#00E6FF]
          "
                >
                    <img
                        src="./service_image4.jpeg"
                        alt="Data & AI Consulting"
                        className="
              w-full
              h-auto
              mb-4
              rounded
              transition-transform
              duration-300
              ease-in-out
            "
                    />

                    {/* Heading & Toggle Button */}
                    <div className="flex items-center justify-between mb-2">
                        <h3
                            className="
                text-center
                text-[#00E6FF]
                text-lg
                md:text-xl
                font-bold
              "
                        >
                            Data &amp; AI Consulting
                        </h3>
                        <button
                            onClick={() => toggleItem(3)}
                            className="
                ml-2
                text-sm
                text-[#00E6FF]
                px-2
                py-1
                border
                border-[#00E6FF]
                rounded
                hover:bg-[#00E6FF]
                hover:text-[#080216]
                transition-colors
                duration-300
              "
                        >
                            {openItems[3] ? "Hide" : "Details"}
                        </button>
                    </div>

                    {openItems[3] && (
                        <div>
                            <p className="text-[#9AD9FF] leading-relaxed mb-4">
                                <strong>Data Unleashed:</strong> with our expert consulting
                                services, designed to help businesses leverage AI-driven
                                analytics for smarter decision-making. We work closely with
                                organizations to develop customized data strategies, ensuring
                                they maximize efficiency, scalability, and value from their data
                                assets.
                            </p>

                            <p className="text-[#9AD9FF] leading-relaxed font-semibold mb-2">
                                Our consulting services help businesses:
                            </p>
                            <ul className="mb-2">
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#AF52FF]
                    before:[text-shadow:0_0_6px_#AF52FF]
                    before:text-xl
                  "
                                >
                                    <strong>Implement AI-powered analytics</strong> tailored to
                                    their specific industry and objectives.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#AF52FF]
                    before:[text-shadow:0_0_6px_#AF52FF]
                    before:text-xl
                  "
                                >
                                    <strong>Streamline data workflows</strong> by automating
                                    processes and optimizing data pipelines.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#AF52FF]
                    before:[text-shadow:0_0_6px_#AF52FF]
                    before:text-xl
                  "
                                >
                                    <strong>Enhance decision-making</strong> with predictive
                                    insights, trend analysis, and AI-driven automation.
                                </li>
                                <li
                                    className="
                    relative
                    mb-3
                    pl-6
                    text-[#9AD9FF]
                    leading-relaxed
                    before:absolute
                    before:left-0
                    before:content-['•']
                    before:text-[#AF52FF]
                    before:[text-shadow:0_0_6px_#AF52FF]
                    before:text-xl
                  "
                                >
                                    <strong>Ensure seamless integration</strong> with existing
                                    cloud platforms, databases, and business intelligence tools.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductsServices;
