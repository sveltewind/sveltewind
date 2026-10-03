<script lang="ts">
	import { Card, H2, P, Div, Switch, Button, Alert } from '$lib/components';
	const options = ['Product updates', 'Weekly digest', 'Security alerts'];
	let enabled = $state(options.map((_, i) => i === 0));
	let saved = $state(false);
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Notification preferences</H2>
	<P class="text-sm">Choose which options are enabled for your workspace.</P>

	{#each options as option, i}
		<Div class="border-b border-gray-200 py-3 dark:border-gray-700">
			<Switch
				class="w-full justify-between"
				bind:checked={enabled[i]}
				onchange={() => (saved = false)}
			>
				{option}
			</Switch>
		</Div>
	{/each}

	<Button type="button" onclick={() => (saved = true)}>Save preferences</Button>

	{#if saved}
		<Alert variants={['success']} role="status">
			Saved {enabled.filter(Boolean).length} enabled options in this demo.
		</Alert>
	{/if}
</Card>
