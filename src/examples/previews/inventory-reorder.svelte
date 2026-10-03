<script lang="ts">
	import {
		Alert,
		Badge,
		Button,
		Card,
		Checkbox,
		Div,
		H2,
		Input,
		P,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$lib/components';
	let products = $state([
		{ sku: 'NB-01', name: 'Grid notebook', stock: 8, target: 30, selected: true },
		{ sku: 'TB-02', name: 'Canvas tote', stock: 24, target: 20, selected: false },
		{ sku: 'PN-03', name: 'Fineliner set', stock: 3, target: 24, selected: true }
	]);
	let summary = $state('');
	const lowStock = $derived(products.filter((product) => product.stock < product.target).length);
	const units = $derived(
		products
			.filter((product) => product.selected)
			.reduce((sum, product) => sum + Math.max(0, product.target - product.stock), 0)
	);
</script>

<Card class="w-full space-y-5">
	<Div class="flex flex-wrap items-center justify-between gap-3">
		<H2 class="text-2xl font-semibold">Reorder planner</H2>
		<Badge variants={['warning']}>{lowStock} items below target</Badge>
	</Div>
	<Div class="overflow-x-auto">
		<Table>
			<Thead>
				<Tr>
					<Th>Select</Th>
					<Th>Product</Th>
					<Th>In stock</Th>
					<Th>Target</Th>
					<Th>To order</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each products as product}
					<Tr>
						<Td>
							<Checkbox
								aria-label={'Select ' + product.name}
								bind:checked={product.selected}
								onchange={() => (summary = '')}
							/>
						</Td>
						<Td>
							<P class="font-medium">{product.name}</P>
							<P class="text-xs">{product.sku}</P>
						</Td>
						<Td>
							<Badge variants={product.stock < product.target ? ['warning'] : ['success']}>
								{product.stock}
							</Badge>
						</Td>
						<Td>
							<Input
								aria-label={'Target for ' + product.name}
								type="number"
								min={0}
								max={500}
								value={product.target}
								class="w-20"
								oninput={(event) => {
									product.target = Math.max(
										0,
										Math.min(500, Number(event.currentTarget.value) || 0)
									);
									summary = '';
								}}
							/>
						</Td>
						<Td>{Math.max(0, product.target - product.stock)}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Div>
	<P class="text-sm">
		Select products and adjust their target levels. Suggested quantities cover the gap from current
		stock.
	</P>
	<Button
		type="button"
		disabled={!units}
		onclick={() =>
			(summary = `Draft purchase order: ${units} units across ${products.filter((product) => product.selected && product.target > product.stock).length} products.`)}
	>
		Create purchase-order draft
	</Button>
	{#if summary}
		<Alert role="status" variants={['success']}>{summary}</Alert>
	{/if}
</Card>
