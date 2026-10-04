<script lang="ts">
	import { Video } from '$lib/components';

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
	<Video
		controls
		preload="none"
		poster="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		width="240"
		height="120"
		aria-label="Example video player"
	/>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Video
		variants={[documentationVariant]}
		controls
		preload="none"
		poster="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		width="240"
		height="120"
		aria-label="Example video player"
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border-2 border-primary-500/50 shadow-md locally."} -->
	<Video
		class="rounded-xl border-2 border-primary-500/50 shadow-md"
		controls
		preload="none"
		poster="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		width="240"
		height="120"
		aria-label="Example video player"
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change controls, muted, loop while retaining the default component styling."} -->
	<Video
		loop={true}
		muted={true}
		controls={true}
		preload="none"
		poster="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		width="240"
		height="120"
		aria-label="Example video player"
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Video
		controls
		preload="none"
		poster="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		width="240"
		height="120"
		aria-label="Custom video example"
	/>
{/if}
