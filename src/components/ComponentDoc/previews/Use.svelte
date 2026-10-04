<script lang="ts">
	import { Defs, Path, Svg, Use } from '$lib/components';
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Use example">
		<Defs>
			<Path id={documentationId + '-demo-shape'} d="M10 10 H40 V40 H10 Z" />
		</Defs>
		<Use href={'#' + documentationId + '-demo-shape'} />
		<Use href={'#' + documentationId + '-demo-shape'} x={45} y={45} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Use example">
		<Defs>
			<Path id={documentationId + '-demo-shape'} d="M10 10 H40 V40 H10 Z" />
		</Defs>
		<Use variants={[documentationVariant]} href={'#' + documentationId + '-demo-shape'} />
		<Use
			variants={[documentationVariant]}
			href={'#' + documentationId + '-demo-shape'}
			x={45}
			y={45}
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Use example">
		<Defs>
			<Path id={documentationId + '-demo-shape'} d="M10 10 H40 V40 H10 Z" />
		</Defs>
		<Use class="text-rose-500 opacity-75" href={'#' + documentationId + '-demo-shape'} />
		<Use
			class="text-rose-500 opacity-75"
			href={'#' + documentationId + '-demo-shape'}
			x={45}
			y={45}
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change x, y, width, height while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Use example">
		<Defs>
			<Path id={documentationId + '-demo-shape'} d="M10 10 H40 V40 H10 Z" />
		</Defs>
		<Use height={70} width={70} y={10} x={10} href={'#' + documentationId + '-demo-shape'} />
		<Use height={70} width={70} href={'#' + documentationId + '-demo-shape'} x={10} y={10} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Use example">
		<Defs>
			<Path id={documentationId + '-demo-shape'} d="M10 10 H40 V40 H10 Z" />
		</Defs>
		<Use aria-label="Custom use example" href={'#' + documentationId + '-demo-shape'} />
		<Use
			aria-label="Custom use example"
			href={'#' + documentationId + '-demo-shape'}
			x={45}
			y={45}
		/>
	</Svg>
{/if}
