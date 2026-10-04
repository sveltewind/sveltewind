<script lang="ts">
	import { Code, CodePreview, P, Accordion } from '$components';
	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Content rendered inside the component.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Classes merged with theme styles and variants.'
		},
		{
			name: 'element',
			type: 'HTMLDetailsElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the native element.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Entrance override; falls back to transition.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility; removing the component runs its exit transition.'
		},
		{
			name: 'open',
			type: 'boolean',
			defaultValue: 'false',
			description: 'Bindable expanded state.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Exit override; falls back to transition.'
		},
		{
			name: 'summary',
			type: 'Snippet | string',
			defaultValue: "'Details'",
			description: 'Text or snippet rendered in the native summary.'
		},
		{
			name: 'theme',
			type: 'Theme',
			defaultValue: 'global theme',
			description: 'Local theme override.'
		},
		{
			name: 'transition',
			type: 'TransitionProps',
			defaultValue: '[noopTransition, {}]',
			description: 'Transition function and optional parameters.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variants or references to other theme styles.'
		}
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Accordion.svelte';
	import examples from '$components/ComponentDoc/previews/Accordion.svelte?component-examples&raw';
</script>

<ComponentDoc name="Accordion" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native disclosure section with keyboard support and bindable open state.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>Native attributes and event handlers are forwarded to the <Code>details</Code> element.</P>
		<P>
			Give sections the same native name to allow only one to remain open. Bind open to control
			expansion programmatically. Transitions apply when isVisible changes; native expansion is
			immediate.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<Accordion name="faq" summary="First question">First answer.</Accordion>\n<Accordion name="faq" summary="Second question">Second answer.</Accordion>\n'}
				title="+page.svelte"
			>
				<Accordion name="faq" summary="First question">First answer.</Accordion>
				<Accordion name="faq" summary="Second question">Second answer.</Accordion>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
