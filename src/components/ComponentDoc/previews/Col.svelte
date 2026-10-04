<script lang="ts">
	import { Col, Colgroup, Table, Tbody, Td, Tr } from '$lib/components';
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
		<Colgroup>
			<Col />
			<Col />
		</Colgroup>
		<Tbody>
			<Tr>
				<Td>Plan</Td>
				<Td>Starter</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Table>
		<Colgroup>
			<Col variants={[documentationVariant]} />
			<Col variants={[documentationVariant]} />
		</Colgroup>
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
		<Colgroup>
			<Col class="bg-primary-500/10" />
			<Col class="bg-primary-500/10" />
		</Colgroup>
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
		<Colgroup>
			<Col span={2} />
			<Col span={2} />
		</Colgroup>
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
		<Colgroup>
			<Col />
			<Col />
		</Colgroup>
		<Tbody>
			<Tr>
				<Td>Your project content</Td>
				<Td>Starter</Td>
			</Tr>
		</Tbody>
	</Table>
{/if}
