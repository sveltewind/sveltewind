<script lang="ts">
	import { Em, P } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<P>
		This is
		<Em>especially</Em>
		useful.
	</P>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the accent variant from the component theme."} -->
	<P>
		This is
		<Em variants={['accent']}>especially</Em>
		useful.
	</P>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<P>
		This is
		<Em class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">especially</Em>
		useful.
	</P>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Em visibility
	</VisibilityButton>

	<P>
		This is
		<Em bind:isVisible={exampleVisible}>especially</Em>
		useful.
	</P>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<P>
		This is
		<Em>Your own content</Em>
		useful.
	</P>
{/if}
