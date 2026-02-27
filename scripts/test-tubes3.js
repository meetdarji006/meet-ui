import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

const code = fs.readFileSync('node_modules/threejs-components/build/cursors/tubes1.min.js', 'utf8');

const matches = code.match(/.{0,50}(rendererOptions:\s*\{[^}]*\}).{0,50}/g);
if (matches) {
    console.log("Found rendererOptions:", matches.join("\n"));
}
