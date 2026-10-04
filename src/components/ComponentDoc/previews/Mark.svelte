<script lang="ts">
	import { Mark, P } from '$lib/components';
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
		Find your
		<Mark>highlighted text</Mark>
		.
	</P>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<P>
		Find your
		<Mark variants={[documentationVariant]}>highlighted text</Mark>
		.
	</P>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<P>
		Find your
		<Mark class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			highlighted text
		</Mark>
		.
	</P>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Mark visibility
	</VisibilityButton>

	<P>
		Find your
		<Mark bind:isVisible={exampleVisible}>highlighted text</Mark>
		.
	</P>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<P>
		Find your
		<Mark>Your own content</Mark>
		.
	</P>
{/if}
