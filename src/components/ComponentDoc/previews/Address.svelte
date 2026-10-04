<script lang="ts">
	import { A, Address } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Address>
		Contact:
		<A href="mailto:hello@example.com">hello@example.com</A>
	</Address>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Address variants={['compact']}>
		Contact:
		<A href="mailto:hello@example.com">hello@example.com</A>
	</Address>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Address class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
		Contact:
		<A href="mailto:hello@example.com">hello@example.com</A>
	</Address>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Address visibility
	</VisibilityButton>

	<Address bind:isVisible={exampleVisible}>
		Contact:
		<A href="mailto:hello@example.com">hello@example.com</A>
	</Address>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Address>Your own content<A href="mailto:hello@example.com">hello@example.com</A></Address>
{/if}
