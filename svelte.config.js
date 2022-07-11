/** @type {import('@sveltejs/kit').Config} */
import adapter from 'svelte-adapter-bun';

const config = {
	kit: {
		adapter: adapter({
			out: "build",
			development: true,
			// precompress: true,
			precompress: {
			  brotli: true,
			  gzip: true,
			  files: ["htm", "html"]
			},
			dynamic_origin: true,
		  }),
	}
};

export default config;
