<script lang="ts">
	import { Code, CodePreview, H3, Option, P, Select } from '$components';

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
			type: 'HTMLOptionElement | null',
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
			name: 'value',
			type: 'any',
			defaultValue: "''",
			description: 'Value of the control.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Option.svelte';
	import examples from '$components/ComponentDoc/previews/Option.svelte?component-examples&raw';
</script>

<ComponentDoc name="Option" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native option for use inside a select.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>option</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Select, Option } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Select aria-label="Choose a plan">\n\t<Option class="text-primary-500 dark:text-primary-400" value="starter">Starter</Option>\n\n\t<Option value="team">Team</Option>\n</Select>\n'}
				title="+page.svelte"
			>
				<Select aria-label="Choose a plan">
					<Option class="text-primary-500 dark:text-primary-400" value="starter">
						Starter
					</Option><Option value="team">Team</Option>
				</Select>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
