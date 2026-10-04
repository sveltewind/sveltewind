<script lang="ts">
	import { Field, Label, Input } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('field', 'example', 'rounded-xl border border-primary-500/40 p-4');
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Field>
		<Label for={documentationId + '-default-email'}>Email</Label>

		<Input id={documentationId + '-default-email'} type="email" placeholder="you@example.com" />
	</Field>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Field variants={['example']} theme={documentationTheme}>
		<Label for={documentationId + '-default-email'}>Email</Label>

		<Input id={documentationId + '-default-email'} type="email" placeholder="you@example.com" />
	</Field>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Field class="rounded-xl border border-primary-500/40 p-4">
		<Label for={documentationId + '-default-email'}>Email</Label>

		<Input id={documentationId + '-default-email'} type="email" placeholder="you@example.com" />
	</Field>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Field visibility
	</VisibilityButton>

	<Field bind:isVisible={exampleVisible}>
		<Label for={documentationId + '-default-email'}>Email</Label>

		<Input id={documentationId + '-default-email'} type="email" placeholder="you@example.com" />
	</Field>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Field>
		<Label for={documentationId + '-default-email'}>Your project content</Label>

		<Input id={documentationId + '-default-email'} type="email" placeholder="you@example.com" />
	</Field>
{/if}
