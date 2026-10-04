<script lang="ts">
	import { Track, Video } from '$lib/components';

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
	<Video controls aria-label="Video player">
		<Track kind="captions" label="English" srclang="en" />
	</Video>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Video controls aria-label="Video player">
		<Track variants={[documentationVariant]} kind="captions" label="English" srclang="en" />
	</Video>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Video controls aria-label="Video player">
		<Track
			class="rounded-xl border border-primary-500/40 p-4"
			kind="captions"
			label="English"
			srclang="en"
		/>
	</Video>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change label, srclang, default while retaining the default component styling."} -->
	<Video controls aria-label="Video player">
		<Track default={true} kind="captions" label="English captions" srclang="en" />
	</Video>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different label, srclang, kind values."} -->
	<Video controls aria-label="Video player">
		<Track kind="subtitles" label="French subtitles" srclang="fr" />
	</Video>
{/if}
