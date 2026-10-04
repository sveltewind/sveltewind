<script lang="ts">
	import { Br, P } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<P>
		First line
		<Br />
		Second line
	</P>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the hidden variant from the component theme."} -->
	<P>
		First line
		<Br variants={['hidden']} />
		Second line
	</P>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<P>
		First line
		<Br class="rounded-xl border border-primary-500/40 p-4" />
		Second line
	</P>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Br visibility
	</VisibilityButton>

	<P>
		First line
		<Br bind:isVisible={exampleVisible} />
		Second line
	</P>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<P>
		First line<Br />
		Second line
	</P>
{/if}
