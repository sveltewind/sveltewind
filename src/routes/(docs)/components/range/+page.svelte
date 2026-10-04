<script lang="ts">
	import { Code, CodePreview, Div, H3, P, Range } from '$components';

	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Accepted for API consistency; not rendered by this component.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLInputElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'fill',
			type: 'Snippet<[RangeData]>',
			defaultValue: 'undefined',
			description: 'Custom fill snippet receiving RangeData.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the opening transition.'
		},
		{
			name: 'isLabelVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Shows the range value label.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility state.'
		},
		{
			name: 'label',
			type: 'Snippet<[RangeData]>',
			defaultValue: 'undefined',
			description: 'Custom value-label snippet receiving RangeData.'
		},
		{
			name: 'max',
			type: 'number',
			defaultValue: '100',
			description: 'Maximum range value.'
		},
		{
			name: 'min',
			type: 'number',
			defaultValue: '0',
			description: 'Minimum range value.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the closing transition.'
		},
		{
			name: 'step',
			type: 'number',
			defaultValue: '1',
			description: 'Increment between valid range values.'
		},
		{
			name: 'theme',
			type: 'Theme',
			defaultValue: 'global theme',
			description: 'Optional local theme override.'
		},
		{
			name: 'thumb',
			type: 'Snippet<[RangeData]>',
			defaultValue: 'undefined',
			description: 'Custom thumb snippet receiving RangeData.'
		},
		{
			name: 'track',
			type: 'Snippet<[RangeData]>',
			defaultValue: 'undefined',
			description: 'Custom track snippet receiving RangeData.'
		},
		{
			name: 'transition',
			type: 'TransitionProps',
			defaultValue: '[noopTransition, {}]',
			description: 'A Svelte transition function and its options.'
		},
		{
			name: 'value',
			type: 'number',
			defaultValue: '0',
			description: 'Bindable current value of the control.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	let volume = $state(40);

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Range.svelte';
	import examples from '$components/ComponentDoc/previews/Range.svelte?component-examples&raw';
</script>

<ComponentDoc name="Range" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native range input with customizable track, fill, thumb, and value label.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>input</Code> element
			unless handled by the component.
		</P>
		<P>
			<Code>RangeData</Code> contains numeric max, min, percent, step, and value fields. Custom track,
			fill, thumb, and label snippets receive this object. Class styles the wrapper; native input attributes
			are forwarded to the range input.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Bind the value</H3>
		<P>Set bounds and a step, then bind the numeric value.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Div, Range, P } from \'sveltewind/components\';\n\n\tlet volume = $state(40);\n</scr' +
					'ipt>\n\n<Div class="w-64">\n\t<Range\n\t\taria-label="Volume"\n\t\tmin={0}\n\t\tmax={100}\n\t\tstep={5}\n\t\tbind:value={volume}\n\t\tisLabelVisible={false}\n\t/>\n\n\t<P>Volume: {volume}</P>\n</Div>\n'}
				title="+page.svelte"
			>
				<Div class="w-64">
					<Range
						aria-label="Volume"
						min={0}
						max={100}
						step={5}
						bind:value={volume}
						isLabelVisible={false}
					/><P>Volume: {volume}</P>
				</Div>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
