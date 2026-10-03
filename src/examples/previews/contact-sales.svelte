<script lang="ts">
	import {
		Card,
		H2,
		P,
		Form,
		Field,
		Label,
		Textarea,
		Input,
		Div,
		Button,
		Alert,
		Dl,
		Dt,
		Dd
	} from '$lib/components';
	const uid = $props.id();
	const fields = [
		{ label: 'Name', type: 'text' },
		{ label: 'Work email', type: 'email' },
		{ label: 'Company', type: 'text' },
		{ label: 'Message', type: 'textarea' }
	];
	let submitted = $state(false);
	let summary = $state<Record<string, string>>({});

	function submit(event: SubmitEvent) {
		event.preventDefault();
		if (!(event.currentTarget instanceof HTMLFormElement)) return;
		summary = Object.fromEntries(
			[...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])
		);
		submitted = true;
	}
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Contact sales</H2>
	<P class="text-sm">
		Complete the fields below. This example keeps your submission in this browser session.
	</P>

	<Form
		class="space-y-4"
		onsubmit={submit}
		onreset={() => {
			submitted = false;
			summary = {};
		}}
	>
		{#each fields as field, i}
			<Field>
				<Label for={uid + i}>{field.label}</Label>

				{#if field.type === 'textarea'}
					<Textarea id={uid + i} name={field.label} required rows={3} placeholder={field.label} />
				{:else}
					<Input
						id={uid + i}
						name={field.label}
						type={field.type}
						required
						min={field.type === 'number' ? 1 : undefined}
						placeholder={field.label}
					/>
				{/if}
			</Field>
		{/each}

		<Div class="flex flex-wrap gap-3">
			<Button type="submit">Send inquiry</Button>
			<Button type="reset" variants={['outline']}>Reset</Button>
		</Div>
	</Form>

	{#if submitted}
		<Alert variants={['success']} role="status">
			Demo submission received. No data was sent to a server.
		</Alert>

		<Dl class="space-y-2">
			{#each Object.entries(summary) as [key, value]}
				<Div>
					<Dt class="text-xs font-semibold">{key}</Dt>
					<Dd class="text-sm break-words">
						{key.toLowerCase().includes('password') ? '••••••••' : value}
					</Dd>
				</Div>
			{/each}
		</Dl>
	{/if}
</Card>
