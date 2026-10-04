<script lang="ts">
	import { Audio } from '$lib/components';
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
	<Audio controls aria-label="Audio player">Your browser does not support audio playback.</Audio>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Audio variants={[documentationVariant]} controls aria-label="Audio player">
		Your browser does not support audio playback.
	</Audio>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border-2 border-primary-500/50 shadow-md locally."} -->
	<Audio
		class="rounded-xl border-2 border-primary-500/50 shadow-md"
		controls
		aria-label="Audio player"
	>
		Your browser does not support audio playback.
	</Audio>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change controls, loop while retaining the default component styling."} -->
	<Audio loop={true} controls={true} aria-label="Audio player">
		Your browser does not support audio playback.
	</Audio>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Audio controls aria-label="Audio player">Your project content</Audio>
{/if}
