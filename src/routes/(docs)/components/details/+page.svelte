<script lang="ts">
	import { Code, CodePreview, Details, P, Summary } from '$components';
	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Content rendered inside the native element.'
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
			description: 'Bindable reference to the underlying DOM element.'
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
			description: 'Bindable visibility state.'
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
			name: 'theme',
			type: 'Theme',
			defaultValue: 'global theme',
			description: 'Optional local theme override.'
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
	import Demo from '$components/ComponentDoc/previews/Details.svelte';
	import examples from '$components/ComponentDoc/previews/Details.svelte?component-examples&raw';
</script>

<ComponentDoc name="Details" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A primitive native disclosure container with bindable open state.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>Native attributes and event handlers are forwarded to the <Code>details</Code> element.</P>
		<P>
			Use Summary as the first child to provide its accessible toggle. Transitions apply to
			visibility; open uses native disclosure behavior.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<Details open>\n\t<Summary>Initially expanded</Summary>\n\n\t<P>You can also bind open to control this disclosure.</P>\n</Details>\n'}
				title="+page.svelte"
			>
				<Details open>
					<Summary>Initially expanded</Summary>
					<P>You can also bind open to control this disclosure.</P>
				</Details>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
