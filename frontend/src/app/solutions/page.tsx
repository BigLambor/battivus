import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Drone Battery Solutions',
  description: 'Explore our drone battery solutions for aerial mapping, agricultural spraying, industrial inspection, and heavy lift applications.',
};

const solutions = [
  {
    slug: 'aerial-mapping',
    title: 'Aerial Mapping & Survey',
    description: 'Power solutions for mapping and surveying drones requiring extended flight times and stable voltage output.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    painPoints: [
      'Insufficient flight time for large area coverage',
      'Voltage sag affecting sensor accuracy',
      'Weight constraints limiting payload capacity',
    ],
    solutions: [
      'High energy density Li-ion cells for maximum flight time',
      'Stable voltage output throughout discharge cycle',
      'Optimized weight-to-capacity ratio',
    ],
    specs: ['6S-14S configurations', '10,000-25,000mAh capacity', '15-25C discharge'],
  },
  {
    slug: 'agricultural-spraying',
    title: 'Agricultural Spraying',
    description: 'Heavy-duty batteries for agricultural spray drones, designed for demanding outdoor conditions and extended operations.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    painPoints: [
      'Need for high capacity to carry heavy payloads',
      'Exposure to dust, humidity, and temperature extremes',
      'Frequent charge cycles during busy seasons',
    ],
    solutions: [
      'Ultra-high capacity packs (22,000-30,000mAh)',
      'Ruggedized enclosure with IP rating',
      'Premium cells with 500+ cycle life',
    ],
    specs: ['12S-14S configurations', '22,000-30,000mAh capacity', '25C continuous'],
  },
  {
    slug: 'inspection-patrol',
    title: 'Industrial Inspection & Patrol',
    description: 'Reliable power systems for inspection drones used in infrastructure monitoring, security, and surveillance applications.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    painPoints: [
      'Consistent performance across varied conditions',
      'Quick deployment and battery swap requirements',
      'Reliability for mission-critical operations',
    ],
    solutions: [
      'Wide temperature operating range (-20°C to 60°C)',
      'Quick-release mounting systems',
      'Built-in BMS with comprehensive protection',
    ],
    specs: ['6S-12S configurations', '8,000-16,000mAh capacity', '25-35C discharge'],
  },
  {
    slug: 'heavy-lift',
    title: 'Heavy Lift Drones',
    description: 'Maximum power output for heavy lift drones used in cargo delivery, emergency response, and industrial applications.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    painPoints: [
      'Need for extremely high current output',
      'Managing heat under sustained heavy loads',
      'Balancing capacity with weight constraints',
    ],
    solutions: [
      'Ultra-high C-rate cells (35-50C)',
      'Advanced thermal management systems',
      'Parallel pack configurations for capacity scaling',
    ],
    specs: ['12S-14S configurations', '20,000-50,000mAh capacity', '35-50C discharge'],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Drone Battery Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Purpose-built power systems engineered for your specific industry applications
          </p>
        </div>
      </section>

      {/* Solutions Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.slug}
                id={solution.slug}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Solution Info */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      {solution.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                    {/* Quick Specs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {solution.specs.map((spec, i) => (
                        <span key={i} className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/customization"
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Get Custom Quote
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Pain Points & Solutions */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Pain Points */}
                    <div className="bg-red-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Industry Challenges
                      </h3>
                      <ul className="space-y-3">
                        {solution.painPoints.map((point, i) => (
                          <li key={i} className="flex items-start text-red-700">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Our Solutions */}
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Our Solutions
                      </h3>
                      <ul className="space-y-3">
                        {solution.solutions.map((sol, i) => (
                          <li key={i} className="flex items-start text-green-700">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < solutions.length - 1 && (
                  <div className="border-b border-gray-200 mt-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Industry Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Each industry has unique power requirements. Our solutions are engineered to address specific challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Application-Specific</h3>
                <p className="text-gray-600 text-sm">
                  Batteries optimized for your exact use case, not generic one-size-fits-all solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance Optimized</h3>
                <p className="text-gray-600 text-sm">
                  Cell selection and pack design tuned for your specific power profile requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Work directly with our engineers to develop the perfect power solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Application?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We develop custom solutions for unique applications. Share your requirements with our engineering team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
