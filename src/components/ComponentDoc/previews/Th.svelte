<script lang="ts">
	import { Table, Thead, Tr, Th, Tbody, Td } from '$lib/components';

	let {
		documentationExample = 'default',
		documentationVariant = ''
	}: {
		documentationVariant?: string;
		documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content';
	} = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Table>
		<Thead>
			<Tr>
				<Th>Name</Th>

				<Th>Role</Th>
			</Tr>
		</Thead>

		<Tbody>
			<Tr>
				<Td>Ada</Td>

				<Td>Developer</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Table>
		<Thead>
			<Tr>
				<Th variants={[documentationVariant]}>Name</Th>

				<Th variants={[documentationVariant]}>Role</Th>
			</Tr>
		</Thead>

		<Tbody>
			<Tr>
				<Td>Ada</Td>

				<Td>Developer</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply bg-primary-500/10 locally."} -->
	<Table>
		<Thead>
			<Tr>
				<Th class="bg-primary-500/10">Name</Th>

				<Th class="bg-primary-500/10">Role</Th>
			</Tr>
		</Thead>

		<Tbody>
			<Tr>
				<Td>Ada</Td>

				<Td>Developer</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change scope while retaining the default component styling."} -->
	<Table>
		<Thead>
			<Tr>
				<Th scope="col">Name</Th>

				<Th scope="col">Role</Th>
			</Tr>
		</Thead>

		<Tbody>
			<Tr>
				<Td>Ada</Td>

				<Td>Developer</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Table>
		<Thead>
			<Tr>
				<Th>Your project content</Th>

				<Th>Role</Th>
			</Tr>
		</Thead>

		<Tbody>
			<Tr>
				<Td>Ada</Td>

				<Td>Developer</Td>
			</Tr>
		</Tbody>
	</Table>
{/if}
