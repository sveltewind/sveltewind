<script lang="ts">
	import { Badge, Button, Card, Div, H2, Label, P, Progress, Radio } from '$lib/components';
	const uid = $props.id();
	const options = [
		'Hands-on component workshop',
		'Accessibility review session',
		'Show-and-tell with the community'
	];
	let votes = $state([18, 12, 10]);
	let choice = $state('');
	let voted = $state(false);
	const total = $derived(votes.reduce((sum, count) => sum + count, 0));
	function vote() {
		if (!choice || voted) return;
		votes[Number(choice)]++;
		voted = true;
	}
	function change() {
		votes[Number(choice)]--;
		voted = false;
	}
</script>

<Card class="mx-auto max-w-xl space-y-5">
	<Badge>Community decision</Badge>
	<H2 class="text-2xl font-semibold">What should we host next?</H2>
	<P class="text-sm">Choose the session you’d most like to attend.</P>
	{#if !voted}
		<Div class="space-y-3">
			{#each options as option, i}
				<Label
					class="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 dark:border-gray-700"
				>
					<Radio name={uid} bind:group={choice} value={String(i)} />
					{option}
				</Label>
			{/each}
		</Div>
		<Button type="button" disabled={!choice} onclick={vote}>Cast vote</Button>
	{:else}
		{#each options as option, i}
			<Div class="space-y-2">
				<Div class="flex items-start justify-between gap-3">
					<P class="text-sm font-medium">{option}{choice === String(i) ? ' · Your vote' : ''}</P>
					<Badge>{Math.round((votes[i] / total) * 100)}%</Badge>
				</Div>
				<Progress aria-label={option} value={votes[i]} max={total} class="w-full" />
			</Div>
		{/each}
		<P role="status" class="text-xs">
			{total} votes, including yours. These are sample poll results.
		</P>
		<Button type="button" variants={['outline']} onclick={change}>Change my vote</Button>
	{/if}
</Card>
