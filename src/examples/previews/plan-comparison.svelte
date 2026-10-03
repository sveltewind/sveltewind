<script lang="ts">
	import {
		Alert,
		Badge,
		Button,
		Card,
		Div,
		H2,
		P,
		Switch,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$lib/components';
	const plans = ['Starter', 'Team', 'Business'];
	const features = [
		{ name: 'Projects', values: ['3', '25', 'Unlimited'] },
		{ name: 'Team members', values: ['1', '10', 'Unlimited'] },
		{ name: 'Version history', values: ['7 days', '90 days', 'Unlimited'] },
		{ name: 'Export files', values: ['Included', 'Included', 'Included'] },
		{ name: 'Priority support', values: ['—', '—', 'Included'] },
		{ name: 'Single sign-on', values: ['—', '—', 'Included'] },
		{ name: 'Mobile access', values: ['Included', 'Included', 'Included'] }
	];
	let differences = $state(false);
	let selected = $state('');
	const visible = $derived(
		features.filter((feature) => !differences || new Set(feature.values).size > 1)
	);
</script>

<Card class="w-full space-y-5">
	<Div class="flex flex-wrap items-center justify-between gap-3">
		<H2 class="text-2xl font-semibold">Find your fit</H2>
		<Switch bind:checked={differences}>Show differences only</Switch>
	</Div>
	<Div class="overflow-x-auto">
		<Table>
			<Thead>
				<Tr>
					<Th>Features</Th>
					{#each plans as plan}
						<Th>{plan}</Th>
					{/each}
				</Tr>
			</Thead>
			<Tbody>
				{#each visible as feature}
					<Tr>
						<Th scope="row">{feature.name}</Th>
						{#each feature.values as value}
							<Td>
								{#if value === 'Included'}
									<Badge variants={['success']}>Included</Badge>
								{:else}{value}{/if}
							</Td>
						{/each}
					</Tr>
				{/each}
				<Tr>
					<Td></Td>
					{#each plans as plan}
						<Td>
							<Button
								type="button"
								variants={['outline']}
								class="text-xs"
								onclick={() => (selected = plan)}
							>
								Choose {plan}
							</Button>
						</Td>
					{/each}
				</Tr>
			</Tbody>
		</Table>
	</Div>
	<P class="text-xs">
		{visible.length} features shown. Shared features disappear when the differences filter is enabled.
	</P>
	{#if selected}
		<Alert role="status" variants={['info']}>{selected} selected for this demo.</Alert>
	{/if}
</Card>
