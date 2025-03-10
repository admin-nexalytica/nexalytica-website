// Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-section">
            <p className="love-note">
                Made with <span style={{ color: "red" }}>&hearts;</span> in the UK
            </p>
            <p>&copy; 2024 Nexalytica. All rights reserved.</p>
            <p className="follow-us">
                Follow us on:
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    Facebook
                </a>{" "}
                |{" "}
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    Twitter
                </a>{" "}
                |{" "}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}

export default Footer;
