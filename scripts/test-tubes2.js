import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const createTubesCursor = require('threejs-components/build/cursors/tubes1.min.js');
const { JSDOM } = require('jsdom'); // meet-ui might not have jsdom, let's just make a dummy canvas
