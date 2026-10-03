<script lang="ts">
	import {
		Card,
		H2,
		Alert,
		Dl,
		Dt,
		Dd,
		Button,
		Stepper,
		Field,
		Label,
		Input,
		Div
	} from '$lib/components';
	const steps = [
		{ label: 'Name your workspace' },
		{ label: 'Invite teammates' },
		{ label: 'Choose preferences' }
	];
	let current = $state(0);
	let answers = $state(steps.map(() => ''));
	let finished = $state(false);
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Workspace setup</H2>
	{#if finished}
		<Alert variants={['success']} role="status">Setup complete. Your choices are ready.</Alert>
		<Dl>
			{#each steps as step, i}
				<Dt class="mt-3 text-sm font-semibold">{step.label}</Dt>
				<Dd>{answers[i] || 'Not provided'}</Dd>
			{/each}
		</Dl>
		<Button
			type="button"
			variants={['outline']}
			onclick={() => {
				finished = false;
				current = 0;
			}}
		>
			Review choices
		</Button>
	{:else}
		<Stepper {steps} bind:current allowNavigation />
		<Field>
			<Label for="step-answer">{steps[current].label}</Label>
			<Input id="step-answer" bind:value={answers[current]} placeholder={steps[current].label} />
		</Field>
		<Div class="flex flex-wrap justify-between gap-3">
			<Button
				type="button"
				variants={['outline']}
				disabled={current === 0}
				onclick={() => current--}
			>
				Back
			</Button>
			<Button
				type="button"
				disabled={!answers[current].trim()}
				onclick={() => (current === steps.length - 1 ? (finished = true) : current++)}
			>
				{current === steps.length - 1 ? 'Finish setup' : 'Continue'}
			</Button>
		</Div>
	{/if}
</Card>
