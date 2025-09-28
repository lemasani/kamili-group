export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

export const defaultSEO: SEOData = {
  title: 'Kamili Group - Premier Construction Company in Tanzania',
  description: 'Leading construction company in Dar Es Salaam, Tanzania. We offer comprehensive building services including design, construction, renovation, civil engineering, and maintenance services.',
  keywords: 'construction company Tanzania, building contractors Dar Es Salaam, civil engineering Tanzania, renovation services, architectural design, project management Tanzania',
  image: '/logo.png',
  type: 'website'
};

export const seoPages: Record<string, SEOData> = {
  '/': {
    title: 'Kamili Group - Premier Construction Company in Tanzania',
    description: 'Leading construction company in Dar Es Salaam, Tanzania. We specialize in residential, commercial, and industrial construction with over 15 years of experience.',
    keywords: 'construction company Tanzania, building contractors Dar Es Salaam, residential construction, commercial buildings, industrial construction',
    type: 'website'
  },
  '/about': {
    title: 'About Us - Kamili Group Construction Company',
    description: 'Learn about Kamili Group, Tanzania\'s trusted construction partner with expertise in building, renovation, and civil engineering. Discover our values, mission, and commitment to excellence.',
    keywords: 'about Kamili Group, construction company history, Tanzania builders, construction expertise, building contractors',
    type: 'website'
  },
  '/services': {
    title: 'Construction Services - Design, Building & Renovation | Kamili Group',
    description: 'Comprehensive construction services in Tanzania: architectural design, building construction, renovation, civil engineering, furnishing, and maintenance. Quality guaranteed.',
    keywords: 'construction services Tanzania, building services, renovation contractors, civil engineering, architectural design, maintenance services',
    type: 'website'
  },
  '/projects': {
    title: 'Our Projects - Construction Portfolio | Kamili Group',
    description: 'Explore Kamili Group\'s successful construction projects in Tanzania. From residential homes to commercial buildings, see our quality workmanship and expertise.',
    keywords: 'construction projects Tanzania, building portfolio, completed projects, residential construction, commercial buildings',
    type: 'website'
  },
  '/team': {
    title: 'Our Team - Expert Construction Professionals | Kamili Group',
    description: 'Meet the experienced construction professionals at Kamili Group. Our skilled team of architects, engineers, and project managers deliver exceptional results.',
    keywords: 'construction team Tanzania, building professionals, architects, engineers, project managers',
    type: 'website'
  },
  '/contact': {
    title: 'Contact Us - Get Your Construction Quote | Kamili Group',
    description: 'Contact Kamili Group for your construction needs in Tanzania. Located in Tegeta, Dar Es Salaam. Get a free quote for building, renovation, or civil engineering projects.',
    keywords: 'contact construction company, Kamili Group contact, Dar Es Salaam builders, construction quote Tanzania',
    type: 'website'
  },
  '/gallery': {
    title: 'Construction Gallery - Our Work in Pictures | Kamili Group',
    description: 'View our construction gallery showcasing completed projects in Tanzania. High-quality buildings, renovations, and civil engineering works by Kamili Group.',
    keywords: 'construction gallery, building photos, project images, Tanzania construction work',
    type: 'website'
  },
  '/core-values': {
    title: 'Our Core Values - Integrity & Excellence | Kamili Group',
    description: 'Discover Kamili Group\'s core values: integrity, excellence, innovation, partnership, sustainability, and reliability in construction services across Tanzania.',
    keywords: 'construction company values, integrity, excellence, sustainability, reliable builders Tanzania',
    type: 'website'
  }
};

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kamili Group",
  "url": "https://kamiligroup.co.tz",
  "logo": "https://kamiligroup.co.tz/logo.png",
  "description": "Premier construction company in Tanzania offering comprehensive building services including design, construction, renovation, and civil engineering.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tegeta",
    "addressLocality": "Dar Es Salaam",
    "addressCountry": "TZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+255-123-456-789",
    "contactType": "customer service",
    "availableLanguage": ["English", "Swahili"]
  },
  "sameAs": [
    "https://www.facebook.com/kamiligroup",
    "https://www.linkedin.com/company/kamiligroup",
    "https://www.instagram.com/kamiligroup"
  ],
  "foundingDate": "2008",
  "numberOfEmployees": "50-100",
  "serviceArea": {
    "@type": "Place",
    "name": "Tanzania"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Building Construction",
          "description": "Complete building construction services for residential, commercial, and industrial projects"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Architectural Design",
          "description": "Professional architectural design and consultation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Civil Engineering",
          "description": "Civil and structural engineering services including steel structures and concrete work"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renovation Services",
          "description": "Building renovation, modernization, and upgrade services"
        }
      }
    ]
  }
};

export const createProjectStructuredData = (project: {
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  location?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "image": project.thumbnail,
  "dateCreated": project.date,
  "creator": {
    "@type": "Organization",
    "name": "Kamili Group"
  },
  "locationCreated": project.location || "Tanzania",
  "genre": project.category || "Construction Project"
});

export const createServiceStructuredData = (service: {
  title: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Kamili Group",
    "url": "https://kamiligroup.co.tz"
  },
  "serviceType": "Construction Service",
  "areaServed": {
    "@type": "Place",
    "name": "Tanzania"
  }
});

export function updateMetaTags(seoData: SEOData, currentUrl?: string) {
  // Update title
  document.title = seoData.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property?: boolean) => {
    const attr = property ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };

  // Basic meta tags
  updateMetaTag('description', seoData.description);
  if (seoData.keywords) {
    updateMetaTag('keywords', seoData.keywords);
  }

  // Open Graph tags
  updateMetaTag('og:title', seoData.title, true);
  updateMetaTag('og:description', seoData.description, true);
  updateMetaTag('og:type', seoData.type || 'website', true);
  
  if (currentUrl) {
    updateMetaTag('og:url', currentUrl, true);
  }
  
  if (seoData.image) {
    updateMetaTag('og:image', seoData.image, true);
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  
  if (seoData.image) {
    updateMetaTag('twitter:image', seoData.image);
  }

  // Article specific tags
  if (seoData.type === 'article') {
    if (seoData.publishedTime) {
      updateMetaTag('article:published_time', seoData.publishedTime, true);
    }
    if (seoData.modifiedTime) {
      updateMetaTag('article:modified_time', seoData.modifiedTime, true);
    }
    if (seoData.author) {
      updateMetaTag('article:author', seoData.author, true);
    }
    if (seoData.section) {
      updateMetaTag('article:section', seoData.section, true);
    }
  }
}

export function addStructuredData(data: Record<string, unknown>, id?: string) {
  const scriptId = id || 'structured-data';
  
  // Remove existing structured data with the same ID
  const existingScript = document.getElementById(scriptId);
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function generateSitemap(baseUrl: string = 'https://kamiligroup.co.tz'): string {
  const pages = Object.keys(seoPages);
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = pages.map(path => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}