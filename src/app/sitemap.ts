import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const routes = ['', '/store', '/suppliers', '/contact'];
  const locales: ('en'|'ar')[] = ['en','ar'];
  const paths = locales.flatMap((l) => routes.map((r) => ({
    url: `${base}/${l}${r}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: r === '' ? 1 : 0.8
  })));
  return paths;
}
