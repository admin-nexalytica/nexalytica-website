// About.jsx
import React from "react";

function About() {
    return (
        <section
            id="about"
            className="
        w-full
        overflow-x-hidden  /* Prevents any horizontal overflow */
        py-14
        px-5
        text-center
        bg-gradient-to-r
        from-[#051A30]
        to-[#1B0530]
      "
        >
            <h2
                className="
          text-2xl
          sm:text-3xl
          font-bold
          mb-4
          text-[#4EC3FF]
        "
            >
                AI-Powered Business Intelligence
            </h2>

            <p
                className="
          max-w-3xl
          mx-auto
          text-base          /* Good size on small screens */
          sm:text-lg         /* Slightly larger on small/medium */
          md:text-xl         /* Larger still on medium and up */
          leading-relaxed
          text-[#B0B0B0]
          mb-8
        "
            >
                At Nexalytica, we believe that data should work for you, not the other way around.
                Our cutting-edge AI-powered business intelligence platform transforms
                <span className="text-[#FF40A0]"> natural language prompts </span>
                into actionable insights, making data analysis seamless, intuitive,
                and accessible to everyone.
            </p>

            <h3
                className="
          text-xl
          sm:text-2xl
          font-bold
          mb-4
          text-[#4EC3FF]
        "
            >
                Our Mission
            </h3>

            <p
                className="
          max-w-3xl
          mx-auto
          text-base
          sm:text-lg
          md:text-xl
          leading-relaxed
          text-[#B0B0B0]
        "
            >
                We aim to bridge the gap between complex data and decision-making, enabling businesses
                to extract real-time insights without technical expertise. By leveraging
                <span className="text-[#FF40A0]"> AI, Retrieval Augmented Generation,</span>
                and automated visualization, we empower organizations to unlock the full
                potential of their data and drive strategic growth.
            </p>
        </section>
    );
}

export default About;
