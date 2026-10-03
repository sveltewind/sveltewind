<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		Defs,
		DocsSection,
		H1,
		H2,
		LinearGradient,
		P,
		Rect,
		Stop,
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
		'<script lang="ts">\n\timport { Defs, LinearGradient, Rect, Stop, Svg } from \'sveltewind/components\';\n</scr' +
		'ipt>\n\n<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="LinearGradient example">\n\t<Defs>\n\t\t<LinearGradient id="demo-linear">\n\t\t\t<Stop offset="0%" stop-color="currentColor" />\n\t\t\t<Stop offset="100%" stop-color="currentColor" stop-opacity={0.2} />\n\t\t</LinearGradient>\n\t</Defs>\n\t<Rect width={100} height={100} fill="url(#demo-linear)" class="text-primary-500" />\n</Svg>\n';
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
			type: 'SVGLinearGradientElement | null',
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

	const variants = Object.keys(classic.linearGradient.variants ?? {});
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P><H1>LinearGradient</H1><P>
		A themed native SVG <Code>linearGradient</Code> primitive. Render it inside Svg or an appropriate
		SVG parent.
	</P>
</DocsSection>
<DocsSection>
	<H2>Usage</H2><CodePreview {code} title="+page.svelte">
		<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="LinearGradient example">
			<Defs>
				<LinearGradient id="demo-linear">
					<Stop offset="0%" stop-color="currentColor" /><Stop
						offset="100%"
						stop-color="currentColor"
						stop-opacity={0.2}
					/>
				</LinearGradient>
			</Defs><Rect width={100} height={100} fill="url(#demo-linear)" class="text-primary-500" />
		</Svg>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>linearGradient</Code>
		element unless handled by the component.
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
