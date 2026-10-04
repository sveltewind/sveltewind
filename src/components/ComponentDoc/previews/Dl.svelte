<script lang="ts">
	import { Dd, Div, Dl, Dt } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Dl>
		<Div>
			<Dt>Framework</Dt>
			<Dd>Svelte</Dd>
		</Div>
		<Div>
			<Dt>Styling</Dt>
			<Dd>Tailwind CSS</Dd>
		</Div>
	</Dl>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Dl variants={['compact']}>
		<Div>
			<Dt>Framework</Dt>
			<Dd>Svelte</Dd>
		</Div>
		<Div>
			<Dt>Styling</Dt>
			<Dd>Tailwind CSS</Dd>
		</Div>
	</Dl>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Dl class="rounded-xl border border-primary-500/40 p-4">
		<Div>
			<Dt>Framework</Dt>
			<Dd>Svelte</Dd>
		</Div>
		<Div>
			<Dt>Styling</Dt>
			<Dd>Tailwind CSS</Dd>
		</Div>
	</Dl>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Dl visibility
	</VisibilityButton>

	<Dl bind:isVisible={exampleVisible}>
		<Div>
			<Dt>Framework</Dt>
			<Dd>Svelte</Dd>
		</Div>
		<Div>
			<Dt>Styling</Dt>
			<Dd>Tailwind CSS</Dd>
		</Div>
	</Dl>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Dl>
		<Div>
			<Dt>Your project content</Dt>
			<Dd>Svelte</Dd>
		</Div>
		<Div>
			<Dt>Styling</Dt>
			<Dd>Tailwind CSS</Dd>
		</Div>
	</Dl>
{/if}
