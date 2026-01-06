import { Metadata } from 'next';
import Link from 'next/link';
import CustomizationForm from './CustomizationForm';

export const metadata: Metadata = {
  title: 'Custom Battery Solutions | OEM & ODM Services',
  description: 'Get custom drone batteries designed for your specific requirements. OEM/ODM services with flexible MOQ, custom specifications, branding, and certifications.',
};

const customizationOptions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Voltage & Capacity',
    description: 'Custom cell configurations from 3S to 14S+. Capacity options from 1,000mAh to 50,000mAh to match your flight requirements.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Form Factor',
    description: 'Custom dimensions to fit your drone frame perfectly. Flexible pack shapes and mounting configurations available.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Smart BMS',
    description: 'Custom Battery Management Systems with programmable features, CAN bus, I2C communication, and real-time telemetry.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Connectors & Cables',
    description: 'Choice of standard connectors (XT60, XT90, AS150U) or custom connector solutions with specific cable lengths.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Branding & Packaging',
    description: 'Custom labels, colors, and packaging with your brand. Private labeling for OEM partners.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Certifications',
    description: 'CE, UN38.3, UL, FCC certifications available. Compliance documentation for your target markets.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Submit Requirements',
    description: 'Share your battery specifications, application details, and project requirements using our form below.',
    duration: 'Day 1',
  },
  {
    step: 2,
    title: 'Engineering Review',
    description: 'Our engineering team analyzes your requirements and prepares a technical proposal with recommendations.',
    duration: 'Days 2-3',
  },
  {
    step: 3,
    title: 'Quote & Proposal',
    description: 'Receive a detailed quotation including specifications, pricing, MOQ, lead time, and certification options.',
    duration: 'Days 4-5',
  },
  {
    step: 4,
    title: 'Sample Development',
    description: 'Upon approval, we develop and ship prototype samples for your testing and validation.',
    duration: '2-3 weeks',
  },
  {
    step: 5,
    title: 'Testing & Approval',
    description: 'You test the samples in your application. We make adjustments based on your feedback if needed.',
    duration: '1-2 weeks',
  },
  {
    step: 6,
    title: 'Mass Production',
    description: 'After sample approval, we proceed with mass production and arrange shipping to your location.',
    duration: '3-4 weeks',
  },
];

const industries = [
  {
    name: 'Agricultural Drones',
    description: 'High-capacity batteries for spraying operations',
    specs: '12S-14S, 22,000-30,000mAh',
  },
  {
    name: 'FPV Racing',
    description: 'Ultra-light, high-discharge batteries',
    specs: '4S-6S, 1,000-2,200mAh, 100C+',
  },
  {
    name: 'VTOL & Fixed-Wing',
    description: 'Long-range, high energy density',
    specs: '6S-14S, 10,000-25,000mAh',
  },
  {
    name: 'Industrial Inspection',
    description: 'Reliable, wide-temp operation',
    specs: '6S-12S, 8,000-16,000mAh',
  },
  {
    name: 'Delivery & Logistics',
    description: 'Quick-swap, high cycle life',
    specs: '12S-14S, 15,000-25,000mAh',
  },
  {
    name: 'Cinematography',
    description: 'Stable voltage, lightweight',
    specs: '6S-8S, 5,000-10,000mAh',
  },
];

const benefits = [
  {
    title: 'Flexible MOQ',
    description: 'Starting from just 100 units for custom orders. Scale up as your business grows.',
    icon: '📦',
  },
  {
    title: 'Fast Turnaround',
    description: 'Sample delivery in 2-3 weeks. Production in 3-4 weeks after approval.',
    icon: '⚡',
  },
  {
    title: 'Expert Engineering',
    description: '15+ years of battery design experience. Dedicated engineer for your project.',
    icon: '🔧',
  },
  {
    title: 'Quality Assured',
    description: 'ISO 9001 certified factory. 100% testing on every battery pack.',
    icon: '✅',
  },
  {
    title: 'Global Shipping',
    description: 'UN38.3 certified. Ship worldwide via air or sea freight.',
    icon: '🌍',
  },
  {
    title: 'Ongoing Support',
    description: 'Technical support, warranty service, and continuous improvement.',
    icon: '🤝',
  },
];

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) for custom batteries?',
    a: 'Our MOQ for custom battery orders starts at 100 units. For highly customized solutions requiring new tooling or certifications, MOQ may be 200-500 units. We can discuss flexible arrangements based on your project.',
  },
  {
    q: 'How long does the customization process take?',
    a: 'Typical timeline is 6-8 weeks from initial inquiry to first production batch: 1 week for engineering review, 2-3 weeks for sample development, 1-2 weeks for testing, and 3-4 weeks for production.',
  },
  {
    q: 'Can you match an existing battery design?',
    a: 'Yes, we can reverse-engineer and manufacture batteries compatible with existing drone platforms. Send us the specifications or a sample, and we\'ll provide a compatible solution.',
  },
  {
    q: 'What certifications can you provide?',
    a: 'We offer CE, UN38.3, RoHS, and MSDS as standard. Additional certifications like UL, FCC, KC, PSE, and others are available upon request. Certification costs may apply.',
  },
  {
    q: 'Do you offer private labeling / white label services?',
    a: 'Absolutely. We provide full OEM services including custom labels, packaging, colors, and documentation with your branding. Your customers will see only your brand.',
  },
  {
    q: 'What payment terms do you offer?',
    a: 'For new customers: 50% deposit, 50% before shipping. For established customers, we offer NET 30 terms. We accept T/T, PayPal, and Letter of Credit for large orders.',
  },
];

export default function CustomizationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              OEM & ODM Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Custom Battery Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From concept to production, we design and manufacture custom drone batteries 
              tailored to your exact specifications. Partner with us to power your innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#request-form"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Your Project
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition backdrop-blur"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Customize */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Can Customize
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect of your battery pack can be tailored to your requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customizationOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Customization Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined 6-step process from initial inquiry to mass production
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
              
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex items-center mb-8 lg:mb-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <span className="text-sm font-semibold text-blue-600">{step.duration}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Custom battery solutions for every drone application
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {industry.specs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner With Battivus?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Industry-leading expertise backed by responsive service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-xl p-6"
              >
                <span className="text-3xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request Custom Battery Quote
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our engineering team will respond within 24-48 hours
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <CustomizationForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team is standing by to discuss your custom battery requirements. 
            Let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#request-form"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Requirements
            </a>
            <Link
              href="/contact"
              className="inline-block border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
