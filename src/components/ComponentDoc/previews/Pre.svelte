<script lang="ts">
	import { Pre, Code } from '$lib/components';
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
	<Pre>
		<Code class="bg-transparent text-current">const hello = 'world';</Code>
	</Pre>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Pre variants={[documentationVariant]}>
		<Code class="bg-transparent text-current">const hello = 'world';</Code>
	</Pre>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Pre class="rounded-xl border border-primary-500/40 p-4">
		<Code class="bg-transparent text-current">const hello = 'world';</Code>
	</Pre>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Pre visibility
	</VisibilityButton>

	<Pre bind:isVisible={exampleVisible}>
		<Code class="bg-transparent text-current">const hello = 'world';</Code>
	</Pre>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Pre>
		<Code class="bg-transparent text-current">Your project content</Code>
	</Pre>
{/if}
