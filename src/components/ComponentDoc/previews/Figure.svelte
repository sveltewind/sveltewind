<script lang="ts">
	import { Figcaption, Figure, Img } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Figure>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption>Sveltewind logo</Figcaption>
	</Figure>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the bordered variant from the component theme."} -->
	<Figure variants={['bordered']}>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption>Sveltewind logo</Figcaption>
	</Figure>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Figure class="rounded-xl border border-primary-500/40 p-4">
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption>Sveltewind logo</Figcaption>
	</Figure>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Figure visibility
	</VisibilityButton>

	<Figure bind:isVisible={exampleVisible}>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption>Sveltewind logo</Figcaption>
	</Figure>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Figure>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption>Your project content</Figcaption>
	</Figure>
{/if}
