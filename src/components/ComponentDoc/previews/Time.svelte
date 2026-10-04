<script lang="ts">
	import { Time } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Time datetime="2026-10-03">October 3, 2026</Time>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Time variants={['compact']} datetime="2026-10-03">October 3, 2026</Time>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Time
		class="font-semibold tracking-wide text-primary-600 dark:text-primary-400"
		datetime="2026-10-03"
	>
		October 3, 2026
	</Time>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change datetime while retaining the default component styling."} -->
	<Time datetime="2026-12-01">October 3, 2026</Time>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Time datetime="2026-10-03">December 1, 2026</Time>
{/if}
