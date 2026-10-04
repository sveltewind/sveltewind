<script lang="ts">
	import { Abbr } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Abbr title="Hypertext Markup Language">HTML</Abbr>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the plain variant from the component theme."} -->
	<Abbr variants={['plain']} title="Hypertext Markup Language">HTML</Abbr>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Abbr
		class="font-semibold tracking-wide text-primary-600 dark:text-primary-400"
		title="Hypertext Markup Language"
	>
		HTML
	</Abbr>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change title while retaining the default component styling."} -->
	<Abbr title="Cascading Style Sheets">HTML</Abbr>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Abbr title="Hypertext Markup Language">CSS</Abbr>
{/if}
