import React from 'react';

function KPISection() {
    const kpis = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            value: "80%",
            label: "Faster Decisions",
            iconColor: "#00E6FF",
            valueColor: "#00E6FF",
            bgColor: "bg-[#001A26]",
            borderColor: "border-[#00E6FF]/30"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 12l2 2 4-4" />
                </svg>
            ),
            value: "99.9%",
            label: "Data Security",
            iconColor: "#4ADE80",
            valueColor: "#4ADE80",
            bgColor: "bg-[#0A1F13]",
            borderColor: "border-[#4ADE80]/30"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            value: "100%",
            label: "Integration",
            iconColor: "#FBBF24",
            valueColor: "#FBBF24",
            bgColor: "bg-[#1F1A0A]",
            borderColor: "border-[#FBBF24]/30"
        }
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050510]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Performance Metrics
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Delivering exceptional results through data-driven excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {kpis.map((kpi, index) => (
                        <div
                            key={index}
                            className={`group relative ${kpi.bgColor} rounded-2xl p-6 border-2 ${kpi.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-[1.02]`}
                        >
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-4" style={{ color: kpi.iconColor }}>
                                    {kpi.icon}
                                </div>
                                
                                <div className="text-4xl font-bold mb-2" style={{ color: kpi.valueColor }}>
                                    {kpi.value}
                                </div>
                                
                                <div className="text-gray-200 text-lg font-medium">
                                    {kpi.label}
                                </div>
                            </div>
                            
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KPISection;