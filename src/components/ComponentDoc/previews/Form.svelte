<script lang="ts">
	import { Form, Field, Label, Input, Button } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('form', 'example', 'rounded-xl border border-primary-500/40 p-4');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Form onsubmit={(event) => event.preventDefault()}>
		<Field>
			<Label for={documentationId + '-default-name'}>Name</Label>

			<Input id={documentationId + '-default-name'} name="name" required />
		</Field>

		<Button type="submit">Submit</Button>
	</Form>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Form
		variants={['example']}
		theme={documentationTheme}
		onsubmit={(event) => event.preventDefault()}
	>
		<Field>
			<Label for={documentationId + '-default-name'}>Name</Label>

			<Input id={documentationId + '-default-name'} name="name" required />
		</Field>

		<Button type="submit">Submit</Button>
	</Form>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Form
		class="rounded-xl border border-primary-500/40 p-4"
		onsubmit={(event) => event.preventDefault()}
	>
		<Field>
			<Label for={documentationId + '-default-name'}>Name</Label>

			<Input id={documentationId + '-default-name'} name="name" required />
		</Field>

		<Button type="submit">Submit</Button>
	</Form>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change autocomplete while retaining the default component styling."} -->
	<Form autocomplete="off" onsubmit={(event) => event.preventDefault()}>
		<Field>
			<Label for={documentationId + '-default-name'}>Name</Label>

			<Input id={documentationId + '-default-name'} name="name" required />
		</Field>

		<Button type="submit">Submit</Button>
	</Form>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Form onsubmit={(event) => event.preventDefault()}>
		<Field>
			<Label for={documentationId + '-default-name'}>Your project content</Label>

			<Input id={documentationId + '-default-name'} name="name" required />
		</Field>

		<Button type="submit">Submit</Button>
	</Form>
{/if}
