#!/usr/bin/env node

/**
 * Favicon Generator Script
 * Generates favicons from SVG source
 *
 * Prerequisites: Install sharp for image processing
 * npm install sharp --save-dev
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const svgIconPath = path.join(publicDir, 'icon.svg');

// Sizes to generate
const sizes = [
  { name: 'icon-light-32x32.png', size: 32, type: 'light' },
  { name: 'icon-dark-32x32.png', size: 32, type: 'dark' },
  { name: 'apple-icon.png', size: 180, type: 'light' },
  { name: 'favicon-16x16.png', size: 16, type: 'light' },
  { name: 'favicon-32x32.png', size: 32, type: 'light' },
];

console.log('🎨 Favicon Generator\n');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Error: sharp is not installed.');
  console.log('\nTo install sharp, run:\n  npm install sharp --save-dev\n');
  console.log('Alternatively, use online tools to convert icon.svg to PNG:');
  console.log('  - https://realfavicongenerator.net/');
  console.log('  - https://www.favicon-generator.org/');
  process.exit(1);
}

async function generateFavicons() {
  console.log('📁 Reading SVG icon...');

  if (!fs.existsSync(svgIconPath)) {
    console.error(`❌ Error: ${svgIconPath} not found.`);
    process.exit(1);
  }

  try {
    // Generate PNG files from SVG
    for (const { name, size, type } of sizes) {
      const outputPath = path.join(publicDir, name);

      console.log(`\n✨ Generating ${name} (${size}x${size}px)...`);

      await sharp(svgIconPath)
        .resize(size, size, {
          fit: 'contain',
          background: type === 'dark' ? { r: 255, g: 255, b: 255, alpha: 1 } : { r: 10, g: 10, b: 10, alpha: 1 }
        })
        .png()
        .toFile(outputPath);

      console.log(`   ✓ Created ${name}`);
    }

    console.log('\n✅ All favicons generated successfully!\n');
    console.log('Generated files:');
    sizes.forEach(({ name }) => {
      console.log(`   • ${name}`);
    });

    console.log('\n💡 Tip: Clear your browser cache to see the new favicon.\n');

  } catch (error) {
    console.error('\n❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateFavicons();
