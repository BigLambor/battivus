import type { Product, BlogPost, FAQ } from '@/types';
import { siteConfig } from './config';

// Generate Product Schema (JSON-LD)
export function generateProductSchema(product: Product): object {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    image: product.images[0] ? `${siteConfig.url}${product.images[0]}` : undefined,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      price: '0',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      url: `${siteConfig.url}/products/${product.category.slug}/${product.slug}`,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Voltage',
        value: `${product.specifications.voltage}S`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Capacity',
        value: `${product.specifications.capacity}mAh`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Discharge Rate',
        value: `${product.specifications.cRate}C`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Cell Type',
        value: product.specifications.cellType,
      },
    ],
  };
}

// Generate FAQ Schema (JSON-LD)
export function generateFAQSchema(faqs: FAQ[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate Organization Schema (JSON-LD)
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      availableLanguage: ['English', 'Chinese'],
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shenzhen',
      addressRegion: 'Guangdong',
      addressCountry: 'CN',
    },
  };
}

// Generate BreadcrumbList Schema (JSON-LD)
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// Generate Article Schema for Blog Posts (JSON-LD)
export function generateArticleSchema(post: BlogPost): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage ? `${siteConfig.url}${post.featuredImage}` : undefined,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

// Generate WebSite Schema (JSON-LD)
export function generateWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/products?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Utility to render JSON-LD script tag content
export function renderJsonLd(schema: object | object[]): string {
  return JSON.stringify(schema);
}

// Generate meta tags object for Next.js Metadata
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  canonicalUrl?: string;
  noIndex?: boolean;
}) {
  const finalTitle = title
    ? siteConfig.seo.titleTemplate.replace('%s', title)
    : siteConfig.seo.defaultTitle;
  const finalDescription = description || siteConfig.seo.defaultDescription;
  const finalOgImage = ogImage || siteConfig.ogImage;
  const finalKeywords = keywords || siteConfig.seo.keywords;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords.join(', '),
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${finalOgImage}`,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [`${siteConfig.url}${finalOgImage}`],
    },
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
  };
}
