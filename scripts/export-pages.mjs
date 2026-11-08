import {cp,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import './build.mjs';

// GitHub Pages publishes the generated files at main / (root).
const root=resolve(import.meta.dirname,'..');
for(const entry of await readdir(resolve(root,'dist'))) {
  await cp(resolve(root,'dist',entry),resolve(root,entry),{recursive:true});
}
console.log('Exported static files to repository root for GitHub Pages.');
