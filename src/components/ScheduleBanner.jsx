// ScheduleBanner.jsx
import React from "react";
import "./ScheduleBanner.css";

function ScheduleBanner() {
    // For simplicity, we just show a banner.
    // You could integrate a Calendly link, or a form, etc.
    return (
        <section id="schedule" className="schedule-banner">
            <h2>Ready to discuss your project?</h2>
            <button onClick={() => alert("Scheduling functionality to be implemented!")}>
                Schedule an Appointment
            </button>
        </section>
    );
}

export default ScheduleBanner;
