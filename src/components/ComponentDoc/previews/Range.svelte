<script lang="ts">
	import { Range } from '$lib/components';

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
	<Range aria-label="Volume" value={40} />
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Range variants={[documentationVariant]} aria-label="Volume" value={40} />
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
