<script lang="ts">
	import { Defs, LinearGradient, Rect, Stop, Svg } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('linearGradient', 'example', 'text-rose-500 opacity-75');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="LinearGradient example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-linear'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-linear)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme. This element configures its parent; it does not render a standalone box."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="LinearGradient example">
		<Defs>
			<LinearGradient
				variants={['example']}
				theme={documentationTheme}
				id={documentationId + '-demo-linear'}
			>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-linear)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="LinearGradient example">
		<Defs>
			<LinearGradient class="text-rose-500 opacity-75" id={documentationId + '-demo-linear'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-linear)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change x1, y1, x2, y2 while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="LinearGradient example">
		<Defs>
			<LinearGradient y2="100%" x2="0%" y1="0%" x1="0%" id={documentationId + '-demo-linear'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-linear)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="LinearGradient example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-linear'}>
				<Stop offset="0%" stop-color="#0d9488" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-linear)'}
			class="text-primary-500"
		/>
	</Svg>
{/if}
