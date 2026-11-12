<script lang="ts">
	import { A, Badge, Card, Container, Div, H1, H2, P } from '$components';
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog · Sveltewind</title>
	<meta name="description" content="Articles, design ideas, and Sveltewind examples." />
</svelte:head>

<Container class="py-12 sm:py-20">
	<H1>Blog</H1>
	<P class="mt-4 max-w-2xl">Ideas and examples for building with Sveltewind.</P>
	{#if data.posts.length}
		<Div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post (post.slug)}
				<Card class="flex flex-col gap-4">
					<time datetime={post.publishedAt} class="text-sm text-gray-600 dark:text-gray-400">
						{new Date(post.publishedAt).toLocaleDateString('en-US', {
							dateStyle: 'medium',
							timeZone: 'UTC'
						})}
					</time>
					<H2 class="text-xl"><A href={`/blog/${post.slug}`}>{post.title}</A></H2>
					<P>{post.excerpt}</P>
					<Div class="flex flex-wrap gap-2">
						{#each post.tags as tag}<Badge>{tag}</Badge>{/each}
					</Div>
				</Card>
			{/each}
		</Div>
	{:else}
		<Card class="mt-10">
			<H2>No posts yet</H2><P class="mt-2">
				New articles will appear here when they are published.
			</P>
		</Card>
	{/if}
	<Div class="mt-8 flex justify-between gap-4">
		{#if data.page > 1}<A href={`/blog?page=${data.page - 1}`}>Previous page</A>{/if}
		{#if data.hasMore}<A href={`/blog?page=${data.page + 1}`}>Next page</A>{/if}
	</Div>
</Container>
