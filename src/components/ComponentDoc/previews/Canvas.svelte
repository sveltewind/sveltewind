<script lang="ts">
	import { Canvas } from '$lib/components';
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
	<Canvas width={320} height={160} aria-label="Drawing area">Canvas drawing area.</Canvas>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Canvas variants={[documentationVariant]} width={320} height={160} aria-label="Drawing area">
		Canvas drawing area.
	</Canvas>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border-2 border-primary-500/50 shadow-md locally."} -->
	<Canvas
		class="rounded-xl border-2 border-primary-500/50 shadow-md"
		width={320}
		height={160}
		aria-label="Drawing area"
	>
		Canvas drawing area.
	</Canvas>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change width, height while retaining the default component styling."} -->
	<Canvas width={240} height={120} aria-label="Drawing area">Canvas drawing area.</Canvas>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different aria-label values."} -->
	<Canvas width={320} height={160} aria-label="Drawing surface for a project sketch">
		Canvas drawing area.
	</Canvas>
{/if}
