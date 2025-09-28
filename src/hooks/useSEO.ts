import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  defaultSEO, 
  seoPages, 
  updateMetaTags, 
  addStructuredData, 
  businessStructuredData 
} from '../lib/seo';
import type { SEOData } from '../lib/seo';

interface UseSEOOptions {
  customSEO?: Partial<SEOData>;
  structuredData?: Record<string, unknown>;
  structuredDataId?: string;
}

export function useSEO(options: UseSEOOptions = {}) {
  const location = useLocation();
  const { customSEO, structuredData, structuredDataId } = options;

  useEffect(() => {
    // Determine the current page's SEO data
    const pageSEO = seoPages[location.pathname] || defaultSEO;
    
    // Merge with custom SEO data if provided
    const finalSEO: SEOData = {
      ...pageSEO,
      ...customSEO
    };

    // Get current URL
    const currentUrl = `${window.location.origin}${location.pathname}`;
    finalSEO.url = currentUrl;

    // Update meta tags
    updateMetaTags(finalSEO, currentUrl);

    // Add business structured data on all pages
    addStructuredData(businessStructuredData, 'business-schema');

    // Add custom structured data if provided
    if (structuredData) {
      addStructuredData(structuredData, structuredDataId || 'page-schema');
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

  }, [location.pathname, customSEO, structuredData, structuredDataId]);
}

export default useSEO;