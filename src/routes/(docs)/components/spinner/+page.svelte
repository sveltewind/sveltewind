<script lang="ts">
	import { Code, CodePreview, H3, P, Spinner } from '$components';

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
			type: 'SVGSVGElement | null',
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
			name: 'strokeWidth',
			type: 'string',
			defaultValue: "'3'",
			description: 'Stroke width of the default spinner circle.'
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
	import Demo from '$components/ComponentDoc/previews/Spinner.svelte';
	import examples from '$components/ComponentDoc/previews/Spinner.svelte?component-examples&raw';
</script>

<ComponentDoc name="Spinner" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>An animated SVG loading indicator.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>svg</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Spinner } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Spinner class="text-primary-500 dark:text-primary-400" role="img" aria-label="Loading" />\n'}
				title="+page.svelte"
			>
				<Spinner class="text-primary-500 dark:text-primary-400" role="img" aria-label="Loading" />
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
