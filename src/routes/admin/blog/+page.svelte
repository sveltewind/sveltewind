<script lang="ts">
	import { A, Badge, Button, Card, Container, Div, H1, H2, P } from '$components';
	let { data } = $props();
</script>

<svelte:head>
	<title>Manage blog · Sveltewind</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Container class="max-w-5xl py-12">
	<Div class="flex flex-wrap items-center justify-between gap-4">
		<H1>Blog posts</H1>
		<form method="POST" action="/admin/logout">
			<Button type="submit" variants={['ghost']}>Sign out</Button>
		</form>
	</Div>
	{#if !data.configured}
		<Card class="mt-8"><P>Configure the MongoDB connection to start writing posts.</P></Card>
	{:else}
		<A class="mt-6 inline-flex" href="/admin/blog/new" variants={['button.base']}>New post</A>
		<Div class="mt-8 flex flex-col gap-4">
			{#each data.posts as post (post.id)}
				<Card class="flex flex-wrap items-center justify-between gap-4">
					<Div>
						<H2 class="text-xl"><A href={`/admin/blog/${post.id}`}>{post.title}</A></H2><P
							class="mt-2 text-sm"
						>
							/blog/{post.slug}
						</P>
					</Div>
					<Badge>{post.status}</Badge>
				</Card>
			{:else}<P>No posts yet. Create your first draft.</P>{/each}
		</Div>
	{/if}
</Container>
