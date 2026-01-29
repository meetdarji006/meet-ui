// Auto-generated barrel export for component codes
// Run: npm run generate-codes

import { splitTextRevealCodeTS, splitTextRevealCodeJS } from './split-text-reveal'
import { stretchTextCodeTS, stretchTextCodeJS } from './stretch-text'

export interface ComponentCode {
    ts: string
    js: string
}

// Export as a map for easy lookup by slug
export const componentCodes: Record<string, ComponentCode> = {
    'split-text-reveal': { ts: splitTextRevealCodeTS, js: splitTextRevealCodeJS },
    'stretch-text': { ts: stretchTextCodeTS, js: stretchTextCodeJS },
}

// Also export individual codes for direct import
export {
    splitTextRevealCodeTS,
    splitTextRevealCodeJS,
    stretchTextCodeTS,
    stretchTextCodeJS,
}
