import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Battivus',
    description: 'Learn how Battivus collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-300">
                        Last updated: January 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Battivus (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your
                            information when you visit our website or use our services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">We may collect personal information that you voluntarily provide to us, including:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Name and contact information (email address, phone number)</li>
                            <li>Company name and job title</li>
                            <li>Shipping and billing addresses</li>
                            <li>Product inquiry details and preferences</li>
                            <li>Communication history with our team</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">When you visit our website, we may automatically collect:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>IP address and browser type</li>
                            <li>Device information and operating system</li>
                            <li>Pages visited and time spent on our site</li>
                            <li>Referring website addresses</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">We use the collected information for the following purposes:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>To respond to your inquiries and provide customer support</li>
                            <li>To process and fulfill orders</li>
                            <li>To send product information and updates (with your consent)</li>
                            <li>To improve our website and services</li>
                            <li>To comply with legal obligations</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We do not sell, trade, or rent your personal information to third parties.
                            We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Service providers who assist in our operations</li>
                            <li>Shipping and logistics partners for order fulfillment</li>
                            <li>Legal authorities when required by law</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect
                            your personal information against unauthorized access, alteration, disclosure,
                            or destruction. However, no method of transmission over the Internet is 100% secure.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We use cookies and similar tracking technologies to enhance your browsing
                            experience. You can control cookie preferences through your browser settings.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">You have the right to:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Data Transfers</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Your information may be transferred to and processed in countries other than
                            your own. We ensure appropriate safeguards are in place to protect your data.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our services are not directed to individuals under 18 years of age. We do not
                            knowingly collect personal information from children.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of
                            any changes by posting the new policy on this page and updating the
                            &quot;Last updated&quot; date.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            If you have any questions about this Privacy Policy or our data practices,
                            please contact us:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Email: privacy@battivus.com</li>
                            <li>Address: Huizhou, Guangdong, China</li>
                        </ul>
                    </div>

                    {/* Back Link */}
                    <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
                        <Link
                            href="/"
                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
