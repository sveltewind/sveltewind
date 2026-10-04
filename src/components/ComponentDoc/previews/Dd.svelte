<script lang="ts">
	import { Dd, Dl, Dt } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
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
	<Dl>
		<Dt>Framework</Dt>
		<Dd>Svelte</Dd>
	</Dl>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Dl>
		<Dt>Framework</Dt>
		<Dd variants={[documentationVariant]}>Svelte</Dd>
	</Dl>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Dl>
		<Dt>Framework</Dt>
		<Dd class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">Svelte</Dd>
	</Dl>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Dd visibility
	</VisibilityButton>

	<Dl>
		<Dt>Framework</Dt>
		<Dd bind:isVisible={exampleVisible}>Svelte</Dd>
	</Dl>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Dl>
		<Dt>Framework</Dt>
		<Dd>Your own content</Dd>
	</Dl>
{/if}
