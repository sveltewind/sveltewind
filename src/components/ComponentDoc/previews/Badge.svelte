<script lang="ts">
	import { Badge } from '$lib/components';
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
	<Badge>New</Badge>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Badge variants={[documentationVariant]}>New</Badge>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-full font-semibold shadow-sm locally."} -->
	<Badge class="rounded-full font-semibold shadow-sm">New</Badge>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change title while retaining the default component styling."} -->
	<Badge title="A workflow status">New</Badge>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Badge>Your project content</Badge>
{/if}
