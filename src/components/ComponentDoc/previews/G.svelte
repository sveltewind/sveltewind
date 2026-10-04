<script lang="ts">
	import { Circle, G, Rect, Svg } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="G example">
		<G transform="translate(10 10)">
			<Rect width={30} height={30} />
			<Circle cx={60} cy={60} r={20} />
		</G>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the fill variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="G example">
		<G variants={['fill']} transform="translate(10 10)">
			<Rect width={30} height={30} />
			<Circle cx={60} cy={60} r={20} />
		</G>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="G example">
		<G class="text-rose-500 opacity-75" transform="translate(10 10)">
			<Rect width={30} height={30} />
			<Circle cx={60} cy={60} r={20} />
		</G>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change transform while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="G example">
		<G transform="translate(10 10) scale(0.8)">
			<Rect width={30} height={30} />
			<Circle cx={60} cy={60} r={20} />
		</G>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="G example">
		<G transform="translate(10 10)">
			<Rect width={30} height={30} />
			<Circle cx={60} cy={60} r={25} />
		</G>
	</Svg>
{/if}
