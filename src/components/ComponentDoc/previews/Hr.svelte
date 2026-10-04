<script lang="ts">
	import { Hr, P } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<P>First section.</P>
	<Hr />
	<P>Next section.</P>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the accent variant from the component theme."} -->
	<P>First section.</P>
	<Hr variants={['accent']} />
	<P>Next section.</P>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<P>First section.</P>
	<Hr class="rounded-xl border border-primary-500/40 p-4" />
	<P>Next section.</P>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Hr visibility
	</VisibilityButton>

	<P>First section.</P>
	<Hr bind:isVisible={exampleVisible} />
	<P>Next section.</P>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<P>Overview</P>
	<Hr />
	<P>Next section.</P>
{/if}
