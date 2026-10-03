<script lang="ts">
	import { Badge, Breadcrumbs, Button, Card, Div, H2, H3, Input, P } from '$lib/components';
	type Entry = { name: string; folder?: string; size?: string; modified?: string };
	const directories: Record<string, Entry[]> = {
		'/': [
			{ name: 'Design', folder: '/Design' },
			{ name: 'Documents', folder: '/Documents' },
			{ name: 'Readme.txt', size: '2 KB', modified: 'Oct 2' }
		],
		'/Design': [
			{ name: 'Brand', folder: '/Design/Brand' },
			{ name: 'Wireframes.fig', size: '4.2 MB', modified: 'Oct 1' }
		],
		'/Design/Brand': [
			{ name: 'Logo.svg', size: '12 KB', modified: 'Sep 28' },
			{ name: 'Colors.json', size: '1 KB', modified: 'Sep 29' }
		],
		'/Documents': [
			{ name: 'Project brief.pdf', size: '840 KB', modified: 'Oct 3' },
			{ name: 'Meeting notes.md', size: '6 KB', modified: 'Oct 2' }
		]
	};
	let path = $state('/');
	let query = $state('');
	let selected = $state<Entry | null>(null);
	const ancestors = $derived([
		'/',
		...path
			.split('/')
			.filter(Boolean)
			.map((_, i, parts) => '/' + parts.slice(0, i + 1).join('/'))
	]);
	const entries = $derived(
		directories[path].filter((entry) => entry.name.toLowerCase().includes(query.toLowerCase()))
	);
	function open(folder: string) {
		path = folder;
		query = '';
		selected = null;
	}
</script>

<Div class="grid w-full gap-4 md:grid-cols-[1.5fr_1fr]">
	<Card class="space-y-4">
		<H2 class="text-2xl font-semibold">Team files</H2>
		<Breadcrumbs
			items={ancestors.map((value) => ({
				label: value === '/' ? 'Files' : value.split('/').at(-1)!
			}))}
		/>
		<Div class="flex flex-wrap gap-2">
			{#each ancestors as ancestor}
				<Button type="button" variants={['ghost']} class="text-xs" onclick={() => open(ancestor)}>
					{ancestor === '/' ? 'Home' : ancestor.split('/').at(-1)}
				</Button>
			{/each}
		</Div>
		<Input
			aria-label="Search this folder"
			placeholder="Search this folder..."
			bind:value={query}
			class="w-full"
		/>
		<Div class="space-y-2">
			{#each entries as entry}
				<Button
					type="button"
					variants={['ghost']}
					class="flex w-full items-center justify-between gap-3 rounded-lg border border-gray-200 p-3 text-left dark:border-gray-700"
					onclick={() => (entry.folder ? open(entry.folder) : (selected = entry))}
				>
					<span>{entry.folder ? '▣' : '▤'} {entry.name}</span>
					<Badge>{entry.folder ? 'Folder →' : entry.size}</Badge>
				</Button>
			{/each}
			{#if !entries.length}
				<P role="status">No matching files.</P>
			{/if}
		</Div>
	</Card>
	<Card class="space-y-4">
		<H3 class="text-lg font-semibold">File details</H3>
		{#if selected}
			<Badge>Document</Badge>
			<P class="font-semibold break-words">{selected.name}</P>
			<P class="text-sm">Size: {selected.size}</P>
			<P class="text-sm">Modified: {selected.modified}</P>
			<P class="text-xs">Location: {path}</P>
		{:else}
			<P class="text-sm">Open a folder or select a file to inspect its details.</P>
		{/if}
	</Card>
</Div>
