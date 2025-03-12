// Gallery.jsx
import React from "react";

function Gallery() {
    return (
        <section
            id="gallery"
            className="
        py-14
        px-5
        text-center
        bg-gradient-to-r
        from-[#3D0140]
        to-[#5B0245]
      "
        >
            {/* Optional navigation arrows */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-[#00C2FF] text-2xl cursor-pointer">&#10094;</span>
                <span className="text-[#00C2FF] text-2xl cursor-pointer">&#10095;</span>
            </div>

            <h2 className="text-2xl mb-4 text-[#00F4FF]">Gallery</h2>

            {/* Responsive grid for images */}
            <div
                className="
          w-[90%]
          max-w-[1000px]
          mx-auto
          grid
          gap-6
          [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]
        "
            >
                {/* Example Image #1 */}
                <div
                    className="
            group
            relative
            overflow-hidden
            border-2
            border-[#FF40A0]
            shadow-[0_0_10px_#FF40A0]
            rounded-sm
            transition-shadow
            duration-300
            ease-in-out

            /* Intensify glow on hover */
            hover:shadow-[0_0_15px_#FF40A0]
          "
                >
                    <img
                        src="./image1.jpeg"
                        alt="Image 1"
                        className="
              w-full
              h-auto
              block
            "
                    />
                    {/* Optional pink overlay on hover – remove if not needed */}
                    <div
                        className="
              absolute
              inset-0
              pointer-events-none
              bg-[rgba(255,64,160,0.15)]
              opacity-0
              transition-opacity
              duration-300
              ease-in-out
              group-hover:opacity-100
            "
                    ></div>
                </div>

                {/* Example Image #2 */}
                <div
                    className="
            group
            relative
            overflow-hidden
            border-2
            border-[#FF40A0]
            shadow-[0_0_10px_#FF40A0]
            rounded-sm
            transition-shadow
            duration-300
            ease-in-out
            hover:shadow-[0_0_15px_#FF40A0]
          "
                >
                    <img
                        src="./image6.jpeg"
                        alt="Image 2"
                        className="
              w-full
              h-auto
              block
            "
                    />
                    <div
                        className="
              absolute
              inset-0
              pointer-events-none
              bg-[rgba(255,64,160,0.15)]
              opacity-0
              transition-opacity
              duration-300
              ease-in-out
              group-hover:opacity-100
            "
                    ></div>
                </div>

                {/* Example Image #3 */}
                <div
                    className="
            group
            relative
            overflow-hidden
            border-2
            border-[#FF40A0]
            shadow-[0_0_10px_#FF40A0]
            rounded-sm
            transition-shadow
            duration-300
            ease-in-out
            hover:shadow-[0_0_15px_#FF40A0]
          "
                >
                    <img
                        src="./image5.jpeg"
                        alt="Image 3"
                        className="
              w-full
              h-auto
              block
            "
                    />
                    <div
                        className="
              absolute
              inset-0
              pointer-events-none
              bg-[rgba(255,64,160,0.15)]
              opacity-0
              transition-opacity
              duration-300
              ease-in-out
              group-hover:opacity-100
            "
                    ></div>
                </div>

                {/* Example Image #4 */}
                <div
                    className="
            group
            relative
            overflow-hidden
            border-2
            border-[#FF40A0]
            shadow-[0_0_10px_#FF40A0]
            rounded-sm
            transition-shadow
            duration-300
            ease-in-out
            hover:shadow-[0_0_15px_#FF40A0]
          "
                >
                    <img
                        src="./image4.jpeg"
                        alt="Image 4"
                        className="
              w-full
              h-auto
              block
            "
                    />
                    <div
                        className="
              absolute
              inset-0
              pointer-events-none
              bg-[rgba(255,64,160,0.15)]
              opacity-0
              transition-opacity
              duration-300
              ease-in-out
              group-hover:opacity-100
            "
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
