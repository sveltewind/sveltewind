<script lang="ts">
	import {
		Div,
		H2,
		Switch,
		Card,
		Badge,
		H3,
		P,
		Span,
		Ul,
		Li,
		Button,
		Alert
	} from '$lib/components';
	const plans = ['Personal', 'Team', 'Business'];
	let annual = $state(false);
	let selected = $state('');
</script>

<Div class="w-full space-y-6">
	<H2 class="text-2xl font-semibold">Software subscription</H2>
	<Switch bind:checked={annual}>Annual billing · save 20%</Switch>

	<Div class="grid gap-4 md:grid-cols-3">
		{#each plans as plan, i}
			<Card class="flex flex-col gap-5">
				<Badge>{i === 1 ? 'Most popular' : 'Flexible plan'}</Badge>
				<H3 class="text-xl">{plan}</H3>
				<P class="text-4xl font-semibold">
					&#36;{((12 + i * 24) * (annual ? 0.8 : 1)).toFixed(2)}
					<Span class="text-sm font-normal">/ month</Span>
				</P>
				<P class="text-xs">{annual ? 'Billed annually' : 'Billed monthly'}</P>

				<Ul class="grow space-y-2">
					<Li>{i === 0 ? '1 workspace' : i === 1 ? '5 workspaces' : 'Unlimited workspaces'}</Li>
					<Li>{(i + 1) * 10} team members</Li>
					<Li>{i === 2 ? 'Priority support' : 'Community support'}</Li>
				</Ul>

				<Button
					type="button"
					variants={i === 1 ? [] : ['outline']}
					onclick={() => (selected = plan)}
				>
					Choose plan
				</Button>
			</Card>
		{/each}
	</Div>

	{#if selected}
		<Alert variants={['success']} role="status">
			{selected} selected with {annual ? 'annual' : 'monthly'} billing. This is a demo selection.
		</Alert>
	{/if}
</Div>
