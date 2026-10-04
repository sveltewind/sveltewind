<script lang="ts">
	import { Section } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Section>Section content</Section>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the stack variant from the component theme."} -->
	<Section variants={['stack']}>Section content</Section>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Section class="rounded-xl border border-primary-500/40 p-4">Section content</Section>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Section visibility
	</VisibilityButton>

	<Section bind:isVisible={exampleVisible}>Section content</Section>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Section>Your project content</Section>
{/if}
