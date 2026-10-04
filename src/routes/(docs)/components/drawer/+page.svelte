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
			defaultValue: '$bindable(null)',
			description: 'Bindable reference to the composition root.',
			name: 'element',
			type: 'HTMLDialogElement | null'
		},
		{
			defaultValue: 'undefined',
			description: 'Enter transition override.',
			name: 'inTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '$bindable(false)',
			description: 'Bindable visibility; starts closed.',
			name: 'isVisible',
			type: 'boolean'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: "'right'",
			description: 'See usage notes and the component API.',
			name: 'position',
			type: "'left' | 'right'"
		},
		{
			defaultValue: 'true',
			description: 'See usage notes and the component API.',
			name: 'showClose',
			type: 'boolean'
		},
		{
			defaultValue: 'globalTheme',
			description: 'Local Theme instance; defaults to the global theme.',
			name: 'theme',
			type: 'Theme'
		},
		{
			defaultValue: "'Panel'",
			description: 'See usage notes and the component API.',
			name: 'title',
			type: 'string'
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

	const parts = ['drawer', 'drawerClose', 'drawerContent', 'drawerHeader', 'drawerTitle'];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Drawer.svelte';
	import examples from '$components/ComponentDoc/previews/Drawer.svelte?component-examples&raw';
</script>

<ComponentDoc name="Drawer" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A side panel built on the native modal Dialog component.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Dialog component. Common
			transitions apply to that root.
		</P>

		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			{'isVisible controls the native modal dialog. Escape dismisses it; native Dialog supplies focus containment. Use position to choose the left or right edge.'}
		</P>
	{/snippet}
</ComponentDoc>
