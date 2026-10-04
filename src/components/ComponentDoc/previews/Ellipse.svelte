<script lang="ts">
	import { Ellipse, Svg } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Ellipse example">
		<Ellipse cx={50} cy={50} rx={40} ry={25} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the outline variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Ellipse example">
		<Ellipse variants={['outline']} cx={50} cy={50} rx={40} ry={25} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Ellipse example">
		<Ellipse class="text-rose-500 opacity-75" cx={50} cy={50} rx={40} ry={25} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change rx, ry while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Ellipse example">
		<Ellipse cx={50} cy={50} rx={35} ry={15} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different fill values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Ellipse example">
		<Ellipse fill="#0d9488" cx={50} cy={50} rx={40} ry={25} />
	</Svg>
{/if}
