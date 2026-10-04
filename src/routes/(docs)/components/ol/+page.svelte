<script lang="ts">
	import { Code, CodePreview, H3, Li, Ol, P } from '$components';

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
			type: 'HTMLOListElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Ol.svelte';
	import examples from '$components/ComponentDoc/previews/Ol.svelte?component-examples&raw';
</script>

<ComponentDoc name="Ol" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native ordered list for sequential content.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>ol</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Ol, Li } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Ol class="list-decimal pl-6 text-primary-500 dark:text-primary-400">\n\t<Li>Install the package</Li>\n\n\t<Li>Import a component</Li>\n</Ol>\n'}
				title="+page.svelte"
			>
				<Ol class="list-decimal pl-6 text-primary-500 dark:text-primary-400">
					<Li>Install the package</Li><Li>Import a component</Li>
				</Ol>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
