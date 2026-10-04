<script lang="ts">
	import { Figcaption, Figure, Img } from '$lib/components';
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
	<Figure>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption>Sveltewind logo</Figcaption>
	</Figure>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Figure>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption variants={[documentationVariant]}>Sveltewind logo</Figcaption>
	</Figure>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Figure>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			Sveltewind logo
		</Figcaption>
	</Figure>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Figcaption visibility
	</VisibilityButton>

	<Figure>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption bind:isVisible={exampleVisible}>Sveltewind logo</Figcaption>
	</Figure>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Figure>
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
		<Figcaption>Your own content</Figcaption>
	</Figure>
{/if}
