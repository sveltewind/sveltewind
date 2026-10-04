<script lang="ts">
	import { Range } from '$lib/components';
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('range', 'example', 'rounded-xl border border-primary-500/40 p-4');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Range aria-label="Volume" value={40} />
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Range variants={['example']} theme={documentationTheme} aria-label="Volume" value={40} />
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Range class="rounded-xl border border-primary-500/40 p-4" aria-label="Volume" value={40} />
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change step, isLabelVisible while retaining the default component styling."} -->
	<Range isLabelVisible={false} step={10} aria-label="Volume" value={40} />
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Range aria-label="Animation speed" value={40}>
		{#snippet label(data)}<span>Animation speed: {data.value}%</span>{/snippet}
	</Range>
{/if}
