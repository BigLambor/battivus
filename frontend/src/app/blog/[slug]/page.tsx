import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts, BlogPost } from '@/lib/strapi';
import { siteConfig } from '@/lib/config';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// Fetch blog post from Strapi
async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        // First try using the strapi lib function
        const post = await getBlogPostBySlug(slug);
        if (post) return post;

        // Fallback to direct API call
        const response = await fetch(
            `${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
            { next: { revalidate: 60 } }
        );

        if (!response.ok) return null;

        const data = await response.json();
        return data.data?.[0] || null;
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    try {
        const { data: posts } = await getBlogPosts({ pageSize: 100 });
        return (posts || []).map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error generating static params for blog:', error);
        return [];
    }
}

// Generate metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchBlogPost(slug);

    if (!post) {
        return {
            title: 'Blog Post Not Found',
        };
    }

    const title = post.seo?.metaTitle || post.title;
    const description = post.seo?.metaDescription || post.excerpt;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: post.featuredImage?.url ? [{ url: post.featuredImage.url }] : [],
            type: 'article',
            publishedTime: post.publishedAt,
        },
        alternates: {
            canonical: `${siteConfig.url}/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await fetchBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
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
                            <Link href="/blog" className="text-gray-500 hover:text-blue-600">
                                Blog
                            </Link>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li className="text-gray-900 font-medium truncate max-w-[300px]">
                            {post.title}
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Article Header */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                                    >
                                        {typeof tag === 'string' ? tag : tag.name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-gray-600 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                                <span className="font-medium">{post.author?.name || 'Battivus Team'}</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <time>
                                {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>

                        {/* Featured Image */}
                        {post.featuredImage?.url ? (
                            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-12">
                                <img
                                    src={post.featuredImage.url}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden mb-12 flex items-center justify-center">
                                <svg
                                    className="w-24 h-24 text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    />
                                </svg>
                            </div>
                        )}

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}
                        />

                        {/* Share & Back */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                    Back to Blog
                                </Link>

                                <div className="flex items-center gap-4">
                                    <span className="text-gray-500 text-sm">Share:</span>
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-500 transition"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-700 transition"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles / CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Looking for Custom Battery Solutions?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our engineering team to discuss your specific drone battery requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Browse Products
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
