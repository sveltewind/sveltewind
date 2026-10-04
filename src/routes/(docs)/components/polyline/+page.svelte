<script lang="ts">
	import { Code, P, Polyline, Svg } from '$components';
	import { classic } from '$lib/themes';

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
			type: 'SVGPolylineElement | null',
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

	const variants = Object.keys(classic.polyline.variants ?? {});

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Polyline.svelte';
	import examples from '$components/ComponentDoc/previews/Polyline.svelte?component-examples&raw';
</script>

<ComponentDoc name="Polyline" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>
			A themed native SVG <Code>polyline</Code> primitive. Render it inside Svg or an appropriate SVG
			parent.
		</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>polyline</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet notes()}
		<P>
			Available variants: {#each variants as variant, index (variant)}{#if index > 0},
				{/if}<Code>{variant}</Code>{/each}.
		</P>
		<P>
			Native SVG attributes are forwarded, including fill, stroke, transforms, and element-specific
			geometry. Classes and explicit attributes let you customize the drawing. Definition and
			accessibility elements do not have a visible box, so their transitions have no visible effect.
		</P>
	{/snippet}
</ComponentDoc>
