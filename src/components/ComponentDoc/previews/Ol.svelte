<script lang="ts">
	import { Ol, Li } from '$lib/components';
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
	<Ol>
		<Li>Install the package</Li>

		<Li>Import a component</Li>
	</Ol>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Ol variants={[documentationVariant]}>
		<Li>Install the package</Li>

		<Li>Import a component</Li>
	</Ol>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Ol class="rounded-xl border border-primary-500/40 p-4">
		<Li>Install the package</Li>

		<Li>Import a component</Li>
	</Ol>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change start, reversed while retaining the default component styling."} -->
	<Ol reversed={true} start={5}>
		<Li>Install the package</Li>

		<Li>Import a component</Li>
	</Ol>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Ol>
		<Li>Your project content</Li>

		<Li>Import a component</Li>
	</Ol>
{/if}
