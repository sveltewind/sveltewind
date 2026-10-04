<script lang="ts">
	import { Button, Code, CodePreview, H3, P, Popover } from '$components';

	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Content snippet rendered by the component.'
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
			defaultValue: 'false',
			description: 'Bindable visibility state.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the closing transition.'
		},
		{
			name: 'placement',
			type: 'Placement',
			defaultValue: "'bottom'",
			description: 'Preferred side of the trigger; Popover can flip to fit the viewport.'
		},
		{
			name: 'popover',
			type: "Exclude<HTMLAttributes<HTMLDivElement>['popover'], '' | null | undefined>",
			defaultValue: "'auto'",
			description: 'Native popover mode.'
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
			name: 'trigger',
			type: 'Snippet<[TriggerProps]>',
			defaultValue: 'defaultTrigger',
			description: 'Trigger snippet receiving button attributes; spread them onto your button.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Popover.svelte';
	import examples from '$components/ComponentDoc/previews/Popover.svelte?component-examples&raw';
</script>

<ComponentDoc name="Popover" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>An anchored native popover with a trigger, placement, and bindable visibility.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>div</Code> element unless
			handled by the component.
		</P>
		<P>
			<Code>TriggerProps</Code> contains button IDs, ARIA attributes, native popover target attributes,
			onclick, style, and type. Spread the complete object onto the trigger. The default trigger reads
			Toggle popover.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom trigger</H3>
		<P>
			Spread the provided trigger attributes onto your button to preserve toggling and positioning.
		</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Popover, Button, P } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Popover placement="right" gap={12} aria-label="More information">\n\t{#snippet trigger(props)}\n\t\t<Button {...props}>More information</Button>\n\t{/snippet}\n\t<P>Content beside the trigger.</P>\n</Popover>\n'}
				title="+page.svelte"
			>
				<Popover placement="right" gap={12} aria-label="More information">
					{#snippet trigger(props)}<Button {...props}>More information</Button>{/snippet}<P>
						Content beside the trigger.
					</P>
				</Popover>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
