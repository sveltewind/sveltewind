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
			type: 'HTMLDivElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Field.svelte';
	import examples from '$components/ComponentDoc/previews/Field.svelte?component-examples&raw';
</script>

<ComponentDoc name="Field" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A vertical div for grouping a label and form control.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>div</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Field, Label, Input } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Field class="text-primary-500 dark:text-primary-400">\n\t<Label for="default-email">Email</Label>\n\n\t<Input id="default-email" type="email" placeholder="you@example.com" />\n</Field>\n'}
				title="+page.svelte"
			>
				<Field class="text-primary-500 dark:text-primary-400">
					<Label for="default-email">Email</Label><Input
						id="default-email"
						type="email"
						placeholder="you@example.com"
					/>
				</Field>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
