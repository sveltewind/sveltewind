<script lang="ts">
	import { Defs, Line, Marker, Path, Svg } from '$lib/components';
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Marker example">
		<Defs>
			<Marker
				id={documentationId + '-demo-arrow'}
				viewBox="0 0 10 10"
				refX={9}
				refY={5}
				markerWidth={6}
				markerHeight={6}
				orient="auto-start-reverse"
			>
				<Path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" />
			</Marker>
		</Defs>
		<Line
			x1={10}
			y1={50}
			x2={80}
			y2={50}
			stroke-width={3}
			marker-end={'url(#' + documentationId + '-demo-arrow)'}
			variants={['outline', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Marker example">
		<Defs>
			<Marker
				variants={[documentationVariant]}
				id={documentationId + '-demo-arrow'}
				viewBox="0 0 10 10"
				refX={9}
				refY={5}
				markerWidth={6}
				markerHeight={6}
				orient="auto-start-reverse"
			>
				<Path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" />
			</Marker>
		</Defs>
		<Line
			x1={10}
			y1={50}
			x2={80}
			y2={50}
			stroke-width={3}
			marker-end={'url(#' + documentationId + '-demo-arrow)'}
			variants={['outline', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Marker example">
		<Defs>
			<Marker
				class="text-rose-500 opacity-75"
				id={documentationId + '-demo-arrow'}
				viewBox="0 0 10 10"
				refX={9}
				refY={5}
				markerWidth={6}
				markerHeight={6}
				orient="auto-start-reverse"
			>
				<Path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" />
			</Marker>
		</Defs>
		<Line
			x1={10}
			y1={50}
			x2={80}
			y2={50}
			stroke-width={3}
			marker-end={'url(#' + documentationId + '-demo-arrow)'}
			variants={['outline', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change orient, markerWidth, markerHeight while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Marker example">
		<Defs>
			<Marker
				id={documentationId + '-demo-arrow'}
				viewBox="0 0 10 10"
				refX={9}
				refY={5}
				markerWidth={8}
				markerHeight={8}
				orient="auto-start-reverse"
			>
				<Path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" />
			</Marker>
		</Defs>
		<Line
			x1={10}
			y1={50}
			x2={80}
			y2={50}
			stroke-width={3}
			marker-end={'url(#' + documentationId + '-demo-arrow)'}
			variants={['outline', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Marker example">
		<Defs>
			<Marker
				id={documentationId + '-demo-arrow'}
				viewBox="0 0 10 10"
				refX={9}
				refY={5}
				markerWidth={6}
				markerHeight={6}
				orient="auto-start-reverse"
			>
				<Path d="M0 0 L10 5 L0 10 Z" fill="#0d9488" />
			</Marker>
		</Defs>
		<Line
			x1={10}
			y1={50}
			x2={80}
			y2={50}
			stroke-width={3}
			marker-end={'url(#' + documentationId + '-demo-arrow)'}
			variants={['outline', 'primary']}
		/>
	</Svg>
{/if}
