import * as universal from '../entries/pages/blog/_slug_/_page.ts.js';
import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CA1lJS3V.js","_app/immutable/chunks/Cqx2m8EO.js","_app/immutable/chunks/Diw5ZUyC.js","_app/immutable/chunks/CnaHselm.js"];
export const stylesheets = [];
export const fonts = [];
