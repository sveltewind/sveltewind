<script lang="ts">
	import { Svg, Text } from '$lib/components';
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Text example">
		<Text x={50} y={55} text-anchor="middle" font-size={18}>Hello SVG</Text>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Text example">
		<Text variants={[documentationVariant]} x={50} y={55} text-anchor="middle" font-size={18}>
			Hello SVG
		</Text>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Text example">
		<Text class="text-rose-500 opacity-75" x={50} y={55} text-anchor="middle" font-size={18}>
			Hello SVG
		</Text>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change x, y, font-size while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Text example">
		<Text x={10} y={60} text-anchor="middle" font-size={20}>Hello SVG</Text>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Text example">
		<Text x={50} y={55} text-anchor="middle" font-size={18}>Your project content</Text>
	</Svg>
{/if}
