import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B0J__vCJ.js","_app/immutable/chunks/Cqx2m8EO.js","_app/immutable/chunks/Diw5ZUyC.js","_app/immutable/chunks/Djh89LDx.js","_app/immutable/chunks/DaqDOAfL.js","_app/immutable/chunks/CnaHselm.js","_app/immutable/chunks/CtJDCgaI.js","_app/immutable/chunks/C1P__NIx.js"];
export const stylesheets = ["_app/immutable/assets/2.Dr4KKUk_.css"];
export const fonts = [];
