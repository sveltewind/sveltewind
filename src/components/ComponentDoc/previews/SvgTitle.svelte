<script lang="ts">
	import { Rect, Svg, SvgTitle } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('svgTitle', 'example', 'text-rose-500 opacity-75');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-labelledby={documentationId + '-demo-title'}
	>
		<SvgTitle id={documentationId + '-demo-title'}>A violet rectangle</SvgTitle>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme. This element configures its parent; it does not render a standalone box."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-labelledby={documentationId + '-demo-title'}
	>
		<SvgTitle
			variants={['example']}
			theme={documentationTheme}
			id={documentationId + '-demo-title'}
		>
			A violet rectangle
		</SvgTitle>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-labelledby={documentationId + '-demo-title'}
	>
		<SvgTitle class="text-rose-500 opacity-75" id={documentationId + '-demo-title'}>
			A violet rectangle
		</SvgTitle>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change lang while retaining the default component styling."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-labelledby={documentationId + '-demo-title'}
	>
		<SvgTitle lang="en" id={documentationId + '-demo-title'}>A violet rectangle</SvgTitle>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-labelledby={documentationId + '-demo-title'}
	>
		<SvgTitle id={documentationId + '-demo-title'}>A teal landscape</SvgTitle>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{/if}
