import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { certifications } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Technology & Capabilities',
  description: 'Explore BattiVue\'s advanced battery technology, manufacturing capabilities, R&D innovation, and quality certifications.',
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology & Capabilities</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced manufacturing, rigorous testing, and continuous innovation
          </p>
        </div>
      </section>

      {/* R&D Innovation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">R&D Innovation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our dedicated R&D team constantly pushes the boundaries of battery technology,
                developing next-generation solutions for evolving UAV requirements.
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced cell chemistry research for higher energy density',
                  'Smart BMS development with predictive analytics',
                  'Thermal management systems for extreme conditions',
                  'Custom form factor design for unique applications',
                  'Rapid prototyping and testing capabilities',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <Image
                src="/images/tech-rnd.jpg"
                alt="Battery R&D Innovation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art production facilities ensuring consistent quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Automated Assembly',
                description: 'Precision robotic assembly lines with real-time quality monitoring',
                icon: '🤖',
              },
              {
                title: 'Cell Testing',
                description: 'Individual cell testing and grading for optimal pack performance',
                icon: '🔬',
              },
              {
                title: 'Pack Assembly',
                description: 'Clean room environments for battery pack construction',
                icon: '🏭',
              },
              {
                title: 'Quality Control',
                description: 'Multi-stage QC process with 100% end-of-line testing',
                icon: '✅',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Quality */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <Image
                src="/images/tech-testing.jpg"
                alt="Rigorous Battery Testing"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rigorous Testing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every battery undergoes comprehensive testing to ensure safety, reliability,
                and performance under real-world conditions.
              </p>

              <div className="space-y-4">
                {[
                  { name: 'Capacity Testing', desc: 'Verify rated capacity under standard conditions' },
                  { name: 'Cycle Life Testing', desc: 'Accelerated aging tests for longevity validation' },
                  { name: 'Thermal Testing', desc: 'Performance verification from -20°C to 60°C' },
                  { name: 'Vibration Testing', desc: 'Simulate real-world flight conditions' },
                  { name: 'Safety Testing', desc: 'Overcharge, over-discharge, and short circuit protection' },
                ].map((test, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-blue-600 font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{test.name}</h4>
                      <p className="text-sm text-gray-600">{test.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our batteries meet international safety and quality standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">{cert.name}</span>
                </div>
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-xs text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              All our batteries are compliant with international shipping regulations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-gray-800 px-4 py-2 rounded-full">Air Transport (IATA DGR)</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">Sea Freight (IMDG)</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">Ground Transport (ADR)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity & Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Production Capacity</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalable manufacturing to meet your volume requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Battery Packs / Month</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">48hr</div>
              <div className="text-gray-600">Prototype Turnaround</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">2-4wk</div>
              <div className="text-gray-600">Production Lead Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit our facility or schedule a virtual tour to see our capabilities firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/products"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
