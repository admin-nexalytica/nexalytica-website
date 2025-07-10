import React, { useState } from "react";

function Location() {
    const [mapLoaded, setMapLoaded] = useState(false);

    return (
        <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#320E48] to-[#010A1A]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Visit Our Office
                    </h2>
                    <p className="text-[#9AD9FF] text-lg max-w-2xl mx-auto">
                        Located in the heart of Glasgow, we're ready to meet you in person
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Map Container */}
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden border border-[#7A1BC2]/40 shadow-[0_0_30px_rgba(122,27,194,0.3)] group">
                            {/* Loading Skeleton */}
                            {!mapLoaded && (
                                <div className="absolute inset-0 bg-[#080216]/70 animate-pulse flex items-center justify-center">
                                    <div className="text-[#9AD9FF]">Loading map...</div>
                                </div>
                            )}
                            
                            <iframe
                                title="Nexalytica Location"
                                width="600"
                                height="450"
                                loading="lazy"
                                allowFullScreen
                                onLoad={() => setMapLoaded(true)}
                                className="w-full h-[450px] border-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.590585159816!2d-4.0858989!3d55.782982200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48886b292f1eab59%3A0xb1667aa185fa37fb!2sNexalytica%20ltd!5e0!3m2!1sen!2suk!4v1741294392402!5m2!1sen!2suk"
                            />
                            
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#320E48]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                        
                        {/* Map Actions */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://maps.app.goo.gl/8TrcKeFHoweETE5W6"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#FF40A0] to-[#FF2DB4] text-white font-medium rounded-lg hover:shadow-[0_0_20px_rgba(255,64,160,0.5)] transform hover:scale-[1.02] transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Open in Google Maps
                            </a>
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Nexalytica+Ltd,+Glasgow"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-[#00E6FF] text-[#00E6FF] font-medium rounded-lg hover:bg-[#00E6FF]/10 hover:shadow-[0_0_20px_rgba(0,230,255,0.3)] transform hover:scale-[1.02] transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Location Details */}
                    <div className="order-1 lg:order-2 space-y-8">
                        {/* Address Card */}
                        <div className="bg-[#080216]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#00E6FF]/30 shadow-[0_0_30px_rgba(0,230,255,0.2)]">
                            <h3 className="text-2xl font-semibold text-[#00E6FF] mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Office Address
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="text-[#9AD9FF] text-lg leading-relaxed">
                                    <p className="font-semibold text-white mb-2">Nexalytica Ltd</p>
                                    <p>Office 2/3</p>
                                    <p>Glasgow, G2 1BP</p>
                                    <p>United Kingdom</p>
                                </div>
                                
                                {/* Business Hours */}
                                <div className="pt-6 border-t border-[#00E6FF]/20">
                                    <h4 className="text-[#00E6FF] font-medium mb-3">Business Hours</h4>
                                    <div className="space-y-2 text-[#9AD9FF]">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span>9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span>10:00 AM - 2:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;