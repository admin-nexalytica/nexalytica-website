// Location.jsx
import React from "react";
import "./Location.css";

function Location() {
    return (
        <section id="location" className="location-section">
            <h2>Our Location</h2>

            {/* Single <ul> for address lines in neon cyan */}
            <ul className="address-list">
                Nexalytica Ltd,<br />
                Office 2/3,<br />
                Glasgow,<br />
                G2 1BP,<br />
                United Kingdom
            </ul>

            <div className="map-container">
                {/* You can replace the src with your own location or keep this one */}
                <iframe
                    title="Nexalytica Location"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.590585159816!2d-4.0858989!3d55.782982200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48886b292f1eab59%3A0xb1667aa185fa37fb!2sNexalytica%20ltd!5e0!3m2!1sen!2suk!4v1741294392402!5m2!1sen!2suk"
                />
            </div>

            <p>
                <a
                    href="https://maps.app.goo.gl/8TrcKeFHoweETE5W6"
                    target="_blank"
                    rel="noreferrer"
                >
                    Open in Google Maps
                </a>
            </p>
        </section>
    );
}

export default Location;
