<script lang="ts">
	import {
		Card,
		H2,
		Input,
		Div,
		Table,
		Caption,
		Thead,
		Tr,
		Th,
		Button,
		Tbody,
		Td,
		Checkbox,
		Badge,
		P
	} from '$lib/components';
	const rows = [
		{ name: 'Alex Morgan', status: 'Designer' },
		{ name: 'Sam Rivera', status: 'Developer' },
		{ name: 'Casey Lee', status: 'Editor' },
		{ name: 'Taylor Gray', status: 'Manager' }
	];
	let query = $state('');
	let ascending = $state(true);
	let selected = $state<string[]>([]);
	const visible = $derived(
		rows
			.filter((row) => (row.name + ' ' + row.status).toLowerCase().includes(query.toLowerCase()))
			.toSorted((a, b) => (ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
	);
	function toggle(name: string) {
		selected = selected.includes(name)
			? selected.filter((item) => item !== name)
			: [...selected, name];
	}
	function download() {
		const data = rows.filter((row) => selected.includes(row.name));
		const quote = (value: string) => '"' + value.replaceAll('"', '""') + '"';
		const csv = [
			'Name,Status',
			...data.map((row) => quote(row.name) + ',' + quote(row.status))
		].join('\n');
		const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
		const link = document.createElement('a');
		link.href = url;
		link.download = 'team-directory.csv';
		link.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Team directory</H2>
	<Input
		aria-label="Search rows"
		placeholder="Search by name or status..."
		bind:value={query}
		class="w-full"
	/>

	<Div class="overflow-x-auto">
		<Table>
			<Caption class="sr-only">Team directory</Caption>
			<Thead>
				<Tr>
					<Th>Select</Th>
					<Th>
						<Button
							type="button"
							variants={['ghost']}
							class="p-0"
							onclick={() => (ascending = !ascending)}
						>
							Name {ascending ? '↑' : '↓'}
						</Button>
					</Th>
					<Th>Status</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each visible as row}
					<Tr>
						<Td>
							<Checkbox
								aria-label={'Select ' + row.name}
								checked={selected.includes(row.name)}
								onchange={() => toggle(row.name)}
							/>
						</Td>
						<Td>{row.name}</Td>
						<Td>
							<Badge>{row.status}</Badge>
						</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Div>
	{#if !visible.length}
		<P role="status">No matching rows. Try another search.</P>
	{/if}

	<Div class="flex flex-wrap items-center justify-between gap-3">
		<P aria-live="polite">{selected.length} selected</P>
		<Button type="button" disabled={!selected.length} onclick={download}>Export selection</Button>
	</Div>
</Card>
