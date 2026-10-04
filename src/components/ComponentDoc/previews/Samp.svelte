<script lang="ts">
	import { P, Samp } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<P>
		Result:
		<Samp>Build completed.</Samp>
	</P>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the muted variant from the component theme."} -->
	<P>
		Result:
		<Samp variants={['muted']}>Build completed.</Samp>
	</P>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<P>
		Result:
		<Samp class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			Build completed.
		</Samp>
	</P>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Samp visibility
	</VisibilityButton>

	<P>
		Result:
		<Samp bind:isVisible={exampleVisible}>Build completed.</Samp>
	</P>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<P>
		Result:
		<Samp>Your own content</Samp>
	</P>
{/if}
