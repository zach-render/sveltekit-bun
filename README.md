# sveltekit-bun

This repo contains code for a SvelteKit application generated using the [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) package that generates a [Bun](https://bun.sh) server.

To create your own SvelteKit project, you can either

- [Create your own repo from this template](https://github.com/render-examples/sveltekit/generate) and modify it for your needs
- Create a new SvelteKit project by following the [SvelteKit Getting Started Guide](https://kit.svelte.dev/docs) and then making a few small modifications as shown in [this commit](https://github.com/render-examples/sveltekit/commit/3ea50803f118da041745fd8cb51094972ac87f3c) to deploy it to Render as a Node.js service.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
cd build; bun build/index.js

```

## Building

```bash
npm run build
```

> You can preview the built app with `npm run preview`. This should _not_ be used to serve your app in production.

## Deploying to Render

Follow the deploy instructions at https://render.com/docs/deploy-sveltekit#deploy-as-a-bun-server
