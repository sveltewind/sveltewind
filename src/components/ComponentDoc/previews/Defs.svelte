<script lang="ts">
	import { Defs, LinearGradient, Rect, Stop, Svg } from '$lib/components';
	const documentationId = $props.id();

	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Defs example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-fill'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-fill)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Defs example">
		<Defs variants={[documentationVariant]}>
			<LinearGradient id={documentationId + '-demo-fill'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-fill)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Defs example">
		<Defs class="text-rose-500 opacity-75">
			<LinearGradient id={documentationId + '-demo-fill'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-fill)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Defs visibility
	</VisibilityButton>

	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Defs example">
		<Defs bind:isVisible={exampleVisible}>
			<LinearGradient id={documentationId + '-demo-fill'}>
				<Stop offset="0%" stop-color="currentColor" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-fill)'}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Defs example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-fill'}>
				<Stop offset="0%" stop-color="#0d9488" />
				<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />
			</LinearGradient>
		</Defs>
		<Rect
			width={100}
			height={100}
			fill={'url(#' + documentationId + '-demo-fill)'}
			class="text-primary-500"
		/>
	</Svg>
{/if}
