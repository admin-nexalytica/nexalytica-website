// Location.jsx
import React from "react";

function Location() {
    return (
        <section
            id="location"
            className="
        py-14
        px-5
        text-center
        bg-gradient-to-r
        from-[#320E48]
        to-[#010A1A]
      "
        >
            <h2
                className="
          text-2xl
          mb-4
          text-white
          font-bold
        "
            >
                Our Location
            </h2>

            {/* Address lines */}
            <ul
                className="
          list-none
          mx-auto
          mb-4
          p-0
          text-[1.1rem]
          text-[rgba(163,231,255,0.8)]
          leading-[1.5]
          max-w-[500px]
        "
            >
                Nexalytica Ltd,<br />
                Office 2/3,<br />
                Glasgow,<br />
                G2 1BP,<br />
                United Kingdom
            </ul>

            {/* Map container with border glow */}
            <div
                className="
          mt-8
          mx-auto
          max-w-[600px]
          border
          border-[rgba(122,27,194,0.4)]
          shadow-[0_0_8px_rgba(122,27,194,0.4)]
          rounded-lg
        "
            >
                <iframe
                    title="Nexalytica Location"
                    width="600"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    className="
            w-full
            h-[450px]
            border-0
            rounded-lg
          "
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.590585159816!2d-4.0858989!3d55.782982200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48886b292f1eab59%3A0xb1667aa185fa37fb!2sNexalytica%20ltd!5e0!3m2!1sen!2suk!4v1741294392402!5m2!1sen!2suk"
                />
            </div>

            <p className="mt-4">
                <a
                    href="https://maps.app.goo.gl/8TrcKeFHoweETE5W6"
                    target="_blank"
                    rel="noreferrer"
                    className="
            text-[#FF2DB4]
            no-underline
            transition-colors
            duration-300
            hover:text-[#00F4FF]
            hover:[text-shadow:0_0_6px_rgba(0,244,255,0.7)]
          "
                >
                    Open in Google Maps
                </a>
            </p>
        </section>
    );
}

export default Location;
