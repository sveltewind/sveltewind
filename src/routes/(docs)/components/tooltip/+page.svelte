<script lang="ts">
	import { Code, P } from '$components';
	import { tooltip } from '$lib/attachments';
	const props = [
		{
			name: 'children',
			type: 'Snippet<[string]>',
			defaultValue: 'undefined',
			description: 'Custom renderer receiving string tooltip content.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLDivElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'gap',
			type: 'number',
			defaultValue: '8',
			description: 'Distance in pixels between the trigger and floating content.'
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
			description: 'Controls visibility while the tooltip store has an active tooltip.'
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
	import Demo from '$components/ComponentDoc/previews/Tooltip.svelte';
	import examples from '$components/ComponentDoc/previews/Tooltip.svelte?component-examples&raw';
</script>

<ComponentDoc name="Tooltip" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A shared tooltip renderer driven by the tooltip attachment.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>div</Code> element unless
			handled by the component.
		</P>
		<P>
			Mount one Tooltip in your application layout. Content and placement come from the tooltip
			attachment; the renderer uses the shared tooltip store.
		</P>
	{/snippet}
</ComponentDoc>
