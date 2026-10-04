<script lang="ts">
	import { Code, Col, Colgroup, P, Td, Th } from '$components';

	const props = [
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLTableColElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the opening transition.'
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
			description: 'Overrides the closing transition.'
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
			description: 'A Svelte transition function and its options.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Col.svelte';
	import examples from '$components/ComponentDoc/previews/Col.svelte?component-examples&raw';
</script>

<ComponentDoc name="Col" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed native <Code>col</Code> primitive.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>col</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			Use Col inside Colgroup. Column width and background styling work here; put cell padding and
			text alignment on Th or Td.
		</P>
	{/snippet}
</ComponentDoc>
