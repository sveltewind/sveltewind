<script lang="ts">
	import { Code, P } from '$components';
	import { classic } from '$lib/themes';

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
			defaultValue: '[]',
			description: 'See usage notes and the component API.',
			name: 'items',
			type: 'MenuItem[]'
		},
		{
			defaultValue: "'Options'",
			description: 'See usage notes and the component API.',
			name: 'label',
			type: 'string'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onSelect',
			type: '((item: MenuItem) => void) | undefined'
		},
		{
			defaultValue: '$bindable(false)',
			description: 'See usage notes and the component API.',
			name: 'open',
			type: 'boolean'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
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
			defaultValue: '[]',
			description: 'Ordered component theme variants or cross-component references.',
			name: 'variants',
			type: 'string[]'
		}
	];
	const variants = Object.keys(classic.dropdownMenu.variants ?? {});
	const parts = ['dropdownMenu', 'dropdownMenuItem', 'dropdownMenuList', 'dropdownMenuPanel'];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/DropdownMenu.svelte';
	import examples from '$components/ComponentDoc/previews/DropdownMenu.svelte?component-examples&raw';
</script>

<ComponentDoc name="DropdownMenu" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A popover action menu with arrow-key navigation, typeahead, and focus restoration.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Div component. Common
			transitions apply to that root.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			{'Use Up/Down, Home/End, or type a label to move through enabled items. Escape returns focus to the trigger. Tab closes the menu and continues navigation. children replaces the trigger label content.'}
		</P>
	{/snippet}
	{#snippet notes()}
		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}.
		</P>
		<P>
			Available variants: {#each variants as variant, index (variant)}{#if index > 0},
				{/if}<Code>{variant}</Code>{/each}.
		</P>
		<P>
			All presets include this component and its themeable parts. Use class for a local override, or
			update the component and part entries through the theme API.
		</P>
	{/snippet}
</ComponentDoc>
