import fs from 'fs';
import path from 'path';

const dist = './dist';
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

// Copy static site files
const files = ['index.html', 'style.css', 'script.js', 'favicon.svg', 'manifest.json'];
for (const file of files) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(dist, file));
  }
}

// Copy assets folder
if (fs.existsSync('./assets')) {
  fs.cpSync('./assets', path.join(dist, 'assets'), { recursive: true });
}

console.log('✓ Build successful: Static site files copied to dist/');

