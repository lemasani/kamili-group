#!/usr/bin/env node

/**
 * SEO Validation Script
 * Checks if SEO implementation is working correctly
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 SEO Implementation validation...\n');

const errors = [];
const warnings = [];
const success = [];

// Check if required files exist
const requiredFiles = [
  'public/sitemap.xml',
  'public/robots.txt', 
  'public/site.webmanifest',
  'src/lib/seo.ts',
  'src/hooks/useSEO.ts',
  'src/components/SEO.tsx'
];

console.log('📁 Checking required files...');
requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    success.push(`✅ ${file} exists`);
  } else {
    errors.push(`❌ ${file} is missing`);
  }
});

// Check sitemap content
console.log('\n🗺️  Validating sitemap...');
try {
  const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  if (sitemap.includes('<?xml version="1.0"')) {
    success.push('✅ Sitemap has valid XML declaration');
  } else {
    errors.push('❌ Sitemap missing XML declaration');
  }
  
  if (sitemap.includes('https://kamiligroup.co.tz')) {
    success.push('✅ Sitemap contains correct domain');
  } else {
    errors.push('❌ Sitemap missing domain URLs');
  }
  
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  if (urlCount >= 8) {
    success.push(`✅ Sitemap contains ${urlCount} URLs`);
  } else {
    warnings.push(`⚠️  Sitemap only contains ${urlCount} URLs, expected 8+`);
  }
} catch (error) {
  errors.push('❌ Could not read sitemap.xml');
}

// Check robots.txt
console.log('\n🤖 Validating robots.txt...');
try {
  const robotsPath = path.join(process.cwd(), 'public/robots.txt');
  const robots = fs.readFileSync(robotsPath, 'utf8');
  
  if (robots.includes('User-agent: *')) {
    success.push('✅ robots.txt has user-agent directive');
  } else {
    errors.push('❌ robots.txt missing user-agent directive');
  }
  
  if (robots.includes('Sitemap: https://kamiligroup.co.tz/sitemap.xml')) {
    success.push('✅ robots.txt references sitemap');
  } else {
    errors.push('❌ robots.txt missing sitemap reference');
  }
} catch (error) {
  errors.push('❌ Could not read robots.txt');
}

// Check web manifest
console.log('\n📱 Validating web manifest...');
try {
  const manifestPath = path.join(process.cwd(), 'public/site.webmanifest');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  if (manifest.name && manifest.name.includes('Kamili Group')) {
    success.push('✅ Web manifest has correct app name');
  } else {
    errors.push('❌ Web manifest missing or incorrect app name');
  }
  
  if (manifest.icons && manifest.icons.length > 0) {
    success.push(`✅ Web manifest has ${manifest.icons.length} icons`);
  } else {
    warnings.push('⚠️  Web manifest missing icons');
  }
} catch (error) {
  errors.push('❌ Could not read or parse web manifest');
}

// Check TypeScript SEO files
console.log('\n⚙️  Validating SEO implementation files...');
try {
  const seoLibPath = path.join(process.cwd(), 'src/lib/seo.ts');
  const seoLib = fs.readFileSync(seoLibPath, 'utf8');
  
  if (seoLib.includes('export const businessStructuredData')) {
    success.push('✅ Business structured data defined');
  } else {
    errors.push('❌ Business structured data missing');
  }
  
  if (seoLib.includes('export const seoPages')) {
    success.push('✅ SEO pages configuration defined');
  } else {
    errors.push('❌ SEO pages configuration missing');
  }
} catch (error) {
  errors.push('❌ Could not read SEO library file');
}

// Print results
console.log('\n' + '='.repeat(50));
console.log('📊 SEO VALIDATION RESULTS');
console.log('='.repeat(50));

if (success.length > 0) {
  console.log('\n✅ SUCCESS:');
  success.forEach(msg => console.log(`   ${msg}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  warnings.forEach(msg => console.log(`   ${msg}`));
}

if (errors.length > 0) {
  console.log('\n❌ ERRORS:');
  errors.forEach(msg => console.log(`   ${msg}`));
  console.log('\n🚨 Please fix the errors above before deploying.\n');
  process.exit(1);
} else {
  console.log('\n🎉 SEO implementation is valid and ready for deployment!');
  console.log('\n📋 Next steps:');
  console.log('   1. Deploy the website to production');
  console.log('   2. Submit sitemap to Google Search Console');
  console.log('   3. Test social media previews');
  console.log('   4. Monitor SEO performance\n');
}