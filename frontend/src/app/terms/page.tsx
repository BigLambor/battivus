import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | Battivus',
    description: 'Read the terms and conditions for using Battivus products and services.',
};

export default function TermsOfServicePage() {
    return (
        <>
            {/* Header */}
            <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-xl text-gray-300">
                        Last updated: January 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            By accessing or using the Battivus website and services, you agree to be bound
                            by these Terms of Service. If you do not agree with any part of these terms,
                            you may not access our website or use our services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Products and Services</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Product Descriptions</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We strive to provide accurate product descriptions and specifications. However,
                            we do not warrant that product descriptions or other content on our website are
                            accurate, complete, or error-free. Specifications may be updated without notice.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Custom Orders</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Custom battery orders are subject to additional terms and conditions as specified
                            in individual quotations and agreements. Custom orders may have different return
                            and warranty policies.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Orders and Payments</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Order Acceptance</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            All orders are subject to acceptance by Battivus. We reserve the right to refuse
                            or cancel any order for any reason, including product availability, errors in
                            pricing or product information, or suspected fraud.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Pricing</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Prices are subject to change without notice. For B2B customers, quoted prices
                            remain valid for the period specified in the quotation.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Payment Terms</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Payment terms are established on a per-customer basis. Standard payment terms
                            may require payment before shipment or within 30 days of invoice for approved
                            credit accounts.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping and Delivery</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Shipping times are estimates and are not guaranteed. Battivus is not responsible
                            for delays caused by customs, carriers, or other circumstances beyond our control.
                            Risk of loss transfers to the buyer upon delivery to the carrier.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Returns and Refunds</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Standard Products</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Unused products in original packaging may be returned within 30 days of delivery
                            for a refund, subject to a restocking fee. Return shipping costs are the
                            responsibility of the buyer.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Custom Products</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Custom-designed or manufactured products are non-returnable unless defective.
                            Each custom order will specify applicable return terms.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warranty</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Limited Warranty</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Battivus warrants that products will be free from defects in materials and
                            workmanship for a period of 12 months from the date of delivery under normal
                            use conditions. Battery capacity warranty covers minimum 80% retention at
                            300 cycles.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Warranty Exclusions</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">This warranty does not cover:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Damage from improper use, handling, or storage</li>
                            <li>Damage from overcharging or using incompatible chargers</li>
                            <li>Physical damage, water damage, or fire damage</li>
                            <li>Normal wear and capacity degradation</li>
                            <li>Modifications or unauthorized repairs</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            To the maximum extent permitted by law, Battivus shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages, including
                            loss of profits, data, use, or other intangible losses.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            All content on this website, including text, graphics, logos, and images, is
                            the property of Battivus and protected by intellectual property laws. You may
                            not reproduce, distribute, or use our content without written permission.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Compliance with Laws</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            You agree to comply with all applicable laws and regulations regarding the
                            purchase, transportation, and use of lithium batteries, including but not
                            limited to shipping regulations (IATA, DOT), import/export regulations, and
                            local safety requirements.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Indemnification</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            You agree to indemnify and hold Battivus harmless from any claims, damages,
                            or expenses arising from your use of our products or services, violation of
                            these terms, or infringement of any third-party rights.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Any disputes arising from these terms or your use of our services shall be
                            resolved through good-faith negotiation. If negotiation fails, disputes shall
                            be submitted to arbitration in Shenzhen, China, in accordance with applicable
                            arbitration rules.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications to Terms</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We reserve the right to modify these terms at any time. Changes will be
                            effective immediately upon posting to this website. Your continued use of
                            our services after changes constitutes acceptance of the modified terms.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Severability</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            If any provision of these terms is found to be unenforceable, the remaining
                            provisions will continue in effect.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            For questions about these Terms of Service, please contact us:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Email: legal@battivus.com</li>
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
