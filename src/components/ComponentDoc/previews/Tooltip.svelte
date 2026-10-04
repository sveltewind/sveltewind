<script lang="ts">
	import { Button, Tooltip } from '$lib/components';
	import { tooltip } from '$lib/attachments';
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant(
		'tooltip',
		'example',
		'rounded-xl border border-primary-500/40 p-4'
	);
	let active = $state(false);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Button
		type="button"
		onmouseenter={() => (active = true)}
		onmouseleave={() => (active = false)}
		onfocus={() => (active = true)}
		onblur={() => (active = false)}
		{@attach tooltip({ content: 'Helpful information' })}
	>
		Hover or focus
	</Button>

	<!-- Mount one Tooltip renderer in your application layout. -->
	<Tooltip isVisible={active} />
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Button
		type="button"
		onmouseenter={() => (active = true)}
		onmouseleave={() => (active = false)}
		onfocus={() => (active = true)}
		onblur={() => (active = false)}
		{@attach tooltip({ content: 'Helpful information' })}
	>
		Hover or focus
	</Button>

	<!-- Mount one Tooltip renderer in your application layout. -->
	<Tooltip isVisible={active} variants={['example']} theme={documentationTheme} />
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Button
		type="button"
		onmouseenter={() => (active = true)}
		onmouseleave={() => (active = false)}
		onfocus={() => (active = true)}
		onblur={() => (active = false)}
		{@attach tooltip({ content: 'Helpful information' })}
	>
		Hover or focus
	</Button>

	<!-- Mount one Tooltip renderer in your application layout. -->
	<Tooltip isVisible={active} class="rounded-xl border border-primary-500/40 p-4" />
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Increase the gap and place the tooltip below its trigger."} -->
	<Button
		type="button"
		onmouseenter={() => (active = true)}
		onmouseleave={() => (active = false)}
		onfocus={() => (active = true)}
		onblur={() => (active = false)}
		{@attach tooltip({ content: 'Helpful information', placement: 'bottom' })}
	>
		Hover or focus
	</Button>

	<!-- Mount one Tooltip renderer in your application layout. -->
	<Tooltip isVisible={active} gap={16} />
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Button
		type="button"
		onmouseenter={() => (active = true)}
		onmouseleave={() => (active = false)}
		onfocus={() => (active = true)}
		onblur={() => (active = false)}
		{@attach tooltip({ content: 'Save your project before leaving this page.' })}
	>
		Saving help
	</Button>

	<!-- Mount one Tooltip renderer in your application layout. -->
	<Tooltip isVisible={active} />
{/if}
