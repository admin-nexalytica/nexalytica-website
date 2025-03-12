// Hero.jsx
import React from "react";

function Hero() {
    return (
        <section
            id="hero"
            className="
        relative
        min-h-[40vh]
        flex
        justify-center
        items-center
        p-8
        overflow-hidden

        /* Pseudo-element with background image */
        before:content-['']
        before:absolute
        before:inset-0
        before:bg-[url('/hero-bg1.jpeg')]
        before:bg-cover
        before:bg-center
        before:bg-no-repeat
        before:opacity-100
        before:-z-10
      "
        >
            {/* 
        No content here—only a background image via Tailwind's pseudo-element
      */}
        </section>
    );
}

export default Hero;
