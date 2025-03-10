// Contact.jsx
import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>

            <p className="contact-info">
                For inquiries, email us at:
                <br />
                <a href="mailto:info@nexalytica.com" className="contact-link">
                    info@nexalytica.com
                </a>
            </p>

            <p className="contact-info">
                or call us at:
                <br />
                <a href="+44 7519652463" className="contact-link">
                    +44 7519652463
                </a>
            </p>
        </section>
    );
}

export default Contact;
