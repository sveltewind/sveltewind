<script lang="ts">
	import { Nav, A } from '$lib/components';
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
	<Nav aria-label="Example navigation">
		<A href="/components">Components</A>

		<A href="/getting-started/usage">Usage</A>
	</Nav>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Nav variants={[documentationVariant]} aria-label="Example navigation">
		<A href="/components">Components</A>

		<A href="/getting-started/usage">Usage</A>
	</Nav>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Nav class="rounded-xl border border-primary-500/40 p-4" aria-label="Example navigation">
		<A href="/components">Components</A>

		<A href="/getting-started/usage">Usage</A>
	</Nav>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Nav visibility
	</VisibilityButton>

	<Nav bind:isVisible={exampleVisible} aria-label="Example navigation">
		<A href="/components">Components</A>

		<A href="/getting-started/usage">Usage</A>
	</Nav>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Nav aria-label="Example navigation">
		<A href="/components">Your project content</A>

		<A href="/getting-started/usage">Usage</A>
	</Nav>
{/if}
