import type { MetadataRoute } from 'next';

const baseUrl = 'https://aisthesisestetica.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/curso-limpeza-de-pele`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
