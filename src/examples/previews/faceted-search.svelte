<script lang="ts">
	import { Badge, Button, Card, Checkbox, Div, H2, H3, Input, P, Select } from '$lib/components';
	const titles = [
		'Getting started with Svelte',
		'Accessible form patterns',
		'Designing useful empty states',
		'Theming a component system',
		'Keyboard navigation workshop',
		'Responsive dashboard layouts',
		'Practical TypeScript tips',
		'Understanding Svelte snippets',
		'Testing interactive components',
		'Building a search interface',
		'Release planning checklist',
		'Animation with reduced motion'
	];
	const formats = ['Guide', 'Article', 'Video'];
	let resources = $state(
		titles.map((title, i) => ({
			id: i + 1,
			title,
			format: formats[i % 3],
			saved: i === 1 || i === 4
		}))
	);
	let query = $state('');
	let types = $state<Record<string, boolean>>({ Guide: true, Article: true, Video: true });
	let savedOnly = $state(false);
	let sort = $state('newest');
	let page = $state(1);
	const filtered = $derived(
		resources
			.filter(
				(resource) =>
					types[resource.format] &&
					(!savedOnly || resource.saved) &&
					resource.title.toLowerCase().includes(query.toLowerCase())
			)
			.toSorted((a, b) => (sort === 'title' ? a.title.localeCompare(b.title) : b.id - a.id))
	);
	const pages = $derived(Math.max(1, Math.ceil(filtered.length / 4)));
	const current = $derived(Math.min(page, pages));
	$effect(() => {
		query;
		types.Guide;
		types.Article;
		types.Video;
		savedOnly;
		sort;
		page = 1;
	});
</script>

<Div class="w-full space-y-5">
	<Div class="flex flex-wrap items-center justify-between gap-3">
		<H2 class="text-2xl font-semibold">Resource library</H2>
		<Badge>{filtered.length} resources</Badge>
	</Div>
	<Input
		class="w-full"
		aria-label="Search resources"
		placeholder="Search the resource library..."
		bind:value={query}
	/>
	<Div class="grid gap-5 md:grid-cols-[10rem_1fr]">
		<Card class="space-y-4">
			<H3 class="text-sm font-semibold">Format</H3>
			{#each formats as format}
				<Checkbox bind:checked={types[format]}>{format}</Checkbox>
			{/each}
			<Div class="border-t border-gray-200 pt-4 dark:border-gray-700">
				<Checkbox bind:checked={savedOnly}>Saved only</Checkbox>
			</Div>
		</Card>
		<Div class="space-y-4">
			<Select
				aria-label="Sort resources"
				bind:value={sort}
				options={[
					{ label: 'Newest added', value: 'newest' },
					{ label: 'Title A–Z', value: 'title' }
				]}
			/>
			<Div class="grid gap-3 sm:grid-cols-2">
				{#each filtered.slice((current - 1) * 4, current * 4) as resource}
					<Card class="flex flex-col gap-4">
						<Badge>{resource.format}</Badge>
						<H3 class="grow text-lg font-semibold">{resource.title}</H3>
						<Button
							type="button"
							variants={['ghost']}
							class="self-start px-0 text-xs"
							aria-pressed={resource.saved}
							aria-label={'Save ' + resource.title}
							onclick={() => (resource.saved = !resource.saved)}
						>
							{resource.saved ? '★ Saved' : '☆ Save resource'}
						</Button>
					</Card>
				{/each}
			</Div>
			{#if !filtered.length}
				<Card class="space-y-2 py-8 text-center">
					<P class="font-semibold">No resources found</P>
					<P class="text-sm">Try a different search or enable another format.</P>
				</Card>
			{:else}
				<Div class="flex items-center justify-between gap-2">
					<Button
						type="button"
						variants={['outline']}
						disabled={current === 1}
						onclick={() => (page = current - 1)}
					>
						Previous
					</Button>
					<P class="text-xs">Page {current} of {pages}</P>
					<Button
						type="button"
						variants={['outline']}
						disabled={current === pages}
						onclick={() => (page = current + 1)}
					>
						Next
					</Button>
				</Div>
			{/if}
		</Div>
	</Div>
</Div>
