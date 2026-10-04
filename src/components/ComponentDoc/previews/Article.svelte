<script lang="ts">
	import { Article, H2, P } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Article>
		<H2>A new release</H2>
		<P>Updates from the team.</P>
	</Article>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Article variants={['compact']}>
		<H2>A new release</H2>
		<P>Updates from the team.</P>
	</Article>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Article class="rounded-xl border border-primary-500/40 p-4">
		<H2>A new release</H2>
		<P>Updates from the team.</P>
	</Article>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Article visibility
	</VisibilityButton>

	<Article bind:isVisible={exampleVisible}>
		<H2>A new release</H2>
		<P>Updates from the team.</P>
	</Article>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Article>
		<H2>Your project content</H2>
		<P>Updates from the team.</P>
	</Article>
{/if}
