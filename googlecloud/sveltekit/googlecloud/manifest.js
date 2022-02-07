export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-9229262a.js","js":["start-9229262a.js","chunks/vendor-b91748e0.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/user\/([^/]+?)\/?$/,
				params: (m) => ({ userId: m[1]}),
				path: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
