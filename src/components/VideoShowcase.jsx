// VideoShowcase.jsx
import React from "react";
import "./VideoShowcase.css";

function VideoShowcase() {
    return (
        <section id="video-showcase" className="video-showcase-section">
            <h2>Watch Nexalytica in Action</h2>

            <div className="video-container">
                {/* Using native browser controls */}
                <video width="560" height="315"  controls >
                    <source src="https://github.com/admin-nexalytica/nexalytica-website/blob/722400bf7bc897cec65e0ff9fa096a28d5881664/public/nexa_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="video-subtext">
                Discover how Nexalytica’s advanced analytics can transform your business.
            </p>
        </section>
    );
}

export default VideoShowcase;
