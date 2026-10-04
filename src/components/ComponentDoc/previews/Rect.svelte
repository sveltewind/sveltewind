<script lang="ts">
	import { Rect, Svg } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Rect example">
		<Rect x={10} y={20} width={80} height={60} rx={8} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the outline variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Rect example">
		<Rect variants={['outline']} x={10} y={20} width={80} height={60} rx={8} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Rect example">
		<Rect class="text-rose-500 opacity-75" x={10} y={20} width={80} height={60} rx={8} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change rx, ry while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Rect example">
		<Rect ry={20} x={10} y={20} width={80} height={60} rx={20} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different fill values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Rect example">
		<Rect fill="#0d9488" x={10} y={20} width={80} height={60} rx={8} />
	</Svg>
{/if}
