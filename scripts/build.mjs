import { mkdir, rm, copyFile, cp } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'app.js', 'style.css', 'sw.js']) await copyFile(file, `dist/${file}`);
await cp('public', 'dist', { recursive: true });
console.log('Static PWA built in dist/');
