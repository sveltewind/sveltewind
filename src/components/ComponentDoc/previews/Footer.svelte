<script lang="ts">
	import { Footer, Small } from '$lib/components';
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
	<Footer>
		<Small>Made with Sveltewind.</Small>
	</Footer>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Footer variants={[documentationVariant]}>
		<Small>Made with Sveltewind.</Small>
	</Footer>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Footer class="rounded-xl border border-primary-500/40 p-4">
		<Small>Made with Sveltewind.</Small>
	</Footer>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Footer visibility
	</VisibilityButton>

	<Footer bind:isVisible={exampleVisible}>
		<Small>Made with Sveltewind.</Small>
	</Footer>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Footer>
		<Small>Your project content</Small>
	</Footer>
{/if}
