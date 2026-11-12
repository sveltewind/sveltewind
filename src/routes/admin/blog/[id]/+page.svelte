<script lang="ts">
	import { page } from '$app/state';
	import { A, Button, Container, Div, Field, H1, Input, Label, P, Textarea } from '$components';
	let { data, form } = $props();
	const values = $derived(form?.values ?? data.post);
</script>

<svelte:head>
	<title>Edit blog post · Sveltewind</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Container class="max-w-4xl py-12">
	<A href="/admin/blog">Back to posts</A>
	<H1 class="mt-6">{page.params.id === 'new' ? 'New post' : 'Edit post'}</H1>
	<P class="mt-2">Status: {data.post.status}</P>
	{#if page.url.searchParams.has('saved')}<P role="status" class="mt-4">Post saved.</P>{/if}
	{#if form?.message}<P role="alert" class="mt-4">{form.message}</P>{/if}
	<form method="POST" class="mt-8 flex flex-col gap-6">
		<Field>
			<Label for="post-title">Title</Label><Input
				id="post-title"
				name="title"
				value={values.title}
				required
				maxlength={160}
			/>
		</Field>
		<Field>
			<Label for="post-slug">Slug</Label><Input
				id="post-slug"
				name="slug"
				value={values.slug}
				placeholder="building-a-pricing-section"
				required
				maxlength={200}
				pattern="[a-z0-9]+(-[a-z0-9]+)*"
			/>
		</Field>
		<Field>
			<Label for="post-excerpt">Excerpt</Label><Textarea
				id="post-excerpt"
				name="excerpt"
				value={values.excerpt}
				rows={3}
				maxlength={500}
			/>
		</Field>
		<Field>
			<Label for="post-tags">Tags, separated by commas</Label><Input
				id="post-tags"
				name="tags"
				value={values.tags}
				maxlength={500}
				placeholder="layouts, buttons"
			/>
		</Field>
		<Field>
			<Label for="post-body">Article</Label><Textarea
				id="post-body"
				name="body"
				value={values.body}
				rows={16}
				maxlength={200000}
			/><P class="text-sm">Separate paragraphs with a blank line.</P>
		</Field>
		<Field>
			<Label for="post-source">Svelte example · App.svelte</Label><Textarea
				id="post-source"
				name="source"
				value={values.source}
				rows={20}
				maxlength={200000}
				spellcheck={false}
				class="font-mono text-sm"
			/><P class="text-sm">Optional. Save the original source with your post.</P>
		</Field>
		<Div class="flex flex-wrap gap-4">
			<Button type="submit" name="intent" value="draft" variants={['outline']}>
				Save as draft
			</Button>
			<Button type="submit" name="intent" value="publish">Publish</Button>
		</Div>
		{#if data.post.status === 'published'}<P class="text-sm">
				Saving as a draft removes this post from the public blog.
			</P>{/if}
	</form>
</Container>
