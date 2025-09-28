import React from 'react';
import useSEO from '../hooks/useSEO';
import type { SEOData } from '../lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  structuredData?: Record<string, unknown>;
  structuredDataId?: string;
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  type,
  publishedTime,
  modifiedTime,
  author,
  section,
  structuredData,
  structuredDataId,
  children
}: SEOProps) {
  const customSEO: Partial<SEOData> = {};
  
  if (title) customSEO.title = title;
  if (description) customSEO.description = description;
  if (keywords) customSEO.keywords = keywords;
  if (image) customSEO.image = image;
  if (type) customSEO.type = type;
  if (publishedTime) customSEO.publishedTime = publishedTime;
  if (modifiedTime) customSEO.modifiedTime = modifiedTime;
  if (author) customSEO.author = author;
  if (section) customSEO.section = section;

  useSEO({
    customSEO: Object.keys(customSEO).length > 0 ? customSEO : undefined,
    structuredData,
    structuredDataId
  });

  return <>{children}</>;
}