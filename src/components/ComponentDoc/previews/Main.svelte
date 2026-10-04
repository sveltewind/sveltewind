<script lang="ts">
	import { Main } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Main>Main content</Main>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the center variant from the component theme."} -->
	<Main variants={['center']}>Main content</Main>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Main class="rounded-xl border border-primary-500/40 p-4">Main content</Main>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Main visibility
	</VisibilityButton>

	<Main bind:isVisible={exampleVisible}>Main content</Main>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Main>Your project content</Main>
{/if}
