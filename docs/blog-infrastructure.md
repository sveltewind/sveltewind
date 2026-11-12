# Blog infrastructure

The blog and admin routes are part of the same SvelteKit application. Atlas stores posts through Mongoose. Database and authentication code lives in `src/server`, outside the published component library.

The site deploys to the existing `sveltewind` Cloudflare Worker, including the prerendered documentation, dynamic blog, and admin routes. Atlas stores the blog data. The Cloudflare adapter and `nodejs_compat` runtime setting support the server's Node.js APIs and Mongoose 9. See [SvelteKit on Cloudflare](https://svelte.dev/docs/kit/adapter-cloudflare) and [MongoDB on Workers](https://developers.cloudflare.com/workers/databases/third-party-integrations/mongodb/).

## Configuration

Copy `.env.example` to `.env` and set `MONGODB_URI` and `MONGODB_DB`. Grant the Atlas database user access only to the blog database and configure Atlas network access for your application host.

Set `BLOG_ADMIN_KEY` and `BLOG_SESSION_SECRET` to independent random values of at least 32 characters. Generate each value with:

```sh
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Use the admin key to sign in at `/admin/login`. Sessions last eight hours and use signed, HttpOnly cookies. Rotating either secret invalidates existing sessions. There is one administrator in this initial implementation. The sign-in attempt limiter is per application process; configure a shared limiter before scaling to multiple instances.

## Publishing

Create a post at `/admin/blog/new`. Store the title, slug, excerpt, tags, article paragraphs, and optional `App.svelte` source. Drafts remain private. Publishing validates Svelte syntax, but does not execute the source or resolve its imports. Saving a published post as a draft unpublishes it.

MongoDB stores an example's entry point, source file array, and Svelte/Sveltewind versions. This structure supports a future browser compiler and multi-file editor without moving examples into the repository. The current public article displays source code; interactive compilation and iframe previews are the next phase.

`/blog` lists published posts with pagination. `/blog/[slug]` serves published articles. `/api/blog/posts?page=1` exposes published summaries only. Admin routes and write actions both authenticate the session.

## Development and deployment

The blog is dynamic; documentation and existing examples continue to prerender. No database access or credentials are required to build the site. A missing MongoDB URI produces an empty public blog; connection failures return a service-unavailable response rather than exposing driver details.

Each database operation opens and closes its own Mongoose connection. Worker requests cannot reuse TCP sockets created by another request; do not replace this with a module-level connection pool. A separate connection adds latency to dynamic blog requests, while prerendered documentation is served directly as static assets.

Run `npm run dev` for development. Run `npm run build:site` followed by `npm run preview:cloudflare` to test production output in the local Workers runtime. For that runtime, put local secrets in an untracked `.dev.vars` file; do not copy production credentials into tracked configuration.

In Cloudflare's existing **Workers & Pages > sveltewind > Settings > Build**, use `npm run build:site` as the build command and `npx wrangler deploy` as the deploy command. The root directory is the repository root. Remove any deploy-command override such as `--assets ./build`; `wrangler.jsonc` defines both the Worker entry point and its assets. Keep the existing custom domain mapping for `sveltewind.com`.

The output is `.svelte-kit/cloudflare`: HTML and client assets share the public root, and `_worker.js` handles server routes. The adapter generates `.assetsignore` to exclude the Worker and server files from public asset uploads. Do not deploy the old Node `build` directory, or point assets at its `prerendered` subdirectory; that breaks URLs and leaves server routes without a runtime.

Set `MONGODB_URI`, `BLOG_ADMIN_KEY`, and `BLOG_SESSION_SECRET` as encrypted Worker secrets in Cloudflare's Variables and Secrets settings, or with `npx wrangler secret put NAME`. Set `MONGODB_DB` as a server-side variable if overriding `sveltewind`. These must be runtime settings, not only build variables. Keep production database credentials out of preview deployments. Atlas network access must allow connections from the Worker, with a dedicated database user and a strong password. Review the [Atlas IP access list documentation](https://www.mongodb.com/docs/atlas/security/ip-access-list/).

To deploy from an authenticated local checkout, run `npm run deploy:site`. To validate the bundle without publishing, run `npx wrangler deploy --dry-run` after the build. Publishing the npm library is separate from website deployment; it does not verify the Cloudflare output or runtime. A release push can trigger the connected Cloudflare build, so validate the site before releasing.

After deployment, verify `/`, `/components/multiselect`, `/blog`, and `/admin/login`. The homepage and its `/_app/` assets should return successfully; `/prerendered/` should no longer expose the homepage under a build-directory prefix.

Keep all configuration server-only. Never place credentials in source files, public environment variables, screenshots, or the client bundle.
