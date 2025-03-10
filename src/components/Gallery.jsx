// Gallery.jsx
import React from "react";
import "./Gallery.css";

function Gallery() {
    return (
        <section id="gallery" className="gallery-section">
            {/* Placeholder navigation arrows, if you need them for a slider */}
            <div className="gallery-nav">
                <span className="arrow arrow-left">&#10094;</span>
                <span className="arrow arrow-right">&#10095;</span>
            </div>

            <h2>Gallery</h2>

            <div className="gallery-grid">
                {/* 1st image */}
                <div className="gallery-item">
                    <img src="./image1.jpeg" alt="Image 1" />
                </div>

                {/* 2nd image */}
                <div className="gallery-item">
                    <img src="./image6.jpeg" alt="Image 2" />
                </div>

                {/* 3rd image */}
                <div className="gallery-item">
                    <img src="./image5.jpeg" alt="Image 3" />
                </div>

                {/* 4th image */}
                <div className="gallery-item">
                    <img src="./image4.jpeg" alt="Image 4" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;
