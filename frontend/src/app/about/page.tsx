import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Company & Culture',
  description: 'Learn about Battivus New Energy (Huizhou) Co., Ltd. - A professional engineering company specializing in custom lithium battery solutions, serving Europe, America, Japan, Korea, Russia and Middle East markets.',
};

// Company business areas with examples
const businessAreas = [
  {
    title: 'Drone Battery Solutions',
    examples: 'FPV Drones, Racing Drones',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: 'Smart Wearable Batteries',
    examples: 'Smart Glasses, Smart Watches',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Robotics & Power Tool Batteries',
    examples: 'Service Robots, Floor Cleaners, Hotel Guide Robots',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'E-Bike Battery Packs',
    examples: 'Electric Bicycles',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Automotive Power Solutions',
    examples: 'Toyota Hybrid Packs, Emergency Power Supply',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Solar Storage Solutions',
    examples: 'Street Lights, Bug Zappers, Outdoor Fishing Hats',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Portable Outdoor Batteries',
    examples: 'Flashlights, Power Banks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Consumer Rechargeable Batteries',
    examples: 'TPAC-C Integrated Charge-Discharge Lithium Cells',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Core competitiveness items
const coreAdvantages = [
  {
    title: 'High Energy Density',
    description: 'Long cycle life, competitive pricing, easy to use and safe',
    icon: '⚡',
  },
  {
    title: 'Fast Prototyping & Delivery',
    description: 'Rapid prototyping, fast delivery, and low MOQ',
    icon: '🚀',
  },
  {
    title: 'Deep Customization',
    description: 'BMS protocol (CAN/UART) customization, thermal/structural design optimization, form factor/interface personalization',
    icon: '🔧',
  },
  {
    title: 'End-to-End Engineering',
    description: 'UN38.3 / IEC 62133 / CE / UL certification, routing diagram & transport compliance guidance (IATA/IMDG)',
    icon: '📋',
  },
  {
    title: 'Traceable Quality',
    description: 'Unified IQC / IPQC / OQC standards with SN barcode tracking, First Pass Yield (FPY) ≥ 98%',
    icon: '✅',
  },
  {
    title: 'After-Sales Guarantee',
    description: '12-24 months tiered warranty, 4-hour response / 24-hour interim solution / 5-day RCCA closure',
    icon: '🛡️',
  },
];

// Company stats
const companyStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'SKUs Available' },
  { value: '50+', label: 'Countries Served' },
  { value: '98%', label: 'First Pass Yield' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Battivus</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your Trusted Partner in Custom Lithium Battery Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Company Profile</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  <strong className="text-blue-600">Battivus New Energy (Huizhou) Co., Ltd.</strong> is a professional 
                  engineering company specializing in custom lithium battery solutions. We serve customers across 
                  Europe, America, Japan, South Korea, Russia, and the Middle East markets.
                </p>
                <p className="mb-4">
                  From requirement clarification, solution design, prototype validation, certification compliance 
                  to mass production, we provide one-stop custom power solution services.
                </p>
                <p>
                  Our comprehensive approach ensures that every project receives the attention to detail and 
                  technical expertise required to deliver exceptional battery solutions tailored to your specific needs.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="text-2xl font-bold text-gray-800">Battivus</div>
                <div className="text-gray-600">New Energy (Huizhou) Co., Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business & Application Scenarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive lithium battery solutions across diverse industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-500">
                  <span className="text-gray-600 font-medium">Examples: </span>
                  {area.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competitiveness */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Competitiveness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SLA Quantifiable - Delivering measurable value at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Corporate Culture</h2>
            <p className="text-xl text-gray-300">Our Mission & Vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To make lithium battery customization <span className="text-blue-400 font-semibold">faster</span>, 
                <span className="text-blue-400 font-semibold"> more stable</span>, and 
                <span className="text-blue-400 font-semibold"> more traceable</span>.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become the <span className="text-blue-400 font-semibold">trusted partner</span> for 
                global niche-segment lithium battery customization solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Markets */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Market Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving customers across major international markets
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Europe', 'North America', 'Japan', 'South Korea', 'Russia', 'Middle East'].map((region, index) => (
              <div 
                key={index}
                className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-700 transition"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you build the perfect battery solution for your application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-lg"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
