<script lang="ts">
	import { Img } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Img
		src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		alt="Illustrated sky"
		width="240"
		height="120"
	/>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the rounded variant from the component theme."} -->
	<Img
		variants={['rounded']}
		src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		alt="Illustrated sky"
		width="240"
		height="120"
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border-2 border-primary-500/50 shadow-md locally."} -->
	<Img
		class="rounded-xl border-2 border-primary-500/50 shadow-md"
		src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		alt="Illustrated sky"
		width="240"
		height="120"
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change width, height, loading while retaining the default component styling."} -->
	<Img
		loading="lazy"
		src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		alt="Illustrated sky"
		width={160}
		height={100}
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different alt values."} -->
	<Img
		src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
		alt="A geometric illustration"
		width="240"
		height="120"
	/>
{/if}
