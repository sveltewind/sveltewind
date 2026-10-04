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
			defaultValue: "'Choose an option'",
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
			type: '((value: string) => void) | undefined'
		},
		{
			defaultValue: '$bindable(false)',
			description: 'See usage notes and the component API.',
			name: 'open',
			type: 'boolean'
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
			defaultValue: "'Search options...'",
			description: 'See usage notes and the component API.',
			name: 'placeholder',
			type: 'string'
		},
		{
			defaultValue: 'false',
			description: 'See usage notes and the component API.',
			name: 'required',
			type: 'boolean'
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
			defaultValue: "$bindable('')",
			description: 'See usage notes and the component API.',
			name: 'value',
			type: 'string'
		},
		{
			defaultValue: '[]',
			description: 'Ordered component theme variants or cross-component references.',
			name: 'variants',
			type: 'string[]'
		}
	];

	const parts = [
		'combobox',
		'comboboxEmpty',
		'comboboxInput',
		'comboboxLabel',
		'comboboxList',
		'comboboxOption',
		'comboboxPanel'
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Combobox.svelte';
	import examples from '$components/ComponentDoc/previews/Combobox.svelte?component-examples&raw';
</script>

<ComponentDoc name="Combobox" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>An editable, searchable single selection with a keyboard-controlled listbox.</P>
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
			{'Type to filter. Use Up/Down, Home/End, and Enter to select; Escape closes without changing the value. Disabled options cannot be selected. name submits the selected value rather than the search text.'}
		</P>
	{/snippet}
</ComponentDoc>
