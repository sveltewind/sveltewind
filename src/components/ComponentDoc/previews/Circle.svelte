<script lang="ts">
	import { Circle } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
		<Circle cx="32" cy="32" r="24" fill="currentColor" />
	</svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the outline variant from the component theme."} -->
	<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
		<Circle variants={['outline']} cx="32" cy="32" r="24" fill="currentColor" />
	</svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
		<Circle class="text-rose-500 opacity-75" cx="32" cy="32" r="24" fill="currentColor" />
	</svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change r, cx, cy while retaining the default component styling."} -->
	<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
		<Circle cx={50} cy={50} r={30} fill="currentColor" />
	</svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different fill values."} -->
	<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
		<Circle cx="32" cy="32" r="24" fill="#0d9488" />
	</svg>
{/if}
