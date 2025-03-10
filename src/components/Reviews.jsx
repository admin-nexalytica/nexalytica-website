// Reviews.jsx
import React from "react";
import "./Reviews.css";

function Reviews() {
    const reviews = [
        {
            name: "Alice Johnson",
            text: "Nexalytica transformed our data strategy overnight."
        },
        {
            name: "Bob Williams",
            text: "Unbelievably powerful insights and easy to use."
        },
        {
            name: "Carol Davis",
            text: "Our team loves the intuitive dashboards and analytics."
        },
    ];

    return (
        <section id="reviews" className="reviews-section">
            <h2>What Our Clients Say</h2>
            <div className="reviews-container">
                {reviews.map((review, idx) => (
                    <div key={idx} className="review-card">
                        <p>"{review.text}"</p>
                        <h4>- {review.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
