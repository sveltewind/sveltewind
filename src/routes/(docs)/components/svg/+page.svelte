<script lang="ts">
	import { Circle, Code, CodePreview, P, Svg } from '$components';
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
			type: 'SVGSVGElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Svg.svelte';
	import examples from '$components/ComponentDoc/previews/Svg.svelte?component-examples&raw';
</script>

<ComponentDoc name="Svg" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A primitive SVG container for icons, illustrations, and composed components.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>Native attributes and event handlers are forwarded to the <Code>svg</Code> element.</P>
		<P>
			Native SVG attributes are forwarded to the svg element. Give meaningful graphics an accessible
			name; mark decorative graphics aria-hidden.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<Svg aria-hidden="true" height="32" width="32" viewBox="0 0 32 32" class="text-primary-500">\n\t<Circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2" />\n</Svg>\n'}
				title="+page.svelte"
			>
				<Svg aria-hidden="true" height="32" width="32" viewBox="0 0 32 32" class="text-primary-500">
					<Circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2" />
				</Svg>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
