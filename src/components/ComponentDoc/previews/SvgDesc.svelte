<script lang="ts">
	import { Rect, Svg, SvgDesc } from '$lib/components';
	const documentationId = $props.id();

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
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-label="SvgDesc example"
		aria-describedby={documentationId + '-demo-description'}
	>
		<SvgDesc id={documentationId + '-demo-description'}>
			A violet rectangle with rounded corners.
		</SvgDesc>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-label="SvgDesc example"
		aria-describedby={documentationId + '-demo-description'}
	>
		<SvgDesc variants={[documentationVariant]} id={documentationId + '-demo-description'}>
			A violet rectangle with rounded corners.
		</SvgDesc>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-label="SvgDesc example"
		aria-describedby={documentationId + '-demo-description'}
	>
		<SvgDesc class="text-rose-500 opacity-75" id={documentationId + '-demo-description'}>
			A violet rectangle with rounded corners.
		</SvgDesc>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change lang while retaining the default component styling."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-label="SvgDesc example"
		aria-describedby={documentationId + '-demo-description'}
	>
		<SvgDesc lang="en" id={documentationId + '-demo-description'}>
			A violet rectangle with rounded corners.
		</SvgDesc>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg
		viewBox="0 0 100 100"
		class="size-40"
		role="img"
		aria-label="SvgDesc example"
		aria-describedby={documentationId + '-demo-description'}
	>
		<SvgDesc id={documentationId + '-demo-description'}>
			A circle and a square illustrate the relationship between two shapes.
		</SvgDesc>
		<Rect x={10} y={20} width={80} height={60} rx={8} variants={['fill', 'primary']} />
	</Svg>
{/if}
