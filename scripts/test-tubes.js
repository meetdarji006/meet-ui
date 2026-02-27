import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const code = require('fs').readFileSync('node_modules/threejs-components/build/cursors/tubes1.min.js', 'utf8');
const match = code.match(/updatePointer/);
console.log("Has updatePointer?", !!match);
