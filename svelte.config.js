import adapter as static from '@sveltejs/adapter-static';

var adapterConfig = {};

if (process.env.STATIC) {
  
} else {
  
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
