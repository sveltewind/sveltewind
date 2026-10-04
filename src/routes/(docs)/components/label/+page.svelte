<script lang="ts">
	import { Code, CodePreview, Field, H3, Input, Label, P } from '$components';

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
			type: 'HTMLLabelElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Label.svelte';
	import examples from '$components/ComponentDoc/previews/Label.svelte?component-examples&raw';
</script>

<ComponentDoc name="Label" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native label for associating text with a form control.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>label</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Field, Label, Input } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Field>\n\t<Label class="text-primary-500 dark:text-primary-400" for="default-label">Your name</Label>\n\n\t<Input id="default-label" />\n</Field>\n'}
				title="+page.svelte"
			>
				<Field>
					<Label class="text-primary-500 dark:text-primary-400" for="default-label">
						Your name
					</Label><Input id="default-label" />
				</Field>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
