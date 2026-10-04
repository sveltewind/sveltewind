<script lang="ts">
	import { Spinner } from '$lib/components';
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant(
		'spinner',
		'example',
		'rounded-xl border border-primary-500/40 p-4'
	);
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Spinner role="img" aria-label="Loading" />
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Spinner variants={['example']} theme={documentationTheme} role="img" aria-label="Loading" />
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Spinner class="rounded-xl border border-primary-500/40 p-4" role="img" aria-label="Loading" />
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Spinner visibility
	</VisibilityButton>

	<Spinner bind:isVisible={exampleVisible} role="img" aria-label="Loading" />
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Spinner role="img" aria-label="Custom spinner example" />
{/if}
