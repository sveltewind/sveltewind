<script lang="ts">
	import { Circle, Code, CodePreview, H3, P } from '$components';

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
			type: 'SVGCircleElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Circle.svelte';
	import examples from '$components/ComponentDoc/previews/Circle.svelte?component-examples&raw';
</script>

<ComponentDoc name="Circle" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed SVG circle for use inside an SVG.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>circle</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Circle } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">\n\t<Circle\n\t\tclass="text-primary-500 dark:text-primary-400"\n\t\tcx="32"\n\t\tcy="32"\n\t\tr="24"\n\t\tfill="currentColor"\n\t/>\n</svg>\n'}
				title="+page.svelte"
			>
				<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
					<Circle
						class="text-primary-500 dark:text-primary-400"
						cx="32"
						cy="32"
						r="24"
						fill="currentColor"
					/>
				</svg>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
