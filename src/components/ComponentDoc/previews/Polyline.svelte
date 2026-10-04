<script lang="ts">
	import { Polyline, Svg } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polyline example">
		<Polyline points="10,70 30,30 50,60 70,20 90,50" stroke-width={4} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the fill variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polyline example">
		<Polyline variants={['fill']} points="10,70 30,30 50,60 70,20 90,50" stroke-width={4} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polyline example">
		<Polyline
			class="text-rose-500 opacity-75"
			points="10,70 30,30 50,60 70,20 90,50"
			stroke-width={4}
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change points while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polyline example">
		<Polyline points="10,80 35,20 65,80 90,20" stroke-width={4} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different stroke values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Polyline example">
		<Polyline stroke="#0d9488" points="10,70 30,30 50,60 70,20 90,50" stroke-width={4} />
	</Svg>
{/if}
