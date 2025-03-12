import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="
        w-full
        sticky
        top-0
        z-[999]
        bg-gradient-to-r
        from-[#051A30]
        to-[#1B0530]
        px-4
        py-2
      "
        >
            <div className="flex items-center justify-between">
                {/* Logo & Brand */}
                <div className="flex items-center gap-2">
                    <img
                        src="./logo.jpg"
                        alt="Nexalytica Logo"
                        className="h-8 w-auto rounded-[3px]"
                    />
                    <div className="text-[#4EC3FF] font-bold text-base">
                        Nexalytica
                    </div>
                </div>

                {/* Hamburger Toggle (Mobile Only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
            md:hidden
            text-white
            px-2
            py-1
            rounded
            /* 
              Neon pink background 
              (the 'tile' for the dropdown toggle)
            */
            bg-[#FF40A0]

            /* If you want the button to change color on hover:
               hover:bg-[#f59e0b] 
               or keep it the same if you prefer
            */
            transition-colors
            duration-300
          "
                >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isOpen ? (
                            // X icon
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L12 
                  10.586l6.293-6.293a1 1 0 011.414 
                  1.414L13.414 12l6.293 6.293a1 1 
                  0 01-1.414 1.414L12 13.414l-6.293 
                  6.293a1 1 0 01-1.414-1.414L10.586 
                  12 4.293 5.707a1 1 0 010-1.414z"
                            />
                        ) : (
                            // Hamburger icon
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 5h16a1 1 0 110 2H4a1 1 
                  0 110-2zm0 6h16a1 1 0 110 2H4a1 
                  1 0 110-2zm0 6h16a1 1 0 110 
                  2H4a1 1 0 110-2z"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-4">
                    <li>
                        <a
                            href="#hero"
                            className="
                text-white
                px-2
                py-1
                rounded
                transition-colors
                duration-300
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="
                text-white
                px-2
                py-1
                rounded
                transition-colors
                duration-300
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#products-services"
                            className="
                text-white
                px-2
                py-1
                rounded
                transition-colors
                duration-300
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                        >
                            Products &amp; Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="
                text-white
                px-2
                py-1
                rounded
                transition-colors
                duration-300
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            href="#blog"
                            className="
                text-white
                px-2
                py-1
                rounded
                transition-colors
                duration-300
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#schedule"
                            className="
                text-white
                px-2
                py-1
                rounded
                transition-colors
                duration-300
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                        >
                            Schedule
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="
                text-white
                px-2
                py-1
                rounded
                transition-colors
                duration-300
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Nav (only if isOpen) */}
            {isOpen && (
                <ul
                    className="
            md:hidden
            mt-2
            bg-[#051A30]
            p-2
            rounded
          "
                >
                    <li>
                        <a
                            href="#hero"
                            className="
                block
                text-white
                px-2
                py-1
                rounded
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="
                block
                text-white
                px-2
                py-1
                rounded
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#products-services"
                            className="
                block
                text-white
                px-2
                py-1
                rounded
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                            onClick={() => setIsOpen(false)}
                        >
                            Products &amp; Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="
                block
                text-white
                px-2
                py-1
                rounded
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                            onClick={() => setIsOpen(false)}
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            href="#blog"
                            className="
                block
                text-white
                px-2
                py-1
                rounded
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#schedule"
                            className="
                block
                text-white
                px-2
                py-1
                rounded
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                            onClick={() => setIsOpen(false)}
                        >
                            Schedule
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="
                block
                text-white
                px-2
                py-1
                rounded
                hover:text-[#f59e0b]
                hover:bg-[#f59e0b]/20
              "
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
