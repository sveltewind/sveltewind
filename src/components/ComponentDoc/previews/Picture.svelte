<script lang="ts">
	import { Img, Picture, Source } from '$lib/components';
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
	<Picture>
		<Source media="(prefers-color-scheme: dark)" srcset="/images/logo-dark.svg" />
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
	</Picture>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Picture variants={[documentationVariant]}>
		<Source media="(prefers-color-scheme: dark)" srcset="/images/logo-dark.svg" />
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
	</Picture>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border-2 border-primary-500/50 shadow-md locally."} -->
	<Picture class="rounded-xl border-2 border-primary-500/50 shadow-md">
		<Source media="(prefers-color-scheme: dark)" srcset="/images/logo-dark.svg" />
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
	</Picture>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Picture visibility
	</VisibilityButton>

	<Picture bind:isVisible={exampleVisible}>
		<Source media="(prefers-color-scheme: dark)" srcset="/images/logo-dark.svg" />
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
	</Picture>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Picture aria-label="Custom picture example">
		<Source media="(prefers-color-scheme: dark)" srcset="/images/logo-dark.svg" />
		<Img src="/images/logo-light.svg" alt="Sveltewind" class="w-48" />
	</Picture>
{/if}
