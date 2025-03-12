// Footer.jsx
import React from "react";

function Footer() {
    return (
        <footer
            className="
        bg-gradient-to-r
        from-[#010A1A]
        to-[#000000]
        text-center
        py-6
        px-4
        mt-0
        border-t
        border-[rgba(122,27,194,0.4)]
      "
        >
            <p
                className="
          my-2
          text-[rgba(176,176,176,0.85)]
          text-[0.95rem]
        "
            >
                Made with{" "}
                <span className="text-red-500" role="img" aria-label="heart">
                    &hearts;
                </span>{" "}
                in the UK
            </p>

            <p
                className="
          my-2
          text-[rgba(176,176,176,0.85)]
          text-[0.95rem]
        "
            >
                &copy; 2024 Nexalytica. All rights reserved.
            </p>

            <p
                className="
          my-2
          text-[#00C2FF]
          font-semibold
          text-[0.95rem]
        "
            >
                Follow us on:
                <a
                    href="https://www.linkedin.com/company/nexalytica/"
                    target="_blank"
                    rel="noreferrer"
                    className="
            mx-1
            text-[#00E6FF]
            transition-colors
            duration-300
            no-underline
            hover:text-[#FF40A0]
            hover:[text-shadow:0_0_6px_rgba(0,244,255,0.5)]
          "
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}

export default Footer;
