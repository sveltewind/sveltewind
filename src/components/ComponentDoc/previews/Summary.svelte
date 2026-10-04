<script lang="ts">
	import { Details, Summary, P } from '$lib/components';

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
	<Details>
		<Summary>Account settings</Summary>

		<P>Your preferences go here.</P>
	</Details>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Details>
		<Summary variants={[documentationVariant]}>Account settings</Summary>

		<P>Your preferences go here.</P>
	</Details>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Details>
		<Summary class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			Account settings
		</Summary>

		<P>Your preferences go here.</P>
	</Details>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Summary visibility
	</VisibilityButton>

	<Details>
		<Summary bind:isVisible={exampleVisible}>Account settings</Summary>

		<P>Your preferences go here.</P>
	</Details>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Details>
		<Summary>Your own content</Summary>

		<P>Your preferences go here.</P>
	</Details>
{/if}
