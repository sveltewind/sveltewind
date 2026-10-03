<script lang="ts">
	import {
		Alert,
		Button,
		Card,
		Checkbox,
		Div,
		Field,
		Form,
		H2,
		Input,
		Label,
		P,
		Progress
	} from '$lib/components';
	const uid = $props.id();
	let password = $state('');
	let confirmation = $state('');
	let show = $state(false);
	let saved = $state(false);
	const rules = $derived([
		{ label: 'At least 12 characters', met: password.length >= 12 },
		{ label: 'An uppercase letter', met: /[A-Z]/.test(password) },
		{ label: 'A number', met: /\d/.test(password) },
		{ label: 'A symbol', met: /[^a-zA-Z0-9\s]/.test(password) }
	]);
	const met = $derived(rules.filter((rule) => rule.met).length);
	const matches = $derived(password.length > 0 && password === confirmation);
</script>

<Card class="mx-auto max-w-lg space-y-5">
	<H2 class="text-2xl font-semibold">Set a password</H2>
	<Form
		class="space-y-4"
		onsubmit={(event) => {
			event.preventDefault();
			saved = true;
		}}
	>
		<Field>
			<Label for={uid + '-password'}>New password</Label>
			<Input
				id={uid + '-password'}
				type={show ? 'text' : 'password'}
				autocomplete="new-password"
				bind:value={password}
				oninput={() => (saved = false)}
				required
				minlength={12}
			/>
		</Field>
		<Checkbox bind:checked={show}>Show password</Checkbox>
		<Progress aria-label="Password requirements met" value={met} max={4} class="w-full" />
		<Div class="grid gap-2 sm:grid-cols-2">
			{#each rules as rule}
				<P
					class={`text-xs ${rule.met ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500'}`}
				>
					<span aria-hidden="true">{rule.met ? '✓' : '○'}</span>
					{rule.label}
				</P>
			{/each}
		</Div>
		<Field>
			<Label for={uid + '-confirmation'}>Confirm password</Label>
			<Input
				id={uid + '-confirmation'}
				type={show ? 'text' : 'password'}
				autocomplete="new-password"
				bind:value={confirmation}
				oninput={() => (saved = false)}
				required
			/>
		</Field>
		{#if confirmation}
			<P aria-live="polite" class="text-xs">
				{matches ? 'Passwords match.' : 'The confirmation does not match yet.'}
			</P>
		{/if}
		<Button type="submit" disabled={met !== 4 || !matches}>Set demo password</Button>
	</Form>
	{#if saved}
		<Alert variants={['success']} role="status">
			All requirements passed. No password was sent or stored.
		</Alert>
	{/if}
</Card>
