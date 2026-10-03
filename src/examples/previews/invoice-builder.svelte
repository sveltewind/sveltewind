<script lang="ts">
	import {
		Badge,
		Button,
		Card,
		Div,
		Field,
		H2,
		Input,
		Label,
		P,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$lib/components';
	const uid = $props.id();
	let client = $state('Lighthouse Studio');
	let tax = $state(8);
	let sequence = $state(2);
	let lines = $state([
		{ id: 1, description: 'Design workshop', quantity: 2, price: 150 },
		{ id: 2, description: 'Prototype review', quantity: 1, price: 240 }
	]);
	const subtotal = $derived(lines.reduce((sum, line) => sum + line.quantity * line.price, 0));
	const taxAmount = $derived((subtotal * tax) / 100);
	const money = (value: number) => '$' + value.toFixed(2);
</script>

<Card class="w-full space-y-6">
	<Div class="flex flex-wrap items-start justify-between gap-3">
		<Div>
			<Badge>Draft · INV-1048</Badge>
			<H2 class="mt-2 text-2xl font-semibold">Invoice builder</H2>
		</Div>
		<Field>
			<Label for={uid}>Bill to</Label>
			<Input id={uid} bind:value={client} />
		</Field>
	</Div>
	<Div class="overflow-x-auto">
		<Table>
			<Thead>
				<Tr>
					<Th>Description</Th>
					<Th>Qty</Th>
					<Th>Unit price</Th>
					<Th>Amount</Th>
					<Th>
						<span class="sr-only">Remove</span>
					</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each lines as line (line.id)}
					<Tr>
						<Td>
							<Input
								aria-label={'Description for line ' + line.id}
								bind:value={line.description}
								class="min-w-40"
							/>
						</Td>
						<Td>
							<Input
								aria-label={'Quantity for line ' + line.id}
								type="number"
								min={0}
								value={line.quantity}
								class="w-20"
								oninput={(event) =>
									(line.quantity = Math.max(0, Number(event.currentTarget.value) || 0))}
							/>
						</Td>
						<Td>
							<Input
								aria-label={'Price for line ' + line.id}
								type="number"
								min={0}
								step="0.01"
								value={line.price}
								class="w-28"
								oninput={(event) =>
									(line.price = Math.max(0, Number(event.currentTarget.value) || 0))}
							/>
						</Td>
						<Td class="whitespace-nowrap">{money(line.quantity * line.price)}</Td>
						<Td>
							<Button
								type="button"
								variants={['ghost']}
								aria-label={'Remove line ' + line.id}
								onclick={() => (lines = lines.filter((item) => item.id !== line.id))}
							>
								×
							</Button>
						</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Div>
	<Button
		type="button"
		variants={['outline']}
		onclick={() => lines.push({ id: ++sequence, description: '', quantity: 1, price: 0 })}
	>
		Add line item
	</Button>
	<Div class="ml-auto max-w-xs space-y-3">
		<Div class="flex justify-between">
			<P>Subtotal</P>
			<P>{money(subtotal)}</P>
		</Div>
		<Div class="flex items-center justify-between gap-3">
			<Label for={uid + '-tax'}>Tax (%)</Label>
			<Input
				id={uid + '-tax'}
				type="number"
				min={0}
				max={100}
				value={tax}
				class="w-20"
				oninput={(event) =>
					(tax = Math.min(100, Math.max(0, Number(event.currentTarget.value) || 0)))}
			/>
		</Div>
		<Div class="flex justify-between">
			<P>Tax amount</P>
			<P>{money(taxAmount)}</P>
		</Div>
		<Div
			class="flex justify-between border-t border-gray-200 pt-3 text-xl font-semibold dark:border-gray-700"
		>
			<P>Total</P>
			<P>{money(subtotal + taxAmount)}</P>
		</Div>
	</Div>
	<P aria-live="polite" class="text-xs">
		{lines.length} line items for {client || 'your client'}. Totals update as you edit.
	</P>
</Card>
