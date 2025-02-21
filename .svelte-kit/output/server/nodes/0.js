import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BfS2ej65.js","_app/immutable/chunks/Cqx2m8EO.js","_app/immutable/chunks/Diw5ZUyC.js","_app/immutable/chunks/CtJDCgaI.js"];
export const stylesheets = ["_app/immutable/assets/0.Bv20Zr-e.css"];
export const fonts = [];
