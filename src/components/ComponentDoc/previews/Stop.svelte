<script lang="ts">
	import { Defs, LinearGradient, Rect, Stop, Svg } from '$lib/components';
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Stop example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-stop'}>
				<Stop offset="0%" />
				<Stop offset="100%" />
			</LinearGradient>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-stop)'} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Stop example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-stop'}>
				<Stop variants={[documentationVariant]} offset="0%" />
				<Stop variants={[documentationVariant]} offset="100%" />
			</LinearGradient>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-stop)'} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Stop example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-stop'}>
				<Stop class="text-rose-500 opacity-75" offset="0%" />
				<Stop class="text-rose-500 opacity-75" offset="100%" />
			</LinearGradient>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-stop)'} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change offset, stop-opacity while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Stop example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-stop'}>
				<Stop stop-opacity={0.5} offset="50%" />
				<Stop stop-opacity={0.5} offset="50%" />
			</LinearGradient>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-stop)'} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different stop-color values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Stop example">
		<Defs>
			<LinearGradient id={documentationId + '-demo-stop'}>
				<Stop stop-color="#0d9488" offset="0%" />
				<Stop stop-color="#0d9488" offset="100%" />
			</LinearGradient>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-stop)'} />
	</Svg>
{/if}
