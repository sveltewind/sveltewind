<script lang="ts">
	import { Blockquote, P } from '$lib/components';
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
	<Blockquote>
		<P>Build something useful.</P>
	</Blockquote>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Blockquote variants={[documentationVariant]}>
		<P>Build something useful.</P>
	</Blockquote>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Blockquote class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
		<P>Build something useful.</P>
	</Blockquote>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Blockquote visibility
	</VisibilityButton>

	<Blockquote bind:isVisible={exampleVisible}>
		<P>Build something useful.</P>
	</Blockquote>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Blockquote>
		<P>Your own content</P>
	</Blockquote>
{/if}
