#!/usr/bin/env node

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/optimized');

// Ensure output directory exists
await fs.mkdir(outputDir, { recursive: true });

// Image optimization settings
const sizes = [
  { width: 400, suffix: '-400w' },
  { width: 800, suffix: '-800w' },
  { width: 1200, suffix: '-1200w' },
  { width: 1600, suffix: '-1600w' },
];

const optimizeImage = async (filename) => {
  const inputPath = path.join(inputDir, filename);
  const baseName = path.basename(filename, path.extname(filename));
  
  console.log(`Optimizing ${filename}...`);
  
  try {
    // Create WebP versions for each size
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `${baseName}${size.suffix}.webp`);
      await sharp(inputPath)
        .resize(size.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(outputPath);
    }
    
    // Create optimized JPEG versions for fallback
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `${baseName}${size.suffix}.jpg`);
      await sharp(inputPath)
        .resize(size.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath);
    }
    
    // Create a small placeholder
    const placeholderPath = path.join(outputDir, `${baseName}-placeholder.jpg`);
    await sharp(inputPath)
      .resize(50)
      .blur(10)
      .jpeg({ quality: 50 })
      .toFile(placeholderPath);
      
    console.log(`✓ ${filename} optimized successfully`);
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error);
  }
};

// Get all JPEG/JPG files
const files = await fs.readdir(inputDir);
const imageFiles = files.filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('vite.svg')
);

// Optimize all images
console.log(`Found ${imageFiles.length} images to optimize\n`);
for (const file of imageFiles) {
  await optimizeImage(file);
}

console.log('\nImage optimization complete!');
console.log(`Optimized images saved to: ${outputDir}`);