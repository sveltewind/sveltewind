<script lang="ts">
	import { A } from '$lib/components';
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
	<A href="/getting-started/usage">Explore Sveltewind</A>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<A variants={[documentationVariant]} href="/getting-started/usage">Explore Sveltewind</A>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<A class="rounded-xl border border-primary-500/40 p-4" href="/getting-started/usage">
		Explore Sveltewind
	</A>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change target, rel while retaining the default component styling."} -->
	<A rel="noopener noreferrer" target="_blank" href="/getting-started/usage">Explore Sveltewind</A>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<A href="/getting-started/usage">Your project content</A>
{/if}
