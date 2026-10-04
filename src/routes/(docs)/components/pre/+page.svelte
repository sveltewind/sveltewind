<script lang="ts">
	import { Code, CodePreview, H3, P, Pre } from '$components';

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
			type: 'HTMLPreElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Pre.svelte';
	import examples from '$components/ComponentDoc/previews/Pre.svelte?component-examples&raw';
</script>

<ComponentDoc name="Pre" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native pre element for preserving whitespace.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>pre</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Pre, Code } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Pre class="text-primary-500 dark:text-primary-400">\n\t<Code class="bg-transparent text-current">const hello = \'world\';</Code>\n</Pre>\n'}
				title="+page.svelte"
			>
				<Pre class="text-primary-500 dark:text-primary-400">
					<Code class="bg-transparent text-current">const hello = 'world';</Code>
				</Pre>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
