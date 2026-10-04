<script lang="ts">
	import { Code, CodePreview, H3, Main, P } from '$components';

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
			type: 'HTMLElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Main.svelte';
	import examples from '$components/ComponentDoc/previews/Main.svelte?component-examples&raw';
</script>

<ComponentDoc name="Main" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A semantic main element for the primary content of a page.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>main</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Main } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Main class="text-primary-500 dark:text-primary-400">Main content</Main>\n'}
				title="+page.svelte"
			>
				<Main class="text-primary-500 dark:text-primary-400">Main content</Main>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
