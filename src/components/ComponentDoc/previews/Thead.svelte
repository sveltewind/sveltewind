<script lang="ts">
	import { Table, Thead, Tr, Th, Tbody, Td } from '$lib/components';
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('thead', 'example', 'bg-primary-500/10');
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
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
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Table>
		<Thead variants={['example']} theme={documentationTheme}>
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
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply bg-primary-500/10 locally."} -->
	<Table>
		<Thead class="bg-primary-500/10">
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
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Thead visibility
	</VisibilityButton>

	<Table>
		<Thead bind:isVisible={exampleVisible}>
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
