/**
 * Development script that runs Strapi develop and copies schemas after each compilation
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'api');
const distDir = path.join(__dirname, '..', 'dist', 'src', 'api');

function copySchemaFiles(srcPath, distPath) {
  if (!fs.existsSync(srcPath)) return;
  
  const items = fs.readdirSync(srcPath);
  items.forEach(item => {
    const srcItemPath = path.join(srcPath, item);
    const distItemPath = path.join(distPath, item);
    const stat = fs.statSync(srcItemPath);

    if (stat.isDirectory()) {
      copySchemaFiles(srcItemPath, distItemPath);
    } else if (item === 'schema.json') {
      const destDir = path.dirname(distItemPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(srcItemPath, distItemPath);
      console.log(`[Schema] Copied: ${item} for ${path.basename(path.dirname(destDir))}`);
    }
  });
}

// Start strapi develop
console.log('Starting Strapi development server...');
const strapi = spawn('npx', ['strapi', 'develop'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  env: { ...process.env }
});

let schemasCopied = false;

strapi.stdout.on('data', (data) => {
  const output = data.toString();
  process.stdout.write(output);
  
  // Copy schemas after TypeScript compilation completes
  if (output.includes('Compiling TS') && output.includes('✔')) {
    setTimeout(() => {
      console.log('\n[Schema] Copying schema.json files...');
      copySchemaFiles(srcDir, distDir);
      schemasCopied = true;
    }, 100);
  }
  
  // Also copy after "Strapi started successfully" if not already done
  if (output.includes('Strapi started successfully') && !schemasCopied) {
    console.log('\n[Schema] Copying schema.json files...');
    copySchemaFiles(srcDir, distDir);
    schemasCopied = true;
  }
});

strapi.stderr.on('data', (data) => {
  process.stderr.write(data.toString());
});

strapi.on('close', (code) => {
  console.log(`Strapi exited with code ${code}`);
  process.exit(code);
});

process.on('SIGINT', () => {
  strapi.kill('SIGINT');
});

process.on('SIGTERM', () => {
  strapi.kill('SIGTERM');
});
