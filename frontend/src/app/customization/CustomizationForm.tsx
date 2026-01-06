'use client';

import { useState } from 'react';
import { submitInquiry } from '@/lib/strapi';

export default function CustomizationForm() {
    const [formData, setFormData] = useState({
        // Contact Info
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',

        // Battery Requirements
        application: '',
        voltage: '',
        capacity: '',
        dischargeCurrent: '',
        dimensions: '',
        connector: '',

        // Project Details
        quantity: '',
        timeline: '',
        certifications: [] as string[],
        additionalRequirements: '',

        agreedToPrivacy: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Prepare inquiry data for Strapi - combine all form fields into message
            const batterySpecs = `
Application: ${formData.application}
Voltage: ${formData.voltage}
Capacity: ${formData.capacity}
Discharge Current: ${formData.dischargeCurrent || 'Not specified'}
Dimensions: ${formData.dimensions || 'Not specified'}
Connector: ${formData.connector || 'Not specified'}
Quantity: ${formData.quantity}
Timeline: ${formData.timeline || 'Not specified'}
Certifications: ${formData.certifications.length > 0 ? formData.certifications.join(', ') : 'None specified'}

Additional Requirements:
${formData.additionalRequirements || 'None'}

Phone: ${formData.phone || 'Not provided'}`;

            const inquiryData = {
                name: formData.name,
                email: formData.email,
                company: formData.company || undefined,
                country: formData.country || undefined,
                quantity: formData.quantity || undefined,
                message: `[Custom Battery Request]${batterySpecs}`,
                source: 'customization-form',
            };

            await submitInquiry(inquiryData);
            console.log('Customization form submitted to Strapi:', inquiryData);

            setIsSubmitting(false);
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    country: '',
                    application: '',
                    voltage: '',
                    capacity: '',
                    dischargeCurrent: '',
                    dimensions: '',
                    connector: '',
                    quantity: '',
                    timeline: '',
                    certifications: [],
                    additionalRequirements: '',
                    agreedToPrivacy: false,
                });
            }, 5000);
        } catch (err) {
            console.error('Failed to submit customization form:', err);
            setError('Failed to submit request. Please try again or contact us directly.');
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleCertificationChange = (certification: string) => {
        setFormData((prev) => ({
            ...prev,
            certifications: prev.certifications.includes(certification)
                ? prev.certifications.filter((c) => c !== certification)
                : [...prev.certifications, certification],
        }));
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-600">
                    Thank you for your custom battery inquiry. Our engineering team will review your requirements and contact you within 24-48 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Error Display */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {/* Contact Information */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="john@company.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Your Company"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="+1 234 567 8900"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Country/Region <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="United States"
                        />
                    </div>
                </div>
            </div>

            {/* Battery Requirements */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Battery Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label htmlFor="application" className="block text-sm font-medium text-gray-700 mb-1">
                            Application / Use Case <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="application"
                            name="application"
                            required
                            value={formData.application}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        >
                            <option value="">Select application</option>
                            <option value="fpv-racing">FPV Racing Drone</option>
                            <option value="agricultural">Agricultural Drone</option>
                            <option value="vtol">VTOL / Fixed-Wing</option>
                            <option value="industrial">Industrial Inspection</option>
                            <option value="delivery">Delivery / Logistics</option>
                            <option value="cinematography">Cinematography</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="voltage" className="block text-sm font-medium text-gray-700 mb-1">
                            Voltage / Cell Configuration <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="voltage"
                            name="voltage"
                            required
                            value={formData.voltage}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        >
                            <option value="">Select configuration</option>
                            <option value="3s">3S (11.1V)</option>
                            <option value="4s">4S (14.8V)</option>
                            <option value="6s">6S (22.2V)</option>
                            <option value="8s">8S (29.6V)</option>
                            <option value="10s">10S (37V)</option>
                            <option value="12s">12S (44.4V)</option>
                            <option value="14s">14S (51.8V)</option>
                            <option value="custom">Custom Configuration</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
                            Capacity (mAh) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="capacity"
                            name="capacity"
                            required
                            value={formData.capacity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="e.g., 5000, 10000-15000"
                        />
                    </div>

                    <div>
                        <label htmlFor="dischargeCurrent" className="block text-sm font-medium text-gray-700 mb-1">
                            Discharge Current / C-Rate
                        </label>
                        <input
                            type="text"
                            id="dischargeCurrent"
                            name="dischargeCurrent"
                            value={formData.dischargeCurrent}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="e.g., 50C continuous, 100C burst"
                        />
                    </div>

                    <div>
                        <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-1">
                            Dimensions (L×W×H mm)
                        </label>
                        <input
                            type="text"
                            id="dimensions"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="e.g., 150×50×40 or flexible"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="connector" className="block text-sm font-medium text-gray-700 mb-1">
                            Connector Type
                        </label>
                        <select
                            id="connector"
                            name="connector"
                            value={formData.connector}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        >
                            <option value="">Select connector</option>
                            <option value="xt60">XT60</option>
                            <option value="xt90">XT90</option>
                            <option value="as150u">AS150U</option>
                            <option value="ec5">EC5</option>
                            <option value="qc350">QC350</option>
                            <option value="custom">Custom Connector</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                            Estimated Quantity <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="quantity"
                            name="quantity"
                            required
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        >
                            <option value="">Select quantity</option>
                            <option value="sample">Sample / Prototype</option>
                            <option value="100-500">100 - 500 units</option>
                            <option value="500-1000">500 - 1,000 units</option>
                            <option value="1000-5000">1,000 - 5,000 units</option>
                            <option value="5000+">5,000+ units</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Timeline
                        </label>
                        <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        >
                            <option value="">Select timeline</option>
                            <option value="urgent">Urgent (ASAP)</option>
                            <option value="1-2months">1-2 months</option>
                            <option value="3-6months">3-6 months</option>
                            <option value="planning">Just planning / R&D phase</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Required Certifications
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {['CE', 'UN38.3', 'UL', 'RoHS', 'FCC', 'KC', 'PSE', 'Other'].map((cert) => (
                                <label
                                    key={cert}
                                    className={`inline-flex items-center px-4 py-2 border rounded-lg cursor-pointer transition ${formData.certifications.includes(cert)
                                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={formData.certifications.includes(cert)}
                                        onChange={() => handleCertificationChange(cert)}
                                    />
                                    {cert}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Requirements / Notes
                        </label>
                        <textarea
                            id="additionalRequirements"
                            name="additionalRequirements"
                            rows={4}
                            value={formData.additionalRequirements}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Please describe any special requirements, existing battery specifications to match, or other relevant details..."
                        />
                    </div>
                </div>
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start">
                <input
                    type="checkbox"
                    id="agreedToPrivacy"
                    name="agreedToPrivacy"
                    required
                    checked={formData.agreedToPrivacy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreedToPrivacy" className="ml-3 text-sm text-gray-600">
                    I agree to the processing of my data and understand that my information will be used to respond to my inquiry. <span className="text-red-500">*</span>
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Submitting...
                    </span>
                ) : (
                    'Submit Custom Battery Request'
                )}
            </button>
        </form>
    );
}
