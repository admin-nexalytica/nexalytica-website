// Team.jsx
import React from "react";
import "./Team.css";

function Team() {
    return (
        <section id="team" className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                <div className="team-member">
                    <h3>Vaisakh Francis</h3>
                    <p>Lead Analyst &amp; Co-Founder</p>
                </div>
                <div className="team-member">
                    <h3>Jeetesh Naik</h3>
                    <p>CEO &amp; Co-Founder</p>
                </div>
                <div className="team-member">
                    <h3>Richie Kurian</h3>
                    <p>Market Consultant</p>
                </div>
            </div>
        </section>
    );
}

export default Team;
