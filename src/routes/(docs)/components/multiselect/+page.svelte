<script lang="ts">
	import { Code, P } from '$components';

	const props = [
		{
			defaultValue: 'undefined',
			description: 'Custom content; see the usage notes for its component-specific role.',
			name: 'children',
			type: 'Snippet'
		},
		{
			defaultValue: "''",
			description: 'Tailwind utilities merged after the component theme and variants.',
			name: 'class',
			type: 'string'
		},
		{
			defaultValue: 'false',
			description: 'See usage notes and the component API.',
			name: 'disabled',
			type: 'boolean'
		},
		{
			defaultValue: '$bindable(null)',
			description: 'Bindable reference to the composition root.',
			name: 'element',
			type: 'HTMLDivElement | null'
		},
		{
			defaultValue: 'undefined',
			description: 'Enter transition override.',
			name: 'inTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '$bindable(true)',
			description: 'Bindable visibility state.',
			name: 'isVisible',
			type: 'boolean'
		},
		{
			defaultValue: "'Choose options'",
			description: 'See usage notes and the component API.',
			name: 'label',
			type: 'string'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'name',
			type: 'string | undefined'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onValueChange',
			type: '((value: string[]) => void) | undefined'
		},
		{
			defaultValue: '[]',
			description: 'See usage notes and the component API.',
			name: 'options',
			type: 'SelectOption[]'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: "'Add an option...'",
			description: 'See usage notes and the component API.',
			name: 'placeholder',
			type: 'string'
		},
		{
			defaultValue: "'below'",
			description:
				'Place selected chips below the input or inline in a fixed-height control with horizontal scrolling.',
			name: 'selectionPlacement',
			type: "'inline' | 'below'"
		},
		{
			defaultValue: 'globalTheme',
			description: 'Local Theme instance; defaults to the global theme.',
			name: 'theme',
			type: 'Theme'
		},
		{
			defaultValue: '[noopTransition, {}]',
			description: 'Shared transition function and options.',
			name: 'transition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '$bindable([])',
			description: 'See usage notes and the component API.',
			name: 'value',
			type: 'string[]'
		},
		{
			defaultValue: '[]',
			description: 'Ordered component theme variants or cross-component references.',
			name: 'variants',
			type: 'string[]'
		}
	];

	const parts = [
		'multiSelect',
		'multiSelectChip',
		'multiSelectRemove',
		'multiSelectValues',
		'multiSelectInlineValues',
		'comboboxControl',
		'comboboxInlineInput'
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/MultiSelect.svelte';
	import examples from '$components/ComponentDoc/previews/MultiSelect.svelte?component-examples&raw';
</script>

<ComponentDoc name="MultiSelect" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A searchable selection with removable chips and named form values.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Div component. Common
			transitions apply to that root.
		</P>

		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			Selected values are strings. Each selection becomes a removable chip. <Code>name</Code> creates
			one hidden form input per selected value.
		</P>
		<P>
			Use <Code>selectionPlacement="inline"</Code> to keep chips beside the search input. Chips stay
			on one line with hidden scrollbars and fading overflow edges. Drag the chips or swipe/scroll horizontally
			to see more. The search input reserves at least 10rem and the control stays the same height. The
			default <Code>"below"</Code> preserves the original layout.
		</P>
		<P>
			Options stay open after each selection so you can select several in succession. Use Escape,
			Tab, or click outside to dismiss them.
		</P>
	{/snippet}
</ComponentDoc>
