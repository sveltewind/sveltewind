<script lang="ts">
	import { Polygon, Svg } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polygon example">
		<Polygon points="50,10 90,85 10,85" />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the fill variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polygon example">
		<Polygon variants={['fill']} points="50,10 90,85 10,85" />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polygon example">
		<Polygon class="text-rose-500 opacity-75" points="50,10 90,85 10,85" />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change points while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polygon example">
		<Polygon points="50,5 95,95 5,95" />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different fill values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polygon example">
		<Polygon fill="#0d9488" points="50,10 90,85 10,85" />
	</Svg>
{/if}
