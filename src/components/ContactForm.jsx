import React from 'react';
import AnimatedButton from './AnimatedButton';

function ContactForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                                 text-white placeholder-gray-500
                                 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                                 transition-all duration-300"
                        placeholder="John"
                    />
                </div>
                
                <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                                 text-white placeholder-gray-500
                                 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                                 transition-all duration-300"
                        placeholder="Doe"
                    />
                </div>
            </div>
            
            <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                             text-white placeholder-gray-500
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-all duration-300"
                    placeholder="john.doe@example.com"
                />
            </div>
            
            <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                </label>
                <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                             text-white placeholder-gray-500
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-all duration-300"
                    placeholder="How can we help?"
                />
            </div>
            
            <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                </label>
                <textarea
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                             text-white placeholder-gray-500 resize-none
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-all duration-300"
                    placeholder="Tell us about your project..."
                />
            </div>
            
            <div className="flex justify-center pt-4">
                <AnimatedButton type="submit" variant="primary">
                    Send Message
                </AnimatedButton>
            </div>
        </form>
    );
}

export default ContactForm;