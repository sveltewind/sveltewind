<script lang="ts">
	import { Card, H2, Badge, Ul, Li, Checkbox, Span, Form, Input, Button } from '$lib/components';
	const initialItems = ['Review roadmap', 'Pair on accessibility', 'Update documentation'];
	let items = $state([...initialItems]);
	let completed = $state<Record<string, boolean>>(
		Object.fromEntries(initialItems.map((item) => [item, false]))
	);
	let draft = $state('');
	function add(event: SubmitEvent) {
		event.preventDefault();
		const item = draft.trim();
		if (item && !items.includes(item)) {
			completed[item] = false;
			items = [...items, item];
		}
		draft = '';
	}
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Weekly priorities</H2>
	<Badge>{items.filter((item) => completed[item]).length} of {items.length} completed</Badge>

	<Ul class="space-y-3" variants={['plain']}>
		{#each items as item}
			<Li>
				<Checkbox bind:checked={completed[item]}>
					<Span class={completed[item] ? 'line-through opacity-60' : ''}>{item}</Span>
				</Checkbox>
			</Li>
		{/each}
	</Ul>

	<Form class="flex flex-col gap-3 sm:flex-row" onsubmit={add}>
		<Input
			aria-label="New item"
			class="min-w-0 grow"
			placeholder="Add an item..."
			bind:value={draft}
			required
		/>
		<Button type="submit">Add priority</Button>
	</Form>
</Card>
