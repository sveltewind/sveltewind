<script lang="ts">
	import { Div, ForeignObject, Svg } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="ForeignObject example">
		<ForeignObject x={5} y={5} width={90} height={90}>
			<Div class="p-2 text-xs">HTML content inside SVG.</Div>
		</ForeignObject>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the clip variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="ForeignObject example">
		<ForeignObject variants={['clip']} x={5} y={5} width={90} height={90}>
			<Div class="p-2 text-xs">HTML content inside SVG.</Div>
		</ForeignObject>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="ForeignObject example">
		<ForeignObject class="text-rose-500 opacity-75" x={5} y={5} width={90} height={90}>
			<Div class="p-2 text-xs">HTML content inside SVG.</Div>
		</ForeignObject>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change x, y, width, height while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="ForeignObject example">
		<ForeignObject x={10} y={10} width={80} height={80}>
			<Div class="p-2 text-xs">HTML content inside SVG.</Div>
		</ForeignObject>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="ForeignObject example">
		<ForeignObject x={5} y={5} width={90} height={90}>
			<Div class="p-2 text-xs">Your project content</Div>
		</ForeignObject>
	</Svg>
{/if}
