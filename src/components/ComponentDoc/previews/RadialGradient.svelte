<script lang="ts">
	import { Circle, Defs, RadialGradient, Stop, Svg } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('radialGradient', 'example', 'text-rose-500 opacity-75');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="RadialGradient example">
		<Defs>
			<RadialGradient id={documentationId + '-demo-radial'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.1} />
			</RadialGradient>
		</Defs>
		<Circle
			cx={50}
			cy={50}
			r={45}
			fill={'url(#' + documentationId + '-demo-radial)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme. This element configures its parent; it does not render a standalone box."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="RadialGradient example">
		<Defs>
			<RadialGradient
				variants={['example']}
				theme={documentationTheme}
				id={documentationId + '-demo-radial'}
			>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.1} />
			</RadialGradient>
		</Defs>
		<Circle
			cx={50}
			cy={50}
			r={45}
			fill={'url(#' + documentationId + '-demo-radial)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="RadialGradient example">
		<Defs>
			<RadialGradient class="text-rose-500 opacity-75" id={documentationId + '-demo-radial'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.1} />
			</RadialGradient>
		</Defs>
		<Circle
			cx={50}
			cy={50}
			r={45}
			fill={'url(#' + documentationId + '-demo-radial)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change cx, cy, r while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="RadialGradient example">
		<Defs>
			<RadialGradient r="70%" cy="30%" cx="30%" id={documentationId + '-demo-radial'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.1} />
			</RadialGradient>
		</Defs>
		<Circle
			cx={50}
			cy={50}
			r={45}
			fill={'url(#' + documentationId + '-demo-radial)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="RadialGradient example">
		<Defs>
			<RadialGradient id={documentationId + '-demo-radial'}>
				<Stop offset="0%" stop-color="#0d9488" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.1} />
			</RadialGradient>
		</Defs>
		<Circle
			cx={50}
			cy={50}
			r={45}
			fill={'url(#' + documentationId + '-demo-radial)'}
			class="text-primary-500"
		/>
	</Svg>
{/if}
