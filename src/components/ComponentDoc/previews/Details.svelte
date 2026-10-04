<script lang="ts">
	import { Details, Summary, P } from '$lib/components';

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
		<Summary>Learn more</Summary>

		<P>Disclosure content.</P>
	</Details>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Details variants={[documentationVariant]}>
		<Summary>Learn more</Summary>

		<P>Disclosure content.</P>
	</Details>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Details class="rounded-xl border border-primary-500/40 p-4">
		<Summary>Learn more</Summary>

		<P>Disclosure content.</P>
	</Details>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change open while retaining the default component styling."} -->
	<Details open={true}>
		<Summary>Learn more</Summary>

		<P>Disclosure content.</P>
	</Details>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Details>
		<Summary>Your project content</Summary>

		<P>Disclosure content.</P>
	</Details>
{/if}
