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
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onDismiss',
			type: '((id: string) => void) | undefined'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: "'bottom-right'",
			description: 'See usage notes and the component API.',
			name: 'position',
			type: "'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'"
		},
		{
			defaultValue: 'globalTheme',
			description: 'Local Theme instance; defaults to the global theme.',
			name: 'theme',
			type: 'Theme'
		},
		{
			defaultValue: '$bindable([])',
			description: 'See usage notes and the component API.',
			name: 'toasts',
			type: 'ToastItem[]'
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

	const parts = ['toaster'];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Toaster.svelte';
	import examples from '$components/ComponentDoc/previews/Toaster.svelte?component-examples&raw';
</script>

<ComponentDoc name="Toaster" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A positioned stack of notifications controlled through a bindable array.</P>
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
			{'Keep the notifications array in your application and give every item a unique id. Dismissed notifications are removed from the bound array. Each item supports title, message, status, and duration.'}
		</P>
	{/snippet}
</ComponentDoc>
