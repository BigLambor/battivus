import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig, productCategories } from '@/lib/config';
import {
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  renderJsonLd
} from '@/lib/seo';
import type { Product } from '@/types';
import InquiryButton from '@/components/forms/InquiryButton';
import ProductFAQ from '@/components/products/ProductFAQ';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// Helper function to fetch product from Strapi
async function fetchProductFromStrapi(category: string, slug: string): Promise<Product | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=category`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) return null;

    const data = await response.json();
    const strapiProduct = data.data?.[0];

    if (!strapiProduct) return null;

    // Transform Strapi product to our Product type
    const transformedProduct: Product = {
      id: String(strapiProduct.id),
      name: strapiProduct.name,
      slug: strapiProduct.slug,
      sku: strapiProduct.sku,
      category: strapiProduct.category ? {
        id: String(strapiProduct.category.id),
        name: strapiProduct.category.name,
        slug: strapiProduct.category.slug,
        description: strapiProduct.category.description || '',
      } : productCategories[0],
      shortDescription: strapiProduct.short_description || '',
      fullDescription: strapiProduct.full_description || `<p>${strapiProduct.short_description || ''}</p>`,
      specifications: {
        voltage: strapiProduct.voltage || 0,
        capacity: strapiProduct.capacity || 0,
        cRate: strapiProduct.c_rate || 0,
        weight: strapiProduct.weight || 0,
        dimensions: strapiProduct.dimensions || 'N/A',
        connectorType: strapiProduct.connector_type || 'N/A',
        cellType: strapiProduct.cell_type || 'LiPo',
      },
      images: strapiProduct.images?.map((img: { url: string }) => img.url) || [],
      featured: strapiProduct.featured || false,
      faqs: strapiProduct.faqs || [],
      seo: {
        metaTitle: strapiProduct.seo_title || strapiProduct.name,
        metaDescription: strapiProduct.seo_description || strapiProduct.short_description || '',
      },
      createdAt: strapiProduct.createdAt,
      updatedAt: strapiProduct.updatedAt,
    };

    return transformedProduct;
  } catch (error) {
    console.error('Error fetching product from Strapi:', error);
    return null;
  }
}

// Mock data - fallback when Strapi is not available
const mockProducts: Product[] = [
  {
    id: '1',
    name: '22000mAh 12S Agricultural Drone Battery',
    slug: '22000mah-12s-agricultural',
    sku: 'BV-AG-22000-12S',
    category: productCategories[1],
    shortDescription: 'High capacity battery for agricultural spray drones with extended flight time.',
    fullDescription: `
      <p>The BV-AG-22000-12S is our flagship agricultural drone battery, designed specifically for demanding spray operations. With its massive 22000mAh capacity and 12S configuration, this battery delivers exceptional flight times while maintaining stable voltage output throughout the discharge cycle.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Premium grade LiPo cells with consistent performance</li>
        <li>Built-in smart BMS for cell balancing and protection</li>
        <li>Rugged casing designed for outdoor agricultural environments</li>
        <li>Quick-release mounting system for fast battery swaps</li>
        <li>Temperature sensors for thermal protection</li>
      </ul>
      
      <h3>Compatibility:</h3>
      <p>This battery is compatible with most agricultural spray drones including DJI Agras T30, T40, and similar platforms. Custom connectors available upon request.</p>
    `,
    specifications: {
      voltage: 12,
      capacity: 22000,
      cRate: 25,
      weight: 4850,
      dimensions: '205×90×68mm',
      connectorType: 'AS150U',
      cellType: 'LiPo',
    },
    images: ['/images/products/ag-22000-12s.jpg'],
    dischargeCurve: '/images/products/discharge-curve-ag-22000.jpg',
    datasheet: '/downloads/BV-AG-22000-12S-datasheet.pdf',
    msds: '/downloads/BV-AG-22000-12S-msds.pdf',
    featured: true,
    relatedProducts: ['2', '5'],
    faqs: [
      {
        question: 'What is the expected flight time with this battery?',
        answer: 'Flight time depends on your drone weight and payload, but typically ranges from 15-25 minutes for agricultural spray drones under normal operating conditions.',
      },
      {
        question: 'Is this battery compatible with DJI Agras drones?',
        answer: 'Yes, this battery is designed for agricultural drones including DJI Agras T30, T40, and similar platforms. We can also provide custom connectors for other drone models.',
      },
      {
        question: 'What certifications does this battery have?',
        answer: 'This battery is CE certified, UN38.3 tested for air transport, and comes with full MSDS documentation. RoHS compliant.',
      },
      {
        question: 'How many charge cycles can I expect?',
        answer: 'With proper care and storage, you can expect 300-500 charge cycles before the capacity drops to 80% of original capacity.',
      },
    ],
    seo: {
      metaTitle: '22000mAh 12S Agricultural Drone Battery | Battivus',
      metaDescription: 'High capacity 22000mAh 12S LiPo battery for agricultural spray drones. 25C discharge rate, AS150U connector. Compatible with DJI Agras.',
    },
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
];

// Generate static params for all products
export async function generateStaticParams() {
  // Try to fetch from Strapi, otherwise use mock
  try {
    const response = await fetch(`${STRAPI_URL}/api/products?populate=category`);
    if (response.ok) {
      const data = await response.json();
      return (data.data || []).map((product: { category?: { slug: string }; slug: string }) => ({
        category: product.category?.slug || 'uncategorized',
        slug: product.slug,
      }));
    }
  } catch (error) {
    console.error('Error fetching products for static params:', error);
  }

  return mockProducts.map((product) => ({
    category: product.category.slug,
    slug: product.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;

  // Try Strapi first
  let product = await fetchProductFromStrapi(category, slug);

  // Fallback to mock data
  if (!product) {
    product = mockProducts.find(
      (p) => p.category.slug === category && p.slug === slug
    ) || null;
  }

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.seo.metaTitle || product.name,
    description: product.seo.metaDescription || product.shortDescription,
    openGraph: {
      title: product.seo.metaTitle || product.name,
      description: product.seo.metaDescription || product.shortDescription,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
      type: 'website',
    },
    alternates: {
      canonical: `${siteConfig.url}/products/${category}/${slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  // Try Strapi first
  let product = await fetchProductFromStrapi(category, slug);

  // Fallback to mock data
  if (!product) {
    product = mockProducts.find(
      (p) => p.category.slug === category && p.slug === slug
    ) || null;
  }

  if (!product) {
    notFound();
  }

  // Generate schemas
  const productSchema = generateProductSchema(product);
  const faqSchema = product.faqs.length > 0 ? generateFAQSchema(product.faqs) : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.category.name, url: `/products/${product.category.slug}` },
    { name: product.name, url: `/products/${product.category.slug}/${product.slug}` },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: renderJsonLd(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-blue-600">
                Products
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                href={`/products/${product.category.slug}`}
                className="text-gray-500 hover:text-blue-600"
              >
                {product.category.name}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-32 h-32 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              {/* Thumbnail gallery placeholder */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-blue-600 font-medium">
                  {product.category.name}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="text-sm text-gray-500">Voltage</div>
                  <div className="font-semibold text-gray-900">
                    {product.specifications.voltage}S ({product.specifications.voltage * 3.7}V)
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Capacity</div>
                  <div className="font-semibold text-gray-900">
                    {product.specifications.capacity}mAh
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Discharge Rate</div>
                  <div className="font-semibold text-gray-900">
                    {product.specifications.cRate}C
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Weight</div>
                  <div className="font-semibold text-gray-900">
                    {product.specifications.weight}g
                  </div>
                </div>
              </div>

              {/* SKU */}
              <div className="text-sm text-gray-500 mb-6">
                SKU: <span className="font-medium text-gray-700">{product.sku}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <InquiryButton
                  productName={product.name}
                  productSku={product.sku}
                  productUrl={`/products/${product.category.slug}/${product.slug}`}
                />
                {product.datasheet && (
                  <a
                    href={product.datasheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Datasheet
                  </a>
                )}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-green-500"
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
                  CE Certified
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-green-500"
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
                  UN38.3 Tested
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-green-500"
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
                  RoHS Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50 w-1/3">
                    Voltage Configuration
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.specifications.voltage}S ({(product.specifications.voltage * 3.7).toFixed(1)}V nominal)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
                    Capacity
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.specifications.capacity}mAh
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
                    Discharge Rate
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.specifications.cRate}C Continuous
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
                    Weight
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.specifications.weight}g ({(product.specifications.weight / 1000).toFixed(2)}kg)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
                    Dimensions
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.specifications.dimensions}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
                    Connector Type
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.specifications.connectorType}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
                    Cell Type
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.specifications.cellType}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
                    Energy Density
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {((product.specifications.capacity * product.specifications.voltage * 3.7) / product.specifications.weight).toFixed(1)} Wh/kg
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Documents */}
          <div className="mt-8 flex flex-wrap gap-4">
            {product.datasheet && (
              <a
                href={product.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                </svg>
                <span className="text-sm font-medium">Datasheet (PDF)</span>
              </a>
            )}
            {product.msds && (
              <a
                href={product.msds}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                </svg>
                <span className="text-sm font-medium">MSDS (PDF)</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {product.faqs.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <ProductFAQ faqs={product.faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We can customize this battery or design a completely new solution based on your requirements.
          </p>
          <Link
            href="/customization"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Discuss Custom Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
