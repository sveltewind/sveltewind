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
			type: 'HTMLElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Summary.svelte';
	import examples from '$components/ComponentDoc/previews/Summary.svelte?component-examples&raw';
</script>

<ComponentDoc name="Summary" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A primitive native disclosure toggle for use inside Details.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>Native attributes and event handlers are forwarded to the <Code>summary</Code> element.</P>
		<P>
			Place Summary first inside Details. The browser supplies mouse and keyboard activation and
			disclosure semantics.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<Details>\n\t<Summary class="cursor-pointer font-semibold">Custom toggle style</Summary>\n\n\t<P>Content is revealed when expanded.</P>\n</Details>\n'}
				title="+page.svelte"
			>
				<Details>
					<Summary class="cursor-pointer font-semibold">Custom toggle style</Summary>
					<P>Content is revealed when expanded.</P>
				</Details>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
