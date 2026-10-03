<script lang="ts">
	import { Alert, Badge, Button, Div, Form, H2, Input, Label, P } from '$lib/components';
	const uid = $props.id();
	let open = $state(false);
	let email = $state('');
	let joined = $state(false);
</script>

<Div
	class="relative overflow-hidden rounded-2xl border border-primary-500/20 bg-primary-500/5 px-5 py-12 text-center sm:px-10 sm:py-20"
>
	<Badge variants={['soft']}>Introducing Gather 2.0</Badge>

	<H2 class="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
		Good ideas deserve
		<br />
		<span class="text-primary-500">a place to grow.</span>
	</H2>

	<P class="mx-auto mt-5 max-w-lg text-base sm:text-lg">
		Bring your notes, decisions, and next steps into one shared space. Make room for your team's
		best work.
	</P>

	<Div class="mt-8 flex flex-wrap justify-center gap-3">
		<Button type="button" onclick={() => (open = true)}>Get early access</Button>
		<Button
			type="button"
			variants={['outline']}
			onclick={() =>
				document
					.getElementById(uid + '-benefits')
					?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })}
		>
			Explore the benefits
		</Button>
	</Div>

	{#if open}
		<Form
			class="mx-auto mt-6 max-w-md space-y-3 text-left"
			onsubmit={(event) => {
				event.preventDefault();
				joined = true;
			}}
		>
			<Label for={uid}>Work email</Label>
			<Div class="flex flex-wrap gap-2">
				<Input
					id={uid}
					type="email"
					required
					bind:value={email}
					placeholder="you@company.com"
					class="min-w-0 grow"
				/>
				<Button type="submit">Join the list</Button>
			</Div>
			{#if joined}
				<Alert role="status" variants={['success']}>
					You're on the demo list. No email was sent.
				</Alert>
			{/if}
		</Form>
	{/if}

	<Div
		id={uid + '-benefits'}
		class="mx-auto mt-12 grid max-w-xl gap-4 border-t border-primary-500/20 pt-6 text-sm sm:grid-cols-3"
	>
		<P>One shared workspace</P>
		<P>Clear decisions</P>
		<P>Less busywork</P>
	</Div>
</Div>
