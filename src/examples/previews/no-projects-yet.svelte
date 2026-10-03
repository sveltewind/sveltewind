<script lang="ts">
	import { Card, H2, Div, P, Ul, Li, Span, Badge, Form, Input, Button } from '$lib/components';
	let items = $state<string[]>([]);
	let name = $state('');
	function create(event: SubmitEvent) {
		event.preventDefault();
		if (name.trim()) items = [...items, name.trim()];
		name = '';
	}
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">No projects yet</H2>
	{#if !items.length}
		<Div class="space-y-3 py-8 text-center">
			<Div
				class="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 text-3xl text-primary-500"
				aria-hidden="true"
			>
				+
			</Div>
			<P class="text-lg font-semibold">Your first project starts here</P>
			<P class="text-sm">Projects bring your tasks and files together.</P>
		</Div>
	{:else}
		<Ul class="space-y-3" variants={['plain']}>
			{#each items as item}
				<Li
					class="flex items-center justify-between gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
				>
					<Span>{item}</Span>
					<Badge variants={['success']}>Created</Badge>
				</Li>
			{/each}
		</Ul>
	{/if}

	<Form class="flex flex-col gap-3 sm:flex-row" onsubmit={create}>
		<Input
			aria-label="project name"
			placeholder="Name your project"
			bind:value={name}
			required
			class="min-w-0 grow"
		/>
		<Button type="submit">Create project</Button>
	</Form>
</Card>
