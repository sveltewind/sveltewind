# Blog infrastructure

The blog and admin routes are part of the same SvelteKit application. Atlas stores posts through Mongoose. Database and authentication code lives in `src/server`, outside the published component library.

The deployment target is Vercel Hobby with Node.js functions and an Atlas Free cluster. Keep the project on the Hobby plan and the database on the Free tier; no paid services are required. Hobby is for personal, non-commercial use and has usage caps. See [Vercel Hobby](https://vercel.com/docs/plans/hobby) and [Atlas Free limits](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/).

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

Local builds use the Node adapter so they also work on Windows without symlink privileges. Vercel builds automatically use the Vercel adapter when `VERCEL` is set by the platform. Run `npm run dev` for development. A local production build runs with `node --env-file=.env build`; set `ORIGIN` to the local application's URL when testing form submissions behind a proxy.

For Vercel, import the repository as a SvelteKit project on a personal Hobby account. Use Node.js 22, `npm run build:site` as the build command, and add the environment variables from `.env.example` in the project settings. Keep production database credentials out of preview deployments. Match the application region to your Atlas cluster where possible. Test the Vercel deployment URL before pointing the existing domain at it; Cloudflare can continue providing DNS.

The repository is public and belongs to a GitHub organization. Vercel's documented Hobby restriction concerns **private** organization repositories. Use a personal Hobby project rather than a paid Vercel team. Verify that the import screen offers the free plan before proceeding; this change does not create an account, deploy the project, change DNS, or authorize a paid subscription. See [Vercel's Git repository rules](https://vercel.com/docs/git#using-hobby-teams).

Vercel's free functions do not provide a dedicated outbound IP. Atlas network access must accommodate the chosen deployment, with a dedicated database user and a strong password. Review the [Atlas IP access list documentation](https://www.mongodb.com/docs/atlas/security/ip-access-list/) during configuration.

Keep all configuration server-only. Never place credentials in source files, public environment variables, screenshots, or the client bundle.
