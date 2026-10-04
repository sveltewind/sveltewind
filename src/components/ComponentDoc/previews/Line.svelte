<script lang="ts">
	import { Line, Svg } from '$lib/components';
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Line example">
		<Line x1={10} y1={20} x2={90} y2={80} stroke-width={4} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Line example">
		<Line variants={[documentationVariant]} x1={10} y1={20} x2={90} y2={80} stroke-width={4} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Line example">
		<Line class="text-rose-500 opacity-75" x1={10} y1={20} x2={90} y2={80} stroke-width={4} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change x1, y1, x2, y2 while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Line example">
		<Line x1={10} y1={90} x2={90} y2={10} stroke-width={4} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different stroke values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Line example">
		<Line stroke="#0d9488" x1={10} y1={20} x2={90} y2={80} stroke-width={4} />
	</Svg>
{/if}
