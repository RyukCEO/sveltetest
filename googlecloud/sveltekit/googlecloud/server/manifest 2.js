export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-912eecc7.js","js":["start-912eecc7.js","chunks/vendor-b91748e0.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/logedin\/?$/,
				params: null,
				path: "/logedin",
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/server\/?$/,
				params: null,
				load: () => import('./entries/endpoints/server.js')
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/user\/([^/]+?)\/?$/,
				params: (m) => ({ userId: m[1]}),
				path: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/mediapost\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/mediapost.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/auth\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/auth.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/user\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/user.js')
			}
		]
	}
};
