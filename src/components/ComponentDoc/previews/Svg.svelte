<script lang="ts">
	import { Circle, Svg } from '$lib/components';

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
	<Svg aria-label="Circle illustration" role="img" height="64" width="64" viewBox="0 0 64 64">
		<Circle cx="32" cy="32" r="24" fill="currentColor" />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg
		variants={[documentationVariant]}
		aria-label="Circle illustration"
		role="img"
		height="64"
		width="64"
		viewBox="0 0 64 64"
	>
		<Circle cx="32" cy="32" r="24" fill="currentColor" />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg
		class="text-rose-500 opacity-75"
		aria-label="Circle illustration"
		role="img"
		height="64"
		width="64"
		viewBox="0 0 64 64"
	>
		<Circle cx="32" cy="32" r="24" fill="currentColor" />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change width, height while retaining the default component styling."} -->
	<Svg aria-label="Circle illustration" role="img" height={100} width={160} viewBox="0 0 64 64">
		<Circle cx="32" cy="32" r="24" fill="currentColor" />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg aria-label="Custom svg example" role="img" height="64" width="64" viewBox="0 0 64 64">
		<Circle cx="32" cy="32" r="24" fill="currentColor" />
	</Svg>
{/if}
