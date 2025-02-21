export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/Inter-VariableFont_opsz,wght.ttf","fonts/Lexend-VariableFont_wght.ttf","images/envelope-solid.svg","images/github-mark-white.svg","images/github-mark.svg","images/globe-solid.svg","images/profile.jpg","images/smallfish-logo-round.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Csm70jIa.js",app:"_app/immutable/entry/app.CRQIoz5D.js",imports:["_app/immutable/entry/start.Csm70jIa.js","_app/immutable/chunks/CE40xwZA.js","_app/immutable/chunks/Diw5ZUyC.js","_app/immutable/chunks/DSPYoElS.js","_app/immutable/entry/app.CRQIoz5D.js","_app/immutable/chunks/Diw5ZUyC.js","_app/immutable/chunks/DaqDOAfL.js","_app/immutable/chunks/CnaHselm.js","_app/immutable/chunks/Cqx2m8EO.js","_app/immutable/chunks/C1P__NIx.js","_app/immutable/chunks/DSPYoElS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
