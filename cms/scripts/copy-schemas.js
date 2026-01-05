/**
 * Copy schema.json files from src/api to dist/src/api
 * This is necessary because TypeScript compiler doesn't copy JSON files
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'api');
const distDir = path.join(__dirname, '..', 'dist', 'src', 'api');

function copySchemaFiles(srcPath, distPath) {
  // Check if source directory exists
  if (!fs.existsSync(srcPath)) {
    console.log(`Source directory does not exist: ${srcPath}`);
    return;
  }

  // Get all items in the source directory
  const items = fs.readdirSync(srcPath);

  items.forEach(item => {
    const srcItemPath = path.join(srcPath, item);
    const distItemPath = path.join(distPath, item);
    const stat = fs.statSync(srcItemPath);

    if (stat.isDirectory()) {
      // Recursively process directories
      copySchemaFiles(srcItemPath, distItemPath);
    } else if (item === 'schema.json') {
      // Copy schema.json files
      // Ensure the destination directory exists
      const destDir = path.dirname(distItemPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      fs.copyFileSync(srcItemPath, distItemPath);
      console.log(`Copied: ${srcItemPath} -> ${distItemPath}`);
    }
  });
}

console.log('Copying schema.json files to dist...');
copySchemaFiles(srcDir, distDir);
console.log('Schema copy complete!');
