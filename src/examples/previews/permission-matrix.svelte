<script lang="ts">
	import {
		Alert,
		Badge,
		Button,
		Card,
		Checkbox,
		Div,
		H2,
		P,
		Select,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$lib/components';
	const roles = ['Viewer', 'Editor', 'Admin'];
	const permissions = ['Read projects', 'Edit content', 'Invite members', 'Manage billing'];
	let access = $state([
		[true, true, true],
		[false, true, true],
		[false, false, true],
		[false, false, true]
	]);
	let preset = $state('standard');
	let saved = $state('');
	function apply() {
		access = permissions.map((_, row) =>
			roles.map((_, col) =>
				preset === 'read-only' ? row === 0 : col === 2 || row === 0 || (col === 1 && row === 1)
			)
		);
		saved = '';
	}
</script>

<Card class="w-full space-y-5">
	<Div class="flex flex-wrap items-center justify-between gap-3">
		<Div>
			<Badge>Workspace access</Badge>
			<H2 class="mt-2 text-2xl font-semibold">Role permissions</H2>
		</Div>
		<Select
			aria-label="Permission preset"
			bind:value={preset}
			onchange={apply}
			options={[
				{ label: 'Standard roles', value: 'standard' },
				{ label: 'Read-only workspace', value: 'read-only' }
			]}
		/>
	</Div>
	<Div class="overflow-x-auto">
		<Table>
			<Thead>
				<Tr>
					<Th>Permission</Th>
					{#each roles as role}
						<Th>{role}</Th>
					{/each}
				</Tr>
			</Thead>
			<Tbody>
				{#each permissions as permission, row}
					<Tr>
						<Td>{permission}</Td>
						{#each roles as role, col}
							<Td>
								<Checkbox
									aria-label={`${role}: ${permission}`}
									bind:checked={access[row][col]}
									onchange={() => (saved = '')}
								/>
							</Td>
						{/each}
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Div>
	<P class="text-xs">
		Each role can have a different set of permissions. Presets replace the current grid.
	</P>
	<Button
		type="button"
		onclick={() =>
			(saved = roles
				.map((role, col) => `${role}: ${access.filter((row) => row[col]).length} permissions`)
				.join(' · '))}
	>
		Save permissions
	</Button>
	{#if saved}
		<Alert role="status" variants={['success']}>{saved}</Alert>
	{/if}
</Card>
