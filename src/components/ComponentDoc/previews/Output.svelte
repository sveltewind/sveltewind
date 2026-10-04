<script lang="ts">
	import { Output } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Output aria-label="Calculated total">42</Output>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the accent variant from the component theme."} -->
	<Output variants={['accent']} aria-label="Calculated total">42</Output>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Output
		class="font-semibold tracking-wide text-primary-600 dark:text-primary-400"
		aria-label="Calculated total"
	>
		42
	</Output>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Output visibility
	</VisibilityButton>

	<Output bind:isVisible={exampleVisible} aria-label="Calculated total">42</Output>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Output aria-label="Calculated total">Your own content</Output>
{/if}
