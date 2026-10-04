<script lang="ts">
	import { Caption, Table, Tbody, Td, Tr } from '$lib/components';
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
		<Caption>Plan pricing</Caption>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Table>
		<Caption variants={[documentationVariant]}>Plan pricing</Caption>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Table>
		<Caption class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			Plan pricing
		</Caption>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Caption visibility
	</VisibilityButton>

	<Table>
		<Caption bind:isVisible={exampleVisible}>Plan pricing</Caption>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
	</Table>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Table>
		<Caption>Your own content</Caption>
		<Tbody>
			<Tr>
				<Td>Starter</Td>
				<Td>$10</Td>
			</Tr>
		</Tbody>
	</Table>
{/if}
