import fs from 'fs';
import path from 'path';

// SEO page definitions
const seoPages = {
  '/': {
    title: 'Kamili Group - Premier Construction Company in Tanzania',
    description: 'Leading construction company in Dar Es Salaam, Tanzania. We specialize in residential, commercial, and industrial construction with over 15 years of experience.',
    priority: '1.0',
    changefreq: 'weekly'
  },
  '/about': {
    title: 'About Us - Kamili Group Construction Company',
    description: 'Learn about Kamili Group, Tanzania\'s trusted construction partner with expertise in building, renovation, and civil engineering.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/services': {
    title: 'Construction Services - Design, Building & Renovation | Kamili Group',
    description: 'Comprehensive construction services in Tanzania: architectural design, building construction, renovation, civil engineering, furnishing, and maintenance.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/projects': {
    title: 'Our Projects - Construction Portfolio | Kamili Group',
    description: 'Explore Kamili Group\'s successful construction projects in Tanzania. From residential homes to commercial buildings, see our quality workmanship.',
    priority: '0.8',
    changefreq: 'weekly'
  },
  '/team': {
    title: 'Our Team - Expert Construction Professionals | Kamili Group',
    description: 'Meet the experienced construction professionals at Kamili Group. Our skilled team of architects, engineers, and project managers.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/contact': {
    title: 'Contact Us - Get Your Construction Quote | Kamili Group',
    description: 'Contact Kamili Group for your construction needs in Tanzania. Located in Tegeta, Dar Es Salaam. Get a free quote today.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/gallery': {
    title: 'Construction Gallery - Our Work in Pictures | Kamili Group',
    description: 'View our construction gallery showcasing completed projects in Tanzania. High-quality buildings, renovations, and civil engineering works.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/core-values': {
    title: 'Our Core Values - Integrity & Excellence | Kamili Group',
    description: 'Discover Kamili Group\'s core values: integrity, excellence, innovation, partnership, sustainability, and reliability in construction.',
    priority: '0.8',
    changefreq: 'monthly'
  }
};

// Generate sitemap.xml
function generateSitemap(baseUrl = 'https://kamiligroup.co.tz') {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = Object.entries(seoPages).map(([path, data]) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${data.changefreq}</changefreq>
    <priority>${data.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Generate sitemap.xml
const sitemap = generateSitemap('https://kamiligroup.co.tz');
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully at public/sitemap.xml');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Disallow admin or private directories (if any)
Disallow: /admin/
Disallow: /private/

# Allow all search engines
Crawl-delay: 1

# Sitemap location
Sitemap: https://kamiligroup.co.tz/sitemap.xml

# Specific directives for major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block specific file types if needed
Disallow: *.pdf$
Disallow: *.doc$
Disallow: *.docx$
`;

const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('✅ robots.txt generated successfully at public/robots.txt');

// Generate or update web manifest
const webManifest = {
  "name": "Kamili Group - Construction Company Tanzania",
  "short_name": "Kamili Group",
  "description": "Premier construction company in Tanzania offering comprehensive building services",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#f59e0b",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/",
  "scope": "/",
  "orientation": "portrait-primary",
  "categories": ["business", "construction", "services"]
};

const manifestPath = path.join(process.cwd(), 'public', 'site.webmanifest');
fs.writeFileSync(manifestPath, JSON.stringify(webManifest, null, 2));
console.log('✅ Web manifest updated successfully at public/site.webmanifest');

console.log('✅ All SEO files generated successfully!');