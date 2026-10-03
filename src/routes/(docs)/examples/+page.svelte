<script lang="ts">
	import { page } from '$app/state';
	import {
		A,
		Badge,
		Button,
		Card,
		Div,
		DocsSection,
		H1,
		H2,
		H3,
		Input,
		P,
		Span
	} from '$components';
	import ExampleThumbnail from '$components/ExampleThumbnail/ExampleThumbnail.svelte';
	import { ArrowRight, Search } from '$lib/icons';
	import { categories, examples } from '../../../examples/catalog';
	let query = $state('');
	let limit = $state(36);
	let category = $state('all');
	$effect(() => {
		const requested = page.url.searchParams.get('category') ?? 'all';
		category = categories.some((item) => item.id === requested) ? requested : 'all';
	});
	const filtered = $derived(
		examples.filter(
			(example) =>
				(category === 'all' || example.kind === category) &&
				[
					example.title,
					example.category,
					example.description,
					...example.components,
					...example.items
				]
					.join(' ')
					.toLowerCase()
					.includes(query.trim().toLowerCase())
		)
	);
	$effect(() => {
		query;
		category;
		limit = 36;
	});
</script>

<svelte:head
	><meta
		name="description"
		content="Explore a curated collection of distinct Sveltewind interfaces with interactive previews and copyable Svelte 5 source."
	/></svelte:head
>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<Div class="space-y-5"
		><Badge variants={['soft']}
			>{examples.length} distinct recipes · {categories.length} categories</Badge
		><H1>Start with an example.<br /><Span class="text-primary-500">Make it your own.</Span></H1><P
			class="max-w-2xl"
			>A curated collection of distinct interface patterns built with Sveltewind. Browse live demos,
			try the interactions, and copy the exact Svelte source into your project. Every example
			follows the style and color you choose in Settings.</P
		></Div
	>
</DocsSection>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Browse examples</H2>
	<Div class="relative"
		><Search
			class="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-gray-500"
			aria-hidden="true"
		/><Input
			aria-label="Search examples"
			type="search"
			placeholder="Search examples, patterns, or components..."
			bind:value={query}
			class="w-full pl-11"
		/></Div
	>
	<Div role="group" aria-label="Example categories" class="flex flex-wrap gap-2"
		><A
			href="/examples"
			aria-current={category === 'all' ? 'page' : undefined}
			class={`rounded-full border px-3 py-2 text-xs no-underline hover:no-underline ${category === 'all' ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400' : 'border-gray-200 text-gray-600 hover:border-primary-500 dark:border-gray-700 dark:text-gray-400'}`}
			>All examples <Span class="ml-1 opacity-60">{examples.length}</Span></A
		>
		{#each categories as item}<A
				href={`/examples?category=${item.id}`}
				aria-current={category === item.id ? 'page' : undefined}
				class={`rounded-full border px-3 py-2 text-xs no-underline hover:no-underline ${category === item.id ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400' : 'border-gray-200 text-gray-600 hover:border-primary-500 dark:border-gray-700 dark:text-gray-400'}`}
				>{item.title}</A
			>{/each}
	</Div>
	<P role="status" aria-live="polite" class="text-sm text-gray-500"
		>{filtered.length}
		{filtered.length === 1 ? 'example' : 'examples'}{query.trim()
			? ` matching “${query.trim()}”`
			: ''}</P
	>
	<Div data-example-preview class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
		{#each filtered.slice(0, limit) as example (example.id)}
			<Card
				class="group relative flex h-full min-w-0 flex-col overflow-hidden p-0 transition-shadow focus-within:inset-ring-primary-500/50 hover:shadow-lg hover:inset-ring-primary-500/50"
				><ExampleThumbnail id={example.id} /><Div class="flex grow flex-col gap-3 p-5"
					><P
						class="text-[10px] font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400"
						>{example.category}</P
					><H3 class="text-base font-semibold"
						><A
							href={`/examples/${example.id}`}
							variants={['ghost']}
							class="text-inherit no-underline after:absolute after:inset-0 after:z-10 hover:text-inherit focus-visible:after:inset-ring-2 focus-visible:after:inset-ring-primary-500"
							>{example.title}</A
						></H3
					><P class="grow text-xs leading-relaxed text-gray-600 dark:text-gray-400"
						>{example.description}</P
					><Div class="flex flex-wrap gap-1"
						>{#each example.components.slice(0, 3) as component}<Span
								class="rounded bg-gray-100 px-2 py-1 text-[10px] text-gray-500 dark:bg-gray-800 dark:text-gray-400"
								>{component}</Span
							>{/each}</Div
					><Div
						class="mt-1 flex items-center justify-between text-xs font-medium text-primary-600 dark:text-primary-400"
						><Span>View example</Span><ArrowRight
							class="size-4 transition-transform group-hover:translate-x-1"
							aria-hidden="true"
						/></Div
					></Div
				></Card
			>
		{/each}
	</Div>
	{#if !filtered.length}<Card class="space-y-3 py-12 text-center"
			><P class="text-lg font-semibold">No examples found</P><P
				>Try another search or browse all categories.</P
			><Button type="button" variants={['outline']} onclick={() => (query = '')}
				>Clear search</Button
			><A href="/examples" class="ml-3">All categories</A></Card
		>{/if}
	{#if filtered.length > limit}<Div class="flex flex-col items-center gap-3 pt-4"
			><P class="text-xs text-gray-500"
				>Showing {Math.min(limit, filtered.length)} of {filtered.length} examples</P
			><Button type="button" variants={['outline']} onclick={() => (limit += 36)}
				>Show more examples</Button
			></Div
		>{/if}
</DocsSection>
