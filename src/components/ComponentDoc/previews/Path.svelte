<script lang="ts">
	import { Path, Svg } from '$lib/components';
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
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Path example">
		<Path d="M10 50 L40 80 L90 20" stroke-width={5} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Path example">
		<Path variants={[documentationVariant]} d="M10 50 L40 80 L90 20" stroke-width={5} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Path example">
		<Path class="text-rose-500 opacity-75" d="M10 50 L40 80 L90 20" stroke-width={5} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change stroke-width while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Path example">
		<Path d="M10 50 L40 80 L90 20" stroke-width={6} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different stroke values."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Path example">
		<Path stroke="#0d9488" d="M10 50 L40 80 L90 20" stroke-width={5} />
	</Svg>
{/if}
