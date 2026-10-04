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
			type: 'HTMLFormElement | null'
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
			defaultValue: "'Search'",
			description: 'See usage notes and the component API.',
			name: 'label',
			type: 'string'
		},
		{
			defaultValue: "'q'",
			description: 'See usage notes and the component API.',
			name: 'name',
			type: 'string'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onSearch',
			type: '(value: string) => void'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onsubmit',
			type: "HTMLFormAttributes['onsubmit']"
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: "'Search...'",
			description: 'See usage notes and the component API.',
			name: 'placeholder',
			type: 'string'
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

	const parts = ['searchField', 'searchFieldClear', 'searchFieldInput', 'searchFieldSubmit'];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/SearchField.svelte';
	import examples from '$components/ComponentDoc/previews/SearchField.svelte?component-examples&raw';
</script>

<ComponentDoc name="SearchField" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native search form with an input, clear control, and submit action.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Form component. Common
			transitions apply to that root.
		</P>

		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			{'onSearch receives the current query and prevents native submission. Without it, normal form submission is preserved. Native action and method attributes are forwarded to Form.'}
		</P>
	{/snippet}
</ComponentDoc>
