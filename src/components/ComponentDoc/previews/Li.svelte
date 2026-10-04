<script lang="ts">
	import { Ul, Li } from '$lib/components';
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant(
		'li',
		'example',
		'font-semibold tracking-wide text-primary-600 dark:text-primary-400'
	);
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Ul>
		<Li>Install Sveltewind</Li>

		<Li>Build your interface</Li>
	</Ul>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Ul>
		<Li variants={['example']} theme={documentationTheme}>Install Sveltewind</Li>

		<Li variants={['example']} theme={documentationTheme}>Build your interface</Li>
	</Ul>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Ul>
		<Li class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			Install Sveltewind
		</Li>

		<Li class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			Build your interface
		</Li>
	</Ul>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Li visibility
	</VisibilityButton>

	<Ul>
		<Li bind:isVisible={exampleVisible}>Install Sveltewind</Li>

		<Li bind:isVisible={exampleVisible}>Build your interface</Li>
	</Ul>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Ul>
		<Li>Your own content</Li>

		<Li>Build your interface</Li>
	</Ul>
{/if}
