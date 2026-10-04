<script lang="ts">
	import { Field, Label, Input } from '$lib/components';
	const documentationId = $props.id();
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
	<Field>
		<Label for={documentationId + '-default-label'}>Your name</Label>

		<Input id={documentationId + '-default-label'} />
	</Field>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Field>
		<Label variants={[documentationVariant]} for={documentationId + '-default-label'}>
			Your name
		</Label>

		<Input id={documentationId + '-default-label'} />
	</Field>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Field>
		<Label
			class="font-semibold tracking-wide text-primary-600 dark:text-primary-400"
			for={documentationId + '-default-label'}
		>
			Your name
		</Label>

		<Input id={documentationId + '-default-label'} />
	</Field>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Label visibility
	</VisibilityButton>

	<Field>
		<Label bind:isVisible={exampleVisible} for={documentationId + '-default-label'}>
			Your name
		</Label>

		<Input id={documentationId + '-default-label'} />
	</Field>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Field>
		<Label for={documentationId + '-default-label'}>Your own content</Label>

		<Input id={documentationId + '-default-label'} />
	</Field>
{/if}
