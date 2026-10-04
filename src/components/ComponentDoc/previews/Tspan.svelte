<script lang="ts">
	import { Svg, Text, Tspan } from '$lib/components';
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Tspan example">
		<Text x={10} y={45} font-size={14}>
			<Tspan>First line</Tspan>
			<Tspan x={10} dy={20}>Second line</Tspan>
		</Text>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Tspan example">
		<Text x={10} y={45} font-size={14}>
			<Tspan variants={[documentationVariant]}>First line</Tspan>
			<Tspan variants={[documentationVariant]} x={10} dy={20}>Second line</Tspan>
		</Text>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Tspan example">
		<Text x={10} y={45} font-size={14}>
			<Tspan class="text-rose-500 opacity-75">First line</Tspan>
			<Tspan class="text-rose-500 opacity-75" x={10} dy={20}>Second line</Tspan>
		</Text>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change dx, dy while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Tspan example">
		<Text x={10} y={45} font-size={14}>
			<Tspan dy={4} dx={8}>First line</Tspan>
			<Tspan dx={8} x={10} dy={4}>Second line</Tspan>
		</Text>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Tspan example">
		<Text x={10} y={45} font-size={14}>
			<Tspan>Your project content</Tspan>
			<Tspan x={10} dy={20}>Second line</Tspan>
		</Text>
	</Svg>
{/if}
