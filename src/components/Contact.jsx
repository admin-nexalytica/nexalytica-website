import React, { useState } from "react";
import emailjs from '@emailjs/browser';
// Contact form with EmailJS integration

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });
        
        try {
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            
            if (!publicKey || !serviceId || !templateId) {
                throw new Error('EmailJS configuration is missing. Please contact support.');
            }
            
            // Initialize EmailJS with your public key
            emailjs.init(publicKey);
            
            // Send email
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                company: formData.company || 'Not provided',
                message: formData.message,
                to_email: 'info@nexalytica.com' // Your receiving email
            };
            
            await emailjs.send(
                serviceId,
                templateId,
                templateParams
            );
            
            // Success
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
            });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
        } catch (error) {
            console.error('EmailJS Error Details:', {
                error: error,
                message: error.message,
                status: error.status,
                text: error.text,
                response: error.response,
                details: JSON.stringify(error)
            });
            
            // Provide more specific error messages
            let errorMessage = 'Sorry, there was an error sending your message. ';
            
            if (error.text === 'The user ID is required') {
                errorMessage += 'Configuration error. Please contact support.';
            } else if (error.text && error.text.includes('service_id')) {
                errorMessage += 'Email service not properly configured.';
            } else if (error.text && error.text.includes('template_id')) {
                errorMessage += 'Email template not found.';
            } else if (error.text && error.text.includes('Gmail_API')) {
                errorMessage += 'Gmail authentication issue. Please try again later.';
            } else {
                errorMessage += 'Please try again or contact us directly at info@nexalytica.com';
            }
            
            setSubmitStatus({
                type: 'error',
                message: errorMessage
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1A3D5A] to-[#320E48]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#00F4FF] mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-[#9AD9FF] text-lg max-w-2xl mx-auto">
                        Ready to transform your data into actionable insights? Let's start a conversation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-[#080216]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#00C2FF]/30 shadow-[0_0_30px_rgba(0,194,255,0.2)]">
                        <h3 className="text-2xl font-semibold text-[#00E6FF] mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#9AD9FF] text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#0A0F1F]/50 border border-[#00C2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E6FF] focus:shadow-[0_0_10px_rgba(0,230,255,0.3)] transition-all duration-300"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#9AD9FF] text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#0A0F1F]/50 border border-[#00C2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E6FF] focus:shadow-[0_0_10px_rgba(0,230,255,0.3)] transition-all duration-300"
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-[#9AD9FF] text-sm font-medium mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#0A0F1F]/50 border border-[#00C2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E6FF] focus:shadow-[0_0_10px_rgba(0,230,255,0.3)] transition-all duration-300"
                                    placeholder="Your Company"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-[#9AD9FF] text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-[#0A0F1F]/50 border border-[#00C2FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E6FF] focus:shadow-[0_0_10px_rgba(0,230,255,0.3)] transition-all duration-300 resize-none"
                                    placeholder="Tell us about your data analytics needs..."
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 font-semibold rounded-lg transform transition-all duration-300 ${
                                    isSubmitting 
                                        ? 'bg-gray-600 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-[#00E6FF] to-[#00C2FF] text-black hover:shadow-[0_0_20px_rgba(0,230,255,0.5)] hover:scale-[1.02]'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {/* Status Messages */}
                            {submitStatus.message && (
                                <div className={`mt-4 p-4 rounded-lg text-center ${
                                    submitStatus.type === 'success' 
                                        ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Direct Contact Card */}
                        <div className="bg-[#080216]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#FF40A0]/30 shadow-[0_0_30px_rgba(255,64,160,0.2)]">
                            <h3 className="text-2xl font-semibold text-[#FF40A0] mb-6">Direct Contact</h3>
                            
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#00E6FF] to-[#00C2FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[#00E6FF] font-medium mb-1">Email Us</h4>
                                        <a href="mailto:info@nexalytica.com" className="text-[#9AD9FF] hover:text-[#FF40A0] transition-colors duration-300">
                                            info@nexalytica.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF40A0] to-[#FF2DB4] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[#FF40A0] font-medium mb-1">Call Us</h4>
                                        <a href="tel:+447519652463" className="text-[#9AD9FF] hover:text-[#00E6FF] transition-colors duration-300">
                                            +44 7519 652463
                                        </a>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#00C2FF] to-[#0078FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[#00C2FF] font-medium mb-1">Response Time</h4>
                                        <p className="text-[#9AD9FF]">We typically respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Schedule Demo Card */}
                        <div className="bg-gradient-to-r from-[#00E6FF]/10 to-[#FF40A0]/10 rounded-2xl p-8 border border-[#00E6FF]/30">
                            <h3 className="text-2xl font-semibold text-[#00E6FF] mb-4">Schedule a Demo</h3>
                            <p className="text-[#9AD9FF] mb-6">
                                See Nexalytica in action. Book a personalized demo to discover how our AI-powered analytics can transform your business.
                            </p>
                            <button className="w-full py-3 bg-gradient-to-r from-[#FF40A0] to-[#FF2DB4] text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(255,64,160,0.5)] transform hover:scale-[1.02] transition-all duration-300">
                                Book Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;