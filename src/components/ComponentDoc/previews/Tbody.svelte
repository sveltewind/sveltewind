<script lang="ts">
	import { Table, Thead, Tr, Th, Tbody, Td } from '$lib/components';

	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
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
				<Th>Name</Th>

				<Th>Role</Th>
			</Tr>
		</Thead>

		<Tbody variants={[documentationVariant]}>
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
				<Th>Name</Th>

				<Th>Role</Th>
			</Tr>
		</Thead>

		<Tbody class="bg-primary-500/10">
			<Tr>
				<Td>Ada</Td>

				<Td>Developer</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Tbody visibility
	</VisibilityButton>

	<Table>
		<Thead>
			<Tr>
				<Th>Name</Th>

				<Th>Role</Th>
			</Tr>
		</Thead>

		<Tbody bind:isVisible={exampleVisible}>
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
				<Th>Name</Th>

				<Th>Role</Th>
			</Tr>
		</Thead>

		<Tbody>
			<Tr>
				<Td>Your project content</Td>

				<Td>Developer</Td>
			</Tr>
		</Tbody>
	</Table>
{/if}
