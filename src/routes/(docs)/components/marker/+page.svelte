<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		Defs,
		DocsSection,
		H1,
		H2,
		Line,
		Marker,
		P,
		Path,
		Svg,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$components';
	import { classic } from '$lib/themes';

	const code =
		'<script lang="ts">\n\timport { Defs, Line, Marker, Path, Svg } from \'sveltewind/components\';\n</scr' +
		'ipt>\n\n<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Marker example">\n\t<Defs>\n\t\t<Marker\n\t\t\tid="demo-arrow"\n\t\t\tviewBox="0 0 10 10"\n\t\t\trefX={9}\n\t\t\trefY={5}\n\t\t\tmarkerWidth={6}\n\t\t\tmarkerHeight={6}\n\t\t\torient="auto-start-reverse"\n\t\t>\n\t\t\t<Path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" />\n\t\t</Marker>\n\t</Defs>\n\t<Line\n\t\tx1={10}\n\t\ty1={50}\n\t\tx2={80}\n\t\ty2={50}\n\t\tstroke-width={3}\n\t\tmarker-end="url(#demo-arrow)"\n\t\tvariants={[\'outline\', \'primary\']}\n\t/>\n</Svg>\n';
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
			type: 'SVGMarkerElement | null',
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

	const variants = Object.keys(classic.marker.variants ?? {});
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P><H1>Marker</H1><P>
		A themed native SVG <Code>marker</Code> primitive. Render it inside Svg or an appropriate SVG parent.
	</P>
</DocsSection>
<DocsSection>
	<H2>Usage</H2><CodePreview {code} title="+page.svelte">
		<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Marker example">
			<Defs>
				<Marker
					id="demo-arrow"
					viewBox="0 0 10 10"
					refX={9}
					refY={5}
					markerWidth={6}
					markerHeight={6}
					orient="auto-start-reverse"
				>
					<Path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" />
				</Marker>
			</Defs><Line
				x1={10}
				y1={50}
				x2={80}
				y2={50}
				stroke-width={3}
				marker-end="url(#demo-arrow)"
				variants={['outline', 'primary']}
			/>
		</Svg>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>marker</Code> element
		unless handled by the component.
	</P>
	<Card class="self-start overflow-x-auto p-0">
		<Table>
			<Thead>
				<Tr>
					<Th>Prop</Th>
					<Th>Type</Th>
					<Th>Default</Th>
					<Th>Description</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each props as prop (prop.name)}
					<Tr>
						<Td><Code>{prop.name}</Code></Td>
						<Td>{prop.type}</Td>
						<Td>{prop.defaultValue}</Td>
						<Td>{prop.description}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Card>
</DocsSection>
<DocsSection>
	<H2>Styling</H2><P>
		Available variants: {#each variants as variant, index (variant)}{#if index > 0},
			{/if}<Code>{variant}</Code>{/each}.
	</P><P>
		Native SVG attributes are forwarded, including fill, stroke, transforms, and element-specific
		geometry. Classes and explicit attributes let you customize the drawing. Definition and
		accessibility elements do not have a visible box, so their transitions have no visible effect.
	</P>
</DocsSection>
