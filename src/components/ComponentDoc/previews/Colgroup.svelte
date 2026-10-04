<script lang="ts">
	import { Colgroup, Table, Tbody, Td, Tr } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Table>
		<Colgroup span={2} />
		<Tbody>
			<Tr>
				<Td>Plan</Td>
				<Td>Starter</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the narrow variant from the component theme."} -->
	<Table>
		<Colgroup variants={['narrow']} span={2} />
		<Tbody>
			<Tr>
				<Td>Plan</Td>
				<Td>Starter</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply bg-primary-500/10 locally."} -->
	<Table>
		<Colgroup class="bg-primary-500/10" span={2} />
		<Tbody>
			<Tr>
				<Td>Plan</Td>
				<Td>Starter</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change span while retaining the default component styling."} -->
	<Table>
		<Colgroup span={2} />
		<Tbody>
			<Tr>
				<Td>Plan</Td>
				<Td>Starter</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Table>
		<Colgroup span={2} />
		<Tbody>
			<Tr>
				<Td>Your project content</Td>
				<Td>Starter</Td>
			</Tr>
		</Tbody>
	</Table>
{/if}
