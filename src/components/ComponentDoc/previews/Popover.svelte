<script lang="ts">
	import { Popover, P } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Popover aria-label="Example popover">
		<P>Hello from the popover.</P>
	</Popover>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Popover variants={['compact']} aria-label="Example popover">
		<P>Hello from the popover.</P>
	</Popover>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Popover class="rounded-xl border border-primary-500/40 p-4" aria-label="Example popover">
		<P>Hello from the popover.</P>
	</Popover>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change placement, gap while retaining the default component styling."} -->
	<Popover gap={12} placement="top" aria-label="Example popover">
		<P>Hello from the popover.</P>
	</Popover>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Popover aria-label="Example popover">
		<P>Your project content</P>
	</Popover>
{/if}
