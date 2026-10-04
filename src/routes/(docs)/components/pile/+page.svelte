<script lang="ts">
	import { Card, Code, CodePreview, H3, P, Pile } from '$components';

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
	import Demo from '$components/ComponentDoc/previews/Pile.svelte';
	import examples from '$components/ComponentDoc/previews/Pile.svelte?component-examples&raw';
</script>

<ComponentDoc name="Pile" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A grid that stacks its direct children in the same cell.</P>
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
				code={'<script lang="ts">\n\timport { Pile, Card } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Pile class="text-primary-500 dark:text-primary-400">\n\t<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card>\n\n\t<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>\n</Pile>\n'}
				title="+page.svelte"
			>
				<Pile class="text-primary-500 dark:text-primary-400">
					<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card><Card
						class="bg-gray-50 dark:bg-gray-950"
					>
						On top
					</Card>
				</Pile>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
