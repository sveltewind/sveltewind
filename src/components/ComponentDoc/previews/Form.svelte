<script lang="ts">
	import { Form, Field, Label, Input, Button } from '$lib/components';
	const documentationId = $props.id();

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
	<Form onsubmit={(event) => event.preventDefault()}>
		<Field>
			<Label for={documentationId + '-default-name'}>Name</Label>

			<Input id={documentationId + '-default-name'} name="name" required />
		</Field>

		<Button type="submit">Submit</Button>
	</Form>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Form variants={[documentationVariant]} onsubmit={(event) => event.preventDefault()}>
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
