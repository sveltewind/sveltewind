<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import { Card, Code, H1, H2, H3, P, Table, Tbody, Td, Th, Thead, Tr } from '$lib/components';
	import CodePreview from '../CodePreview/CodePreview.svelte';
	import DocsSection from '../DocsSection/DocsSection.svelte';
	import type { ComponentExamples, ExampleKind } from './types';
	let {
		name,
		description,
		props,
		propNotes,
		usageNotes,
		additionalExamples,
		demo: Demo,
		examples
	}: {
		name: string;
		description: Snippet;
		props: { name: string; type: string; defaultValue?: string; description: string }[];
		propNotes?: Snippet;
		usageNotes?: Snippet;
		additionalExamples?: Snippet;
		demo: Component<{ documentationExample?: ExampleKind; documentationVariant?: string }>;
		examples: ComponentExamples;
	} = $props();
	const variations = ['class', 'props', 'content'] as const;
</script>

<DocsSection>
	<P class="text-primary-500">Components</P>
	<H1>{name}</H1>
	{@render description()}
</DocsSection>

<DocsSection>
	<H2>Props</H2>
	{#if propNotes}{@render propNotes()}{/if}
	<Card class="w-full min-w-0 overflow-x-auto p-0">
		<Table>
			<Thead><Tr><Th>Prop</Th><Th>Type</Th><Th>Default</Th><Th>Description</Th></Tr></Thead>
			<Tbody>
				{#each props as prop (prop.name)}
					<Tr>
						<Td><Code>{prop.name}</Code></Td>
						<Td>{prop.type}</Td>
						<Td>{prop.defaultValue ?? '—'}</Td>
						<Td>{prop.description}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Card>
</DocsSection>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Default usage</H2>
	<P>
		Import {name} from sveltewind/components. This example shows its default styling in a usable context.
	</P>
	<div data-example-preview class="w-full min-w-0">
		<CodePreview code={examples.default.code} title="+page.svelte">
			<Demo documentationExample="default" />
		</CodePreview>
	</div>
	{#if usageNotes}{@render usageNotes()}{/if}
</DocsSection>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Examples</H2>
	<H3>Theme variants</H3>
	<P>Every variant available for {name} in the built-in themes is shown below.</P>
	{#each Object.entries(examples.variants) as [variant, example] (variant)}
		<P><Code>{variant}</Code> — {example.description}</P>
		<div
			data-example-preview
			data-component-example="variant"
			data-variant={variant}
			class="w-full min-w-0"
		>
			<CodePreview code={example.code} title="+page.svelte">
				<Demo documentationExample="variant" documentationVariant={variant} />
			</CodePreview>
		</div>
	{/each}
	{#each variations as kind}
		<H3>{examples[kind].title}</H3>
		<P>{examples[kind].description}</P>
		<div data-example-preview data-component-example={kind} class="w-full min-w-0">
			<CodePreview code={examples[kind].code} title="+page.svelte">
				<Demo documentationExample={kind} />
			</CodePreview>
		</div>
	{/each}
	{#if additionalExamples}{@render additionalExamples()}{/if}
</DocsSection>
