<script lang="ts">
	import { Badge, Button, Card, Div, Form, H2, H3, Input, P } from '$lib/components';
	let month = $state(9);
	let year = $state(2026);
	let selected = $state('2026-10-05');
	let draft = $state('');
	let events = $state<Record<string, string[]>>({
		'2026-10-05': ['Design review', 'Team lunch'],
		'2026-10-12': ['Release planning'],
		'2026-10-21': ['Community workshop']
	});
	const title = $derived(
		new Date(Date.UTC(year, month, 1)).toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC'
		})
	);
	const offset = $derived((new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7);
	const totalDays = $derived(new Date(Date.UTC(year, month + 1, 0)).getUTCDate());
	const key = (day: number) =>
		`${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
	function navigate(direction: number) {
		const date = new Date(Date.UTC(year, month + direction, 1));
		month = date.getUTCMonth();
		year = date.getUTCFullYear();
		selected = key(1);
	}
	function add(event: SubmitEvent) {
		event.preventDefault();
		if (draft.trim()) events[selected] = [...(events[selected] ?? []), draft.trim()];
		draft = '';
	}
</script>

<Div class="grid w-full gap-5 lg:grid-cols-[1.5fr_1fr]">
	<Card class="space-y-4">
		<Div class="flex items-center justify-between gap-2">
			<Button
				type="button"
				variants={['ghost']}
				aria-label="Previous month"
				onclick={() => navigate(-1)}
			>
				←
			</Button>
			<H2 class="text-xl font-semibold">{title}</H2>
			<Button
				type="button"
				variants={['ghost']}
				aria-label="Next month"
				onclick={() => navigate(1)}
			>
				→
			</Button>
		</Div>
		<Div class="grid grid-cols-7 gap-1">
			{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as weekday}
				<P class="py-2 text-center text-xs">{weekday}</P>
			{/each}
			{#each Array(offset) as _}
				<Div />
			{/each}
			{#each Array(totalDays) as _, i}
				<Button
					type="button"
					class="flex min-h-14 flex-col items-center justify-center gap-1 px-0 text-sm"
					variants={selected === key(i + 1) ? [] : ['ghost']}
					aria-label={`${title} ${i + 1}${events[key(i + 1)]?.length ? ', has events' : ''}`}
					aria-pressed={selected === key(i + 1)}
					onclick={() => (selected = key(i + 1))}
				>
					{i + 1}
					{#if events[key(i + 1)]?.length}
						<span class="size-1 rounded-full bg-current"></span>
					{/if}
				</Button>
			{/each}
		</Div>
	</Card>
	<Card class="space-y-4">
		<Badge>{selected}</Badge>
		<H3 class="text-lg font-semibold">Day’s agenda</H3>
		{#each events[selected] ?? [] as event}
			<P class="border-l-2 border-primary-500 py-2 pl-3 text-sm">{event}</P>
		{/each}
		{#if !events[selected]?.length}
			<P class="text-sm">Nothing scheduled yet.</P>
		{/if}
		<Form class="space-y-3" onsubmit={add}>
			<Input
				aria-label="Event title"
				bind:value={draft}
				placeholder="Name an event..."
				required
				class="w-full"
			/>
			<Button type="submit">Add event</Button>
		</Form>
	</Card>
</Div>
