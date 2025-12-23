/**
 * Performance Optimization Script for Treatment Pages
 * 
 * This script helps identify pages that need optimization by checking for:
 * 1. Synchronous imports of heavy components
 * 2. Structured data at the top (should be at bottom)
 * 3. Missing dynamic imports for below-the-fold components
 * 4. LCP image optimization issues
 */

const fs = require('fs');
const path = require('path');

const componentsToOptimize = [
  'ConsultationForm',
  'CostCalculator',
  'PostOperativeCare',
  'WhatsAppExpertChat',
  'FAQ',
  'Testimonials',
  'RecoveryTimeline',
  'RelatedBlogs',
];

const pagesToCheck = [
  'app/best-laser-fistula-treatment/page.tsx',
  'app/best-anal-fissure-treatment/page.tsx',
  'app/best-laser-pilonidal-sinus-treatment/page.tsx',
  'app/best-gallbladder-stone-surgeon-delhi/page.tsx',
  'app/best-appendix-surgeon-in-delhi/page.tsx',
  'app/best-rectal-prolapse-surgeon-in-delhi/page.tsx',
  'app/best-femoral-hernia-surgeon-in-delhi/page.tsx',
  'app/best-incisional-hernia-surgeon-in-delhi/page.tsx',
  'app/best-inguinal-hernia-surgeon-in-delhi/page.tsx',
  'app/best-hiatus-hernia-surgeon-in-delhi/page.tsx',
  'app/cbd-stone-treatment-in-delhi/page.tsx',
  'app/gallbladder-polyps-treatment-in-delhi/page.tsx',
  'app/lipoma-treatment/page.tsx',
];

function checkPage(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    return { file: filePath, exists: false };
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  const issues = [];

  // Check for synchronous imports
  componentsToOptimize.forEach(component => {
    const syncImportRegex = new RegExp(`import\\s+${component}\\s+from`, 'i');
    if (syncImportRegex.test(content)) {
      issues.push(`Synchronous import of ${component}`);
    }
  });

  // Check if structured data is at top
  const structuredDataAtTop = /<StructuredData.*?\/>\s*<\/>\s*<div/s.test(content);
  if (structuredDataAtTop) {
    issues.push('StructuredData at top (should be at bottom)');
  }

  // Check for dynamic import
  const hasDynamicImport = /import\s+dynamic\s+from\s+['"]next\/dynamic['"]/.test(content);
  if (!hasDynamicImport && issues.length > 0) {
    issues.push('Missing dynamic imports');
  }

  // Check LCP image quality
  const lcpImageRegex = /priority.*?quality=\{(\d+)\}/s;
  const qualityMatch = content.match(lcpImageRegex);
  if (qualityMatch && parseInt(qualityMatch[1]) < 85) {
    issues.push(`LCP image quality is ${qualityMatch[1]} (should be 85+)`);
  }

  return {
    file: filePath,
    exists: true,
    issues,
    needsOptimization: issues.length > 0,
  };
}

console.log('Checking pages for optimization needs...\n');
const results = pagesToCheck.map(checkPage);

results.forEach(result => {
  if (!result.exists) {
    console.log(`⚠️  ${result.file} - File not found`);
  } else if (result.needsOptimization) {
    console.log(`❌ ${result.file}`);
    result.issues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    console.log(`✅ ${result.file} - Already optimized`);
  }
});

const needsOptimization = results.filter(r => r.needsOptimization);
console.log(`\n📊 Summary: ${needsOptimization.length} of ${results.length} pages need optimization`);

