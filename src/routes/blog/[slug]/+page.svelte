<script lang="ts">
	import { A, Badge, CodeBlock, Container, Div, H1, P } from '$components';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} · Sveltewind</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<Container class="max-w-4xl py-12 sm:py-20">
	<A href="/blog">Back to blog</A>
	<article class="mt-8">
		<H1>{data.post.title}</H1>
		<time
			datetime={data.post.publishedAt}
			class="mt-4 block text-sm text-gray-600 dark:text-gray-400"
		>
			{new Date(data.post.publishedAt).toLocaleDateString('en-US', {
				dateStyle: 'long',
				timeZone: 'UTC'
			})}
		</time>
		<Div class="mt-4 flex flex-wrap gap-2">
			{#each data.post.tags as tag}<Badge>{tag}</Badge>{/each}
		</Div>
		<Div class="mt-10 flex flex-col gap-6">
			{#each data.post.body.split(/\r?\n\s*\r?\n/) as paragraph}
				<P class="leading-relaxed whitespace-pre-wrap">{paragraph}</P>
			{/each}
		</Div>
		{#each data.post.example?.files ?? [] as file (file.name)}
			<CodeBlock class="mt-8" title={file.name} code={file.contents} options={{ lang: 'svelte' }} />
		{/each}
	</article>
</Container>
