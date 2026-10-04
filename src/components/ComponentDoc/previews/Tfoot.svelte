<script lang="ts">
	import { Table, Tbody, Td, Tfoot, Tr } from '$lib/components';
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
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
		<Tfoot>
			<Tr>
				<Td>Total</Td>
				<Td>$10</Td>
			</Tr>
		</Tfoot>
	</Table>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Table>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
		<Tfoot variants={[documentationVariant]}>
			<Tr>
				<Td>Total</Td>
				<Td>$10</Td>
			</Tr>
		</Tfoot>
	</Table>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply bg-primary-500/10 locally."} -->
	<Table>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
		<Tfoot class="bg-primary-500/10">
			<Tr>
				<Td>Total</Td>
				<Td>$10</Td>
			</Tr>
		</Tfoot>
	</Table>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Tfoot visibility
	</VisibilityButton>

	<Table>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
		<Tfoot bind:isVisible={exampleVisible}>
			<Tr>
				<Td>Total</Td>
				<Td>$10</Td>
			</Tr>
		</Tfoot>
	</Table>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Table>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
		<Tfoot>
			<Tr>
				<Td>Your project content</Td>
				<Td>$10</Td>
			</Tr>
		</Tfoot>
	</Table>
{/if}
