<script lang="ts">
	import { Kbd, P } from '$lib/components';
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
	<P>
		Press
		<Kbd>Ctrl</Kbd>
		+
		<Kbd>K</Kbd>
		to search.
	</P>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<P>
		Press
		<Kbd variants={[documentationVariant]}>Ctrl</Kbd>
		+
		<Kbd variants={[documentationVariant]}>K</Kbd>
		to search.
	</P>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<P>
		Press
		<Kbd class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">Ctrl</Kbd>
		+
		<Kbd class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">K</Kbd>
		to search.
	</P>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Kbd visibility
	</VisibilityButton>

	<P>
		Press
		<Kbd bind:isVisible={exampleVisible}>Ctrl</Kbd>
		+
		<Kbd bind:isVisible={exampleVisible}>K</Kbd>
		to search.
	</P>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<P>
		Press
		<Kbd>Your own content</Kbd>
		+
		<Kbd>K</Kbd>
		to search.
	</P>
{/if}
