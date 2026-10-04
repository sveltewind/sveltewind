<script lang="ts">
	import { Code, P } from '$components';

	const props = [
		{
			defaultValue: 'false',
			description: 'See usage notes and the component API.',
			name: 'allowNavigation',
			type: 'boolean'
		},
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
			defaultValue: '$bindable(0)',
			description: 'See usage notes and the component API.',
			name: 'current',
			type: 'number'
		},
		{
			defaultValue: '$bindable(null)',
			description: 'Bindable reference to the composition root.',
			name: 'element',
			type: 'HTMLOListElement | null'
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
			name: 'onStepChange',
			type: '((index: number) => void) | undefined'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '[]',
			description: 'See usage notes and the component API.',
			name: 'steps',
			type: 'StepperItem[]'
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

	const parts = [
		'stepper',
		'stepperDescription',
		'stepperIndicator',
		'stepperItem',
		'stepperLabel'
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Stepper.svelte';
	import examples from '$components/ComponentDoc/previews/Stepper.svelte?component-examples&raw';
</script>

<ComponentDoc name="Stepper" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A step list with current and completed indicators and optional navigation.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Ol component. Common
			transitions apply to that root.
		</P>

		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			{'current is zero-based. Navigation is disabled by default so your application can validate each step. Set allowNavigation and mark unavailable steps disabled when appropriate.'}
		</P>
	{/snippet}
</ComponentDoc>
