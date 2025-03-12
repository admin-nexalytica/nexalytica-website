// Contact.jsx
import React from "react";

function Contact() {
    return (
        <section
            id="contact"
            className="
        py-14
        px-5
        text-center
        bg-gradient-to-r
        from-[#1A3D5A]
        to-[#320E48]
      "
        >
            <h2
                className="
          text-2xl
          mb-6
          text-[#00F4FF]
          font-bold
        "
            >
                Contact Us
            </h2>

            <p
                className="
          text-[1.1rem]
          text-[rgba(234,234,234,0.85)]
          mb-4
        "
            >
                For inquiries, email us at:
                <br />
                <a
                    href="mailto:info@nexalytica.com"
                    className="
            text-[#00E6FF]
            transition-colors
            duration-300
            no-underline
            hover:text-[#FF40A0]
            hover:[text-shadow:0_0_5px_rgba(255,64,160,0.7)]
          "
                >
                    info@nexalytica.com
                </a>
            </p>

            <p
                className="
          text-[1.1rem]
          text-[rgba(234,234,234,0.85)]
          mb-4
        "
            >
                or call us at:
                <br />
                <a
                    href="+44 7519652463"
                    className="
            text-[#00E6FF]
            transition-colors
            duration-300
            no-underline
            hover:text-[#FF40A0]
            hover:[text-shadow:0_0_5px_rgba(255,64,160,0.7)]
          "
                >
                    +44 7519652463
                </a>
            </p>
        </section>
    );
}

export default Contact;
