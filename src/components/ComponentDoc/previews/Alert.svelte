<script lang="ts">
	import { Alert } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Alert>Your changes have been saved.</Alert>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the success variant from the component theme."} -->
	<Alert variants={['success']}>Your changes have been saved.</Alert>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Alert class="rounded-xl border border-primary-500/40 p-4">Your changes have been saved.</Alert>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Alert visibility
	</VisibilityButton>

	<Alert bind:isVisible={exampleVisible}>Your changes have been saved.</Alert>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Alert>Your project content</Alert>
{/if}
