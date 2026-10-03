<script lang="ts">
	import { Card, H2, Div, Label, Badge, Progress, Range, Ol, Li, Button, P } from '$lib/components';
	let value = $state(25);
	const stages = ['Read', 'Practice', 'Reflect'];
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Course completion</H2>
	<Div class="flex items-center justify-between">
		<Label for="example-progress">Lessons completed</Label>
		<Badge>{value}%</Badge>
	</Div>
	<Progress id="example-progress" class="w-full" {value} max={100} />
	<Range aria-label="Adjust completion" class="w-full" bind:value min={0} max={100} step={5} />

	<Ol class="flex flex-wrap gap-4" variants={['plain']}>
		{#each stages as stage, i}
			<Li>
				<Badge variants={value >= (i + 1) * 30 ? ['success'] : []}>{stage}</Badge>
			</Li>
		{/each}
	</Ol>
	<Button type="button" disabled={value >= 100} onclick={() => (value = Math.min(100, value + 10))}>
		Advance progress
	</Button>
	<P aria-live="polite">
		{value >= 100
			? 'Goal completed. Great work!'
			: 'Adjust the slider or advance to update the goal.'}
	</P>
</Card>
