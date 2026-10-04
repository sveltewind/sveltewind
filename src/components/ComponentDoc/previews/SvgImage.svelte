<script lang="ts">
	import { Svg, SvgImage } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="SvgImage example">
		<SvgImage
			href="/images/logo-light.svg"
			x={5}
			y={35}
			width={90}
			height={30}
			preserveAspectRatio="xMidYMid meet"
		/>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the grayscale variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="SvgImage example">
		<SvgImage
			variants={['grayscale']}
			href="/images/logo-light.svg"
			x={5}
			y={35}
			width={90}
			height={30}
			preserveAspectRatio="xMidYMid meet"
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="SvgImage example">
		<SvgImage
			class="text-rose-500 opacity-75"
			href="/images/logo-light.svg"
			x={5}
			y={35}
			width={90}
			height={30}
			preserveAspectRatio="xMidYMid meet"
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change opacity, preserveAspectRatio while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="SvgImage example">
		<SvgImage
			opacity={0.5}
			href="/images/logo-light.svg"
			x={5}
			y={35}
			width={90}
			height={30}
			preserveAspectRatio="xMidYMid slice"
		/>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different aria-label values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="SvgImage example">
		<SvgImage
			aria-label="A geometric illustration"
			href="/images/logo-light.svg"
			x={5}
			y={35}
			width={90}
			height={30}
			preserveAspectRatio="xMidYMid meet"
		/>
	</Svg>
{/if}
