import React, { useState } from 'react';

function Accordion({ items, className = '' }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`space-y-3 ${className}`}>
            {items.map((item, index) => (
                <div 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
                >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
                        aria-expanded={openIndex === index}
                    >
                        <h3 className="text-lg font-medium text-white pr-4">
                            {item.title}
                        </h3>
                        <svg 
                            className={`
                                w-5 h-5 text-cyan-400 flex-shrink-0
                                transform transition-transform duration-300
                                ${openIndex === index ? 'rotate-180' : ''}
                            `}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    <div className={`
                        overflow-hidden transition-all duration-300
                        ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                    `}>
                        <div className="px-6 pb-4 text-gray-300">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;