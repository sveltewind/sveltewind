<script lang="ts">
	import { Accordion } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Accordion summary="What is Sveltewind?">A themed component library for Svelte 5.</Accordion>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Accordion variants={['compact']} summary="What is Sveltewind?">
		A themed component library for Svelte 5.
	</Accordion>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Accordion class="rounded-xl border border-primary-500/40 p-4" summary="What is Sveltewind?">
		A themed component library for Svelte 5.
	</Accordion>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change open, summary while retaining the default component styling."} -->
	<Accordion open={true} summary="Expanded by default">
		A themed component library for Svelte 5.
	</Accordion>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Accordion summary="What is Sveltewind?">Your project content</Accordion>
{/if}
