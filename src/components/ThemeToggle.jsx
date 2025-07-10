import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative w-16 h-8 
                bg-gray-700 rounded-full 
                transition-all duration-300 
                hover:bg-gray-600
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900
                ${className}
            `}
            aria-label="Toggle theme"
        >
            {/* Track */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className={`
                    absolute inset-0 
                    bg-gradient-to-r from-gray-700 to-gray-600
                    transition-opacity duration-300
                    ${theme === 'light' ? 'opacity-0' : 'opacity-100'}
                `} />
                <div className={`
                    absolute inset-0 
                    bg-gradient-to-r from-blue-400 to-blue-500
                    transition-opacity duration-300
                    ${theme === 'light' ? 'opacity-100' : 'opacity-0'}
                `} />
            </div>
            
            {/* Thumb */}
            <div className={`
                absolute top-1 
                w-6 h-6 
                bg-white rounded-full 
                shadow-lg
                transition-all duration-300 
                transform
                ${theme === 'light' ? 'translate-x-8' : 'translate-x-1'}
            `}>
                {/* Icons */}
                <div className="relative w-full h-full">
                    {/* Moon icon */}
                    <svg 
                        className={`
                            absolute inset-0 w-4 h-4 m-1
                            text-gray-700
                            transition-all duration-300
                            ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}
                        `}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    
                    {/* Sun icon */}
                    <svg 
                        className={`
                            absolute inset-0 w-4 h-4 m-1
                            text-yellow-500
                            transition-all duration-300
                            ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}
                        `}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </button>
    );
}

export default ThemeToggle;