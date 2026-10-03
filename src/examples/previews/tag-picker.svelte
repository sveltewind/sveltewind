<script lang="ts">
	import { Badge, Button, Card, Div, Form, H2, Input, P } from '$lib/components';
	let available = $state([
		'Svelte',
		'TypeScript',
		'Accessibility',
		'Design systems',
		'Animation',
		'Testing',
		'Performance'
	]);
	let selected = $state(['Svelte', 'Design systems']);
	let query = $state('');
	let message = $state('');
	const matches = $derived(
		available.filter(
			(tag) => !selected.includes(tag) && tag.toLowerCase().includes(query.trim().toLowerCase())
		)
	);
	const custom = $derived(
		query.trim() && !available.some((tag) => tag.toLowerCase() === query.trim().toLowerCase())
	);
	function add(value: string) {
		const tag =
			available.find((tag) => tag.toLowerCase() === value.trim().toLowerCase()) ?? value.trim();
		if (!tag) return;
		if (selected.includes(tag)) {
			message = 'This tag is already selected.';
			return;
		}
		if (selected.length >= 6) {
			message = 'Choose up to six tags.';
			return;
		}
		if (!available.includes(tag)) available.push(tag);
		selected.push(tag);
		query = '';
		message = '';
	}
</script>

<Card class="mx-auto max-w-xl space-y-5"
	><Div class="flex items-center justify-between"
		><H2 class="text-2xl font-semibold">Choose your topics</H2><Badge>{selected.length} / 6</Badge
		></Div
	><P class="text-sm"
		>Pick existing topics or create your own tag. Each topic can only be selected once.</P
	><Div
		class="flex min-h-14 flex-wrap items-center gap-2 rounded-xl border border-primary-500/20 p-3"
		>{#each selected as tag}<Badge class="inline-flex items-center gap-2"
				><span>{tag}</span><Button
					type="button"
					variants={['ghost']}
					class="p-0 text-xs"
					aria-label={'Remove ' + tag}
					onclick={() => (selected = selected.filter((item) => item !== tag))}>×</Button
				></Badge
			>{/each}{#if !selected.length}<P class="text-xs">No topics selected yet.</P>{/if}</Div
	><Form
		class="flex gap-2"
		onsubmit={(event) => {
			event.preventDefault();
			add(query);
		}}
		><Input
			aria-label="Search or create a tag"
			bind:value={query}
			class="min-w-0 grow"
			placeholder="Search or create a topic..."
		/><Button type="submit" variants={['outline']} disabled={!query.trim() || selected.length >= 6}
			>Add</Button
		></Form
	><Div role="group" aria-label="Suggested topics" class="flex flex-wrap gap-2"
		>{#each matches as tag}<Button
				type="button"
				variants={['outline']}
				class="text-xs"
				disabled={selected.length >= 6}
				onclick={() => add(tag)}>+ {tag}</Button
			>{/each}{#if custom}<Button
				type="button"
				variants={['soft']}
				class="text-xs"
				disabled={selected.length >= 6}
				onclick={() => add(query)}>Create “{query.trim()}”</Button
			>{/if}</Div
	>{#if message}<P role="status" class="text-xs">{message}</P>{/if}<P class="text-xs"
		>Selected: {selected.join(', ') || 'none'}</P
	></Card
>
