import { MetadataRoute } from 'next';
import { siteConfig, productCategories } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    '',
    '/products',
    '/solutions',
    '/technology',
    '/customization',
    '/about',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Product category pages
  const categoryPages = productCategories.map((category) => ({
    url: `${baseUrl}/products/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Solution pages
  const solutionPages = siteConfig.navigation.solutions.map((solution) => ({
    url: `${baseUrl}${solution.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // In production, fetch products from Strapi and add them here
  // const productPages = products.map(product => ({
  //   url: `${baseUrl}/products/${product.category.slug}/${product.slug}`,
  //   lastModified: product.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...staticPages, ...categoryPages, ...solutionPages];
}
