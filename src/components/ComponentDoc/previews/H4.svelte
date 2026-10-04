<script lang="ts">
	import { H4 } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<H4>Section heading</H4>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the accent variant from the component theme."} -->
	<H4 variants={['accent']}>Section heading</H4>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<H4 class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
		Section heading
	</H4>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle H4 visibility
	</VisibilityButton>

	<H4 bind:isVisible={exampleVisible}>Section heading</H4>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<H4>Your own content</H4>
{/if}
