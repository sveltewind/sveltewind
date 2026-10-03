<script lang="ts">
	import { Avatar, Badge, Button, Card, Div, Form, H2, H3, Input, P } from '$lib/components';
	type Team = { id: string; name: string; members: string[]; children: Team[] };
	let teams = $state<Team[]>([
		{
			id: 'product',
			name: 'Product',
			members: ['Alex Morgan'],
			children: [
				{ id: 'design', name: 'Design', members: ['Riley Chen', 'Quinn Davis'], children: [] },
				{ id: 'engineering', name: 'Engineering', members: ['Sam Rivera'], children: [] }
			]
		},
		{ id: 'operations', name: 'Operations', members: ['Taylor Gray'], children: [] }
	]);
	let expanded = $state<Record<string, boolean>>({ product: true });
	let selected = $state('design');
	let draft = $state('');
	function find(id: string, nodes: Team[]): Team | undefined {
		for (const node of nodes) {
			if (node.id === id) return node;
			const child = find(id, node.children);
			if (child) return child;
		}
	}
	const team = $derived(find(selected, teams)!);
	function add(event: SubmitEvent) {
		event.preventDefault();
		if (draft.trim() && !team.members.includes(draft.trim())) team.members.push(draft.trim());
		draft = '';
	}
</script>

{#snippet branch(nodes: Team[], depth = 0)}
	{#each nodes as node}
		<Div style={`margin-left: ${depth ? 16 : 0}px`} class="space-y-2">
			<Div class="flex items-center gap-1">
				{#if node.children.length}
					<Button
						type="button"
						class="size-8 p-0"
						variants={['ghost']}
						aria-label={'Expand ' + node.name}
						aria-expanded={Boolean(expanded[node.id])}
						onclick={() => (expanded[node.id] = !expanded[node.id])}
					>
						{expanded[node.id] ? '−' : '+'}
					</Button>
				{:else}
					<span class="w-8"></span>
				{/if}
				<Button
					type="button"
					class="flex grow items-center justify-between gap-2 text-left"
					variants={selected === node.id ? ['soft'] : ['ghost']}
					aria-pressed={selected === node.id}
					onclick={() => (selected = node.id)}
				>
					{node.name}
					<Badge>{node.members.length}</Badge>
				</Button>
			</Div>
			{#if expanded[node.id]}{@render branch(node.children, depth + 1)}{/if}
		</Div>
	{/each}
{/snippet}
<Div class="grid w-full gap-4 md:grid-cols-2">
	<Card class="space-y-5">
		<H2 class="text-2xl font-semibold">Organization</H2>
		{@render branch(teams)}
	</Card>
	<Card class="space-y-4">
		<Badge>Selected team</Badge>
		<H3 class="text-xl font-semibold">{team.name}</H3>
		{#each team.members as member}
			<Div class="flex items-center gap-3">
				<Avatar name={member} />
				<P class="text-sm">{member}</P>
			</Div>
		{/each}
		<Form class="space-y-3" onsubmit={add}>
			<Input
				class="w-full"
				aria-label="New member name"
				bind:value={draft}
				required
				placeholder="Add a teammate..."
			/>
			<Button type="submit">Add member</Button>
		</Form>
	</Card>
</Div>
