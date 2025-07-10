import React, { useState, useRef, useEffect } from 'react';

function TabsResponsive({ tabs, className = '' }) {
    const [activeTab, setActiveTab] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabRefs = useRef([]);

    useEffect(() => {
        // Update indicator position
        const activeTabElement = tabRefs.current[activeTab];
        if (activeTabElement) {
            setIndicatorStyle({
                left: activeTabElement.offsetLeft,
                width: activeTabElement.offsetWidth
            });
        }
    }, [activeTab]);

    return (
        <div className={className}>
            {/* Tab Headers - Scrollable on mobile */}
            <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex relative border-b border-gray-700">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                ref={el => tabRefs.current[index] = el}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    px-4 sm:px-6 py-3 whitespace-nowrap
                                    font-medium text-sm sm:text-base
                                    transition-colors duration-300
                                    ${activeTab === index 
                                        ? 'text-cyan-400' 
                                        : 'text-gray-400 hover:text-gray-300'
                                    }
                                `}
                            >
                                {tab.icon && <span className="mr-2">{tab.icon}</span>}
                                {tab.label}
                            </button>
                        ))}
                        
                        {/* Active indicator */}
                        <div 
                            className="absolute bottom-0 h-0.5 bg-cyan-400 transition-all duration-300"
                            style={indicatorStyle}
                        />
                    </div>
                </div>
                
                {/* Scroll indicators for mobile */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none sm:hidden" />
            </div>
            
            {/* Tab Content */}
            <div className="mt-6">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`
                            transition-all duration-300
                            ${activeTab === index 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4 absolute -z-10'
                            }
                        `}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TabsResponsive;