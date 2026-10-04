<script lang="ts">
	import { Datalist, Input, Label, Option } from '$lib/components';
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
	<Label for={documentationId + '-primitive-city'}>City</Label>
	<Input id={documentationId + '-primitive-city'} list={documentationId + '-primitive-cities'} />
	<Datalist id={documentationId + '-primitive-cities'}>
		<Option value="London" />
		<Option value="Tokyo" />
	</Datalist>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Label for={documentationId + '-primitive-city'}>City</Label>
	<Input id={documentationId + '-primitive-city'} list={documentationId + '-primitive-cities'} />
	<Datalist variants={[documentationVariant]} id={documentationId + '-primitive-cities'}>
		<Option value="London" />
		<Option value="Tokyo" />
	</Datalist>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Label for={documentationId + '-primitive-city'}>City</Label>
	<Input id={documentationId + '-primitive-city'} list={documentationId + '-primitive-cities'} />
	<Datalist
		class="rounded-xl border border-primary-500/40 p-4"
		id={documentationId + '-primitive-cities'}
	>
		<Option value="London" />
		<Option value="Tokyo" />
	</Datalist>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Datalist visibility
	</VisibilityButton>

	<Label for={documentationId + '-primitive-city'}>City</Label>
	<Input id={documentationId + '-primitive-city'} list={documentationId + '-primitive-cities'} />
	<Datalist bind:isVisible={exampleVisible} id={documentationId + '-primitive-cities'}>
		<Option value="London" />
		<Option value="Tokyo" />
	</Datalist>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Label for={documentationId + '-primitive-city'}>Design</Label>
	<Input id={documentationId + '-primitive-city'} list={documentationId + '-primitive-cities'} />
	<Datalist id={documentationId + '-primitive-cities'}>
		<Option value="London" />
		<Option value="Tokyo" />
	</Datalist>
{/if}
